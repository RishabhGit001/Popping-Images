// Using Throttling Function
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector("#center").addEventListener("mousemove",throttleFunction((details) => {
    const div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = details.clientX+"px";
    div.style.top = (details.clientY-150)+"px";

    document.body.appendChild(div);
    setTimeout(function(){
        div.remove();
    }, 1500); 
    
    const imgarr = ["./assets/img13.jpg", "./assets/img14.jpg", "./assets/img15.jpg", "./assets/img16.jpg"];

    const idx = Math.floor(Math.random()*imgarr.length);    
    const img = document.createElement("img");
    img.setAttribute("src", imgarr[idx]);

    div.appendChild(img);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: 0.5,
        onComplete: () => {
            gsap.to(img, {
                y: "100%",
                ease: Power1,
                duration: 0.5
            });
        }
    });

},250));
