
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('SX_kanzhong'));
// var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
var myColor = ["#00FFFF","#9B30FF", "orange", "#FFFF00", "#FFA07A", "#BA55D3", "#00FF00","#FFB6C1", "#8B4513"]
option = {
    title: {
        top:30,
        text: '疫情期间居民选择电商的看中因素',
        left:"center",
        top:"2%",
        textStyle:{
            color:"#fff",
            fontsize:"20"
        }
    },
    // backgroundColor: '#0e2147',
    grid: {
        left: '8%',
        top: '12%',
        right: '0',
        bottom: '1%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
        data: type
    },
     {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '0',
            }
        },
        data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    },
     {
        name: '',
        nameGap: '30',
        left:'center',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: '20',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: rate,
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#ffffff',
                    fontSize: '14',

                },
                formatter: '{c}%'
            }
        },
        barWidth: 12,
        itemStyle: {
            normal: {
                color: function (params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
            }
        },
        z: 2
    }, {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        barWidth: 20,
        itemStyle: {
            normal: {
                color: '#0e2147',
                barBorderRadius: 5,
            }
        },
        z: 1
    }, {
        name: '外框',
        type: 'bar',
        yAxisIndex: 2,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        barWidth: 24,
        itemStyle: {
            normal: {
                color: function (params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
                barBorderRadius: 5,
            }
        },
        z: 0
    },
    {
        name: '外圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        yAxisIndex: 2,
        symbolSize: 35,
        itemStyle: {
            normal: {
                color: function (params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
                opacity: 1,
            }
        },
        z: 2
    }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);