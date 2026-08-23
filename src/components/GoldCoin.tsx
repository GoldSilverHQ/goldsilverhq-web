import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

function makeEnvMap() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext("2d");
  if (!ctx) return new THREE.Texture();
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, "#fff6dc");
  g.addColorStop(0.18, "#e8d48b");
  g.addColorStop(0.42, "#6a5a32");
  g.addColorStop(0.62, "#1c1914");
  g.addColorStop(1, "#070605");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 256);
  ctx.fillStyle = "rgba(255, 236, 190, 0.7)";
  ctx.fillRect(0, 28, 512, 18);
  ctx.fillStyle = "rgba(197, 205, 212, 0.28)";
  ctx.fillRect(0, 150, 512, 10);
  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function makeFaceTexture() {
  const size = 1024;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d");
  if (!ctx) return new THREE.Texture();

  const cx = size / 2;
  const cy = size / 2;
  const rad = ctx.createRadialGradient(cx, cy, 40, cx, cy, 500);
  rad.addColorStop(0, "#f7e7b4");
  rad.addColorStop(0.4, "#d7b44a");
  rad.addColorStop(1, "#7a5c12");
  ctx.fillStyle = rad;
  ctx.beginPath();
  ctx.arc(cx, cy, 508, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#5c480e";
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.arc(cx, cy, 470, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(cx, cy, 400, 0, Math.PI * 2);
  ctx.stroke();

  const legend = " GOLD  ·  SOUND MONEY  ·  999.9  · ";
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = "#4a3a0c";
  ctx.font = "700 40px 'Times New Roman', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const chars = legend.split("");
  const step = (Math.PI * 2) / chars.length;
  chars.forEach((ch, i) => {
    ctx.save();
    ctx.rotate(i * step);
    ctx.fillText(ch, 0, -434);
    ctx.restore();
  });
  ctx.restore();

  ctx.strokeStyle = "rgba(74, 58, 12, 0.55)";
  ctx.lineWidth = 8;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * 140, cy + Math.sin(a) * 140);
    ctx.lineTo(cx + Math.cos(a) * 330, cy + Math.sin(a) * 330);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, 128, 0, Math.PI * 2);
  ctx.fillStyle = "#f0d78a";
  ctx.fill();
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#5c480e";
  ctx.stroke();

  ctx.fillStyle = "#3f3008";
  ctx.font = "700 92px 'Times New Roman', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Au", cx, cy - 8);
  ctx.font = "700 32px 'Times New Roman', serif";
  ctx.fillText("999.9", cx, cy + 52);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

function CoinMesh({ spinning }: { spinning: boolean }) {
  const group = useRef<THREE.Group>(null);
  const face = useMemo(() => makeFaceTexture(), []);
  const gold = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#c9a227",
        metalness: 1,
        roughness: 0.28,
        clearcoat: 0.25,
        clearcoatRoughness: 0.4,
      }),
    [],
  );
  const rim = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#8a7020",
        metalness: 1,
        roughness: 0.38,
      }),
    [],
  );
  const faceMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: face,
        color: "#ffffff",
        metalness: 0.42,
        roughness: 0.36,
        envMapIntensity: 0.55,
      }),
    [face],
  );

  useEffect(() => {
    return () => {
      face.dispose();
      gold.dispose();
      rim.dispose();
      faceMat.dispose();
    };
  }, [face, gold, rim, faceMat]);

  useFrame((_, delta) => {
    if (!group.current || !spinning) return;
    const d = Math.min(delta, 0.1);
    group.current.rotation.y += d * 0.48;
  });

  return (
    <group ref={group} rotation={[0.38, 0.55, 0.06]}>
      <mesh material={gold} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.08, 1.08, 0.14, 96, 1, true]} />
      </mesh>
      <mesh material={rim} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.08, 0.04, 12, 96]} />
      </mesh>
      <mesh material={faceMat} position={[0, 0, 0.072]}>
        <circleGeometry args={[1.07, 64]} />
      </mesh>
      <mesh material={faceMat} position={[0, 0, -0.072]} rotation={[0, Math.PI, 0]}>
        <circleGeometry args={[1.07, 64]} />
      </mesh>
    </group>
  );
}

function LightsAndEnv() {
  const scene = useThree((s) => s.scene);
  const env = useMemo(() => makeEnvMap(), []);

  useEffect(() => {
    scene.environment = env;
    scene.environmentIntensity = 0.9;
    return () => {
      scene.environment = null;
      env.dispose();
    };
  }, [env, scene]);

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4.2, 3.2, 5.5]} intensity={2.2} color="#ffe4a8" />
      <directionalLight position={[-5, 0.4, 1.5]} intensity={0.75} color="#c5cdd4" />
      <directionalLight position={[0.5, -3, -4]} intensity={0.4} color="#8a7020" />
    </>
  );
}

function Scene({ spinning }: { spinning: boolean }) {
  return (
    <>
      <LightsAndEnv />
      <CoinMesh spinning={spinning} />
    </>
  );
}

export function GoldCoin({ className = "" }: { className?: string }) {
  const [ready, setReady] = useState(false);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    setReady(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setSpinning(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div className={cn("relative h-full w-full overflow-hidden rounded-xl bg-bg", className)}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,color-mix(in_oklab,var(--color-gold)_28%,transparent),transparent_62%)]"
        aria-hidden
      />
      {ready ? (
        <Canvas
          camera={{ position: [0, 0.1, 3.7], fov: 36 }}
          dpr={[1, 1.6]}
          gl={{ antialias: true, alpha: true }}
          style={{ width: "100%", height: "100%", display: "block" }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.08;
          }}
          aria-label="Rotating gold coin"
        >
          <Scene spinning={spinning} />
        </Canvas>
      ) : (
        <div className="grid h-full w-full place-items-center" aria-hidden>
          <div className="size-40 rounded-full bg-gold/35 shadow-[0_0_80px_color-mix(in_oklab,var(--color-gold)_40%,transparent)]" />
        </div>
      )}
    </div>
  );
}
