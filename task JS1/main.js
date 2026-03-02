//Data type and variable
//templete1
let numberOne=10;
let numberTwo=20;
console.log(""+numberOne+numberTwo);
console.log(typeof (""+numberOne+numberTwo) );
console.log(`   ${numberOne}${numberTwo}`);
console.log( typeof(`${numberOne} ${numberTwo}`));
console.log(numberOne+"\n"+numberTwo);
console.log(`${numberOne}
 ${numberTwo}`);
//templete2
let elzero=document.getElementById("name");
elzero.innerHTML="object";
console.log(elzero.innerHtml);
console.log( typeof elzero);

//templete3
console.log(" ' I\'m In \n \\\\ \n love \\\\ \"\"\" \'\'\' \n ++ with ++ \n \\ \"\"\" \\ \"\"\" \n \"\" Javascript\"\" \'  ' ");
 //templete4
 let a=21;
 let b=20;
 console.log(`_${b}${a}`.repeat(3)  );
 //operators
 //templete1
 console.log(10*20+15%3+190+10 -400);
 //templete2
 let num=3;
 console.log(num + num);
console.log(Number(num)+Number(num));
console.log(parseInt(num)+parseInt(num));
console.log(num*(true+true));
console.log((num+false)+(num+false));
console.log(+num + +num);  //unary plus
 //templete3
let number="10";
console.log(+number + +number);
console.log(Number(number)+Number(number));
console.log(parseInt(number)+parseInt(number));
console.log(number*(true+true));
console.log(parseFloat(number)+parseFloat(number))

 //templete4
 let points=10;
 points=points+(true+true+true);
 console.log(points);
 points-=(true+true+true+true+true);
  console.log(points);
  //number
  //templete1
  console.log(100_000);
  console.log(1e5);
  console.log(100000);
  console.log(5e4+5e4);
  console.log(Math.pow(10,5));
  console.log((100000).toString());
  console.log(Math.round(100000.4));
   console.log(Math.trunc(100000.8));
 console.log(Math.floor(100000.4));
  console.log(10**5);
  console.log(parseInt(100000.890))
  //templete2
  console.log(-(Number.MIN_SAFE_INTEGER));
  //templete3
  console.log(Number.MAX_SAFE_INTEGER.toString().length);
  //templete4
  let myVar="100.56789";
  console.log(Math.floor(Number(myVar)));
   console.log((Number(myVar)).toFixed(2));
   //templete5
   let var1=10;
   let var2=true;
   ++var2;
   var1=(var1%(++var2)+true);
   console.log(parseInt(var1));
   //templete6
   let flt=10.4;
   console.log(Math.round(flt));
   console.log(Math.trunc(flt));
  console.log(Math.floor(flt));
console.log(parseInt(flt));
console.log(flt.toFixed(0));
//templete 6
console.log(Math.random()*5);
//srting and methods
//templete1
let userName="Elzero";
console.log(userName[0].toLowerCase().repeat(3));
console.log(userName.charAt(0).toLowerCase());
console.log(userName.slice(0,1).toLowerCase());
console.log(userName.substring(0,1).toLowerCase());
console.log(userName.substr(0,1).toLowerCase());

//templete2
let word="Elzero";
let letterZ="z";
let letterE="e";
let letterO="O";
console.log(word.includes("z",0));
console.log(word.startsWith("E"));
console.log(word.endsWith("o"));
//comparison and logical operator
//templete1
console.log(`#`.repeat(10));
console.log(100 =="100");
console.log(100 !=1000);
console.log(110-100 != 10-20 );
console.log(-10 =="-10");
console.log(+ -50<= +"-40");
console.log( +10 <= -"-40");
console.log("10"== 10);
console.log( +20 >=false);
//templete2
console.log(`#`.repeat(10));
let num1=10;
let num2=20;
console.log(num2>num1);
console.log(num2!=num1);
console.log(typeof num1 === typeof num2) ;
console.log(num2!==num1);
console.log(num2.toString  !=num1);
console.log(typeof num1.toString == typeof num2.toString);
//templete3
let A=20;
let B=30;
let C=10;
console.log(`*`.repeat(10));
console.log(A<B && A>C || A>B);
console.log(A<=B && A>C);
console.log( +(A<B) && !(A<C) && !(A<C)  && !(A<C))
// if condation
//templete1
let myNum=15;
if(myNum<10){
    console.log(`"00${myNum}" `);
}
 if( myNum>10 && myNum<100){
   console.log(`"0${myNum}" `) ;
}
if(myNum>=100){
     console.log(`"${myNum}" `) ;
}

//templete2
let Numb=9;
let str ="9";
let str2="20";
if(Numb == str){
    console.log("{num1}Is the same value As {str}");
}

 if(Numb === str){
    console.log("{num1}Is the same value As {str} but not the same type");
}
if(Numb !== str2){
  console.log("{num1}Is  not the same value or not the same type as  {str2} ");  
}
if(str2 != str && typeof str ===typeof str2){
  console.log("{str}Is  not the same value   {str2} but not the same value");    
}

//templete3
let x=10;
let y=30;
let z="30";
if(x<z && z === y){
    console.log("30 is grater than 10 and type string not the same type as number");
}
if(x<z && z == y){
    console.log("30 is grater than 10 and  the value is the same as 30  and type string not the same type as number");
} 
if(z!=x && z!==y){
     console.log("num3 value and type is not the same type as num1 and type is not the same num2");
}
//templete 4
let numOne=10;
let numTwo=10;
let numThree="10";
let numfour=20;
numThree=+numThree +5;
numOne+=5;
numTwo=1;
numfour=50;
if (numOne>numTwo){
    console.log("true")
}
else{
    console.log ("false");
}
if (numOne>numTwo && numOne<numfour){
    console.log("true")
}
else{
    console.log ("false");
}
if (numOne>numTwo && numOne===numThree ){
    console.log("true")
}
else{
    console.log ("false");
}
if (numOne+numTwo <numfour){
    console.log("true")
}
else{
    console.log ("false");
}
if (numOne+numThree <numfour){
    console.log("true")
}
else{
    console.log ("false");
}
if (numOne+numThree+numTwo <numfour){
    console.log("true")
}
else{
    console.log ("false");
}
if ( numfour-(numOne+numThree)+numTwo ===21){
    console.log("true")
}
else{
    console.log ("false");
}
//switch statement
//templete1
let day="  friday  ";
  day =day.replaceAll(" " ,"") .replace("f","F");
 console.log(day);

switch(day){
    case "Friday":
     case "Saturday":
     case "Sunday":
        console.log("no appointemnts avaliable ") ;
        break;
        case "Monday":
            case "Tuesday":
        console.log("from 10:00 Am to  5:00 pM ");
          break;
          case "Tuesday":
             console.log("from 10:00 Am to  6:00 pM ");
             break; 
             case "Wedenesday":
            console.log("from 10:00 Am to  7:00 pM ");
            break;
             default  :
            console.log("it is not valid day ");

} 
//loop for
//templete1
let start=10;
let end=100;
let exclude=40;
for(i=start;i<=end;i++){
    if (i===40){
        continue;
    }
    console.log(i);

}

console.log(`*`.repeat(10));
start=10;
end=0;
let stop=3;
for(k=start;k>=end;k--){
    console.log(`0${k}`);
    if(k===3){
        break;
    }
}
console.log(`*`.repeat(10));

    //templete3

   let srt=1;
  let  End=6;
    let breaker=2;
    for(  let l=srt;l<=End;l++){
        console.log(l);
        for( let j=breaker;j<end;j+=2){
            console.log(`-- ${j}`);
        }
    }
console.log(`*`.repeat(10));
//templete4

let Index=10;
let jump=2;
for(; ;){
    console.log(Index);
    Index-=jump;
    if( Index<4){
        break;
    }
}

//templete5
let myfrindes=["Ahmed","Sayed","Eman","mahmoud","Ameer","Osama","Sameh"];
let letter ="a";
for(let m=0;m<myfrindes.length;m++){
    console.log(`"=>${myfrindes[m]}`);
}
console.log(`*`.repeat(10));
//temp 6
start=0;
let result="" ;
let swappedname="eLZerO";
for(let n =start; n<swappedname.length;n++){
    if( swappedname[n]===swappedname[n].toUpperCase()){
          result +=swappedname[n].toLowerCase();
        
    }
    else{
       result+=  swappedname[n].toUpperCase();
    }
    
}
 console.log(result);
//temp7
start=0;
let mix=[1,2,3,"A","B","C",4];
for(let p=0; p<mix.length;p++){
    if( typeof mix[p]==="string"){
  continue;
    }
    console.log(mix[p]);
}
console.log(`*`.repeat(10));
//loop while
/*let friends=["Ahmed","Sayed","Ali", 1,2, "Mahmoud", "Amany"];
let index =0;
let counter=0;
 while(index<friends.length){
    if( typeof friends[index] !=="string" &&  friends[index].startsWith("A") ){
    index++
              continue;
    }

    
    console.log(`" ${index}=>${friends[index]}"`);
    index++;

}*/
//function
//temp1
function sayHello(name,gender){
gender==="male"?console.log(`hello mr${name}`)
:console.log(`hello miss${name}`);
}
sayHello("nada" ,"female");
sayHello("Osama" ,"male");
//temp2
function calc (firstnum,secnum,operation){
switch(operation){
    case "+" :
        console.log(firstnum+secnum);
        break;
         case "-" :
        console.log(firstnum-secnum);
        break;
         case "*" :
        console.log(firstnum*secnum);
        break;
         default:
        console.log(firstnum+secnum);
        break;
        

}
if(secnum===null&& operation ===null){
    return console.log(" second number not found")
}
}
calc(20,10,"+");
calc(4,9,"*");
calc(50);
//temp 3
function ageInTime(age){
    if(age>10&&age<100){
    console.log(`your age in months${age*12}`);
    console.log(`your age in weaks${age*12*4}`);
console.log(`your age in days${age*12*4*24}`);
console.log(`your age in hours${age*12*4*24*60}`);
console.log(`your age in minutes${age*12*4*24*60*60}`);
console.log(`your age in seconds${age*12*4*24*60*60*60}`);
}
else{
    console.log("age out of range")
}
}
ageInTime(19);
ageInTime(100);
//temp4
function checkStatus(na,ag,st){
if(ag<60 && ag>14 && st==true){
    console.log(`hello ${na} your age${ag} you are avaliable for hire`)
}
else{
 console.log(`hello ${na} your age${ag} you are  not avaliable for hire`)
}
}
checkStatus("nada",19,true);
checkStatus("Ahmed",13,true);
checkStatus("nada",19,false);
checkStatus("omer",65,true);
//temp 5
function createSelectBox(startyear,endyear){
   let el =document.createElement("select");


for(let v=startyear;v<=endyear;v++)
    {
    let option=document.createElement("option");
    option.value="v";
    option.textContent=v;
    
    el.appendChild(option);

    document.body.appendChild(el);
}
}
createSelectBox(2000,2021);
//temp6
function multiply(...nums){
    let res=1;
    for(let r =0; r<nums.length;r++){
        if(typeof nums[i] ==="string"){
            continue;
            res*=nums[i];
        }
        
     let num=Number.isInteger(nums[r])?nums[r]:Math.trunc(nums[r]);
     res*=num;
  
        
    }

    console.log(res);
}
multiply(20,10);
multiply("A",10,30);
multiply(100.5,10,5);
//scope function
//temp1
function getDetails(zName,zAge,zContury){
    function namePattern (zName){
       for( let inx=0;inx<2;inx++){
        let lname =zName[1][0].toUpperCase();
        
       
       console.log(`${zName}=>${zName[0]} ${lname}.`);
    }
}
    function ageWithMessage(zAge){
 let myag=parseInt(zAge)
 console.log(`=> your age is ${myag}`)
    }
    function countryTwoLetters (zContury){
    
        let lt=zContury.slice(0,2).toUpperCase();

    
    console.log(`${zContury}=>you live in ${lt}`);
}
    function fullDetails(){
   return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(zContury)}`;
    }
    return fullDetails();
}
getDetails(["nada" ,"osame"],"19 is my age","egypt");
//temp2
let itsMe=()=>`i'm a arrow function`;
console.log(itsMe());
let urlCreate=(protocol,wep,tld) => `${protocol}//www.${wep}.${tld}`;
console.log(urlCreate("https","elzero","org"));
//temp3
let check=(Zname) =>  (status) => (salary)=> status==="available" ?`${Zname}, my salary is ${salary}`:`i'm not Avaliable`;


console.log(check("nada")("available")(4000));
console.log(check("nada")("available")());
//temp 4
function specialMix(...dates){
    let sum =0;
    for( o=0;o<dates.length;o++){
        if(typeof dates[o] ==="number"){
            sum+=dates[o];
        }
        else if(typeof dates[o]==="string"){
          let n=  parseInt(dates[o]);
          if(!isNaN(n)){
            sum+=n;
          }
          else {
            console.log("all is string");
        }

    }
}
return sum;
}
console.log(specialMix(10,20,30));
console.log(specialMix("10test",20,"30cool"));
console.log(specialMix("test","cool","test"));