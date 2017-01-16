myApp.factory('AuthenticationFactory', function($window) {
  var auth = {
    isLogged: false,
    check: function() {
      if ($window.sessionStorage.user) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
        delete this.user;
      }
    }
  }

  return auth;
});

myApp.factory('UserAuthFactory', function($window, $location, $http, AuthenticationFactory) {
  return {
    login: function(username, password) 
      {
          console.log( username +password);
              return {
                username: username,
                password: password,
                  role :'admin'
              };
      },
    logout: function() {

      if (AuthenticationFactory.isLogged) {

        AuthenticationFactory.isLogged = false;
        delete AuthenticationFactory.user;
        delete AuthenticationFactory.userRole;

      
        delete $window.sessionStorage.user;
        delete $window.sessionStorage.userRole;

        $location.path("/login");
      }

    }
  }
});


