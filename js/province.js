var str=$(".province").find("option:selected").text();
var file="../data/js/"+str;
$("select").focus(function(){
    $(this).attr("size","8");
})
$("select").blur(function(){
    $(this).removeAttr("size");
    $("option").attr("selected","");
})
$("select").change(function(){
    $(this).removeAttr("size");
    $("option").attr("selected","");
    $("select").blur();
    str=$(".province").find("option:selected").text();
    file="../data/js/"+str+".js";
    console.log($(".province").find("option:selected").text());
    console.log(file);
})
console.log(file);
console.log(str);
new_element=document.createElement("script");
new_element.setAttribute("src",'file+".js"');
document.body.appendChild(new_element);


