var myChart = echarts.init(document.getElementById('zhangfu'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
    option = {
        title: [{
            text: '2019&2020年春节期间在线媒体类APP环比涨幅对比',
            // subtext: '来源：UserTracker多平台网民行为监测数据库（桌面及智能终端）',
            right:'center',
            textStyle:{
                color:"#fff",
                fontsize:"20"
            }
        },{
            text: '2020年在线媒体APP日均独立设备数',
            textStyle:{
                color:"#fff",
                fontsize:"20"
            },
            top: '48%',
            right:'center'
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    color:myColor,
    legend: {
        data: ['社交网络(万台)', '短视频(万台)','在线视频（万台）'],
        top:'51%',
        textStyle: {
            color: "#fff",
            fontSize: 14
        },
    },
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: ['社交网络','短视频','在线视频'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
        },{
            type: 'category',
            gridIndex: 1,
            data: ['1/6~1/12','1/13~1/19','1/20~1/26','1-27~2/2','2/3~2/9','2/10~2/16','2/17~2/23','2/24~3/1'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },

        }
    ],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                formatter: '{value} %'},
        },{
            type: 'value',
            gridIndex: 1,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                formatter: '{value} 万台'}
        },
        
    ],
        grid: [
            {bottom: '55%'},
            {top: '55%'},
        ],

        series: [{
            name:'2019年环比涨幅(%)',
            data: [6.5,8.0,7.0],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label:{show:true,
                formatter:'{c}%'},
           
        },{
            name:'2020年环比涨幅(%)',
            data: [14.7,12.2,17.8],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label:{show:true,
                formatter:'{c}%'},
           
        },
        {
            name:'在线视频（万台）',
            data: [25878,26431,28134,28713,27888,27345,26899,27132],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
    
           
        }, {
            name:'短视频(万台)',
            data: [39143,40012,40976,43444,44100,44879,43899,42967],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
          
           
        }, {
            name:'社交网络(万台)',
            data: [45012,46100,47000,48200,49212,48900,48414,48012],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'line',
        
           
        }
    ]
    }
    
)