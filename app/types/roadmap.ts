export type ActivityType = 'b2c' | 'b2b' | 'marketing' | 'product';
export type ActivityStatus = 'planned' | 'in-progress' | 'completed';

export interface Activity {
  id: string;
  title: string;
  type: ActivityType;
  status: ActivityStatus;
  description?: string;
  kpis?: string[];
  dependencies?: string[];
}

export interface Month {
  id: string;
  name: string;
  activities: Activity[];
}

export interface Quarter {
  id: string;
  name: string;
  months: Month[];
  objectives: string[];
  kpis: string[];
}

export interface RoadmapData {
  quarters: Quarter[];
} 