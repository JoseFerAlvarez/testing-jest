class Room {
    constructor(name, bookings, rate, discount) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }

    isOccupied(date) {
        let occupied = false;

        if (this.bookings.length > 0) {
            this.bookings.forEach((booking) => {
                if (booking.checkIn.getTime() === date.getTime()) {
                    occupied = true;
                }
            })
        }

        return occupied;
    };

    occupancyPercentage = (startDate, endDate) => {
        let count = 0;

        if (this.bookings.length > 0) {
            this.bookings.forEach((booking) => {
                if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() <= endDate.getTime()) {
                    count++;
                }
            })
        }
        return (count * 100) / this.bookings.length;
    }

    static totalOccupancyPercentage = (rooms, startDate, endDate) => {

    }

    static availableRooms = (rooms, startDate, endDate) => {

    }
}

module.exports = Room;
