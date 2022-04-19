var myApp = angular.module('app', [
  "flow"
]);

//minor optimization and extended object to include
//image dimensions instead of another array :)
myApp.controller('UploadCtrl', function($scope) {
  $scope.processFiles = function(files) {
    angular.forEach(files, function(flowFile, i) {
      var fileReader = new FileReader();
      var image = new Image();
      fileReader.onload = function(event) {
        var uri = event.target.result;
        image.src = uri;
        image.onload = function() {
          flowFile.width = this.width;
          flowFile.height = this.height;
          $scope.$apply();
        };
      };
      fileReader.readAsDataURL(flowFile.file);
    });
  };

});