/* Exercise 1 */

console.log("Welcome to the Community Portal");

window.addEventListener("load", function () {
    alert("Page Fully Loaded");
});

/* Exercise 2 */

const eventName = "Music Festival";
const eventDate = "15-06-2026";
let availableSeats = 100;

console.log(`
Event Name : ${eventName}
Event Date : ${eventDate}
Available Seats : ${availableSeats}
`);

availableSeats--;

console.log("Seats Left After Registration : " + availableSeats);

/* Exercise 3 */

const events = [
    {
        name: "Music Festival",
        date: "2026-06-15",
        seats: 50
    },
    {
        name: "Sports Meet",
        date: "2025-01-10",
        seats: 20
    },
    {
        name: "Food Carnival",
        date: "2026-07-20",
        seats: 0
    }
];

const today = new Date();

events.forEach(function(event) {

    let eventDateObj = new Date(event.date);

    if (eventDateObj > today && event.seats > 0) {
        console.log(
            `${event.name} | ${event.date} | Seats: ${event.seats}`
        );
    }
    else {
        console.log(`${event.name} is unavailable`);
    }

});

function registerEvent(event) {

    try {

        if (event.seats <= 0) {
            throw new Error("No seats available");
        }

        event.seats--;

        console.log(
            `Registration successful for ${event.name}`
        );

    }
    catch(error) {

        console.log(
            "Registration Failed: " + error.message
        );

    }

}

registerEvent(events[0]);
registerEvent(events[2]);

/* Exercise 4 */

let communityEvents = [];

/* addEvent() */

function addEvent(name, category, seats) {

    communityEvents.push({
        name: name,
        category: category,
        seats: seats
    });

    console.log(name + " added successfully");

}

/* registerUser() */

function registerUser(eventName) {

    let event = communityEvents.find(
        e => e.name === eventName
    );

    if (event && event.seats > 0) {

        event.seats--;

        console.log(
            "Registered for " + eventName
        );

    }
    else {

        console.log(
            "Registration failed for " + eventName
        );

    }

}

/* filterEventsByCategory() */

function filterEventsByCategory(category, callback) {

    let filteredEvents =
        communityEvents.filter(
            event => event.category === category
        );

    callback(filteredEvents);

}

/* Closure */

function registrationTracker(category) {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(
            category +
            " Registrations: " +
            totalRegistrations
        );

    };

}

let musicRegistrationCount =
    registrationTracker("Music");

/* Add Events */

addEvent("Music Festival", "Music", 50);
addEvent("Sports Meet", "Sports", 30);
addEvent("Food Carnival", "Food", 20);

/* Register Users */

registerUser("Music Festival");

musicRegistrationCount();
musicRegistrationCount();

/* Callback Function */

function displayEvents(events) {

    events.forEach(function(event) {

        console.log(
            event.name +
            " - " +
            event.category
        );

    });

}

/* Higher Order Function */

filterEventsByCategory(
    "Music",
    displayEvents
);

/* Exercise 5 */

/* Event Class */

class Event {

    constructor(name, date, seats) {

        this.name = name;
        this.date = date;
        this.seats = seats;

    }

}

/* Prototype Method */

Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {
        console.log(this.name + " is available");
    }
    else {
        console.log(this.name + " is full");
    }

};

/* Create Objects */

let event1 = new Event(
    "Music Festival",
    "2026-06-15",
    50
);

let event2 = new Event(
    "Food Carnival",
    "2026-07-20",
    0
);

/* Check Availability */

event1.checkAvailability();
event2.checkAvailability();

/* Object.entries() */

Object.entries(event1).forEach(function(entry) {

    console.log(
        entry[0] + " : " + entry[1]
    );

});

/* Exercise 6 */

/* Array of Events */

let eventList = [];

/* Add Events using push() */

eventList.push({
    name: "Music Festival",
    category: "Music"
});

eventList.push({
    name: "Baking",
    category: "Workshop"
});

eventList.push({
    name: "Sports Meet",
    category: "Sports"
});

eventList.push({
    name: "Rock Concert",
    category: "Music"
});

console.log("All Events:");
console.log(eventList);

/* Filter Music Events */

let musicEvents = eventList.filter(function(event) {

    return event.category === "Music";

});

console.log("Music Events:");
console.log(musicEvents);

/* Format Display Cards using map() */

let displayCards = eventList.map(function(event) {

    return "Workshop on " + event.name;

});

console.log("Display Cards:");
console.log(displayCards);

/* Exercise 7 */

/* Access DOM Element */

const eventContainer =
    document.querySelector("#eventContainer");

/* Events Data */

const domEvents = [
    {
        name: "Music Festival",
        seats: 5
    },
    {
        name: "Sports Meet",
        seats: 3
    }
];

/* Create and Append Event Cards */

domEvents.forEach(function(event) {

    let card = document.createElement("div");

    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Seats: <span>${event.seats}</span></p>
        <button>Register</button>
        <button>Cancel</button>
    `;

    let seatText =
        card.querySelector("span");

    let buttons =
        card.querySelectorAll("button");

    let registerBtn = buttons[0];
    let cancelBtn = buttons[1];

    /* Register */

    registerBtn.addEventListener(
        "click",
        function() {

            if (event.seats > 0) {

                event.seats--;

                seatText.textContent =
                    event.seats;

            }

        }
    );

    /* Cancel */

    cancelBtn.addEventListener(
        "click",
        function() {

            event.seats++;

            seatText.textContent =
                event.seats;

        }
    );

    eventContainer.appendChild(card);

});