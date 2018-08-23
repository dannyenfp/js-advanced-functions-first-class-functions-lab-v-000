// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
} 

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length-2, drivers.length);
}

const selectingDrivers = [return returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) = function(fare) { 
  return function(fare*4); 
} 