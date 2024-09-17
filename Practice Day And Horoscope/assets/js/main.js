alert("Days Names:"+"\n"+" "+"\n"+"Monday"+"\n"+"Tuesday"+"\n"+"Wednesday"+"\n"+"Thursday"+"\n"+"Friday"+"\n"+"Saturday"+"\n"+"Sunday");

let dayNum = Number(prompt("Enter a number between 1 and 7 to find out the corresponding day of the week:"));
let horoscopeName = prompt("Enter your horoscope:");

if (dayNum === 1) {
    alert("Your day is going well! Today is Monday, and according to your horoscope (" + horoscopeName + "), good things are ahead!");
} else if (dayNum === 2) {
    alert("Your day is going well! Today is Tuesday, and according to your horoscope (" + horoscopeName + "), you will find success!");
} else if (dayNum === 3) {
    alert("Your day is going well! Today is Wednesday, and according to your horoscope (" + horoscopeName + "), balance and harmony are in your favor!");
} else if (dayNum === 4) {
    alert("Your day is going well! Today is Thursday, and according to your horoscope (" + horoscopeName + "), you will encounter opportunities!");
} else if (dayNum === 5) {
    alert("Your day is going well! Today is Friday, and according to your horoscope (" + horoscopeName + "), enjoy moments of happiness!");
} else if (dayNum === 6) {
    alert("Your day is going well! Today is Saturday, and according to your horoscope (" + horoscopeName + "), take time to relax and recharge!");
} else if (dayNum === 7) {
    alert("Your day is going well! Today is Sunday, and according to your horoscope (" + horoscopeName + "), embrace positivity and new beginnings!");
} else {
    alert("Invalid number! Please enter a number between 1 and 7.");
}

