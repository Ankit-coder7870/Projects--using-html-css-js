const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation(){
    let tl = gsap.timeline();

    tl.from(".nav",{
        y:'-10',
        opacity:0,
        duration:2,
        ease: Expo.easeInOut
    })

    
    .to(".boundingelem",{
        y:'0',
        stagger:.2,
        duration:2,
        delay:-1,
        ease: Expo.easeInOut
    })

     .from(".herofooter",{
        y:'-10',
        opacity: 0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
}



function circlemouseFollower (){
    window.addEventListener("mousemove",function(dets){
       

        
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        
    })
}

circlemouseFollower();
firstPageAnimation();