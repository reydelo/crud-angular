app.controller('beerController', function($scope, HTTPfactory) {

  // get request
 function getData() {
   HTTPfactory.get().success(function(response){
     $scope.beers = response;
   })
   .error(function(error){
     console.log(error);
   });
 }
 getData();

 //post request
 function postData(payload) {
   HTTPfactory.post(payload).success(function(response) {
    $scope.beers.push(response);
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });
 }
 $scope.addBeer = function() {
   var payload = {
     'name': $scope.name,
     'type': $scope.type,
     'abv' : $scope.abv
   };
   postData(payload);
 };

});
