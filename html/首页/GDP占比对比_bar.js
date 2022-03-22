var myChart = echarts.init(document.getElementById('gdpat'));
var myColor= ["#00FFFF","#9B30FF", "orange", "#FFFF00", "#FFA07A", "#BA55D3", "#00BFFF","#FFA500", "#00FA9A"]

var option = {
    color:myColor,
        title:{
            text:'2003年中国非典前后和2020年中国新冠前后三大产业GDP占比',
            subtext:'来源：国家统计局；艾瑞投研',
            // x:'center',
            // y:'top'
            textStyle:{
                // color:'rgb(190, 184, 184)',
                color:'#fff',
                fontSize:15,
            }
        },
        grid:{
            left:'0%',
            top:'16%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        legend: {
            top:'15%',
            data: ['第一产业','第二产业','第三产业'],
            value:'{value}%',
            textStyle:{
        //   color:'rgb(190, 184, 184)',
        color:'#fff',
               
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    color: "#ffffff", //X轴文字颜色
                    fontSize: 12
                }},
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#26d9ff",
                        width:2
                    },
                },
        },
        yAxis: {
            type: 'category',
            data: ['2003','2004','2018','2019'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff", //X轴文字颜色
                    fontSize: 12
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#26d9ff",
                    width:2
                },
            },
        },
        series: [
            {
                name: '第一产业',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight',
                    formatter:'{c}%',
                  
                },
                data: [12.3,8.6,7.0,7.1],
             
            },
            {
                name: '第二产业',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight',     
                        formatter:'{c}%'
                },
                
                data: [45.6,43.1,39.7,39.0]
            },
            {
                name: '第三产业',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight',
                    formatter:'{c}%'
                },
                data: [42.1,48.3,53.3,53.9]
            },
                
        ]
    }
    myChart.setOption(option);