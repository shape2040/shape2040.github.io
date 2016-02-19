$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#employcounty2015').highcharts({
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
                    name: 'Scott',
                    y: 60
                }, {
                    name: 'Fayette',
                    y: 20
                }, {
                    name: 'Franklin',
                    y: 6
                }, {
                    name: 'Harrison',
                    y: 1
                }, {
                    name: 'Bourbon',
                    y: 1
                }, {
                    name: 'Other',
                    y: 5.8
                }]
            }]
        });
    });
});