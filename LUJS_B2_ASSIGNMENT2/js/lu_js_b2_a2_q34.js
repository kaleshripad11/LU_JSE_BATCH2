let objDetails = [
	{
		name:'abc',
		age:27,
		country:'india',
		hobbies:['drawing','coding'],
	},
	{
		name:'pqr',
		age:50,
		country:'pakistan',
		hobbies:['drawing','designing','singing'],
	},
	{
		name:'zxv',
		age:20,
		country:'china',
		hobbies:['dancing','surfing'],
	},
	{
		name:'def',
		age:56,
		country:'bangladesh',
		hobbies:['gaming','dancing'],
	},
	{
		name:'lmn',
		age:29,
		country:'india',
		hobbies:['gaming','dancing','Acting','skating'],
	}
]

// Assignment 2 - Question 3 answer
// Fetch all elements from array of objects
function printDetails(){
	for(let i=0;i<objDetails.length;i++){
		console.log(`Values for ${i} object element`,objDetails[i]);
	}
}

//printDetails();

// Assignment 2 - Question 4 answer
// Function to fetch objects with age less than 30

function getAges(){
	console.log('Objects with age less than 30 ==> ');
	for(let i=0;i<objDetails.length;i++){
		if(objDetails[i].age<=30){
			console.log(objDetails[i]);
		}
	}
}


function getCountry(){
	console.log('All objects with country = "india"');
	for(let i=0;i<objDetails.length;i++){
		if(objDetails[i].country=="india"){
			console.log(objDetails[i]);
		}
	}
}