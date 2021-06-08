var ages = [3,9,23,64,2,8,28,93];
console.log("Your age is" + ages [3]);
console.log(ages.toString());

var pos = 1, last=2
var elementsubtract = ages.slice (pos,last);
console.log (ages)

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log (ages.reduce(reducer));

ages.push (12);
console.log (ages);

var counter = [12,3,15,18,33,51];
console.log (counter.reduce(reducer));


var names= ['Sam','Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
names.forEach(function(entry){
    console.log(entry);
});

function contarLetras(names) {
    var objeto = {}; 
    for(var i in names){
        objeto[letras[i]] = ( objeto[names[i]] || 0 ) + 1; 
    }
    return objeto;
}
console.log (names);

console.log (names.join (' '));

let lastElement = names[names.length - 1];
console.log (lastElement);

var first = names [0];
console.log (first);

var nameLengths = [names];
var nameLengthsString = " ";
for (var i = 0; i < nameLengths. length; i++) {
   nameLengthsString += nameLengths[i] + " ";
}
console.log(nameLengthsString);

nameLengths.forEach (function (a){nameLengths += a;});
console.log (nameLengths);

const wave= 'hello';
const waves= '3';
console.log(wave.concat(' ', waves));

String.prototype.repeat = String.prototype.repeat || function(n){
    n= n || 1;
    return Array(n+1).join(this);
  }
    console.log(  wave.repeat(waves)  )

function fullName(firstName, lastName){
        return firstName + " " + lastName;
      }
      
      var fullname = fullName("Karla", "Garcia");
      
      console.log(fullname)

var arr = [41,52,3,4,5];
      function arrSum(arr) {
      var sum = 0;
      for(var i = 0; i < arr.length; i++) {
      sum += arr[i];
      }
      console.log(sum);
      }
      arrSum(arr);
      
      
      
      var array = [3, 32, 5, 89, 32];
      var largest= 0;
      
      for (i=0; i<=largest;i++){
          if (array[i]>largest) {
              var largest=array[i];
          }
      }
      console.log(largest);


// I can't do 12

function concstring(){ //name of function
    a = "Hello";  // variable 
    b = "Smile";    //variable
    c = a +" " +b;  //xtra variable with product
}

function result(){ //name of function 
    console.log(c); // text or result
}
concstring(); //print function in console with data
result(); // print function in console with data in order I want