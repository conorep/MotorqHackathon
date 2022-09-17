CREATE TABLE users (
    userID int AUTO_INCREMENT NOT NULL,
    fName VARCHAR(255) NOT NULL,
    lName VARCHAR(255) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin int NOT NULL DEFAULT 0,
    PRIMARY KEY(userID)
    );
	
CREATE TABLE userEvents (
	userID int NOT NULL,
	eventID int NOT NULL,
	eventCode int NOT NULL UNIQUE,
	FOREIGN KEY(userID) REFERENCES users(userID),
	FOREIGN KEY(eventID) REFERENCES events(eventID)
	);
	
CREATE TABLE events (
	eventID int NOT NULL AUTO_INCREMENT,
	eventName VARCHAR(255) NOT NULL,
	eventStart DATETIME NOT NULL,
	eventEnd DATETIME NOT NULL,
	eventCapacity int NOT NULL,
	attendanceCount int NOT NULL DEFAULT 0,
	eventLocation LONGTEXT NOT NULL,
	PRIMARY KEY(eventID)
	);
	
	
* view that tells me how many more can come in *
CREATE VIEW openCapacity AS
SELECT eventID, eventName, (eventCapacity - attendanceCount) AS openSpots
FROM events;

* view that helps me select all of a users events *
CREATE VIEW userSchedule AS
SELECT userID, events.eventID, eventName, eventStart, eventEnd, eventLocation
FROM userEvents, events
WHERE userEvents.eventID = events.eventID;

SELECT eventID, eventName, eventStart, eventEnd, eventLocation
FROM userSchedule
WHERE userID = 1;


* select stuff *
SELECT *
FROM events
ORDER BY eventStart;

SELECT *
FROM events
WHERE eventID = 1;


*default create new event query*
* date time *
"1900-01-01 00:00:00"
"2022-09-25 19:30:00"
"2022-09-25 22:30:00"
'{"Lat": "35.56", "Long": "45.78"}'

INSERT INTO `events`(`eventName`, `eventStart`, `eventEnd`, `eventCapacity`, `eventLocation`) 
VALUES ("Big Pool Party", "2022-09-25 19:30:00", "2022-09-25 22:30:00", 50, '{"Lat": "35.56", "Long": "45.78"}');

INSERT INTO `events`(`eventName`, `eventStart`, `eventEnd`, `eventCapacity`, `eventLocation`) 
VALUES ("Small Cool Party", "2022-09-27 19:30:00", "2022-09-27 22:30:00", 50, '{"Lat": "40.10", "Long": "46.92"}');

INSERT INTO `users`(`fName`, `lName`, `email`, `password`, `isAdmin`) 
VALUES ("Conor", "O'Brien", "conorepob@gmail.com", "nopassword", 1);

INSERT INTO `users`(`fName`, `lName`, `email`, `password`, `isAdmin`) 
VALUES ("Emile", "Allayn", "eayn@gmail.com", "norealpassword", 0);

*these will have some sort of unique randomized eventCode ideally*
INSERT INTO `userEvents`(`userID`, `eventID`, `eventCode`) 
VALUES (1, 2, 4689123);

INSERT INTO `userEvents`(`userID`, `eventID`, `eventCode`) 
VALUES (2, 1, 4488293);

* this would be the query without filling eventcode *
INSERT INTO `userEvents`(`userID`, `eventID`) 
VALUES (2, 1);
