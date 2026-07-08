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

  function explodeEnvelope(){

    const rect=document.getElementById("envelope").getBoundingClientRect();

    for(let i=0;i<180;i++){

        const p=document.createElement("div");

        p.className="fragment";

        p.style.left=(rect.left+rect.width/2)+"px";
        p.style.top=(rect.top+rect.height/2)+"px";

        p.style.setProperty("--x",(Math.random()-0.5)*900+"px");
        p.style.setProperty("--y",(Math.random()-0.5)*900+"px");

        document.body.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },1000);

    }

}

  function close(){

    explodeEnvelope();

    if(navigator.vibrate){
        navigator.vibrate([80,40,80]);
    }

    $("#envelope").css("visibility","hidden");

    setTimeout(()=>{

        $("#envelope").css("visibility","visible");

        envelope.addClass("close").removeClass("open");

        document.body.classList.remove("opening");

        const music=document.getElementById("autoplay");
        music.pause();
        music.currentTime=0;

        title.textContent="";

    },900);

}
});
