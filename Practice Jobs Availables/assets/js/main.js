// const atmId = 274356;
// var useName = "Ali Raza";
// let password = 334212;

// console.table([atmId,useName,password])

// console.log(typeof "ali");
// console.log(typeof 123);
// console.log(typeof true);

alert("Available jobs in Microsoft:-"+"\n"+"1:-"+"Frontend developer"+"\n"+"2:-"+"Backend developer"+"\n"+"3:-"+"Graphic designer"+"\n"+"4:-"+"UI / UX designer" +"\n"+"5:-"+"Content Writter")

let job = ["Frontend developer","Backend developer","Graphic designer","UI / UX designer","Content Writter"]
let jobName = String(prompt("Enter your job name"))

if(job.includes(jobName)){
alert("Congratulations! you have been selected for the job")
}else {
alert("Better luck next time")
}

