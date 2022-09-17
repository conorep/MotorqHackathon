import 'dotenv/config';
import express from "express";
import bodyparser from "body-parser";
import mysql from "mysql";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import eventRoutes from "./routes/eventRoutes";

const app = express();

mysql.Promise = global.Promise;

//bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//cors setup
app.use(cors());

// app.use("/admin", adminRoutes);
/*app.use("/user", userRoutes);*/
app.use("/events", eventRoutes);

/*MOVE THIS OUT OF THIS FILE. maybe make something dynamic if there's time in admin page...?*/
export const sqlConnection = mysql.createConnection({
    host: 'sql3.freesqldatabase.com',
    user: 'sql3520306',
    password: 'AAM6UPH6kv',
    database: 'sql3520306'
});

/*use something like this if I want to keep open connection. otherwise use implicit open/end with a query*//*
sqlConnection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
    console.log('connected as id ' + sqlConnection.threadId);
    sqlConnection.query('SELECT * FROM events ORDER BY eventStart', function (err, res) {
        if(err) {
            throw err;
        }
        // else (res => res.parseJSON )
        Object.keys(res).forEach(function(key) {
            var row = res[key];
            console.log(row.eventID)
        });
    } )
    /!*    sqlConnection.end();
        console.log('connection closed.');*!/
});
*/


app.get('/', (req, res) => {
    res.send(`Hello there. You've reached our Express server's address.`);
});

//TODO: remove test route
app.get('/testreq', (req, res) => {
    res.json({
        name: "Conor",
        age: 35
    })
});

//this actually opens up the server/starts the server on port 4001
app.listen(process.env.PORT, () => {
    console.log(`Your server is running on port ${process.env.PORT}.`);
});
