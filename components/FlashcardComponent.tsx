
import React, { useState, useEffect } from 'react';
import { Flashcard, Difficulty } from '../types';

interface FlashcardComponentProps {
  card: Flashcard;
  onRate: (id: string, difficulty: Difficulty) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const FlashcardComponent: React.FC<FlashcardComponentProps> = ({ 
  card, onRate, onNext, onPrev, isFirst, isLast 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [card.id]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleRate = (difficulty: Difficulty) => {
    onRate(card.id, difficulty);
    if (!isLast) onNext();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto space-y-8">
      {/* Chapter Tag */}
      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
        {card.chapter}
      </div>

      {/* Card Body */}
      <div 
        className="perspective-1000 w-full h-80 cursor-pointer"
        onClick={handleFlip}
      >
        <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white border-2 border-gray-100 shadow-xl rounded-2xl flex items-center justify-center p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 leading-snug">
              {card.front}
            </h3>
            <div className="absolute bottom-4 text-xs text-gray-400">Click to reveal answer</div>
          </div>

          {/* Back */}
          <div 
            className="absolute w-full h-full backface-hidden bg-blue-50 border-2 border-blue-200 shadow-xl rounded-2xl flex items-center justify-center p-8 text-center"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {card.back}
            </p>
            <div className="absolute bottom-4 text-xs text-gray-400">Click to hide answer</div>
          </div>
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="w-full space-y-6">
        <div className="flex justify-between items-center w-full">
          <button 
            onClick={onPrev}
            disabled={isFirst}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isFirst ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            &larr; Previous
          </button>
          
          <div className="flex gap-2">
            {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((d) => (
              <button
                key={d}
                onClick={(e) => {
                    e.stopPropagation();
                    handleRate(d);
                }}
                className={`px-6 py-2 rounded-xl text-white font-semibold transition-transform active:scale-95 shadow-md
                  ${d === 'Easy' ? 'bg-green-500 hover:bg-green-600' : ''}
                  ${d === 'Medium' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
                  ${d === 'Hard' ? 'bg-red-500 hover:bg-red-600' : ''}
                  ${card.difficulty === d ? 'ring-4 ring-offset-2 ring-gray-400' : ''}
                `}
              >
                {d}
              </button>
            ))}
          </div>

          <button 
            onClick={onNext}
            disabled={isLast}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isLast ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Next &rarr;
          </button>
        </div>
        
        {card.difficulty !== 'Unrated' && (
            <p className="text-center text-sm text-gray-500">
                Currently marked as: <span className="font-bold">{card.difficulty}</span>
            </p>
        )}
      </div>
    </div>
  );
};
