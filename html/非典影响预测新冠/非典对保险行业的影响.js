// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('baoxian_effect'));

option = {
    color:myColor,
    //    backgroundColor: '#01004C',
    title: {
        text: '非典对保险行业的影响',
        x: 'center',
        y: 'top',

       textStyle:{
                // color:'rgb(190, 184, 184)',
                color:'#fff',
           fontSize:16,
       }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: '30%',
        bottom: '10%',
    },
    legend: {
        top: '14%',
        data: insurance,
        textStyle: {
        //   color:'rgb(190, 184, 184)',
        color:'#fff',
        }
    },
    toolbox: {
        top:'4%',
        right:'2%',
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: insurance_data[0],
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ffffff", //X轴文字颜色
                fontSize: 12
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#26d9ff",
                width:2
            },
        },

    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}%',
            color: '#ffffff',
            textStyle: {
                fontSize: 12
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#26d9ff",
                width:2
            },
        },


    }],
    series: [{
        name: '财产险',
        type: 'line',
        data: insurance_data[1],
        lineStyle: {
            normal: {
                width: 2,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#57BD9F' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#19BC8C' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 6,
                shadowOffsetY: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#57BD9F',
                borderWidth: 4,
                borderColor: "#57BD9F"
            }
        },

    },

    {
        name: '寿险',
        type: 'line',
        data: insurance_data[2],
        lineStyle: {
            normal: {
                width: 8,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#0000FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0000FF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 6,
                shadowOffsetY: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#0000FF',
                borderWidth: 10,
                borderColor: "#0000FF"
            }
        },


    },
    {
        name: '健康险',
        type: 'line',
        data: insurance_data[3],
        lineStyle: {
            normal: {
                width: 8,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#FFB6C1' // 0% 处的颜色 
                    }, {
                        offset: 1,
                        color: '#FFB6C1' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 6,
                shadowOffsetY: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#FFB6C1',    //指示气泡颜色
                borderWidth: 10,
                borderColor: "#FFB6C1"   //圆环颜色
            }
        },
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值',
            },
            {
                type: 'min',
                name: '最小值'
            }
            ],
              itemStyle:{
                     normal:{
                         label:{
                             color:"#000"
                         }
                     }
                 }
        },
    },
    {
        name: '人身意外险',
        type: 'line',
        data: insurance_data[4],
        lineStyle: {
            normal: {
                width: 8,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#00FFFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00FFFF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 6,
                shadowOffsetY: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#00FFFF',
                borderWidth: 10,
                borderColor: "#00FFFF"
            }
        },

    }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);