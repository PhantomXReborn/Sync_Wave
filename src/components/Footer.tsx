import { Music } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Music className="w-5 h-5 text-primary" />
        <span className="font-display font-semibold text-foreground">SyncWave</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © 2026 SyncWave. Sync your music, your way.
      </p>
    </div>
  </footer>
);

export default Footer;
