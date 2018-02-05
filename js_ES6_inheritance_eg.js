class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
  	return this._ratings;
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !(this._isCheckedOut);
  }
  getAverageRatings(){
    const reducer = (accum,curr)=>accum + curr;
    let r = this._ratings;
    let tot = r.reduce(reducer,0);
    //Note: the function reduce is invoked on an
    //Array; its first parameter is an accumulator
    //function and its second parameter is an initial value
    return tot/r.length;
  }
  addRating(rating){
    if(!(typeof rating === 'number')) {
			console.log('invalid nonnumeric parameter')
    }
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title,author,pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title,director,runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director(){
    return this._director;
  }
  get runtime(){
    return this._runtime;
  }
}

n = new Book('Inferno','Dante',500);
n.addRating(11);
n.addRating(1.5);
console.log(n);
console.log(n.getAverageRatings());
n.toggleCheckOutStatus();
console.log(n);

sep=()=>{console.log("------------------------");};

sep();

m = new Movie('The Awakening','Bill Nye',110);
m.addRating(5);
m.addRating(3.5);
console.log(m.runtime);
console.log(m.isCheckedOut);
m.toggleCheckOutStatus();
console.log(m.isCheckedOut);
console.log(m.getAverageRatings());