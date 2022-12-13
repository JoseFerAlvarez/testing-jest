"use strict";
exports.__esModule = true;
var room_1 = require("../room");
var booking_1 = require("../booking");
/*Is occupied tests*/
test("Has no bookings", function () {
    var RoomDuplex = new room_1.Room("Duplex", [], 5000, 20);
    expect(RoomDuplex.isOccupied(new Date("11/18/2022"))).toBe(false);
});
test("Is not occupied", function () {
    var RoomDuplex = new room_1.Room("Duplex", [], 5000, 20);
    var Booking1 = new booking_1.Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, RoomDuplex);
    var Booking2 = new booking_1.Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/13/2022"), 20, RoomDuplex);
    var Booking3 = new booking_1.Booking("Isabel", "isabel@gmail.com", new Date("11/14/2022"), new Date("11/16/2022"), 70, RoomDuplex);
    RoomDuplex.setBookings([Booking1, Booking2, Booking3]);
    expect(RoomDuplex.isOccupied(new Date("11/18/2022"))).toBe(false);
});
test("Is occupied", function () {
    var RoomDuplex = new room_1.Room("Duplex", [], 5000, 20);
    var Booking1 = new booking_1.Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/12/2022"), 50, RoomDuplex);
    var Booking2 = new booking_1.Booking("Ramon", "ramon@gmail.com", new Date("11/13/2022"), new Date("11/14/2022"), 20, RoomDuplex);
    var Booking3 = new booking_1.Booking("Isabel", "isabel@gmail.com", new Date("11/15/2022"), new Date("11/16/2022"), 70, RoomDuplex);
    RoomDuplex.setBookings([Booking1, Booking2, Booking3]);
    expect(RoomDuplex.isOccupied(new Date("11/13/2022"))).toBe(true);
});
/*Percentage of occupancy tests*/
test("Percentage occupancy", function () {
    var RoomDuplex = new room_1.Room("Duplex", [], 5000, 20);
    var Booking1 = new booking_1.Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);
    var Booking2 = new booking_1.Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, RoomDuplex);
    var Booking3 = new booking_1.Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/18/2022"), 70, RoomDuplex);
    var Booking4 = new booking_1.Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, RoomDuplex);
    RoomDuplex.setBookings([Booking1, Booking2, Booking3, Booking4]);
    expect(RoomDuplex.occupancyPercentage(new Date("11/12/2022"), new Date("11/19/2022"))).toBe(75);
});
test("Total percentage occupancy", function () {
    var Room1 = new room_1.Room("Duplex", [], 5000, 20);
    var Booking1 = new booking_1.Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    var Booking2 = new booking_1.Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    var Booking3 = new booking_1.Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    var Booking4 = new booking_1.Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);
    var Room2 = new room_1.Room("Duplex", [], 5000, 20);
    var Booking5 = new booking_1.Booking("Antonio", "antonio@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room2);
    var Booking6 = new booking_1.Booking("Maria", "maria@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room2);
    Room2.setBookings([Booking5, Booking6]);
    var Rooms = [Room1, Room2];
    expect(room_1.Room.totalOccupancyPercentage(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toBe(50);
});
/*Available rooms tests*/
test("Available rooms", function () {
    var Room1 = new room_1.Room("Duplex", [], 5000, 20);
    var Booking1 = new booking_1.Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    var Booking2 = new booking_1.Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    var Booking3 = new booking_1.Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    var Booking4 = new booking_1.Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);
    var Room2 = new room_1.Room("Duplex", [], 5000, 20);
    var Booking5 = new booking_1.Booking("Antonio", "Antonio@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room2);
    var Booking6 = new booking_1.Booking("Maria", "maria@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room2);
    var Booking7 = new booking_1.Booking("Johana", "johana@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room2);
    Room2.setBookings([Booking5, Booking6, Booking7]);
    var Rooms = [Room1, Room2];
    expect(room_1.Room.availableRooms(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toMatchObject([]);
});
test("Available rooms", function () {
    var Room1 = new room_1.Room("Duplex", [], 5000, 20);
    var Booking1 = new booking_1.Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, Room1);
    var Booking2 = new booking_1.Booking("Ramon", "ramon@gmail.com", new Date("11/15/2022"), new Date("11/18/2022"), 20, Room1);
    var Booking3 = new booking_1.Booking("Isabel", "isabel@gmail.com", new Date("11/18/2022"), new Date("11/19/2022"), 70, Room1);
    var Booking4 = new booking_1.Booking("Jesus", "jesus@gmail.com", new Date("11/19/2022"), new Date("11/20/2022"), 70, Room1);
    Room1.setBookings([Booking1, Booking2, Booking3, Booking4]);
    var Room2 = new room_1.Room("Duplex", [], 5000, 20);
    var Booking5 = new booking_1.Booking("Maria", "maria@gmail.com", new Date("11/08/2022"), new Date("11/09/2022"), 50, Room2);
    Room2.setBookings([Booking5]);
    var Rooms = [Room1, Room2];
    expect(room_1.Room.availableRooms(Rooms, new Date("11/12/2022"), new Date("11/19/2022"))).toMatchObject([Room2]);
});
/*Booking fee tests*/
test("Booking fee with discounts", function () {
    var RoomDuplex = new room_1.Room("Duplex", [], 5000, 20);
    var Booking1 = new booking_1.Booking("Jose", "jose@gmail.com", new Date("11/12/2022"), new Date("11/15/2022"), 50, RoomDuplex);
    RoomDuplex.setBookings([Booking1]);
    expect(Booking1.getFee()).toBe(2000);
});
