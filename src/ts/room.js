"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(name, bookings, rate, discount) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }
    Room.prototype.setBookings = function (bookings) {
        this.bookings = bookings;
    };
    Room.prototype.isOccupied = function (date) {
        var occupied = false;
        if (this.bookings.length > 0) {
            this.bookings.forEach(function (booking) {
                if (date.getTime() >= booking.checkIn.getTime() && date.getTime() < booking.checkOut.getTime()) {
                    occupied = true;
                }
            });
        }
        return occupied;
    };
    ;
    Room.prototype.occupancyPercentage = function (startDate, endDate) {
        var count = 0;
        if (this.bookings.length > 0) {
            this.bookings.forEach(function (booking) {
                if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() < endDate.getTime()) {
                    count++;
                }
            });
        }
        return (count * 100) / this.bookings.length;
    };
    Room.totalOccupancyPercentage = function (rooms, startDate, endDate) {
        var count = 0;
        var bookingsCount = 0;
        if (rooms.length > 0) {
            rooms.forEach(function (room) {
                if (room.bookings.length > 0) {
                    room.bookings.forEach(function (booking) {
                        bookingsCount++;
                        if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() < endDate.getTime()) {
                            count++;
                        }
                    });
                }
            });
        }
        return (count * 100) / bookingsCount;
    };
    Room.availableRooms = function (rooms, startDate, endDate) {
        var availablerooms = [];
        rooms.forEach(function (room) {
            if (roomIsAvailable(room, startDate, endDate)) {
                availablerooms.push(room);
            }
        });
        return availablerooms;
    };
    return Room;
}());
exports.Room = Room;
function roomIsAvailable(room, startDate, endDate) {
    var available = true;
    room.bookings.forEach(function (booking) {
        if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() < endDate.getTime()) {
            available = false;
        }
    });
    return available;
}
