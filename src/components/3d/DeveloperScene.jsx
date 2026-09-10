import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, OrbitControls, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import FloatingShapes from './FloatingShapes'
import Laptop from './Laptop'
import TechnologyCard from './TechnologyCard'

function NeonRing({ position, rotation, scale = 1 }) {
  const ring = useRef()

  useFrame((state) => {
    if (!ring.current) return
    ring.current.rotation.z = state.clock.elapsedTime * 0.35
    ring.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15
  })

  return (
    <mesh ref={ring} position={position} rotation={rotation} scale={scale}>
      <torusGeometry args={[2.5, 0.018, 12, 64]} />
      <meshBasicMaterial color="#168cff" transparent opacity={0.28} toneMapped={false} />
    </mesh>
  )
}

function Scene() {
  const scene = useRef()

  useFrame((state) => {
    if (!scene.current) return
    const targetX = state.pointer.x * 0.15
    const targetY = state.pointer.y * 0.08
    scene.current.rotation.y = THREE.MathUtils.lerp(scene.current.rotation.y, targetX, 0.035)
    scene.current.rotation.x = THREE.MathUtils.lerp(scene.current.rotation.x, -targetY, 0.035)
  })

  return (
    <group ref={scene}>
      <Laptop />
      <TechnologyCard text="PHP" position={[-3.25, 2.45, 0]} color="#777bb4" rotation={[0, 0.15, 0.05]} scale={0.95} />
      <TechnologyCard text="Laravel" position={[3.1, 2.35, 0]} color="#ff4055" rotation={[0, -0.15, -0.05]} />
      <TechnologyCard text="React" position={[-3.35, -1.3, 0.1]} color="#28b7ff" rotation={[0, 0.2, -0.05]} scale={0.95} />
      <TechnologyCard text="REST API" position={[3.25, -1.35, 0]} color="#7657ff" rotation={[0, -0.2, 0.05]} scale={0.95} />
      <TechnologyCard text="DATABASE" position={[0, -2.65, 0.4]} color="#168cff" rotation={[0.05, 0, 0]} scale={0.9} />
      <NeonRing position={[0, 0, -0.8]} rotation={[1.15, 0.1, 0]} />
      <NeonRing position={[0, 0, -1.1]} rotation={[1.3, -0.2, 0]} scale={1.25} />
      <FloatingShapes />
      <Sparkles count={72} scale={[9, 7, 5]} size={1.8} speed={0.25} noise={1} color="#168cff" />
      <Sparkles count={28} scale={[7, 6, 4]} size={2.4} speed={0.16} noise={1} color="#7657ff" />
    </group>
  )
}

function DeveloperScene() {
  return (
    <div className="developer-scene">
      <Canvas camera={{ position: [0, 0.1, 9], fov: 43 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <color attach="background" args={['#020817']} />
        <fog attach="fog" args={['#020817', 9, 15]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 6, 5]} intensity={2.2} />
        <pointLight position={[4, 2, 4]} color="#168cff" intensity={10} distance={12} />
        <pointLight position={[-4, 2, 2]} color="#7657ff" intensity={8} distance={11} />
        <pointLight position={[0, -3, 3]} color="#28b7ff" intensity={5} distance={8} />
        <Scene />
        <ContactShadows frames={1} position={[0, -2.9, 0]} opacity={0.5} scale={9} blur={2.5} far={5} />
        <OrbitControls autoRotate autoRotateSpeed={0.28} enableZoom={false} enablePan={false} enableDamping dampingFactor={0.05} minPolarAngle={Math.PI / 2.35} maxPolarAngle={Math.PI / 1.7} />
      </Canvas>
    </div>
  )
}

export default DeveloperScene
