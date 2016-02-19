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
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
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
                    name: 'Or should they discourage growth in Scott County altogether?',
                    y: 5.8
                }]
            }]
        });
    });
});