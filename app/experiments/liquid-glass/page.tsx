"use client";

import LocalImage from "../../../public/experiments/images/background.jpg";
import Image from "next/image";
import LiquidGlass from "./_components/liquid-glass";
import { useState, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LiquidGlassPage() {
  // Log Out Button Controls
  const [logoutDisplacementScale, setLogoutDisplacementScale] = useState(64);
  const [logoutBlurAmount, setLogoutBlurAmount] = useState(0.1);
  const [logoutSaturation, setLogoutSaturation] = useState(130);
  const [logoutAberrationIntensity, setLogoutAberrationIntensity] = useState(2);
  const [logoutElasticity, setLogoutElasticity] = useState(0.35);
  const [logoutCornerRadius, setLogoutCornerRadius] = useState(12);
  const [logoutOverLight, setLogoutOverLight] = useState(false);

  // Shared state
  const [activeTab, setActiveTab] = useState<"userInfo" | "logOut">("userInfo");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex gap-16 h-screen w-full overflow-hidden bg-background">
      <div className="w-1/4 h-full bg-primary/5 rounded-2xl p-6 overflow-y-auto">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Liquid Glass Controls</h2>

          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Displacement Scale: {logoutDisplacementScale}</Label>
              <Slider
                value={[logoutDisplacementScale]}
                onValueChange={(value) => setLogoutDisplacementScale(value[0])}
                min={0}
                max={200}
                step={1}
              />
            </div>

            <div className="space-y-3">
              <Label>Blur Amount: {logoutBlurAmount.toFixed(1)}</Label>
              <Slider
                value={[logoutBlurAmount]}
                onValueChange={(value) => setLogoutBlurAmount(value[0])}
                min={0}
                max={2}
                step={0.1}
              />
            </div>

            <div className="space-y-3">
              <Label>Saturation: {logoutSaturation}%</Label>
              <Slider
                value={[logoutSaturation]}
                onValueChange={(value) => setLogoutSaturation(value[0])}
                min={0}
                max={200}
                step={1}
              />
            </div>

            <div className="space-y-3">
              <Label>Aberration Intensity: {logoutAberrationIntensity}</Label>
              <Slider
                value={[logoutAberrationIntensity]}
                onValueChange={(value) =>
                  setLogoutAberrationIntensity(value[0])
                }
                min={0}
                max={10}
                step={0.1}
              />
            </div>

            <div className="space-y-3">
              <Label>Elasticity: {logoutElasticity.toFixed(2)}</Label>
              <Slider
                value={[logoutElasticity]}
                onValueChange={(value) => setLogoutElasticity(value[0])}
                min={0}
                max={1}
                step={0.01}
              />
            </div>

            <div className="space-y-3">
              <Label>Corner Radius: {logoutCornerRadius}px</Label>
              <Slider
                value={[logoutCornerRadius]}
                onValueChange={(value) => setLogoutCornerRadius(value[0])}
                min={0}
                max={50}
                step={1}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                checked={logoutOverLight}
                onCheckedChange={setLogoutOverLight}
                id="logout-over-light"
              />
              <Label htmlFor="logout-over-light">Over Light Background</Label>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-3/4 h-full relative overflow-hidden bg-primary/5 rounded-2xl"
        style={{ borderRadius: "1rem" }}
      >
        <LiquidGlass
          displacementScale={logoutDisplacementScale}
          blurAmount={logoutBlurAmount}
          saturation={logoutSaturation}
          aberrationIntensity={logoutAberrationIntensity}
          elasticity={logoutElasticity}
          cornerRadius={logoutCornerRadius}
          mouseContainer={containerRef}
          overLight={logoutOverLight}
          className="z-50"
          onClick={() => {
            console.log("Logged out");
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
          }}
        >
          <h2>Hi there!</h2>
        </LiquidGlass>
        <Image
          src={LocalImage}
          alt="Liquid Glass Background"
          fill
          className="object-cover z-10 absolute rounded-2xl"
          priority
          style={{
            animation: "scaleAndScroll 8s ease-in-out infinite",
            borderRadius: "1rem",
          }}
        />
        <style jsx>{`
          @keyframes scaleAndScroll {
            0% {
              transform: scale(1.15) translateY(15%);
            }
            50% {
              transform: scale(1.15) translateY(-15%);
            }
            100% {
              transform: scale(1.15) translateY(15%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
