/**
 * Created by Rahul on 10/10/2015.
 */

materialAdmin
    .controller('admin_communication', function ($http, $scope, $rootScope, $document,$filter) {


        var ctrlObject = this;

        ctrlObject.isShowTree = false;
        ctrlObject.switchCardsType = 'addgroups';

        ctrlObject.showHideTree = function () {
            ctrlObject.isShowTree = !ctrlObject.isShowTree;
        }

        /************** MANISH **************************/
            this.switchCards = function switchCards(param) {
                ctrlObject.switchCardsType = param;
            };

        /************** MANISH **************************/


/************** DUMMY DATA **************************/

        this.randomNo = function randomNo(min, max) {

                var no = Math.floor(Math.random() * (max - min)) + min;

                return function(){
                    return no;
                }
        };

        this.randomNoFloat = function randomNo(min, max) {
                  var no = Math.random() * (max - min) + min;

                  return no.toFixed(2);
        };

        this.recentMessages = {};
        this.recentMessages.broadcast = [
            {
                to:{
                    node:"09EC",
                    type:"Batch"   
                },
                sentMessage : "Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies",
                replies : [],
                isRepliesAccepted:true
            },
            {
                to:{
                    node:"09IT-A",
                    type:"Section"   
                },
                sentMessage : "Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"10IT-B",
                    type:"Section"   
                },
                sentMessage : "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"ECE",
                    type:"Department"   
                },
                sentMessage : "Per an error perpetua, fierent fastidii recteque ad pro. Mei id brute intellegam",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"09MEC",
                    type:"Batch"   
                },
                sentMessage : "Quisque nisi tellus, rhoncus quis est sit amet, lacinia euismod nunc. Aenean nec nibh velit. Fusce quis ante in nisl molestie fringilla. Nunc vitae ante id magna feugiat condimentum.",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"11CIV-A",
                    type:"Section"   
                },
                sentMessage : "Per an error perpetua, fierent fastidii recteque ad pro. Mei id brute intellegam",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"09MEC",
                    type:"Batch"   
                },
                sentMessage : "Per an error perpetua, fierent fastidii recteque ad pro. Mei id brute intellegam",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"IT",
                    type:"Department"   
                },
                sentMessage : "Cras porttitor turpis vitae leo accumsan molestie. Morbi vitae luctus leo. Sed nec scelerisque magna, et adipiscing est.",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"09IC-B",
                    type:"Section"   
                },
                sentMessage : "Integer eu lectus sollicitudin, hendrerit est ac, sollicitudin nisl.",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"10ELE",
                    type:"Batch"   
                },
                sentMessage : "Wendy create ipsum dolor sit amet, per cu solet docendi ntoenstion",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"CIV",
                    type:"Department"   
                },
                sentMessage : "Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies",
                replies : [],
                isRepliesAccepted:false
            },
            {
                to:{
                    node:"11ECE-B",
                    type:"Section"   
                },
                sentMessage : "An erant explicari salutatus duo, sumo doming delicata in cum. Eos at augue viderer principes",
                replies : [],
                isRepliesAccepted:false
            },
        ];



        $scope.treedata = [{
            id: "1",
            title: "SVBIT",
            type: "organization",
            childNodes: [
                {
                    id: "101",
                    title: "ECE",
                    type: "department",
                    collapsed: true,
                    childNodes: [
                        {
                            id: "1001",
                            title: "1st Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2001",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2002",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1002",
                            title: "2nd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2003",
                                    title: "CE0012",
                                    type: "batch"
                                },
                                {
                                    id: "2004",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1003",
                            title: "3rd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2005",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2006",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1004",
                            title: "4th Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2007",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2008",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "102",
                    title: "IT",
                    type: "department",
                    childNodes: [
                        {
                            id: "1005",
                            title: "1st Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2001",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2002",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1006",
                            title: "2nd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2003",
                                    title: "CE0012",
                                    type: "batch"
                                },
                                {
                                    id: "2004",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1007",
                            title: "3rd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2005",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2006",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1008",
                            title: "4th Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2007",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2008",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "103",
                    title: "CE",
                    type: "department",
                    childNodes: [
                        {
                            id: "1009",
                            title: "1st Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2001",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2002",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1010",
                            title: "2nd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2003",
                                    title: "CE0012",
                                    type: "batch"
                                },
                                {
                                    id: "2004",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1011",
                            title: "3rd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2005",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2006",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1012",
                            title: "4th Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2007",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2008",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "104",
                    title: "MECH",
                    type: "department",
                    childNodes: [
                        {
                            id: "1013",
                            title: "1st Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2001",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2002",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1014",
                            title: "2nd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2003",
                                    title: "CE0012",
                                    type: "batch"
                                },
                                {
                                    id: "2004",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1015",
                            title: "3rd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2005",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2006",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1016",
                            title: "4th Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2007",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2008",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "105",
                    title: "CIVIL",
                    type: "department",
                    childNodes: [
                        {
                            id: "1001",
                            title: "1st Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2001",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2002",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1002",
                            title: "2nd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2003",
                                    title: "CE0012",
                                    type: "batch"
                                },
                                {
                                    id: "2004",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1003",
                            title: "3rd Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2005",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2006",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        },
                        {
                            id: "1004",
                            title: "4th Year",
                            type: "year",
                            childNodes: [
                                {
                                    id: "2007",
                                    title: "CE0011",
                                    type: "batch"
                                },
                                {
                                    id: "2008",
                                    title: "CE0012",
                                    type: "batch"
                                }
                            ]
                        }
                    ]
                }
            ]
        }];




/******   END ******** DUMMY DATA  **************************/

 
        ctrlObject.selectedOrgPath = [];
        ctrlObject.selectedNode = {
            id:"1",
            title:"09ECE004",
            type:"batch"
        };

        $scope.$on('orgHierarchyNodeSelected', function (event, data) {

            console.log(data.path);
            console.log(data.selectedNode);

            ctrlObject.selectedOrgPath = data.path;
            ctrlObject.selectedNode = data.selectedNode;

            ctrlObject.isShowTree = false;


        });

        ctrlObject.menu = {

            activeTabIndex: 2,
            titles: ["BROADCAST", "GROUPS", "1-TO-1"],


        };

        ctrlObject.loadView = function (mainTabIndex, subTabIndex) {

            console.log("mainTabIndex = " + mainTabIndex);

            if (subTabIndex) {
                console.log("subTabIndex = " + subTabIndex);
            } else {
                if (ctrlObject.menu[mainTabIndex]) {
                    console.log("subTabIndex = " + 0);
                }
            }
        }

        ctrlObject.loadView(ctrlObject.menu.activeTabIndex);

    });

