/**
* Created by Sharath on 9/2/2015.
*/

materialAdmin
.controller('admin_createFaculty', function($http,$scope,$state){

	this.createFaculty = function(){
		
		console.log('Came here');
		$state.go('admin-dashboard');
		
		//$state.go('chief-dashboard');
		
		swal("Good job!", "The Faculty is created !!!", "success");

	}
	
	
});



