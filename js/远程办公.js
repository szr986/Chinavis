var myEcharts = echarts.init(document.getElementById('telecommuting'));

myEcharts.setOption(reactOption = {
    title: {
        text: '疫情期间-远程办公-百度搜索指数',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
    },
    // backgroundColor: "#1A1835",

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        top: 70,
        bottom: 65,
        left:50,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '46%',
        top: '11%',
        textStyle: {
            color: '#fff',
        },
        data: ['远程办公']
    },


    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "#fff",
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],

    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#fff",
            }
        },

    }],
    dataZoom: [{
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 10,
        
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#FF00FF",
        },
        textStyle:{
            color:"#FF00FF",
        },
        fillerColor:"rgba(67,55,160,0.4)",
        borderColor: "#FF00FF",

    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],
    series: [{
        name: "远程办公",
        type: "line",
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
            color: "#FF00FF",
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        data:data
    }, ]
})