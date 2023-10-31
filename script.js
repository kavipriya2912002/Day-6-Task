//Q1: 

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio=studio;
        this.rating=rating;

        if(typeof this.rating=== "undefined"){
            this.rating="PG";
        }
    }
}

let movie1=new Movie("Dada","Olympia Movies");
let movie2=new Movie("Leo","& Screen Studio","8.2");
let movie3=new Movie("Kaidhi","Dream warrior Pictures");
let movie4=new Movie("seetha raman","Vaijayanthi Movies","8.6");
let movie5=new Movie("Sillunu oru kadhal","Studio Green","7.1");

console.log(movie1);

function getPG(mov) {
    let res = []
    for (let i = 0; i < mov.length; i++) {
   if (mov[i].rating == "PG") {
    res.push(mov[i].title);
    }
    }
    return res;
   }
   let arr = [movie1, movie2, movie3, movie4]
   console.log(getPG(arr))
   
   let mov5 = new Movie("Casino Royale", "Eon Productions", "PG13");
   console.log(mov5);


   
   console.log("_________________________________________________________________");
//Q2:

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusOfCircle(){
        return this.radius;
    }
    set radiusOfCircle(radius){
        this.radius=radius;
    }
    get colorOfCircle(){
        return this.color;
    }
    set colorOfCircle(color)
    {
        this.color=color;
    }
    get toString(){
        return `"circle[radius=${this.radius},color=${this.color}]"`
    }
    get areaOfCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceOfCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var object1=new Circle(10.5,"Pink");
object1.radiusOfCircle=5;
console.log(object1.radiusOfCircle);
object1.colorOfCircle="Red";
console.log(object1.colorOfCircle);
console.log(object1.toString);
console.log(object1.areaOfCircle);
console.log(object1.circumferenceOfCircle);

console.log("_________________________________________________________________");
//Q3: Write a “person” class to hold all the details

class Person{
    constructor(name,age,gender,salary,bday_year){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
        this.bday_year=bday_year;

    }
}
const personal = new Person("Kavipriya",21,"Female",50000,2002);
console.log(personal.name);
console.log(personal.age);
console.log(personal.gender);
console.log(personal.salary);
console.log(personal.bday_year);



console.log("_________________________________________________________________");
//Q4: write a class to calculate the uber price.

class Uber_Price_Calculation {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *100;
    }
  }
  
  let uber = new Uber_Price_Calculation(10);
  console.log(uber.getPrice());