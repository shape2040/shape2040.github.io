$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#employcounty1991').highcharts({
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
                    name: 'Scott',
                    y: 54.5
                }, {
                    name: 'Fayette',
                    y: 36.0
                }, {
                    name: 'Franklin',
                    y: 4.7
                }, {
                    name: 'Harrison',
                    y: 0.5
                }, {
                    name: 'Misc.',
                    y: 3.8,
                    color: '#44BEA9'
                }, {
                    name: 'Refused',
                    y: 0.9,
                    color: '#2c3e50'
                }]
            }]
        });
    });
});