const outcomes = ["India", "Pakistan", "No-Man's-Land"];
const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

document.getElementById("result").innerText = `You have been sent to ${randomOutcome}.`;
