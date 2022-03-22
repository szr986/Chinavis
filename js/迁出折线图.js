var myChart = echarts.init(document.getElementById('迁出折线'));
var lineX = ["疫情期间迁出规模指数"];
var names =["01-01","01-02","01-03","01-04","01-05","01-06","01-07","01-08","01-09","01-10","01-11","01-12","01-13","01-14","01-15","01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24", "01-25", "01-26", "01-27", "01-28", "01-29", "1-30", "01-31", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06", "02-07", "02-08", "02-09", "02-10", "02-11", "02-12", "02-13", "02-14", "02-15", "02-16", "02-17", "02-18", "02-19", "02-20", "02-21", "02-22", "02-23", "02-24", "02-25", "02-26", "02-27", "02-28", "02-29", "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14"];
var value = [
    ['3.455298', '3.5246016', '5.5244268', '6.0998184', '5.3224776', '5.5981368', '6.4050264', '7.3430712', '8.1436104', '6.6232404', '7.561188', '6.2165232', '5.7620484', '5.4578124', '5.9086584', '6.0027804', '6.4428372', '7.7131764', '7.4059596', '8.3070036', '10.7367444', '11.8403208', '11.1386988', '3.8936376', '1.2966804', '0.6610572', '0.4302396', '0.3196908', '0.2616624', '0.2436804', '0.2375892', '0.2353212', '0.4614732', '0.2121552', '0.2334096', '0.2751408', '0.2769876', '0.2719656', '0.2824632', '0.287874', '0.2748492', '0.2697948', '0.2855412', '0.305532', '0.313632', '0.3047544', '0.2887812', '0.2801952', '0.2579688', '0.2527848', '0.26163', '0.2588112', '0.252396', '0.252558', '0.2590056', '0.2631528', '0.2604312', '0.2442636', '0.2574828', '0.2686932', '0.2602692', '0.2508732', '0.2399544', '0.2569644', '0.2719332', '0.2515212', '0.2531088', '0.250614', '0.2565756', '0.2652912', '0.2729376', '0.26163', '0.2596536', '0.2717064']
];
var charts = {
    names: lineX,
    lineX: names,
    value: value

};
console.log(charts);
var color = ['RGB(255,182,193']
var lineY = []

for (var i = 0; i < charts.names.length; i++) {
    var x = i
    if (x > color.length - 1) {
        x = color.length - 1
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        color: color[x] + ')',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[x] + ', 0.3)'
                }, {
                    offset: 0.8,
                    color: color[x] + ', 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i]
    }
    lineY.push(data)
}

var option = {

    //  backgroundColor: '#151619',
     dataZoom: [
        {
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 20,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#5B3AAE",
        },
        textStyle: {
            color: "rgba(204,187,225,0.5)",
        },
        fillerColor: "rgba(67,55,160,0.4)",
        borderColor: "rgba(204,187,225,0.5)",

    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 15,
            color: '#fff'
        },
        top:'3%',
        right: '20%'
    },
    grid: {
        top: '15%',
        left: '4%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                // width:'1.5'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            },
        }
    },
    yAxis: {
        name: charts.unit,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(255,255,255,0.6)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    series: lineY
}

myChart.setOption(option)