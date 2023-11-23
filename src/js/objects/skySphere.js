import { TextureLoader, BackSide, MeshBasicMaterial, SphereGeometry, Mesh } from 'three';

const loader = new TextureLoader();
const texture = loader.load('path_to_your_image.jpg');

const geometry = new SphereGeometry(500, 32, 32); 
const material = new MeshBasicMaterial({
  map: texture,
  side: BackSide
});

export const skySphere = new Mesh(geometry, material);
