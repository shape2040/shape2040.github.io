$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#growth1991').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '1991'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    animation: false,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                colorByPoint: true,
                data: [{
                    name: 'Rapid Rate',
                    y: 8.6
                }, {
                    name: 'Moderate Rate',
                    y: 61.0
                }, {
                    name: 'Slow Rate',
                    y: 23.5
                }, {
                    name: 'Should discourage growth altogether',
                    y: 7.0
                }]
            }]
        });
    });
});