$(function(){
    
    ///////ㅁㅔ뉴
    $(".sub, .sub_bg").hide();
    $(".main>li , .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//


    /////이미지 슬라이드
    
    // var n = 0
    
    // setInterval(function(){
    //     if(n==2){
    //         n=0;
    //     }else{
    //         n++;
    //     }       
    //     console.log(n) 
    //     $(".left_move").animate({left : n * (-1200) + "px"}, 500)
    // }, 2500)

    setInterval(function(){
        $(".left_move").animate({left : "-1200px"},2500,function(){
            $(".left_move").append($(".left_move li").first());
            $(".left_move").css({left : "0"})
        })
    })//j





    ///모달팝업

    $(".p_click").click(function(){
        $(".modal, .popup").show();
    })//

    $(".close").click(function(){
        $(".modal, .popup").hide();
    })

    
}) //j