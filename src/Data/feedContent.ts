
// TODO: add this in global types file
export type FeedContent = {
    id: string;
    name: string;
    profile_pic?: string | null;
    created_at: number;
    emoji_type?: string;
    content: string;
    likes: number;
    comments: number;
    shares: number;
}




const feedContent: FeedContent[] = [
    {
      "id": "post-12345",
      "name": "Theresa Webb",
      "profile_pic": null,
      "created_at": Date.now() + (5 * 60 * 1000),
      "emoji_type": "winking_face_with_tongue",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "likes": 0,
      "comments": 0,
      "shares": 0
    },
    {
      "id": "post-12346",
      "name": "John Doe",
      "profile_pic": null,
      "created_at": Date.now() + (10 * 60 * 1000),
      "emoji_type": "confused_face",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "likes": 5,
      "comments": 2,
      "shares": 1
    },
    {
      "id": "post-12347",
      "name": "Jane Smith",
      "profile_pic": null,
      "created_at": Date.now() - (24 * 60 * 60 * 1000),
      "emoji_type": "thinking_face",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.",
      "likes": 12,
      "comments": 8,
      "shares": 3
    },
    {
      "id": "post-12348",
      "name": "Mike Johnson",
      "profile_pic": null,
      "created_at": Date.now() - (3 * 24 * 60 * 60 * 1000),
      "emoji_type": "smiling_face",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      "likes": 7,
      "comments": 4,
      "shares": 2
    },
    {
      "id": "post-12349",
      "name": "Sarah Wilson",
      "profile_pic": null,
      "created_at": Date.now() - (7 * 24 * 60 * 60 * 1000),
      "emoji_type": "neutral_face",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
      "likes": 3,
      "comments": 1,
      "shares": 0
    }
  ]

  export default feedContent;