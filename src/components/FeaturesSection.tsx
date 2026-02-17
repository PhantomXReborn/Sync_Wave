import { ArrowRight, Shuffle, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: <Shuffle className="w-6 h-6" />,
    title: "Two-Way Sync",
    description: "Transfer playlists from Tidal to YouTube and back. Your music follows you everywhere.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Smart Matching",
    description: "AI-powered track matching finds the best YouTube videos for your Tidal tracks.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Private",
    description: "Your credentials are encrypted and never stored. OAuth-based secure authentication.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How it <span className="text-gradient-primary">works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three simple steps to sync your entire music library
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent text-accent-foreground mb-6 group-hover:shadow-glow transition-shadow duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
              <ArrowRight className="w-5 h-5 text-muted-foreground mt-4 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;