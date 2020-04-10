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

function Pizza(size, toppings, specialtytoppings, price){
  this.size = ""
  this.toppings = []
  this.specialtyToppings = []
  this.price = 0
}
Pizza.prototype.pizzaSize = function(size) {
  this.size.append(size)
}
Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
}
Pizza.prototype.addSpecialtyTopping = function(specialtyToppings){
  this.specialtyToppings.push(specialtyTopping)
}
Pizza.prototype.pizzaPrice = function() {
  return (this.price += (this.toppings.length / 2) + this.specialtyToppings.length)
  }
//UI logic ------------------------------------------------------------------

$(document).ready(function(){
  $("form#pizza-builder").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var toppings = [];
    var specializedToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var topping = $(this).val();
      toppings.push(topping)
    })
    $("input:checkbox[name=specializedTopping]:checked").each(function(){
      var specializedTopping = $(this).val();
      specializedToppings.push(specializedTopping)
    })
    console.log(toppings)
    console.log(specializedToppings)
    
   
  })
})