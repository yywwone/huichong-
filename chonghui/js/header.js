$(function(){

    // 点击变色
    $(".headR a").click(function(){
        $(this).addClass("heactive").siblings().removeClass("heactive");
    });
    

    // 下拉菜单
    $(".nav_1").mouseenter(function(){
        $(this).parent().siblings(".navlist1").show();
     });
     
     $(".headCenter").mouseleave(function(){ 
        $(".navlist1").slideUp()
    });

    
})
