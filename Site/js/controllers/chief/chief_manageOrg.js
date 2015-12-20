/**
 * Created by Rahul on 9/2/2015.
 */

materialAdmin
    .controller('chief_manageOrg', function($http,$scope,$state){


        this.menu = {

            activeTabIndex: 0,
            titles: ["EDIT INFO", "ADMIN USERS", "DEPARTMENTS"],


        };

        this.loadView = function(mainTabIndex){
            console.log("mainTabIndex = " + mainTabIndex);
        }

        this.loadView(this.menu.activeTabIndex);


        this.updateOrganization = function(){

            swal("Saved !", "", "success");

        }

        this.saveAdmin = function(){

            swal("Saved !", "Auto generated password will be automatically emailed to the user.", "success");
        }


    });



