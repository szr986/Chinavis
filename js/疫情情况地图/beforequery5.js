// 使用说明：该页面为初始化疫情每日新增确诊病例数地图地图js文件
// 数据说明：该数据放于data/csv/ncov_data文件下面
// 编写人员：夏恩 

$(function() {
   
    // console.log($('input').prop("value"));
    var province = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门"];
    var date = ["01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24", "01-25", "01-26", "01-27", "01-28", "01-29", "1-30", "01-31", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06", "02-07", "02-08", "02-09", "02-10", "02-11", "02-12", "02-13", "02-14", "02-15", "02-16", "02-17", "02-18", "02-19", "02-20", "02-21", "02-22", "02-23", "02-24", "02-25", "02-26", "02-27", "02-28", "02-29", "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31", "04-01", "04-02", "04-03", "04-04", "04-05", "04-06", "04-07", "04-08", "04-09", "04-10", "04-11", "04-12", "04-13", "04-14", "04-15", "04-16", "04-17", "04-18", "04-19", "04-20", "04-21", "04-22", "04-23", "04-24", "04-25", "04-26"];
    var data = ["累计确诊","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","45","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计确诊","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","62","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计确诊","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","121","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计确诊","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","198","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计确诊","5","0","0","0","0","0","0","0","2","0","0","0","0","0","0","0","270","0","14","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","累计确诊","10","2","0","0","0","0","0","0","9","0","5","0","0","2","1","1","375","1","26","0","0","5","2","0","1","0","0","0","0","0","0","1","1","1","累计确诊","14","4","1","1","0","2","1","1","16","1","10","1","1","3","2","5","444","4","32","5","4","9","5","3","1","0","0","0","0","1","0","1","1","1","累计确诊","26","5","2","1","1","4","3","3","20","5","30","15","5","7","9","9","549","9","53","13","5","27","15","3","2","0","3","2","0","2","2","1","2","2","累计确诊","36","8","8","6","2","12","4","9","33","14","62","39","10","18","21","32","729","24","78","23","10","57","28","4","5","0","5","4","0","3","3","3","5","2","累计确诊","51","10","13","9","7","17","4","15","40","31","104","60","18","36","39","83","1052","69","98","33","20","75","44","5","11","0","15","7","1","4","4","3","5","2","累计确诊","67","15","18","13","11","22","6","21","53","47","128","70","35","48","61","128","1423","100","146","46","27","110","69","7","21","0","22","14","4","7","5","4","8","5","累计确诊","80","23","33","20","13","27","8","30","66","70","173","106","59","72","87","168","2714","143","188","51","38","132","90","9","32","0","35","19","6","11","10","5","8","7","累计确诊","96","25","48","27","16","36","9","37","80","99","296","152","82","109","121","206","3554","221","241","58","43","147","108","9","51","0","46","24","6","12","13","8","8","7","累计确诊","112","27","65","35","18","39","14","43","101","129","428","200","101","162","145","278","4586","277","311","78","46","165","142","12","70","1","63","26","6","17","14","8","10","7","累计确诊","132","32","82","39","20","45","14","59","128","168","537","237","120","240","178","352","5806","332","393","87","49","206","177","15","80","1","87","30","8","21","17","9","12","7","累计确诊","156","34","96","47","23","60","17","80","153","202","599","297","144","286","202","422","7153","389","520","100","57","238","207","29","91","1","101","35","8","26","18","10","13","7","累计确诊","183","45","104","56","26","64","23","95","177","236","661","340","159","333","225","493","9074","463","604","111","63","262","231","38","99","1","116","40","9","28","21","10","14","7","累计确诊","212","49","113","66","33","70","31","118","193","271","724","408","179","391","246","566","11177","521","683","127","70","300","254","46","109","1","128","51","13","31","24","10","15","8","累计确诊","228","63","126","74","37","74","42","155","208","308","829","480","194","476","270","675","13522","593","797","139","79","337","282","56","117","1","142","56","15","34","29","10","15","8","累计确诊","253","67","135","81","42","81","54","190","233","341","895","530","205","548","298","764","16678","661","870","150","89","366","301","64","122","1","165","57","17","34","32","11","18","10","累计确诊","274","70","157","90","46","89","59","227","254","373","954","591","215","600","343","851","19665","711","944","168","100","389","321","69","128","1","173","62","18","40","36","11","21","10","累计确诊","297","79","171","96","49","94","65","277","269","408","1006","665","224","661","379","914","22112","772","1018","172","111","411","344","77","135","1","184","70","18","43","39","16","24","10","累计确诊","315","81","195","104","50","99","69","282","281","439","1048","733","239","698","407","981","24953","803","1075","183","123","426","363","89","138","1","195","71","18","45","42","16","26","10","累计确诊","326","88","206","115","54","105","78","307","292","468","1075","779","250","740","435","1033","27100","838","1120","195","128","446","386","96","140","1","208","81","18","45","45","17","26","10","累计确诊","337","91","218","119","58","107","80","331","295","492","1104","830","261","771","459","1073","29631","879","1151","210","136","468","405","109","141","1","213","85","18","49","49","18","36","10","累计确诊","342","96","239","122","58","108","81","360","302","515","1117","860","267","804","486","1105","31728","912","1177","215","142","486","417","118","149","1","219","86","18","53","55","18","42","10","累计确诊","352","106","251","124","60","111","83","378","306","543","1131","889","272","844","497","1135","33366","946","1219","222","145","505","436","131","154","1","225","86","18","58","59","18","49","10","累计确诊","366","112","265","126","61","116","84","395","313","570","1145","910","279","872","506","1169","48206","968","1241","222","157","518","451","135","155","1","229","87","18","64","63","18","50","10","累计确诊","372","119","283","126","63","117","86","418","318","593","1155","934","281","900","519","1184","51986","988","1261","226","157","529","463","140","162","1","230","90","18","67","65","18","53","10","累计确诊","375","120","291","127","68","119","88","425","326","604","1162","950","285","913","530","1212","54406","1001","1294","235","162","537","470","143","168","1","232","90","18","70","70","18","56","10","累计确诊","380","122","300","128","70","120","89","445","328","617","1167","962","287","925","537","1231","56249","1004","1316","237","162","544","481","144","169","1","236","90","18","70","71","18","56","10","累计确诊","381","124","301","129","72","121","89","457","331","626","1171","973","290","930","541","1246","58182","1006","1322","238","162","551","495","146","171","1","240","91","18","70","73","20","57","10","累计确诊","387","125","302","130","73","121","89","464","333","629","1172","982","292","933","543","1257","59989","1007","1328","242","163","553","508","146","172","1","240","91","18","70","76","22","60","10","累计确诊","393","128","306","131","75","121","90","470","333","631","1173","986","293","934","544","1262","61682","1008","1331","244","163","555","514","146","173","1","242","91","18","71","76","22","62","10","累计确诊","395","130","307","131","75","121","91","476","333","631","1175","987","293","934","546","1265","62457","1010","1332","245","168","560","520","146","172","1","245","91","18","71","76","24","65","10","累计确诊","396","131","308","132","75","121","91","479","334","631","1203","988","293","934","748","1267","63088","1011","1333","246","168","567","525","146","174","1","245","91","18","71","76","24","68","10","累计确诊","399","133","309","132","75","121","91","479","334","631","1205","989","293","934","750","1270","63454","1013","1339","249","168","572","526","146","174","1","245","91","18","71","76","26","68","10","累计确诊","399","135","311","132","75","121","91","480","335","631","1205","989","293","934","754","1271","64084","1016","1342","249","168","573","526","146","174","1","245","91","18","71","76","26","69","10","累计确诊","399","135","311","132","75","121","93","480","335","631","1205","989","293","934","755","1271","64287","1016","1345","251","168","575","527","146","174","1","245","91","18","71","76","28","74","10","累计确诊","400","135","311","133","75","121","93","480","335","631","1205","989","294","934","755","1271","64786","1016","1347","252","168","576","529","146","174","1","245","91","18","71","76","30","81","10","累计确诊","400","135","312","133","75","121","93","480","336","631","1205","989","294","934","756","1271","65187","1016","1347","252","168","576","531","146","174","1","245","91","18","71","76","31","85","10","累计确诊","410","135","317","133","75","121","93","480","337","631","1205","989","296","934","756","1272","65596","1017","1347","252","168","576","534","146","174","1","245","91","18","72","76","32","91","10","累计确诊","410","136","318","133","75","121","93","480","337","631","1205","990","296","935","756","1272","65914","1017","1348","252","168","576","538","146","174","1","245","91","18","72","76","32","93","10","累计确诊","411","136","318","133","75","121","93","480","337","631","1205","990","296","935","756","1272","66337","1018","1349","252","168","576","538","146","174","1","245","91","18","73","76","34","94","10","累计确诊","413","136","318","133","75","122","93","480","337","631","1205","990","296","935","756","1272","66907","1018","1349","252","168","576","538","146","174","1","245","91","18","73","76","39","95","10","累计确诊","414","136","318","133","75","122","93","480","337","631","1206","990","296","935","758","1272","67103","1018","1350","252","168","576","538","146","174","1","245","91","18","74","76","40","98","10","累计确诊","414","136","318","133","75","125","93","480","338","631","1213","990","296","935","758","1272","67217","1018","1350","252","168","576","538","146","174","1","245","91","18","74","76","41","100","10","累计确诊","417","136","318","133","75","125","93","480","338","631","1213","990","296","935","758","1272","67332","1018","1350","252","168","576","538","146","174","1","245","91","18","75","76","42","100","10","累计确诊","418","136","318","133","75","125","93","481","338","631","1215","990","296","935","758","1272","67466","1018","1350","252","168","576","539","146","174","1","245","91","18","75","76","42","104","10","累计确诊","422","136","318","133","75","125","93","481","339","631","1215","990","296","935","758","1272","67592","1018","1351","252","168","576","539","146","174","1","245","102","18","75","76","44","104","10","累计确诊","426","136","318","133","75","125","93","481","342","631","1215","990","296","935","758","1272","67666","1018","1352","252","168","576","539","146","174","1","245","119","18","75","76","45","107","10","累计确诊","428","136","318","133","75","125","93","481","342","631","1215","990","296","935","758","1272","67707","1018","1352","252","168","576","539","146","174","1","245","120","18","75","76","45","109","10","累计确诊","428","136","318","133","75","125","93","481","342","631","1215","990","296","935","758","1272","67743","1018","1352","252","168","576","539","146","174","1","245","124","18","75","76","45","114","10","累计确诊","429","136","318","133","75","125","93","481","342","631","1215","990","296","935","758","1272","67760","1018","1353","252","168","576","539","146","174","1","245","124","18","75","76","45","115","10","累计确诊","435","136","318","133","75","125","93","482","344","631","1215","990","296","935","759","1272","67773","1018","1353","252","168","576","539","146","174","1","245","125","18","75","76","47","120","10","累计确诊","435","136","318","133","75","125","93","482","344","631","1215","990","296","935","760","1273","67781","1018","1356","252","168","576","539","146","174","1","245","127","18","75","76","48","129","10","累计确诊","436","136","318","133","75","125","93","482","346","631","1215","990","296","935","760","1273","67786","1018","1356","252","168","576","539","146","174","1","245","127","18","75","76","49","131","10","累计确诊","437","136","318","133","75","125","93","482","350","631","1227","990","296","935","760","1273","67790","1018","1356","252","168","576","539","146","174","1","245","129","18","75","76","50","137","10","累计确诊","442","136","318","133","75","125","93","482","353","631","1231","990","296","935","760","1273","67794","1018","1357","252","168","576","539","146","174","1","245","132","18","75","76","53","141","10","累计确诊","446","136","318","133","75","125","93","482","355","631","1231","990","296","935","760","1273","67798","1018","1361","252","168","576","539","146","175","1","245","133","18","75","76","59","148","10","累计确诊","455","136","318","133","75","125","93","482","358","631","1232","990","296","935","761","1273","67799","1018","1364","253","168","576","539","146","176","1","246","133","18","75","76","67","157","11","累计确诊","458","136","318","133","75","125","93","482","361","631","1232","990","296","935","761","1273","67800","1018","1369","253","168","576","540","146","176","1","246","133","18","75","76","77","167","13","累计确诊","479","136","318","133","75","125","93","483","363","631","1233","990","296","935","761","1273","67800","1018","1378","253","168","576","540","146","176","1","246","133","18","75","76","100","192","15","累计确诊","485","137","318","133","75","126","93","484","371","631","1234","990","299","935","762","1273","67800","1018","1392","254","168","576","541","146","176","1","246","134","18","75","76","108","208","17","累计确诊","499","137","318","133","75","126","93","484","380","631","1236","990","303","935","764","1273","67800","1018","1399","254","168","576","542","146","176","1","248","134","18","75","76","135","256","17","累计确诊","512","137","319","133","75","126","93","484","394","633","1237","990","307","936","765","1273","67800","1018","1407","254","168","576","543","146","176","1","248","134","18","75","76","153","273","18","累计确诊","522","137","319","133","75","126","93","484","404","633","1238","990","313","936","767","1274","67800","1018","1413","254","168","577","543","146","176","1","248","136","18","75","76","169","317","21","累计确诊","554","141","319","134","75","127","93","484","414","636","1240","990","318","936","768","1274","67801","1018","1428","254","168","578","545","146","176","1","248","136","18","75","76","195","356","25","累计确诊","559","145","319","134","77","127","94","484","433","638","1241","990","322","936","769","1274","67801","1018","1433","254","168","578","547","146","176","1","249","136","18","75","76","216","386","26","累计确诊","565","147","319","135","89","127","95","484","451","640","1243","990","328","936","769","1275","67801","1018","1444","254","168","578","547","146","178","1","252","136","18","75","76","235","410","30","累计确诊","569","151","319","135","92","128","95","484","468","641","1247","990","331","936","771","1275","67801","1018","1456","254","168","578","548","146","180","1","253","136","18","75","76","252","453","33","累计确诊","572","156","319","135","94","131","97","484","485","641","1251","990","337","936","772","1275","67801","1018","1467","254","168","578","548","146","180","1","253","136","18","75","76","267","518","34","累计确诊","576","163","319","136","95","134","98","484","492","644","1254","990","338","937","772","1276","67801","1018","1475","254","168","579","550","147","180","1","253","136","18","75","76","283","582","37","累计确诊","577","167","321","136","95","136","98","484","498","645","1255","990","340","937","773","1276","67801","1018","1484","254","168","579","550","147","180","1","253","138","18","75","76","298","641","38","累计确诊","580","174","321","136","105","139","98","484","509","646","1257","990","343","937","774","1276","67801","1018","1490","254","168","579","550","147","181","1","253","138","18","75","76","306","682","39","累计确诊","580","174","323","137","111","140","98","484","516","646","1257","990","345","937","774","1276","67802","1018","1501","254","168","579","552","147","182","1","255","138","18","75","76","322","714","41","累计确诊","582","176","325","137","117","140","98","488","522","647","1258","990","345","937","775","1276","67802","1019","1507","254","168","579","554","147","183","1","255","138","18","75","76","329","765","41","累计确诊","583","177","326","137","117","141","98","489","526","651","1260","990","349","937","778","1276","67802","1019","1514","254","168","579","555","147","184","1","255","138","18","75","76","339","802","41","累计确诊","585","180","326","137","117","141","98","491","529","651","1262","990","350","937","778","1276","67803","1019","1516","254","168","579","557","147","184","1","256","138","18","75","76","348","845","43","累计确诊","586","180","327","138","117","142","98","504","531","651","1263","990","350","937","779","1276","67803","1019","1524","254","168","579","558","147","184","1","256","138","18","75","76","355","862","44","累计确诊","587","180","327","138","118","142","98","524","536","651","1264","990","350","937","780","1276","67803","1019","1532","254","168","579","559","147","184","1","256","139","18","75","76","363","890","44","累计确诊","587","180","327","138","121","144","98","544","538","651","1265","990","351","937","781","1276","67803","1019","1533","254","168","579","560","147","184","1","256","139","18","75","76","373","914","44","累计确诊","588","180","327","163","121","144","98","569","543","651","1266","990","351","937","783","1276","67803","1019","1536","254","168","579","560","147","184","1","256","139","18","75","76","376","935","44","累计确诊","588","181","327","166","126","144","98","609","552","651","1267","991","351","937","783","1276","67803","1019","1539","254","168","579","560","147","184","1","256","139","18","75","76","379","960","45","累计确诊","588","182","327","168","128","144","98","638","555","651","1267","991","351","937","783","1276","67803","1019","1544","254","168","579","560","147","184","1","256","139","18","75","76","380","973","45","累计确诊","589","183","327","172","138","145","98","661","555","652","1267","991","351","937","784","1276","67803","1019","1548","254","168","579","560","147","184","1","256","139","18","75","76","382","989","45","累计确诊","589","183","327","172","155","145","99","684","607","653","1267","991","352","937","784","1276","67803","1019","1552","254","168","579","560","147","184","1","256","139","18","75","76","385","1000","45","累计确诊","589","184","327","173","190","145","100","740","618","653","1267","991","352","937","784","1276","67803","1019","1555","254","168","579","560","147","184","1","256","139","18","75","76","388","1004","45","累计确诊","589","184","327","173","190","145","100","819","618","653","1267","991","353","937","784","1276","67803","1019","1564","254","168","579","560","147","184","1","256","139","18","75","76","393","1009","45","累计确诊","590","185","327","186","190","145","102","841","622","653","1268","991","353","937","784","1276","67803","1019","1566","254","168","579","560","147","184","1","256","139","18","75","76","393","1012","45","累计确诊","593","185","328","194","193","145","102","861","628","653","1268","991","353","937","784","1276","67803","1019","1571","254","168","579","560","147","184","1","256","139","18","75","76","395","1016","45","累计确诊","593","186","328","197","193","146","102","872","628","653","1268","991","354","937","787","1276","68128","1019","1577","254","168","579","560","147","184","1","256","139","18","75","76","395","1017","45","累计确诊","593","189","328","197","193","146","102","892","628","653","1268","991","355","937","787","1276","68128","1019","1579","254","168","579","561","147","184","1","256","139","18","75","76","395","1021","45","累计确诊","593","189","328","197","193","146","104","898","635","653","1268","991","355","937","787","1276","68128","1019","1580","254","168","579","561","147","184","1","256","139","18","75","76","398","1023","45","累计确诊","593","189","328","197","194","146","104","905","638","653","1268","991","355","937","787","1276","68128","1019","1581","254","168","579","561","147","184","1","256","139","18","75","76","420","1025","45","累计确诊","593","189","328","197","194","146","106","913","638","653","1268","991","355","937","787","1276","68128","1019","1582","254","168","579","561","147","184","1","256","139","18","75","76","422","1025","45","累计确诊","593","189","328","197","194","146","106","921","639","653","1268","991","355","937","787","1276","68128","1019","1582","254","168","579","561","147","184","1","277","139","18","75","76","425","1029","45","累计确诊","593","189","328","197","194","146","107","925","640","653","1268","991","355","937","787","1276","68128","1019","1584","254","168","579","561","147","184","1","279","139","18","75","76","426","1033","45","累计确诊","593","189","328","197","194","146","108","928","641","653","1268","991","355","937","787","1276","68128","1019","1585","254","168","579","561","147","184","1","279","139","18","75","76","427","1035","45","累计确诊","593","190","328","197","197","146","109","930","641","653","1268","991","355","937","787","1276","68128","1019","1585","254","168","579","561","147","185","1","283","139","18","75","76","428","1035","45","累计确诊","593","190","328","197","198","146","109","935","642","653","1268","991","355","937","787","1276","68128","1019","1586","254","168","579","561","147","185","1","286","139","18","75","76","429","1037","45","累计确诊","593","190","328","197","198","146","110","936","642","653","1268","991","355","937","787","1276","68128","1019","1587","254","168","579","561","147","185","1","286","139","18","75","76","429","1037","45"]
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
                     text: '累积确诊病例数前十的省份',
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
 