"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GolfCoach_1 = require("./GolfCoach");
const CricketCoach_1 = require("./CricketCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
// Declare an array of coaches
let theCoaches = [];
// Add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (let coach of theCoaches) {
    console.log(coach.getDailyWorkout());
}
