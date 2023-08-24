let name = "Mihir Soni";
let grade = "VI";
let section = "B";
let school = "STMS";
let roll=7;
let hindi = 67;
let english = 78;
let math = 84;

console.log("*----------------------------------*")
console.log("|==================================|");
console.log("||          Report Card           ||")
console.log("||--------------------------------||")
console.log("|| Name        - "+name+"       ||");
console.log("|| School      - "+school+"             ||");
console.log("|| Grade       - "+grade+"               ||");
console.log("|| Section     - "+section+"                ||");
console.log("|| Roll Number - "+roll+"                ||")
console.log("||================================||")
console.log("||        Markes Obtained         ||");
console.log("||================================||");
console.log("|| Hindi                -   "+hindi+"    ||");
console.log("|| English              -   "+english+"    ||");
console.log("|| Mathematics          -   "+math+"    ||");
console.log("||________________________________||")
console.log("|| Total Marks Obtained -  "+(hindi+english+math)+"    ||");
console.log("|==================================|");
console.log("*----------------------------------*");

// Or we can also do this by giving just one console.log command

console.log("*----------------------------------*\n|==================================|\n||          Report Card           ||\n||--------------------------------||\n|| Name        - "+name+"       ||\n|| School      - "+school+"             ||\n|| Grade       - "+grade+"               ||\n|| Section     - "+section+"                ||\n|| Roll Number - "+roll+"                ||\n||================================||\n||        Markes Obtained         ||\n||================================||\n|| Hindi                -   "+hindi+"    ||\n|| English              -   "+english+"    ||\n|| Mathematics          -   "+math+"    ||\n||________________________________||\n|| Total Marks Obtained -  "+(hindi+english+math)+"    ||\n|==================================|\n*----------------------------------*");