

var myChart = echarts.init(document.getElementById('wuliu'));
myChart.setOption(
    option = {
        title: [{
            text: '2019&2020年春节和复工期间物流APP环比涨幅对比',
            // subtext: '来源：UserTracker多平台网民行为监测数据库（桌面及智能终端）',
            right: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'normal',
            },
        }, {
            text: '复工后整车恢复率与去年同期对比',
            top: '50%',
            right: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'normal',
            },
        }
        ],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['2019年农历同期整车恢复率','复工后整车恢复率'],
            top: '55%',
            textStyle: {
                color: "#fff",
                fontSize: 10
            }

        },
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: ['饿了么', '美团外卖', '菜鸟裹裹', '货车帮'],
            axisLabel: { //  改变y轴字体颜色和大小
                //formatter: '{value} m³ ', //  给y轴添加单位
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }
        
        }, 
        {
            type: 'category',
            boundaryGap: false,
            gridIndex: 1,
            data: ['2/3',
                '2/4',
                '2/5',
                '2/6',
                '2/7',
                '2/8',
                '2/9',
                '2/10',
                '2/11',
                '2/12',
                '2/13',
                '2/14',
                '2/15',
                '2/16',
                '2/17',
                '2/18',
                '2/19',],
                axisLabel: { //  改变y轴字体颜色和大小
                    //formatter: '{value} m³ ', //  给y轴添加单位
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                }
        },
        ],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisLabel: {
                formatter: '{value} %'
            },
            axisLabel: { //  改变y轴字体颜色和大小
                //formatter: '{value} m³ ', //  给y轴添加单位
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }
        }, {
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                formatter: '{value} '
            },
            axisLabel: { //  改变y轴字体颜色和大小
                //formatter: '{value} m³ ', //  给y轴添加单位
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }
        }

            ,],
        grid: [
            { bottom: '55%' },
            { top: '59%' },
        ],

        series: [{
            name: '2019年平均涨幅(%)',
            data: [-34.0, -26.6, -18.6, -11.2],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label: {
                show: true,
                formatter: '{c}%'
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#FF00FF' },
                            { offset: 1, color: '#FFA07A' }
                        ]
                    )
                }
            },

        }, {
            name: '2020年平均涨幅(%)',
            data: [-16.8, -10.2, -37.3, -14.3],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label: {
                show: true,
                formatter: '{c}%'
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#FFFF00' },
                            { offset: 1, color: 'orange' }
                        ]
                    )
                }
            },
        },
        {
            name: '2019年农历同期整车恢复率',
            data: [0.4, 0.5, 0.63, 0.7, 0.52, 0.65, 0.75, 0.72, 0.8, 0.84, 0.82, 0.88, 0.66, 0.87, 0.92, 0.87, 0.83],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
            itemStyle: {
                normal: {
                    color: 'orange'
                },
            },

        }, {
            name: '复工后整车恢复率',
            data: [0.18, 0.17, 0.18, 0.19, 0.185, 0.16, 0.15, 0.17, 0.16, 0.175, 0.17, 0.182, 0.17, 0.171, 0.20, 0.19, 0.21],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#FF00FF'
                },
            },
        },
        ]
    }

)