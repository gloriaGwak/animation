// $(window).on("load", function(){   
    document.addEventListener("DOMContentLoaded", function(){
        var $parent = document.querySelector(".wrap"),
            $heroContainer = $parent.querySelector(".heros_wrap"),
            $heroBox = $heroContainer.querySelector(".heros_box"),
            $content = $heroBox.querySelectorAll(".content"),
            evtStart,
            posX = 0, posY = 0,
            imgX = 0, imgY = 0;
        
        var $basedImg = $parent.querySelector(".img_base"),
            $clipImg = $parent.querySelector(".img_clip"),
            $clipPath = $parent.querySelector(".clip-path");
    
        getBrowserInfo();
        $parent.classList.add("on");
        
        // 첫번째 섹션의 마우스 이벤트
        evtStart = setTimeout(function(){
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
                centerY = Math.ceil(clientH / 2),
                centerX = clientW / 2;
    
            posX = -(e.clientX - (centerX)) / 1.8; 
            posY = -(e.clientY - centerY) * 2;
    
            // posX는 e.clientX의 중간 지점과 heroContainer의 가로 중간과의 갭을 의미. 1.8로 나눈 이유는 실제 값보다 조금 적게 움직였으면 해서 임의로 지정. 필요 시, 숫자만 변경하여 더 넓게 하거나, 더 좁게 할 수 있음.
            // posY는 e.clientY의 중간 지점과 heroContainer의 세로 중간과의 갭을 의미. 2을 곱한 이유는 실제 높이보다 조금 더 넓게 움직였으면 해서 임의로 지정.  필요 시, 숫자만 변경하여 더 높게 하거나, 더 낮게 할 수 있음.
    
            imgX = -(e.clientX - (centerX)) / 15;
            imgY = -(e.clientY - centerY) / 8;
            //imgX와 imgY도 posX와 posY의 숫자 지정과 로직은 같으나, 레이어들이 다르게 조금씩 움직여야 해서 숫자를 임의로 나눔.
    
            mouseMoveMotion(e);        
        }
        
        // 첫번째 섹션 마우스 모션 함수
        function mouseMoveMotion(e){
            TweenMax.to($heroBox, 4, {
                "x" : posX + "px",
                "y" : posY + "px",
                onComplete : originalPos,
            });
    
            for(var i = 0; i < $content.length; i++){
                if(i == 0 || i == 1){
                    TweenMax.to($content[i], 3, {
                        "x" : imgX + "px",
                        "y" : imgY + "px",
                        delay: i * 0.8,
                        onComplete : originalPos,
                    });
                }
            }
        }
    
        // mouseleave 이벤트가 있거나, 마우스 움직임이 없을시 5초 후에 제자리로 돌아옴.
        function originalPos(){
            setTimeout(function(){
                TweenMax.to($heroBox, 1.5, {
                    "x" : "0",
                    "y" : "0",
                });
                
                TweenMax.to($content, 1.5, {
                    "x" : "0",
                    "y" : "0",
                });
            }, 5000);
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
                // IE에서 컨텐츠의 위치때문에 클래스로 CSS 조정
                $parent.classList.add("ie");
            }
        }
    });
    
    
        