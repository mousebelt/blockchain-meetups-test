import datetime
from peewee import *
import config

DATABASE = PostgresqlDatabase(
    config.DB_NAME, user=config.DB_USER, password=config.DB_PASSWORD, host=config.DB_HOST, port=config.DB_PORT)

SOURCE_CHOICES = [(1, "MEETUP"), (2, "EVENTBRITE")]


class enum_field(IntegerField):
    def __init__(self, choices, *args, **kwargs):
        self.to_db = {v: k for k, v in choices}
        self.from_db = {k: v for k, v in choices}
        super(IntegerField, self).__init__(*args, **kwargs)

    def db_value(self, value):
        return self.to_db[value]

    def python_value(self, value):
        return self.from_db[value]


class my_table(Model):
    fruit = enum_field(null=False, choices=SOURCE_CHOICES)


class Group(Model):
    id = CharField(primary_key=True)
    created = DateTimeField(default=datetime.datetime.now)
    source = enum_field(null=False, choices=SOURCE_CHOICES)
    name = CharField()
    url = CharField()
    photoUrl = CharField()
    sourceId = CharField()

    class Meta:
        database = DATABASE


class Event(Model):
    id = CharField(primary_key=True)
    created = DateTimeField(default=datetime.datetime.now)
    source = enum_field(null=False, choices=SOURCE_CHOICES)
    name = CharField()
    description = BlobField()
    url = CharField()
    photoUrl = CharField()
    sourceId = CharField()
    time = DateTimeField()
    timeLocal = CharField()
    country = CharField()
    city = CharField()
    lat = FloatField()
    lon = FloatField()
    group = ForeignKeyField(Group, related_name='events')

    class Meta:
        database = DATABASE


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Group, Event], safe=True)
    DATABASE.close()
