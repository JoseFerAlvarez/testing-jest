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
        const roomdiscount: number = (100 - this.room.discount) / 100;
        const bookingdiscount: number = (100 - this.discount) / 100;

        const days: number = ((this.checkOut.getTime() - this.checkIn.getTime()) / (1000 * 60 * 60 * 24));

        return ((roomprice * roomdiscount) * bookingdiscount) * days;
    }
}

export { Booking };
