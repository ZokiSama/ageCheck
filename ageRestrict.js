const aYear = 31557600000;  //år i ms
var birthDay = document.getElementById("userAge"); //data från input - date

ageControll.addEventListener('submit', function(event){ //lyssnar på submit
    event.preventDefault(); // stoppar refresh

    ageCheck(); // kallar på funktionen ageCheck
})

function ageCheck() { //skapar en funktion

    var age = ~~((Date.now() - +new Date(birthDay.value)) / (aYear)); //räknar ut åldern

    // om under eller lika med 17 {gör detta}
    if(age <= 17){
        console.log(age + " is to young.")
    } else { // annars gör detta
        console.log(age + " is an appropriate age.");
    }
}

