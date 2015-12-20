/**
 * Created by Rahul on 9/2/2015.
 */

materialAdmin
    .controller('chief_dashboard', function ($http, $scope) {

        this.menu = {

            activeTabIndex: 0,
            titles: ["QUICK STATS", "USERS", "ACTIVITY STATS"],
            "2": {
                activeTabIndex: 0,
                titles: ["BY STUDENTS", "BY FACULTIES", "TODO", "NOTIFICATIONS", "EVENTS", "NOTICE BOARD"]
            }

        };

        this.loadView = function(mainTabIndex,subTabIndex){

            console.log("mainTabIndex = " + mainTabIndex);

            if(subTabIndex){
                console.log("subTabIndex = " + subTabIndex);
            }else{
                if(this.menu[mainTabIndex]){
                    console.log("subTabIndex = " +0);
                }
            }
        }

        this.loadView(this.menu.activeTabIndex);

    });



