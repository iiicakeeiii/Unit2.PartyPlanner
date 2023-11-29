const COHORT = "2310-FSA-ET-WEB-PT-SF";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
    events: [
        {
            id: 1,
            name: "Event Name1",
            description: "This is a description of the event.",
            date: "2021-09-30T00:00:00.000Z", // Date ISO string
            location: "123 Street"
        },
        {
            id: 2,
            name: "Event Name2",
            description: "This is a description of the event.",
            date: "2021-09-30T00:00:00.000Z", // Date ISO string
            location: "123 Street"
        },
        {
            id: 3,
            name: "Event Name3",
            description: "This is a description of the event.",
            date: "2021-09-30T00:00:00.000Z", // Date ISO string
            location: "123 Street"
        }
    ]
    /**
     * section: eventCard
     *  ul: EventName
     *    li: date
     *    li: time
     *    li: location
     *    li: description
     *  /ul
     * /section*/
}

// const partyName = document.createElement("ul");
// partyName.classList.add("partyName");
//
// const partyDate = document.createElement("li");
// partyDate.classList.add("partyDate");
//
// const partyTime = document.createElement("li");
// partyTime.classList.add("partyTime");
//
// const partyLoc = document.createElement("li");
// partyLoc.classList.add("partyLoc");
//
// const partyDesc = document.createElement("li");
// partyDesc.classList.add("partyDesc");

//Setup for party card. May change to function for multiple cards creation.
const body = document.querySelector("body");
const main = document.createElement("main");
main.style.display = "flex";
body.appendChild(main);

function addEvent() {
    for (let i = 0; i < state.events.length; i++){
        const eventData = state.events[i];

        const partiesEventCard = document.createElement("section");
        partiesEventCard.classList.add(`partyCard-${eventData.id}`);

        const partyName = document.createElement("ul");
        partyName.classList.add("partyName");
        partyName.innerText = eventData.name;

        const partyDate = document.createElement("li");
        partyDate.classList.add("partyDate");
        partyDate.innerText = eventData.date;
        partyName.appendChild(partyDate);

        const partyTime = document.createElement("li");
        partyTime.classList.add("partyTime");
        partyTime.innerText = eventData.time;
        partyName.appendChild(partyTime);

        const partyLoc = document.createElement("li");
        partyLoc.classList.add("partyLoc");
        partyLoc.innerText = eventData.location;
        partyName.appendChild(partyLoc);

        const partyDesc = document.createElement("li");
        partyDesc.classList.add("partyDesc");
        partyDesc.innerText = eventData.description;
        partyName.appendChild(partyDesc);


        //appendChild() to partiesEventCard
        partiesEventCard.appendChild(partyName);
        partiesEventCard.style.border = "5px solid black";
        partiesEventCard.style.display = "inline-block";

        main.appendChild(partiesEventCard)
    }
}


async function getEvents() {
    try {
        const response = await fetch(API_URL);
        const event =  await response.json();
        console.log(event.data);
        event.data.forEach((x) => {
            console.log(x);
            state.events.push(x);
        });
    }catch (err){
        console.log(err);
    }
}

async function setEvent() {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                id: 1,
                name: "Event Name",
                description: "This is a description of the event.",
                date: "2021-09-30T00:00:00.000Z", // Date ISO string
                location: "123 Street"
            }),
            headers: {'Content-Type': 'application/json'}
        });
    } catch (err) {
        console.log(err);
    }
}
//setup
// setEvent();
getEvents();
addEvent();