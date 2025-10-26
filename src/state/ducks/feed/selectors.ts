import { RootState } from '../root-reducer';
import { FeedPost } from './actions';

// Selectors for feed state
export const getFeeds = (state: RootState): FeedPost[] => state.feed.posts;
export const getFeedsLoading = (state: RootState): boolean => state.feed.loading;
export const getFeedsError = (state: RootState): string | null => state.feed.error;
export const getNewPost = (state: RootState) => state.feed.newPost;
export const getNewPostContent = (state: RootState): string => state.feed.newPost.content;
export const getNewPostEmoji = (state: RootState): string => state.feed.newPost.emoji_type;

