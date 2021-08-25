//const drivers = function(){
  //  return ['Sally', 'Bob', 'Freddy', 'Claudia'];
//}

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(value){
        return num * value}
    }
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (forest, driverFunction) =>{
    return driverFunction(forest)
}