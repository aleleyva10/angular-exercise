console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('AngularEx', function() {
  var vm = this;

  vm.showFront = false;
  // cars array, two way bound via controller
  vm.cars = [];

  vm.addCar = function() {
    console.log('in vm.addCar');

    var newCar = {
      year: vm.yearIn,
      make: vm.makeIn,
      model: vm.modelIn,
      color: vm.colorIn,
      cost: vm.costIn
    }; // end newCar
    console.log('new car:', newCar);
    //push newCar into an array
    vm.cars.push(newCar);
    console.log(vm.cars);
  }; // end addCar


  vm.removeCar = function(index) {
    console.log('in removeCar:', index);
    vm.cars.splice(index, 1);
  }; // end removeCar

  vm.testClick = function() {
    vm.output = 'You typed:' + vm.userInput;
    console.log('You typed:', vm.userInput);
  }; // end testClick


  vm.toggleShow = function() {
    // invert boolean value
    vm.showFront = !vm.showFront;
  }; // end toggleShow

}); // end AngularEx controller
