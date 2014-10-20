from django.contrib import admin

# Register your models here.
from flights.models import ItineraryLeg, Airport, Itinerary, FlightSchedule, Leg, ItineraryReservation, Passenger


@admin.register(Passenger)
class PassengerAdmin(admin.ModelAdmin):
    pass


@admin.register(ItineraryReservation)
class ItineraryReservationAdmin(admin.ModelAdmin):
    pass


@admin.register(Leg)
class LegAdmin(admin.ModelAdmin):
    pass


@admin.register(FlightSchedule)
class FlightScheduleAdmin(admin.ModelAdmin):
    pass


@admin.register(Itinerary)
class ItineraryAdmin(admin.ModelAdmin):
    pass


@admin.register(Airport)
class AirportAdmin(admin.ModelAdmin):
    pass


@admin.register(ItineraryLeg)
class ItineraryLegAdmin(admin.ModelAdmin):
    pass