class Booking {
    constructor(name, email, checkIn, checkOut, discount) {
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = "";
    }

    setRoom(room) {
        this.room = room;
    }

    getFee = () => {

    }
}

module.exports = Booking;
