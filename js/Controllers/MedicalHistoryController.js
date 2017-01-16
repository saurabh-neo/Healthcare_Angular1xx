(function(){    
    var MedicalHistoryController=function($scope,$rootScope,MedicalHistoryFactory)
    {
        $scope.medicalhistory=[];
        
        
        
        console.log("In MedicalHistoryController");
        init();
        function init() 
        { 
             getMedicalHistoryData();
             
        }
        
        function getMedicalHistoryData() 
        {
           MedicalHistoryFactory.getMedicalHistoryData().then(function (response) {
                $scope.medicalhistory = response;
                console.log($scope.medicalhistory);
            }, processError);
        }
        
        function processError(error) {
            $scope.success = false;
            $scope.error = true;
            $scope.message = "";
            $scope.errormessage = error.data.message;
        console.log("End MedicalHistoryController");
    };    
    }
    //inject the para to controller
    MedicalHistoryController.$inject=['$scope','$rootScope', 'MedicalHistoryFactory'];
    //register the controller
    angular.module('healthApp').controller('MedicalHistoryController',MedicalHistoryController);    
}());