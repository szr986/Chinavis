var myChart = echarts.init(document.getElementById('旅游餐饮'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
myChart.setOption(
    option = {
        title: {
            text: '旅游餐饮消费用户趋势',
            right: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 0
                },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top:'7%',
            left:'10%',
            textStyle: {
                color: '#fff',
                fontSize: 9,
                fontWeight: 0
                },
            data: ['外出就餐', '商务出差', '国内旅游', '出境旅游', '消费需求平均值']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        // width:'1.5'
                    }
                },
                axisLabel: {
                    interval:0,  
                rotate:8,
                    textStyle: {
                        color: '#fff',//坐标值得具体的颜色
                        fontSize:10
                        
    
                    }
                },
              
                data: ['疫情期间', '疫情结束一个月内', '疫情结束1~3个月', '疫情结束3个月后', '弹性系数']
            }
        ],
        yAxis: [
            {
                type: 'value',
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
            }
        ],
        color:myColor,
        series: [
            {
                name: '外出就餐',
                type: 'line',
                smooth: true, 
                data: [-0.70,-0.50,-0.34,-0.12,-0.58]
            },
            {
                name: '商务出差',
                type: 'line',
                smooth: true, 
                data: [-0.71,-0.55,-0.41,-0.21,-0.50]
            },
            {
                name: '国内旅游',
                type: 'line',
                smooth: true, 
                data: [-0.74,-0.60,-0.47,-0.22,-0.52]
            },
            {
                name: '出境旅游',
                type: 'line',
                smooth: true, 
                data: [-0.85,-0.79,-0.61,-0.30,-0.55]
            },
            {
                name: '消费需求平均值',
                type: 'line',
                // smooth: true, 
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'top'
                //     }
                // },
         
                data: [-0.26,-0.30,-0.23,-0.12,-0.14]
            }
        ]
    }
)