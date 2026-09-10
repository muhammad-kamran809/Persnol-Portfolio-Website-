import { useMemo, useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import profileImage from '../../assets/kamran.png'

function Keyboard() {
  const keys = useMemo(() => {
    const layout = []
    const rows = [12, 12, 11, 10]

    rows.forEach((amount, rowIndex) => {
      for (let index = 0; index < amount; index += 1) {
        layout.push({
          x: (index - (amount - 1) / 2) * 0.22,
          z: rowIndex * 0.22 - 0.32,
          width: rowIndex === 3 && index === 5 ? 0.8 : 0.17,
        })
      }
    })

    return layout
  }, [])

  return (
    <group position={[0, 0.14, 0]}>
      {keys.map((key, index) => (
        <mesh key={index} position={[key.x, 0, key.z]}>
          <boxGeometry args={[key.width, 0.035, 0.13]} />
          <meshStandardMaterial
            color="#0e2847"
            emissive="#168cff"
            emissiveIntensity={0.24}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

function LaptopScreen() {
  const screen = useRef()
  const profileTexture = useLoader(TextureLoader, profileImage)

  useFrame((state) => {
    if (screen.current) {
      screen.current.material.emissiveIntensity = 0.45 + Math.sin(state.clock.elapsedTime * 2) * 0.12
    }
  })

  return (
    <group>
      {/* Outer lid chassis */}
      <mesh position={[0, 1.25, 0]}>
        <boxGeometry args={[4.2, 2.65, 0.18]} />
        <meshStandardMaterial color="#08172b" metalness={0.9} roughness={0.18} />
      </mesh>

      {/* Screen inner bezel border */}
      <mesh position={[0, 1.25, 0.091]}>
        <planeGeometry args={[3.88, 2.34]} />
        <meshStandardMaterial color="#020814" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Screen display panel with dynamic emissive glow */}
      <mesh ref={screen} position={[0, 1.25, 0.092]}>
        <planeGeometry args={[3.74, 2.22]} />
        <meshStandardMaterial
          color="#030d1d"
          emissive="#075fc2"
          emissiveIntensity={0.5}
          metalness={0.2}
          roughness={0.15}
        />
      </mesh>

      {/* Top window / status bar */}
      <mesh position={[0, 2.24, 0.093]}>
        <planeGeometry args={[3.74, 0.14]} />
        <meshStandardMaterial color="#081527" roughness={0.4} />
      </mesh>

      {/* Status indicator dots */}
      <mesh position={[-1.72, 2.24, 0.094]}>
        <circleGeometry args={[0.028, 16]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <mesh position={[-1.63, 2.24, 0.094]}>
        <circleGeometry args={[0.028, 16]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>
      <mesh position={[-1.54, 2.24, 0.094]}>
        <circleGeometry args={[0.028, 16]} />
        <meshBasicMaterial color="#10b981" />
      </mesh>

      <Text
        position={[-1.38, 2.24, 0.094]}
        fontSize={0.065}
        color="#60a5fa"
        anchorX="left"
        anchorY="middle"
        letterSpacing={0.03}
      >
        kamran.dev // profile
      </Text>

      {/* Profile picture glowing frame */}
      <mesh position={[0, 1.16, 0.093]}>
        <planeGeometry args={[1.94, 1.94]} />
        <meshBasicMaterial color="#168cff" />
      </mesh>

      {/* Muhammad Kamran Profile Image */}
      <mesh position={[0, 1.16, 0.094]}>
        <planeGeometry args={[1.88, 1.88]} />
        <meshBasicMaterial map={profileTexture} toneMapped={false} />
      </mesh>

      {/* Left side screen tech accents */}
      <Text position={[-1.38, 1.62, 0.0935]} fontSize={0.055} color="#38bdf8" anchorX="center" letterSpacing={0.04}>
        &lt;LARAVEL /&gt;
      </Text>
      <Text position={[-1.38, 1.34, 0.0935]} fontSize={0.055} color="#818cf8" anchorX="center" letterSpacing={0.04}>
        &lt;REACT.JS /&gt;
      </Text>
      <Text position={[-1.38, 1.06, 0.0935]} fontSize={0.055} color="#34d399" anchorX="center" letterSpacing={0.04}>
        &lt;REST APIs /&gt;
      </Text>
      <Text position={[-1.38, 0.78, 0.0935]} fontSize={0.055} color="#60a5fa" anchorX="center" letterSpacing={0.04}>
        &lt;PHP /&gt;
      </Text>

      {/* Right side screen status accents */}
      <Text position={[1.38, 1.62, 0.0935]} fontSize={0.055} color="#38bdf8" anchorX="center" letterSpacing={0.04}>
        SYSTEM: ONLINE
      </Text>
      <Text position={[1.38, 1.34, 0.0935]} fontSize={0.055} color="#818cf8" anchorX="center" letterSpacing={0.04}>
        STACK: FULL STACK
      </Text>
      <Text position={[1.38, 1.06, 0.0935]} fontSize={0.055} color="#34d399" anchorX="center" letterSpacing={0.04}>
        EXP: 2+ YEARS
      </Text>
      <Text position={[1.38, 0.78, 0.0935]} fontSize={0.055} color="#60a5fa" anchorX="center" letterSpacing={0.04}>
        STATUS: READY
      </Text>
    </group>
  )
}

function Laptop() {
  const laptop = useRef()

  useFrame((state) => {
    if (laptop.current) {
      laptop.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08
    }
  })

  return (
    <group ref={laptop} rotation={[0.18, -0.25, 0]}>
      {/* Laptop Screen / Display */}
      <group rotation={[-0.12, 0, 0]}>
        <LaptopScreen />
      </group>

      {/* Laptop Base (coordinated unified coordinate group angled for realistic depth & visibility) */}
      <group position={[0, -0.22, 0.25]} rotation={[0.08, 0, 0]}>
        {/* Main Base Chassis */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4.8, 0.22, 2.9]} />
          <meshStandardMaterial color="#091626" metalness={0.88} roughness={0.22} />
        </mesh>

        {/* Recessed keyboard well */}
        <mesh position={[0, 0.111, 0.01]}>
          <boxGeometry args={[2.85, 0.005, 0.98]} />
          <meshStandardMaterial color="#050e1a" metalness={0.8} roughness={0.4} />
        </mesh>

        {/* 3D Keyboard */}
        <Keyboard />

        {/* Realistic Engraved / Raised Nameplate for 3D Text */}
        <group position={[0, 0.12, 0.56]}>
          {/* Recessed bevel frame */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.7, 0.014, 0.28]} />
            <meshStandardMaterial color="#040c17" metalness={0.92} roughness={0.25} />
          </mesh>

          {/* Neon side accent trims */}
          <mesh position={[-1.32, 0.009, 0]}>
            <boxGeometry args={[0.03, 0.008, 0.2]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <mesh position={[1.32, 0.009, 0]}>
            <boxGeometry args={[0.03, 0.008, 0.2]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>

          {/* Glowing bottom accent line */}
          <mesh position={[0, 0.009, 0.12]}>
            <boxGeometry args={[2.5, 0.004, 0.01]} />
            <meshBasicMaterial color="#168cff" />
          </mesh>

          {/* 3D Shadow relief layer */}
          <Text
            position={[0.004, 0.012, 0.004]}
            rotation={[-Math.PI / 2 + 0.28, 0, 0]}
            fontSize={0.16}
            letterSpacing={0.08}
            color="#020814"
            anchorX="center"
            anchorY="middle"
          >
            Full Stack Developer
          </Text>

          {/* Raised 3D Text: "Full Stack Developer" */}
          <Text
            position={[0, 0.018, 0]}
            rotation={[-Math.PI / 2 + 0.28, 0, 0]}
            fontSize={0.16}
            letterSpacing={0.08}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.007}
            outlineColor="#0284c7"
            outlineOpacity={0.95}
          >
            Full Stack Developer
            <meshStandardMaterial
              color="#ffffff"
              emissive="#38bdf8"
              emissiveIntensity={1.1}
              metalness={0.6}
              roughness={0.15}
            />
          </Text>
        </group>

        {/* Trackpad glowing border */}
        <mesh position={[0, 0.114, 0.98]}>
          <boxGeometry args={[1.24, 0.008, 0.58]} />
          <meshBasicMaterial color="#168cff" transparent opacity={0.4} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.116, 0.98]}>
          <boxGeometry args={[1.2, 0.008, 0.55]} />
          <meshStandardMaterial
            color="#0d1e33"
            emissive="#0b67b8"
            emissiveIntensity={0.06}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Front accent light strip */}
        <mesh position={[0, 0.09, 1.45]}>
          <boxGeometry args={[3.4, 0.02, 0.02]} />
          <meshBasicMaterial color="#168cff" />
        </mesh>
      </group>
    </group>
  )
}

export default Laptop
