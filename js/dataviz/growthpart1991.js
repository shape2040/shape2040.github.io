$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#growthpart1991').highcharts({
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
                    y: 7.9
                }, {
                    name: 'Moderate Rate',
                    y: 45.7
                }, {
                    name: 'Slow Rate',
                    y: 25.1
                }, {
                    name: 'Should discourage growth altogether',
                    y: 20.3
                }]
            }]
        });
    });
});