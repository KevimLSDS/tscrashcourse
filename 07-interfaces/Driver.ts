import { GolfCoach } from './GolfCoach';
import { CricketCoach } from './CricketCoach';
import { Coach } from './Coach';

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// Declare an array of coaches
let theCoaches: Coach[] = [];

// Add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (let coach of theCoaches) {
    console.log(coach.getDailyWorkout());
}
