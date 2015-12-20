materialAdmin

    .controller('ChartJsLineController', function ($scope, $interval) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Series A', 'Series B', 'Series C'];
        $scope.options = {
            datasetFill: false
        };
        $scope.abcd = "abcd";


        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Series A', 'Series B', 'Series C'];
        $scope.options = {
            datasetFill: false
        };

        $scope.chartData = {
            // A labels array that can contain any sort of values
            labels: ['March', 'April', 'May', 'June', 'July'],
            // Our series array that contains series objects or in this case series data arrays
            series: [
                [43, 66, 75, 37, 72],
                [68,68,68,68,68]
            ]
        };


        $scope.chartOptions = {
            // Don't draw the line chart points
            showPoint: false,
            // Disable line smoothing
            lineSmooth: false,
            // X-Axis specific configuration
            axisX: {
                // We can disable the grid for this axis
                showGrid: false,
                // and also don't show the label
                showLabel: true,
            },
            // Y-Axis specific configuration
            axisY: {
                // Lets offset the chart a bit from the labels
                offset: 60,
                // The label interpolation function enables you to modify the values
                // used for the labels on each axis. Here we are converting the
                // values into million pound.
                /*labelInterpolationFnc: function(value) {
                    return '$' + value + 'm';
                }*/
            }
        };


    })



    // =========================================================================
    // Best Selling Widget
    // =========================================================================

    .controller('bestsellingCtrl', function(bestsellingService){
        // Get Best Selling widget Data
        this.img = bestsellingService.img;
        this.name = bestsellingService.name;
        this.range = bestsellingService.range;
        
        this.bsResult = bestsellingService.getBestselling(this.img, this.name, this.range);
    })



    // =========================================================================
    // Recent Items Widget
    // =========================================================================

    .controller('recentitemCtrl', function(recentitemService){
        
        //Get Recent Items Widget Data
        this.id = recentitemService.id;
        this.name = recentitemService.name;
        this.parseInt = recentitemService.price;
        
        this.riResult = recentitemService.getRecentitem(this.id, this.name, this.price);
    })


    // =========================================================================
    // Recent Posts Widget
    // =========================================================================
    
    .controller('recentpostCtrl', function(recentpostService){
        
        //Get Recent Posts Widget Items
        this.img = recentpostService.img;
        this.user = recentpostService.user;
        this.text = recentpostService.text;
        
        this.rpResult = recentpostService.getRecentpost(this.img, this.user, this.text);
    })


    //=================================================
    // Profile
    //=================================================

    .controller('profileCtrl', function(growlService){
        
        //Get Profile Information from profileService Service
        
        //User
        this.profileSummary = "Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo.";
    
        this.fullName = "Mallinda Hollaway";
        this.gender = "female";
        this.birthDay = "23/06/1988";
        this.martialStatus = "Single";
        this.mobileNumber = "00971123456789";
        this.emailAddress = "malinda.h@gmail.com";
        this.twitter = "@malinda";
        this.twitterUrl = "twitter.com/malinda";
        this.skype = "malinda.hollaway";
        this.addressSuite = "10098 ABC Towers";
        this.addressCity = "Dubai Silicon Oasis, Dubai";
        this.addressCountry = "United Arab Emirates";
    
    
        //Edit
        this.editSummary = 0;
        this.editInfo = 0;
        this.editContact = 0;
    
        
        this.submit = function(item, message) {            
            if(item === 'profileSummary') {
                this.editSummary = 0;
            }
            
            if(item === 'profileInfo') {
                this.editInfo = 0;
            }
            
            if(item === 'profileContact') {
                this.editContact = 0;
            }
            
            growlService.growl(message+' has updated Successfully!', 'inverse'); 
        }

    })



    //=================================================
    // LOGIN
    //=================================================

    .controller('loginCtrl', function(authentication,$scope,$state,$location,$http){

        //Status
        this.login = 1;
        this.register = 0;
        this.forgot = 0;

        this.userName = "";
        this.password = "";
        this.keepLoggedIn = false;


        this.signin = function() {

            if(this.userName == "CHIEF" && this.password == "@123"){

                // here, we fake authenticating and give a fake user

                var loggedinData = {
                    name: 'Rahul Dambre',
                    role:["CHIEF"]
                };
                //loggedinData.role.push(this.userName);
                authentication.authenticate(loggedinData);

                if ($scope.returnToState)
                    $state.go($scope.returnToState.name, $scope.returnToStateParams);
                else
                    $state.go('chief-manage-org');

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

                if ($scope.returnToState)
                    $state.go($scope.returnToState.name, $scope.returnToStateParams);
                else
                    $state.go('home');

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


    //=================================================
    // CALENDAR
    //=================================================
    
    .controller('calendarCtrl', function(){
    
        //Create and add Action button with dropdown in Calendar header. 
        this.month = 'month';
    
        this.actionMenu = '<ul class="actions actions-alt" id="fc-actions">' +
                            '<li class="dropdown">' +
                                '<a href="" data-toggle="dropdown"><i class="md md-more-vert"></i></a>' +
                                '<ul class="dropdown-menu dropdown-menu-right">' +
                                    '<li class="active">' +
                                        '<a data-calendar-view="month" href="">Month View</a>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a data-calendar-view="basicWeek" href="">Week View</a>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a data-calendar-view="agendaWeek" href="">Agenda Week View</a>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a data-calendar-view="basicDay" href="">Day View</a>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a data-calendar-view="agendaDay" href="">Agenda Day View</a>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                        '</li>';
        
        
    
        //Calendar Event Data
        this.calendarData = {
            eventName: ''
        };
    
        //Tags
        this.tags = [
            'bgm-teal',
            'bgm-red',
            'bgm-pink',
            'bgm-blue',
            'bgm-lime',
            'bgm-green',
            'bgm-cyan',
            'bgm-orange',
            'bgm-purple',
            'bgm-gray',
            'bgm-black',
        ]
        
        this.onTagClick = function(tag, $index) {
            this.activeState = $index;
            this.activeTagColor = tag;
        } 
            
        //Open new event modal on selecting a day
        this.onSelect = function(argStart, argEnd) {
            $('#addNew-event').modal('show');   
            this.calendarData.getStart = argStart;
            this.calendarData.getEnd = argEnd;
        }
        
        //Add new event
        this.addEvent = function() {
            var tagColor = $('.event-tag > span.selected').data('tag');

            if (this.calendarData.eventName.length > 0) {

                //Render Event
                $('#calendar').fullCalendar('renderEvent',{
                    title: this.calendarData.eventName,
                    start: this.calendarData.getStart,
                    end:  this.calendarData.getEnd,
                    allDay: true,
                    className: this.activeTagColor

                },true ); //Stick the event

                this.activeState = -1;
                this.calendarData.eventName = '';
                $('#addNew-event').modal('hide');
            }
        }

        
    })