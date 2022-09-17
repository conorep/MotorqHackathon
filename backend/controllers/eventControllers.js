import {qlConnection} from "../index";

/*get*/
export const getAllEvents = () => (
    sqlConnection.query('SELECT * FROM events ORDER BY eventStart;', function (err, res, fields) {
        if(err) throw err;
        else (res => res.parseJSON )
        Object.keys(res).forEach(function(key) {
            var row = res[key];
            console.log(row.eventID)
        });
    } )
)

/*export const getSpecificEvent = (eventID) => {
    sqlConnection.query(`SELECT * FROM events WHERE eventID = ${eventID};`, async function (err, res, fields) {
        if(err) {throw err;}
        console.log(res);
    } )
}*/
