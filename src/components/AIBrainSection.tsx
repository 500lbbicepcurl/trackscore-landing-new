import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Animated Brain Component
function Brain() {
  const brainRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  useFrame(state => {
    if (brainRef.current) {
      brainRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      brainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });
  return <Sphere ref={brainRef} args={[1.5, 32, 32]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <meshStandardMaterial color={hovered ? "#4287f5" : "#6366f1"} emissive="#1e40af" emissiveIntensity={0.3} wireframe transparent opacity={0.8} />
    </Sphere>;
}

// Data Stream Component
function DataStream({
  position,
  color,
  label,
  direction = 'in'
}: {
  position: [number, number, number];
  color: string;
  label: string;
  direction?: 'in' | 'out';
}) {
  const streamRef = useRef<THREE.Mesh>(null);
  useFrame(state => {
    if (streamRef.current) {
      const time = state.clock.elapsedTime;
      if (direction === 'in') {
        streamRef.current.position.x = position[0] + Math.sin(time * 2) * 0.3;
      } else {
        streamRef.current.position.x = position[0] + Math.cos(time * 1.5) * 0.2;
      }
    }
  });
  return <group position={position}>
      <mesh ref={streamRef}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <Html position={[direction === 'in' ? -1 : 1, 0, 0]}>
        <div className={`px-2 py-1 rounded text-xs font-medium text-white ${direction === 'in' ? 'bg-gray-800' : 'bg-emerald-600'}`}>
          {label}
        </div>
      </Html>
    </group>;
}

// 3D Scene Component
function AIBrainScene() {
  return <Canvas camera={{
    position: [0, 0, 8],
    fov: 45
  }} gl={{
    antialias: true,
    alpha: true
  }} onCreated={({
    gl
  }) => {
    gl.setClearColor('#000000', 0);
  }}>
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
    </Canvas>;
}

// Error Boundary for Canvas
function CanvasWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  if (hasError) {
    return <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            🧠
          </div>
          <div className="text-white">
            <div className="text-xl font-semibold mb-2">AI Brain Processing</div>
            <div className="text-gray-300 text-sm">Your personalized RTO intelligence model</div>
          </div>
        </div>
      </div>;
  }
  return <>{children}</>;
}
export default function AIBrainSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              🧠 AI-Powered Intelligence
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Brand's Personal
              <br />
              <span className="gradient-text">RTO Brain</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every COD order teaches your AI model. It learns which pin codes work, 
              which customers are genuine, and which shipments are risky — so you only 
              ship where profits are safe.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">Learns from <span className="text-foreground font-semibold">your orders, not generic data</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">Adapts to <span className="text-foreground font-semibold">your regions & repeat buyers</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">Grows smarter with <span className="text-foreground font-semibold">every delivery</span></span>
              </li>
            </ul>
            
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              See Your Model in Action →
            </button>
          </motion.div>
          
          {/* Right: 3D Brain Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] relative"
          >
            <CanvasWrapper>
              <AIBrainScene />
            </CanvasWrapper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}