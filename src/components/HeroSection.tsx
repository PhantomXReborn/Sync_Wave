import { Music, Play, ArrowRightLeft } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(174_72%_52%_/_0.08)_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tidal/5 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-youtube/5 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo / Icon */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-border bg-card/50 backdrop-blur-sm">
          <Music className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            SyncWave
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Your music,{" "}
          <span className="text-gradient-primary">everywhere</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Seamlessly sync your playlists between Tidal and YouTube.
          Two-way transfer, instant matching, zero hassle.
        </p>

        {/* Platform cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <PlatformCard
            name="Tidal"
            description="Hi-Fi streaming"
            icon={<Music className="w-6 h-6" />}
            variant="tidal"
          />
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border">
            <ArrowRightLeft className="w-5 h-5 text-primary" />
          </div>
          <PlatformCard
            name="YouTube"
            description="Video & Music"
            icon={<Play className="w-6 h-6" />}
            variant="youtube"
          />
        </div>

        <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg shadow-glow hover:brightness-110 transition-all duration-300 animate-pulse-glow">
          Get Started
          <ArrowRightLeft className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

const PlatformCard = ({
  name,
  description,
  icon,
  variant,
}: {
  name: string;
  description: string;
  icon: React.ReactNode;
  variant: "tidal" | "youtube";
}) => {
  const borderClass = variant === "tidal" ? "hover:border-tidal/40" : "hover:border-youtube/40";
  const iconBgClass = variant === "tidal" ? "bg-tidal/10 text-tidal" : "bg-youtube/10 text-youtube";

  return (
    <div
      className={`group flex items-center gap-4 px-6 py-4 rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-card transition-all duration-300 hover:shadow-lg ${borderClass} cursor-pointer w-56`}
    >
      <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${iconBgClass}`}>
        {icon}
      </div>
      <div className="text-left">
        <h3 className="font-display font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
