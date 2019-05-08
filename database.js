function ticketPurchase() {
	console.log("ticketPurchase() called....");
	console.log(document.getElementById("name").value);
	console.log(document.getElementById("email").value);
	console.log(document.getElementById("package").value);
	console.log(document.getElementById("card_type").value);
	console.log(document.getElementById("card_number").value);
	console.log(document.getElementById("cvc_number").value);
	console.log(document.getElementById("card_expiration").value);
	console.log(document.getElementById("Billing").value);


	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var package = document.getElementById("package");
	var card_type = document.getElementById("card_type");
	var card_number = document.getElementById("card_number");
	var cvc_number = document.getElementById("cvc_number");
	var card_expiration = document.getElementById("card_expiration");
	var Billing = document.getElementById("Billing");
	// var email = document.getElementsByClassName("email");
	// var package = document.getElementsByClassName("package");
	// var card_type = document.getElementsByClassName("card_type");
	// var card_number = document.getElementsByClassName("card_number");
	// var cvc_number= document.getElementsByClassName("cvc_number");
	// var card_expiration = document.getElementsByClassName("card_expiration");
	// var Billing = document.getElementsByClassName("Billing");
	var users = {
		name: name.value 
		email: email.value ,
		package: package.value,
		card_type: card_type.value,
		card_number: card_number.value,
		card_expiration: card_expiration.value,
		cvc_number: cvc_number.value,
		Billing: Billing.value
	};

	db.collection("users").add(users);
	alert("Ticket Purchased");
}