$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#ds-county').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '...the entire county?'
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
                    name: 'Favor',
                    y: 52
                }, {
                    name: 'Oppose',
                    y: 21
                }, {
                    name: 'Undecided',
                    y: 27
                }]
            }]
        });
    });
});