

var myChart = echarts.init(document.getElementById('日常出行'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
    option = {
        title: [{
            text: '中国居民日常出行交通方式',
            subtext: '来源：艾瑞咨询',
            right: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 0
                },
                subtextStyle: {
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 0
                    },
        }, 
        ],
        tooltip: {
            trigger: 'axis',
            // formatter:"{b}:{c}%",

        },

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
            data: ['私家车','公交','地铁','网约车','网约出行','单车','大巴','步行'],

        },
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
                formatter: '{value} %',
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
                },
                
            },
        }],
        grid: [
            { bottom: '7%' },
            { top: '55%' },
        ],
        color:myColor,

        series: [{
            name: '2019(%)',
            data: [52.5,48.7,41,23.2,19.4,18.5,15.2,11.4],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
    //         itemStyle: {
    //             normal: {
    // 　　　　　　　　//这里是重点
    //                 color: function(params) {
    //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
    //                     var colorList =  ['#00FFFF','#00FFFF','#00FFFF','#00FFFF','#00FFFF','#00FFFF','#00FFFF','#00FFFF'];
    //                     return colorList[params.dataIndex]
    //                 }
    //             }
    //         },
            label: {
                show: true,
                formatter: '{c}%',
                position: 'top',
                // textStyle: {
                //     color: 'orange',

                // }
            },

        }, {
            name: '疫情期间(%)',
            data: [56.3,12.1,10.8,8.4,7.1,19.7,5.5,7.0],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
    //         itemStyle: {
    //             normal: {
    // 　　　　　　　　//这里是重点
    //                 color: function(params) {
    //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
    //                     var colorList = ['#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF'];
    //                     return colorList[params.dataIndex]
    //                 }
    //             }
    //         },
            label: {
                show: true,
                formatter: '{c}%',
                // position: 'top',
                // textStyle: {
                //     color: '#FFFF00',

                // }
            },

        },

        ]
    }

)