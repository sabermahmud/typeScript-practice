"use strict";
// problem-1
const formatTicketConfirmation = (ticket) => {
    return `Hello ${ticket.name}! congratulations, your ticket is confirmed. 
  your selected movie is ${ticket.movie}.
  you showtime is ${ticket.time}PM. 
  your paid amount is ${ticket.price} `;
};
console.log(formatTicketConfirmation({
    name: "Saber Mahmud", price: 1200, movie: "ertugrul season-1", time: 9.15
}));
