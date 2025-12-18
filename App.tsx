
import React, { useState, useMemo, useEffect } from 'react';
import { COBIT_FLASHCARDS } from './data';
import { Flashcard, Difficulty } from './types';
import { FlashcardComponent } from './components/FlashcardComponent';
import { ProgressBar } from './components/ProgressBar';

const App: React.FC = () => {
  const [cards, setCards] = useState<Flashcard[]>(() => {
    const saved = localStorage.getItem('cobit-cards-progress');
    return saved ? JSON.parse(saved) : COBIT_FLASHCARDS;
  });

  const [chapterFilter, setChapterFilter] = useState<string>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('cobit-cards-progress', JSON.stringify(cards));
  }, [cards]);

  const chapters = useMemo(() => {
    const set = new Set(COBIT_FLASHCARDS.map(c => c.chapter));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredCards = useMemo(() => {
    let result = cards;
    if (chapterFilter !== 'All') {
      result = result.filter(c => c.chapter === chapterFilter);
    }
    if (difficultyFilter !== 'All') {
      result = result.filter(c => c.difficulty === difficultyFilter);
    }
    return result;
  }, [cards, chapterFilter, difficultyFilter]);

  // Reset index if filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [chapterFilter, difficultyFilter]);

  const handleRate = (id: string, difficulty: Difficulty) => {
    setCards(prev => prev.map(c => c.id === id ? { ...c, difficulty } : c));
  };

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const stats = useMemo(() => {
      const easy = cards.filter(c => c.difficulty === 'Easy').length;
      const medium = cards.filter(c => c.difficulty === 'Medium').length;
      const hard = cards.filter(c => c.difficulty === 'Hard').length;
      const unrated = cards.filter(c => c.difficulty === 'Unrated').length;
      return { easy, medium, hard, unrated };
  }, [cards]);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">COBIT 2019 Foundation</h1>
          </div>
          
          <div className="flex gap-4 text-xs sm:text-sm font-medium">
             <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-gray-600">Easy: {stats.easy}</span>
             </div>
             <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="text-gray-600">Med: {stats.medium}</span>
             </div>
             <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="text-gray-600">Hard: {stats.hard}</span>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Study Filters</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">By Chapter</label>
                <select 
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  value={chapterFilter}
                  onChange={(e) => setChapterFilter(e.target.value)}
                >
                  {chapters.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">By Difficulty</label>
                <select 
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                  <option value="All">All Cards</option>
                  <option value="Unrated">New / Unrated</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
          </section>

          <div className="hidden lg:block bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-lg mb-2">Exam Tips</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Remember the Outcomes: Benefits realization, Risk optimization, Resource optimization.
            </p>
            <p className="text-sm text-blue-100 mt-4 font-semibold italic">
              "One size does not fit all" — tailoring is key!
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {filteredCards.length > 0 ? (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[500px] flex flex-col">
              <ProgressBar current={currentIndex + 1} total={filteredCards.length} />
              
              <div className="flex-grow flex items-center justify-center">
                <FlashcardComponent 
                  card={filteredCards[currentIndex]}
                  onRate={handleRate}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  isFirst={currentIndex === 0}
                  isLast={currentIndex === filteredCards.length - 1}
                />
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 text-center text-gray-400 text-sm">
                Shortcuts: Click card to flip • Press Easy/Medium/Hard to rate and move next
              </div>
            </div>
          ) : (
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="text-3xl">📭</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No matching cards</h2>
              <p className="text-gray-500 mb-6">Try adjusting your filters to find cards to study.</p>
              <button 
                onClick={() => { setChapterFilter('All'); setDifficultyFilter('All'); }}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
