// Business Logic -------
function SnackBar(soda, candy) {
  this.soda = soda;
  this.candy = candy;
  // this.popcorn = popcorn;
}

SnackBar.prototype.calculateSnackCost = function() {
  let snackCost = 1;
  if (this.soda === "Pepsi") {
    snackCost += 6.00;
    }
  if (this.candy === "Skittles") {
    snackCost += 5;
  }
  return snackCost.toString();
}

function Ticket(movieName, movieTime, special) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.special = special;
}

Ticket.prototype.selectedTicket = function() {
  return this.movieName + " " + this.movieTime + " " + this.special;
}

Ticket.prototype.calculateCost = function() {
    let cost = 10;
    if ( this.special === "Matinee") {
        cost += 5.00;
    } else if(this.special === "Youth Upcharge") {
        cost += 7.00;
    } else if (this.special === "Senior Upcharge") {
        cost += 4.00;
    }
    if (this.movieName === "Gorilla Slasher") {
      cost -= 7.00;
    }
    return cost;
}

// UI Logic -------

function handleFormSubmission(event){
    event.preventDefault();
    const selectedMovieName = document.querySelector("select#movie-name").value; // alt document.getElementById("movie-name").value;
    const selectedMovieTime = document.querySelector("select#movie-time").value;
    const selectedSpecial = document.querySelector("select#special").value;
    let newTicket = new Ticket(selectedMovieName, selectedMovieTime, selectedSpecial);
    let ticketSpot = document.getElementById("ticket");
    let outputNameSpot = document.getElementById("outputName");
    let outputTimeSpot = document.getElementById("outputTime");
    let outputSpecialSpot = document.getElementById("outputSpecial");
    outputNameSpot.innerText = newTicket.movieName;
    outputTimeSpot.innerText = newTicket.movieTime;
    outputSpecialSpot.innerText = newTicket.special;
    ticketSpot.removeAttribute("class");
    (newTicket.selectedTicket());
    (newTicket.calculateCost());
}

window.addEventListener("load", function() {
  document.getElementById("movie-tickets").addEventListener("submit", handleFormSubmission);
});

// function displayTicketDetails(event) {
//   const ticket = 
// }
