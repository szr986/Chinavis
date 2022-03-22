(function () {

    // 硬币归一化处理
    function Guiyi(num) {
        po = ((num - 20) / (991000 - 20)) * 200
        return po
    }


    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    //console.log(random(1,bilibili.length));

    function randUnique(start, end, size) {
        // 全部随机数值
        var allNums = new Array;

        // 判断获取随机数个数
        size = size ? (size > end - start ? end - start : size) : 1;

        // 生成随机数值区间数组
        for (var i = start, k = 0; i <= end; i++, k++) {
            allNums[k] = i;
        }

        // 打撒数组排序
        allNums.sort(function () { return 0.5 - Math.random(); });

        // 获取数组从第一个开始到指定个数的下标区间
        return allNums.slice(0, size);
    }




    var RandomNum;
    //x是随机数数组，用来存储获得的随机数
    var x = new Array();
    for (i = 0; i < 25; i++) {
        RandomNum = random(1, bilibili.length - 1);
        x[i] = RandomNum;

    }

    x = randUnique(1, bilibili.length - 1, 25)
    console.log(x)

    //for(i=0;i<x.length;i++){
    //  console.log(x[i])
    //}


    var myColor = ["#FFFF00", "orange", "#FFB6C1", "#00FFFF", "#FF00FF", "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
    var myEcharts = echarts.init(document.getElementById('bilibili'));
    var colorList = [[
        "#BA55D3", "orange", "#FFB6C1", "#00FFFF", "#FF00FF",
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
        '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
        '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
        '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
        '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]][2];

    // 数据存放
    var series = [[
        // 第一组数据start
        {
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 500,
                edgeLength: 10
            },
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            data: [{//x[]为随机数数组
                "name": bilibili[x[0]][6],
                "value": bilibili[x[0]][2],
                "symbolSize": bilibili[x[0]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[1]][6],
                "value": bilibili[x[1]][2],
                "symbolSize": bilibili[x[1]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[2]][6],
                "value": bilibili[x[2]][2],
                "symbolSize": bilibili[x[2]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[3]][6],
                "value": bilibili[x[3]][2],
                "symbolSize": bilibili[x[3]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[4]][6],
                "value": bilibili[x[4]][2],
                "symbolSize": bilibili[x[4]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[5]][6],
                "value": bilibili[x[5]][2],
                "symbolSize": bilibili[x[5]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[6]][6],
                "value": bilibili[x[6]][2],
                "symbolSize": bilibili[x[6]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[7]][6],
                "value": bilibili[x[7]][2],
                "symbolSize": bilibili[x[7]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[8]][6],
                "value": bilibili[x[8]][2],
                "symbolSize": bilibili[x[8]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[9]][6],
                "value": bilibili[x[9]][2],
                "symbolSize": bilibili[x[9]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[10]][6],
                "value": bilibili[x[10]][2],
                "symbolSize": bilibili[x[10]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[11]][6],
                "value": bilibili[x[11]][2],
                "symbolSize": bilibili[x[11]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[12]][6],
                "value": bilibili[x[12]][2],
                "symbolSize": bilibili[x[12]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[13]][6],
                "value": bilibili[x[13]][2],
                "symbolSize": bilibili[x[13]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[14]][6],
                "value": bilibili[x[14]][2],
                "symbolSize": bilibili[x[14]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            }, {
                "name": bilibili[x[15]][6],
                "value": bilibili[x[15]][2],
                "symbolSize": bilibili[x[15]][2] / 20000,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[random(1, colorList.length - 1)],
                        "color": colorList[random(1, colorList.length - 1)]
                    }
                }
            },]
        }],
    // 第一组数据end
    //第二组数据start
    [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 500,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [{//x[]为随机数数组
            "name": bilibili[x[0]][6],
            "value": bilibili[x[0]][8],
            "symbolSize": bilibili[x[0]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[1]][6],
            "value": bilibili[x[1]][8],
            "symbolSize": bilibili[x[1]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[2]][6],
            "value": bilibili[x[2]][8],
            "symbolSize": bilibili[x[2]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[3]][6],
            "value": bilibili[x[3]][8],
            "symbolSize": bilibili[x[3]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[4]][6],
            "value": bilibili[x[4]][8],
            "symbolSize": bilibili[x[4]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[5]][6],
            "value": bilibili[x[5]][8],
            "symbolSize": bilibili[x[5]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[6]][6],
            "value": bilibili[x[6]][8],
            "symbolSize": bilibili[x[6]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[7]][6],
            "value": bilibili[x[7]][8],
            "symbolSize": bilibili[x[7]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[8]][6],
            "value": bilibili[x[8]][8],
            "symbolSize": bilibili[x[8]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[9]][6],
            "value": bilibili[x[9]][8],
            "symbolSize": bilibili[x[9]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[10]][6],
            "value": bilibili[x[10]][8],
            "symbolSize": bilibili[x[10]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[11]][6],
            "value": bilibili[x[11]][8],
            "symbolSize": bilibili[x[11]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[12]][6],
            "value": bilibili[x[12]][8],
            "symbolSize": bilibili[x[12]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[13]][6],
            "value": bilibili[x[13]][8],
            "symbolSize": bilibili[x[13]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[14]][6],
            "value": bilibili[x[14]][8],
            "symbolSize": bilibili[x[14]][8] / 1500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        },]
    }
        // 第二组数据end


    ],
    // 第二组数据end
    //第三组数据start
    [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 500,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [{//x[]为随机数数组
            "name": bilibili[173][6],
            "value": bilibili[173][9],
            "symbolSize": bilibili[173][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[172][6],
            "value": bilibili[172][9],
            "symbolSize": bilibili[172][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[171][6],
            "value": bilibili[171][9],
            "symbolSize": bilibili[171][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[170][6],
            "value": bilibili[170][9],
            "symbolSize": bilibili[170][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[169][6],
            "value": bilibili[169][9],
            "symbolSize": bilibili[169][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[168][6],
            "value": bilibili[168][9],
            "symbolSize": bilibili[168][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[167][6],
            "value": bilibili[167][9],
            "symbolSize": bilibili[167][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[166][6],
            "value": bilibili[166][9],
            "symbolSize": bilibili[166][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[165][6],
            "value": bilibili[165][9],
            "symbolSize": bilibili[165][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[164][6],
            "value": bilibili[164][9],
            "symbolSize": bilibili[164][9] / 500,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        },]
    }],
    // 第三组数据end
    // 第四组数据start
    [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 500,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [{//x[]为随机数数组
            "name": bilibili[x[0]][6],
            "value": bilibili[x[0]][10],
            "symbolSize": bilibili[x[0]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[1]][6],
            "value": bilibili[x[1]][10],
            "symbolSize": bilibili[x[1]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[2]][6],
            "value": bilibili[x[2]][10],
            "symbolSize": bilibili[x[2]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[3]][6],
            "value": bilibili[x[3]][10],
            "symbolSize": bilibili[x[3]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[4]][6],
            "value": bilibili[x[4]][10],
            "symbolSize": bilibili[x[4]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[5]][6],
            "value": bilibili[x[5]][10],
            "symbolSize": bilibili[x[5]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[6]][6],
            "value": bilibili[x[6]][10],
            "symbolSize": bilibili[x[6]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[7]][6],
            "value": bilibili[x[7]][10],
            "symbolSize": bilibili[x[7]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[8]][6],
            "value": bilibili[x[8]][10],
            "symbolSize": bilibili[x[8]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[9]][6],
            "value": bilibili[x[9]][10],
            "symbolSize": bilibili[x[9]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[10]][6],
            "value": bilibili[x[10]][10],
            "symbolSize": bilibili[x[10]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[11]][6],
            "value": bilibili[x[11]][10],
            "symbolSize": bilibili[x[11]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[12]][6],
            "value": bilibili[x[12]][10],
            "symbolSize": bilibili[x[12]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[13]][6],
            "value": bilibili[x[13]][10],
            "symbolSize": bilibili[x[13]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[14]][6],
            "value": bilibili[x[14]][10],
            "symbolSize": bilibili[x[14]][10] / 300,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        },]
    }],
    //第五组数据start
    [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 500,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [{//x[]为随机数数组
            "name": bilibili[x[0]][6],
            "value": bilibili[x[0]][12],
            "symbolSize": bilibili[x[0]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[1]][6],
            "value": bilibili[x[1]][12],
            "symbolSize": bilibili[x[1]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[2]][6],
            "value": bilibili[x[2]][12],
            "symbolSize": bilibili[x[2]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[3]][6],
            "value": bilibili[x[3]][12],
            "symbolSize": bilibili[x[3]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[4]][6],
            "value": bilibili[x[4]][12],
            "symbolSize": bilibili[x[4]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[5]][6],
            "value": bilibili[x[5]][12],
            "symbolSize": bilibili[x[5]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[6]][6],
            "value": bilibili[x[6]][12],
            "symbolSize": bilibili[x[6]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[7]][6],
            "value": bilibili[x[7]][12],
            "symbolSize": bilibili[x[7]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[8]][6],
            "value": bilibili[x[8]][12],
            "symbolSize": bilibili[x[8]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[9]][6],
            "value": bilibili[x[9]][12],
            "symbolSize": bilibili[x[9]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[10]][6],
            "value": bilibili[x[10]][12],
            "symbolSize": bilibili[x[10]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[11]][6],
            "value": bilibili[x[11]][12],
            "symbolSize": bilibili[x[11]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[12]][6],
            "value": bilibili[x[12]][12],
            "symbolSize": bilibili[x[12]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[13]][6],
            "value": bilibili[x[13]][12],
            "symbolSize": bilibili[x[13]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        }, {//x[]为随机数数组
            "name": bilibili[x[14]][6],
            "value": bilibili[x[14]][12],
            "symbolSize": bilibili[x[14]][12] / 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[random(1, colorList.length - 1)],
                    "color": colorList[random(1, colorList.length - 1)]
                }
            }
        },]
    }],
    ]

    //标签存放
    var tooltip = [
        [{
            formatter: '播放量<br/>{b}:{c}'
        }],
        [{
            formatter: '点赞数<br/>{b}:{c}'
        }],
        [{
            formatter: '硬币数<br/>{b}:{c}'
        }],
        [{
            formatter: '收藏数<br/>{b}:{c}'
        }],
        [{
            formatter: '评论数<br/>{b}:{c}'
        }],


    ]




    var option = {
        // 图表标题
        title: {
            show: true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
            text: '疫情期间哔哩哔哩数据统计',//主标题文本，'\n'指定换行
            x: '5%',        // 水平安放位置，默认为左对齐，可选为：
            // 'center' ¦ 'left' ¦ 'right'
            // ¦ {number}（x坐标，单位px）
            y: 'top',             // 垂直安放位置，默认为全图顶端，可选为：
            // 'top' ¦ 'bottom' ¦ 'center'
            // ¦ {number}（y坐标，单位px）
            //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
            borderColor: '#ccc',    // 标题边框颜色
            borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
            padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
            // 接受数组分别设定上右下左边距，同css
            itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#fff'        // 主标题文字颜色
            },
            subtextStyle: {
                color: '#aaa'        // 副标题文字颜色
            }
        },

        // visualMap: {
        //貌似没用
        inRange: {
            // 气泡尺寸：5 像素到 60 像素。
            symbolSize: [5, 350]
        },
        //},

        tooltip: tooltip[0],
        animationDurationUpdate: function (idx) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: series[0]
    }


    myEcharts.setOption(option);

    window.addEventListener("resize", function () {
        myEcharts.resize();
    });
    // 5.点击切换效果
    $("div .bili").on("click", "a", function () {
        // alert(1);
        console.log($(this).index());
        $(this).css('color', 'orange');
        $(this).siblings('a').css('color', '#fff');
        var serie = series[$(this).index()];
        var tool = tooltip[$(this).index()]
        option.series = serie
        option.tooltip = tool
        // 需要重新渲染
        myEcharts.setOption(option, true);
    });
})();