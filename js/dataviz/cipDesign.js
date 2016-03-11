var cipDesignHalfPie = {
  type: 'pie'
}
var cipDesignHalfPieColorRWB3 = ['#dc5d3d','#f7f7f7','#5ea5dd']
var cipDesignHalfPieDataLabels = {
  enabled: true,
  distance: 5,
  style: {
    fontWeight: 'bold',
    color: '#343434'
  }
}
var cipDesignHalfPiePlotOptions = {
  pie: {
    dataLabels: cipDesignHalfPieDataLabels,
    animation: false,
    startAngle: -90,
    endAngle: 90,
    center: ['50%', '75%']
  }
}
$(function () {
    $('#design-county').highcharts({
        chart: cipDesignHalfPie,
        colors: cipDesignHalfPieColorRWB3,
        title: {
            text: 'The entire county'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: cipDesignHalfPiePlotOptions,
        series: [{
            innerSize: '50%',
            data: [
                ['Oppose', 20.7],
                ['Undecided', 27.1],
                ['Favor', 52.2]
            ]
        }]
    });
    $('#design-corridors').highcharts({
        chart: cipDesignHalfPie,
        colors: cipDesignHalfPieColorRWB3,
        title: {
            text: "Specific 'gateway corridors'"
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: cipDesignHalfPiePlotOptions,
        series: [{
            innerSize: '50%',
            data: [
                ['Oppose', 6.7],
                ['Undecided', 25.6],
                ['Favor', 67.8]
            ]
        }]
    });
    $('#design-downtown').highcharts({
        chart: cipDesignHalfPie,
        colors: cipDesignHalfPieColorRWB3,
        title: {
            text: "Downtown"
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: cipDesignHalfPiePlotOptions,
        series: [{
            innerSize: '50%',
            data: [
                ['Oppose', 8.4],
                ['Undecided', 12.6],
                ['Favor', 79.1]
            ]
        }]
    });
    $('#design-none').highcharts({
        chart: cipDesignHalfPie,
        colors: cipDesignHalfPieColorRWB3,
        title: {
            text: "None"
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: cipDesignHalfPiePlotOptions,
        series: [{
            innerSize: '50%',
            data: [
                ['Oppose', 53.4],
                ['Undecided', 39.1],
                ['Favor', 7.5]
            ]
        }]
    });
});