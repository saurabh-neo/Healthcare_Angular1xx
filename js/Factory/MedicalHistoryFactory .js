(function() {
    var MedicalHistoryFactory=function ($http, $rootScope) {
         console.log("At start of MedicalHistoryFactory");   
        factory={};
       
         factory.getMedicalHistoryData=function() {
            
              console.log("start of  getMedicalHistoryData");   
              return $http({
                  url: './data/medhistory.json',
                  method: 'GET'
              }).then(
                 function (results) {
                     return results;
               });

           console.log("End of  getMedicalHistoryData");  
        };
        
    };
        MedicalHistoryFactory.$inject=['$http','$rootScope'];
      angular.module('healthApp').factory('MedicalHistoryFactory',MedicalHistoryFactory);
    }());