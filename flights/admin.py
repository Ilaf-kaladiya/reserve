from django.contrib import admin

# Register your models here.
from flights.models import Airport, FlightSchedule, ItineraryReservation, Passenger


@admin.register(Passenger)
class PassengerAdmin(admin.ModelAdmin):
    pass


@admin.register(ItineraryReservation)
class ItineraryReservationAdmin(admin.ModelAdmin):
    pass


@admin.register(FlightSchedule)
class FlightScheduleAdmin(admin.ModelAdmin):
    pass


@admin.register(Airport)
class AirportAdmin(admin.ModelAdmin):
    pass
