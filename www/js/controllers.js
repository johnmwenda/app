angular.module('starter.controllers', [])

//INITIAL LOGIN SERVICE MOVED to services.js
//.service('authService',function($q){
//    return {
//        login: function(name, pw){
//            var deffered = $q.defer();
//            var promise = deffered.promise;
//            
//            if(name=="user" && pw == "secret"){
//                deffered.resolve("Login correct");
//            }else{
//                deffered.reject("Wrong password");
//            }
//            return promise;
//        }
//    };
//    
//})
.controller('MenuCtrl', function($scope){
    
})

.controller('AppCtrl', function($scope, $state, $ionicPopup,  AUTH_EVENTS){
	//$scope.username = AuthService.username();
	//the above or the below will work to set username
        $scope.user = {};
       
	$scope.setCurrentUsername = function(name){
		//$scope.username = name;
                 $scope.username = name;
                 
	};
        $scope.setProfile = function(url_avatar){
            $scope.user.avatar = url_avatar;
        };
	
	$scope.$on(AUTH_EVENTS.invalidclient, function(event){
            $scope.eventGenerated = event;
		var alertPopup = $ionicPopup.alert({
			title: 'Invalid client',
			template: 'You are trying to acess with invalid client'
		});
	});
        $scope.$on(AUTH_EVENTS.invaliduser, function(event){
            $scope.eventGenerated = event;
		var alertPopup = $ionicPopup.alert({
			title: 'Invalid user',
			template: 'Invalid username and password'
		});
	});
        $scope.$on(AUTH_EVENTS.invalidtoken, function(event){
            $scope.eventGenerated = event;
		var alertPopup = $ionicPopup.alert({
			title: 'Invalid token',
			template: 'Invalid token[expired, invalid]'
		});
	});
	
//	$scope.$on(AUTH_EVENTS.invaliduser, function(event){
//		//AuthService.logout();
//		$state.go('login');
//                $scope.eventGenerated = event;
//		var alertPopup = $ionicPopup.alert({
//			title: 'Invalid User',
//			template: 'Please login again'
//		});
//	});
//        $scope.$on(AUTH_EVENTS.invalidclient, function(event){
//		//AuthService.logout();
//		$state.go('login');
//                $scope.eventGenerated = event;
//		var alertPopup = $ionicPopup.alert({
//			title: 'Invalid Client name',
//			template: 'Please login again'
//		});
//	});
//        $scope.$on(AUTH_EVENTS.loggedin, function(event){
//		//AuthService.logout();
////		$state.go('login');
////                $scope.eventGenerated = event;
//		var alertPopup = $ionicPopup.alert({
//			title: 'Invalid User',
//			template: 'Please login again'
//		});
//	});
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
//
//.controller('PlaylistCtrl', function($scope, $stateParams) {
//})
.controller('FileTransferController', function($scope, $ionicPopup){
//    var alertPopup = $ionicPopup.alert({
//			title: 'file transfer controller working ',
//			template: 'aswesome, one step ahead'
//		});
    
    
    
//     $ionicPlatform.ready(function() {})
//  .then(function() {
//    return 
//  })
//  .then(function() {
//    
//  }).then(function(){
//       return $cordovaFileTransfer.downloadFile(url, targetPath + '/' + filename, options, trustHosts);
//  }).then(function(result) {
//        // Success!
//        }, function(err) {
//            var alertPopup = $ionicPopup.alert({
//			title: 'Error during file process',
//			template: 'Invalid username and password'
//		});
//            $scope.fileError = err;
//        }, function (progress) {
//            $timeout(function () {
//            $scope.downloadProgress = (progress.loaded / progress.total) * 100;
//        });
//    });
//  
  
  
  
  
  
//    $scope.testFileDownload = function () {
//        var directory = 'downloads'; 
//        var filename = 'profile.png';
//        // File for download
//        var url = "http://www.gajotres.net/wp-content/uploads/2015/04/logo_radni.png";
//        var targetPath = cordova.file.dataDirectory + directory;
//        var trustHosts = true;
//        var options = {};
//        
//        $cordovaFile.createDir(cordova.file.dataDirectory, directory, true)
//        .then(function(response){
////            return $cordovaFile.createFile(cordova.file.dataDirectory + directory, filename, false);
//            str = JSON.stringify(response); 
//            $scope.createFileDetails = str;
//            var alertPopup = $ionicPopup.alert({
//			title: 'managed to create a direcrory ',
//			template: 'aswesome, one step ahead'
//		});
//        }, function(err){
//            str = JSON.stringify(err);
//            $scope.createFileDetails = str;
//            var alertPopup = $ionicPopup.alert({
//			title: 'didnt create a direcrory ',
//			template: 'still got a long way to go!'
//		});
//        });
//        
//
////        // Save location
////        var targetPath = cordova.file.externalRootDirectory + filename;
////
////        $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
////            console.log('Success');
////        }, function (error) {
////            console.log('Error');
////        }, function (progress) {
////             console.log('Downloading: '+(progress.loaded/progress.total).toFixed()+'%');
////            // PROGRESS HANDLING GOES HERE
////        });
//    };
 ionic.Platform.ready(function(){

    var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
    //var targetPath = cordova.file.dataDirectory + "testImage.png";
    var trustHosts = true;
    var options = {};
    var alertPopup = $ionicPopup.alert({
			title: 'managed to download the file ',
			template: 'aswesome, one step ahead'
		});
//    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
//      .then(function(result) {
//        str = JSON.stringify(result); 
//            $scope.createFileDetails = str;
//            var alertPopup = $ionicPopup.alert({
//			title: 'managed to download the file ',
//			template: 'aswesome, one step ahead'
//		});
//          console.log('Success');
//      }, function(err) {
//        // Error
//        str = JSON.stringify(error);
//            $scope.createFileDetails = str;
//            var alertPopup = $ionicPopup.alert({
//			title: 'didnt download the file ',
//			template: 'still got a long way to go!'
//		});
//      }, function (progress) {
//        $timeout(function () {
//          $scope.downloadProgress = (progress.loaded / progress.total) * 100;
//        });
//      });

   }); 
   
   
     $scope.testFileDownload = function () {
 
      // File for download
      var url = "http://www.gajotres.net/wp-content/uploads/2015/04/logo_radni.png";
       
      // File name only
      var filename = url.split("/").pop();
       
      // Save location
      var targetPath = cordova.file.dataDirectory + filename;
 
      $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
          str = JSON.stringify(result); 
            $scope.createFileDetails = str;
            var alertPopup = $ionicPopup.alert({
			title: 'managed to create a direcrory ',
			template: 'aswesome, one step ahead'
		});
          console.log('Success');
      }, function (error) {
          str = JSON.stringify(error);
            $scope.createFileDetails = str;
            var alertPopup = $ionicPopup.alert({
			title: 'didnt create a direcrory ',
			template: 'still got a long way to go!'
		});
          console.log('Error');
      }, function (progress) {
          // PROGRESS HANDLING GOES HERE
      });
  };

            
})
.controller('DashCtrl', function($scope, $http){
//	$scope.logout = function(){
//		AuthService.logout();
//	};

	$scope.performValidRequest = function(){
		$http.get('http://localhost:8100/valid').then(
		function(result){
			$scope.result = result;
		});
	};
	$scope.performunauthorizedRequest = function(){
		$http.get('http://localhost:8100/notauthorized').then(
		function(result){
			$scope.result = result;
		}, function(error){
			$scope.result = error;
		});
	};
	$scope.performInvalidRequest = function(){
		$http.get('http://localhost:8100/notauthenticated').then(
		function(result){
			$scope.result = result;
		}, function(error){
			$scope.result = error;
		});
	};
//        ION SLIDES AWESOME - 
            $scope.options = {
                loop: false,
                effect: 'slide',
                speed: 500,
                autoHeight: true
              };

            $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
              // data.slider is the instance of Swiper
              $scope.slider = data.slider;
              console.log('Slider is initialized');
              console.log(data);
            });

            $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
              console.log('Slide change is beginning');
            });

            $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
              // note: the indexes are 0-based
              $scope.activeIndex = data.activeIndex;
              $scope.previousIndex = data.previousIndex;
            });

})

//.controller('AppCtrl', function($scope) {
//    //this sets a scope function in this parent controller that will be used by
//    //the children
//    $scope.setCurrentUsername= function(name){
//        $scope.username = name;        
//     };
//})

.controller('LoginCtrl', function($scope,$http, $ionicPopup, $ionicLoading, $state, authService, CrowdPesaAPI){
    
    var show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-spinner></ion-spinner>'
    }).then(function(){
       console.log("The loading indicator is now displayed");
        });
    };
    var hide = function(){
      $ionicLoading.hide().then(function(){
         console.log("The loading indicator is now hidden");
      });
    };
  
    $scope.settings = CrowdPesaAPI.showSettings();       
    $scope.loginData = {};
    
            
    

    $scope.doLogin = function(form) {
//        //console.log('Doing login', $scope.loginData);
           //if correct return bool true, if incorrect return error message
//           authService.login(loginData.username, loginData.password)
//            .then(function(data){
//                $state.go('app.dashboard',{}, {reload: true});
//                var url_avatar = "img/avatar.jpg";
//               $scope.setProfile(url_avatar);
//                 
//               $scope.setCurrentUsername(loginData.username);
//               
//               $scope.checkDetails = data;
//             
//               
//            }, function(error){
////                 var alertPopup = $ionicPopup.alert({
////                   title: 'Login failed',
////                   template: 'Please check your credentials and try again'
////               });
//                    $scope.checkDetails = error;
//            });
//        FINAL CONTROLLER LOGIN  
//               if(form.$valid){
//                   show();
//           authService.login(form.username.$modelValue, form.password.$modelValue)
//            .then(function(response){
//                $state.go('app.dashboard',{}, {reload: true});
//                var url_avatar = "img/avatar.jpg";
//               $scope.setProfile(url_avatar);
//                 
//               $scope.setCurrentUsername(form.username.$modelValue);
//               
//               $scope.checkDetails = response;
//              hide();
//               
//            }, function(error){
////                 var alertPopup = $ionicPopup.alert({
////                   title: 'Login failed',
////                   template: 'Please check your credentials and try again'
////               });
//                    $scope.checkDetails = error;
//                    hide();
//            });
//        }
 if(form.$valid){
                   show();
           authService.login(form.username.$modelValue, form.password.$modelValue)
            .then(function(response){
                $state.go('app.dashboard',{}, {reload: true});
                var url_avatar = "img/avatar.jpg";
               $scope.setProfile(url_avatar);
                 
               $scope.setCurrentUsername(form.username.$modelValue);
               
               $scope.checkDetails = response;
              hide();
            }, function(error){
//                 var alertPopup = $ionicPopup.alert({
//                   title: 'Login failed',
//                   template: 'Please check your credentials and try again'
//               });
                    $scope.checkDetails = error;
                    hide();
            })
            .then(function(response){
                
            }, function(error){
                
            })
            ;
        }
           
           
           
//        var data;   
//        $http.get('http://localhost:8100/valid').then(
//		function(result){
//			data = result;
//		});
//                $scope.checkDetails = data;
           
//        var response =  authService.login(loginData.username, loginData.password);
//         $scope.checkDetails = response;
//        if(response){
//            $scope.setCurrentUsername(loginData.username);
//            $scope.checkDetails = response;
//           //$state.go('app.dashboard',{},{reload:true});
//        }
//        else{
////            var alertPopup = $ionicPopup.alert({
////            title: 'Login incorrect!',
////            template: 'error'  
////            });
//       // $scope.checkDetails = response;
//        }
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
