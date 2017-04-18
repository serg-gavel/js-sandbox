
// Given an array [1,2,3,4,5] how do you implement a function duplicator 
//to get that result [1,2,3,4,5,1,2,3,4,5]

Array.prototype.duplicator = function() {
  return this.concat(this); 
};

[1,2,3,4,5].duplicator(); 
