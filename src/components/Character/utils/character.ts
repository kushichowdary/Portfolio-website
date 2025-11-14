import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        loader.load(
          blobUrl,
          async (gltf) => {
            const character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.frustumCulled = true;

                const name = mesh.name.toLowerCase();
                const material = new THREE.MeshStandardMaterial();

                switch (name) {
                  case "bodyshirt":
                    material.color = new THREE.Color("#010127"); 
                    mesh.material = material;
                    break;
                  case "pant":
                    material.color = new THREE.Color("#313639"); 
                    mesh.material = material;
                    break;
                  case "shoe":
                    material.color = new THREE.Color("#9DRDC6"); 
                    mesh.material = material;
                    break;
                  case "sole":
                    material.color = new THREE.Color("#82CAFF"); 
                    mesh.material = material;
                    break;
                  case "hair":
                    material.color = new THREE.Color("#160D0B");
                    mesh.material = material;
                    break;
                  case "keyboard":
                    material.color = new THREE.Color("#C70039");
                    mesh.material = material;
                    break;
                  case "plane002":
                    material.color = new THREE.Color("#87CEEB");
                    mesh.material = material;
                    break;
                  case "plane003":
                    material.color = new THREE.Color("#000000");
                    mesh.material = material;
                    break;
                  case "Plane017":
                    material.color = new THREE.Color("#666362");
                    mesh.material = material;
                    break;
                  case "hand":
                  case "neck":
                  case "ear001":
                  case "plane007":
                    material.color = new THREE.Color("#96634E");
                    mesh.material = material;
                    break;
                  case "cube002":
                    material.color = new THREE.Color("#964B00");
                    mesh.material = material;
                    break;
                  default:
                }
              }
            });

            scene.add(character);
            setCharTimeline(character, camera);
            setAllTimeline();

            const footR = character.getObjectByName("footR");
            const footL = character.getObjectByName("footL");
            if (footR) footR.position.y = 3.36;
            if (footL) footL.position.y = 3.36;

            dracoLoader.dispose();
            resolve(gltf);
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        console.error("Decryption or loading failed:", err);
        reject(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;