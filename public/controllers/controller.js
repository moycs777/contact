function AppCtrl($scope, $http){
	console.log("hola desde el controlador angular");

	var refresh = function(){
		$http.get('/contactlist').success(function(response){
			console.log("success http GET");
			$scope.contactlist = response;
			$scope.contact = '';
		});
	};

	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(response){
			refresh();
		});
	};

	$scope.edit = function(id) {
		console.log(id);
		$http.get('/contactlist/' + id).success(function(response){
			$scope.contact = response;
		});
	};

	$scope.update = function (){
		console.log($scope.contact._id);	
		console.log($scope.contact.email);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
				refresh();
			})
	};

	$scope.deselect = function(){
		$scope.contact = "";
	};

	
}