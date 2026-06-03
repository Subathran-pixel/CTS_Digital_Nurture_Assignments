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