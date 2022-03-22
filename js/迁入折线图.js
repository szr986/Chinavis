var myChart = echarts.init(document.getElementById('迁入折线'));
var lineX = ["疫情期间迁入规模指数"];
var names =["01-01","01-02","01-03","01-04","01-05","01-06","01-07","01-08","01-09","01-10","01-11","01-12","01-13","01-14","01-15","01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24", "01-25", "01-26", "01-27", "01-28", "01-29", "1-30", "01-31", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06", "02-07", "02-08", "02-09", "02-10", "02-11", "02-12", "02-13", "02-14", "02-15", "02-16", "02-17", "02-18", "02-19", "02-20", "02-21", "02-22", "02-23", "02-24", "02-25", "02-26", "02-27", "02-28", "02-29", "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14"];
var value = [
    ['2.8520424', '3.0879792', '4.2181236', '4.4499132', '5.080644', '4.3095888', '4.2506856', '4.470552', '4.8125664', '4.6042668', '4.6371528', '4.3737408', '4.828248', '4.0810392', '4.063446', '4.000914', '4.3980084', '4.232736', '4.1454828', '4.1816736', '4.235166', '2.899152', '1.7521272', '0.877068', '0.627912', '0.5069304', '0.4216212', '0.4126464', '0.373086', '0.3538728', '0.32886', '0.360774', '0.3894804', '0.4045464', '0.4078512', '0.3692304', '0.3693276', '0.3564324', '0.3365388', '0.3618108', '0.41715', '0.342468', '0.3321648', '0.3835836', '0.3976452', '0.3819636', '0.3517668', '0.3503736', '0.3417552', '0.3377052', '0.3699756', '0.3726648', '0.3644676', '0.34101', '0.3507948', '0.3410748', '0.3384504', '0.3313224', '0.3221532', '0.2976588', '0.2960388', '0.3217968', '0.3128544', '0.29889', '0.3054024', '0.3206304', '0.3078324', '0.3365064', '0.3506652', '0.32157', '0.3250692', '0.3362796', '0.3593484', '0.3635604']
];
var charts = {
    names: lineX,
    lineX: names,
    value: value

}
console.log(charts);
var color = ['RGB(255,255,0', 'RGB(255,182,193']
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
     dataZoom: [{
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
        top:'3%',
        textStyle: {
            fontSize: 15,
            color: '#fff'
        },
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