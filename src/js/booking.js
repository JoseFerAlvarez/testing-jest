class Booking {
    constructor(name, email, checkIn, checkOut, discount, room) {
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }

    getFee = () => {
        const roomprice = this.room.rate;
        const roomdiscount = this.room.discount;
        const bookingdiscount = this.discount;

        return (((roomprice * (100 - roomdiscount)) / 100) * (100 - bookingdiscount)) / 100
    }
}

module.exports = Booking;
