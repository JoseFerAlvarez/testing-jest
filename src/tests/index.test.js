const Room = require("../index");
let Booking = require("../index");

test("Is occupied", () => {
    const Booking1 = new Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, Room);
    const Booking2 = new Booking("Ramon", "ramon@gmail.com", new Date("11/12/2022"), new Date("11/13/2022"), 20, Room);
    const Booking3 = new Booking("Isabel", "isabel@gmail.com", new Date("11/12/2022"), new Date("11/16/2022"), 70, Room);

    const RoomDuplex = new Room("Duplex", [Booking1, Booking2, Booking3], 5000, 20);

    expect(RoomDuplex.isOccupied("11/18/2022")).toBe(false);
});
