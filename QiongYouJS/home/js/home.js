app.controller("homeCtrl", ['$scope', '$http', function ($scope, $http) {

	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
		loop: true,
		autoplayDisableOnInteraction : false,
	})
	console.log(mySwiper);

    $scope.addGood = function () {
        console.log(this.item);
        
        //使用service的方法保存数据
        cartService.addGoods(this.item);
    };




 	//$scope.flag = true;
	// $scope.scrollFn = function () {
	// 	var myHome = document.querySelector(".myHome");
	// 	if($scope.flag){
	// 		myHome.style.left = 0;
	// 		$scope.flag = !$scope.flag;
	// 	} else {
	// 		myHome.style.left = (-80) +　"%" ;
	// 		$scope.flag = !$scope.flag;
	// 	}
		
	// }

    // $http.jsonp('http://10.0.159.241/qyer/home.php?callback=JSON_CALLBACK').success(function (data) {
    //     $scope.data = data.data;
    //       console.log(data);
    //      $scope.data = data.data.slide;





    // var myUrl ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSON_CALLBACK";
    //     $http.jsonp(myUrl).success(function (data) {  
    //                 console.log(data);  
    //             }).error(function(err){  
    //                //错误代码  
    //             });  
    //     $scope.firstName="Wang";  
    //     $scope.lastName="Ben";  
    // });




    // });

}]);