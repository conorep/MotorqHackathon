import express from "express";
import {sqlConnection} from "../index";

const router = express.Router();

router.get("/", (req, res) => {
    sqlConnection.query('SELECT * FROM events ORDER BY eventStart;', function (err, results, fields){
        if(err) throw err;
        res.send(results);
})});

/*router
    .get("/events", getAllEvents);
    /!*.get("/", getSpecificEvent(eventID));*!/
    /!*.get("/events/:userID", getUserEvents)*!/
    /!*.post("/", registerUser)
    .post("/", eventRegistration);*!/*/

export default router;
