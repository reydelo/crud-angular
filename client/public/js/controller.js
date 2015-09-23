app.controller('beerController', function($scope, myFactory) {
 function getData() {
   myFactory.getBeers().success(function(response){
     $scope.beers = response;
   })
   .error(function(error){
     console.log(error);
   });
 }
 getData();
});
