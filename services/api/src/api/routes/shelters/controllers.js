"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReservations = exports.createReservation = exports.createShelter = void 0;
const Reservation_1 = require("../../../models/Reservation");
const Shelter_1 = require("../../../models/Shelter");
const createShelter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newShelter = yield Shelter_1.Shelter.create(req.body);
        res.status(200).json({ shelter: newShelter });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.createShelter = createShelter;
const createReservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newReservation = yield Reservation_1.Reservation.create(req.body);
        res.status(200).json({
            reservation: newReservation,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
});
exports.createReservation = createReservation;
const getReservations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let reservations = yield Reservation_1.Reservation.find({ shelterId: id }).populate('userId');
        res.status(200).json({
            reservations,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
});
exports.getReservations = getReservations;
