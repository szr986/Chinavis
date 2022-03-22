var myChart = echarts.init(document.getElementById('黄金周'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]

myChart.setOption(
    option = {
        title:{
            text:'2003&2019十一黄金周旅游总收入及相关对比',
            subtext:'来源：Wind，国家统计局',
            right: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 0
                },
                subtextStyle: {
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 0
                    },
        },
        legend: {
            top:'10%',
            right:'0%',
            textStyle: {
                color: '#fff',
                fontSize: 9,
                fontWeight: 0
                },
        },
        tooltip: {},
        dataset: {
            source: [
                ['日期', '旅游总收入（亿元）', '旅游人数（百万人）', '旅游人均支出（元）'],
                ['2003', 346.0, 90.1, 384.0],
                ['2019', 6497.1, 781.8, 851.0],
            ]
        },
        xAxis:
            { type: 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    // width:'1.5'
                }
            },
            axisLabel: {
                interval:0,  
                rotate:0,
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
                    fontSize:12

                }
            }, },


        yAxis: {
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    // width:'1.5'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            },
        },
        grid: [
            { bottom: '7%' },
            { top: '5%' },
        ],
        color:myColor,


        series: [
            {
                type: 'bar',
                seriesLayoutBy: 'row',
        //         itemStyle: {
        //             normal: {
        // 　　　　　　　　//这里是重点
        //                 color: function(params) {
        //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
        //                     var colorList = ['#9B30FF'];
        //                     return colorList[params.dataIndex]
        //                 }
        //             }
        //         },
                label:
                    { show: 'true', position: 'top' ,
                    // textStyle: {
                    //     color: 'orange',//坐标值得具体的颜色
    
                    // }
                }
            },
            {
                type: 'bar',
                seriesLayoutBy: 'row',
        //         itemStyle: {
        //             normal: {
        // 　　　　　　　　//这里是重点
        //                 color: function(params) {
        //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
        //                     var colorList = ['#00FFFF'];
        //                     return colorList[params.dataIndex]
        //                 }
        //             }
        //         },
                label:
                    { show: 'true', position: 'top' ,
                    // 
                }
            },
        ]
    }
)