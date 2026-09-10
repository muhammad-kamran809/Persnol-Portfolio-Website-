import { Float } from '@react-three/drei'

function FloatingShapes() {
  return (
    <>
      <Float speed={2} floatIntensity={1.5} rotationIntensity={1}>
        <mesh position={[-2.2, 1.2, 0.5]}>
          <icosahedronGeometry args={[0.22, 1]} />
          <meshStandardMaterial color="#168cff" emissive="#168cff" emissiveIntensity={0.7} metalness={0.8} roughness={0.15} />
        </mesh>
      </Float>
      <Float speed={2.5} floatIntensity={1.3} rotationIntensity={1}>
        <mesh position={[2.1, 1.1, 0.6]}>
          <octahedronGeometry args={[0.24, 0]} />
          <meshStandardMaterial color="#7657ff" emissive="#7657ff" emissiveIntensity={0.7} metalness={0.8} roughness={0.15} />
        </mesh>
      </Float>
      <Float speed={1.8} floatIntensity={1.5} rotationIntensity={1}>
        <mesh position={[2.0, -1.65, 0.7]}>
          <torusGeometry args={[0.22, 0.06, 12, 24]} />
          <meshStandardMaterial color="#28b7ff" emissive="#28b7ff" emissiveIntensity={0.8} />
        </mesh>
      </Float>
      <Float speed={2.1} floatIntensity={1.4} rotationIntensity={1}>
        <mesh position={[-2.2, -1.55, 0.6]}>
          <tetrahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#7657ff" emissive="#7657ff" emissiveIntensity={0.8} />
        </mesh>
      </Float>
    </>
  )
}

export default FloatingShapes
