function PizzaShop{
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
// business logic for pizza
function Pizza(){
  this.size = ""
  this.toppings = []
  this.specialtyToppings = []
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
}
Pizza.prototype.addSpecialtyTopping = function(specialtyToppings){
  this.specialtyToppings.push(specialtyTopping)
}

Pizza.prototype.showOrder = function()


//Business logic for toppings


  

