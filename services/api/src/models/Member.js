"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Family = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const familySchema = new mongoose_1.default.Schema({
    status: {
        type: String,
        enum: ["start", "completed"],
        default: "start",
    },
    percentComplete: {
        type: Number,
        default: 0
    },
    contact: {
        phoneOne: {
            name: {
                type: String,
                default: null,
            },
            number: {
                type: String,
                default: null,
            },
            safeToLeaveMsg: {
                type: Boolean,
                default: null,
            },
        },
        phoneTwo: {
            name: {
                type: String,
                default: null,
            },
            number: {
                type: String,
                default: null,
            },
            safeToLeaveMsg: {
                type: Boolean,
                default: null,
            },
        },
        emergencyContact: {
            name: {
                type: String,
                default: null,
            },
            number: {
                type: String,
                default: null,
            },
        },
    },
    vehicle: {
        make: {
            type: String,
            default: null,
        },
        year: {
            type: String,
            default: null,
        },
        color: {
            type: String,
            default: null,
        },
        model: {
            type: String,
            default: null,
        },
        liscensePlate: {
            type: String,
            default: null,
        },
    },
    lastPermanentAddress: {
        type: String,
        default: null,
    },
    homeless: {
        priorLocation: {
            type: String,
            default: null,
        },
        currentLocation: String,
        numTimesHomeless: {
            type: String,
            default: null,
        },
        totalLenHomeless: {
            type: String,
            default: null,
        },
        homelessStartDate: {
            type: Date,
            default: null,
        },
        lengthAtPriorLocation: {
            type: String,
            default: null,
        },
        lengthAtCurrentLocation: {
            type: String,
            default: null,
        },
    },
    insurance: {
        pregnancies: {
            isPregnant: {
                type: Boolean,
                default: null,
            },
            ifYesWho: {
                type: String,
                default: null,
            },
            dueDate: {
                type: Date,
                default: null,
            },
        },
        hasInsurance: {
            type: Boolean,
            default: null,
        },
        membersCovered: {
            type: Number,
            default: null,
        },
        healthInsuranceType: {
            type: String,
            default: null,
        },
    },
    domesticViolence: {
        fleeingDv: {
            type: Boolean,
            default: null,
        },
        YWCAcontacted: {
            type: Boolean,
            default: null,
        },
        hasCourtOrder: {
            type: Boolean,
            default: null,
        },
        dateLastIncident: {
            type: Date,
            default: null,
        },
        anonymityPreferred: {
            type: Boolean,
            default: null,
        },
    },
    pets: {
        shelter: {
            type: Boolean,
            default: null,
        },
        dog: {
            type: Boolean,
            default: null,
        },
        cat: {
            type: Boolean,
            default: null,
        },
        serviceAnimal: {
            type: Boolean,
            default: null,
        },
        supportAnimal: {
            type: Boolean,
            default: null,
        },
        nameOne: {
            type: String,
            default: null,
        },
        nameTwo: {
            type: String,
            default: null,
        },
    },
}, { timestamps: true });
exports.Family = (0, mongoose_1.model)("Family", familySchema);
