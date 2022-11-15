const Room = require("../js/room");
const Booking = require("../js/booking");


/*Is occupied tests*/
test("Has no bookings", () => {
    const RoomDuplex = new Room("Duplex", [], 5000, 20);
    expect(RoomDuplex.isOccupied("11/18/2022")).toBe(false);
});

test("Is not occupied", () => {
    const RoomDuplex = new Room("Duplex", [], 5000, 20);

    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, RoomDuplex);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/13/2022"), 20, RoomDuplex);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/14/2022"), new Date("11/16/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3]);

    expect(RoomDuplex.isOccupied(new Date("11/18/2022"))).toBe(false);
});

test("Is occupied", () => {
    const RoomDuplex = new Room("Duplex", [], 5000, 20);

    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, RoomDuplex);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/14/2022"), 20, RoomDuplex);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/15/2022"), new Date("11/16/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3]);

    expect(RoomDuplex.isOccupied(new Date("11/13/2022"))).toBe(true);
});

/*Percentage of occupancy tests*/
test("Percentage occupancy", () => {
    const RoomDuplex = new Room("Duplex", [], 5000, 20);

    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, RoomDuplex);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/18/2022"), 70, RoomDuplex);
    const Booking4 = new Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3, Booking4]);

    expect(RoomDuplex.occupancyPercentage(new Date("11/12/2022"), new Date("11/19/2022"))).toBe(75);
});

test("Total percentage occupancy", () => {
    const Room1 = new Room("Duplex", [], 5000, 20);
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    const Booking4 = new Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);

    const Room2 = new Room("Duplex", [], 5000, 20);
    const Booking5 = new Booking("Antonio", "antonio@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room2);
    const Booking6 = new Booking("Maria", "maria@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room2);
    Room2.setBookings([Booking5, Booking6]);

    const Rooms = [Room1, Room2];

    expect(Room.totalOccupancyPercentage(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toBe(50);
});

/*Available rooms tests*/
test("Available rooms", () => {
    const Room1 = new Room("Duplex", [], 5000, 20);
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    const Booking4 = new Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);

    const Room2 = new Room("Duplex", [], 5000, 20);
    const Booking5 = new Booking("Antonio", "Antonio@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room2);
    const Booking6 = new Booking("Maria", "maria@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room2);
    const Booking7 = new Booking("Johana", "johana@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room2);
    Room2.setBookings([Booking5, Booking6, Booking7]);

    const Rooms = [Room1, Room2];

    expect(Room.availableRooms(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toMatchObject([])
});

test("Available rooms", () => {
    const Room1 = new Room("Duplex", [], 5000, 20);
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    const Booking4 = new Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);

    const Room2 = new Room("Duplex", [], 5000, 20);
    const Booking5 = new Booking("Maria", "maria@gmail.com", new Date("11/08/2022"), new Date("11/09/2022"), 50, Room2);
    Room2.setBookings([Booking5]);

    const Rooms = [Room1, Room2];


    expect(Room.availableRooms(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toMatchObject([Room2])
});

/*Booking fee tests*/
test("Booking fee with discounts", () => {
    const RoomDuplex = new Room("Duplex", [], 5000, 20);
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);

    RoomDuplex.setBookings([Booking1]);

    expect(Booking1.getFee()).toBe(2000);
});
