var cipPrioritiesBarChart = {
    type: 'bar'
}
var cipPrioritiesBarColorRWB5 = ['#5ea5dd','#b2d4ef','#cee4f5','#f7f7f7','#dc5d3d']
var cipPrioritiesXAxis2Year = {
    categories: ['1991', '2015']
}
var cipPrioritiesYAxis = {
    min: 0,
    max: 100,
    tickInterval: 10,
    title: {
        text: '%'
    }
}
var cipPrioritiesBarPlotOptions = {
    series: {
        stacking: 'percent'
    },
    bar: {
        borderWidth: 0,
        animation: false,
        pointPadding: -0.25
    }
}
var cipPrioritiesBarLegend = {
    reversed: true
}
$(function () {
    $('#priorities-zoning').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Stricter enforcement of existing zoning regulations'
        },
        series: [{
            name: 'Extremely Important',
            data: [20.1,21.4]
        }, {
            name: 'Very Important',
            data: [34.0,23.3]
        }, {
            name: 'Moderately Important',
            data: [21.9,29.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [7.7,20.7]
        }, {
            name: 'No Importance',
            data: [16.3,5.5]
        }]
    });
    $('#priorities-housing').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'More housing in the $40,000 to $70,000 (1991)| $90,000 to $120,000 (2015) range'
        },
        series: [{
            name: 'Extremely Important',
            data: [26.3,7.3]
        }, {
            name: 'Very Important',
            data: [34.2,18.5]
        }, {
            name: 'Moderately Important',
            data: [21.4,31.9]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [3.0,17.6]
        }, {
            name: 'No Importance',
            data: [15.1,24.7]
        }]
    });
    $('#priorities-recycling').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'More publicly funded programs to encourage recycling of items that are potentially damaging to the environment'
        },
        series: [{
            name: 'Extremely Important',
            data: [35.5,38.6]
        }, {
            name: 'Very Important',
            data: [39.4,28.5]
        }, {
            name: 'Moderately Important',
            data: [14.3,22.6]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [6.1,4.8]
        }, {
            name: 'No Importance',
            data: [4.8,5.5]
        }]
    });
    $('#priorities-water-supply').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Increasing the local water supply'
        },
        series: [{
            name: 'Extremely Important',
            data: [50.7,14.4]
        }, {
            name: 'Very Important',
            data: [33.6,33.8]
        }, {
            name: 'Moderately Important',
            data: [9.7,28.8]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [2.1,16.8]
        }, {
            name: 'No Importance',
            data: [3.8,6.2]
        }]
    });
    $('#priorities-roads').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'More repairs and better maintenance of local streets and roads'
        },
        series: [{
            name: 'Extremely Important',
            data: [32.0,31.1]
        }, {
            name: 'Very Important',
            data: [41.7,39.3]
        }, {
            name: 'Moderately Important',
            data: [20.3,24.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.8,4.2]
        }, {
            name: 'No Importance',
            data: [5.2,1.3]
        }]
    });
    $('#priorities-seniors').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Establish adult day care programs for senior citizens'
        },
        series: [{
            name: 'Extremely Important',
            data: [16.8,8.6]
        }, {
            name: 'Very Important',
            data: [43.6,21.0]
        }, {
            name: 'Moderately Important',
            data: [27.0,35.2]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [6.2,24.6]
        }, {
            name: 'No Importance',
            data: [6.4,10.6]
        }]
    });
    $('#priorities-water-quality').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Improve the quality of local drinking water'
        },
        series: [{
            name: 'Extremely Important',
            data: [53.9,24.3]
        }, {
            name: 'Very Important',
            data: [30.2,33.3]
        }, {
            name: 'Moderately Important',
            data: [8.9,25.6]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.4,9.9]
        }, {
            name: 'No Importance',
            data: [5.7,6.8]
        }]
    });
    $('#priorities-sewer').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Wider availability of municipal sewer service'
        },
        series: [{
            name: 'Extremely Important',
            data: [39.2,13.0]
        }, {
            name: 'Very Important',
            data: [36.4,22.7]
        }, {
            name: 'Moderately Important',
            data: [15.9,29.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [3.4,24.7]
        }, {
            name: 'No Importance',
            data: [5.0,10.6]
        }]
    });
    $('#priorities-training').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'More vocational training'
        },
        series: [{
            name: 'Extremely Important',
            data: [28.0,20.5]
        }, {
            name: 'Very Important',
            data: [39.1,25.6]
        }, {
            name: 'Moderately Important',
            data: [23.7,30.2]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [2.4,17.2]
        }, {
            name: 'No Importance',
            data: [6.8,6.6]
        }]
    });
    $('#priorities-cooperation').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'More cooperation in all areas of government between the various city and county governments in Scott Co.'
        },
        series: [{
            name: 'Extremely Important',
            data: [17.5,9.9]
        }, {
            name: 'Very Important',
            data: [37.4,30]
        }, {
            name: 'Moderately Important',
            data: [39.5,42.3]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [0.6,9.5]
        }, {
            name: 'No Importance',
            data: [5.0,8.4]
        }]
    });
    $('#priorities-consolidation').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: {
            categories: ['2015']
        },
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Consolidation of the local city and county governments'
        },
        series: [{
            name: 'Extremely Important',
            data: [24.7]
        }, {
            name: 'Very Important',
            data: [15.5]
        }, {
            name: 'Moderately Important',
            data: [22.7]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [22.3]
        }, {
            name: 'No Importance',
            data: [14.8]
        }]
    });
    $('#priorities-legacy').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: {
            categories: ['2015']
        },
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Construction of the Legacy Trail Extension'
        },
        series: [{
            name: 'Extremely Important',
            data: [23.3]
        }, {
            name: 'Very Important',
            data: [24.6]
        }, {
            name: 'Moderately Important',
            data: [25.5]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [13.2]
        }, {
            name: 'No Importance',
            data: [13.4]
        }]
    });
    $('#priorities-edu').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: cipPrioritiesXAxis2Year,
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'More early childhood education programs for pre-kindergarten children'
        },
        series: [{
            name: 'Extremely Important',
            data: [14.1,6.8]
        }, {
            name: 'Very Important',
            data: [38.9,19.0]
        }, {
            name: 'Moderately Important',
            data: [39.4,47.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [1.3,23.7]
        }, {
            name: 'No Importance',
            data: [6.3,7.2]
        }]
    });
    $('#priorities-design').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: {
            categories: ['2015']
        },
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Design standards for new community development'
        },
        series: [{
            name: 'Extremely Important',
            data: [28.0]
        }, {
            name: 'Very Important',
            data: [27.8]
        }, {
            name: 'Moderately Important',
            data: [24.9]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [13.0]
        }, {
            name: 'No Importance',
            data: [6.2]
        }]
    });
    $('#priorities-incentives').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: {
            categories: ['2015']
        },
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Incentives'
        },
        series: [{
            name: 'Extremely Important',
            data: [15.0]
        }, {
            name: 'Very Important',
            data: [21.9]
        }, {
            name: 'Moderately Important',
            data: [22.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [30.5]
        }, {
            name: 'No Importance',
            data: [10.4]
        }]
    });
    $('#priorities-impact').highcharts({
        chart: cipPrioritiesBarChart,
        colors: cipPrioritiesBarColorRWB5,
        xAxis: {
            categories: ['2015']
        },
        yAxis: cipPrioritiesYAxis,
        legend: cipPrioritiesBarLegend,
        plotOptions: cipPrioritiesBarPlotOptions,
        title: {
            text: 'Impact fees'
        },
        series: [{
            name: 'Extremely Important',
            data: [10.4]
        }, {
            name: 'Very Important',
            data: [19.7]
        }, {
            name: 'Moderately Important',
            data: [22.1]
        }, {
            name: 'Undecided/Don\'t Know' ,
            data: [35.8]
        }, {
            name: 'No Importance',
            data: [11.9]
        }]
    });
});