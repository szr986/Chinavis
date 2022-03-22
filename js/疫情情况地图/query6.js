// 使用说明：该页面为查询后动态变化的疫情每日新增确诊病例数地图js文件
// 数据说明：该数据放于data/csv/ncov_data文件下面
// 编写人员：夏恩 
$(function() {
   
    // console.log($('input').prop("value"));
    var province = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门"];
    var date = ["01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24", "01-25", "01-26", "01-27", "01-28", "01-29", "1-30", "01-31", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06", "02-07", "02-08", "02-09", "02-10", "02-11", "02-12", "02-13", "02-14", "02-15", "02-16", "02-17", "02-18", "02-19", "02-20", "02-21", "02-22", "02-23", "02-24", "02-25", "02-26", "02-27", "02-28", "02-29", "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31", "04-01", "04-02", "04-03", "04-04", "04-05", "04-06", "04-07", "04-08", "04-09", "04-10", "04-11", "04-12", "04-13", "04-14", "04-15", "04-16", "04-17", "04-18", "04-19", "04-20", "04-21", "04-22", "04-23", "04-24", "04-25", "04-26"];
    var data =["累计死亡","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","3","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","4","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","6","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","9","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","17","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","24","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","1","0","0","0","0","1","0","0","0","0","0","0","0","0","39","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","1","0","0","0","0","1","1","0","0","0","0","0","0","1","52","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","0","0","1","0","0","0","0","1","1","0","0","0","0","0","0","1","76","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","1","1","0","0","0","0","0","0","1","100","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","1","1","0","0","0","0","0","0","2","125","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","1","1","0","0","0","0","0","0","2","162","0","0","0","1","0","1","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","2","1","0","0","0","0","0","0","2","204","0","0","0","1","0","1","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","2","1","0","0","0","0","0","0","2","249","0","0","0","1","1","1","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","2","1","0","0","0","0","0","0","2","294","0","0","0","1","1","1","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","2","1","0","0","0","0","0","0","2","350","0","0","0","1","2","1","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","2","1","0","0","0","0","0","0","2","414","0","0","0","1","2","1","0","0","0","0","0","0","0","0","0","0","0","累计死亡","1","0","1","0","0","0","0","2","1","0","0","0","0","0","0","2","479","0","0","0","1","2","1","0","0","0","0","0","0","0","0","0","1","0","累计死亡","1","1","1","0","0","0","0","3","1","0","0","0","0","0","0","2","549","0","0","0","1","2","1","1","0","0","0","0","0","0","0","0","1","0","累计死亡","1","1","1","0","0","0","1","3","1","0","0","0","0","0","0","3","618","0","1","0","2","2","1","1","0","0","0","0","0","0","0","0","1","0","累计死亡","2","1","1","0","0","0","1","5","1","0","0","0","0","0","0","4","699","0","1","0","2","2","1","1","0","0","0","1","0","0","0","0","1","0","累计死亡","2","1","2","0","0","0","1","6","1","0","0","1","0","0","1","6","780","1","1","1","2","2","1","1","0","0","0","1","0","0","0","0","1","0","累计死亡","2","1","2","0","0","0","1","7","1","0","0","3","0","1","1","6","871","1","1","1","3","2","1","1","0","0","0","2","0","0","0","0","1","0","累计死亡","3","2","2","0","0","0","1","8","1","0","0","4","0","1","1","7","974","1","1","1","3","2","1","1","0","0","0","2","0","0","0","0","1","0","累计死亡","3","2","2","0","0","0","1","8","1","0","0","4","0","1","1","8","1068","2","1","1","3","3","1","1","0","0","0","2","0","0","0","0","1","0","累计死亡","3","3","3","0","0","1","1","9","1","0","0","5","0","1","2","10","1310","2","2","2","4","3","1","1","0","0","0","2","0","0","1","0","1","0","累计死亡","3","3","3","0","0","1","1","11","1","0","0","6","0","1","2","11","1318","2","2","2","4","4","1","1","0","0","0","2","0","0","1","0","1","0","累计死亡","4","3","3","0","0","1","1","11","1","0","0","6","0","1","2","13","1457","2","2","2","4","5","1","1","0","0","0","2","0","0","1","0","1","0","累计死亡","4","3","3","0","0","1","1","11","1","0","0","6","0","1","2","13","1596","3","2","2","4","5","3","1","0","0","0","2","0","0","1","0","1","0","累计死亡","4","3","3","0","0","1","1","11","1","0","0","6","0","1","2","16","1696","3","4","2","4","5","3","1","0","0","0","2","0","0","1","1","1","0","累计死亡","4","3","4","0","0","1","1","11","1","0","0","6","0","1","2","19","1789","4","4","2","4","5","3","1","0","0","0","2","0","0","1","1","1","0","累计死亡","4","3","4","0","0","1","1","12","1","0","0","6","0","1","3","19","1921","4","5","2","4","5","3","2","0","0","0","2","0","0","1","1","1","0","累计死亡","4","3","5","0","0","1","1","12","2","0","0","6","1","1","4","19","2029","4","5","2","4","5","3","2","1","0","1","2","0","0","1","1","2","0","累计死亡","4","3","5","0","0","1","1","12","2","0","1","6","1","1","4","19","2144","4","5","2","4","6","3","2","2","0","1","2","0","0","1","1","2","0","累计死亡","4","3","6","0","0","1","1","12","3","0","1","6","1","1","4","19","2250","4","5","2","4","6","3","2","2","0","1","2","0","0","2","1","2","0","累计死亡","4","3","6","0","0","1","1","12","3","0","1","6","1","1","4","19","2346","4","6","2","4","6","3","2","2","0","1","2","0","0","2","1","2","0","累计死亡","4","3","6","0","0","1","1","12","3","0","1","6","1","1","4","19","2495","4","6","2","5","6","3","2","2","0","1","2","0","0","2","1","2","0","累计死亡","4","3","6","0","0","1","1","12","3","0","1","6","1","1","6","19","2563","4","7","2","5","6","3","2","2","0","1","2","0","0","2","1","2","0","累计死亡","4","3","6","0","0","1","1","12","3","0","1","6","1","1","6","19","2615","4","7","2","5","6","3","2","2","0","1","2","0","0","2","1","2","0","累计死亡","5","3","6","0","0","1","1","13","3","0","1","6","1","1","6","20","2641","4","7","2","5","6","3","2","2","0","1","2","0","0","2","1","2","0","累计死亡","7","3","6","0","0","1","1","13","3","0","1","6","1","1","6","20","2682","4","7","2","5","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","0","1","1","13","3","0","1","6","1","1","6","21","2727","4","7","2","5","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","0","1","1","13","3","0","1","6","1","1","6","22","2761","4","7","2","5","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","0","1","1","13","3","0","1","6","1","1","6","22","2803","4","7","2","5","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","0","1","1","13","3","0","1","6","1","1","6","22","2834","4","7","2","5","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","2871","4","7","2","5","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","2902","4","7","2","5","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","2931","4","7","2","6","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","2959","4","7","2","6","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","2986","4","7","2","6","6","3","2","2","0","1","2","0","0","3","1","2","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","3007","4","8","2","6","6","3","2","2","0","1","2","0","0","3","1","3","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","3024","4","8","2","6","6","3","2","2","0","1","2","0","0","3","1","3","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","3046","4","8","2","6","6","3","2","2","0","1","2","0","0","3","1","3","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","6","22","3056","4","8","2","6","6","3","2","2","0","2","2","0","0","3","1","3","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","7","22","3062","4","8","2","6","6","3","2","2","0","2","2","0","0","3","1","3","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","7","22","3075","4","8","2","6","6","3","2","2","0","2","2","0","0","3","1","4","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","7","22","3085","4","8","2","6","6","3","2","2","0","2","2","0","0","3","1","4","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","7","22","3099","4","8","2","6","6","3","2","2","0","2","2","0","0","3","1","4","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","7","22","3111","4","8","2","6","6","3","2","2","0","3","2","0","0","3","1","4","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","7","22","3122","4","8","2","6","6","3","2","2","0","3","2","0","0","3","1","4","0","累计死亡","8","3","6","0","1","1","1","13","3","0","1","6","1","1","7","22","3130","4","8","2","6","6","3","2","2","0","3","2","0","0","3","1","4","0","累计死亡","8","3","6","0","1","2","1","13","3","0","1","6","1","1","7","22","3132","4","8","2","6","6","3","2","2","0","3","2","0","0","3","1","4","0","累计死亡","8","3","6","0","1","2","1","13","3","0","1","6","1","1","7","22","3139","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","4","0","1","6","1","1","7","22","3144","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","4","0","1","6","1","1","7","22","3153","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","4","0","1","6","1","1","7","22","3160","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","5","0","1","6","1","1","7","22","3163","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","5","0","1","6","1","1","7","22","3169","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","5","0","1","6","1","1","7","22","3174","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","5","0","1","6","1","1","7","22","3177","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","5","0","1","6","1","1","7","22","3182","4","8","2","6","6","3","2","2","0","3","2","0","0","3","2","4","0","累计死亡","8","3","6","0","1","2","1","13","5","0","1","6","1","1","7","22","3186","4","8","2","6","6","3","2","2","0","3","2","0","0","3","3","4","0","累计死亡","8","3","6","0","1","2","1","13","5","0","1","6","1","1","7","22","3187","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","6","0","1","6","1","1","7","22","3193","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","6","0","1","6","1","1","7","22","3199","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","6","0","1","6","1","1","7","22","3203","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","6","0","1","6","1","1","7","22","3207","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","6","0","1","6","1","1","7","22","3210","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","6","0","1","6","1","1","7","22","3212","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","6","0","1","6","1","1","7","22","3212","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3213","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3215","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3216","4","8","2","6","6","3","2","2","0","3","2","0","0","3","5","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3219","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3219","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3221","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3221","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3222","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","3222","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","8","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0","累计死亡","9","3","6","0","1","2","1","13","7","0","1","6","1","1","7","22","4512","4","8","2","6","6","3","2","2","0","3","2","0","0","3","6","4","0"]
;
    data_dict = {}
    n = 0;
    for (var i = 0; i < data.length; i = i + 35) {
        middle = [];
        for (var j = 0; j < 35; j++) {
            middle.push(data[i + j])
        }
        data_dict[date[n]] = middle;
        n++;
    }


    //console.log(data_dict);

    $(".btn").click(function() {
        $(this).parent().siblings('.beforechart').show;
        $(this).parent().siblings('.beforechart').hide;
        var colors = [
            "#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3",
            "#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA",
            "#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42",
        ];
      
         //console.log($('input').prop("value"));
        // console.log(data_dict[$('input').prop("value")]);
        // first日期匹配
        var str = $('.first').prop("value");
        console.log(str.substring(str.indexOf('-') + 1, str.length))
        // second日期匹配
        var str2 = $('.second').prop("value");
        console.log(str2);
        console.log(str2.substring(str.indexOf('-') + 1, str2.length))
        var str3=str.substring(str.indexOf('-') + 1, str.length);
        var str4=str2.substring(str.indexOf('-') + 1, str2.length);
        var first_mon_data=parseInt(str3[0]+str3[1]);
        var first_day_data=parseInt(str3[3]+str3[4]);
        var second_mon_data=parseInt(str4[0]+str4[1]);
        var second_day_data=parseInt(str4[3]+str4[4]);
        console.log(parseInt(str3[0]+str3[1]));
        console.log(str3[0]+str3[1]);
        console.log(str3[3]+str3[4]);
            if(first_mon_data>second_mon_data){
                alert("第二个输入框日期应晚于第一个输入框日期！")
            }else if(first_mon_data==second_mon_data&&first_day_data>second_day_data){
                alert("第二个输入框日期应晚于第一个输入框日期！")
            }


        // 区域内的date数据
        between_date=new Array();
        for(var i=0;i<date.length;i++){
            if(date[i]===str.substring(str.indexOf('-') + 1, str.length)){
                var a=i;
            }
            if(date[i]===str2.substring(str.indexOf('-') + 1, str2.length)){
                var b=i;
            }
            between_date=date.slice(a,b+1);
        }
        console.log(between_date);
        
        // 设置颜色
        // var str1=str.substring(str.indexOf('-') + 1, str.length);
        // console.log(str1);
        var colorIndex = new Array;
        for (var i = 0; i < between_date.length; i++) {
            colorIndex[i] = between_date[i].charAt(between_date[i].length - 1);
        }
        // var colorIndex=str1.charAt(str1.length-1);
        console.log(colorIndex);

        // 日期内的数据
        // console.log(str.substring(str.indexOf('-') + 1, str.length));
        // var disease_data_before = data_dict[str.substring(str.indexOf('-') + 1, str.length)];
        var disease_data_before=new Array();
        for(var i=0;i<between_date.length;i++){
           disease_data_before[i]=new Array();
            for(var j=0;j<35;j++){
                disease_data_before[i]=data_dict[between_date[i]];
                
            }
            // console.log(data_dict[between_date[i]]);

        }
        console.log(disease_data_before);

        var disease_data = new Array();
        for (var i = 0; i < disease_data_before.length; i++) {
            disease_data [i]=new Array();
            for(var j=0;j<35;j++){
                disease_data[i].push(disease_data_before[i][j+1]);
            }
        }
        console.log(disease_data);

  //实例化对象
  var myChart = echarts.init(document.querySelector(".yiqingmap .chart"));
  var option = {
      
      baseOption: {

          timeline: {
              show: true,
              axisType: 'category',
              // realtime: false,
              // loop: false,
              autoPlay: true,
              playInterval: 2000,
              symbolSize: 12,
              left: '1%',
              // right: '5%',
              bottom: '14%',
              width: '90%',
              // controlStyle: {
              //     position: 'left'
              // },
              label:{
                  normal:{
                      color:'gray'
                  }
              },
              data: between_date,
              tooltip: {
                  formatter: between_date
              },
          },

          tooltip: {
              show: true,
              formatter: function(params) {
                  return params.name + '：' + params['value']
              },
          },
          visualMap: {
              type: 'piecewise',
              pieces: [{
                      min: 1002,
                      color: '#73240D'
                  },
                  {
                      min: 501,
                      max: 1001,
                      color: '#BB0000'
                  },
                  {
                      min: 251,
                      max: 500,
                      color: '#BD430A'
                  },
                  {
                      min: 101,
                      max: 250,
                      color: '#E08150'
                  },
                  {
                      min: 11,
                      max: 100,
                      color: '#E9B090'
                  },
                  {
                      min: 1,
                      max: 10,
                      color: '#F2DDD2'
                  },
                  {
                      value: 0,
                      color: 'white'
                  }
              ],
              orient: 'vertical',
              itemWidth: 15,
              itemHeight: 9,
              showLabel: true,
              seriesIndex: [0],

              textStyle: {
                  color: '#7B93A7'
              },
              bottom: '24%',
              left: "6%",
          },
          grid: {
              right: '9%',
              top: '8%',
              bottom: '10%',
              width: '20%',
              height:'70%'
          },
          xAxis: {
              min: 0,
              max: 4000,
              show: false
          },
          yAxis: [{
              inverse: true,
              offset: '2',
              'type': 'category',
              data: '',
              nameTextStyle: {
                  color: '#fff'
              },
              axisTick: {
                  show: false,
              },
              axisLabel: {
                  //rotate:45,
                  textStyle: {
                      fontSize: 14,
                      color: '#000000',
                  },
                  interval: 0
              },
              axisLine: {
                  show: false,
                  lineStyle: {
                      color: '#333'
                  },
              },

              splitLine: {
                  show: false,
                  lineStyle: {
                      color: '#333'
                  }
              },
          }],
          // backgroundColor: "#fcfcfc",
          geo: {
              map: 'china',
              top:'8%',
              right: '35%',
              left: '3%',
              label: {
                  emphasis: {
                      show: false,
                  }
              },
              itemStyle: {
                  emphasis: {
                      areaColor: 'b0c4de'
                  }
              }
          },
          series: [{
                  name: 'mapSer',
                  type: 'map',
                  map: 'china',
                  roam: false,
                  geoIndex: 0,
                  label: {
                      show: false,
                  },
              },
              {
                  'name': '',
                  'type': 'bar',
                  zlevel: 2,
                  barWidth: '40%',
                  label: {
                      normal: {
                          show: true,
                          fontSize: 14,
                          position: 'right',
                          formatter: '{c}'
                      }
                  },
              }
          ],

      },
      // animationDurationUpdate: 3000,
      //animationEasingUpdate: 'quinticInOut',
      options: []
  };
  for (var n = 0; n < between_date.length; n++) {

      var res = [];
      for (j = 0; j < 34; j++) {
          res.push({
              name: province[j],
              value: disease_data[n][j]
          })
      }
      res.sort(function(a, b) {
          return b.value - a.value;
      }).slice(0, 6);

      res.sort(function(a, b) {
          return a.value - b.value;
      });
      var res1 = [];
      var res2 = [];
      for (t = 0; t < 10; t++) {
          res1[t] = res[res.length - 1 - t].name;
          res2[t] = res[res.length - 1 - t].value;
      }
      // for (i = 0; i < res2.length; i++) {
      //     res2[i] = res2[i] * 18;
      // }
    // console.log(res1[0]);

      //console.log(res2[0]);
    
      option.options.push({
          title: [{
              show: true,
              text: '累积死亡病例数前十的省份',
              textStyle: {
                  color: 'rgb(190, 184, 184)',
                  fontSize: 18
              },
              right: '7%',
              top: '4%'
          }],
          yAxis: {
              data: res1,
          
          },
          series: [{
              type: 'map',
            
              data: res
          }, {
              type: 'bar',
              barHight: 18,
              
              data: res2,
              itemStyle: {
                
                  normal: {
                     
                      color: colors[colorIndex[Math.floor((Math.random() * colorIndex.length))]]
         
                          
                         
                  }
              },
          }]
      });
  }
  myChart.setOption(option);

})



})