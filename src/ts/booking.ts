import { Room } from "./room";

class Booking {
    name: string;
    email: string;
    checkIn: Date;
    checkOut: Date;
    discount: number;
    room: Room;

    constructor(name: string, email: string, checkIn: Date, checkOut: Date, discount: number, room: Room) {
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }

    getFee = (): number => {
        const roomprice: number = this.room.rate;
        const roomdiscount: number = this.room.discount;
        const bookingdiscount: number = this.discount;

        return (((roomprice * (100 - roomdiscount)) / 100) * (100 - bookingdiscount)) / 100;
    }
}

export { Booking };
