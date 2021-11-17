"use strict";
// NEEDS TO BE UPDATED WITH OUR FILENAMES AND SUCH
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const routes = express_1.default.Router();
routes.get("/reviews", async (req, res) => {
    //update with our route
    try {
        const client = await (0, db_1.getClient)();
        const results = await client
            .db()
            .collection("booksearch")
            .find()
            .toArray();
        res.json(results); // send JSON results
    }
    catch (err) {
        console.error("FAIL", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = routes;
//# sourceMappingURL=bookRoutes.js.map