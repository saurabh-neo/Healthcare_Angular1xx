(function(){    
    var DemographicController=function($scope,$rootScope,DemographicFactory)
    {
        $scope.race=[]; 
        $scope.states=[];
        $scope.language=[];
        $scope.relationship=[];
        
        
        console.log("In DemographicController");
        init();
        function init() 
        { 
             getRaceData(); 
             getStateData();
            getLanguageData();
            getRelationshipData(); 
        }
     
        
         function getRaceData() 
        {
           DemographicFactory.getRaceData().then(function (response) {
                $scope.race = response;
                console.log($scope.race);
            }, processError);
        }
            
          function getStateData() 
        {
           DemographicFactory.getStateData().then(function (response) {
                $scope.states = response;
                console.log($scope.states);
            }, processError);
        }
        
        
        function getLanguageData() 
        {
           DemographicFactory.getLanguageData().then(function (response) {
                $scope.language = response;
                console.log($scope.language);
            }, processError);
        }
         
        
        function getRelationshipData() 
        {
           DemographicFactory.getRelationshipData().then(function (response) {
                $scope.relationship = response;
                console.log($scope.relationship);
            }, processError);
        }
        
        
        function processError(error) {
            $scope.success = false;
            $scope.error = true;
            $scope.message = "";
            $scope.errormessage = error.data.message;
        console.log("End DemographicController");
    };    
    }
    //inject the para to controller
    DemographicController.$inject=['$scope','$rootScope', 'DemographicFactory'];
    //register the controller
    angular.module('healthApp').controller('DemographicController',DemographicController);    
}());