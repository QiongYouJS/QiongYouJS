// <script type="text/javascript"></script>    JS
angular.module('myApp')
		.controller('CityCtrl',['$scope','$http',function($scope,$http){
			$scope.name = 'dfsfs';
			$http({
                method: "get",
                params:{id:'49'},
                url:"http://10.0.159.241/qyer/desall.php"
            }).success(function(data){
                console.log(data);
            })
		}])