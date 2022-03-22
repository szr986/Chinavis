var myChart = echarts.init(document.querySelector(".life .bar"));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
var option = {
    // backgroundColor:'#fff',
    title: {
        text: '2020中国社区居民疫情期间居家活动内容',
        left:"center",
        top:"2%",
        textStyle:{
            color:"#fff",
            fontsize:"20"
        }
    },
    color:myColor,
    grid: {
        left: '15%',
        right: '15%',
        containLabel: false
    },
    xAxis: [{
        type: 'value',
        name: '',
        axisLabel: {
            show:false
        },
        axisTick:{
            show:false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show:false
        }
    }],
    yAxis: [{
        type: 'category',
        inverse:true,
       
        axisLabel: {
            color: '#fff',
            fontSize: '18',
            margin:20,
        },
        axisTick:{
            show:false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
       
        data: ['下厨备餐', '撸猫撸狗', '亲子互动','在线办公','学习培训','影音游戏','运动健身','阳台晒太阳','家务清洁']
    },
    {
        type: 'category',
        inverse:true,
        axisLabel: {
            formatter: '{value} %',
            // color: "#fff"
            color: function (value, index) {
            return index < 3 ? '#FFCC00' : '#00CCFF';
        },
            fontSize: '20'
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }, 
        // axisLabel: {
        //     formatter: '{value} %'
        // },
        data:[23.2, 1.0, 22.7,8.8,3.1,21.0,7.9,0.4,11.4]

    }],
    series: [{
            name: '',
            type: 'bar',
            data: [23.2, 1.0, 22.7,8.8,3.1,21.0,7.9,0.4,11.4],
            barWidth: '28',
            itemStyle:{
                color : function(params) {
                    // var colorList = ['#00ABDA','#D1B50E','#7ACC10','#00ABDA','#00CCFF','#7ACC10','#00ABDA','#D1B50E','#7ACC10'];
                    return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset : 0,
                                color : myColor[params.dataIndex]
                                        
                            }, {
                                offset : 1,
                                color : '#01154C'
                            }]);
                },
                barBorderRadius:13,
            }
        }
    ]
};
     myChart.setOption(option);
