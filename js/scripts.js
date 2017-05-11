// BACKEND LOGIC
var pizzaOrder = function(size, sauce, crust, topping) {
// onamotapoeia
// console.log(input);
// Create a CONSTRUCTOR, "Image".
//    The constructor has empty key:value pairs
function Pizza(size, sauce, crust, topping) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.topping = topping;
}

var myPizza = new Pizza(size,sauce,crust,topping);
console.log(myPizza);
// Create an OBJECT, "puff",
//      which is an instance of the constructor.
//      puff fills in key:value pairs
//        in the same order we defined them in the constructor

// puff is now the OBJECT
// Image is now the CONSTRUCTOR
Pizza.prototype.assemble = function(){
  return (this.size + " " + this.sauce + " " + this.crust + " " + this.topping);
}
console.log(myPizza.assemble());
//============================================
//      PROTOTYPES

// Create a CONSTRUCTOR, "Sound".
function Sound(name, description, tag) {
  this.name = name;
  this.description = description;
  this.tag = tag;
}

// Create a PROTOTYPE, "Sound.prototype.play"
// Sound.prototype.play = function() {
//   return this.name + " " + this.tag;
// }

// play is now the METHOD on the PROTOTYPE,
// Sound.play is not a thing we will ever use,
//    because you have to instantiate a new Sound object
//    in order to get to its method

// Create an OBJECT that uses that METHOD
// var womp = new Sound("WOMP ", "it's a sound", "THERE IT IS");
// console.log(womp.play());

}; // END OF BACKEND FUNCTIO


// FRONTEND LOGIC
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();

    var size = $("#userInputSize").val();
    var crust = $("#userInputCrust").val();
    var sauce = $("#userInputSauce").val();
    var veggieTopping $("input:checkbox[name=topping-veggie]:checked")forEach().val();
    var meatTopping $("input:checkbox[name=topping-meat]:checked")forEach().val();

    var output = pizzaOrder(size, sauce, crust, topping);
    $("#output").text(output);
  });
});
