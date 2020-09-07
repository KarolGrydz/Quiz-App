export const initialState = {
  questions: [],
  TOTAL_QUESTIONS: 10,
  gameOver: true,
  userAnswers: [],
  score: 0,
  number: 0,
  test: 'test',
  loading: false,
  difficultLevel: 'easy',
  maxScore: localStorage.getItem('maxScore') || 0,
  end: false,
  category: null,
  errorHandler: false,
  pointArr: [
    {
      difficulty: 'easy',
      point: 1,
    },
    {
      difficulty: 'medium',
      point: 2,
    },
    {
      difficulty: 'hard',
      point: 3,
    },
  ],
};
