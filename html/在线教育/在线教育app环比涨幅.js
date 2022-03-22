var myChart = echarts.init(document.getElementById('main'));
var myColor = ["#FFB6C1", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(option = {
        title: [{
            text: '2019&2020年春节期间在线教育APP环比涨幅对比',
            // subtext: '来源：UserTracker多平台网民行为监测数据库（桌面及智能终端）',
            right:'center',
            textStyle:{
              color: '#fff',
              fontSize: 20,
            //   fontWeight: 'normal',
            }
        },{
            text: '学而思网校总独立设备数（万台）在疫情前后城市等级结构变化情况',
            top: '50%',
            right:'center',
            textStyle:{
                color: '#fff',
                // fontSize: 16,
                // fontWeight: 'normal',
              }
        },{
            text:'疫情前',
            top:'96%',
            left:'28%',
            textStyle:{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'normal',
              }
        },
        {
            text:'疫情后',
            top:'96%',
            left:'68%',
            textStyle:{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'normal',
              }
        }
    ],

        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: ['学而思网校','猿辅导'],
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
        },
    ],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            axisLabel: {
                formatter: '{value} %'},
        },],
        color:myColor,
        grid: [
            {bottom: '55%'},
            {top: '55%'}
        ],

        series: [{
            data: [36.5,53.3],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label:{show:true,
                formatter:'{c}%'},
           
        },
        {
            data: [216.8,163],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label:{show:true,
                formatter:'{c}%'},
        },
             
        {
            data: [  {value: 68.7, name: '其他',itemStyle: { color: '#FFB6C1' }},
            {value: 17.8, name: '三级城市', itemStyle: { color: 'orange' }},
            {value: 9.7, name: '四级城市',itemStyle: { color: '#00FFFF' }},
            {value: 3.9, name: '五级城市', itemStyle: { color: '#FF00FF' }},
        ],
            type: 'pie',
            radius: '30%',
            center: ['33%', '75%'],
            label:{show:true,
                formatter:'{b}:{d}%'},
        },
        {
            data: [  {value: 56, name: '其他', itemStyle: { color: '#FFB6C1' }},
            {value: 16.6, name: '三级城市', itemStyle: { color: 'orange' }},
            {value: 20.5, name: '四级城市', itemStyle: { color: '#00FFFF' }},
            {value: 6.9, name: '五级城市', itemStyle: { color: '#FF00FF' }},
        ],
            type: 'pie',
            radius: '30%',
            center: ['74%', '75%'],
            label:{show:true,
            formatter:'{b}:{d}%'},
        }
    ]
    }
    
)