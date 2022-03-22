

var myChart = echarts.init(document.getElementById('yuancheng'));
myChart.setOption(
    option = {
        title: [{
            text: '2019&2020年复工后远程办公类APP环比涨幅对比',
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'normal',
            },
            // subtext: '来源：UserTracker多平台网民行为监测数据库（桌面及智能终端）',
            right:'center'
        },{
            text: '2020年疫情防控期间远程办公APP日均独立设备数',
            top: '50%',
            right:'center',
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
        data: ['效率办公（万台）', '云盘(万台)','电子文档(万台)'],
        top:'55%',
        textStyle: {
            color: "#fff",
            fontSize: 10
        }
    },
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: ['2019','2020'],
            axisLabel: { //  改变y轴字体颜色和大小
                //formatter: '{value} m³ ', //  给y轴添加单位
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }

        },{
            type: 'category',
            gridIndex: 1,
            data: ['1/6~1/12','1/13~1/19','1/20~1/26','1-27~2/2','2/3~2/9','2/10~2/16','2/17~2/23','2/24~3/1'],
            axisLabel: { //  改变y轴字体颜色和大小
                //formatter: '{value} m³ ', //  给y轴添加单位
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }
        }
    ],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisLabel: {
                formatter: '{value} %'},
                axisLabel: { //  改变y轴字体颜色和大小
                    //formatter: '{value} m³ ', //  给y轴添加单位
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                }
        },{
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                formatter: '{value} 万台'},
                axisLabel: { //  改变y轴字体颜色和大小
                    //formatter: '{value} m³ ', //  给y轴添加单位
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                }
        },
        

    ],
        grid: [
            {bottom: '55%'},
            {top: '59%'},
        ],

        series: [{
            data: [5.8,72.2],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label:{show:true,
                formatter:'{c}%'},
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
            name:'效率办公（万台）',
            data: [1055,1100,770,775,1394,1997,2345,2721],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#FFFF00'
                },
            },
           
        }, {
            name:'云盘(万台)',
            data: [750,770,761,790,840,870,780,786],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#FFB6C1'
                },
            },
           
        }, {
            name:'电子文档(万台)',
            data: [1140,875,921,900,913,1001,916,1051],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
            itemStyle: {
                normal: {
                    color: 'orange'
                },
            },
           
        }
    ]
    }
    
)