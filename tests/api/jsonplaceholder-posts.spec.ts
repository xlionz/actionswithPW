import { test } from "@playwright/test";
import type { APIRequestContext } from "@playwright/test";
import { CheckJsonPlaceholderApi } from "../../src/assertions/checkJsonPlaceholderApi";
import { JsonPlaceholderApi } from "../../src/api/jsonPlaceholderApi";
import { newPost, postTitleUpdate, replacementPost } from "../../src/data/jsonPlaceholderPosts";

function createApiDependencies(request: APIRequestContext) {
    return {
        api: new JsonPlaceholderApi(request),
        checkJsonPlaceholderApi: new CheckJsonPlaceholderApi()
    };
}

async function getAllPosts(request: APIRequestContext): Promise<void> {
    const { api, checkJsonPlaceholderApi } = createApiDependencies(request);

    await test.step('When the client requests all posts', async () => {
        const response = await api.getPosts();

        await checkJsonPlaceholderApi.checkPosts(response);
    });
}

async function getPost(request: APIRequestContext): Promise<void> {
    const { api, checkJsonPlaceholderApi } = createApiDependencies(request);

    await test.step('When the client requests post 1', async () => {
        const response = await api.getPost(1);

        await checkJsonPlaceholderApi.checkPost(response, 1);
    });
}

async function getPostComments(request: APIRequestContext): Promise<void> {
    const { api, checkJsonPlaceholderApi } = createApiDependencies(request);

    await test.step('When the client requests the comments for post 1', async () => {
        const response = await api.getPostComments(1);

        await checkJsonPlaceholderApi.checkCommentsForPost(response, 1);
    });
}

async function getCommentsByPostId(request: APIRequestContext): Promise<void> {
    const { api, checkJsonPlaceholderApi } = createApiDependencies(request);

    await test.step('When the client requests comments filtered by postId 1', async () => {
        const response = await api.getCommentsByPostId(1);

        await checkJsonPlaceholderApi.checkCommentsForPost(response, 1);
    });
}

async function createPost(request: APIRequestContext): Promise<void> {
    const { api, checkJsonPlaceholderApi } = createApiDependencies(request);

    await test.step('When the client creates a post', async () => {
        const response = await api.createPost(newPost);

        await checkJsonPlaceholderApi.checkCreatedPost(response, newPost);
    });
}

async function replacePost(request: APIRequestContext): Promise<void> {
    const { api, checkJsonPlaceholderApi } = createApiDependencies(request);

    await test.step('When the client replaces post 1', async () => {
        const response = await api.replacePost(1, replacementPost);

        await checkJsonPlaceholderApi.checkReplacedPost(response, 1, replacementPost);
    });
}

async function updatePost(request: APIRequestContext): Promise<void> {
    const { api, checkJsonPlaceholderApi } = createApiDependencies(request);

    await test.step('When the client updates post 1', async () => {
        const response = await api.updatePost(1, postTitleUpdate);

        await checkJsonPlaceholderApi.checkPatchedPost(response, 1, postTitleUpdate);
    });
}

async function deletePost(request: APIRequestContext): Promise<void> {
    const { api, checkJsonPlaceholderApi } = createApiDependencies(request);

    await test.step('When the client deletes post 1', async () => {
        const response = await api.deletePost(1);

        await checkJsonPlaceholderApi.checkDeletedPost(response);
    });
}

test.describe('JSONPlaceholder posts API @api @regression', () => {
    test('Gets all posts', async ({ request }) => {
        await getAllPosts(request);
    });

    test('Gets post 1', async ({ request }) => {
        await getPost(request);
    });

    test('Gets the comments for post 1', async ({ request }) => {
        await getPostComments(request);
    });

    test('Gets comments filtered by postId', async ({ request }) => {
        await getCommentsByPostId(request);
    });

    test('Creates a post', async ({ request }) => {
        await createPost(request);
    });

    test('Replaces post 1', async ({ request }) => {
        await replacePost(request);
    });

    test('Updates post 1', async ({ request }) => {
        await updatePost(request);
    });

    test('Deletes post 1', async ({ request }) => {
        await deletePost(request);
    });
});
