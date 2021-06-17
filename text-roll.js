class App {
    constructor() {
      let circlePath = document.getElementById("circlePath");
  
      let lengthCirclePath = circlePath.getTotalLength();
  
      let circle = document.getElementById("circle");
      
      let textCurved = document.getElementById("textCurved");
      
      document
        .getElementById("pathTextCurved")
        .setAttribute("textLength", lengthCirclePath - 20);
  
      this.hover = TweenMax.to(textCurved, 10, {
        transformOrigin: "50% 50%",
        rotation: "360",
        repeat: -1,
        ease: Linear.easeNone
      });
  
      circle.addEventListener("mouseover", this.turn.bind(this));
      circle.addEventListener("mouseleave", this.stop.bind(this));
    }
    turn() {
      this.hover.pause();
    }
    stop() {
      this.hover.play();
    }
  }
  const app = new App();