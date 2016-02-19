$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#growthpart2015').highcharts({
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
                    y: 7.6
                }, {
                    name: 'Moderate Rate',
                    y: 39.6
                }, {
                    name: 'Slow Rate',
                    y: 31.6
                }, {
                    name: 'Should discourage growth altogether',
                    y: 21.2
                }]
            }]
        });
    });
});