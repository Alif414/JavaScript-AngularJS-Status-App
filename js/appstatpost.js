var app = angular.module("myApp", []);
app.controller ("myCtrl",
    function ($scope){
        $scope.status = "Status";
        $scope.data = [];

        $scope.submitPost = function(status) {
            $scope.data.push(status); //push adds the status written into the data array
        }

        $scope.delete = function(index) {
            $scope.data.splice(index, 1); //splice removes the specific element in the array
}
    }
);
