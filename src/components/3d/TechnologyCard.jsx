import { Float, Text } from '@react-three/drei'

function TechnologyCard({ text, position, color, rotation = [0, 0, 0], scale = 1 }) {
  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={1}>
      <group position={position} scale={scale} rotation={rotation}>
        <mesh>
          <boxGeometry args={[1.15, 0.65, 0.12]} />
          <meshStandardMaterial color="#061426" emissive={color} emissiveIntensity={0.18} metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.075]}>
          <planeGeometry args={[1.0, 0.5]} />
          <meshBasicMaterial color={color} transparent opacity={0.12} />
        </mesh>
        <Text position={[0, 0, 0.145]} fontSize={0.18} color="white" anchorX="center" anchorY="middle" outlineWidth={0.008} outlineColor={color}>
          {text}
        </Text>
        <mesh position={[0, -0.27, 0.07]}>
          <boxGeometry args={[0.65, 0.025, 0.025]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </Float>
  )
}

export default TechnologyCard
