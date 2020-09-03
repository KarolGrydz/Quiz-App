export const reducer = (draft: any, action: any) => {
  switch (action.type) {
    case 'setQuestions':
      draft.questions = action.payload;
      break;
    case 'changeValue':
      draft[action.name] = action.payload;
      break;
    default:
      return;
  }
};
