import React from 'react';
import { cn } from '../../lib/utils';
import { KPIIndicator } from '../ui/KPIIndicator';
import { ProgressBar } from '../ui/ProgressBar';

export interface KPIWidgetProps {
  title: string;
  currentValue: number;
  targetValue: number;
  unit?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    percentage: number;
  };
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const KPIWidget = ({
  title,
  currentValue,
  targetValue,
  unit = '',
  trend,
  className,
  variant = 'primary',
}: KPIWidgetProps) => {
  const progress = (currentValue / targetValue) * 100;
  
  return (
    <div className={cn(
      'p-4 rounded-xl glass-panel',
      className
    )}>
      <KPIIndicator
        label={title}
        value={`${currentValue}${unit}`}
        trend={trend}
        variant={variant}
      />
      <div className="mt-4">
        <div className="flex justify-between text-sm text-ash mb-2">
          <span>Progress</span>
          <span>{`${currentValue}/${targetValue}${unit}`}</span>
        </div>
        <ProgressBar
          progress={progress}
          variant={variant}
          size="sm"
          animate
        />
      </div>
    </div>
  );
}; 