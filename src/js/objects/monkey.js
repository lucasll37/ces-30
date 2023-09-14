import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { scene } from '../scene';




export let monkey;

const monkeyURL = new URL('../../assets/monkey.glb', import.meta.url)
const assetLoader = new GLTFLoader()
assetLoader.load(
    monkeyURL.href,
    gltf => {
        const model = gltf.scene
        scene.add(model)
        model.position.set(-12, 4, 10)

    },
    undefined,
    error => {
        console.error(error)
    }
)