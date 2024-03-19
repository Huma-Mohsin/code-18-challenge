// //Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
//solution.
//declaring a function
function flexible_object(key, value) {
    var object = {}; //creating an empty i.e flexible object
    object[key] = value; //defining an object has key and value inwhich result is save according to user_choice
    return object;
}
var user_choice = flexible_object("mode", "white");
console.log(user_choice);
//Author- HUMA MOHSIN
