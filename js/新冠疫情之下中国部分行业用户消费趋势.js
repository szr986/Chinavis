var myEcharts = echarts.init(document.getElementById('consumption_trend'));

myEcharts.setOption(reactOption = {
    title: {
        text: '新冠疫情之下中国部分行业用户消费趋势',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
      },
    tooltip: {
        trigger: 'axis'
    },
    color:["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"],
    legend: {
        data: ['短视频', '长视频', '网络游戏', '在线教育', '在线医疗', '网购', 
        '外卖', '网约车', '出境旅游', '外出聚餐', '商务办公', '国内旅游', 
        '市场均值'],
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        textStyle: {
            color: "#fff",
            fontSize: 12
        }
    },
    grid: {
        top:"15%",
        left: '0%',
        right: '15%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        // feature: {
        //     saveAsImage: {}
        // }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['疫情期间', '1个月内', '1-3个月', '3个月后'],
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#fff'
            }
        },
    },
    yAxis: {
        min:-0.8,
        max:0.3,
        type: 'value',
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#fff'
            }
        },
    },
    series: [
        {
            name: '短视频',
            type: 'line',
            data: [0.23, -0.03, -0.06, -0.05]
        },
        {
            name: '长视频',
            type: 'line',
            data: [0.20, -0.05, -0.07, -0.06]
        },
        {
            name: '网络游戏',
            type: 'line',
            data: [0.19, -0.11, -0.14, -0.16]
        },
        {
            name: '在线教育',
            type: 'line',
            data: [0.12, -0.05, -0.05, -0.05]
        },
        {
            name: '在线医疗',
            type: 'line',
            data: [0.05, -0.05, -0.07, -0.06]
        },
        {
            name: '网购',
            type: 'line',
            data: [-0.22, -0.25, -0.07, -0.06]
        },
        {
            name: '外卖',
            type: 'line',
            data: [-0.45, -0.41, -0.29, -0.14]
        },
        {
            name: '网约车',
            type: 'line',
            data: [-0.55, -0.53, -0.38, -0.18]
        },
        {
            name: '出境旅游',
            type: 'line',
            data: [-0.59, -0.53, -0.38, -0.14]
        },
        {
            name: '外出聚餐',
            type: 'line',
            data: [-0.70, -0.50, -0.34, -0.12]
        },
        {
            name: '商务办公',
            type: 'line',
            data: [-0.71, -0.55, -0.41, -0.21]
        },
        {
            name: '国内旅游',
            type: 'line',
            data: [-0.74, -0.6, -0.47, -0.22]
        },
        {
            name: '市场均值',
            type: 'line',
            data: [-0.26, -0.30, -0.23, -0.12],
            smooth:'true',  //关键点，为true是不支持虚线的，实线就用true
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted' //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        }
    ]
});
