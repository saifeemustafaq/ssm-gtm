import React from 'react';
import { cn } from '../../lib/utils';

export interface MilestoneProps {
  title: string;
  date: string;
  status?: 'upcoming' | 'inProgress' | 'completed';
  description?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const statusStyles = {
  upcoming: 'border-gray-300 bg-white',
  inProgress: 'border-amethyst bg-amethyst/10',
  completed: 'border-emerald bg-emerald/10',
};

const statusIconStyles = {
  upcoming: 'text-gray-400',
  inProgress: 'text-amethyst',
  completed: 'text-emerald',
};

const variantStyles = {
  primary: 'border-amethyst',
  secondary: 'border-emerald',
};

export const Milestone = ({
  title,
  date,
  status = 'upcoming',
  description,
  className,
  variant = 'primary',
  onClick,
}: MilestoneProps) => {
  return (
    <div
      className={cn(
        'relative flex items-center gap-4 p-4 rounded-lg border-2',
        'transition-all duration-200 ease-in-out',
        onClick && 'cursor-pointer hover:shadow-md',
        statusStyles[status],
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        'flex-shrink-0 w-4 h-4 rounded-full border-4',
        variantStyles[variant],
        statusIconStyles[status]
      )} />
      
      <div className="flex-grow min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-semibold text-slate truncate">{title}</h4>
          <span className="flex-shrink-0 text-sm text-ash">{date}</span>
        </div>
        {description && (
          <p className="mt-1 text-sm text-ash line-clamp-2">{description}</p>
        )}
      </div>

      {status === 'completed' && (
        <svg
          className="flex-shrink-0 w-5 h-5 text-emerald"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  );
}; 