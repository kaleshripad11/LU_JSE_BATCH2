let objDetails = [
	{
		name:'abc',
		age:40,
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
	}
]

function printDetails(){
	for(let i=0;i<objDetails.length;i++){
		console.log(`Values for ${i} object element`,objDetails[i]);
	}
}

printDetails();