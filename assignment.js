
/// First Problem Solution

function kilometerToMeter(kmUnit) {
    if (kmUnit < 0 || typeof(kmUnit) != "number" || isNaN(kmUnit)) {
        return "Make Sure You've Passed the Argument and Positive Number Only!!!!";
    }
    else {
        return kmUnit*1000;
    }
}
var unitInMeter = kilometerToMeter(1.5);
console.log(unitInMeter);


/// Second Problem Solution

function budgetCalculator (watchUnit, phoneUnit, laptopUnit) {
    if (watchUnit < 0 || phoneUnit < 0 || laptopUnit < 0 || isNaN(watchUnit) || isNaN(phoneUnit) || isNaN(laptopUnit) || typeof(watchUnit) != "number" || typeof(phoneUnit) != "number" || typeof(laptopUnit) != "number") {
        return "Make Sure You've Passed the 3 Required Arguments and Only Positive Value !!!";
    }
    else {
        watchPrice_perUnit = 50;
        phonePrice_perUnit = 100;
        laptopPrice_perUnit = 500;
        totalAmount = watchUnit * watchPrice_perUnit + phoneUnit * phonePrice_perUnit + laptopUnit * laptopPrice_perUnit;
        return totalAmount;
    }
}

var watchQuantity = 30;
var phoneQuantity = 15;
var laptopQuantity = 8;
console.log(budgetCalculator(watchQuantity, phoneQuantity,laptopQuantity));

/// Third Problem Solution

function hotelCost (totalDays_staying) {
    if (totalDays_staying < 0 || isNaN(totalDays_staying) || typeof(totalDays_staying) != "number") {
        return "Make Sure You've Passed Argument and Only Positive Value !!!!"
    }
    else {
        var hotelFee = 100;
        var after10_hotelFee = hotelFee * (1-0.20);
        var after20_hotelFee = 50;
        if (totalDays_staying < 11) {
            totalFee = hotelFee * totalDays_staying;
        }
        else if (totalDays_staying < 21) {
            totalFee = hotelFee * 10 + after10_hotelFee * (totalDays_staying - 10);
        }
        else {
            totalFee = hotelFee * 10 + after10_hotelFee * 10 + after20_hotelFee * (totalDays_staying - 20);
        }
        return totalFee;
    }
}

var stayingDays = 10;
console.log(hotelCost(stayingDays));


/// Fourth Problem Solution

function megaFriend (arr) {

    // checking whether input argument is array or not
    if (typeof(arr) != "object") {
        return "Make Sure You've Passed the Argument in Form of an Array !!!!";
    }
    else {
        // checking array element is string or not
        for (var k = 0; k < arr.length; k++) {
            if (typeof(arr[k]) != "string") {
                return "Please Enter Only String as an Array !!!";
            }
        }
        var nameLength = [];
        for ( var i = 0; i < arr.length; i++ ) {
            nameLength.push(arr[i].length);
        }
        var highestLength = nameLength [0];
        for ( var j = 1; j < nameLength.length; j++ ) {
            if ( highestLength < nameLength [j] ) {
                highestLength = nameLength [j];
            }
            else {
                highestLength = highestLength;
            }
        }
        longestName = arr[nameLength.indexOf(highestLength)];
        return longestName;
    }
}
console.log(megaFriend(['Fahim', 'Foisal', 'Anik', 'Uschas']));