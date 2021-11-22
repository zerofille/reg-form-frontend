import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const newHeroes = [...state.heroes, action.payload];
      const newState = {
        ...state,
        isLoading: false,
        heroes: newHeroes,
      };
      return newState;
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
