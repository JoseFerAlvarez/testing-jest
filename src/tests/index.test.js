const Room = require("../js/room");
const Booking = require("../js/booking");

test("Is not bookings", () => {
    const RoomDuplex = new Room("Duplex", 5000, 20);
    expect(RoomDuplex.isOccupied("11/18/2022")).toBe(false);
});

test("Is not occupied", () => {
    const RoomDuplex = new Room("Duplex", 5000, 20);

    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, RoomDuplex);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/13/2022"), 20, RoomDuplex);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/14/2022"), new Date("11/16/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3]);

    expect(RoomDuplex.isOccupied(new Date("11/18/2022"))).toBe(false);
});

test("Is occupied", () => {
    const RoomDuplex = new Room("Duplex", 5000, 20);

    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, RoomDuplex);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/14/2022"), 20, RoomDuplex);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/15/2022"), new Date("11/16/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3]);

    expect(RoomDuplex.isOccupied(new Date("11/13/2022"))).toBe(true);
});

test("Percentage occupancy", () => {
    const RoomDuplex = new Room("Duplex", 5000, 20);

    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, RoomDuplex);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/18/2022"), 70, RoomDuplex);
    const Booking4 = new Booking("Isabel", "isabel@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, RoomDuplex);

    RoomDuplex.setBookings([Booking1, Booking2, Booking3, Booking4]);

    expect(RoomDuplex.occupancyPercentage(new Date("11/12/2022"), new Date("11/19/2022"))).toBe(75);
});

test("Total percentage occupancy", () => {
    const RoomDuplex = new Room("Duplex", 5000, 20);
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, RoomDuplex);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, RoomDuplex);
    const Booking4 = new Booking("Isabel", "isabel@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, RoomDuplex);
    RoomDuplex.setBookings([Booking1, Booking2, Booking3, Booking4]);

    const RoomDuplex2 = new Room("Duplex", 5000, 20);
    const Booking5 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);
    const Booking6 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, RoomDuplex);
    const Booking7 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, RoomDuplex);
    const Booking8 = new Booking("Isabel", "isabel@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, RoomDuplex);
    RoomDuplex.setBookings([Booking5, Booking6, Booking7, Booking8]);

    const Rooms = [RoomDuplex, RoomDuplex2];

    expect(Room.totalOccupancyPercentage(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toBe(50);
});

test("Available rooms", () => {
    const RoomDuplex = new Room("Duplex", 5000, 20);
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, RoomDuplex);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, RoomDuplex);
    const Booking4 = new Booking("Isabel", "isabel@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, RoomDuplex);
    RoomDuplex.setBookings([Booking1, Booking2, Booking3, Booking4]);

    const RoomDuplex2 = new Room("Duplex", 5000, 20);
    const Booking5 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex2);
    const Booking6 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, RoomDuplex2);
    const Booking7 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, RoomDuplex2);
    const Booking8 = new Booking("Isabel", "isabel@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, RoomDuplex2);
    RoomDuplex2.setBookings([Booking5, Booking6, Booking7, Booking8]);

    const Rooms = [RoomDuplex, RoomDuplex2];

    expect(Room.availableRooms(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toBe(0);
});

test("booking fee", () => {
    const RoomDuplex = new Room("Duplex", 5000, 20);
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);

    expect(Booking1.getFee()).toBe(2000);
});
