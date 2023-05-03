// stacks
//program to implement a stack through array
// var letters =[];
// console.log(typeof(letters));//object
// var word="free";
// var reverseWord = "";
// for(var i=0; i<word.length;i++){
//     letters.push(word[i]);
// }
// for(var i=0; i<word.length;i++){
//     reverseWord += letters.pop();
// }
// console.log(reverseWord);
// console.log((reverseWord === word)? "palindrome":"not");

// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
    console.log(this);//Stack
    console.log(typeof(this.storage))//Object

  
    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
        // console.log(this.count);
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        // console.log(this.count);
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
        
    }
    
    this.size = function() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push("hello");
myStack.push(1);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
