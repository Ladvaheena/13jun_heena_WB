let slide = document.querySelectorAll('.box');
        var counter = 0;
       
        // console.log(slide)
        let imageslider = () => {
            slide.forEach (
                (slide) => {
                    slide.style.transform = `translateX(${counter* 120}%)`
                }
            )
        }
        function goback(){
            counter --;
            imageslider();

        }
        function forword(){
            counter ++;
            imageslider();
        }