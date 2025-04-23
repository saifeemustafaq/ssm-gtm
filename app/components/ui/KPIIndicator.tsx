import React from 'react';
import { cn } from '../../lib/utils';

export interface KPIIndicatorProps {
  label: string;
  value: string | number;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    percentage: number;
  };
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const variantStyles = {
  primary: 'bg-blue-50 text-blue-700',
  secondary: 'bg-gray-50 text-gray-700',
  success: 'bg-green-50 text-green-700',
  warning: 'bg-yellow-50 text-yellow-700',
  danger: 'bg-red-50 text-red-700',
};

const sizeStyles = {
  sm: 'text-sm p-2',
  md: 'text-base p-3',
  lg: 'text-lg p-4',
};

export const KPIIndicator = ({
  label,
  value,
  trend,
  className,
  size = 'md',
  variant = 'primary',
}: KPIIndicatorProps) => {
  return (
    <div
      className={cn(
        'rounded-lg shadow-sm',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">{label}</p>
          <p className={cn('font-semibold', {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
          })}>{value}</p>
        </div>
        {trend && (
          <div className={cn(
            'flex items-center space-x-1',
            trend.direction === 'up' ? 'text-green-600' : 
            trend.direction === 'down' ? 'text-red-600' : 
            'text-gray-600'
          )}>
            {trend.direction === 'up' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            )}
            {trend.direction === 'down' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
            <span className="font-medium">{trend.percentage}%</span>
          </div>
        )}
      </div>
    </div>
  );
}; 