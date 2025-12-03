import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function Demo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-primary">
      <ShaderAnimation className="absolute inset-0 w-full h-full" />
      <span className="absolute pointer-events-none z-10 text-center text-5xl md:text-7xl lg:text-8xl leading-none font-display font-semibold tracking-tighter text-foreground">
        Shader Animation
      </span>
    </div>
  );
}
