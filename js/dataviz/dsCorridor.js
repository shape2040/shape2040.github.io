$(function () {

    $(document).ready(function () {
        // Build the chart
        $('#ds-corridors').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '...specific "gateway corridors"?'
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
                    y: 68
                }, {
                    name: 'Oppose',
                    y: 7
                }, {
                    name: 'Undecided',
                    y: 25
                }]
            }]
        });
    });
});