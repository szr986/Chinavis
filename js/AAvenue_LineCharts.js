// var canvas = document.getElementById('ALineChart');
var AAvenue_Line = echarts.init(document.getElementById('ALineChart'));
var AAvenue_data = [];
var dataDay1 = [];
var dataDay2 = [];
var dataDay3 = [];
for (var i = 0; i < AAvenue.length; i++) {
    AAvenue_data.push(AAvenue[i][0]);
    dataDay1.push(AAvenue[i][1]);
    dataDay2.push(AAvenue[i][2]);
    dataDay3.push(AAvenue[i][3]);
}


AAvenue_Line.setOption(reactOption = {
    // backgroundColor: "#404A59",
    color: ['#e2aa5e', '#ff715e', '#ffee51'],

    title: [{
        text: 'A会场',
        left: '1%',
        top: '1%',
        textStyle: {
            color: '#fff'
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 300,
        top: '1%',
        right: '1%',
        textStyle: {
            color: '#ffd285',
        },
        data: ['day1', 'day2', 'day3']
    },
    grid: {
        left: '1%',
        right: '1%',
        top: '10%',
        bottom: '2%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#FF4500'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        boundaryGap: false,
        data: AAvenue_data
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        type: 'value'
    },
    //切换时间轴的播放状态
    dataZoom: [{
        type: 'inside',
        start: 20,
        end: 98
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],

    series: [{
        name: 'day1',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: dataDay1
    }, {
        name: 'day2',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: dataDay2
    }, {
        name: 'day3',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: dataDay3
    }]
})