$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#ds-downtown').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '...the downtown?'
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
                    y: 79
                }, {
                    name: 'Oppose',
                    y: 8
                }, {
                    name: 'Undecided',
                    y: 13
                }]
            }]
        });
    });
});