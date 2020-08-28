export const reducer = (draft: any, action: any) => {
  switch (action.type) {
    case 'setLoading':
      {
        draft.loading = action.payload;
      }
      break;
    default:
      return;
  }
};
