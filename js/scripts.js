// Business logic for pizza shop--------------------------------------------
// to be implemented later to add functionality for multiple pizzas
// function PizzaShop(){
//   this.pizzas = []
//   this.currentId = 0;
// }
// PizzaShop.prototype.assignId = function(){
//   this.currentId +=1;
//   return this.currentId
// }
// PizzaShop.prototype.addPizza = function (pizza){
//   contact.id = this.assignId();
//   this.pizzas.push(pizza)
// }
// business logic for pizza------------------------------------------------

function Pizza(size, toppings, specialtyToppings, cheese, deliveryLocation, price){
  this.size = size;
  this.toppings = toppings;
  this.specialtyToppings = specialtyToppings;
  this.cheeses = cheese;
  this.deliveryLocation = deliveryLocation;
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function() {
  if(this.size === "small"){
    this.price = 16
  }else if(this.size === "medium"){
    this.price = 20
  }else if(this.size === "large"){
    this.price = 24
  }else if(this.size === "extra large"){
    this.price = 28
  }
  return (this.price += (this.toppings.length / 2) + this.specialtyToppings.length)
  }
//Pizza UI logic ------------------------------------------------------------------

function displayPizza(newPizza) {
  if(newPizza.toppings.length === 0){
    $("#return-field").append("We're firing up the replicators! Your " + newPizza.size + " pizza is on its way!  It will be fully loaded with:"+ newPizza.specialtyToppings + "," + newPizza.cheeses + "!  Once we have verified your payment of " + newPizza.price + " strips of Gold Pressed Latinum, One of our Dabo Girls will be delivering it to " + newPizza.deliveryLocation + " as soon as it's ready!")
  }else{
  $("#return-field").append("We're firing up the replicators! Your " + newPizza.size + " pizza is on its way!  It will be fully loaded with:" + newPizza.toppings + "," + newPizza.specialtyToppings + "," + newPizza.cheeses + "!  Once we have verified your payment of " + newPizza.price + " strips of Gold Pressed Latinum, One of our Dabo Girls will be delivering it to " + newPizza.deliveryLocation + " as soon as it's ready!")
  }
}
$(document).ready(function(){
  $("form#pizza-builder").submit(function(event){
    event.preventDefault();
    var inputtedToppings = [];
    var inputtedSpecialtyToppings = [];
    var inputtedCheese = [];
    var inputtedSize = $("#size").val();
    var inputtedDeliveryLocation = $("#delivery-location").val();
    $("input:checkbox[name=topping]:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping)
    })
    $("input:checkbox[name=specializedTopping]:checked").each(function(){
      var specialtyTopping = $(this).val();
      inputtedSpecialtyToppings.push(specialtyTopping)
    })
    $("input:checkbox[name=cheese]:checked").each(function(){
      var cheese = $(this).val();
      inputtedCheese.push(cheese)
    })
  
   
    var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedSpecialtyToppings, inputtedCheese, inputtedDeliveryLocation)
    console.log(newPizza.pizzaPrice())
    console.log(newPizza)
    displayPizza(newPizza);
  })
})