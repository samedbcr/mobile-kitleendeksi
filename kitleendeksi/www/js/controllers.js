angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.isim="Samed";
  $scope.kilo=20;
  $scope.boy=100;
  $scope.link="https://i.hizliresim.com/GmlY96.png"
  $scope.durum="Normal"

  $scope.hesapla = function(kg, cm){

      var hesap = kg/((cm/100)*(cm/100));
      // $scope.sonuc = kg/((cm/100)*(cm/100));

      if(hesap <= 18.4  && hesap >= 0){
        $scope.durum = "Zayıf";
        $scope.link="https://i.hizliresim.com/GmlY96.png"
      }else if(hesap <= 24.9  && hesap > 18.4){
        $scope.durum = "Normal";
        $scope.link="https://i.hizliresim.com/GmlY96.png"
      }else if(hesap <= 30.0  && hesap > 24.9){
        $scope.durum = "Fazla Kilolu";
        $scope.link="https://i.hizliresim.com/9aO4Er.png"     
      }else if(hesap <= 34.9  && hesap > 30.0){
        $scope.durum = "Şişman - I. Sınıf";
        $scope.link="https://i.hizliresim.com/MVrEW2.png"    
      }else if(hesap <= 44.9  && hesap > 34.9){
        $scope.durum = "Şişman - II. Sınıf";
        $scope.link="https://i.hizliresim.com/QL9AWG.png"
      }else if(hesap > 44.9){
        $scope.durum = "Aşırı Şişman - III. Sınıf";
        $scope.link="https://i.hizliresim.com/XM5vJj.png"
      }



  }
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  // $scope.kitleendeksi=kilo/((boy/100)*(boy/100));
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
