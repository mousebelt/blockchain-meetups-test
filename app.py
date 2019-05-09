from flask import Flask, jsonify

import config
import models
from models import Group, Event
from resources.events import events_api

import _thread

import meetup.api
import json
import requests
from datetime import datetime
import uuid

app = Flask(__name__)
app.register_blueprint(events_api)


def have_keywords(data):
    keywords = [
        "blockchain",
        "cryptocurrency",
        "ethereum",
        "bitcoin",
    ]
    for keyword in keywords:
        if keyword in data:
            return True
    return False


def seed_event(obj):
    if (not have_keywords(obj["name"])) and (not have_keywords(obj["description"])):
        return

    # create group
    url = "https://www.meetup.com/" + obj["group"]["urlname"]
    try:
        photo_url = obj["group"]["group_photo"]["thumb_link"]
    except KeyError:
        photo_url = ""

    group, group_created = Group.get_or_create(
        id=str(uuid.uuid4()),
        source="MEETUP",
        name=obj["group"]["name"],
        url=url,
        photoUrl=photo_url,
        sourceId=obj["group"]["id"]
    )

    if group_created:
        print("A new group '{}' is created successfully!".format(group.name))

    # create event
    try:
        photo_url = obj["photo_url"]
    except KeyError:
        photo_url = ""

    time_local = datetime.utcfromtimestamp(
        int(obj["time"])/1000 + int(obj["utc_offset"])/1000).strftime("%m/%d/%Y, %H:%M:%S")

    try:
        country = obj["venue"]["country"]
    except KeyError:
        country = ""

    try:
        city = obj["venue"]["city"]
    except KeyError:
        city = ""

    try:
        lat = obj["venue"]["lat"]
    except KeyError:
        lat = ""

    try:
        lon = obj["venue"]["lon"]
    except KeyError:
        lon = ""

    try:
        event, event_created = Event.get_or_create(
            id=str(uuid.uuid4()),
            source="MEETUP",
            name=obj["name"],
            description=obj["description"],
            url=obj["event_url"],
            photoUrl=photo_url,
            sourceId=obj["id"],
            time=datetime.fromtimestamp(int(obj["time"])/1000),
            timeLocal=time_local,
            country=country,
            city=city,
            lat=lat,
            lon=lon,
            group_id=group.id
        )

        if event_created:
            print("A new event '{}' is created successfully! ".format(event.name))
    except Exception as err:
        print(err)


def get_stream_events_thread():
    meetup_client = meetup.api.Client(config.MEETUP_API_KEY)
    response = requests.get(
        "https://stream.meetup.com/2/open_events", stream=True)
    response.encoding = 'utf-8'

    for line in response.iter_lines():
        event = json.loads(line)
        # print(line)
        # print(event['id'], event['name'])
        seed_event(event)


def run_app():
    app.run(debug=config.DEBUG, host=config.HOST, port=config.PORT)


if __name__ == '__main__':
    try:
        models.initialize()
        print("db connected successfully!")
    except Exception as e:
        print("db connection error - " + str(e))

    _thread.start_new_thread(get_stream_events_thread, ())
    run_app()
