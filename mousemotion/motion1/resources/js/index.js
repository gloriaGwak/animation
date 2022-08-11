// document.addEventListener("DOMContentLoaded", function(){
//     var $parent = document.querySelector(".wrap"),
//         $heroContainer = $parent.querySelector(".heros_wrap"),
//         $heroBox = $heroContainer.querySelector(".heros_box"),
//         $content = $heroBox.querySelectorAll(".content"),
//         evtStart,
//         posX = 0, posY = 0,
//         imgX = 0, imgY = 0;
    
//     var $basedImg = $parent.querySelector(".img_base"),
//         $clipImg = $parent.querySelector(".img_clip"),
//         $clipPath = $parent.querySelector(".clip-path");

//     getBrowserInfo();
//     $parent.classList.add("on");
    
//     // 첫번째 섹션의 마우스 이벤트
//     evtStart = setTimeout(function(){
//         $heroContainer.addEventListener("mousemove",mouseMove);
//         $heroContainer.addEventListener("mouseleave",originalPos);
//     },3500);

//     // 두번째 섹션의 이미지 마우스 이벤트
//     $basedImg.addEventListener('mousemove',imgMouseMove);
//     $basedImg.addEventListener('mouseleave',imgMouseLeave);
//     $basedImg.addEventListener('mouseenter',imgMouseEnter);

//     function mouseMove(e){
//         var clientH = this.offsetHeight,
//             clientW = this.offsetWidth,
//             centerY = Math.ceil(clientH / 2),
//             centerX = clientW / 2;

//         posX = -(e.clientX - (centerX)) / 1.8; 
//         posY = -(e.clientY - centerY) * 2;

//         // posX는 e.clientX의 중간 지점과 heroContainer의 가로 중간과의 갭을 의미. 1.8로 나눈 이유는 실제 값보다 조금 적게 움직였으면 해서 임의로 지정. 필요 시, 숫자만 변경하여 더 넓게 하거나, 더 좁게 할 수 있음.
//         // posY는 e.clientY의 중간 지점과 heroContainer의 세로 중간과의 갭을 의미. 2을 곱한 이유는 실제 높이보다 조금 더 넓게 움직였으면 해서 임의로 지정.  필요 시, 숫자만 변경하여 더 높게 하거나, 더 낮게 할 수 있음.

//         imgX = -(e.clientX - (centerX)) / 15;
//         imgY = -(e.clientY - centerY) / 8;
//         //imgX와 imgY도 posX와 posY의 숫자 지정과 로직은 같으나, 레이어들이 다르게 조금씩 움직여야 해서 숫자를 임의로 나눔.

//         mouseMoveMotion(e);        
//     }
    
//     // 첫번째 섹션 마우스 모션 함수
//     function mouseMoveMotion(e){
//         TweenMax.to($heroBox, 4, {
//             "x" : posX + "px",
//             "y" : posY + "px",
//             onComplete : originalPos,
//         });

//         for(var i = 0; i < $content.length; i++){
//             if(i == 0 || i == 1){
//                 TweenMax.to($content[i], 3, {
//                     "x" : imgX + "px",
//                     "y" : imgY + "px",
//                     delay: i * 0.8,
//                     onComplete : originalPos,
//                 });
//             }
//         }
//     }

//     // mouseleave 이벤트가 있거나, 마우스 움직임이 없을시 5초 후에 제자리로 돌아옴.
//     function originalPos(){
//         setTimeout(function(){
//             TweenMax.to($heroBox, 1.5, {
//                 "x" : "0",
//                 "y" : "0",
//             });
            
//             TweenMax.to($content, 1.5, {
//                 "x" : "0",
//                 "y" : "0",
//             });
//         }, 5000);
//     }

//     // 이미지 마우스 모션
//     function imgMouseMove(e){
//         TweenMax.to($clipPath, 0.5, {
//             "x" : (e.offsetX - 150) + "px",
//             "y" : (e.offsetY - 150) + "px",
//         });
//     };

//     function imgMouseLeave(){
//         $clipImg.style.opacity = 0;
//     };

//     function imgMouseEnter(){
//         $clipImg.style.opacity = 1;
//     };

//     // IE 체크
//     function getBrowserInfo() {
//         var agent = navigator.userAgent.toUpperCase();

//         if (agent.indexOf('TRIDENT') > 0) {
//             // IE에서 컨텐츠의 위치때문에 클래스로 CSS 조정
//             $parent.classList.add("ie");
//         }
//     }
// });

// document.addEventListener("DOMContentLoaded", function(){
//     var $parent = document.querySelector(".wrap"),
//         $heroContainer = $parent.querySelector(".heros_wrap"),
//         $heroBox = $heroContainer.querySelector(".heros_box"),
//         $content = $heroBox.querySelectorAll(".content"),
//         evtStart, originPosTimer, 
//         isMoving = true,
//         percenteX, percenteY, posX, posY;
    
//     var $basedImg = $parent.querySelector(".img_base"),
//         $clipImg = $parent.querySelector(".img_clip"),
//         $clipPath = $parent.querySelector(".clip-path");

//     getBrowserInfo();
//     $parent.classList.add("on");
    
//     // 첫번째 섹션의 마우스 이벤트
//     evtStart = setTimeout(function(a,b){
//         $heroContainer.addEventListener("mousemove",mouseMove);
//         $heroContainer.addEventListener("mouseleave",originalPos);
//     },3500);

//     // 두번째 섹션의 이미지 마우스 이벤트
//     $basedImg.addEventListener('mousemove',imgMouseMove);
//     $basedImg.addEventListener('mouseleave',imgMouseLeave);
//     $basedImg.addEventListener('mouseenter',imgMouseEnter);

//     function mouseMove(e){
//         var clientH = this.offsetHeight,
//             clientW = this.offsetWidth,
//             maxWidth = 1680,
//             minWidth = 1500,
//             centerY = Math.ceil(clientH / 2),
//             centerX = clientW / 2;

//         if(clientW > maxWidth){
//             percenteX = (-(e.clientX - (centerX)) / clientW) * 100;
//             percenteY = ((-(e.clientY - (centerY)) / clientH) * 100);
//         }else if(clientW <= maxWidth){
//             percenteX = ((-(e.clientX - (centerX)) / clientW) * 100) * 1.5; 
//             percenteY = ((-(e.clientY - (centerY)) / clientH) * 100) * 1.2;
//         }else if(clientW <= minWidth){
//             percenteX = ((-(e.clientX - (centerX)) / clientW) * 100) * 2; 
//             percenteY = ((-(e.clientY - (centerY)) / clientH) * 100) * 1.5;
//         }
//         //percenteX와 percenteY는 상하좌우의 중간을 기준으로 마우스를 움직였을때 마우스와 중간의 거리를 계산한 백분율
        
//         posX = percenteX / 2.3; 
//         posY = percenteY * 1.5;
//         // posX와 posY는 중간을 기준으로 마우스의 거리를 백분율로 계산해 움직일 수 있는 범위를 계산함.
        
//         if(isMoving){
//             mouseMoveMotion(e);
//             clearTimer();
//         }
//         /**
         
//          ** 모션 플로우 **
//          1. 페이지 로드 후 .wrap에 클래스 .on 추가 (애니메이션) 
//          2. 로드 후 3.5 초 후에 이벤트 호출 가능 (시간차가 없을 경우, 로드되자마자 페이지가 튕기는 듯이 보임) 
//          3. mouseMove(e)에서 움직일때 필요한 값을 받아옴
//          4. 필요한 값이 계산되고 isMoving이 true일 때 mouseMoveMotion(e) 함수 호출
//             >> 마우스 이벤트가 실행되고 있는 상태인 isMoving이 true일 때는 항상 originalPos() 함수에서의 setTimeout이 클리어 되어야하므로 clearTimer()도 함께 호출. (mousemove 이벤트 실행 시에는 절대 originalPos()의 setTimeout이 진행되어서는 안됨.)
//          5. mouseMoveMotion(e)가 끝나면 원래 자리인 중앙으로 돌아가는 originalPos() 함수 호출
//          6. originalPos() 함수 종료 후에는 한번 더 setTimeout을 클리어해주어야하고, 현재 false인 isMoving를 true로 반환해주어야함.
        
//          **/
//     }
    
//     // 첫번째 섹션 마우스 모션 함수
//     function mouseMoveMotion(e){
//         TweenMax.to($heroBox, 1.5, {
//             "x" : posX + "%",
//             "y" : posY + "%",
//             onComplete : originalPos,
//         });
        
//         for(var i = 0; i < $content.length - 2; i++){
//             if(i == 0 || i == 1){
//                 TweenMax.to($content[i], 0.8, {
//                     "x" : percenteX + "px",
//                     "y" : percenteY + "px",
//                     delay: i * 0.3,
//                     onComplete : originalPos,
//                 });
//             }
//         }
//     }

//     // mouseleave 이벤트가 있거나, 마우스 움직임이 없을시 5초 후에 제자리로 돌아옴.
//     function originalPos(){
//         if(isMoving == true){
//             clearTimer();
            
//             originPosTimer = setTimeout(function(){
//                 TweenMax.to($heroBox, 2, {
//                     "x" : "0%",
//                     "y" : "0%",
//                     onComplete : clearTimer,
//                 });
//                 TweenMax.to($content, 2, {
//                     "x" : "0",
//                     "y" : "0",
//                     onComplete : clearTimer,
//                 });
//                 isMoving = false;
//             }, 5000);
//         }
//     }

//     function clearTimer(){
//         clearTimeout(originPosTimer); 
//         originPosTimer = undefined;
//         isMoving = true;
//     }

//     // 이미지 마우스 모션
//     function imgMouseMove(e){
//         TweenMax.to($clipPath, 0.5, {
//             "x" : (e.offsetX - 150) + "px",
//             "y" : (e.offsetY - 150) + "px",
//         });
//     };

//     function imgMouseLeave(){
//         $clipImg.style.opacity = 0;
//     };

//     function imgMouseEnter(){
//         $clipImg.style.opacity = 1;
//     };

//     // IE 체크
//     function getBrowserInfo() {
//         var agent = navigator.userAgent.toUpperCase();

//         if (agent.indexOf('TRIDENT') > 0) {
//             $parent.classList.add("ie");
//             // IE에서 컨텐츠의 위치때문에 클래스로 CSS 조정
//         }
//     }
// });



document.addEventListener("DOMContentLoaded", function(){
    var $parent = document.querySelector(".wrap"),
        $heroContainer = $parent.querySelector(".heros_wrap"),
        $heroBox = $heroContainer.querySelector(".heros_box"),
        $content = $heroBox.querySelectorAll(".content"),
        evtStart, originPosTimer, 
        isMoving = true,
        percenteX, percenteY, posX, posY;
    
    var $basedImg = $parent.querySelector(".img_base"),
        $clipImg = $parent.querySelector(".img_clip"),
        $clipPath = $parent.querySelector(".clip-path");

    getBrowserInfo();
    $parent.classList.add("on");
    
    // 첫번째 섹션의 마우스 이벤트
    evtStart = setTimeout(function(a,b){
        $heroContainer.addEventListener("mousemove",mouseMove);
        $heroContainer.addEventListener("mouseleave",originalPos);
    },3500);

    // 두번째 섹션의 이미지 마우스 이벤트
    $basedImg.addEventListener('mousemove',imgMouseMove);
    $basedImg.addEventListener('mouseleave',imgMouseLeave);
    $basedImg.addEventListener('mouseenter',imgMouseEnter);

    function mouseMove(e){
        var clientH = this.offsetHeight,
            clientW = this.offsetWidth,
            maxWidth = 1680,
            minWidth = 1500,
            centerY = Math.ceil(clientH / 2),
            centerX = clientW / 2;

        if(clientW > maxWidth){
            percenteX = (-(e.clientX - (centerX)) / clientW) * 100;
            percenteY = ((-(e.clientY - (centerY)) / clientH) * 100);
        }
        else if(clientW <= maxWidth){
            percenteX = ((-(e.clientX - (centerX)) / clientW) * 100) * 1.5; 
            percenteY = ((-(e.clientY - (centerY)) / clientH) * 100) * 1.2;
        }else if(clientW <= minWidth){
            percenteX = ((-(e.clientX - (centerX)) / clientW) * 100) * 2; 
            percenteY = ((-(e.clientY - (centerY)) / clientH) * 100) * 1.5;
        }
        //percenteX와 percenteY는 상하좌우의 중간을 기준으로 마우스를 움직였을때 마우스와 중간의 거리를 계산한 백분율
        
        // posX = percenteX / 2.3; 
        // posY = percenteY * 1.5;
        posX = percenteX * 10; 
        posY = percenteY * 13;
        console.log(posX,posY)
        // posX와 posY는 중간을 기준으로 마우스의 거리를 백분율로 계산해 움직일 수 있는 범위를 계산함.
        
        if(isMoving){
            mouseMoveMotion(e);
            clearTimer();
        }
        /**
         
         ** 모션 플로우 **
         1. 페이지 로드 후 .wrap에 클래스 .on 추가 (애니메이션) 
         2. 로드 후 3.5 초 후에 이벤트 호출 가능 (시간차가 없을 경우, 로드되자마자 페이지가 튕기는 듯이 보임) 
         3. mouseMove(e)에서 움직일때 필요한 값을 받아옴
         4. 필요한 값이 계산되고 isMoving이 true일 때 mouseMoveMotion(e) 함수 호출
            >> 마우스 이벤트가 실행되고 있는 상태인 isMoving이 true일 때는 항상 originalPos() 함수에서의 setTimeout이 클리어 되어야하므로 clearTimer()도 함께 호출. 
            (mousemove 이벤트 실행 시에는 절대 originalPos()의 setTimeout이 진행되어서는 안됨.)
         5. mouseMoveMotion(e)가 끝나면 원래 자리인 중앙으로 돌아가는 originalPos() 함수 호출
         6. originalPos() 함수 종료 후에는 한번 더 setTimeout을 클리어해주어야하고, 현재 false인 isMoving를 true로 반환해주어야함.
        
         **/
    }
    
    // 첫번째 섹션 마우스 모션 함수
    function mouseMoveMotion(e){
        TweenMax.to($heroBox, 1.5, {
            "x" : posX + "%",
            "y" : posY + "%",
            onComplete : originalPos,
        });
        
        for(var i = 0; i < $content.length - 2; i++){
            if(i == 0 || i == 1){
                TweenMax.to($content[i], 0.8, {
                    "x" : percenteX + "px",
                    "y" : percenteY + "px",
                    delay: i * 0.3,
                    onComplete : originalPos,
                });
            }
        }
    }

    // mouseleave 이벤트가 있거나, 마우스 움직임이 없을시 5초 후에 제자리로 돌아옴.
    function originalPos(){
        if(isMoving == true){
            clearTimer();
            
            originPosTimer = setTimeout(function(){
                TweenMax.to($heroBox, 2, {
                    "x" : "0%",
                    "y" : "0%",
                    onComplete : clearTimer,
                });
                TweenMax.to($content, 2, {
                    "x" : "0",
                    "y" : "0",
                    onComplete : clearTimer,
                });
                isMoving = false;
            }, 5000);
        }
    }

    function clearTimer(){
        clearTimeout(originPosTimer); 
        originPosTimer = undefined;
        isMoving = true;
    }

    // 이미지 마우스 모션
    function imgMouseMove(e){
        TweenMax.to($clipPath, 0.5, {
            "x" : (e.offsetX - 150) + "px",
            "y" : (e.offsetY - 150) + "px",
        });
    };

    function imgMouseLeave(){
        $clipImg.style.opacity = 0;
    };

    function imgMouseEnter(){
        $clipImg.style.opacity = 1;
    };

    // IE 체크
    function getBrowserInfo() {
        var agent = navigator.userAgent.toUpperCase();

        if (agent.indexOf('TRIDENT') > 0) {
            $parent.classList.add("ie");
            // IE에서 컨텐츠의 위치때문에 클래스로 CSS 조정
        }
    }
});


    