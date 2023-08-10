// Q-1 Write a program to print the marks of a student in an object using for in  loop
//obj = {Sabita:98 , janaki: 70, nilam.:73}.
const marks ={
    Sabita :98,
 janaki : 80,
 nilam : 95,
 }
 for(let i in marks){
    console.log("The marks of " + i + " using for in loop is " + marks[i])
 } 
 //problem no 2
//  using for loop.
 for(let i=0;i<Object .keys (marks) . length; i++){
 console. log( "The marks of " + Object. keys(marks)[i] + " using for loop is " + marks [Object. keys (marks) [i]])
}

//Problem no 3
     let i;
     n = 5;
     while (i!=n){
      i = 5;
     }
     console.log("You have entered a correct number")
     