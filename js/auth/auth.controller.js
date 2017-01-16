myApp.controller('LoginCtrl', ['$scope', '$window', '$location', 'UserAuthFactory', 'AuthenticationFactory',
  function($scope, $window, $location, UserAuthFactory, AuthenticationFactory) {
    $scope.user = {
      username: 'saurabh-neo',
      password: 'matrix24'
    };

    $scope.login = function() {

      var username = $scope.user.username,
        password = $scope.user.password;

      if (username !== undefined && password !== undefined) {
       var userdetails= UserAuthFactory.login(username, password);
                                                          
        if(userdetails !== undefined )                                                   {
                 
          AuthenticationFactory.isLogged = true;
          AuthenticationFactory.user = userdetails.username;
          $window.sessionStorage.user = userdetails.username; // to fetch the user details on refresh
          $window.sessionStorage.userRole = userdetails.role; // to fetch the user details on refresh

          $location.path("/");

        }
        else
            {
          alert('Oops something went wrong!');
        }
     
        }
    };

  }
]);
