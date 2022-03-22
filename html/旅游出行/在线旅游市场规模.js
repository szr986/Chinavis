var myChart = echarts.init(document.getElementById('市场规模'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]

myChart.setOption(
    option = {
        title: {
            text: '2013-2020年中国在线旅游市场交易规模',
            subtext: '来源：综合上市公司财报,企业及专家访谈',
            right:'center',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 0
                },
                subtextStyle: {
                    color: '#fff',
                    fontSize: 9,
                    fontWeight: 0
                    },
        },
        tooltip: {
            show: true
        },
        xAxis: {
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
            data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
        },
        yAxis: [{
            type:'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1.5'
             } },
            name:'交易规模',
            position:'right',
            axisLabel:{
                formatter:'{value}亿元',
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }
        },{
            type:'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1.5'
             } },
            name:'在线化率',
            position:'left',
            axisLabel:{
                formatter:'{value}%',
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }
        },
    
    ],
    grid: [
        { bottom: '6%' ,
    right:'17%'},
        { top: '15%' },
    ],
    color:myColor,


        series: [{
            name: '中国在线旅游市场交易规模（亿元）',
            label: {
                show: true,
                 textStyle: {
                     color: '#FF00FF',

                 }
            },
    //         itemStyle: {
    //            normal: {
    // 　　　　　　　　//这里是重点
    //                 color: function(params) {
    //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
    //                     var colorList = ['#9B30FF'];
    //                     return colorList[params.dataIndex]
    //                 }
    //             }
    //         },
            data: [3070.1, 4257.8, 6349.4, 9011.9, 11725.9, 14812.8, 17747.1, 20283.5],
            type: 'bar',
             showBackground: true,
             backgroundStyle: {
               color: 'rgba(220, 220, 220, 0.8)'
             }
        }, 
        {
            name: '在线化率',
            label: {
                show: true,
                // textStyle: {
                //     color: 'orange',//坐标值得具体的颜色

                // }
            },
            type: 'line',
            itemStyle : {
                normal : {
                    // lineStyle:{
                    //     color:'#00FFFF'
                    // }
                }
            },

            yAxisIndex:1,
            data: [10.6, 13.7, 19.7, 25.8, 31.5, 36.9, 40.9, 43.4],
        }]
    }

)