/**
* Created by Rahul on 9/2/2015.
*/

materialAdmin
.controller('chief_createOrg', function($http,$scope,$state){

	this.createOrganization = function(){
		
		console.log('Came here');
		$state.go('chief-createOrgAdmin');
		
		//$state.go('chief-dashboard');
		
		swal("Good job!", "Let's Create some admins now and make it live !!!", "success");

	}
	
	this.createOrganizationAdmin = function(){
		console.log('In organization Admin');
		
		
		
		var Password = {
 
		  _pattern : /[a-zA-Z0-9_\-\+\.]/,
		  
		  
		  _getRandomByte : function()
		  {
		    // http://caniuse.com/#feat=getrandomvalues
		    if(window.crypto && window.crypto.getRandomValues) 
		    {
		      var result = new Uint8Array(1);
		      window.crypto.getRandomValues(result);
		      return result[0];
		    }
		    else if(window.msCrypto && window.msCrypto.getRandomValues) 
		    {
		      var result = new Uint8Array(1);
		      window.msCrypto.getRandomValues(result);
		      return result[0];
		    }
		    else
		    {
		      return Math.floor(Math.random() * 256);
		    }
		  },
		  
		  generate : function(length){
		    return Array.apply(null, {'length': length})
	      .map(function(){
	        var result;
	        while(true) 
	        {
	          result = String.fromCharCode(this._getRandomByte());
	          if(this._pattern.test(result))
	          {
	            return result;
	          }
	        }        
				}, this).join('');  
		  }    
		    
		};
		
		var password = Password.generate(16);		
		
		swal("Done!","Username and password for the admin you created are "+this.userName+" and "+password, "success");
		$state.go('chief-dashboard');
		
	}



});



