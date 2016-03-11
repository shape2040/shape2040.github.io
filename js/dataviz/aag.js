// Bar chart options
var aagBarChart = {
    type: 'bar'
}
var aagBarColorRWB3 = ['#5ea5dd','#f7f7f7','#dc5d3d']
var aagXAxis2Year = {
    categories: ['1991', '2015']
}
var aagYAxis = {
    min: 0,
    max: 100,
    tickInterval: 10,
    title: {
        text: '%'
    }
}
var aagBarPlotOptions = {
    series: {
        stacking: 'percent'
    },
    bar: {
        borderWidth: 0,
        animation: false,
        pointPadding: -0.25
    }
}
var aagBarLegend = {
    reversed: true
}

// Pie chart options


$(function () {
  $('#aag-farmland-chart').highcharts({
      chart: aagBarChart,
      colors: aagBarColorRWB3,
      xAxis: aagXAxis2Year,
      yAxis: aagYAxis,
      title: {
        text: null
      },
      legend: aagBarLegend,
      plotOptions: aagBarPlotOptions,
      series: [{
          name: 'More protection should be given to these prime farm lands to restrict their development',
          data: [55.7,63.4]
      }, {
          name: 'The existing regulations are about right',
          data: [26.3,26.8]
      }, {
          name: 'Less protection should be given to these prime farm lands to encourage development',
          data: [9.0,9.8]
      }]
  });
});

// Encouraging Growth
// What part of the county do you live in?
$(function () {

    var aagLiveColors = ['#e74c3c','#f1c40f','#3498db'],
        aagLiveCategories = ['Scott County', 'Georgetown', 'Other Cities'],
        aagLiveSubCategories = [['Northern', 'Southern', 'Eastern', 'Western'],['Northern', 'Southern'],['Sadieville', 'Stamping Ground']],    
        aagLiveData = [{
            y: 54.7,
            showInLegend: true,
            color: aagLiveColors[0],
            drilldown: {
                name: aagLiveCategories[0],
                categories: aagLiveSubCategories[0],
                data: [11.3,14.7,12.0,16.7],
                color: aagLiveColors[0]
            }
        }, {
            y: 39.7,
            color: aagLiveColors[1],
            drilldown: {
                name: aagLiveCategories[1],
                categories: aagLiveSubCategories[1],
                data: [19.6,20.1],
                color: aagLiveColors[1]
            }
        }, {
            y: 5.7,
            color: aagLiveColors[2],
            drilldown: {
                name: aagLiveCategories[2],
                categories: aagLiveSubCategories[2],
                data: [2.3, 3.4],
                color: aagLiveColors[2]
            }
        }],
        jurisdictionData = [],
        areaData = [],
        aagI,
        aagJ,
        aagDataLen = aagLiveData.length,
        aagDrillDataLen,
        aagBrightness;


    // Build the data arrays
    for (aagI = 0; aagI < aagDataLen; aagI += 1) {

        // add jurisdiction data
        jurisdictionData.push({
            name: aagLiveCategories[aagI],
            y: aagLiveData[aagI].y,
            color: aagLiveData[aagI].color
        });

        // add area data
        aagDrillDataLen = aagLiveData[aagI].drilldown.data.length;
        for (aagJ = 0; aagJ < aagDrillDataLen; aagJ += 1) {
            aagBrightness = 0.2 - (aagJ / aagDrillDataLen) / 5;
            areaData.push({
                name: aagLiveData[aagI].drilldown.categories[aagJ],
                y: aagLiveData[aagI].drilldown.data[aagJ],
                color: Highcharts.Color(aagLiveData[aagI].color).brighten(aagBrightness).get()
            });
        }
    }
    $('#aag-countygrowth-live').highcharts({
        chart: {
            type: 'pie',
            height: 350
        },
        title: {
            text: 'What part of the county do you live in? (2015 only)'
        },
        yAxis: {
            title: {
                text: 'Total percent or respondents'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Jurisdiction',
            data: jurisdictionData,
            showInLegend: true,
            size: '80%',
            dataLabels: {
                enabled: false
            }
        }, {
            name: 'Area',
            data: areaData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                }
            }
        }]
    });
});
// Do you currently reside in an urban area, the suburbs close to a city or town, or in a rural area
$(function () {
    var colors = ['#e74c3c','#f1c40f','#3498db', '#8e44ad']
    $(document).ready(function () {
        // Build the chart
        $('#aag-countygrowth-type').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 350
            },
            title: {
                text: 'Do you currently reside in an urban area, the suburbs close to a city or town, or in a rural area?'
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
                    color: colors[0],
                    name: 'Urban',
                    y: 20.3
                }, {
                    color: colors[1],
                    name: 'Suburban',
                    y: 48.5
                }, {
                    color: colors[2],
                    name: 'Rural',
                    y: 28.8
                }, {
                    color: colors[3],
                    name: 'Don\'t Know',
                    y: 2.4
                }]
            }]
        });
    });
});
// Thinking only about the specific part of the county in which you live, in the future should your local elected officials take action to encourage growth in your part of the country at a:
$(function () {
    var colors = ['#e74c3c','#f1c40f','#3498db', '#8e44ad']
    // 1991
    $(document).ready(function () {
        // Build the chart
        $('#aag-countygrowth-change1-91').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 350
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
                    name: 'Rapid Rate',
                    color: colors[0],
                    y: 7.9
                }, {
                    name: 'Moderate Rate',
                    color: colors[1],
                    y: 45.8
                }, {
                    name: 'Slow Rate',
                    color: colors[2],
                    y: 25.0
                }, {
                    name: 'Should discourage growth altogether',
                    color: colors[3],
                    y: 20.3
                }]
            }]
        });
    // 2015
        $('#aag-countygrowth-change1-15').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 350
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
                    color: colors[0],
                    y: 6.4
                }, {
                    name: 'Moderate Rate',
                    color: colors[1],
                    y: 56.2
                }, {
                    name: 'Slow Rate',
                    color: colors[2],
                    y: 31.6
                }, {
                    name: 'Should discourage growth altogether',
                    color: colors[3],
                    y: 5.8
                }]
            }]
        });
    });
});
// Now thinking of the whole county, in the future should your elected officials take actions to encourage growth in the whole county at a:
$(function () {
    var colors = ['#e74c3c','#f1c40f','#3498db', '#8e44ad']
    // 1991
    $(document).ready(function () {
        // Build the chart
        $('#aag-countygrowth-change2-91').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 350
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
                    name: 'Rapid Rate',
                    color: colors[0],
                    y: 8.5
                }, {
                    name: 'Moderate Rate',
                    color: colors[1],
                    y: 60.9
                }, {
                    name: 'Slow Rate',
                    color: colors[2],
                    y: 23.4
                }, {
                    name: 'Should discourage growth altogether',
                    color: colors[3],
                    y: 6.9
                }]
            }]
        });
    // 2015
        $('#aag-countygrowth-change2-15').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 350
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
                    color: colors[0],
                    y: 6.6
                }, {
                    name: 'Moderate Rate',
                    color: colors[1],
                    y: 56.3
                }, {
                    name: 'Slow Rate',
                    color: colors[2],
                    y: 31.3
                }, {
                    name: 'Should discourage growth altogether',
                    color: colors[3],
                    y: 5.7
                }]
            }]
        });
    });
});
// Greenbelt
$(function () {
    var colors = ['#e74c3c','#f1c40f','#3498db']
    $(document).ready(function () {
        // Build the chart
        $('#aag-greenbelt-chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 350
            },
            title: {
                text: null
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
                    color: colors[0],
                    name: 'Expand the existing greenbelt',
                    y: 41.3
                }, {
                    color: colors[1],
                    name: 'Maintain the existing greenbelt',
                    y: 39.7
                }, {
                    color: colors[2],
                    name: 'Eliminate the existing greenbelt',
                    y: 19.0
                }]
            }]
        });
    });
});
// Would you favor or oppose incentives for the following activities related to the development of Scott County
$(function () {
    var pie = {
      type: 'pie'
    }
    var colors = ['#dc5d3d','#f7f7f7','#5ea5dd']
    var labels = {
      enabled: true,
      distance: 5,
      style: {
        fontWeight: 'bold',
        color: '#343434'
      }
    }
    var plotOptions = {
      pie: {
        dataLabels: labels,
        animation: false,
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%']
      }
    }
    $('#aag-devincentives-green').highcharts({
        chart: pie,
        colors: colors,
        title: {
            text: 'Green Design'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: plotOptions,
        series: [{
            innerSize: '50%',
            data: [
                ['Oppose', 4.9],
                ['Undecided', 23.8],
                ['Favor', 71.3]
            ]
        }]
    });
    $('#aag-devincentives-vacant').highcharts({
        chart: pie,
        colors: colors,
        title: {
            text: "Reuse of vacant structures"
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: plotOptions,
        series: [{
            innerSize: '50%',
            data: [
                ['Oppose', 1.1],
                ['Undecided', 6.4],
                ['Favor', 92.5]
            ]
        }]
    });
    $('#aag-devincentives-power').highcharts({
        chart: pie,
        colors: colors,
        title: {
            text: "Burying of power lines"
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: plotOptions,
        series: [{
            innerSize: '50%',
            data: [
                ['Oppose', 2.4],
                ['Undecided', 14.6],
                ['Favor', 82.9]
            ]
        }]
    });
    $('#aag-devincentives-farmland').highcharts({
        chart: pie,
        colors: colors,
        title: {
            text: "Protection of rural prime farmland"
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: plotOptions,
        series: [{
            innerSize: '50%',
            data: [
                ['Oppose', 4.9],
                ['Undecided', 14.7],
                ['Favor', 80.4]
            ]
        }]
    });
});

// Regardless of how your feel about growth in general, if your local elected officials wanted to stimulate growth and create more jobs in your county, would you personally facor or oppose each of the following actions?
$(function () {
    var colors = ['#5ea5dd','#f7f7f7','#dc5d3d']

    // Emphasizing programs to teach to people who want to start their own businesses or farms how to increase their chances for success
    $('#aag-stimulate-teach').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Emphasizing programs to teach to people who want to start their own businesses or farms how to increase their chances for success'
        },
        series: [{
            name: 'Favor',
            data: [91.8,82.0]
        }, {
            name: 'Undecided',
            data: [1.4,14.0]
        }, {
            name: 'Oppose',
            data: [6.9,4.0]
        }]
    });
    // Spending local tax funds to market the area to businesses who are located elswhere but could locate in Scott County
    $('#aag-stimulate-locate').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Spending local tax funds to market the area to businesses who are located elswhere but could locate in Scott County'
        },
        series: [{
            name: 'Favor',
            data: [53.7,53.0]
        }, {
            name: 'Undecided',
            data: [8.3,24.7]
        }, {
            name: 'Oppose',
            data: [38.0,22.3]
        }]
    });
    // Working with local colleges and the local school system to develop needed management and vocational training programs
    $('#aag-stimulate-schools').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Working with local colleges and the local school system to develop needed management and vocational training programs'
        },
        series: [{
            name: 'Favor',
            data: [95.7,83.7]
        }, {
            name: 'Undecided',
            data: [1.2,12.9]
        }, {
            name: 'Oppose',
            data: [3.2,3.3]
        }]
    });
    // Spending local tax funds to attract home buyers to area
    $('#aag-stimulate-homes').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Spending local tax funds to attract home buyers to area'
        },
        series: [{
            name: 'Favor',
            data: [40.0,18.0]
        }, {
            name: 'Undecided',
            data: [5.4,28.8]
        }, {
            name: 'Oppose',
            data: [54.6,53.2]
        }]
    });
    // Providing improvements to roads, water, and sewer systems along with other needed improvements at taxpayers' expense to attract new businesses
    $('#aag-stimulate-improvements').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Providing improvements to roads, water, and sewer systems along with other needed improvements at taxpayers\' expense to attract new businesses'
        },
        series: [{
            name: 'Favor',
            data: [58.5,48.8]
        }, {
            name: 'Undecided',
            data: [4.5,30.1]
        }, {
            name: 'Oppose',
            data: [37.0,21.2]
        }]
    });
    // Giving tax or financial incentives to local businesses of farms to encourage expansion of local operations
    $('#aag-stimulate-expansion').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Giving tax or financial incentives to local businesses of farms to encourage expansion of local operations'
        },
        series: [{
            name: 'Favor',
            data: [55.2,59.6]
        }, {
            name: 'Undecided',
            data: [8.1,24.7]
        }, {
            name: 'Oppose',
            data: [36.7,15.8]
        }]
    });
    // Giving tax breaks, loans or other financial help to businesses who want to come into Scott County from another area
    $('#aag-stimulate-come').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Giving tax breaks, loans or other financial help to businesses who want to come into Scott County from another area'
        },
        series: [{
            name: 'Favor',
            data: [50.7,47.0]
        }, {
            name: 'Undecided',
            data: [5.5,29.7]
        }, {
            name: 'Oppose',
            data: [43.8,23.3]
        }]
    });
    // Wider availability of municipal sewer services
    $('#aag-stimulate-sewer').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: {
            categories: ['2015']
        },
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Wider availability of municipal sewer services'
        },
        series: [{
            name: 'Favor',
            data: [49.3]
        }, {
            name: 'Undecided',
            data: [40.9]
        }, {
            name: 'Oppose',
            data: [9.8]
        }]
    });
    // Spending local motel tax funds to promote the community and attract tourist, visitors, and shoppers
    $('#aag-stimulate-motel').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Spending local motel tax funds to promote the community and attract tourist, visitors, and shoppers'
        },
        series: [{
            name: 'Favor',
            data: [72.9,75.4]
        }, {
            name: 'Undecided',
            data: [5.7,16.6]
        }, {
            name: 'Oppose',
            data: [21.4,8.0]
        }]
    });
    // Providing low interest rate loans for local businesses or farms wishing to expand
    $('#aag-stimulate-loans').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Providing low interest rate loans for local businesses or farms wishing to expand'
        },
        series: [{
            name: 'Favor',
            data: [84.0,75.2]
        }, {
            name: 'Undecided',
            data: [3.9,16.2]
        }, {
            name: 'Oppose',
            data: [12.1,8.6]
        }]
    });
});

// Curren state laws permit local governments to establish special taxing districts where tax money is raised for a specifiv purpose. Here is a list of projects that are eligible for special tax district funding. Would ylou favor/oppose a special taxing district if new taxes were used for the following?
$(function () {
    var colors = ['#5ea5dd','#f7f7f7','#dc5d3d']
    // Expanding and improving local emergency and ambulance services to all parts of the county
    $('#aag-districts-emergency').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Expanding and improving local emergency and ambulance services to all parts of the county'
        },
        series: [{
            name: 'Favor',
            data: [78.0,69.4]
        }, {
            name: 'Undecided',
            data: [2.5,18.3]
        }, {
            name: 'Oppose',
            data: [19.5,12.3]
        }]
    });
    // Improving parking, sidewalks, and landscaping in downtown Georgetown
    $('#aag-districts-parking').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Improving parking, sidewalks, and landscaping in downtown Georgetown'
        },
        series: [{
            name: 'Favor',
            data: [38.6,60.7]
        }, {
            name: 'Undecided',
            data: [5.8,22.0]
        }, {
            name: 'Oppose',
            data: [55.6,17.3]
        }]
    });
    // Road improvements in developing areas
    $('#aag-districts-roads').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Road improvements in developing areas'
        },
        series: [{
            name: 'Favor',
            data: [55.9,60.5]
        }, {
            name: 'Undecided',
            data: [4.5,23.9]
        }, {
            name: 'Oppose',
            data: [39.7,15.5]
        }]
    });
});

// What are some of the places, buildings, or areas that you feel most contribute to the character of your community of that you find unique, special, or interesting
// 1991
$(function () {
    var colors = ['#8e44ad']
    $('#aag-character-chart91').highcharts({
        chart: {
            type: 'bar',
            height: 1200
        },
        title: {
            text: '1991'
        },
        xAxis: {
            type: 'category',
            labels: {
                // rotation: -45,
                style: {
                    fontSize: '13px',
                }
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: '%'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}%</b>'
        },
        series: [{
                color: colors[0],
            name: 'Population',
            data: [
                ['Georgetown College',59.2],
                ['The Main St Shopping Area/Downtown Georgetown',22.3],
                ['Court House',13.4],
                ['Cardome',11.9,],
                ['Historic Houses/Buildings',8.7],
                ['Old Churches/Cemeteries',6.8],
                ['Toyota',6],
                ['Ward Hall',4.1],
                ['Schools',4],
                ['Downtown Anitque Shops',3.2],
                ['Horse Farms',3.1],
                ['Scott County Park',2.8],
                ['Library',2.5],
                ['Big Spring/Royal Spring',1.9],
                ['Mallard Point',1.8],
                ['Rural Areas',1.7],
                ['Kentucky Horse Park',1.6],
                ['Suffoleta Park',1.6],
                ['County Parks',1.5],
                ['Ball Parks',1.4],
                ['Taking a Drive in the Country',1.1],
                ['Churches',1],
                ['Stamping Ground',1],
                ['City Hall',0.9],
                ['Fishing',0.9],
                ['Elkhorn Creek',0.8],
                ['Lakes',0.8],
                ['Restaurants/Steak Houses',0.6],
                ['Buffalo Spring Festival',0.5],
                ['Log Cabin Museum',0.3],
                ['Country Club/Longview',0.3]

            ]
        }]
    });
});
// 2015
$(function () {
    var colors = ['#8e44ad']
    $('#aag-character-chart15').highcharts({
        chart: {
            type: 'bar',
            height: 600
        },
        title: {
            text: '2015'
        },
        xAxis: {
            type: 'category',
            labels: {
                // rotation: -45,
                style: {
                    fontSize: '13px',
                }
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: '%'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}%</b>'
        },
        series: [{
                color: colors[0],
            name: 'Population',
            data: [
                ['Main St Shopping Area/Downtown Georgetown',79.9],
                ['Horse Farms',70.0],
                ['Kentucky Horse Park',65.9],
                ['Elkhorn Creek',65.6],
                ['Countryside',58.0],
                ['Cardome',56.9],
                ['Georgetown College',54.9],
                ['Ward Hall',45.3],
                ['Scott County Park',41.6],
                ['Churches or Cemeteries',38.9],
                ['Sadieville',19.0],
                ['Stamping Ground',19.0],
                ['Suffoletta Park',16.4],
                ['Other',8.3]
            ]
        }]
    });
});

$(function () {
    var colors = ['#5ea5dd','#b2d4ef','#cee4f5','#f7f7f7','#dc5d3d']
    // Historic homes
    $('#aag-historic-homes').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Historic homes'
        },
        series: [{
            name: 'Extremely Important',
            data: [32.1,37.6]
        }, {
            name: 'Very Important',
            data: [41.0,28.5]
        }, {
            name: 'Moderately Important',
            data: [19.9,24.1]
        }, {
            name: 'Undecided',
            data: [1.8,3.5]
        }, {
            name: 'Unimportant',
            data: [5.0,6.2]
        }]
    });
    // Stone fences
    $('#aag-historic-fences').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Stone fences'
        },
        series: [{
            name: 'Extremely Important',
            data: [32.2,45.9]
        }, {
            name: 'Very Important',
            data: [31.6,31.3]
        }, {
            name: 'Moderately Important',
            data: [23.9,15.5]
        }, {
            name: 'Undecided',
            data: [1.4,2.6]
        }, {
            name: 'Unimportant',
            data: [10.9,4.6]
        }]
    });
    // Historic buildings downtown
    $('#aag-historic-buildings').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Historic buildings downtown'
        },
        series: [{
            name: 'Extremely Important',
            data: [34.8,46.9]
        }, {
            name: 'Very Important',
            data: [41.2,33.8]
        }, {
            name: 'Moderately Important',
            data: [17.3,14.4]
        }, {
            name: 'Undecided',
            data: [0.6,2.2]
        }, {
            name: 'Unimportant',
            data: [6.1,2.7]
        }]
    });
    // Historic farms, farmhouses, and outbuildings
    $('#aag-historic-farms').highcharts({
        chart: aagBarChart,
        colors: colors,
        xAxis: aagXAxis2Year,
        yAxis: aagYAxis,
        legend: aagBarLegend,
        plotOptions: aagBarPlotOptions,
        title: {
            text: 'Historic farms, farmhouses, and outbuildings'
        },
        series: [{
            name: 'Extremely Important',
            data: [26.7,36.1]
        }, {
            name: 'Very Important',
            data: [35.8,28.3]
        }, {
            name: 'Moderately Important',
            data: [25.4,23.0]
        }, {
            name: 'Undecided',
            data: [1.9,4.2]
        }, {
            name: 'Unimportant',
            data: [10.2,8.4]
        }]
    });
});