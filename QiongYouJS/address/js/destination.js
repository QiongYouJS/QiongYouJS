// <script type="text/javascript"></script>   JS
app.controller('desCtrl', ['$scope', '$http', function($scope, $http) {
		$http.jsonp('http://10.0.159.241/qyer/destination.php?callback=JSON_CALLBACK').success(function(data) {
			$scope.data = data.data;
			$scope.Data = data.data[0].tagdata.citylist;
		})
		$scope.changedata = function(currentdata) {
				if(this.$$watchers[0].last == currentdata.tagname) {
					$scope.current=currentdata.tagdata.citylist;
					$scope.surrent = currentdata.tagdata.countrylist;
				}
				$scope.Data = null;
		}
		
		$scope.city=function(){
			console.log(this.item.id)
		}
	}])