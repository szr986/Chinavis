
var myChart = echarts.init(document.getElementById('疫情下消费趋势'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
    option = {
      
        title: [{
            text: '新冠疫情之下中国部分行业用户消费趋势',
            subtext: '来源：艾瑞投研',
            right:'center',
            textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 0
            },
            subtextStyle: {
                color: '#fff',
                fontSize: 15,
                fontWeight: 0
                },
        }
    ],
    tooltip: {
        trigger: 'axis',
        show:true
    },
    legend:{
        data:['短视频','长视频','网络游戏','在线医疗','在线教育','网购','外卖','网约车','出境旅游','外出就餐','商务出差','国际旅游','市场均值',]
    },
    dataset:{
        source: [['name','疫情期间','疫情结束1月内','疫情结束1~3个月','疫情结束3个月后'],
            ['短视频',0.23,-0.03,-0.06,-0.05],
            ['长视频',0.20,-0.05,-0.07,-0.08],
            ['网络游戏',0.19,-0.11,-0.14,-0.16],
            ['在线医疗',0.05,-0.05,-0.07,-0.06],
            ['在线教育',0.12,-0.05,-0.05,-0.05],
            ['网购',-0.22,-0.25,-0.15,-0.02],
            ['外卖',-0.45,-0.41,-0.29,-0.14],
            ['网约车',-0.55,-0.53,-0.38,-0.14],
            ['出境旅游',-0.59,-0.49,-0.38,-0.18],
            ['外出就餐',-0.70,-0.50,-0.34,-0.12],
            ['商务出差',-0.71,-0.55,-0.41,-0.21],
            ['国际旅游',-0.74,-0.60,-0.47,-0.22],
            ['市场均值',-0.26,-0.30,-0.23,-0.12]
        ]
    },
    legend: [{
        data: ['携程旅行（万台）', '去哪儿旅行网(万台)','飞猪旅行(万台)'],
        top:'56%',
        right:'20%'

    },{
        data: ['国内航线同比增长(%)', '国际航线同比增长(%)'],
        top:'3%',
        right:'20%'


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
            data: ['疫情期间','疫情结束1月内','疫情结束1~3个月','疫情结束3个月后'],

        }
    ],
        yAxis: [{
            splitLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1.5'
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            },
            type: 'value',
        }
        ],
        grid: [
            { bottom: '9%' },
            { top: '10%' },
        ],
        color:myColor,

        series: [ {type: 'line', smooth: true, seriesLayoutBy: 'row',name:'短视频'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row',},
        {type: 'line', smooth: true, seriesLayoutBy: 'row',},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},

    ]
    }
    
)