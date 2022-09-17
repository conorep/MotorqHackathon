import express from "express";


/*post*/
export const registerUser = (req, res) => {

}

export const eventRegistration = (req, res) => {

}


/*export const getSpecificEvent = (eventID) => {
    `SELECT *
     FROM events
     WHERE eventID = ${eventID};`
}*/

export const getUserEvents = (userID) => {
    `SELECT eventID, eventName, eventStart, eventEnd, eventLocation
     FROM userSchedule
     WHERE userID = ${userID};`
}


