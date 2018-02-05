

menu = {
  _courses:{_appetizers:[],
           _mains:[],
           _desserts:[]
           }
  , get appetizers(){
    return this._courses._appetizers;
  }, get mains(){
		return this._courses._mains;
  }, get desserts(){
    return this._courses._desserts;
  }, get courses(){
    return {
      appetizers : this._courses._appetizers,
      mains : this._courses._mains,
      desserts : this._courses._desserts
    };
  }, addDishToCourse(courseName, dishName, dishPrice){
    let dish = {name:dishName, price:dishPrice};
    this._courses['_'+courseName].push(dish);
  }, getRandomDishFromCourse(courseName){
    dishesInCourse = this._courses['_'+courseName];
    return dishesInCourse[Math.floor(Math.random()*dishesInCourse.length)];
  }, generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = 
this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    totPrice = appetizer.price + main.price + dessert.price;
    return `Appetizer:${appetizer.name}\nMain Course:${main.name}\nDessert:${dessert.name}\nTotal Price:${totPrice}`;
  }
}

menu.addDishToCourse('appetizers','bruschetta',3.00);

menu.addDishToCourse('appetizers','samosa',2.00);

menu.addDishToCourse('mains', 'chicken marsala', 9.00);

menu.addDishToCourse('mains', 'palak paneer',14.00 );

menu.addDishToCourse('desserts', 'Italian crackers', 4.00);

menu.addDishToCourse('desserts', 'kheer', 2.00);

sep=()=>{console.log("---------------------");};

console.log(menu.courses)
sep();
console.log(menu.getRandomDishFromCourse('appetizers'));
sep();
console.log(menu.getRandomDishFromCourse('mains'));
sep();
console.log(menu.getRandomDishFromCourse('desserts'));
sep();
console.log(menu.generateRandomMeal());



