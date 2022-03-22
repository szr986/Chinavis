(function () {
    // var legend_datas = [["整体"], ['整体', '湖北省', '其他省份'], ['整体', '一线', '新一线', '二线', '三线', '四线及以下'], ['整体', '男性', '女性'], ['整体', '30岁及以下', '31-40岁', '41岁及以上'], ['整体', '1万元及以下', '1-2万元', '2-3万元', '3万元以上'], ['整体', '未婚', '已婚未育', '已婚已育']]
    var myColors = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
    var series = [
        [
            {
                name: '整体',
                type: 'line',
                data: [-0.22, -0.25, -0.15, -0.02]
            }
        ],
        [
            {
                name: '整体',
                type: 'line',
                data: [-0.22, -0.25, -0.15, -0.02]
            },
            {
                name: '湖北省',
                type: 'line',
                data: [-0.29, -0.19, -0.13, 0.02]
            },
            {
                name: '其他省份',
                type: 'line',
                data: [-0.22, -0.25, -0.15, -0.02]
            }
        ],
        [
            {
                name: '整体',
                type: 'line',
                data: [-0.22, -0.25, -0.15, -0.02]
            },
            {
                name: '一线',
                type: 'line',
                data: [-0.15, -0.23, -0.15, -0.05]
            },
            {
                name: '新一线',
                type: 'line',
                data: [-0.20, -0.24, -0.13, -0.01]
            },
            {
                name: '二线',
                type: 'line',
                data: [-0.25, -0.26, -0.15, 0.01]
            },
            {
                name: '三线',
                type: 'line',
                data: [-0.28, -0.24, -0.17, -0.25]
            },
            {
                name: '四线及以下',
                type: 'line',
                data: [-0.38, -0.31, -0.19, 0.00]
            }
        ],
        [
            {
                name: '整体',
                type: 'line',
                data: [-0.22, -0.25, -0.15, -0.02]
            },
            {
                name: '男性',
                type: 'line',
                data: [-0.22, -0.25, -0.14, -0.01]
            },
            {
                name: '女性',
                type: 'line',
                data: [-0.23, -0.25, -0.17, -0.03]
            }
        ],
        [
            {
                name: '整体',
                type: 'line',
                data: [-0.22, -0.25, -0.15, -0.02]
            },
            {
                name: '30岁及以下',
                type: 'line',
                data: [-0.19, -0.21, -0.15, -0.02]
            },
            {
                name: '31-40岁',
                type: 'line',
                data: [-0.25, -0.26, -0.17, -0.05]
            },
            {
                name: '41岁及以上',
                type: 'line',
                data: [-0.23, -0.29, -0.12, 0.03]
            }
        ],
        [
            {
                name: '整体',
                type: 'line',
                data: [-0.22, -0.25, -0.15, -0.02]
            },
            {
                name: '1万元及以下',
                type: 'line',
                data: [-0.31, -0.33, -0.22, -0.04]
            },
            {
                name: '1-2万元',
                type: 'line',
                data: [-0.24, -0.22, -0.11, 0.02]
            },
            {
                name: '2-3万元',
                type: 'line',
                data: [-0.15, -0.21, -0.14, -0.02]
            },
            {
                name: '3万元以上',
                type: 'line',
                data: [-0.11, -0.22, -0.14, -0.10]
            }
        ],
        [
            {
                name: '整体',
                type: 'line',
                data: [-0.22, -0.25, -0.15, -0.02]
            },
            {
                name: '未婚',
                type: 'line',
                data: [-0.23, -0.25, -0.17, -0.05]
            },
            {
                name: '已婚未育',
                type: 'line',
                data: [-0.24, -0.27, -0.19, -0.03]
            },
            {
                name: '已婚已育',
                type: 'line',
                data: [-0.22, -0.24, -0.14, -0.01]
            }
        ]
    ]
    // 1. 实例化对象
    var myEcharts = echarts.init(document.getElementById('网购消费趋势'));
    // 2.指定配置
    var option = {
        title: {
            text: '新冠疫情之下中国居民网购消费趋势',
            top:'1%',
            left:'center',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 0
                },
        },
        tooltip: {
            trigger: 'axis'
        },
        color:myColors,
        legend: {
            // data: legend_datas[0],
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            textStyle:{
                color:myColors
            }
        },
        grid: {
            left: '3%',
            right: '20%',
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
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true, 
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
        },
        series: series[0]
    };
    // 3. 把配置给实例对象
    myEcharts.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    // 5.点击切换效果
    $(".wanggou h2").on("click", "a", function () {
        // alert(1);
        // console.log($(this).index());
        $(this).css('color', 'orange');
        $(this).siblings('a').css('color', '#fff');
        var serie = series[$(this).index()];
        option.series = serie
        // 需要重新渲染
        myEcharts.setOption(option,true);
    });
})();