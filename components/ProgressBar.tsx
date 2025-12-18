
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total === 0 ? 0 : Math.round((current / total) * 100);
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>Progress</span>
        <span>{current} of {total} ({percentage}%)</span>
      </div>
    </div>
  );
};
