var myChart = echarts.init(document.getElementById('对股市影响的对比'));
var myColor = ["orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
    option = {
        title: [{
            text: '2003年中国非典公众认知期间上证综指及部分申万一级行业涨跌幅',
            subtext: '来源：Wind,艾瑞投研',
            right:'center',
            textStyle: {
                color: '#fff',
                fontSize: 13,
                fontWeight: 0
                },
                subtextStyle: {
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 0
                    }, 
        },{
            text: '2020年中国新冠公众认知期间上证综指及部分申万一级行业涨跌幅',
            top: '51%',
            right:'center',
            textStyle: {
                color: '#fff',
                fontSize: 13,
                fontWeight: 0
                },
        }],
        xAxis: [{
            type: 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',
                    width:'1.5'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',

                }
            },
            gridIndex: 0,
            data: ['上证指数','SW商业贸易','SW休闲服务','SW家电','SW食品饮料'],

        },
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',
                    width:'1.5'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',

                }
            },
            gridIndex: 1,
            data: ['上证指数','SW商业贸易','SW休闲服务','SW家电','SW食品饮料'],
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
            gridIndex: 1,
            axisLabel: {
                formatter: '{value} %'},
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
        
                }
        }],
        grid: [
            {top:'13%',
                bottom: '55%'},
            {top: '60%',
        bottom:'7%'}
        ],
        color:myColor,

        series: [{
            data: [-4.0,-7.1,-6.8,-5.6,-4.4],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
    //         itemStyle: {
    //             normal: {
    // 　　　　　　　　//这里是重点
    //                 color: function(params) {
    //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
    //                     var colorList =  ['#00FFFF','#00FFFF','#00FFFF','#00FFFF','#00FFFF'];
    //                     return colorList[params.dataIndex]
    //                 }
    //             }
    //         },
            label:{show:true,
                position:'bottom',
                formatter:'{c}%',
                textStyle: {
                    // color: 'orange',
                    fontSize:12

                }},
                
           
        },
        {
            data: [-2.0,-1.0,-4.1,-4.4,-0.5],
            type: 'bar',
    //         itemStyle: {
    //             normal: {
    // 　　　　　　　　//这里是重点
    //                 color: function(params) {
    //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
    //                     var colorList = ['#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF'];
    //                     return colorList[params.dataIndex]
    //                 }
    //             }
    //         },
            label:{show:true,
                formatter:'{c}%',
                position:'bottom',
                textStyle: {
                    // color: 'orange',
                    fontSize:12

                }},
             xAxisIndex: 1, yAxisIndex: 1
        }
    ]
    }
    
)
