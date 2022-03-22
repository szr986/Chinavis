(function () {
    // var legend_datas = [["整体"], ['整体', '湖北省', '其他省份'], ['整体', '一线', '新一线', '二线', '三线', '四线及以下'], ['整体', '男性', '女性'], ['整体', '30岁及以下', '31-40岁', '41岁及以上'], ['整体', '1万元及以下', '1-2万元', '2-3万元', '3万元以上'], ['整体', '未婚', '已婚未育', '已婚已育']]
    // var colors = ["red", "#0000FF", "#228B22", "#FFD700", "#A52A2A", "#FF8C00"]
    var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
    var series = [[{
        name: '整体',
        type: 'line',
        data: [-0.45, -0.41, -0.29, -0.14],
        // lineStyle:{
        //     color:"red"
        // }
    }],
    [{
        name: '整体',
        type: 'line',
        data: [-0.45, -0.41, -0.29, -0.14],
        // lineStyle:{
        //     color:"red"
        // }
    },
    {
        name: '湖北省',
        type: 'line',
        data: [-0.61, -0.49, -0.34, -0.21],
        // lineStyle:{
        //     color:"#0000FF"
        // }
    },
    {
        name: '其他省份',
        type: 'line',
        data: [-0.44, -0.41, -0.29, -0.14],
        // lineStyle:{
        //     color:"#228B22"
        // }
    }],
    [
        {
            name: '整体',
            type: 'line',
            data: [-0.45, -0.41, -0.29, -0.14],
            // lineStyle:{
            //     color:"red"
            // }
        },
        {
            name: '一线',
            type: 'line',
            data: [-0.43, -0.40, -0.30, -0.18],
            // lineStyle:{
            //     color:"#0000FF"
            // }
        },
        {
            name: '新一线',
            type: 'line',
            data: [-0.42, -0.40, -0.26, -0.11],
            // lineStyle:{
            //     color:"#228B22"
            // }
        },
        {
            name: '二线',
            type: 'line',
            data: [-0.43, -0.36, -0.23, -0.08],
            // lineStyle:{
            //     color:"#FFD700"
            // }
        },
        {
            name: '三线',
            type: 'line',
            data: [-0.52, -0.44, -0.37, -0.16],
            // lineStyle:{
            //     color:"#A52A2A"
            // }
        },
        {
            name: '四线及以下',
            type: 'line',
            data: [-0.55, -0.51, -0.36, -0.13],
            // lineStyle:{
            //     color:"#FF8C00"
            // }
        }
    ],
    [
        {
            name: '整体',
            type: 'line',
            data: [-0.45, -0.41, -0.29, -0.14],
            // lineStyle:{
            //     color:"red"
            // }
        },
        {
            name: '男性',
            type: 'line',
            data: [-0.41, -0.37, -0.25, -0.11],
            // lineStyle:{
            //     color:"#0000FF"
            // }
        },
        {
            name: '女性',
            type: 'line',
            data: [-0.51, -0.48, -0.35, -0.19],
            // lineStyle:{
            //     color:"#228B22"
            // }
        }
    ],
    [
        {
            name: '整体',
            type: 'line',
            data: [-0.45, -0.41, -0.29, -0.14],
            // lineStyle:{
            //     color:"red"
            // }
        },
        {
            name: '30岁及以下',
            type: 'line',
            data: [-0.41, -0.37, -0.28, -0.14],
            // lineStyle:{
            //     color:"#0000FF"
            // }
        },
        {
            name: '31-40岁',
            type: 'line',
            data: [-0.46, -0.44, -0.30, -0.14],
            // lineStyle:{
            //     color:"#228B22"
            // }
        },
        {
            name: '41岁及以上',
            type: 'line',
            data: [-0.53, -0.44, -0.31, -0.15],
            // lineStyle:{
            //     color:"#FFD700"
            // }
        }
    ],
    [
        {
            name: '整体',
            type: 'line',
            data: [-0.45, -0.41, -0.29, -0.14],
            // lineStyle:{
            //     color:"red"
            // }
        },
        {
            name: '1万元及以下',
            type: 'line',
            data: [-0.54, -0.49, -0.37, -0.19],
            // lineStyle:{
            //     color:"#0000FF"
            // }
        },
        {
            name: '1-2万元',
            type: 'line',
            data: [-0.47, -0.42, -0.29, -0.15],
            // lineStyle:{
            //     color:"#228B22"
            // }
        },
        {
            name: '2-3万元',
            type: 'line',
            data: [-0.35, -0.35, -0.23, -0.08],
            // lineStyle:{
            //     color:"#FFD700"
            // }
        },
        {
            name: '3万元以上',
            type: 'line',
            data: [-0.39, -0.33, -0.24, -0.11],
            // lineStyle:{
            //     color:"#A52A2A"
            // }
        }
    ],
    [
        {
            name: '整体',
            type: 'line',
            data: [-0.45, -0.41, -0.29, -0.14],
            // lineStyle:{
            //     color:"red"
            // }
        },
        {
            name: '未婚',
            type: 'line',
            data: [-0.48, -0.39, -0.31, -0.19],
            // lineStyle:{
            //     color:"#0000FF"
            // }
        },
        {
            name: '已婚未育',
            type: 'line',
            data: [-0.55, -0.60, -0.46, -0.31],
            // lineStyle:{
            //     color:"#228B22"
            // }
        },
        {
            name: '已婚已育',
            type: 'line',
            data: [-0.42, -0.38, -0.25, -0.09],
            // lineStyle:{
            //     color:"#FFD700"
            // }
        }
    ]
    ]
    // 1. 实例化对象
    var myEcharts = echarts.init(document.getElementById('waimaixiaofei'));
    // 2.指定配置
    var option = {
        title: {
            text: '新冠疫情之下中国居民点外卖消费趋势',
            top:'1%',
            left:'center',
            textStyle:{
                color:'#fff',
                fontsize:20
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        color: myColor,
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
            right: '15%',
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
    $(".waimai h2").on("click", "a", function () {
        // alert(1);
        // console.log($(this).index());
        $(this).css('color','orange');
        $(this).siblings('a').css('color','#fff');
        var serie = series[$(this).index()];
        option.series = serie
        // 需要重新渲染
        myEcharts.setOption(option,true);
    });
})();