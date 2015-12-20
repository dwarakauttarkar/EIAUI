/**
 * Created by Rahul on 9/2/2015.
 */

materialAdmin
    .controller('chief_ViewOrgStats', function($http,$scope){

        /*
        this.tabs = [
            {
                title : "BASIC INFO",
                id : "basic_info"
            },
            {
                title : "USERS OVERVIEW",
                id : "user_stats"
            },
            {
                title : "ACTIVE STUDENTS",
                id : "active_students"
            },{
                title : "ACTIVE FACULTIES",
                id : "active_faculties"
            },
        ];

        this.activeTab = this.tabs[1].id;
*/


        this.menu = {

            activeTabIndex: 0,
            titles: ["BASIC INFO", "QUICK STATS" , "USERS", "ACTIVITY STATS"],
            "3": {
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



