//string
//temp1
let userName="Elzero";
console.log(userName[0].toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName.slice(0,1).toLowerCase());
console.log(userName.substring(0,1).toLowerCase());
console.log(userName.substr(0,1).toLowerCase());
//temp2
let word="Elzero";
let letterZ="z";
let letterE="e";
let letterO="O";
console.log(word.includes("z",0));
console.log(word.startsWith("E"));
console.log(word.endsWith("o"));
//array
//temp1
let myfrinds=["Ahmed","Elham","osama","Gamal"];
console.log(myfrinds.slice(0,3));
console.log(myfrinds.splice(0,3));
//temp2
let friends=["Ahmed","Elham","osama","Gamal"];
console.log(friends.splice(friends.length-3,friends.length-1));

//temp3
let finalArr=[];
let arrOne=["c","D","X"];
let arrTwo=["A","B","Z"];
 let final=finalArr.concat(arrTwo.slice(2,3),arrOne.reverse(),arrTwo.slice(0,2).reverse());
console.log(final);
//temp4
let wepsite="Go";
let words=[`${wepsite}ogle`,"facebook",["Elzero","wep","school"]];
console.log(words[2][0].slice(2).toUpperCase());
//temp5
let needle="JS";
let haystack=["PHP","JS","Python"];
if(haystack.includes(needle)){
console.log("found");
}
for(let i=0;i<haystack.length;i++){
if(haystack[i]===needle){
   console.log("found");
}

//temp6
let allArr=[];
let arr1=["A","c","X"];
let arr2=["D","E","F","Y"];
let finarr=allArr.concat( arr2.slice(2,3),arr1.slice(2),arr2.slice(3));
console.log(finarr);

}
//
//date and time
//temp1
let myBirth= new Date("2006-10-25");
let dateNow= new Date();
 let myage=dateNow-myBirth;
 console.log(`${myage/(1000)} seconds`);
 console.log(`${myage/(1000*60)} minutes`);
console.log(`${myage/(1000*60*60)} hours`);
console.log(`${myage/(1000*60*60*24)} days`);
console.log(`${myage/(1000*60*60*24*30)} months`);
console.log(`${myage/(1000*60*60*24*365)} years`);

//temp2
let after = new Date();

 after.setTime(1000*60*60*24*366*10);
 console.log(after.toString());
 after.setHours(0,0,1);
 after.setMonth(0,1);
 //after.setDay(4);
 
 console.log(after.toString());
 //temp3
 let date= new Date();
 date.setDate(0);
 console.log(date.toString());
 date.setMonth(1);

 console.log(`privous month is${date.getMonth()+1} and last dat is${date.getDate()}`);
 //temp4
 let date2=new Date("2006-10-25T00:00:00Z");
console.log(date2);

 myBirth= new Date("2006-10-25");
 dateNow= new Date();
 console.log(myBirth);
 let myBirth2=new Date(2006,9,25,20);
console.log(myBirth2);

 //temp5
 let start=performance.now();
 for(let i=0;i<6;i++){
    console.log(i);
 }
 let end=performance.now();
 console.log(end-start);
 //temp6
 function * gen(){
    yield 14;
    yield 154;
    yield 494;
    yield 1043;
    yield 1774;
    yield 1043;
    yield 2724;
    yield 3854;
    yield 5194;
    
 }
 let generator=gen();
 for(let i=0;i<10;i++){
 console.log(generator.next());
 }
//temp7
function* genNumber(){
   yield*[1,2,2,2,3,4,5];
}
function * genLetters(){
   yield*["A","B","B","B","C","D"]
}
function* genall(){
   yield* genNumber();
   yield* genLetters()
}
 generator=genall();
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
//temp8
import fun,{a,b,c}from "./two.js";
console.log(fun(10,6,4));
console.log(a);