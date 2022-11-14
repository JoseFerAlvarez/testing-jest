const Room = require("../js/room");
const Booking = require("../js/booking");

test("Is not bookings", () => {
    const RoomDuplex = new Room("Duplex", [], 5000, 20);
    expect(RoomDuplex.isOccupied("11/18/2022")).toBe(false);
});

test("Is not occupied", () => {
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/13/2022"), 20);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/14/2022"), new Date("11/16/2022"), 70);

    const RoomDuplex = new Room("Duplex", [Booking1, Booking2, Booking3], 5000, 20);

    expect(RoomDuplex.isOccupied(new Date("11/18/2022"))).toBe(false);
});

test("Is occupied", () => {
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/14/2022"), 20);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/15/2022"), new Date("11/16/2022"), 70);

    const RoomDuplex = new Room("Duplex", [Booking1, Booking2, Booking3], 5000, 20);

    expect(RoomDuplex.isOccupied(new Date("11/12/2022"))).toBe(true);
});

test("Percentage occupancy", () => {
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70);
    const Booking4 = new Booking("Isabel", "isabel@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70);

    const RoomDuplex = new Room("Duplex", [Booking1, Booking2, Booking3, Booking4], 5000, 20);

    console.log(RoomDuplex.occupancyPercentage(new Date("11/12/2022"), new Date("11/19/2022")));

    expect(RoomDuplex.occupancyPercentage(new Date("11/12/2022"), new Date("11/19/2022"))).toBe(75);
});
