import { Booking } from "./booking";

class Room {
    name: string;
    bookings: Booking[];
    rate: number;
    discount: number;

    constructor(name: string, bookings: Booking[], rate: number, discount: number) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }

    setBookings(bookings: Booking[]) {
        this.bookings = bookings;
    }

    isOccupied(date: Date): boolean {
        let occupied: boolean = false;

        if (this.bookings.length > 0) {
            this.bookings.forEach((booking: Booking) => {
                if (date.getTime() >= booking.checkIn.getTime() && date.getTime() < booking.checkOut.getTime()) {
                    occupied = true;
                }
            })
        }

        return occupied;
    };

    occupancyPercentage(startDate: Date, endDate: Date): number {
        let count: number = 0;

        if (this.bookings.length > 0) {
            this.bookings.forEach((booking: Booking) => {
                if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() < endDate.getTime()) {
                    count++;
                }
            })
        }
        return (count * 100) / this.bookings.length;
    }

    static totalOccupancyPercentage = (rooms: Room[], startDate: Date, endDate: Date): number => {
        let count: number = 0;
        let bookingsCount: number = 0;

        if (rooms.length > 0) {
            rooms.forEach((room: Room) => {
                if (room.bookings.length > 0) {
                    room.bookings.forEach((booking: Booking) => {
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

    static availableRooms = (rooms: Room[], startDate: Date, endDate: Date): Room[] => {
        let availablerooms: Room[] = [];

        rooms.forEach((room: Room) => {
            if (roomIsAvailable(room, startDate, endDate)) {
                availablerooms.push(room);
            }
        });

        return availablerooms;
    }
}

function roomIsAvailable(room: Room, startDate: Date, endDate: Date): boolean {
    let available: boolean = true;

    room.bookings.forEach((booking: Booking) => {
        if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() < endDate.getTime()) {
            available = false;
        }
    });

    return available;
}

export { Room };
