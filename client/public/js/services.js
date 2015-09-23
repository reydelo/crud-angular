app.factory('myFactory', ['$http', function($http){
 var beers = {};
 beers.getBeers = function() {
   return $http.get('api/v1/beers');
 };
 return beers;
}]);
