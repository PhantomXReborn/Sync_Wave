import { useState } from "react";
import { Music, Play, ListMusic, ArrowRightLeft, Clock, Check } from "lucide-react";

interface Playlist {
  id: string;
  name: string;
  trackCount: number;
  source: "tidal" | "youtube";
  duration: string;
  synced: boolean;
}

const mockPlaylists: Playlist[] = [
  { id: "1", name: "Chill Vibes", trackCount: 42, source: "tidal", duration: "2h 15m", synced: true },
  { id: "2", name: "Workout Beats", trackCount: 28, source: "tidal", duration: "1h 30m", synced: false },
  { id: "3", name: "Discover Weekly", trackCount: 35, source: "tidal", duration: "1h 50m", synced: false },
  { id: "4", name: "Late Night Jazz", trackCount: 19, source: "youtube", duration: "1h 05m", synced: true },
  { id: "5", name: "Road Trip Mix", trackCount: 55, source: "youtube", duration: "3h 20m", synced: false },
  { id: "6", name: "Indie Gems", trackCount: 31, source: "youtube", duration: "1h 45m", synced: false },
];

const PlaylistDashboard = () => {
  const [activeTab, setActiveTab] = useState<"all" | "tidal" | "youtube">("all");

  const filteredPlaylists = mockPlaylists.filter(
    (p) => activeTab === "all" || p.source === activeTab
  );

  return (
    <section className="py-24 px-6" id="dashboard">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold mb-2">Your Playlists</h2>
            <p className="text-muted-foreground">
              {mockPlaylists.length} playlists across both platforms
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl bg-secondary">
            {(["all", "tidal", "youtube"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "all" ? "All" : tab === "tidal" ? "Tidal" : "YouTube"}
              </button>
            ))}
          </div>
        </div>

        {/* Playlist Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
  const isTidal = playlist.source === "tidal";
  const iconBg = isTidal ? "bg-tidal/10 text-tidal" : "bg-youtube/10 text-youtube";
  const sourceIcon = isTidal ? <Music className="w-4 h-4" /> : <Play className="w-4 h-4" />;

  return (
    <div className="group p-5 rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-card hover:border-primary/20 transition-all duration-300 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${iconBg}`}>
          {sourceIcon}
        </div>
        {playlist.synced && (
          <span className="flex items-center gap-1 text-xs text-primary bg-accent px-2 py-1 rounded-full">
            <Check className="w-3 h-3" /> Synced
          </span>
        )}
      </div>

      <h3 className="font-display font-semibold text-foreground mb-1">{playlist.name}</h3>

      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <ListMusic className="w-3.5 h-3.5" />
          {playlist.trackCount} tracks
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {playlist.duration}
        </span>
      </div>

      {!playlist.synced && (
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-200">
          <ArrowRightLeft className="w-4 h-4" />
          Sync to {isTidal ? "YouTube" : "Tidal"}
        </button>
      )}
    </div>
  );
};

export default PlaylistDashboard;
