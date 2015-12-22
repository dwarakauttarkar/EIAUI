/**
 * Created by Sharath on 9/2/2015.
 */

//=================================================
// LOGIN
//=================================================

materialAdmin
.controller('loginCtrl', function(authentication,$scope,$state,$location,$http){

    //Status
    this.login = 1;
    this.register = 0;
    this.forgot = 0;

    this.userName = "";
    this.password = "";
    this.keepLoggedIn = false;


    this.signin = function() {


        if(this.userName == "FACULTY" && this.password == "@123"){

            console.log("loggin in as FACULTY");
            // here, we fake authenticating and give a fake user

            var loggedinData = {
                name: 'Sharath',
                role:'FACULTY'
            };
            //loggedinData.role.push(this.userName);
            authentication.authenticate(loggedinData);

            $state.go('faculty-communication');

            return;
        }



        if(this.userName == "ADMIN" && this.password == "@123"){

            console.log("loggin in as ADMIN");
            // here, we fake authenticating and give a fake user

            var loggedinData = {
                name: 'Rahul Dambre',
                role:'ADMIN'
            };
            //loggedinData.role.push(this.userName);
            authentication.authenticate(loggedinData);

            $state.go('admin-dashboard');

            return;
        }



        if(this.userName == "CHIEF" && this.password == "@123"){

            // here, we fake authenticating and give a fake user

            var loggedinData = {
                name: 'Rahul Dambre',
                role:"CHIEF"
            };
            //loggedinData.role.push(this.userName);
            authentication.authenticate(loggedinData);


                $state.go('chief-dashboard');

            return;
        }

        if(this.userName == "STUDENT" && this.password == "@123"){

            // here, we fake authenticating and give a fake user

            var loggedinData = {
                name: 'Rahul Dambre',
                role:["STUDENT"]
            };
            //loggedinData.role.push(this.userName);
            authentication.authenticate(loggedinData);

            $state.go('student-home');

            return;
        }


        /**** ACTUAL LOGIN VIA SERVICE *******/

        var host = $location.host();
        var port = 4567;
        //var host = $location.host();
        //var port = $location.port();

        var url = "http://"+host+":"+port + "/auth/dologin";

        var params = {
            "userName" : this.userName,
            "password" : this.password,
            "keepLoggedIn" : this.keepLoggedIn
        };

        console.log(params);
        console.log(url);

        $http.post(url,params).
            success(function(data, status, headers, config) {

                if(data.result == "FAILURE"){
                    alert("login failed");
                    return;
                }

                authentication.authenticate(data);

                if ($scope.returnToState)
                    $state.go($scope.returnToState.name, $scope.returnToStateParams);
                else
                    $state.go('home');

            }).
            error(function(data, status, headers, config) {
                // log error
            });







    };


})
