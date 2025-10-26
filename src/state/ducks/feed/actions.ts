

import feedContent, { FeedContent } from '../../../Data/feedContent';

// Action Types



export const FETCH_FEEDS_REQUEST = 'FETCH_FEEDS_REQUEST' as const;
export const FETCH_FEEDS_SUCCESS = 'FETCH_FEEDS_SUCCESS' as const;
export const FETCH_FEEDS_FAILURE = 'FETCH_FEEDS_FAILURE' as const;

export const ADD_NEW_POST_REQUEST = 'ADD_NEW_POST_REQUEST' as const;
export const ADD_NEW_POST_SUCCESS = 'ADD_NEW_POST_SUCCESS' as const;
export const ADD_NEW_POST_FAILURE = 'ADD_NEW_POST_FAILURE' as const;

export const LIKE_POST = 'LIKE_POST' as const;
export const COMMENT_POST = 'COMMENT_POST' as const;
export const SHARE_POST = 'SHARE_POST' as const;

export const SET_NEW_POST_CONTENT = 'SET_NEW_POST_CONTENT' as const;
export const SET_NEW_POST_EMOJI = 'SET_NEW_POST_EMOJI' as const;
export const CLEAR_NEW_POST = 'CLEAR_NEW_POST' as const;

// Types
export interface FeedPost {
  id: string;
  name: string;
  profile_pic: string | null;
  created_at: number;
  emoji_type: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
}

export interface NewPost {
  content: string;
  emoji_type: string;
}

export interface FeedState {
  posts: FeedPost[];
  loading: boolean;
  error: string | null;
  newPost: NewPost;
}

// Action Types
export type FetchFeedsRequestAction = {
  type: typeof FETCH_FEEDS_REQUEST;
};

export type FetchFeedsSuccessAction = {
  type: typeof FETCH_FEEDS_SUCCESS;
  payload: FeedPost[];
};

export type FetchFeedsFailureAction = {
  type: typeof FETCH_FEEDS_FAILURE;
  payload: string;
};

export type AddNewPostRequestAction = {
  type: typeof ADD_NEW_POST_REQUEST;
  payload: NewPost;
};

export type AddNewPostSuccessAction = {
  type: typeof ADD_NEW_POST_SUCCESS;
  payload: FeedPost;
};

export type AddNewPostFailureAction = {
  type: typeof ADD_NEW_POST_FAILURE;
  payload: string;
};

export type LikePostAction = {
  type: typeof LIKE_POST;
  payload: string;
};

export type CommentPostAction = {
  type: typeof COMMENT_POST;
  payload: string;
};

export type SharePostAction = {
  type: typeof SHARE_POST;
  payload: string;
};

export type SetNewPostContentAction = {
  type: typeof SET_NEW_POST_CONTENT;
  payload: string;
};

export type SetNewPostEmojiAction = {
  type: typeof SET_NEW_POST_EMOJI;
  payload: string;
};

export type ClearNewPostAction = {
  type: typeof CLEAR_NEW_POST;
};

export type FeedActionTypes = 
  | FetchFeedsRequestAction
  | FetchFeedsSuccessAction
  | FetchFeedsFailureAction
  | AddNewPostRequestAction
  | AddNewPostSuccessAction
  | AddNewPostFailureAction
  | LikePostAction
  | CommentPostAction
  | SharePostAction
  | SetNewPostContentAction
  | SetNewPostEmojiAction
  | ClearNewPostAction;

// Action Creators
export const fetchFeedsRequest = (): FetchFeedsRequestAction => ({
  type: FETCH_FEEDS_REQUEST
});

export const fetchFeedsSuccess = (feeds: FeedPost[]): FetchFeedsSuccessAction => ({
  type: FETCH_FEEDS_SUCCESS,
  payload: feeds
});

export const fetchFeedsFailure = (error: string): FetchFeedsFailureAction => ({
  type: FETCH_FEEDS_FAILURE,
  payload: error
});

export const addNewPostRequest = (postData: any): AddNewPostRequestAction => ({
  type: ADD_NEW_POST_REQUEST,
  payload: postData
});

export const addNewPostSuccess = (post: any): AddNewPostSuccessAction => ({
  type: ADD_NEW_POST_SUCCESS,
  payload: post
});

export const addNewPostFailure = (error: string): AddNewPostFailureAction => ({
  type: ADD_NEW_POST_FAILURE,
  payload: error
});


// Async Action Creator (Thunk)
export const fetchFeeds = () => {
  return async (dispatch: any) => {
    dispatch(fetchFeedsRequest());
    try {
      // Simulate API call with 2-second delay using static data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Import static data
      dispatch(fetchFeedsSuccess(feedContent as FeedPost[]));
    } catch (error: any) {
      dispatch(fetchFeedsFailure(error.message));
    }
  };
};

export const addNewPost = (postData: FeedContent) => {
  return async (dispatch: any) => {
    dispatch(addNewPostRequest(postData));
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        dispatch(fetchFeedsSuccess(feedContent as FeedPost[]));
      // Add new post to the beginning of feedContent
      feedContent.unshift(postData);
      dispatch(addNewPostSuccess({}));
       dispatch(fetchFeeds());
    } catch (error: any) {
      dispatch(addNewPostFailure(error.message));
    }
  };
};
