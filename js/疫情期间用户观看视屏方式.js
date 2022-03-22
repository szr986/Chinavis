var myChart = echarts.init(document.getElementById('shipingfangshi'));
// var colorList = ['#ACD', '#FDD56A', '#A2CD5A', '#D2A2CC', '#FD866A', '#E1C4C4', '#CDC5BF']
var colorList = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
option = {
    title: {
        text: '2020年疫情期间用户观看视频方式',
        x: 'center',
        y: '2%',
        textStyle:{
            color:"#fff",
            fontsize:"20"
        }
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '60%'],
        radius: ['24%', '70%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            // formatter: '{b}：{d}%',
            normal:{
                formatter(v) {
                    let text = v.name+":"+Math.round(v.percent*100)/100+'%'
                    if(text.length <= 6)
                    {
                        return text;
                    }else if(text.length > 6 && text.length <= 17){
                        return text = `${text.slice(0,6)}\n${text.slice(6,17)}`
                    }else if(text.length > 17){
                        return text = `${text.slice(0,6)}\n${text.slice(6,17)}\n${text.slice(17)}`
                    }
                },
                textStyle : {
                    fontSize : 12
                }
            }
            
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '和平时一样一个人看',
            'value': 20.2
        }, {
            'name': '和平时一样与家人一起看',
            'value': 16.2
        }, {
            'name': '在疫情期间,有更多的时间和家人一起观看视频',
            'value': 46.0
        }, {
            'name': '在疫情期间,有更多的时间和朋友同步观看讨论',
            'value': 17.3
        }, {
            'name': '其他',
            'value': 0.3
        }],
    }]
})