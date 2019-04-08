const initialState = {
  image: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_IMAGE":
      return {
        ...state
      };
      break;
    case "SAVE_IMAGE":
      return {
        ...state,
        data: action.image
      };
      break;
    default:
      return { ...state };
  }
}
