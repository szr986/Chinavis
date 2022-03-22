var myChart = echarts.init(document.getElementById('可选消费用户指数'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]

var labelRight = {
    position: 'right'
};

myChart.setOption(
    option = {
        title:{
            text: '新冠疫情期间中国可选消费用户指数',
            right:'center',
            textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 0
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: [
            { bottom: '0%' ,
             top: '17%' ,}
        ],
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#fff',//左边线的颜色
                    width:'1'
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }
        },
        yAxis: {
            type: 'category',
             axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            data: ['短视频', '长视频', '网络游戏', '在线教育', '在线医疗', '网购', '网约车', '外出就餐', '商务出差', '国内旅游', '出境旅游']
        },
        color:myColor,
        series: [
            {
                name: '生活费',
                type: 'bar',
                stack: '总量',
        //         itemStyle: {
        //             normal: {
        // 　　　　　　　　//这里是重点
        //                 color: function(params) {
        //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
        //                     var colorList = ['#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF'];
        //                     return colorList[params.dataIndex]
        //                 }
        //             }
        //         },
                label: {
                    show: true,
                    formatter: '{b}',
                    normal: {
                        show: true,
                         textStyle:{color:'#FF0000'}
                    }
                },
                data: [
                    { value: 0.23, label: labelRight },
                    { value: 0.20, label: labelRight },
                    { value: 0.19, label: labelRight },
                    { value: 0.12, label: labelRight },
                    { value: 0.05, label: labelRight },
                    -0.22,
                    -0.55,
                    -0.70,
                    -0.71,
                    -0.74, -0.85
                ]
            }
        ]
    }
)



