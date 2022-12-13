import { Room } from "../room";
import { Booking } from "../booking";


/*Is occupied tests*/
test("Has no bookings", (): void => {
    const RoomDuplex: Room = new Room("Duplex", [], 5000, 20);
    expect(RoomDuplex.isOccupied(new Date("11/18/2022"))).toBe(false);
});

test("Is not occupied", (): void => {
    const RoomDuplex: Room = new Room("Duplex", [], 5000, 20);

    const Booking1: Booking = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, RoomDuplex);
    const Booking2: Booking = new Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/13/2022"), 20, RoomDuplex);
    const Booking3: Booking = new Booking("Isabel", "isabel@gmail.com", new Date("11/14/2022"), new Date("11/16/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3]);

    expect(RoomDuplex.isOccupied(new Date("11/18/2022"))).toBe(false);
});

test("Is occupied", (): void => {
    const RoomDuplex: Room = new Room("Duplex", [], 5000, 20);

    const Booking1: Booking = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, RoomDuplex);
    const Booking2: Booking = new Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/14/2022"), 20, RoomDuplex);
    const Booking3: Booking = new Booking("Isabel", "isabel@gmail.com", new Date("11/15/2022"), new Date("11/16/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3]);

    expect(RoomDuplex.isOccupied(new Date("11/13/2022"))).toBe(true);
});

/*Percentage of occupancy tests*/
test("Percentage occupancy", (): void => {
    const RoomDuplex: Room = new Room("Duplex", [], 5000, 20);

    const Booking1: Booking = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);
    const Booking2: Booking = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, RoomDuplex);
    const Booking3: Booking = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/18/2022"), 70, RoomDuplex);
    const Booking4: Booking = new Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3, Booking4]);

    expect(RoomDuplex.occupancyPercentage(new Date("11/12/2022"), new Date("11/19/2022"))).toBe(75);
});

test("Total percentage occupancy", (): void => {
    const Room1: Room = new Room("Duplex", [], 5000, 20);
    const Booking1: Booking = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    const Booking2: Booking = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    const Booking3: Booking = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    const Booking4: Booking = new Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);

    const Room2: Room = new Room("Duplex", [], 5000, 20);
    const Booking5: Booking = new Booking("Antonio", "antonio@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room2);
    const Booking6: Booking = new Booking("Maria", "maria@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room2);
    Room2.setBookings([Booking5, Booking6]);

    const Rooms: Room[] = [Room1, Room2];

    expect(Room.totalOccupancyPercentage(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toBe(50);
});

/*Available rooms tests*/
test("Available rooms", (): void => {
    const Room1: Room = new Room("Duplex", [], 5000, 20);
    const Booking1: Booking = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    const Booking2: Booking = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    const Booking3: Booking = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    const Booking4: Booking = new Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);

    const Room2: Room = new Room("Duplex", [], 5000, 20);
    const Booking5: Booking = new Booking("Antonio", "Antonio@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room2);
    const Booking6: Booking = new Booking("Maria", "maria@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room2);
    const Booking7: Booking = new Booking("Johana", "johana@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room2);
    Room2.setBookings([Booking5, Booking6, Booking7]);

    const Rooms: Room[] = [Room1, Room2];

    expect(Room.availableRooms(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toMatchObject([])
});

test("Available rooms", (): void => {
    const Room1: Room = new Room("Duplex", [], 5000, 20);
    const Booking1: Booking = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    const Booking2: Booking = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    const Booking3: Booking = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    const Booking4: Booking = new Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);

    const Room2: Room = new Room("Duplex", [], 5000, 20);
    const Booking5: Booking = new Booking("Maria", "maria@gmail.com", new Date("11/08/2022"), new Date("11/09/2022"), 50, Room2);
    Room2.setBookings([Booking5]);

    const Rooms: Room[] = [Room1, Room2];


    expect(Room.availableRooms(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toMatchObject([Room2])
});

/*Booking fee tests*/
test("Booking fee with discounts", (): void => {
    const RoomDuplex: Room = new Room("Duplex", [], 5000, 20);
    const Booking1: Booking = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);

    RoomDuplex.setBookings([Booking1]);

    expect(Booking1.getFee()).toBe(6000);
});

test("Booking fee with discounts", (): void => {
    const RoomDuplex: Room = new Room("Duplex", [], 30000, 10);
    const Booking1: Booking = new Booking("Jose", "jose@gmail.com", new Date("11/10/2022"), new Date("11/15/2022"), 20, RoomDuplex);

    RoomDuplex.setBookings([Booking1]);

    expect(Booking1.getFee()).toBe(108000);
});
