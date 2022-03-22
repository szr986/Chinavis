// 使用说明：该页面为查询后动态变化的疫情每日新增确诊病例数地图js文件
// 数据说明：该数据放于data/csv/ncov_data文件下面
// 编写人员：夏恩 
$(function() {
   
    // console.log($('input').prop("value"));
    var province = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门"];
    var date = ["01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24", "01-25", "01-26", "01-27", "01-28", "01-29", "1-30", "01-31", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06", "02-07", "02-08", "02-09", "02-10", "02-11", "02-12", "02-13", "02-14", "02-15", "02-16", "02-17", "02-18", "02-19", "02-20", "02-21", "02-22", "02-23", "02-24", "02-25", "02-26", "02-27", "02-28", "02-29", "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31", "04-01", "04-02", "04-03", "04-04", "04-05", "04-06", "04-07", "04-08", "04-09", "04-10", "04-11", "04-12", "04-13", "04-14", "04-15", "04-16", "04-17", "04-18", "04-19", "04-20", "04-21", "04-22", "04-23", "04-24", "04-25", "04-26"];
    var data =["累计疑似","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","0","0","0","0","0","1","0","7","0","16","1","0","2","1","0","11","0","7","1","1","0","3","1","1","0","0","0","0","1","0","0","0","0","累计疑似","0","0","0","1","0","0","1","1","10","0","10","3","0","0","0","0","0","0","1","2","1","0","5","1","0","0","0","0","0","1","0","0","0","0","累计疑似","0","0","0","1","0","0","0","0","16","0","38","8","1","5","5","0","279","10","7","3","0","13","7","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","47","0","22","2","0","0","12","34","0","29","14","4","17","9","42","710","25","17","2","0","71","10","0","1","0","0","0","0","1","3","0","0","0","累计疑似","0","51","0","19","5","0","0","18","72","0","27","20","7","38","11","116","1405","35","18","6","0","86","25","0","4","0","0","0","1","1","0","0","0","0","累计疑似","0","61","5","28","0","24","3","13","95","0","20","15","27","30","11","165","1887","25","40","21","1","146","34","2","29","0","0","0","0","1","1","0","0","0","累计疑似","0","85","13","57","1","40","3","47","90","0","63","43","59","68","35","212","4472","42","54","40","0","188","92","3","75","0","0","6","0","0","6","0","0","0","累计疑似","0","88","20","44","2","52","3","67","129","0","115","42","68","88","42","266","5324","52","73","11","21","219","138","1","104","0","0","2","0","0","2","0","0","0","累计疑似","0","103","56","41","3","72","2","68","167","0","101","55","80","107","55","411","6940","85","122","118","48","246","182","3","163","1","0","5","0","2","3","0","0","0","累计疑似","0","104","68","54","0","85","10","105","180","0","117","67","110","123","79","584","9033","223","137","155","66","279","243","6","191","0","116","8","1","1","22","0","0","0","累计疑似","0","150","78","67","1","89","10","128","164","0","154","98","116","197","90","735","11272","303","151","256","73","378","241","75","236","0","132","15","0","1","28","0","0","0","累计疑似","0","142","88","75","4","122","10","149","167","42","202","117","111","260","83","751","13577","426","126","288","95","408","256","67","228","0","158","15","1","1","19","0","0","0","累计疑似","0","112","104","64","7","116","14","172","168","47","207","160","99","312","81","754","14872","434","157","319","101","425","247","59","261","0","201","20","2","8","21","0","0","0","累计疑似","0","133","108","64","4","113","17","163","173","44","201","153","96","359","62","760","16898","351","205","330","113","398","268","41","252","0","205","9","0","12","26","0","0","0","累计疑似","141","168","93","62","2","120","24","178","168","47","258","124","87","319","70","678","18549","289","180","364","109","387","258","33","225","0","221","9","0","18","33","0","0","0","累计疑似","160","190","117","42","1","127","58","184","194","43","299","130","91","343","94","693","18447","211","136","396","118","397","281","33","172","0","215","18","0","24","46","0","0","0","累计疑似","170","190","133","42","5","143","69","222","196","55","322","141","78","312","85","688","19728","207","148","391","132","379","340","37","149","0","238","16","0","39","47","0","0","0","累计疑似","157","228","117","54","9","169","71","210","166","59","422","141","94","249","96","654","21261","183","170","340","150","408","409","54","123","0","260","21","0","45","39","0","0","0","累计疑似","163","297","81","58","12","226","67","234","181","68","345","140","99","218","100","651","22433","154","195","295","203","392","432","61","144","0","321","23","0","41","23","0","0","0","累计疑似","184","287","76","71","11","263","56","258","205","67","345","126","85","200","88","600","23638","155","208","283","230","409","431","82","146","0","343","21","0","36","38","0","0","0","累计疑似","207","292","61","63","12","280","40","224","223","67","334","115","81","183","75","588","18438","134","169","243","219","418","461","75","125","0","375","14","0","34","39","0","0","0","累计疑似","236","278","44","58","10","331","47","181","180","64","305","92","72","170","66","573","16687","136","148","257","187","427","475","67","109","0","389","20","0","33","33","0","0","0","累计疑似","218","328","43","65","11","287","57","171","177","62","263","79","74","155","71","538","11295","135","135","248","206","428","432","53","89","0","367","18","0","31","31","0","0","0","累计疑似","194","354","37","72","13","306","55","146","183","59","196","69","69","120","69","479","9028","96","123","251","176","441","367","50","100","0","304","23","0","28","27","0","0","0","累计疑似","167","387","39","71","12","262","39","133","156","49","121","52","73","106","83","474","6169","67","17","232","170","427","326","47","96","0","267","12","0","30","25","0","0","0","累计疑似","155","357","33","62","16","257","27","135","143","41","88","45","55","60","73","408","5534","70","12","181","141","313","310","38","103","0","245","12","0","29","26","0","0","0","累计疑似","122","348","26","43","19","275","37","122","142","32","82","32","39","31","66","345","5243","65","2","156","141","246","213","42","108","0","189","10","0","30","22","0","0","0","累计疑似","116","285","13","32","17","243","36","108","117","22","70","34","31","19","67","298","4826","24","1","122","119","183","178","34","100","0","111","10","0","28","20","0","0","0","累计疑似","128","249","6","26","16","191","34","101","97","22","58","20","27","11","61","220","4194","22","0","93","114","162","157","23","83","0","79","2","0","27","19","0","0","0","累计疑似","145","215","0","22","17","168","36","75","127","20","53","13","25","6","38","225","3462","17","1","69","86","129","105","19","64","0","66","2","0","25","18","0","0","0","累计疑似","125","200","0","11","17","155","31","23","115","13","35","11","18","4","38","174","3456","7","1","65","71","98","85","14","61","0","52","0","0","25","17","0","0","0","累计疑似","114","173","0","11","16","77","18","1","107","12","26","7","6","2","30","103","4094","7","1","67","59","71","56","11","58","0","46","1","0","21","11","0","0","0","累计疑似","104","131","0","12","15","40","20","1","100","11","19","4","2","2","25","69","4490","4","1","56","46","40","53","10","59","0","34","0","0","11","6","0","0","0","累计疑似","100","141","0","11","14","34","19","0","99","11","19","4","0","0","18","43","3363","0","0","58","36","38","51","8","45","0","25","0","0","7","4","0","0","0","累计疑似","94","108","0","12","14","38","20","0","90","11","19","4","1","0","17","22","2770","1","0","46","37","32","36","9","32","0","11","0","0","7","3","0","0","0","累计疑似","73","90","0","10","13","36","27","0","64","11","17","2","0","0","14","16","2292","2","0","21","38","25","28","3","26","0","8","0","0","5","3","0","0","0","累计疑似","57","75","0","9","11","24","18","0","78","9","13","0","0","0","4","4","2067","2","0","10","33","23","20","2","23","0","2","0","0","5","2","0","0","0","累计疑似","46","53","0","9","11","29","3","0","74","8","10","0","0","0","2","4","2019","0","0","5","24","22","14","2","17","0","0","0","0","4","2","0","0","0","累计疑似","38","55","0","5","10","44","5","0","64","8","6","0","0","0","1","4","1989","0","2","2","22","19","13","3","12","0","0","0","0","4","2","0","0","0","累计疑似","33","47","0","0","10","29","6","0","57","7","3","0","0","1","0","2","1171","1","0","0","12","13","7","2","11","0","0","0","0","4","2","0","0","0","累计疑似","39","39","0","0","8","24","9","0","32","5","2","0","0","0","0","1","646","0","1","0","15","12","5","1","5","0","0","0","0","5","2","0","0","0","累计疑似","42","26","0","0","8","31","9","0","17","5","6","0","0","0","0","0","527","0","0","0","7","6","3","0","6","0","0","0","18","4","0","0","0","0","累计疑似","37","31","0","0","2","38","4","0","19","4","2","0","0","1","0","0","434","0","0","0","2","3","1","1","4","0","0","0","0","4","0","0","0","0","累计疑似","38","35","0","0","1","55","2","2","26","4","4","0","0","1","0","0","340","0","0","0","0","3","2","1","5","0","0","0","0","1","0","0","0","0","累计疑似","34","33","0","0","1","85","2","1","32","3","4","0","0","1","0","0","315","0","0","0","1","2","1","1","5","0","0","0","0","1","0","0","0","0","累计疑似","29","27","0","0","1","74","3","1","40","3","2","0","0","0","0","0","285","0","0","0","1","4","2","2","7","0","0","0","0","1","0","0","0","0","累计疑似","35","25","0","0","1","75","5","0","37","3","2","0","0","0","0","0","301","0","0","0","1","7","2","2","6","0","0","0","0","0","0","0","0","0","累计疑似","27","27","0","0","1","45","3","0","40","3","2","0","0","0","0","0","295","0","0","0","1","5","3","2","4","0","0","0","0","0","0","0","0","0","累计疑似","35","27","0","0","1","32","1","1","30","3","2","0","0","0","0","0","277","0","0","0","0","4","2","2","4","0","0","0","0","0","0","0","0","0","累计疑似","36","16","0","0","1","4","1","1","30","0","1","0","0","0","0","0","246","0","0","0","0","4","2","3","4","0","0","0","0","0","0","0","0","0","累计疑似","27","9","0","0","1","1","1","0","37","0","1","0","0","0","0","0","198","0","1","0","0","3","2","2","2","0","0","0","0","0","0","0","0","0","累计疑似","29","7","0","0","1","1","1","0","46","0","1","0","0","0","0","0","158","0","1","0","1","3","1","0","3","0","0","0","0","0","0","0","0","0","累计疑似","31","6","0","0","1","0","0","0","55","0","1","0","0","0","0","0","49","0","0","0","1","1","0","0","2","0","0","0","0","0","0","0","0","0","累计疑似","32","5","0","0","0","0","0","0","42","0","1","0","0","0","0","0","34","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","累计疑似","37","3","0","0","0","0","0","0","50","1","3","0","0","0","0","0","18","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","39","5","0","0","0","0","0","0","68","1","3","0","0","0","0","0","18","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","36","4","0","0","0","0","0","0","80","1","3","0","0","0","0","0","3","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","48","2","0","0","0","0","0","0","63","1","4","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","41","4","0","0","0","0","0","0","51","1","5","0","0","0","1","0","0","0","1","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","44","3","0","0","0","0","0","0","50","1","4","0","0","0","1","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","41","10","0","0","0","0","0","0","51","1","1","0","0","0","1","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","45","21","0","5","0","0","0","0","37","0","1","0","7","0","1","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","55","27","0","5","0","0","0","0","36","1","2","0","8","0","1","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","45","35","0","5","0","0","0","0","35","0","0","0","10","0","1","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","40","48","0","2","2","0","0","0","34","0","1","0","6","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","41","71","0","0","5","0","0","0","36","0","0","0","4","0","0","0","0","0","0","0","1","0","0","0","0","0","1","0","0","0","0","0","0","0","累计疑似","40","89","0","0","11","0","0","0","43","1","0","0","4","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","40","95","0","0","11","0","0","0","33","1","1","0","2","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","31","91","0","0","16","0","0","0","32","1","0","0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","累计疑似","31","87","0","0","16","0","0","0","32","1","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","27","94","0","0","25","0","0","0","35","1","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","19","93","0","0","24","0","0","0","34","1","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","16","81","0","0","24","0","0","0","28","1","0","0","3","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","13","67","0","0","25","0","0","0","26","1","0","0","3","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","9","58","0","0","25","0","0","0","19","1","0","0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","7","48","0","0","26","0","0","0","23","1","0","0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","4","32","0","0","32","0","0","0","17","1","0","0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","4","25","0","0","32","0","0","0","25","1","0","0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","2","13","0","3","37","0","0","0","25","0","0","0","2","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","2","10","0","2","44","0","0","1","12","0","0","0","1","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","4","0","2","37","0","0","0","9","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","2","0","0","29","0","0","5","7","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","2","0","0","26","0","1","6","47","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","2","0","0","23","0","0","8","39","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","2","0","0","24","0","0","6","40","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","0","1","0","0","24","2","0","8","38","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","1","0","0","16","2","0","6","37","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","1","0","0","17","2","0","7","34","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","17","2","0","7","36","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","18","2","0","5","22","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","15","2","0","3","22","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","15","1","0","4","16","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","14","1","0","3","16","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","7","0","0","1","11","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","6","0","0","0","13","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","4","0","0","0","12","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","1","0","0","0","2","0","0","0","9","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计疑似","2","0","0","0","2","0","0","0","6","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
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
              text: '累积疑似病例数前十的省份',
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