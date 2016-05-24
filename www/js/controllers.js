angular.module('starter.controllers', [])

//john-tries
.service('loginService',function($q){
    return {
        loginUser: function(name, pw){
            var deffered = $q.defer();
            var promise = deffered.promise;
            
            if(name=="user" && pw == "secret"){
                deffered.resolve("Login correct");
            }else{
                deffered.reject("Wrong password");
            }
            return promise;
        }
    };
    
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  })

.controller('startCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('LoginCtrl', function($scope,$ionicPopup, loginService){
    $scope.loginData = {};
  
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);
          loginService.loginUser($scope.loginData.username, $scope.loginData.password).
            then(function(response){
                var alertPopup = $ionicPopup.alert({
                title: 'Login correct!',
                template: 'You can definitely proceed!'
            }); 
            }, function(error){
                
            });

        //Simulate a login delay. Remove this and replace with your login
        //code if using a login system
//        $timeout(function() {
//          $scope.closeLogin();
//        }, 1000);
      };
});
    
//    // With the new view caching in Ionic, Controllers are only called
//  // when they are recreated or on app start, instead of every page change.
//  // To listen for when this page is active (for example, to refresh data),
//  // listen for the $ionicView.enter event:
//  //$scope.$on('$ionicView.enter', function(e) {
//  //});
//
//  // Form data for the login modal
//  $scope.loginData = {};
//
//  // Create the login modal that we will use later
//  $ionicModal.fromTemplateUrl('templates/login.html', {
//    scope: $scope
//  }).then(function(modal) {
//    $scope.modal = modal;
//  });
//
//  // Triggered in the login modal to close it
//  $scope.closeLogin = function() {
//    $scope.modal.hide();
//  };
//
//  // Open the login modal
//  $scope.login = function() {
//    $scope.modal.show();
//  };
//
//  // Perform the login action when the user submits the login form
//  $scope.doLogin = function() {
//    console.log('Doing login', $scope.loginData);
//
//    // Simulate a login delay. Remove this and replace with your login
//    // code if using a login system
//    $timeout(function() {
//      $scope.closeLogin();
//    }, 1000);
//  };
//
//    
//})  
//  
