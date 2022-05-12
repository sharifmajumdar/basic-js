const prompt = require("prompt-sync")(); //This function named prompt is used to take input from user in console

//Kilometer to meter function
function kilometerToMeter(kmNumber){
    let meterNumber = kmNumber * 1000; // 1000 meters = 1 kilometer
    return meterNumber;
}
let kmNumber = prompt("Enter the kilometer = ");
if (!kmNumber){ //Checking the null input
    console.log("Please enter a value!");
}
else{
    if(isNaN(kmNumber)){ //Validating wheather string or numeric 
        console.log("Please type a number!");
    }
    else{
        let kmNumber2 = parseInt(kmNumber); //Parsing string to integer
        if(kmNumber2 <= 0){ //Checking for less than 1 numbers
            console.log("Please type a valid number!");
        }
        else{
            const outputNumber = kilometerToMeter(kmNumber2);
            console.log(kmNumber2, "kilometers = ", outputNumber, "meters");
        }
    }    
}

//Budget calculator function
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop){
    let watchPrice = numOfWatch * 50; // 1 watch = 50
    let phonePrice = numOfPhone * 100; // 1 phone = 100
    let laptopPrice = numOfLaptop * 500 // 1 laptop = 500
    const totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
let watchNumber = prompt("Enter number of watch = ");
let phoneNumber = prompt("Enter number of phone = ");
let laptopNumber = prompt("Enter number of laptop = ");
if (!watchNumber || !phoneNumber || !laptopNumber){ //Checking the null input
    console.log("Please enter a value!");
}
else{
    if(isNaN(watchNumber) || isNaN(phoneNumber) || isNaN(laptopNumber)){ //Validating wheather string or numeric 
        console.log("Please type a number!");
    }
    else{
        let watchNumber2 = parseInt(watchNumber); //Parsing string to integer
        let phoneNumber2 = parseInt(phoneNumber);
        let laptopNumber2 = parseInt(laptopNumber);
        if(watchNumber2 <= 0 || phoneNumber2 <= 0 || laptopNumber2 <= 0){ //Checking for less than 1 numbers
            console.log("Please type a valid number!");
        }
        else{
            const grandTotal = budgetCalculator(watchNumber2, phoneNumber2, laptopNumber2);
            console.log("Total price = ", grandTotal);
        }
    }    
}

//Hotel cost function
function hotelCost(numOfNight){
    if(numOfNight >= 1 && numOfNight <= 10){ //item should be between 1 to 10
        const netPrice = numOfNight * 100;
        return netPrice;
    }
    if(numOfNight >= 11 && numOfNight <= 20){ //item should be between 11 to 20
        let regularPrice = numOfNight * 100;
        let discountPrice = regularPrice * .2; // 20% discount for more than 10 items
        let netPrice = regularPrice - discountPrice;
        return netPrice;
    }
    if(numOfNight > 20){ //item should be more than 20
        let regularPrice = numOfNight * 100;
        let discountPrice = regularPrice * .5; // 50% discount for more than 20 items
        let netPrice = regularPrice - discountPrice;
        return netPrice;
    }
    else{
        console.log("Invalid Number");
    }    
}
let numOfNight = prompt("Enter number of night = ");
if (!numOfNight){ //Checking the null input
    console.log("Please enter a value!");
}
else{
    if(isNaN(numOfNight)){ //Validating wheather string or numeric 
        console.log("Please type a number!");
    }
    else{
        let numOfNight2 = parseInt(numOfNight); //Parsing string to integer
        if(numOfNight2 <= 0){ //Checking for less than 1 numbers
            console.log("Please type a valid number!");
        }
        else{
            const totalCost = hotelCost(numOfNight2);
            console.log("Total rent = ", totalCost);
        }
    }    
}

//Mega friend function
function megaFriend(friendList){
    let maxLength = Math.max(...friendList.map( item => item.length)) //Math.max function return the maximum length string
    return friendList.filter(item => item.length === maxLength)[0];
}
let inputFriend = []; //declaring the array
var arraySize = 3; //array size to get input
for(var n=0; n<arraySize; n++){   
    let tempInput = prompt('Enter your friend' + (n+1) + " ");
    if(isNaN(tempInput)){
        inputFriend[n] = tempInput;
    }
    else{
        console.log("The friend"+(n+1)+ " value is not a name");
        break;
    }
}
if (inputFriend === undefined || inputFriend.length == 0 || inputFriend.length <= 1){ //checking the invalid input value
    console.log("Please type a string input!");
}
else{
    const longestName = megaFriend(inputFriend);
    console.log("The longest length name is = ", longestName);
}
