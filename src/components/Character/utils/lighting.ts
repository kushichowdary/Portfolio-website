import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======

  // **Ambient Light**
  const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
  scene.add(ambientLight);

  // **Directional Light**
>>>>>>> ba3dc94 (second commit)
=======
>>>>>>> 56c497d (updated)
  const directionalLight = new THREE.DirectionalLight(0xc7a9ff, 0);
  directionalLight.intensity = 0;
  directionalLight.position.set(-0.47, -0.32, -1);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

<<<<<<< HEAD
<<<<<<< HEAD
  const pointLight = new THREE.PointLight(0xc2a4ff, 0, 100, 3);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

=======
  // **Global Fill Light**
  const pointLight = new THREE.PointLight(0xc2a4ff, 1, 100, 3);
  pointLight.position.set(9, 22, 11);
  pointLight.castShadow = true;
  scene.add(pointLight);

  // **Back Glow Light**
  const backGlow = new THREE.PointLight(0x9e7cdb, 3, 20);
  backGlow.position.set(0, -1.5, -4);
  backGlow.distance = 15;
  backGlow.decay = 2;
  scene.add(backGlow);

  // **Optional Soft Cinematic Fill**
  const softFill = new THREE.SpotLight(0xb490ff, 3, 40, Math.PI / 4, 0.3, 1.5);
  softFill.position.set(0, -1.5, -2.5);
  softFill.target.position.set(0, -0.5, 0);
  scene.add(softFill);
  scene.add(softFill.target);

  // **Front-Face Glow Light**
  const screenFaceLight = new THREE.PointLight(0xccccff, 0.5, 5, 3);
  screenFaceLight.position.set(10, 20, 30);
  scene.add(screenFaceLight);

  // **Load HDR Environment**
>>>>>>> ba3dc94 (second commit)
=======
  const pointLight = new THREE.PointLight(0xc2a4ff, 0, 100, 3);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

>>>>>>> 56c497d (updated)
  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
<<<<<<< HEAD
<<<<<<< HEAD
      scene.environmentIntensity = 0;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight.material.opacity > 0.9) {
      pointLight.intensity = screenLight.material.emissiveIntensity * 20;
=======
      scene.environmentIntensity = 1.5;
      scene.environmentRotation.set(5.76, 85.85, 2);
=======
      scene.environmentIntensity = 0;
      scene.environmentRotation.set(5.76, 85.85, 1);
>>>>>>> 56c497d (updated)
    });

  function setPointLight(screenLight: any) {
<<<<<<< HEAD
    if (screenLight && screenLight.material) {
      const baseIntensity = 30;
      const emissiveColor = new THREE.Color(0xa5bfff);

      // Start glowing loop if not already
      if (!screenLight.userData.glowAnimating) {
        screenLight.userData.glowAnimating = true;

        gsap.to(screenLight.material, {
          emissiveIntensity: baseIntensity * 20,
          duration: 0.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(screenFaceLight, {
          intensity: 10,
          duration: 1.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        screenLight.material.emissive = emissiveColor;
      }

      pointLight.intensity = baseIntensity * 2;
>>>>>>> ba3dc94 (second commit)
=======
    if (screenLight.material.opacity > 0.9) {
      pointLight.intensity = screenLight.material.emissiveIntensity * 20;
>>>>>>> 56c497d (updated)
    } else {
      pointLight.intensity = 0;
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  const duration = 2;
  const ease = "power2.inOut";
=======

  // **Turn On Lights Animation**
>>>>>>> ba3dc94 (second commit)
=======
  const duration = 2;
  const ease = "power2.inOut";
>>>>>>> 56c497d (updated)
  function turnOnLights() {
    gsap.to(scene, {
<<<<<<< HEAD
<<<<<<< HEAD
      environmentIntensity: 0.64,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 1,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
=======
      environmentIntensity: 0.65,
      duration,
      ease,
=======
      environmentIntensity: 0.64,
      duration: duration,
      ease: ease,
>>>>>>> 56c497d (updated)
    });
    gsap.to(directionalLight, {
      intensity: 1,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
<<<<<<< HEAD
      duration,
      ease,
      yoyo: true,
      repeat: -1,
      onComplete: () => {
        gsap.to(".character-rim", {
          opacity: 0.4,
          duration,
          ease,
          yoyo: true,
          repeat: -1,
        });
      },
>>>>>>> ba3dc94 (second commit)
=======
      delay: 0.2,
      duration: 2,
>>>>>>> 56c497d (updated)
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;