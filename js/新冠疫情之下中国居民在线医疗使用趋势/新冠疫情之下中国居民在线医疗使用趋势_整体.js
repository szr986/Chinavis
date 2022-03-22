(function() {
    var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
    var series=[[
        {
            name: '整体',
            type: 'line',
            data: [0.05, -0.05, -0.07, -0.06]
        }
    ],[
        {
            name: '整体',
            type: 'line',
            data: [0.05, -0.05, -0.07, -0.06]
        },
        {
            name: '男性',
            type: 'line',
            data: [0.02, -0.08, -0.10, -0.08]
        },
        {
            name: '女性',
            type: 'line',
            data: [0.09, 0.00, -0.03, -0.04]
        }
    ],
    [
        {
            name: '整体',
            type: 'line',
            data: [0.05, -0.05, -0.07, -0.06]
        },
        {
            name: '一线',
            type: 'line',
            data: [0.10, -0.02, -0.06, -0.05]
        },
        {
            name: '新一线',
            type: 'line',
            data: [0.04, -0.04, -0.06, -0.04]
        },
        {
            name: '二线',
            type: 'line',
            data: [0.05, -0.02, -0.06, -0.04]
        },
        {
            name: '三线',
            type: 'line',
            data: [-0.03, -0.10, -0.12, -0.14]
        },
        {
            name: '四线及以下',
            type: 'line',
            data: [0.01, 0.00, -0.03, -0.04]
        }
    ],[
        {
            name: '整体',
            type: 'line',
            data: [0.05, -0.05, -0.07, -0.06]
        },
        {
            name: '湖北省',
            type: 'line',
            data: [0.14, 0.14, 0.16, 0.20]
        },
        {
            name: '其他省份',
            type: 'line',
            data: [0.05, -0.06, -0.09, -0.07]
        }
    ],[
        {
            name: '整体',
            type: 'line',
            data: [0.05, -0.05, -0.07, -0.06]
        },
        {
            name: '30岁及以下',
            type: 'line',
            data: [0.08, -0.02, -0.05, -0.05]
        },
        {
            name: '31-40岁',
            type: 'line',
            data: [0.01, -0.10, -0.11, -0.07]
        },
        {
            name: '41岁及以上',
            type: 'line',
            data: [0.09, 0.01, -0.05, -0.05]
        }
    ],[
        {
            name: '整体',
            type: 'line',
            data: [0.05, -0.05, -0.07, -0.06]
        },
        {
            name: '1万元及以下',
            type: 'line',
            data: [-0.02, -0.09, -0.11, -0.10]
        },
        {
            name: '1-2万元',
            type: 'line',
            data: [0.08, -0.05, -0.08, -0.06]
        },
        {
            name: '2-3万元',
            type: 'line',
            data: [0.08, 0.02, -0.02, -0.01]
        },
        {
            name: '3万元以上',
            type: 'line',
            data: [0.07, -0.06, -0.08, -0.05]
        }
    ],[
        {
            name: '整体',
            type: 'line',
            data: [0.05, -0.05, -0.07, -0.06]
        },
        {
            name: '未婚',
            type: 'line',
            data: [0.05, -0.07, -0.11, -0.13]
        },
        {
            name: '已婚未育',
            type: 'line',
            data: [0.02, -0.05, -0.02, -0.03]
        },
        {
            name: '已婚已育',
            type: 'line',
            data: [0.06, -0.04, -0.08, -0.05]
        }
    ]
]

    var myEcharts = echarts.init(document.getElementById('nurse'));

    var option = {
        title: {
            text: '新冠疫情之下中国居民在线医疗使用趋势',
            top:'1%',
            left:'center',
            textStyle:{
                color:'#eee'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        color:myColor,
        legend: {
            // data: legend_datas[0],
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            textStyle:{
                color:myColor
            }
        },
        grid: {
            left: '3%',
            right: '14%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['疫情期间', '疫情结束1个月内', '疫情结束1-3个月', '疫情结束3个月后'],
            axisLabel: {
                textStyle: {
                    color: "#eee",
                    fontSize: "12"
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eee', // 颜色
               
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: "#eee",
                    fontSize: "12"
                }
            }
        },
        series:series[0]
    }
    
    // 3. 把配置给实例对象
    myEcharts.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
     // 5.点击切换效果
     $("div h2").on("click", "a", function () {
        // alert(1);
        // console.log($(this).index());
        $(this).css('color', 'orange');
        $(this).siblings('a').css('color', '#fff');
        var serie = series[$(this).index()];
        option.series = serie
        // 需要重新渲染
        myEcharts.setOption(option,true);
    });
}) ();
