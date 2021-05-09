class Builder {
  constructor(value) {
    this.value = value;
  }
  plus(...args) {
    
  }
 
  minus(...args) {
     
  }
  multiply(n){
  
  }
  divide(n){
   
  }
  mod(n){
   
  }
  remove(str){
   
  }
  sub(from, n) {

  }
  get(){
    return this;
  }
}

class StringBuilder extends Builder{
  constructor(value='') {
    super(value);
  }
  plus(...args) {
    this.value += args.reduce((sum, current) => sum + current, '');
    return this;
  }
  minus(n){
    this.value=this.value.slice(0,-n);
    return this;
  }
  remove(str){
    var re = new RegExp(str, 'g');
    this.value=this.value.replace(re,'');
    return this;
  }
  sub(from, n) {
     this.value=this.value.substr(from,n);
     return this;
  }
  multiply(n){
    let str=this.value;
    for(let i=0;i<n-1;i++){
      this.value+=str;
    }
    return this;
  }
  divide(n){
   var k=Math.floor(this.value.length/n);
   this.value=this.value.substring(0,k);
    return this;
  }
}
class IntBuilder extends Builder{
  constructor(value=0) {
    super(value);
  }
  plus(...args) {
    this.value += args.reduce((sum, current) => sum + current, 0);
    return this;
  }
  minus(...args) {
    this.value += args.reduce((sum, current) => sum - current, 0);
    return this;
}
multiply(n){
  this.value=this.value*n;
  return this;
}
divide(n){
  this.value=Math.floor(this.value/n);
  return this;
}
mod(n){
  this.value=this.value%n;
  return this;
}
static random(from,to){
  
  return  Math.floor(Math.random() * (to - from+1) + from);
}
}
console.log(IntBuilder.random(10, 100));  
let newInt = new IntBuilder(10); 

newInt
.plus(2, 3, 2)                     // 17;
.minus(1, 2)                       // 14;
.multiply(2)                       // 28;
.divide(4)                         // 7;
.mod(3)                            // 1;
.get(); 
console.log(newInt);
let strBuilder = new StringBuilder('Hello');
strBuilder
.plus(' all', '!')
.minus(4)
.multiply(3)
.divide(4) 
.remove('l')                             
.sub(1,1)
.get();
console.log(strBuilder);