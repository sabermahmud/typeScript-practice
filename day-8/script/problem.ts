// problem-1
/*
Wi-Fi Signal Status
Function name must be: getSignalStatus

Scenario
A router's admin dashboard shows a friendly signal status label instead of just the raw signal percentage.

Task
Create a function named getSignalStatus. The function receives the signal strength percentage (0–100) and returns a status string

Percentage
Status
0–25  >  "Poor"
26–55 >  "Fair"
56–85 >  "Good"
86–100 > "Excellent"
*/
const getSignalStatus = (signalLabel: number): string => {
  if (signalLabel <= 25) {
    return "Poor";
  } else if (signalLabel <= 55) {
    return "Fair";
  } else if (signalLabel <= 85) {
    return "Good";
  }

  return "Excellent";
};
console.log(getSignalStatus(25));

// problem-2
// Function name must be: formatTicketConfirmation

// Scenario
// A cinema booking app confirms a ticket purchase with a short readable message. A ticket contains a moviegoer's name, the movie title, and the showtime.

// Task
// First define an appropriate type or interface for the ticket. Then create a function named formatTicketConfirmation that receives a ticket and returns a confirmation sentence.

// Requirements
// Accept a properly typed ticket object.
// Return a string.
// Use the values from the object rather than hard-coding the result.



interface Ticket {
  name: string;
  price: number;
  movie: string;
  time: number;
}
const formatTicketConfirmation = (ticket: Ticket): string => {
  return `Hello ${ticket.name}! congratulations, your ticket is confirmed. 
  your selected movie is ${ticket.movie}.
  you showtime is ${ticket.time}PM. 
  your paid amount is ${ticket.price} `;
};

console.log(
  formatTicketConfirmation({
    name: "Saber Mahmud",
    price: 1200,
    movie: "ertugrul season-1",
    time: 9.15,
  }),
);

// problem-3
/*Function name must be: calculateWeeklySteps

Scenario
A fitness app lets a user log their step count for each day of the week as a plain number, and needs to add them all up.

Task
Create a function named calculateWeeklySteps. The function should receive an array of daily step counts and return the total.

Requirements
Properly type the array of numbers.
Return the total as a number.
An empty array should return 0.
*/

const calculateWeeklySteps = (steps:number[]) => {
    const totalSteps = steps.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue
    },0)

    return totalSteps
};
console.log(calculateWeeklySteps([3000, 5200, 4100]

));
