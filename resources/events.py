from flask import jsonify, Blueprint

from flask_restful import Resource, Api, request, fields, marshal

from models import Event
import math

event_fields = {
    'id': fields.String,
    'source': fields.String,
    'name': fields.String,
    'description': fields.String,
    'url': fields.String,
    'photoUrl': fields.String,
    'sourceId': fields.String,
    'time': fields.DateTime,
    'timeLocal': fields.String,
    'country': fields.String,
    'city': fields.String,
    'lat': fields.Float,
    'lon': fields.Float,
}


def convert_blob(event):
    event.description = event.description.tobytes()
    return event


class EventsUpcomingList(Resource):
    def get(self):
        limit = int(request.args["limit"]) if "limit" in request.args else 12
        offset = int(request.args["offset"]) if "offset" in request.args else 0
        page_number = offset / limit + 1

        all_events = Event.select().order_by(Event.created)
        page_count = math.ceil(len(all_events) / limit)

        events = [marshal(convert_blob(event), event_fields)
                  for event in Event.select().order_by(Event.created).paginate(page_number, limit)]

        return jsonify({
            'page_count': page_count,
            'count': len(all_events),
            'result': events
        })


class EventsUpcomingCityList(Resource):
    def get(self):
        limit = int(request.args["limit"]) if "limit" in request.args else 12
        offset = int(request.args["offset"]) if "offset" in request.args else 0
        page_number = offset / limit + 1
        country = request.args["country"] if "country" in request.args else ""
        city = request.args["city"] if "city" in request.args else ""

        all_events = Event.select().where(
            Event.country.contains(country)).where(Event.city.contains(city)).order_by(Event.created)
        page_count = math.ceil(len(all_events) / limit)

        events = Event.select().where(Event.country.contains(country)).where(Event.city.contains(city)).order_by(
            Event.created).paginate(page_number, limit)

        events_data = [marshal(convert_blob(event), event_fields)
                       for event in events]

        return jsonify({
            'page_count': page_count,
            'count': len(all_events),
            'result': events_data
        })


events_api = Blueprint('resources.events', __name__)
api = Api(events_api)
api.add_resource(
    EventsUpcomingList,
    '/events/upcoming',
    endpoint='events_upcoming'
)
api.add_resource(
    EventsUpcomingCityList,
    '/events/upcoming/city',
    endpoint='events_upcoming_city'
)
