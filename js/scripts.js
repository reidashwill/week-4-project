// Business logic for pizza shop--------------------------------------------

function PizzaShop(){
  this.pizzas = []
  this.currentId = 0;
}
PizzaShop.prototype.assignId = function(){
  this.currentId +=1;
  return this.currentId
}
PizzaShop.prototype.addPizza = function (pizza){
  contact.id = this.assignId();
  this.pizzas.push(pizza)
}
  // business logic for pizza------------------------------------------------

function Pizza(size, toppings, specialtyToppings, price){
  this.size = size
  this.toppings = toppings
  this.specialtyToppings = specialtyToppings
  this.price = 0
}
Pizza.prototype.pizzaSize = function(inputtedSize) {
  this.size.append(toString(inputtedSize))
}
Pizza.prototype.addTopping = function(inputtedTopping) {
  this.toppings.push(inputtedTopping)
}
Pizza.prototype.addSpecialtyTopping = function(specialtyToppings){
  this.specialtyToppings.push(inputtedSpecialtyTopping)
}
Pizza.prototype.pizzaPrice = function() {
  return (this.price += (this.toppings.length / 2) + this.specialtyToppings.length)
  }
//UI logic ------------------------------------------------------------------

$(document).ready(function(){
  $("form#pizza-builder").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("#size").val();
    var inputtedToppings = [];
    var inputtedSpecialtyToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping)
    })
    $("input:checkbox[name=specializedTopping]:checked").each(function(){
      var specialtyTopping = $(this).val();
      inputtedSpecialtyToppings.push(specialtyTopping)
    })
  
   
    var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedSpecialtyToppings)
    console.log(newPizza)
  })
})