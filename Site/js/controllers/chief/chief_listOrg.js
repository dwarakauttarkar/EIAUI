/**
 * Created by Rahul on 9/2/2015.
 */

materialAdmin
    .controller('chief_listOrg', function($http,$scope,$state){


        this.viewOrgStats = function(organizationID){
            $state.go('chief-viewOrgStats');

        }
        this.manageOrg = function(organizationID){
            $state.go('chief-manageOrg');

        }


    });



