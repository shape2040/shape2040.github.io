$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#growth2015').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '2015'
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
                    y: 6.4
                }, {
                    name: 'Moderate Rate',
                    y: 56.2
                }, {
                    name: 'Slow Rate',
                    y: 31.6
                }, {
                    name: 'Should discourage growth altogether',
                    y: 5.8
                }]
            }]
        });
    });
});