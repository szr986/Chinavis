var myChart = echarts.init(document.getElementById('yueduyuanyin'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
option = {
    // backgroundColor:"#0B1837",
    color: myColor,
     title: {
         text: '2020年疫情期间用户选择阅读原因',
         left: 'center',
        top: 0,
        "textStyle": {
            "color": "#fff",
            "fontsize":"20"
        }
     },
    grid: {
        left: -100,
        top: "10",
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}%"
    },
    legend: {
        type: "scroll",
        orient: "vartical",
        // x: "right",
        // top: "center",
        right: "1",
        bottom: "0%",    
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 16,
        textStyle: {
            color: '#A3E2F4',
            fontSize: 12,
            fontWeight: 0
        },
        data: ['阅读平台免费开放了很多资源', '希望可以通过阅读自我提升', '不能出门，阅读是很好的消遣方式', '平时就爱阅读，善于一直没时间', '其他']
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        min: 40,
        max: 120,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: "#0B3E5E",
                width: 2,
                type: "solid"
            }
        }
    },
    calculable: true,
    series: [{
        type: 'pie',
        radius: ["5%", "10%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ["80%", "85%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        name: "",
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    },{
        stack: 'a',
        type: 'pie',
        radius: ['20%', '80%'],
        roseType: 'area',
        zlevel:10,
        label: {
            normal: {
                show: true,
                formatter: "{c}%",
                textStyle: {
                    fontSize: 12,
                },
                position: 'outside'
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 17.3,
                name: '阅读平台免费开放了很多资源'
            },
            {
                value: 38.6,
                name: '希望可以通过阅读自我提升'
            },
            
            {
                value: 69.6,
                name: '不能出门，阅读是很好的消遣方式'
            },
            {
                value: 55.2,
                name: '平时就爱阅读，善于一直没时间'
            },
            {
                value: 0.5,
                name: '其他'
            }
        ]
    }, ]
})