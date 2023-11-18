import { AxesHelper, CameraHelper, SpotLightHelper, DirectionalLightHelper } from 'three';
import { directionalLight, spotLight } from './lights'

export const axexHelper = new AxesHelper( 3 );
export const dLightShadowHelper = new CameraHelper( directionalLight.shadow.camera ); 
export const sLightHelper = new SpotLightHelper(spotLight);
export const dLightHelper = new DirectionalLightHelper( directionalLight, 5);

