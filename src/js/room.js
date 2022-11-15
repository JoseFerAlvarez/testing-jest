class Room {
    constructor(name, bookings, rate, discount) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }

    setBookings(bookings) {
        this.bookings = bookings;
    }

    isOccupied(date) {
        let occupied = false;

        if (this.bookings.length > 0) {
            this.bookings.forEach((booking) => {
                if (date.getTime() >= booking.checkIn.getTime() && date.getTime() < booking.checkOut.getTime()) {
                    occupied = true;
                }
            })
        }

        return occupied;
    };

    occupancyPercentage(startDate, endDate) {
        let count = 0;

        if (this.bookings.length > 0) {
            this.bookings.forEach((booking) => {
                if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() < endDate.getTime()) {
                    count++;
                }
            })
        }
        return (count * 100) / this.bookings.length;
    }

    static totalOccupancyPercentage = (rooms, startDate, endDate) => {
        let count = 0;
        let bookingsCount = 0;

        if (rooms.length > 0) {
            rooms.forEach((room) => {
                if (room.bookings.length > 0) {
                    room.bookings.forEach((booking) => {
                        bookingsCount++;
                        if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() < endDate.getTime()) {
                            count++;
                        }
                    });
                }
            });
        }
        return (count * 100) / bookingsCount;
    }

    static availableRooms = (rooms, startDate, endDate) => {
        let availablerooms = [];

        rooms.forEach((room) => {
            if (roomIsAvailable(room, startDate, endDate)) {
                availablerooms.push(room);
            }
        });

        return availablerooms;
    }
}

function roomIsAvailable(room, startDate, endDate) {
    let available = true;

    room.bookings.forEach((booking) => {
        if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() < endDate.getTime()) {
            available = false;
        }
    });

    return available;
}

module.exports = Room;
