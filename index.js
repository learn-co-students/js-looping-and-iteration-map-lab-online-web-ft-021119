// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let newDrivers = drivers.map(function(drvr){
    return drvr.toLowerCase();
  })
  return newDrivers;
}

function nameToAttributes(drivers) {
  let newDrivers = drivers.map(function(drvr){
    let driver = {};
    driver["firstName"] = drvr.split(" ")[0];
    driver["lastName"] = drvr.split(" ")[1];
    return driver;
  });
  return newDrivers;
}

function attributesToPhrase(drivers) {
  let announcement = drivers.map(function(drvr){
    return `${drvr.name} is from ${drvr.hometown}`;
  })
  return announcement;
}
