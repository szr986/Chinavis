var colorList = ['#FF1493', '#00FFFF', '#FFFF00', '#D2A2CC']
var myEcharts = echarts.init(document.getElementById('help'));

myEcharts.setOption(reactOption = {

    title: {
        text: '企业最希望社会机构提供的帮助',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '60%'],
        radius: ['24%', '65%'],
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
            // formatter: '{a|{b}：{d}%}\n{hr|}',
            // rich: {
            //     hr: {
            //         backgroundColor: 't',
            //         borderRadius: 3,
            //         width: 3,
            //         height: 3,
            //         padding: [3, 3, 0, -12]
            //     },
            //     a: {
            //         padding: [-30, 15, -20, 15]
            //     }
            // },
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
                length: 10,
                length2: 10,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '对抗疫情所需物资的配给',
            'value': 65.6
    }, {
            'name': '疫情情况下的政策补贴',
            'value': 24.5
        }, {
            'name': '医疗、健康资源的帮助',
            'value': 5.2
        }, {
            'name': '员工生活、情绪的关怀',
            'value': 3.8
        }],
    }]
});