var ciValueBarChart = {
    type: 'bar' 
}
var ciValueBarColorRWB5 = ['#5ea5dd','#b2d4ef','#cee4f5','#f7f7f7','#dc5d3d']
var ciValueXAxis2Year = {
    categories: ['1991', '2015']
}
var ciValueYAxis = {
    min: 0,
    max: 100,
    tickInterval: 10,
    title: {
        text: '%'
    }
}
var ciValueBarPlotOptions = {
    series: {
        stacking: 'percent'
    },
    bar: {
        borderWidth: 0,
        animation: false,
        pointPadding: -0.25
    }
}
var ciValueBarLegend = {
    reversed: true
}
$(function () {
    $('#value-quiet').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A quiet and peaceful place to live'
        },
        series: [{
            name: 'Extremely Important',
            data: [39.7,48.1]
        }, {
            name: 'Very Important',
            data: [49.8,38.7]
        }, {
            name: 'Moderately Important',
            data: [9.2,11]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.6,0.6]
        }, {
            name: 'Unimportant',
            data: [0.6,1.5]
        }]
    });
    $('#value-stable').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'An area that is stable'
        },
        series: [{
            name: 'Extremely Important',
            data: [20.8,51]
        }, {
            name: 'Very Important',
            data: [34.0,38.1]
        }, {
            name: 'Moderately Important',
            data: [35.9,8.7]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.2,1.3]
        }, {
            name: 'Unimportant',
            data: [8.1,0.9]
        }]
    });
    $('#value-closeness').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A sense of closeness and concern for your neighbors'
        },
        series: [{
            name: 'Extremely Important',
            data: [28.2,23.0]
        }, {
            name: 'Very Important',
            data: [50.6,40.3]
        }, {
            name: 'Moderately Important',
            data: [17.7,30.6]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.2,2.8]
        }, {
            name: 'Unimportant',
            data: [2.2,3.3]
        }]
    });
    $('#value-progressive').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A progressive place'
        },
        series: [{
            name: 'Extremely Important',
            data: [13.1,21.4]
        }, {
            name: 'Very Important',
            data: [43.4,33.8]
        }, {
            name: 'Moderately Important',
            data: [32.3,28.8]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [3.1,6.8]
        }, {
            name: 'Unimportant',
            data: [8.1,9.4]
        }]
    });
    $('#value-friendly').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A place with friendly people'
        },
        series: [{
            name: 'Extremely Important',
            data: [33.5,40.5]
        }, {
            name: 'Very Important',
            data: [53.0,44.2]
        }, {
            name: 'Moderately Important',
            data: [11.6,13.4]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.3,1.1]
        }, {
            name: 'Unimportant',
            data: [1.6,0.9]
        }]
    });
    $('#value-cost').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A lower cost of living than other places'
        },
        series: [{
            name: 'Extremely Important',
            data: [26.5,23.7]
        }, {
            name: 'Very Important',
            data: [40.6,32.0]
        }, {
            name: 'Moderately Important',
            data: [24.8,35.4]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [3.5,5.4]
        }, {
            name: 'Unimportant',
            data: [4.7,3.5]
        }]
    });
    $('#value-privacy').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A respect for the privacy of others'
        },
        series: [{
            name: 'Extremely Important',
            data: [42.8,38.2]
        }, {
            name: 'Very Important',
            data: [47.7,38.4]
        }, {
            name: 'Moderately Important',
            data: [8.8,19.0]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.0,2.2]
        }, {
            name: 'Unimportant',
            data: [0.8,2.2]
        }]
    });
    $('#value-restaurants').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'Plenty of restaurants and entertainment facilities'
        },
        series: [{
            name: 'Extremely Important',
            data: [12.3,27.0]
        }, {
            name: 'Very Important',
            data: [32.8,32.4]
        }, {
            name: 'Moderately Important',
            data: [40.2,31.7]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.8,4.1]
        }, {
            name: 'Unimportant',
            data: [14.0,4.8]
        }]
    });
    $('#value-clean').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A clean place without junk or roadside dumps'
        },
        series: [{
            name: 'Extremely Important',
            data: [51.1,64.4]
        }, {
            name: 'Very Important',
            data: [42.9,27.1]
        }, {
            name: 'Moderately Important',
            data: [5.2,6.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.0,1.1]
        }, {
            name: 'Unimportant',
            data: [0.8,1.3]
        }]
    });
    $('#value-rural').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A place that is more rural and small town than urbanized and big city in  its overall atmosphere'
        },
        series: [{
            name: 'Extremely Important',
            data: [31.7,31.8]
        }, {
            name: 'Very Important',
            data: [41.6,31.0]
        }, {
            name: 'Moderately Important',
            data: [19.7,22.3]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.2,6.5]
        }, {
            name: 'Unimportant',
            data: [5.9,8.4]
        }]
    });
    $('#value-edu').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A high quality educational system in place'
        },
        series: [{
            name: 'Extremely Important',
            data: [56.2,61.6]
        }, {
            name: 'Very Important',
            data: [35.4,24.7]
        }, {
            name: 'Moderately Important',
            data: [4.5,7.6]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.9,2.6]
        }, {
            name: 'Unimportant',
            data: [3.0,3.5]
        }]
    });
    $('#value-jobs').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'Lots of job opportunities for both younger and older job seekers'
        },
        series: [{
            name: 'Extremely Important',
            data: [43.8,42.3]
        }, {
            name: 'Very Important',
            data: [44.1,36.6]
        }, {
            name: 'Moderately Important',
            data: [9.4,16.3]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.6,2.8]
        }, {
            name: 'Unimportant',
            data: [2.1,2.0]
        }]
    });
    $('#value-pride').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A strong sense of community pride among people'
        },
        series: [{
            name: 'Extremely Important',
            data: [35.1,39.7]
        }, {
            name: 'Very Important',
            data: [49.2,37.3]
        }, {
            name: 'Moderately Important',
            data: [12.9,17.6]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.1,2.6]
        }, {
            name: 'Unimportant',
            data: [1.8,2.8]
        }]
    });
    $('#value-goals').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A general agreement among people who live there about goals and priorities for the future'
        },
        series: [{
            name: 'Extremely Important',
            data: [22.1,21.1]
        }, {
            name: 'Very Important',
            data: [49.0,45.1]
        }, {
            name: 'Moderately Important',
            data: [22.6,25.3]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [2.9,3.9]
        }, {
            name: 'Unimportant',
            data: [3.5,4.6]
        }]
    });
    $('#value-environment').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A concern for protecting the environment shared by citizens, businesses and government'
        },
        series: [{
            name: 'Extremely Important',
            data: [45.9,41.0]
        }, {
            name: 'Very Important',
            data: [43.4,37.7]
        }, {
            name: 'Moderately Important',
            data: [9.5,15.8]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.3,3.3]
        }, {
            name: 'Unimportant',
            data: [1.0,2.2]
        }]
    });
    $('#value-history').highcharts({
        chart: ciValueBarChart,
        colors: ciValueBarColorRWB5,
        xAxis: ciValueXAxis2Year,
        yAxis: ciValueYAxis,
        legend: ciValueBarLegend,
        plotOptions: ciValueBarPlotOptions,
        title: {
            text: 'A place with a sense of history which people value and protect'
        },
        series: [{
            name: 'Extremely Important',
            data: [23.3,31.7]
        }, {
            name: 'Very Important',
            data: [42.4,38.0]
        }, {
            name: 'Moderately Important',
            data: [29.4,19.7]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.2,6.7]
        }, {
            name: 'Unimportant',
            data: [3.8,3.9]
        }]
    });
});