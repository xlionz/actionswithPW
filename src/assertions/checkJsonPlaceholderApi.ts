import { APIResponse, expect } from "@playwright/test";
import { PostPayload } from "../api/jsonPlaceholderApi";

type Post = PostPayload & { id: number };
type Comment = { postId: number };

export class CheckJsonPlaceholderApi {

    async checkPosts(response: APIResponse): Promise<void> {
        await expect(response).toBeOK();

        const posts = await response.json() as Post[];
        expect(posts).toHaveLength(100);
        expect(posts[0]).toMatchObject({ id: 1, userId: 1 });
    }

    async checkPost(response: APIResponse, postId: number): Promise<void> {
        await expect(response).toBeOK();

        const post = await response.json() as Post;
        expect(post).toMatchObject({ id: postId });
    }

    async checkCommentsForPost(response: APIResponse, postId: number): Promise<void> {
        await expect(response).toBeOK();

        const comments = await response.json() as Comment[];
        expect(comments.length).toBeGreaterThan(0);
        expect(comments.every(comment => comment.postId === postId)).toBeTruthy();
    }

    async checkCreatedPost(response: APIResponse, expectedPost: PostPayload): Promise<void> {
        expect(response.status()).toBe(201);

        const post = await response.json() as Post;
        expect(post).toMatchObject({
            userId: expectedPost.userId,
            title: expectedPost.title,
            body: expectedPost.body
        });
        expect(post.id).toBeGreaterThan(0);
    }

    async checkReplacedPost(response: APIResponse, postId: number, expectedPost: PostPayload): Promise<void> {
        await expect(response).toBeOK();

        const post = await response.json() as Post;
        expect(post).toMatchObject({ id: postId, ...expectedPost });
    }

    async checkPatchedPost(response: APIResponse, postId: number, expectedUpdate: Partial<PostPayload>): Promise<void> {
        await expect(response).toBeOK();

        const post = await response.json() as Partial<Post>;
        expect(post).toMatchObject({ id: postId, ...expectedUpdate });
    }

    async checkDeletedPost(response: APIResponse): Promise<void> {
        await expect(response).toBeOK();
        expect(await response.json()).toEqual({});
    }
}
