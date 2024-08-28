const initialState = {
    views: {}
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_VIEW_COUNT':
        const { id } = action.payload;
        return {
          ...state,
          views: {
            ...state.views,
            [id]: (state.views[id] || 0) + 1
          }
        };
      default:
        return state;
    }
  };
  
  export default blogReducer;
  