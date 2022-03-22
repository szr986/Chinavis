

var myChart = echarts.init(document.getElementById('酒旅'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
    option = {
        title: [{
            text: '2020年春节前后国内及国际航线全市场旅客量的同比变化情况',
            subtext: '来源：航指数，艾瑞投研',
            right:'center',
            textStyle: {
                color: '#fff',
                fontSize: 15,
                fontWeight: 0
                },
                subtextStyle: {
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 0
                    },  
        },{
            text: '2020年疫情防控期间旅游类APP日均独立设备数',
            // subtext: '来源：UserTracker多平台网民行为监测数据库（桌面及智能终端）',
            top: '53%',
            right:'center',
            textStyle: {
                color: '#fff',
                fontSize: 15,
                fontWeight: 0
                },
            // subtextStyle: {
            //     color: '#fff',
            //     fontSize: 7,
            //     fontWeight: 0
            //     },
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    color:['#9B30FF','#40E0D0','orange'],
    legend: [{
        data: ['携程旅行（万台）', '去哪儿旅行网(万台)','飞猪旅行(万台)'],
        top:'59%',
        right:'0%',
        textStyle: {
            color: '#fff',
            fontSize: 10,
            fontWeight: 0
            },

    },{
        data: ['国内航线同比增长(%)', '国际航线同比增长(%)'],
        top:'10%',
        right:'0%',
        textStyle: {
            color: '#fff',
            fontSize: 10,
            fontWeight: 0
            },


    }],
        xAxis: [{
            type: 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1.5'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            },
            gridIndex: 0,
            data: ['1/18','1/19','1/20','1/21','1/22','1/23','1/24','1/25','1/26','1/27','1/28','1/29','1/30','1/31','2/1','2/2'],

        },{
            type: 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1.5'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            },
            gridIndex: 1,
            data: ['1/6~1/12','1/13~1/19','1/20~1/26','1-27~2/2','2/3~2/9','2/10~2/16','2/17~2/23','2/24~3/1'],

        }
    ],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1.5'
                }
            },
            axisLabel: {
                formatter: '{value} %'},
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
        },{
            type: 'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1.5'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            },
            gridIndex: 1,
            axisLabel: {
                formatter: '{value} 万台'}
        }
         
        ,],
        grid: [
            {top:'15%',
            bottom: '55%'},
            {top: '65%',
        bottom:'7%'},
        ],
        color:myColor,

        series: [ {
            name:'国内航线同比增长(%)',
            data: [16,18,19,18,16,-2,-39,-53,-44,-41,-52,-61,-68,-84,-86,-87],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'line',
            lineStyle: {
                normal: {
                    width: 3,
                    // color:'#9B30FF',
                  
                }
            },
    
           
        }, 
        {
            name:'国际航线同比增长(%)',
            data: [24,17,11,22,30,21,-6,-18,-21,-25,-23,-27,-37,-40,-50,-53],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'line',
            lineStyle: {
                normal: {
                    width: 3,
                    // color:'#40E0D0',
                  
                }
            },
    
           
        },
        {
            name:'携程旅行（万台）',
            data: [755,767,662,601,550,530,543,570],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
            lineStyle: {
                normal: {
                    width: 3,
                    
                  
                }
            },
    
           
        }, {
            name:'去哪儿旅行网(万台)',
            data: [560,575,510,490,455,475,460,501],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
            lineStyle: {
                normal: {
                    width: 3,
                    
                  
                }
            },
          
           
        }, {
            name:'飞猪旅行(万台)',
            data: [360,350,321,301,289,311,306,325],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
            lineStyle: {
                normal: {
                    width: 3,
                    
                  
                }
            },
        
           
        }
    ]
    }
    
)