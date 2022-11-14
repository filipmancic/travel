$("html").mousemove(function(event){
    var moveX = (($(window).width()/2) - event.pageX) *0.02;
    var moveY = (($(window).width()/2) - event.pageY) *0.02;
    $(".bg").css("margin-left", moveX+'px');
    $(".bg").css("margin-top", (moveY-20) +'px');
})

$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    $(".bg").css("-webkit-filter", "blur(" + (scroll * 0.025) + "px)");
  })
  
 // var scroll=$(window).scrollTop();
  //if(scroll>$(window).height())
 // $(".bg").css("position", "absolute");
  
    //
    // GLIDE 1
    //
    
    var glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 2,
        autoplay: 2500,
        breakpoints:{
            768:{
                perView:1
            }
        }
        }).mount()
        
        var nextButton = document.querySelector('#next');
        var prevButton = document.querySelector('#prev');
    
        nextButton.addEventListener('click', function (event) {
        event.preventDefault();
    
        glide.go('>');
        })
    
        prevButton.addEventListener('click', function (event) {
        event.preventDefault();
    
        glide.go('<');
        })
    
        //
        // GLIDE 2
        //
    
        var glide2 = new Glide('.glide2', {
        type: 'carousel',
        startAt: 0,
        perView: 6,
        animationTimingFunc: "linear",
        autoplay: 3000,
        hoverpause: false,
        animationDuration: 3000,
        breakpoints:{
            768:{
                perView:4
            },
            500:{
                perView:3
            },
            425:{
                perView:2
            }
        }
        }).mount()

        var s1=0;
        var s2=0;
        var s3=0;

        function show1(){
            if(s1==0){
                document.getElementById("f11").style.opacity="1";
                document.getElementById("f11").style.transform="translateY(0px)"
                s1++;
            }
            else{
                document.getElementById("f11").style.opacity="0";
                document.getElementById("f11").style.transform="translateY(30px)";
                s1--;
            }
        }
        function show2(){
            if(s2==0){
                document.getElementById("f12").style.opacity="1";
                document.getElementById("f12").style.transform="translateY(0px)"
                s2++;
            }
            else{
                document.getElementById("f12").style.opacity="0";
                document.getElementById("f12").style.transform="translateY(30px)"
                s2--;
            }
        }
        function show3(){
            if(s3==0){
                document.getElementById("f13").style.opacity="1";
                document.getElementById("f13").style.transform="translateY(0px)"
                s3++;
            }
            else{
                document.getElementById("f13").style.opacity="0";
                document.getElementById("f13").style.transform="translateY(30px)"
                s3--;
            }
        }
        document.getElementById("f1").addEventListener("click", show1);
        document.getElementById("f2").addEventListener("click", show2);
        document.getElementById("f3").addEventListener("click", show3);