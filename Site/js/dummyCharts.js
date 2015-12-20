function randomNo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var lineChartMonthly = function (elementID, isProgressive , lab_att) {

        var ctx = document.getElementById(elementID).getContext("2d");

        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Todo Completed",
                    fillColor: "transparent",
                    strokeColor: "rgba(151,187,205,1)",
                    //strokeColor: "#009688",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [0, 125, 450, 1202, 2500, 3000, 5000],

                }
            ]
        };

        if(lab_att){
            data.datasets.push({
                    label: "Todo Completed",
                    fillColor: "transparent",
                    strokeColor: "#FF9800",
                    //strokeColor: "#009688",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [0, 125, 450, 1202, 2500, 3000, 5000],

                });
        }



        for (var i = 0; i < 7; i++) {
            data.datasets[0].data[i] = randomNo(2000, 20000);
        }

        if(lab_att)
        {
             for (var i = 0; i < 7; i++) {
                data.datasets[0].data[i] = randomNo(40, 98);
                data.datasets[1].data[i] = randomNo(40, 98);
            }
        }

        if (isProgressive) {
            data.datasets[0].data.sort(function (a, b) {
                return a - b;
            });
        }

        new Chart(ctx).Line(data, {
            scaleBeginAtZero: true,
            datasetFill: true,
            lineAtIndex: 20,
            scaleShowValues: true, 
            scaleValuePaddingX: 13,
            scaleValuePaddingY: 13,
            scaleShowLabels:true,
            //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        });


    }
    ;


var attenanceDeptWiseComp = function (elementID, isProgressive) {

    var ctx = document.getElementById(elementID).getContext("2d");

    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "ECE",
                fillColor: "#3F51B5",
                strokeColor: "#3F51B5",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "bar"

            },
            {
                label: "CSC",
                fillColor: "#8BC34A",
                strokeColor: "#8BC34A",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "bar"

            },
            {
                label: "CSC",
                fillColor: "#03A9F4",
                strokeColor: "#03A9F4",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "bar"

            },
            {
                label: "CSC",
                fillColor: "#FF5722",
                strokeColor: "#FF5722",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "bar"

            },
            {
                label: "Overview",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "line"

            }

        ]
    };


    for(var j = 0;j<data.datasets.length;j++){
        for (var i = 0; i < 7; i++) {
            data.datasets[j].data[i] = randomNo(45, 100);
        }
    }





    if (isProgressive) {
        data.datasets[0].data.sort(function (a, b) {
            return a - b;
        });
    }

    new Chart(ctx).Overlay(data, {
        scaleBeginAtZero: true,
        datasetFill: true,
        lineAtIndex: 20,
        barMaxWidth: 30
    });

}



var batch_compare_monthly_attendance = function (elementID, isProgressive) {

    var ctx = document.getElementById(elementID).getContext("2d");

    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "09ECE00A",
                fillColor: "#3F51B5",
                strokeColor: "#3F51B5",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "bar"

            },
            {
                label: "09ECE00B",
                fillColor: "#8BC34A",
                strokeColor: "#8BC34A",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "bar"

            }

        ]
    };


    for(var j = 0;j<data.datasets.length;j++){
        for (var i = 0; i < 7; i++) {
            data.datasets[j].data[i] = randomNo(45, 100);
        }
    }





    if (isProgressive) {
        data.datasets[0].data.sort(function (a, b) {
            return a - b;
        });
    }

    new Chart(ctx).Overlay(data, {
        scaleBeginAtZero: true,
        datasetFill: true,
        lineAtIndex: 20,
        barMaxWidth: 18
    });

}



var subjectsPieChart = function(elementID,isLabs){


     var pieData = [
                    {data: 3, color: '#F44336', label: 'Maths-3'},
                    {data: 2, color: '#03A9F4', label: 'Antennas and Wave propogation theory'},
                    {data: 2, color: '#8BC34A', label: 'Engineering Drawing'},
                    {data: 1, color: '#FFEB3B', label: 'Data Structures'},
                    {data: 1, color: '#009688', label: 'Logic and Design'},
                    {data: 1, color: '#009688', label: 'Artifical Intelligence'}
                ];


if(isLabs){

     var pieData = [

                    {data: 1, color: '#FFEB3B', label: 'Data Structures'},
                    {data: 1, color: '#009688', label: 'Logic and Design'},
                    {data: 1, color: '#8BC34A', label: 'Artifical Intelligence'}
                ];
        }


                /* Pie Chart */

                console.log($('#'+elementID)[0]);

                if($('#'+elementID)[0]){
                    $.plot('#'+elementID, pieData, {
                        series: {
                            pie: {
                                show: true,
                                stroke: { 
                                    width: 2,
                                },
                                 label: {
                                    show: true,
                                    radius: 1/1,
                                    formatter: function (label, series) {
                                        return '<div class="pie_label">' + label + '<br/><span class="percent">' + Math.round(series.percent) + '%</span></div>';

                                    },
                                    threshold: 0.1
                                },
                            },
                        },
                        legend: {
                            show:false
                        },
                        grid: {
                            hoverable: true,
                            clickable: true
                        },
                       
                        tooltip: true,
                        tooltipOpts: {
                            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                            shifts: {
                                x: 20,
                                y: 0
                            },
                            defaultTheme: false,
                            cssClass: 'flot-tooltip'
                        }

                    });
                }


}

var linechart_periods = function(elementID,isProgressive){


        var ctx = document.getElementById(elementID).getContext("2d");

        var data = {
            labels: ["P1", "P2", "P3", "P4", "P5", "P6", "P7","P8"],
            datasets: [
                {
                    label: "B1",
                    fillColor: "#3F51B5",
                    strokeColor: "#3F51B5",
                    //strokeColor: "#009688",
                    pointColor: "#3F51B5",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [0, 125, 450, 1202, 2500, 3000, 5000],

                },
                {
                    label: "B2",
                    fillColor: "#8BC34A",
                    strokeColor: "#8BC34A",
                    //strokeColor: "#009688",
                    pointColor: "#8BC34A",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [0, 125, 450, 1202, 2500, 3000, 5000],

                }
            ]
        };


        for (var i = 0; i < 8; i++) {
            data.datasets[0].data[i] = randomNo(40, 98);
            data.datasets[1].data[i] = randomNo(40, 98);
        }

        if (isProgressive) {
            data.datasets[0].data.sort(function (a, b) {
                return a - b;
            });
        }

        new Chart(ctx).Line(data, {
            scaleShowGridLines : true,
            scaleBeginAtZero: false,
            datasetFill: false,
            bezierCurve : false,
            lineAtIndex: 20,
            pointDotRadius : 7
            
        });



}



var subject_wise_attendance_lectures = function (elementID) {

    var ctx = document.getElementById(elementID).getContext("2d");

    var data = {
        labels: ["M3", "AWP", "ED", "DS", "DLD", "AI"],
        datasets: [
            {
                label: "09ECE00A",
                fillColor: "#3F51B5",
                strokeColor: "#3F51B5",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "bar"

            },
            {
                label: "09ECE00B",
                fillColor: "#8BC34A",
                strokeColor: "#8BC34A",
                //strokeColor: "#009688",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 125, 450, 1202, 2500, 3000, 5000],
                type: "bar"

            }

        ]
    };


    for(var j = 0;j<data.datasets.length;j++){
        for (var i = 0; i < 7; i++) {
            data.datasets[j].data[i] = randomNo(45, 100);
        }
    }


    new Chart(ctx).Overlay(data, {
        scaleBeginAtZero: true,
        datasetFill: true,
        lineAtIndex: 20,
        barMaxWidth: 18,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    });

}





var sem_vise = function (elementID,isCGPA,barColor) {

    var ctx = document.getElementById(elementID).getContext("2d");

    if(!barColor)
        barColor = "#3F51B5";

    var data = {
        labels: ["Sem - 1", "Sem - 2", "Sem - 3", "Sem - 4", "Sem - 5", "Sem - 6", "Sem - 7", "Sem - 8"],
        datasets: [
            {
                label: "09ECE00A",
                fillColor: barColor,
                strokeColor: barColor,
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 0, 0, 0],
                type: "bar"

            }
        ]
    };

    var lower = 40;
    var higher = 100;

    if(isCGPA){
       lower = 4.0;
      higher = 10.0;
    }
    for (var i = 0; i < 4; i++) {
           data.datasets[0].data[i] = randomNo(lower, higher);
    }


    new Chart(ctx).Overlay(data, {
        scaleBeginAtZero: true,
        datasetFill: true,
        lineAtIndex: 20,
        barMaxWidth: 18
    });

}



var cgpaViseStudentCount = function(elementID){


     var pieData = [
                    {data: randomNo(5,50), color: '#F44336', label: '9.0 to 10.0'},
                    {data: randomNo(5,50), color: '#03A9F4', label: '8.0 to 9.0'},
                    {data: randomNo(5,50), color: '#8BC34A', label: '7.0 to 8.0'},
                    {data: randomNo(5,50), color: '#FFEB3B', label: '6.0 to 7.0'},
                    {data: randomNo(5,50), color: '#009688', label: '5.0 to 6.0'},
                    {data: randomNo(5,50), color: '#3F51B5', label: 'Below 5.0'}
                ];


                if($('#'+elementID)[0]){
                    $.plot('#'+elementID, pieData, {
                        series: {
                            pie: {
                                startAngle:0.7,
                                show: true,
                                stroke: { 
                                    width: 2,
                                },
                                 label: {
                                    show: true,
                                    radius: 1/2,
                                    formatter: function (label, series) {
                                        var value = series.data[0][1];
                                        //return '<div class="pie_label2">' + label + '<br/><span class="pie_value">('+value+' Students)</span><br/><span class="percent">' + Math.round(series.percent) + '%</span></div>';
                                        return '<div class="pie_label"><span class="percent" style="color:white">' + Math.round(series.percent) + '%</span></div>';
                                    },
                                    threshold: 0
                                },
                            },
                        },
                        legend: {
                            backgroundOpacity:0.1,
                            show:true,
                            container:'#internalRangeLegend',   
                            labelFormatter: function (label, series) {
                                        var value = series.data[0][1];
                                        return '<div><td class="range">' + label + '</td><td class="count">'+value+'</td></div>';
                                    
                                    },
                        },
                        grid: {
                            show:true,
                            hoverable: true,
                            clickable: true,
                            margin:0.5,
                            axisMargin:0.5
                        },
                        margin: {
                            top: 1,
                            left: 2,
                            bottom: 3,
                            right: 4
                        },
                        tooltip: true,
                        tooltipOpts: {
                            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                            shifts: {
                                x: 20,
                                y: 0
                            },
                            defaultTheme: false,
                            cssClass: 'flot-tooltip'
                        }

                    });
                }


}



