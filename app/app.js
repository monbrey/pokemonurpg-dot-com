'use strict';

var app= angular.module('urpg-infohub', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/pokemon/:name", {
    templateUrl : "/app/ultradex/ultradex.component.html"
  })
  .when("/stats", {
    templateUrl : "/app/stats/stats.component.html"
  })
  .when("/resources", {
    templateUrl : "/app/resources/resources.component.html"
  })
  .when("/resources/:page", {
    templateUrl : function(params){
        return "/app/resources/resources-" + params.page + ".component.html";
    }
  })
  .otherwise({
    templateUrl : "/app/dashboard/dashboard.component.html"
  })
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
    	enabled: true,
    	requireBase: false
    });
}]);

app.directive('siteHeader', function() {
   return {
       restrict: 'E',
       templateUrl: "/app/site-header/site-header.component.html"
   };
});

app.directive('siteFooter', function() {
   return {
       restrict: 'E', 
       templateUrl: "/app/site-footer.html"
   };
});

app.run(function($rootScope, $location) {
	$rootScope.webHost = "https://pokemonurpg.com";
	$rootScope.serviceHost = "http://localhost:8080";
	
	$rootScope.spriteBase = "https://pokemonurpg.com/img/sprites/";
	$rootScope.iconBase = "https://pokemonurpg.com/img/icons/";
	$rootScope.modelBase = "https://pokemonurpg.com/img/models/";

	$rootScope.numSpecies = 807;
	$rootScope.numGenerations = 7;

	$rootScope.dashExceptions = ["nidoran-f", "nidoran-m", "ho-oh", "meowstic-m", "basculin-red-striped", "unown-a", "porygon-z" ];
});