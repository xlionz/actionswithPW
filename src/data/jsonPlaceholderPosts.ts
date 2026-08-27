import { PostPayload } from "../api/jsonPlaceholderApi";

export const newPost: PostPayload = {
    userId: 1,
    title: 'New API post',
    body: 'Created by the Playwright API test suite.'
};

export const replacementPost: PostPayload = {
    userId: 1,
    title: 'Replacement API post',
    body: 'Replaced by the Playwright API test suite.'
};

export const postTitleUpdate = {
    title: 'Updated API post title'
};
