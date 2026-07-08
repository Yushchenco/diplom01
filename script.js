$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  const title = document.querySelector("h3");
  const originalText = title.textContent;

  title.textContent = "";

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  function typeWriter() {
    let i = 0;
    title.textContent = "";

    const timer = setInterval(() => {
      title.textContent += originalText.charAt(i);
      i++;

      if (i >= originalText.length) {
        clearInterval(timer);
      }
    }, 80);
  }

  function open() {
    envelope.addClass("open").removeClass("close");
    
    document.body.classList.add("opening");
    document.getElementById("autoplay").play();

    setTimeout(() => {
        typeWriter();
    }, 800);
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    document.body.classList.remove("opening");

    const music = document.getElementById("autoplay");
    music.pause();
    music.currentTime = 0;

    title.textContent = "";
  }
  const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
for(let i=0;i<80;i++){

let star=document.createElement("div");

star.className="particle";

star.style.left="50%";

star.style.top="50%";

star.style.setProperty("--x",(Math.random()-0.5)*800+"px");

star.style.setProperty("--y",(Math.random()-0.5)*800+"px");

document.body.appendChild(star);

setTimeout(()=>star.remove(),2000);

}
});
