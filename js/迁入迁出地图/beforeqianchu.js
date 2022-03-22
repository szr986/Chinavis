// 使用说明：该页面为迁入地图js文件
// 数据说明：该数据放于data/csv/
// 编写人员：夏恩 

//实例化对象

var str = $(".province").find("option:selected").text();
str1=str.substring(0,str.length-1);
console.log(str1);


$("select").focus(function () {
    $(this).attr("size", "8");
})
$("select").blur(function () {
    $(this).removeAttr("size");
    $("option").attr("selected", "");
})
$("select").change(function () {
    $(this).removeAttr("size");
    $("option").attr("selected", "");
    $("select").blur();})

    var datestr="20200205";
    var allData=new Array();
    console.log(datestr+str1);
    
    // 读取json文件
    $.ajax({
     url: '../../data/json/provinceout/'+datestr+'/'+str1+'.json',
     async: false,
     success: function (data) {
         allData = data;
     }
 });
    var myChart = echarts.init(document.querySelector(".qianchumap .chart"));
    var chinaGeoCoordMap = {
        '上海市': [121.4648, 31.2891],
    '东莞市': [113.8953, 22.901],
    '东营市': [118.7073, 37.5513],
    '中山市': [113.4229, 22.478],
    '临汾市': [111.4783, 36.1615],
    '临沂市': [118.3118, 35.2936],
    '丹东市': [124.541, 40.4242],
    '丽水市': [119.5642, 28.1854],
    '乌鲁木齐市': [87.9236, 43.5883],
    '佛山市': [112.8955, 23.1097],
    '保定市': [115.0488, 39.0948],
    '兰州市': [103.5901, 36.3043],
    '北京市': [116.4551, 40.2539],
    '南京市': [118.8062, 31.9208],
    '南宁市': [108.479, 23.1152],
    '南昌市': [116.0046, 28.6633],
    '南通市': [121.1023, 32.1625],
    '厦门市': [118.1689, 24.6478],
    '台州市': [121.1353, 28.6688],
    '合肥市': [117.29, 32.0581],
    '呼和浩特市': [111.4124, 40.4901],
    '咸阳市': [108.4131, 34.8706],
    '哈尔滨市': [127.9688, 45.368],
    '唐山市': [118.4766, 39.6826],
    '嘉兴市': [120.9155, 30.6354],
    '大同市': [113.7854, 39.8035],
    '大连市': [122.2229, 39.4409],
    '天津市': [117.4219, 39.4189],
    '太原市': [112.3352, 37.9413],
    '威海市': [121.9482, 37.1393],
    '宁波市': [121.5967, 29.6466],
    '宝鸡市': [107.1826, 34.3433],
    '宿迁市': [118.5535, 33.7775],
    '常州市': [119.4543, 31.5582],
    '广州市': [113.5107, 23.2196],
    '廊坊市': [116.521, 39.0509],
    '延安市': [109.1052, 36.4252],
    '张家口市': [115.1477, 40.8527],
    '徐州市': [117.5208, 34.3268],
    '德州市': [116.6858, 37.2107],
    '惠州市': [114.6204, 23.1647],
    '成都市': [103.9526, 30.7617],
    '扬州市': [119.4653, 32.8162],
    '承德市': [117.5757, 41.4075],
    '拉萨市': [91.1865, 30.1465],
    '无锡市': [120.3442, 31.5527],
    '日照市': [119.2786, 35.5023],
    '昆明市': [102.9199, 25.4663],
    '杭州市': [119.5313, 29.8773],
    '枣庄市': [117.323, 34.8926],
    '柳州市': [109.3799, 24.9774],
    '株洲市': [113.5327, 27.0319],
    '武汉市': [114.3896, 30.6628],
    '汕头市': [117.1692, 23.3405],
    '江门市': [112.6318, 22.1484],
    '沈阳市': [123.1238, 42.1216],
    '沧州市': [116.8286, 38.2104],
    '河源市': [114.917, 23.9722],
    '泉州市': [118.3228, 25.1147],
    '泰安市': [117.0264, 36.0516],
    '泰州市': [120.0586, 32.5525],
    '济南市': [117.1582, 36.8701],
    '济宁市': [116.8286, 35.3375],
    '海口市': [110.3893, 19.8516],
    '淄博市': [118.0371, 36.6064],
    '淮安市': [118.927, 33.4039],
    '深圳市': [114.5435, 22.5439],
    '清远市': [112.9175, 24.3292],
    '温州市': [120.498, 27.8119],
    '渭南市': [109.7864, 35.0299],
    '湖州市': [119.8608, 30.7782],
    '湘潭市': [112.5439, 27.7075],
    '滨州市': [117.8174, 37.4963],
    '潍坊市': [119.0918, 36.524],
    '烟台市': [120.7397, 37.5128],
    '玉溪市': [101.9312, 23.8898],
    '珠海市': [113.7305, 22.1155],
    '盐城市': [120.2234, 33.5577],
    '盘锦市': [121.9482, 41.0449],
    '石家庄市': [114.4995, 38.1006],
    '福州市': [119.4543, 25.9222],
    '秦皇岛市': [119.2126, 40.0232],
    '绍兴市': [120.564, 29.7565],
    '聊城市': [115.9167, 36.4032],
    '肇庆市': [112.1265, 23.5822],
    '舟山市': [122.2559, 30.2234],
    '苏州市': [120.6519, 31.3989],
    '莱芜市': [117.6526, 36.2714],
    '菏泽市': [115.6201, 35.2057],
    '营口市': [122.4316, 40.4297],
    '葫芦岛市': [120.1575, 40.578],
    '衡水市': [115.8838, 37.7161],
    '衢州市': [118.6853, 28.8666],
    '西宁市': [101.4038, 36.8207],
    '西安市': [109.1162, 34.2004],
    '贵阳市': [106.6992, 26.7682],
    '连云港市': [119.1248, 34.552],
    '邢台市': [114.8071, 37.2821],
    '邯郸市': [114.4775, 36.535],
    '郑州市': [113.4668, 34.6234],
    '鄂尔多斯市': [108.9734, 39.2487],
    '重庆市': [107.7539, 30.1904],
    '金华市': [120.0037, 29.1028],
    '铜川市': [109.0393, 35.1947],
    '银川市': [106.3586, 38.1775],
    '镇江市': [119.4763, 31.9702],
    '长春市': [125.8154, 44.2584],
    '长沙市': [113.0823, 28.2568],
    '长治市': [112.8625, 36.4746],
    '阳泉市': [113.4778, 38.0951],
    '青岛市': [120.4651, 36.3373],
    '韶关市': [113.7964, 24.7028]
    };


    var res2 = [];
    for (var i = 0; i < allData.length; i++) {
        //  allData[i][0] = allData[i][0].substr(0, allData[i].length)
        res2.push({
            name: allData[i][0],
            value: allData[i][1],
        })
    }

    // console.log(res2);

    // var chinaDatas = res2;

    var chinaDatas = new Array();
    for (var m = 0; m < res2.length; m++) {
        chinaDatas[m] = new Array();
        for (var n = 0; n < 2; n++) {
            chinaDatas[m][0] = res2[m];
            // data[m][1].push(res2[m]);
        }
    }
    console.log(chinaDatas[0]);

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[str];
            var pos;
            var toCoord = chinaGeoCoordMap[dataItem[0].name];         
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
            console.log(res);
        }
        return res;
    };


    var series = [];
    [
        [str, chinaDatas]
    ].forEach(function (item, i) {
        console.log(item);

        series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 13
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return 3.8 + val[2] * 1.5; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
            //汇入点
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#0f0',
                        formatter: '{b}',
                        textStyle: {
                            color: "#0f0"
                        }
                    },
                    emphasis: {
                        show: true,
                        color: "#f60"
                    }
                },
                symbol: 'diamond',
                symbolSize: 28,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([10]),
                }],
            }
        );
    });


    option = {
        
        // bottom:""
        grid:{
            top:'4%',
            left:"8%",
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        // backgroundColor: "#f0f8ff",
        visualMap: { //图例值控制
            min: 0,
            max: 2,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(245, 255, 250, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .8)' //悬浮背景
                }
            }
        },
        series: series
    };



    myChart.setOption(option);




// new_element=document.createElement("script");
// new_element.setAttribute("src","../data/js/北京市.js");
// document.body.appendChild(new_element);

    // $("body").write('<script src="../data/js/北京市.js"></script>');

