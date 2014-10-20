from django.db import models
from django.contrib.auth.models import AbstractUser


class Passenger(AbstractUser):
    pass


class Airport(models.Model):
    airport_code = models.CharField(max_length=3, primary_key=True)
    airport_name = models.CharField(max_length=45)
    airport_location = models.CharField(max_length=45)

    def __unicode__(self):
        return '{} ({}) at {}'.format(
            self.airport_name,
            self.airport_code,
            self.airport_location,
        )


class FlightSchedule(models.Model):
    flight_number = models.SmallIntegerField(primary_key=True)
    origin_airport_code = models.ForeignKey(Airport, related_name='origin_airport_code')
    destination_airport_code = models.ForeignKey(Airport, related_name='destination_airport_code')
    departure_date_time = models.DateTimeField()
    arrival_date_time = models.DateTimeField()

    def __unicode__(self):
        return 'flight {} from {} to {}'.format(
            self.flight_number,
            self.origin_airport_code,
            self.destination_airport_code
        )


class ItineraryReservation(models.Model):
    classes = (
        ('First Class', 'First Class'),
        ('Business Class', 'Business Class'),
        ('Economy', 'Economy')
    )
    reservation_id = models.SmallIntegerField(primary_key=True)
    travel_class = models.CharField(choices=classes, max_length=30)
    departure_date = models.ForeignKey(FlightSchedule, related_name='departure_date')
    passenger_id = models.ForeignKey(Passenger)

    def __unicode__(self):
        return 'Reservation {} traveling {} reserved {}'.format(
            self.reservation_id,
            self.travel_class,
            self.date_of_reservation
        )


class Leg(models.Model):
    flight_number = models.ForeignKey(FlightSchedule, related_name='flight_numbers')
    origin_airport_code = models.ForeignKey(FlightSchedule, related_name='origin_airport_codes')
    destination_airport_code = models.ForeignKey(FlightSchedule, related_name='destination_airport_codes')

    def __unicode__(self):
        return 'flight {} from {} to {}'.format(
            self.flight_number,
            self.origin_airport_code,
            self.destination_airport_code
        )


class Itinerary(models.Model):
    reservations = models.ForeignKey(ItineraryReservation)
    legs = models.ForeignKey(Leg)


class ItineraryLeg(models.Model):
    reservation_id = models.ForeignKey(Itinerary, related_name='reservation_id')
    leg_id = models.ForeignKey(Leg, related_name='leg_ids')
