
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Unrated';

export interface Flashcard {
  id: string;
  chapter: string;
  front: string;
  back: string;
  difficulty: Difficulty;
}

export interface StudySession {
  chapterFilter: string | 'All';
  difficultyFilter: Difficulty | 'All';
  currentIndex: number;
}
