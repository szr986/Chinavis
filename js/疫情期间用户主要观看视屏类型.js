var myChart = echarts.init(document.getElementById('shipingleixing'));
xData = ["电视剧", "短视频", "电影","疫情相关视屏","综艺","纪录片","动漫","其他"];
yData = [69.8,68.4,68.3,63.4,55.8,37.5,29.7,2.2];
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
option = {
    "title":{
        "text":"疫情期间用户主要观看视频类型",  
        left:"center",
        top:"2%",
        "textStyle": {
            "color": "#fff",
            "fontsize":"20"
        }
    },
    // backgroundColor: '#061326',
    "grid": {
        "top": "25%",
        "left": "5%",
        "bottom": "5%",
        "right": "5%",
        "containLabel": true
    },
    color:myColor,
    tooltip:{
      show:true ,
      formatter: "{b}<br>{c}%"

    },
    animation: false,
    "xAxis": [{
        "type": "category",
        "data": xData,
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#fff"
        },
        "axisLine": {
            show: false,
            "lineStyle": {
                "color": "#fff"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
            margin: 30
        }
    }],
    "yAxis": [{
        show: false,
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
        },
        "splitLine": {
            "lineStyle": {
                "color": "#0c2c5a"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "series": [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}%",
                    fontSize: 25,
                    fontWeight: 'bold',
                    // color: '#34DCFF'
                }
            },
            // color: "#2DB1EF",
            data: yData
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            // "barWidth": "20",
            z: 12,
            // "color": "#2DB1EF",
            "data": yData
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 15],
            symbolOffset: [0, 12],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#2EA9E5',
                    borderType: 'solid',
                    borderWidth: 1
                }
            },
            data: yData
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, 18],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#19465D',
                    borderType: 'solid',
                    borderWidth: 2
                }
            },
            data: yData
        },
        {
            type: 'bar',
            //silent: true,
            "barWidth": "40",
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                            offset: 0,
                            color: "#FF6347"
                        },
                        {
                            offset: 1,
                            color: "#9932CC"
                        }
                    ]),
                    opacity: .8
                },
            },
            data: yData
        }
    ]
})