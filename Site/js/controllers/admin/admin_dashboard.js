/**
 * Created by Rahul on 9/2/2015.
 */

materialAdmin
    .controller('admin_dashboard', function ($http, $scope, $rootScope, $document,$filter) {


        var ctrlObject = this;


/************** DUMMY DATA - RANDOM **************************/

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


        ctrlObject.dummyData = {

            CGPA60 : [],
            PERCENT60:[]

        };

        for(var i = 0 ; i<60;i++){
            ctrlObject.dummyData.CGPA60[i] = this.randomNoFloat(4.0,10.0);
            ctrlObject.dummyData.PERCENT60[i] = this.randomNoFloat(40,100);
        }

/******   END ******** DUMMY DATA - RANDOM **************************/

        ctrlObject.sem_vise_marks = 'cgpa';
        ctrlObject.studentMarksDetailsShow = {};
        

        ctrlObject.currentRow = 0;
        var rows = ["dept_attendance","row2","row3","row4","row5"];
        
        ctrlObject.prevRow = function(){
            if(ctrlObject.currentRow <= 0 ){
                ctrlObject.currentRow = 0;
                return;
            }

            ctrlObject.currentRow--;

            console.log(document.getElementById(rows[ctrlObject.currentRow]));

                var element = angular.element(document.getElementById(rows[ctrlObject.currentRow]))[0];
                var offset = 65;
                var duration = 600;
                //https://gist.github.com/gre/1650294
                var easing = function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
                $document.scrollToElement( element, offset, duration,easing);
                



        }

        ctrlObject.nextRow = function(){
            if(ctrlObject.currentRow >= rows.length){
                ctrlObject.currentRow = rows.length - 1;
                return;
            }

            ctrlObject.currentRow++;

                var element = angular.element(document.getElementById(rows[ctrlObject.currentRow]))[0];
                var offset = 65;
                var duration = 600;
                //https://gist.github.com/gre/1650294
                var easing = function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
                $document.scrollToElement( element, offset, duration,easing);
                



        }
        


        ctrlObject.studentListAttendace = [];
        ctrlObject.studentListAttendaceFiltered = [];
        ctrlObject.studentListAttendace.config = {
                itemsPerPage: 5,
                fillLastPage: true
            };

        for(var i = 0;i<60;i++){
            ctrlObject.studentListAttendace.push(
                {
                    id:i,
                    studentCode:"SC000"+i,
                    name:"Rahul Dambre",
                    lectureAttendance:""+randomNo(50,90)+"%",
                    labAttendance:""+randomNo(50,90)+"%",
                }
            );
        }

        ctrlObject.studentListAttendaceFiltered = ctrlObject.studentListAttendace;

        ctrlObject.filterStudentAtt = function(){
            ctrlObject.studentListAttendaceFiltered = $filter("filter")(ctrlObject.studentListAttendace,ctrlObject.searchStudentModel);
        } 


        ctrlObject.facultyListAttendace = [];
        ctrlObject.facultyListAttendaceFiltered = [];
        ctrlObject.facultyListAttendace.config = {
                itemsPerPage: 5,
                fillLastPage: true
            };

        for(var i = 0;i<7;i++){
            ctrlObject.facultyListAttendace.push(
                {
                    id:i,
                    facultyCode:"EMP000"+i,
                    name:"Rahul Dambre",
                    subjectName:"Data Structure and Logic",
                    lectureAttendance:""+randomNo(50,90)+"%",
                    labAttendance:""+randomNo(50,90)+"%"
                }
            );
        }

        ctrlObject.facultyListAttendaceFiltered = ctrlObject.facultyListAttendace;

        ctrlObject.filterFacultyAtt = function(){
            ctrlObject.facultyListAttendaceFiltered = $filter("filter")(ctrlObject.facultyListAttendace,ctrlObject.searchFacultyModel);
        } 



        ctrlObject.setSem = function(sem){
            ctrlObject.semesters.selected = sem;
        }

        ctrlObject.semesters = {
            
            selected : {
                no:4,
                subscript:"th"                
            },
            /*selected:"all",*/
            list:[

                {
                    no:1,
                    subscript:"st"
                },
                {
                    no:2,
                    subscript:"nd"
                },
                {
                    no:3,
                    subscript:"rd"
                },
                {
                    no:4,
                    subscript:"th"
                },
                {
                    no:5,
                    subscript:"th",
                    disabled:true
                },
                {
                    no:6,
                    subscript:"th",
                    disabled:true
                },
                {
                    no:7,
                    subscript:"th",
                    disabled:true
                },
                {
                    no:8,
                    subscript:"th",
                    disabled:true
                }
            ]

        }
        ;

        ctrlObject.t = "batches";

        ctrlObject.periods = [];
        ctrlObject.checkUncheckPeriodBox = function(periodNo){

            if(!ctrlObject.periods[periodNo])
            {
                ctrlObject.periods[periodNo]  = {
                    isActive : true
                };
                               
            }
            else
                ctrlObject.periods[periodNo].isActive = !ctrlObject.periods[periodNo].isActive;

                var element = angular.element(document.getElementById('periods'))[0];
                var offset = 0;
                var duration = 300;
                //https://gist.github.com/gre/1650294
                var easing = function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
                $document.scrollToElement( element, offset, duration,easing);
                


                
        };
        
        ctrlObject.hasAnyActivePeriods = function(){

            for (var property in ctrlObject.periods) {
                if (ctrlObject.periods.hasOwnProperty(property)) {
                    if(ctrlObject.periods[property].isActive){
                        return true;                        
                    }
                }
            }

            return false;
        }


        

        

        var notify = function (title, msg, icon, type, from, align, animIn, animOut) {
            $.growl({
                icon: icon,
                title: title,
                message: msg,
                url: ''
            }, {
                element: 'body',
                type: type,
                allow_dismiss: true,
                placement: {
                    from: from,
                    align: align
                },
                offset: {
                    x: 20,
                    y: 85
                },
                spacing: 10,
                z_index: 1031,
                delay: 2500,
                timer: 1000,
                url_target: '_blank',
                mouse_over: false,
                animate: {
                    enter: animIn,
                    exit: animOut
                },
                icon_type: 'class',
                template: '<div data-growl="container" class="alert" role="alert">' +
                '<button type="button" class="close" data-growl="dismiss">' +
                '<span aria-hidden="true">&times;</span>' +
                '<span class="sr-only">Close</span>' +
                '</button>' +
                '<span data-growl="icon"></span>' +
                '<span data-growl="title"></span>' +
                '<span data-growl="message"></span>' +
                '<a href="#" data-growl="url"></a>' +
                '</div>'
            });
        };


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




        ctrlObject.isShowTree = false;
        ctrlObject.showMainGraph = false;

        ctrlObject.showHideTree = function () {
            ctrlObject.isShowTree = !ctrlObject.isShowTree;
        }


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

            swal({
                title: "Selected : ECE Department!",
                //text: "Now loading",
                timer: 1000,
                type: "success",
                showConfirmButton: false
            });

        });

        ctrlObject.selectedDept = null;
        ctrlObject.selectedYear = null;
        ctrlObject.selectedBatch = null;

        ctrlObject.menu = {

            activeTabIndex: 2,
            titles: ["QUICK STATS", "ATTENDANCE ANALYSIS", "MARKS ANALYSIS"],


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


materialAdmin.directive('treeModel', ['$compile', '$rootScope', function ($compile, $rootScope) {

    return {

        restrict: 'A',
        //transclude: true,
        link: function (scope, element, attrs) {
            //tree id
            var treeId = attrs.treeId;

            //tree model
            var treeModel = attrs.treeModel;

            //node id
            var nodeId = attrs.nodeId || 'id';

            //node label
            var nodeLabel = attrs.nodeLabel || 'title';

            //children
            var nodeChildren = attrs.nodeChildren || 'childNodes';

            if (scope[treeModel]) {
                var collapsedDept = scope[treeModel][0].childNodes[0];
                collapsedDept.collapsed = true;
            }

            var searchNodeInTree = searchNodeInTree || function (nodeToFind, currentNode, pathArray) {

                    if (currentNode === nodeToFind) {
                        pathArray.push(currentNode.title);
                        return true;
                    }

                    if (currentNode.childNodes && currentNode.childNodes.length > 0) {

                        for (var i = 0; i < currentNode.childNodes.length; i++) {

                            var node = currentNode.childNodes[i];
                            if (searchNodeInTree(nodeToFind, node, pathArray)) {
                                pathArray.push(currentNode.title);
                                return true;
                            }
                        }

                    }

                    return false;

                }


            //tree template
            /*				var template =
             '<ul>' +
             '<li data-ng-repeat="node in ' + treeModel + '">' +
             '<i class="collapsed" data-ng-show="node.' + nodeChildren + '.length && node.collapsed" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' +
             '<i class="expanded" data-ng-show="node.' + nodeChildren + '.length && !node.collapsed" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' +
             '<i class="normal" data-ng-hide="node.' + nodeChildren + '.length"></i> ' +
             '<span data-ng-class="node.selected" data-ng-click="' + treeId + '.selectNodeLabel(node)">{{node.' + nodeLabel + '}}</span>' +
             '<div data-ng-hide="node.collapsed" data-tree-id="' + treeId + '" data-tree-model="node.' + nodeChildren + '" data-node-id=' + nodeId + ' data-node-label=' + nodeLabel + ' data-node-children=' + nodeChildren + '></div>' +
             '</li>' +
             '</ul>';
             */
            //tree template
            var template =
                '<ul ng-if="' + treeModel + ' && ' + treeModel + '.length > 0 ">' +
                '<li data-ng-repeat="node in ' + treeModel + '">' +
                    /*
                     '<div ng-if="node.type==\'department\'" class="btn-group" >' +
                     '<button data-ng-class="node.selected"  data-ng-click="' + treeId + '.selectNodeLabel(node)" type="button" class="btn btn-primary waves-effect">{{node.' + nodeLabel + '}}{{node.collapsed}}</button>' +
                     '<button type="button" class="btn btn-default waves-effect"  data-ng-click="node.collapsed = !node.collapsed"><i class="md md-expand-more"></i></button>' +
                     '</div>'+
                     */
                '<button data-ng-class="node.selected" class="btn btn-primary waves-effect" data-ng-click="' + treeId + '.selectNodeLabel(node)"  >{{node.' + nodeLabel + '}}</button>' +
                    //'<span data-ng-class="node.selected" data-ng-click="' + treeId + '.selectNodeLabel(node)">{{node.' + nodeLabel + '}}</span>' +
                '<div data-ng-if="node.type != \'department\' || node.collapsed == true" data-tree-id="' + treeId + '" data-tree-model="node.' + nodeChildren + '" data-node-id=' + nodeId + ' data-node-label=' + nodeLabel + ' data-node-children=' + nodeChildren + '></div>' +
                '</li>' +
                '</ul>';


            //check tree id, tree model
            if (treeId && treeModel) {

                //root node
                if (attrs.angularTreeview) {

                    //create tree object if not exists
                    scope[treeId] = scope[treeId] || {};

                    scope[treeId].getSelectedPath = scope[treeId].getSelectedPath || function (node) {
                            var pathArray = [];
                            searchNodeInTree(node, scope[treeModel][0], pathArray);
                            pathArray.reverse();

                            return pathArray;
                        }

                    //if node head clicks,
                    scope[treeId].selectNodeHead = scope[treeId].selectNodeHead || function (selectedNode) {

                            //Collapse or Expand
                            selectedNode.collapsed = !selectedNode.collapsed;
                        };

                    //if node label clicks,
                    scope[treeId].selectNodeLabel = scope[treeId].selectNodeLabel || function (selectedNode) {

                            if (selectedNode.type == "department" && !selectedNode.collapsed) {
                                collapsedDept.collapsed = false;
                                selectedNode.collapsed = true;
                                collapsedDept = selectedNode;
                                return;
                            }

                            /*
                             //Reset selected status
                             if(selectedNode.selected == 'selected'){
                             selectedNode.selected = undefined;
                             return;
                             }

                             //remove highlight from previous node
                             if( scope[treeId].currentNode && scope[treeId].currentNode.selected ) {
                             scope[treeId].currentNode.selected = undefined;
                             }

                             //set highlight to selected node
                             selectedNode.selected = 'selected';

                             //set currentNode
                             scope[treeId].currentNode = selectedNode;

                             */

                            //selectedNode;

                            var selectedPath = scope[treeId].getSelectedPath(selectedNode);

                            var data = {
                                path: selectedPath,
                                selectedNode: {
                                    id: selectedNode.id,
                                    title: selectedNode.title,
                                    type: selectedNode.type
                                }
                            }
                            $rootScope.$broadcast('orgHierarchyNodeSelected', data);


                        };
                }

                //Rendering template.
                element.html('').append($compile(template)(scope));

            }
        }
    };
}]);

