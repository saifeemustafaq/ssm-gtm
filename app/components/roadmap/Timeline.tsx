'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineProps {
  quarters: {
    id: string;
    name: string;
    objectives: string[];
    kpis: string[];
    months: {
      id: string;
      name: string;
      activities: {
        id: string;
        title: string;
        type: 'b2c' | 'b2b' | 'marketing' | 'product';
        status: 'planned' | 'in-progress' | 'completed';
        description?: string;
      }[];
    }[];
  }[];
}

// Helper function to get card color based on type and status
const getCardStyles = (type: string, status: string, quarterId: string) => {
  // Quarter-specific color variations
  const quarterIntensity = {
    q1: { base: 0, border: 400 },
    q2: { base: 100, border: 500 },
    q3: { base: 200, border: 600 },
    q4: { base: 300, border: 700 }
  };

  const qColors = quarterIntensity[quarterId as keyof typeof quarterIntensity] || quarterIntensity.q1;

  const typeColors = {
    b2c: {
      base: `from-amber-500/80 to-yellow-700/80`,
      border: `border-yellow-${qColors.border}`,
      completed: `from-amber-400/90 to-yellow-600/90`,
      'in-progress': `from-amber-500/80 to-yellow-700/80`,
      planned: `from-amber-600/70 to-yellow-800/70`
    },
    b2b: {
      base: `from-amethyst/80 to-indigo-800/80`,
      border: `border-indigo-${qColors.border}`,
      completed: `from-amethyst/90 to-indigo-700/90`,
      'in-progress': `from-amethyst/80 to-indigo-800/80`,
      planned: `from-amethyst/60 to-indigo-900/60`
    },
    marketing: {
      base: `from-rose-quartz/80 to-rose-700/80`,
      border: `border-rose-${qColors.border}`,
      completed: `from-rose-quartz/90 to-rose-600/90`,
      'in-progress': `from-rose-quartz/80 to-rose-700/80`,
      planned: `from-rose-quartz/60 to-rose-800/60`
    },
    product: {
      base: `from-icy-teal/80 to-teal-700/80`,
      border: `border-teal-${qColors.border}`,
      completed: `from-icy-teal/90 to-teal-600/90`,
      'in-progress': `from-icy-teal/80 to-teal-700/80`,
      planned: `from-icy-teal/60 to-teal-800/60`
    }
  };

  return {
    bgGradient: typeColors[type as keyof typeof typeColors][status as keyof (typeof typeColors)['b2c']] || typeColors[type as keyof typeof typeColors].base,
    border: typeColors[type as keyof typeof typeColors].border
  };
};

const Timeline: React.FC<TimelineProps> = ({ quarters }) => {
  const [selectedInitiative, setSelectedInitiative] = useState<string | null>(null);

  const initiatives = [
    { id: 'b2c', name: 'B2C Initiatives', color: 'from-amber-500/80 to-yellow-700/80 border-yellow-400' },
    { id: 'b2b', name: 'B2B Initiatives', color: 'from-amethyst/80 to-indigo-800/80 border-indigo-400' },
    { id: 'marketing', name: 'Marketing Activities', color: 'from-rose-quartz/80 to-rose-700/80 border-rose-400' },
    { id: 'product', name: 'Product Development', color: 'from-icy-teal/80 to-teal-700/80 border-teal-400' },
  ];

  // Quarter-specific colors
  const quarterStyles = [
    { gradient: 'from-amber-900/20 to-amber-700/20', header: 'text-amber-400' },
    { gradient: 'from-amethyst/20 to-indigo-800/20', header: 'text-indigo-400' },
    { gradient: 'from-rose-800/20 to-rose-600/20', header: 'text-rose-400' },
    { gradient: 'from-teal-800/20 to-teal-600/20', header: 'text-teal-400' }
  ];

  return (
    <div className="space-y-8">
      {/* Quarter Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {quarters.map((quarter, index) => (
          <motion.div
            key={quarter.id}
            className={`glass-dark p-6 rounded-lg shadow-lg bg-gradient-to-br ${quarterStyles[index].gradient} border border-white/10 h-full`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={`text-xl font-bold ${quarterStyles[index].header} mb-4`}>{quarter.name}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-ash mb-2">Objectives:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {quarter.objectives.map((objective, idx) => (
                    <li key={idx} className="text-fog">{objective}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-ash mb-2">KPIs:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {quarter.kpis.map((kpi, idx) => (
                    <li key={idx} className={`${quarterStyles[index].header}`}>{kpi}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Initiatives Sections */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {initiatives.map((initiative) => (
          <motion.div
            key={initiative.id}
            className={`glass-panel p-4 rounded-lg bg-gradient-to-br ${initiative.color} shadow-lg cursor-pointer border border-white/10 h-16 flex items-center justify-center`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedInitiative(initiative.id === selectedInitiative ? null : initiative.id)}
          >
            <h3 className="text-lg font-bold text-white">{initiative.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Selected Initiative Details */}
      {selectedInitiative && (
        <motion.div
          className="glass-medium p-6 rounded-lg shadow-lg border border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-bold text-fog mb-4">
            {initiatives.find(i => i.id === selectedInitiative)?.name}
          </h3>
          
          <div className="grid grid-cols-4 gap-6">
            {quarters.map((quarter, qIndex) => {
              // Get activities for this quarter and initiative type
              const activities = quarter.months.flatMap(month => 
                month.activities
                  .filter(activity => activity.type === selectedInitiative)
                  .map(activity => ({
                    ...activity,
                    month
                  }))
              );
              
              return (
                <div key={quarter.id} className="space-y-4">
                  <h4 className={`text-lg font-semibold ${quarterStyles[qIndex].header}`}>{quarter.id.toUpperCase()}</h4>
                  
                  {activities.length > 0 ? (
                    <div className="space-y-4">
                      {activities.map(({ month, ...activity }) => {
                        const styles = getCardStyles(activity.type, activity.status, quarter.id);
                        return (
                          <motion.div
                            key={activity.id}
                            className={`p-4 rounded-lg border ${styles.border} bg-gradient-to-br ${styles.bgGradient} min-h-[140px] flex flex-col`}
                            whileHover={{ scale: 1.02, x: 5 }}
                          >
                            <div className="font-medium text-white text-lg">{activity.title}</div>
                            {activity.description && (
                              <div className="text-sm text-white/80 mt-2 flex-grow">{activity.description}</div>
                            )}
                            <div className="text-xs text-white/70 mt-2 pt-1 border-t border-white/10">{month.name}</div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-4 rounded-lg border border-white/10 bg-white/5 text-center h-[140px] flex items-center justify-center">
                      <span className="text-ash">No activities planned</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Timeline; 