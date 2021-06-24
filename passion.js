import { Curtains, Plane } from 'https://www.curtainsjs.com/src/index.mjs';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});


function imgCurtain() {

  // Basic Setup
  const curtains = new Curtains({
    container: "canvas",
    premultipliedAlpha: true,
    production: false,
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
    // do not watch scroll, we'll do it with locomotive scroll instead
    watchScroll: false
  });


  // On Error
  curtains.onError(function () {
    document.body.classList.add("no-curtains");
  }).onContextLost(() => {
    curtains.restoreContext();
  });

  // update planes positions on locomotive scroll event
  scroll.on('scroll', (obj) => {
    curtains.updateScrollValues(obj.scroll.x, obj.scroll.y);
  });


  // Curtains Effect
  const showcaseElements = document.getElementsByClassName("showcase-curtain");
  const showcasePlanes = [];





  // Function that Create Effects

  function waveEffect(index) {
    const plane = showcasePlanes[index];
    plane.onReady(function () {
      plane.userData.mouseOver = false;
      if (showcaseElements[index]) {
        showcaseElements[index].addEventListener("mouseenter", function (e) {
          plane.userData.mouseOver = true;
        });
      }

      if (showcaseElements[index]) {
        showcaseElements[index].addEventListener("mouseleave", function (e) {
          plane.userData.mouseOver = false;
        });
      }
    }).onRender(() => {
      // use damping
      if (plane.userData.mouseOver) {
        plane.uniforms.time.value += (45 - plane.uniforms.time.value) * 0.0375;
      } else {
        plane.uniforms.time.value += (0 - plane.uniforms.time.value) * 0.0375;
      }
    });
  }



  // Sheders

  const vSheder = `
    precision mediump float;

    // default mandatory variables
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    // custom variables
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform float uTime;

    void main() {
      vec3 vertexPosition = aVertexPosition;

      // a float varying from -1.5 to 1.5
      float waveCoords = ((uTime / 45.0) * 3.5) - 1.75;

      // distance from the waveCoords to the vertex coordinates
      float distanceToWave = distance(vec2(vertexPosition.x, 0.0), vec2(waveCoords, 0.0));

      // nice little wave animation from left to right or right to left depending on the timer
      vertexPosition.z -= (cos(clamp(distanceToWave, 0.0, 0.75) * 3.141592) - cos(0.75 * 3.141592) + (2.0 * sin(3.141592 * uTime / 90.0))) * 0.025;

      gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

      // varyings
      vTextureCoord = aTextureCoord;
      vVertexPosition = vertexPosition;
    }
`;

  const fSheder = `precision mediump float;

    uniform float uTime;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform sampler2D uExample;


    void main() {

      // get our texture coords
      vec2 textureCoords = vec2(vTextureCoord.x, vTextureCoord.y);
      vec4 finalColor = texture2D(uExample, textureCoords);

      gl_FragColor = finalColor;
  }`;




  // Calling Planes on Loop


  for (let i = 0; i < showcaseElements.length; i++) {
    const showcaseParams = {

      vertexShader: vSheder,
      fragmentShader: fSheder,
      widthSegments: 20,
      heightSegments: 1,
      texturesOptions: {
        minFilter: curtains.gl.LINEAR_MIPMAP_NEAREST
      },
      uniforms: {
        time: {
          name: "uTime",
          type: "1f",
          value: 0,
        },
      },
    };

    const plane = new Plane(curtains, showcaseElements[i], showcaseParams);
    showcasePlanes.push(plane);
    waveEffect(i);
    console.log(showcasePlanes);
  }
};





window.addEventListener("load", () => {
  imgCurtain();
});