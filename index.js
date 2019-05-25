
function lowerCaseDrivers (drivers){
return drivers.map(function(name) {
	return name.toLowerCase();
});
}

function nameToAttributes(drivers){
return drivers.map(function(name) {
	let firstNameOfDriver = name.split(" ")[0];
	let lastNameOfDriver = name.split(" ")[1];
	return {firstName: firstNameOfDriver, lastName: lastNameOfDriver};
});
}
function attributesToPhrase(drivers){
return drivers.map(function(driver){
return `${driver.name} is from ${driver.hometown}`;


});

}


// Code your solution in this file.
