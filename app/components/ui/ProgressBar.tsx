import React from 'react';
import { cn } from '../../lib/utils';

export interface ProgressBarProps {
  progress: number; // 0 to 100
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  animate?: boolean;
}

const variantStyles = {
  primary: 'bg-amethyst',
  secondary: 'bg-emerald',
  success: 'bg-emerald',
  warning: 'bg-icy-teal',
  danger: 'bg-rose-quartz',
};

const backgroundStyles = {
  primary: 'bg-amethyst/10',
  secondary: 'bg-emerald/10',
  success: 'bg-emerald/10',
  warning: 'bg-icy-teal/10',
  danger: 'bg-rose-quartz/10',
};

const sizeStyles = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

export const ProgressBar = ({
  progress,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  className,
  animate = true,
}: ProgressBarProps) => {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn('w-full', className)}>
      <div className={cn(
        'w-full rounded-full overflow-hidden',
        sizeStyles[size],
        backgroundStyles[variant]
      )}>
        <div
          className={cn(
            'h-full rounded-full',
            variantStyles[variant],
            animate && 'transition-all duration-500 ease-in-out'
          )}
          style={{ width: `${normalizedProgress}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-sm text-ash font-medium">
          {normalizedProgress}%
        </div>
      )}
    </div>
  );
}; 