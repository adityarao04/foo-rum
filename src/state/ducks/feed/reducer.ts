import {
  FETCH_FEEDS_REQUEST,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
  ADD_NEW_POST_REQUEST,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAILURE,
  FeedState,
  FeedActionTypes
} from './actions';

// Initial State
const initialState: FeedState = {
  posts: [],
  loading: false,
  error: null,
  newPost: {
    content: '',
    emoji_type: 'smiling_face'
  }
};

// Reducer
const feedReducer = (state: FeedState = initialState, action: FeedActionTypes): FeedState => {
  switch (action.type) {
    case FETCH_FEEDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null
      };

    case FETCH_FEEDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ADD_NEW_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts],
        newPost: {
          content: '',
          emoji_type: 'smiling_face'
        },
        error: null
      };

    case ADD_NEW_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default feedReducer;
