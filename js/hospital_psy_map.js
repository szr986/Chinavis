var myChart = echarts.init(document.getElementById('main'));

// 用于连接两个数据集
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i][0]];
        if (geoCoord) {
            // push:[1],[2],[3] --> [[1],[2],[3]]
            res.push({
                name: data[i][0],
                // concat:[1],[2],[3] -->[1,2,3]
                 //value值与原数据集相比发生了改变···还没搞懂为啥
                value: geoCoord.concat(data[i][1])
            });
        }
    }
    return res;
};


myChart.setOption(
  option = {
    title: {
        text: '全国新型冠状病毒肺炎疫情心理援助点',
        textStyle:{color:'#eee'},
        left: 'center'
    },
    tooltip : {
        trigger: 'item'
    },

    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
    },
    series : [
        {
            name: '地点',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2]*4;
            },
            label: {
                formatter: '{a}',
                position: 'right',
                show: false
            },
            itemStyle: {
                color: 'green'
            },
            encode:{
                value:2
            },
            emphasis: {
                label: {
                    formatter:'{c}',
                    show: true
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] *4;
            },
            encode:{
                value:2
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            itemStyle: {
                color: 'green',
                shadowBlur: 10,
                shadowColor: '#333'
            },
            zlevel: 1
        }
    ]
}
)