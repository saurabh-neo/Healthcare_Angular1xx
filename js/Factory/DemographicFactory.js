(function() {
    var DemographicFactory=function ($http, $rootScope) {
         console.log("At start of DemographicFactory");   
        factory={};
       
         factory.getRaceData=function() {
            
              console.log("start of  getRaceData");   
              return $http({
                  url: './data/race.json',
                  method: 'GET'
              }).then(
                 function (results) {
                     return results;
               });

           console.log("End of  getRaceData");  
        };
        
         factory.getStateData=function() {
            
              console.log("start of  getStateData");   
              return $http({
                  url: './data/states.json',
                  method: 'GET'
              }).then(
                 function (results) {
                     return results;
               });

           console.log("End of  getStateData");  
        };
        
        
        factory.getLanguageData=function() {
            
              console.log("start of  getlanguageData");   
              return $http({
                  url: './data/language.json',
                  method: 'GET'
              }).then(
                 function (results) {
                     return results;
               });

           console.log("End of  getlanguageData");  
        };
        
        factory.getRelationshipData=function() {
            
              console.log("start of  getRelationshipData");   
              return $http({
                  url: './data/relationship.json',
                  method: 'GET'
              }).then(
                 function (results) {
                     return results;
               });

           console.log("End of  getRelationshipData");  
        };
     
        
        
         factory.getRegionData=function() {
            
              console.log("start of  DemographicFactory");   
              return $http({
                  url: './data/Region.json',
                  method: 'GET'
              }).then(
                 function (results) {
                     return results.data;
               });

           console.log("End of  DemographicFactory");  
        };
         return factory;
        
        
         console.log("At end of DemographicFactory");   
    };
     DemographicFactory.$inject=['$http','$rootScope'];
      angular.module('healthApp').factory('DemographicFactory',DemographicFactory);
    }());