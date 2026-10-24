import * as THREE from "three";
import System, {
  SpriteRenderer,
  MeshRenderer,
  Emitter,
  Rate,
  Span,
  Position,
  Mass,
  Radius,
  Life,
  RadialVelocity,
  Vector3D,
  Alpha,
  Scale,
  Color,
  PointZone,
  Texture,
  Body,
  Rotate,
  Gravity,
  BoxZone,
} from "three-nebula";

function threeNebula(scene) {
  const system = new System();
  const renderer = new MeshRenderer(scene, THREE);
  const emitter = new Emitter();

  // Color Scheme:
  const YELLOW_200 = "#fef08a";
  const SKYBLUE_200 = "#bae6fd";
  const RED_200 = "#fecaca";
  const EMERALD_900 = "#064e3b";
  const AMBER_900 = "#78350f";
  const INDIGO_900 = "#312e81";

  const geometry = new THREE.SphereGeometry(0.15, 8, 6);
  const material = new THREE.MeshBasicMaterial({ color: "skyblue" });
  const sphere = new THREE.Mesh(geometry, material);

  emitter
    .setRate(new Rate(new Span(10, 50), new Span(0, 0.5)))
    .setInitializers([
      new Position(new BoxZone(20, 20, 20)),
      // new Position( new PointZone(0, 0,) ),
      new Mass(0.5),
      new Life(1, 3),
      // new Life( 1, 10 ),
      // new RadialVelocity( 3, new Vector3D(0, -1, -1), 180),
      new Body(sphere),
    ])
    .setBehaviours([
      new Alpha(1, 0),
      new Scale(0.15, 0),
      new Color(
        [
          // Dark Theme Colors:
          new THREE.Color(YELLOW_200),
          new THREE.Color(SKYBLUE_200),
          new THREE.Color(RED_200),
          new THREE.Color("white"),
          // Light Theme Colors:
          new THREE.Color(EMERALD_900),
          new THREE.Color(AMBER_900),
          new THREE.Color(INDIGO_900),
        ],
        "random",
      ),
      new Rotate("random"),
    ])
    .emit(Infinity);

  system
    .addRenderer(renderer)
    .addEmitter(emitter)
    .emit({
      onStart: () => {},
      onUpdate: () => {},
      onEnd: () => {},
    });

  return system;
}

export default threeNebula;
