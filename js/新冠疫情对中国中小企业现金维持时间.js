var fontColor = '#fff';
var data = [{
    "name": "1个月以内",
    "value": 34.0
}, {
    "name": "2个月",
    "value": 33.1
}, {
    "name": "3个月",
    "value": 17.9
}, {
    "name": "4个月",
    "value": 1.6
}, {
    "name": "6个月以上",
    "value": 10.0
}]

var titles = [{text: "新冠疫情对中国中小企业",
       //  subtext: '总计',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 24,
        },
        x: 'center',
        y: 'center',
},
{
text: "现金维持时间",

        textStyle: {
            color: '#00FF00',
            fontSize: 27,
        },
        x: '350',
        y: '350',
}]
var myEcharts = echarts.init(document.getElementById('maintenance_time'));

myEcharts.setOption(reactOption = {
    color: ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"],
    // backgroundColor: '#0f375f',
   //  title: {
   //      text: "新冠疫情对中国中小企业现金维持时间",
   //     //  subtext: '总计',
   //      text:"llfdj",
   //      textStyle: {
   //          color: '#f2f2f2',
   //          fontSize: 27,
   //      },
   //      subtextStyle: {
   //          fontSize: 30,
   //          color: ['#ff9d19']
   //      },
   //      x: 'center',
   //      y: 'center',
   //  },
//    title:titles,
   title: {
    text: '新冠疫情对中国中小企业现金维持时间',
    x: 'center',
    y: 0,
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
    },
  },
    grid: {
        top:"10",
        bottom: 150,
        left: 100,
        right: '10%'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}:<br/> {c}%)'
    },
    legend: {
        orient: 'vertical',
        right: 10,
        textStyle: {
            color: '#fff',
            fontSize: 16,

        },
        icon: 'roundRect',
        data: data,
    },
    series: [
        // 主要展示层的
        {
            radius: ['50%', '90%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                position: 'inner',
                formatter: '{c}%',
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: true
                }
            },
            data: data,

        },
        // 边框的设置
        {
            radius: ['45%', '50%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            data: [{
                value: 1,
                itemStyle: {
                    color: "rgba(250,250,250,0.3)",
                },
            }],
        }, {
            name: '外边框',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['100%', '100%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 9,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#0b5263'
                    }
                }
            }]
        },
    ]
});