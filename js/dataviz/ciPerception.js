var chart = {
    type: 'bar'
}
var color = ['#5ea5dd','#b2d4ef','#cee4f5','#f7f7f7','#dc5d3d']
var xAxis = {
    categories: ['1991', '2015']
}
var yAxis = {
    min: 0,
    max: 100,
    tickInterval: 10,
    title: {
        text: '%'
    }
}
var plotOptions = {
    series: {
        stacking: 'percent'
    },
    bar: {
        borderWidth: 0,
        animation: false,
        pointPadding: -0.25
    }
}
var legend = {
    reversed: true
}
$(function () {
    $('#perception-quiet').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A quiet and peaceful place to live'
        },
        series: [{
            name: 'Excellent',
            data: [21.8,11.6]
        }, {
            name: 'Very Good',
            data: [38.7,36.2]
        }, {
            name: 'Good',
            data: [30.6,43.9]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.6,2.9]
        }, {
            name: 'Less than Satisfactory',
            data: [8.2,5.5]
        }]
    });
    $('#perception-stable').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'An area that is stable'
        },
        series: [{
            name: 'Excellent',
            data: [9.8,11.2]
        }, {
            name: 'Very Good',
            data: [20.2,38.7]
        }, {
            name: 'Good',
            data: [42.3,38.3]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.6,6.6]
        }, {
            name: 'Less than Satisfactory',
            data: [26.1,5.3]
        }]
    });
    $('#perception-closeness').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A sense of closeness and concern for your neighbors'
        },
        series: [{
            name: 'Excellent',
            data: [15.2,5.7]
        }, {
            name: 'Very Good',
            data: [34.9,25.4]
        }, {
            name: 'Good',
            data: [40.7,47.8]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.9,11.8]
        }, {
            name: 'Less than Satisfactory',
            data: [8.4,9.2]
        }]
    });
    $('#perception-progressive').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A progressive place'
        },
        series: [{
            name: 'Excellent',
            data: [9.6,5.9]
        }, {
            name: 'Very Good',
            data: [36.9,21.5]
        }, {
            name: 'Good',
            data: [42.0,35.7]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.1,18.0]
        }, {
            name: 'Less than Satisfactory',
            data: [10.4,18.9]
        }]
    });
    $('#perception-friendly').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A place with friendly people'
        },
        series: [{
            name: 'Excellent',
            data: [19.6,12.8]
        }, {
            name: 'Very Good',
            data: [41.0,33.3]
        }, {
            name: 'Good',
            data: [34.7,44.2]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.6,5.1]
        }, {
            name: 'Less than Satisfactory',
            data: [4.0,4.6]
        }]
    });
    $('#perception-cost').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A lower cost of living than other places'
        },
        series: [{
            name: 'Excellent',
            data: [3.9,7.2]
        }, {
            name: 'Very Good',
            data: [20.0,23.9]
        }, {
            name: 'Good',
            data: [46.3,42.0]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [3.9,12.0]
        }, {
            name: 'Less than Satisfactory',
            data: [25.9,14.9]
        }]
    });
    $('#perception-privacy').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A respect for the privacy of others'
        },
        series: [{
            name: 'Excellent',
            data: [13.5,6.6]
        }, {
            name: 'Very Good',
            data: [40.8,24.3]
        }, {
            name: 'Good',
            data: [37.9,46.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.8,15.5]
        }, {
            name: 'Less than Satisfactory',
            data: [7.0,7.5]
        }]
    });
    $('#perception-restaurants').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'Plenty of restaurants and entertainment facilities'
        },
        series: [{
            name: 'Excellent',
            data: [13.8,3.7]
        }, {
            name: 'Very Good',
            data: [17.3,19.1]
        }, {
            name: 'Good',
            data: [34.4,41.9]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.9,5.9]
        }, {
            name: 'Less than Satisfactory',
            data: [33.6,29.4]
        }]
    });
    $('#perception-clean').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A clean place without junk or roadside dumps'
        },
        series: [{
            name: 'Excellent',
            data: [9.9,10.6]
        }, {
            name: 'Very Good',
            data: [33.8,25.1]
        }, {
            name: 'Good',
            data: [41.8,39.2]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.0,9.0]
        }, {
            name: 'Less than Satisfactory',
            data: [14.5,16.1]
        }]
    });
    $('#perception-rural').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A place that is more rural and small town than urbanized and big city in  its overall atmosphere'
        },
        series: [{
            name: 'Excellent',
            data: [17.5,9.9]
        }, {
            name: 'Very Good',
            data: [37.4,30]
        }, {
            name: 'Good',
            data: [39.5,42.3]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.6,9.5]
        }, {
            name: 'Less than Satisfactory',
            data: [5.0,8.4]
        }]
    });
    $('#perception-edu').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A high quality educational system in place'
        },
        series: [{
            name: 'Excellent',
            data: [9.6,6.4]
        }, {
            name: 'Very Good',
            data: [23.4,23.5]
        }, {
            name: 'Good',
            data: [40.1,34.5]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [6.8,16.3]
        }, {
            name: 'Less than Satisfactory',
            data: [20.0,19.3]
        }]
    });
    $('#perception-jobs').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'Lots of job opportunities for both younger and older job seekers'
        },
        series: [{
            name: 'Excellent',
            data: [7.8,6.8]
        }, {
            name: 'Very Good',
            data: [20.0,19.0]
        }, {
            name: 'Good',
            data: [39.9,36.9]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [3.4,20.8]
        }, {
            name: 'Less than Satisfactory',
            data: [28.9,16.6]
        }]
    });
    $('#perception-pride').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A strong sense of community pride among people'
        },
        series: [{
            name: 'Excellent',
            data: [14.1,6.8]
        }, {
            name: 'Very Good',
            data: [38.9,19.0]
        }, {
            name: 'Good',
            data: [39.4,47.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.3,23.7]
        }, {
            name: 'Less than Satisfactory',
            data: [6.3,7.2]
        }]
    });
    $('#perception-goals').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A general agreement among people who live there about goals and priorities for the future'
        },
        series: [{
            name: 'Excellent',
            data: [6.2,3.1]
        }, {
            name: 'Very Good',
            data: [25.5,9.7]
        }, {
            name: 'Good',
            data: [50.9,43.8]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [4.0,27.1]
        }, {
            name: 'Less than Satisfactory',
            data: [13.4,16.3]
        }]
    });
    $('#perception-environment').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A concern for protecting the environment shared by citizens, businesses and government'
        },
        series: [{
            name: 'Excellent',
            data: [6.8,3.3]
        }, {
            name: 'Very Good',
            data: [34.4,13.8]
        }, {
            name: 'Good',
            data: [41.4,39.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [2.6,23.1]
        }, {
            name: 'Less than Satisfactory',
            data: [14.8,20.7]
        }]
    });
    $('#perception-history').highcharts({
        chart: chart,
        colors: color,
        xAxis: xAxis,
        yAxis: yAxis,
        legend: legend,
        plotOptions: plotOptions,
        title: {
            text: 'A place with a sense of history which people value and protect'
        },
        series: [{
            name: 'Excellent',
            data: [16.9,9.1]
        }, {
            name: 'Very Good',
            data: [38.3,27.9]
        }, {
            name: 'Good',
            data: [37.9,42.9]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.5,13.7]
        }, {
            name: 'Less than Satisfactory',
            data: [5.5,6.4]
        }]
    });
});