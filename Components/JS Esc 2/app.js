window.addEventListener("mousemove", (e)=>{
    let rect = document.querySelector("#center");

    let xval = gsap.utils.mapRange(0, window.innerWidth+rect.getBoundingClientRect().width/2, 50, window.innerWidth-(50+rect.getBoundingClientRect().width/2), e.clientX)
    
    gsap.to("#center", {
        left: xval+"px",
        ease: Power3
    })
})