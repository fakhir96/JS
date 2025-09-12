const rect = document.querySelector("#center");

rect.addEventListener("mousemove", (e)=>{
    const rect_location= rect.getBoundingClientRect();

    let insideRectVal = e.clientX - rect_location.left;

    // console.log("left");
    if(insideRectVal < rect_location.width/2){
        let redColor = gsap.utils.mapRange(0, rect_location.width/2, 255, 0, insideRectVal);
       
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        })
    }
    // console.log("right");
    else{
        let blueColor = gsap.utils.mapRange(rect_location.width/2, rect_location.width, 0, 255, insideRectVal);
       
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
        })
    }
    
})

rect.addEventListener("mouseleave", ()=>{
    gsap.to(rect, {
        backgroundColor: "white"
    })
})