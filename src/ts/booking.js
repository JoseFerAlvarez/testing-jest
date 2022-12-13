"use strict";
exports.__esModule = true;
exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking(name, email, checkIn, checkOut, discount, room) {
        var _this = this;
        this.getFee = function () {
            var roomprice = _this.room.rate;
            var roomdiscount = _this.room.discount;
            var bookingdiscount = _this.discount;
            return (((roomprice * (100 - roomdiscount)) / 100) * (100 - bookingdiscount)) / 100;
        };
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }
    return Booking;
}());
exports.Booking = Booking;
