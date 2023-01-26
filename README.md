
let snack = new SnackBar("Pepsi", "", "");

Define: SnackBar

test: It should return a cost of 7

code: new SnackBar("Pepsi")
Expected output: 7

Define: SnackBar

test: It should return a cost of total snacks.

code: new SnackBar("Pepsi", "Skittles")
Expected output: 12






## Describe: Ticket()

Test: it should create a ticket object.
Code: new Ticket("Movie Name", "Movie Time", "Special")
Expected Result: ticket with moviename = "Movie Name" movietime = "Movie Time" and special = "special"

Test: it should return ticket object.
code: return this.movieName + this.movieTime + this.special
Expected Result: "movieName + movieTime + special"