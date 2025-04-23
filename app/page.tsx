'use client';

import Timeline from './components/roadmap/Timeline';
import TeamSection from './components/TeamSection';
import { roadmapData } from './data/roadmapData';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-fog">
      <TeamSection />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">ElevatED GTM Strategy Roadmap</h1>
        <Timeline quarters={roadmapData.quarters} />
      </div>
    </main>
  );
}
