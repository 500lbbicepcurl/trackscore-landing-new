import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, Suspense, useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

// Animated Brain Component
function Brain() {
  const brainRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (brainRef.current) {
      brainRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      brainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })
  
  return (
    <Sphere
      ref={brainRef}
      args={[1.5, 32, 32]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? "#4287f5" : "#6366f1"}
        emissive="#1e40af"
        emissiveIntensity={0.3}
        wireframe
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

// Data Stream Component
function DataStream({ position, color, label, direction = 'in' }: {
  position: [number, number, number]
  color: string
  label: string
  direction?: 'in' | 'out'
}) {
  const streamRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (streamRef.current) {
      const time = state.clock.elapsedTime
      if (direction === 'in') {
        streamRef.current.position.x = position[0] + Math.sin(time * 2) * 0.3
      } else {
        streamRef.current.position.x = position[0] + Math.cos(time * 1.5) * 0.2
      }
    }
  })
  
  return (
    <group position={position}>
      <mesh ref={streamRef}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <Html position={[direction === 'in' ? -1 : 1, 0, 0]}>
        <div className={`px-2 py-1 rounded text-xs font-medium text-white ${
          direction === 'in' ? 'bg-gray-800' : 'bg-emerald-600'
        }`}>
          {label}
        </div>
      </Html>
    </group>
  )
}

// 3D Scene Component
function AIBrainScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor('#000000', 0)
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Brain />
        
        {/* Incoming Data Streams */}
        <DataStream position={[-4, 1.5, 0]} color="#3b82f6" label="Orders" direction="in" />
        <DataStream position={[-4, 0.5, 0]} color="#eab308" label="Pin Codes" direction="in" />
        <DataStream position={[-4, -0.5, 0]} color="#22c55e" label="Customers" direction="in" />
        <DataStream position={[-4, -1.5, 0]} color="#a855f7" label="Deliveries" direction="in" />
        <DataStream position={[-4, -2.5, 0]} color="#f97316" label="Ad Signals" direction="in" />
        
        {/* Outgoing Decision Streams */}
        <DataStream position={[4, 1, 0]} color="#10b981" label="🟢 Safe to Ship" direction="out" />
        <DataStream position={[4, 0, 0]} color="#ef4444" label="🔴 High RTO Risk" direction="out" />
        <DataStream position={[4, -1, 0]} color="#f59e0b" label="💰 Profitable Zones" direction="out" />
        
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Suspense>
    </Canvas>
  )
}

// Error Boundary for Canvas
function CanvasWrapper({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false)
  
  useEffect(() => {
    const handleError = () => setHasError(true)
    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])
  
  if (hasError) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            🧠
          </div>
          <div className="text-white">
            <div className="text-xl font-semibold mb-2">AI Brain Processing</div>
            <div className="text-gray-300 text-sm">Your personalized RTO intelligence model</div>
          </div>
        </div>
      </div>
    )
  }
  
  return <>{children}</>
}

export default function AIBrainSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                👉 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Your Brand's Personal RTO Brain
                </span>
              </h2>
              
              <div className="text-xl text-gray-300 leading-relaxed">
                <p className="border-l-4 border-blue-500 pl-6 italic">
                  "Every COD order teaches your AI model. It learns which pin codes work, which customers are genuine, 
                  and which shipments are risky — so you only ship where profits are safe."
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Learns from <strong className="text-white">your orders, not generic data</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Adapts to <strong className="text-white">your regions & repeat buyers</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Grows smarter with <strong className="text-white">every delivery</strong></span>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              See Your Model in Action
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
          
          {/* Right 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-white/10" />
            <CanvasWrapper>
              <AIBrainScene />
            </CanvasWrapper>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl -z-10" />
          </motion.div>
          
        </div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ 
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  )
}