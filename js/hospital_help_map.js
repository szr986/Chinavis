var myChart = echarts.init(document.getElementById('map-help'));

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
                value: geoCoord.concat(data[i][1])
            });
        }
    }
    return res;
};

var convertData1 = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap1[data[i][0]];
        if (geoCoord) {
            // push:[1],[2],[3] --> [[1],[2],[3]]
            res.push({
                name: data[i][0],
                // concat:[1],[2],[3] -->[1,2,3]
                value: geoCoord.concat(data[i][1])
            });
        }
    }
    return res;
};

console.log(convertData(data))

myChart.setOption(
  option = {
    title: {
        text: '全国新型冠状病毒救治医院',
        textStyle:{color:'#eee'},
        left: 'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend:[{
        data:['心理救治医院地点','救治医院地点'],
        top:'5%',
        textStyle: {
            color: "rgba(255,255,255,)",
            fontSize: "15"
        }
    },{
        data:['心理救治医院数量Top 5','救治医院数量Top 5'],
        top:'8%',
        textStyle: {
            color: "rgba(255,255,255,)",
            fontSize: "15"
        }
    }],

    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        style:'midnight',
        mapStyle: {
            styleJson:[
                {
                          "featureType": "land",
                          "elementType": "geometry",
                          "stylers": {
                                    "color": "#242f3eff"
                          }
                },
                {
                          "featureType": "water",
                          "elementType": "all",
                          "stylers": {
                                    "color": "#17263cff",
                            
                          }
                },{
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#d69563ff"
                    }
                },
                {
                          "featureType": "green",
                          "elementType": "all",
                          "stylers": {
                                    "color": "#263b3eff"
                          }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#9e7d60ff"
                    }
                }, {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#554631ff"
                    }
                }, 
                {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#9e7d60ff"
                    }
                }, {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#554631fa"
                    }
                }, 
                {
                          "featureType": "local",
                          "elementType": "labels.text.fill",
                          "stylers": {
                                    "color": "#7a959a"
                          }
                },
                {
                          "featureType": "local",
                          "elementType": "labels.text.stroke",
                          "stylers": {
                                    "color": "#d6e4e5"
                          }
                },
                {
                          "featureType": "arterial",
                          "elementType": "labels.text.fill",
                          "stylers": {
                                    "color": "#374a46"
                          }
                },
                {
                          "featureType": "highway",
                          "elementType": "labels.text.fill",
                          "stylers": {
                                    "color": "#374a46"
                          }
                },
                {
                          "featureType": "highway",
                          "elementType": "labels.text.stroke",
                          "stylers": {
                                    "color": "#e9eeed"
                          }
                },{
                    "featureType": "nationalwaysign",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#d0021bff"
                    }
                }, {
                    "featureType": "nationalwaysign",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#ffffffff"
                    }
                },
      ]
        }
    },
    series : [
        {
            name: '救治医院地点',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2]*0.8;
            },
            label: {
                formatter: '{a}',
                position: 'right',
                show: false
            },
            encode: {
                //指定节点的显示内容
                value: 2
            },
            itemStyle: {
                color: '#FF8000'
            },
            emphasis: {
                label: {
                    formatter:'{c}',
                    show: true
                }
            }
        },
        {
            name: '救治医院数量Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2]*0.8;
            },
            encode: {
                value: 2
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
                color: '#FF8000',
                shadowBlur: 10,
                shadowColor: '#333'
            },
            zlevel: 1
        }, {
            name: '心理救治医院地点',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData1(data1),
            symbolSize: function (val) {
                return val[2]*1.8;
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
            name: '心理救治医院数量Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData1(data1.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] *1.5;
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
