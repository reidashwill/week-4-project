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
  pizza.id = this.assignId();
  this.pizzas.push(pizza)
}
PizzaShop.prototype.checkOut = function(){
    forEach(this.pizzas[1].price)
    var grandTotal =+ this.pizzas[i].price
    
  console.log(quarks);
  console.log(grandTotal);
  }
  // console.log(this.pizzas.length)
  // console.log(typeof(this.pizzas[1].price))
  // console.log(quarks);
  // console.log(grandTotal);
}
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
  return (this.price += this.toppings.length  + (this.specialtyToppings.length * 2) + (this.cheeses.length *2))
  }
//UI logic ------------------------------------------------------------------

function displayPizza(newPizza) {
  $("#return-field").html("")

  $("#return-field").append("We're firing up the replicators! Your " + newPizza.size + " pizza is on its way!  It will be fully loaded with: ")
    
  if(newPizza.toppings.length >=1){
  $("#return-field").append(newPizza.toppings + ", ")
  }
  if(newPizza.specialtyToppings.length >= 1){
  $("#return-field").append(newPizza.specialtyToppings + ", ")
  }
  if(newPizza.cheeses.length >= 1){
  $("#return-field").append(" and smothered in melted" + newPizza.cheeses + "!")
  } 
  $("#return-field").append(" once we have verified your payment of " + newPizza.price + " strips of Gold Pressed Latinum, one of our Dabo Girls will be delivering it to " + newPizza.deliveryLocation + " as soon as it's ready!")
  
}
function attachContactListeners () {
  $("#check-out").on("click", function() {
    quarks.checkOut();
  });
  
};

var quarks = new PizzaShop
$(document).ready(function(){
  attachContactListeners();
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
    $('input[type=checkbox]').prop('checked',false);
  
   
    var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedSpecialtyToppings, inputtedCheese, inputtedDeliveryLocation)
    
    quarks.addPizza(newPizza)
    console.log(newPizza.pizzaPrice())
    console.log(newPizza)
    displayPizza(newPizza);

    for (i=0; i > quarks.pizzas.length; i++){
      var grandTotal =+ this.pizzas[i].price
    console.log(quarks);
    console.log(grandTotal);
    }
  })
})