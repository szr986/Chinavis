xData = ["远程办公", "部分远程办公", "其他(如重要岗位小规模线下轮岗)"];
yData = [46.9, 23.4, 29.7];
var myEcharts = echarts.init(document.getElementById('office_situation'));

myEcharts.setOption(reactOption ={
    // backgroundColor: '#061326',
    title: {
        text: '已恢复工作的企业办公情况',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
      },
    "grid": {
        "top": "25%",
        "left": "-5%",
        "bottom": "5%",
        "right": "5%",
        "containLabel": true
    },
    // tooltip:{
    //   show:true,
    // },
    tooltip: {
        formatter: '{b}:{c}%'
    },
    animation: false,
    "xAxis": [{
        "type": "category",
        "data": xData,
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#B4B4B4"
        },
        "axisLine": {
            show: true,
            "lineStyle": {
                "color": "#B4B4B4"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
            interval:0,  
            margin: 30
        }
    }],
    "yAxis": [{
        show: false,
        
        "type": "value",
        "formatter": '{value} %',
        "axisLabel": {
            formatter: '{value} %',
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
                    formatter: "{c}%",
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#FFFF00'
                }
            },
            color: "#FFFF00",
            data: yData,
            formatter: '{b}\n{c}%' 
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            // "barWidth": "20",
            z: 12,
            "color": "orange",
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
                    borderColor: '#FFB6C1',
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
                    borderColor: '#FFB6C1',
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
                            color: "#FFB6C1"
                        },
                        {
                            offset: 1,
                            color: "orange"
                        }
                    ]),
                    opacity: .8
                },
            },
            data: yData
        }
    ]
});