"use strict";
exports.__esModule = true;
exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking(name, email, checkIn, checkOut, discount, room) {
        var _this = this;
        this.getFee = function () {
            var roomprice = _this.room.rate;
            var roomdiscount = (100 - _this.room.discount) / 100;
            var bookingdiscount = (100 - _this.discount) / 100;
            var days = ((_this.checkOut.getTime() - _this.checkIn.getTime()) / (1000 * 60 * 60 * 24));
            return ((roomprice * roomdiscount) * bookingdiscount) * days;
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
