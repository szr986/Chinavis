var myChart = echarts.init(document.getElementById('sx'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#9B30FF",   "#FFA07A", "#BA55D3", "#00FF00", "#8B4513"]
var option = {
    title: {
        left: '30%',
        text: '疫情期间中国居民选择生鲜电商的看重因素',
        // subtext: '数据来自网络',
        left:"center",
        top:"2%",
        textStyle:{
            color:"#fff",
            fontsize:"20"
        }
    },
    color:myColor,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '%';
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '%';
                }
            }
            return res;

        }
    },
    barWidth: 35,

    grid: {
        // height: 600,
        left: '3%',
        right: '4%',
        top: '10%',
        bottom:'1%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.3],
        axisLabel: {
            formatter: '{value} %',
            lineStyle: {
                color: '#ffffff'
            },
            textStyle: {
                color: '#ffffff',
                fontSize: '15',
            }
        }

    },
    yAxis: {
        type: 'category',
        data: ['无接触配送', '商品品质', '商品丰富度', '商品价格', '种类丰富度', '商品容易购买到', '食品包装', '配送时长', '可预约下单', '平台服务', 'App设计及体验'],
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            },
            textStyle: {
                color: '#ffffff',
                fontSize: '20',
            }
        },
    },
    series: [
        {
            name: '所占百分比',
            type: 'bar',
            barWidth: '20',
            data: [54.3, 49.5, 44.4, 43.7, 43.5, 42.0, 38.1, 33.8, 32.2, 27.1, 24.2]

        }
    ]
};
myChart.setOption(option);
