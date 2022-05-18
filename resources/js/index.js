$(window).on("load", function(){   
    var $parent = $(".wrap"),
        $heroWrap = $parent.find(".heros_wrap"),
        $heroContainer = $parent.find(".container_hero"),
        $content = $parent.find(".content"),        
        cnt = 0, cnt2 = 0, isMove = true;

    $parent.addClass("on");

    $heroWrap.on("mousemove",function(e){
        var clientH = $heroWrap.height(), // 929
            centerH = Math.ceil($heroWrap.height() / 2), // 464.5
            centerW = $heroWrap.width() / 2,  // 960
            evtX = e.clientX, evtY = e.clientY;

        if(centerW == evtX){
            cnt = 0;
        }else if(centerW > evtX){
            if(cnt < centerW / 2){
                cnt+=4;
            }
        }else{
            if(-(centerW / 2) <= cnt){
                cnt-=4;
            }
        }

        if(centerH == evtY){
            cnt2 = 0;
        }else if(centerH > evtY){
            if(cnt2 < clientH / 3 * 2){
                cnt2+=4;
            }
        }else{
            if(-(clientH / 3 * 2) <= cnt2){
                cnt2-=4;
            }
        }
        console.log(evtX)
        mouseMoveMotion(cnt,cnt2);
        imgMotion();
    });


    function imgMotion(){
        $content.each(function(i,target){
        //     var $imgChildren = $(target).find(".unit_tile"),
        //         num = Math.floor(Math.random() * 10 + 1);
                
        //     $imgChildren.each(function(idx,key){
        //         var top = $(key).offset().top,
        //             left = $(key).offset().left;
        //         console.log($(key))

        //         TweenMax.to($imgChildren.eq(1), 2, {
        //             // "x" : $imgChildren.eq(1).offset().left + "px",
        //             // "y" : cnt2 + "%",
        //             // onComplete : callBackFunc,
        //         });
        //     })
              
        })
    }
    function mouseMoveMotion(cnt,cnt2){
        if(isMove){
            TweenMax.to($heroContainer, 2, {
                "x" : cnt + "px",
                // "y" : cnt2 + "px",
                onComplete : callBackFunc,
            });
        }
    }
    function callBackFunc(){
        isMove = false;
        setTimeout(function(){
            isMove = true;
            mouseMoveMotion();
        },5000)
    }

});