

var myChart = echarts.init(document.getElementById('中国居民网购商品'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
    option = {
        title: [{
            text: '中国居民网购商品占总数量对比',
            subtext: '来源：艾瑞咨询',
            right: 'center',
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
            text: '中国居民网购的商品类别对比',
            top: '50%',
            right:'center',
            textStyle: {
                color: '#fff',
                fontSize: 15,
                fontWeight: 0
                },
        }
        ],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['2019(%)', '疫情期间(%)',],
            top:'5%',
            right:'0%',
            textStyle:{
                color:'#fff',
                fontSize:13
              },
    
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
            data: ['10%以内', '10~20%', '20~30%', '30~40%', '40~50%', '50~60%', '60~70%', '70~80%', '80~90%', '90~100%'],

        },
        {
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
            data: ['服装鞋包','食品饮料','家具百货','生鲜食品','家电类','3C数码','化妆个护','图书音像','医疗保健','家装家饰','玩具礼品','孕婴童类','珠宝首饰'],

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
                formatter: '{value} %',
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
        
                }
            }
        }, {
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }
        }
        ],
        grid: [
            {top:'10%',
             bottom: '55%' },
            { top: '58%',
             bottom:'7%' }
        ],
        color:myColor,

        series: [{
            name: '2019(%)',
            data: [7.0, 8.2, 18.0, 18.8, 14.9, 11.5, 8.9, 8.0, 3.3, 1.3],
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
                normal: {
                    position:'top',
                    show: true,
                    // textStyle:{color:'orange'}
                }
            
            },

        }, {
            name: '疫情期间(%)',
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
            data: [23.7, 8.9, 8.8, 9.6, 10.6, 9.8, 5.8, 9.1, 8.3, 5.3],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label: {
                show: true,
                formatter: '{c}%',
                normal: {
                    show: true,
                    // textStyle:{color:'#FFFF00'}
                }
            
            },

        },{
            name: '2019(%)',
            data: [56.7,55.7,52.7,46.9,43.1,40.8,38.9,38.8,35.4,34.5,32.9,22.7,18.5],
            xAxisIndex: 1, yAxisIndex: 1,
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
                normal: {
                    show: true,
                    position:'top',
                    // textStyle:{color:'orange'}
                }
            },

        }, {
            name: '疫情期间(%)',
            data: [15.9,37.6,24.4,38.5,10.0,12.0,12.7,13.3,32.1,7.5,8.3,8.2,5.5],
            xAxisIndex: 1, yAxisIndex: 1,
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
                normal: {
                    show: true,
                    // textStyle:{color:'#FFFF00'}
                }
            },

        },

        ]
    }

)