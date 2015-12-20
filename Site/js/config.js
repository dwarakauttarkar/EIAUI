materialAdmin

    .run(function ($templateCache, $http, $rootScope, authentication, authorization) {
        $http.get('includes/templates.html', {cache: $templateCache});

        $rootScope.$on("$stateChangeError", function () {
            console.log('$stateChangeError');
            console.log.bind(console)
        });

        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;

            if (authentication.isIdentityResolved()) authorization.authorize();
        });

    })

    .config(function ($stateProvider, $urlRouterProvider) {

        var logging = true;

        $urlRouterProvider.otherwise("/signin");


        $stateProvider

            //------------------------------
            // PARENT OF ALL STATES WHERE AUTH IS REQUIRED
            //------------------------------
            .state('site', {
                'abstract': true,
                'template': "<ui-view />",
                resolve: {
                    authorize: ['authorization',
                        function (authorization) {
                            if (logging)console.log("authorizing");
                            return authorization.authorize();
                        }
                    ]
                }

            })

            .state('signin', {
                url: '/signin',
                templateUrl: 'views/login-register.html'
            })
            .state('accessdenied', {
                url: '/accessdenied',
                templateUrl: 'views/accessdenied.html'
            })

            //------------------------------
            // STUDENT ROLE SPECIFIC
            //------------------------------
            //Note, add parent only to immediate /URLs ,, as below don't have url and are getting acceseed to /home, "parent" is not needed
            .state('student-home', {
                templateUrl: 'views/student/home.html',
                data: {
                    roles: ['STUDENT']
                },
                onEnter: function () {
                    if (logging)console.log("in home-student");
                },
            })
            .state('student-attendance', {
                url: '/attendance',
                //parent: 'site',
                templateUrl: 'views/student/attendance.html',
                data: {
                    roles: ['STUDENT', 'PARENT']
                }
            })

            //------------------------------
            // CHIEF ROLE SPECIFIC
            //------------------------------
            .state('chief-dashboard', {
                parent: 'site',
                url: '/dashboard',
                data: {
                    roles: ['CHIEF']
                },
                templateUrl: 'views/chief/dashboard.html'
            })
             .state('chief-createOrgAdmin', {
                parent: 'site',
                url: '/createOrgAdmin',
                data: {
                    roles: ['CHIEF']
                },
                templateUrl: 'views/chief/createOrgAdmin.html'
            })
            .state('chief-listOrg', {
                url: '/list-org',
                parent: 'site',
                data: {
                    roles: ['CHIEF']
                },
                templateUrl: 'views/chief/listOrg.html'

            })
            .state('chief-viewOrgStats', {
                url: '/view-org',
                parent: 'site',
                data: {
                    roles: ['CHIEF']
                },
                templateUrl: 'views/chief/viewOrgStats.html'
            }).state('chief-createOrg', {
                url: '/create-org',
                parent: 'site',
                data: {
                    roles: ['CHIEF']
                },
                templateUrl: 'views/chief/createOrg.html'
            }).state('chief-manageOrg', {
                url: '/manage-org',
                parent: 'site',
                data: {
                    roles: ['CHIEF']
                },
                templateUrl: 'views/chief/manageOrg.html'
            })

            //------------------------------
            // college admin ROLE SPECIFIC
            //------------------------------
            .state('admin-dashboard', {
                parent: 'site',
                url: '/dashboard1',
                data: {
                    roles: ['ADMIN']
                },
                templateUrl: 'views/admin/dashboard.html'
            })
            .state('admin-communication', {
                parent: 'site',
                url: '/admin/communication',
                data: {
                    roles: ['ADMIN']
                },
                templateUrl: 'views/admin/communication.html'
            })

            //------------------------------
            // FACULY ROLE SPECIFIC
            //------------------------------
            .state('faculty-communication', {
                parent: 'site',
                url: '/communication',
                data: {
                    roles: ['FACULTY']
                },
                templateUrl: 'views/faculty/communication.html'
            })
            

    })

;
