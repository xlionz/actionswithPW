import { APIRequestContext, APIResponse } from "@playwright/test";

export interface PostPayload {
    userId: number;
    title: string;
    body: string;
}

export class JsonPlaceholderApi {

    private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private readonly request: APIRequestContext) {}

    async getPosts(): Promise<APIResponse> {
        return this.request.get(`${this.baseUrl}/posts`);
    }

    async getPost(postId: number): Promise<APIResponse> {
        return this.request.get(`${this.baseUrl}/posts/${postId}`);
    }

    async getPostComments(postId: number): Promise<APIResponse> {
        return this.request.get(`${this.baseUrl}/posts/${postId}/comments`);
    }

    async getCommentsByPostId(postId: number): Promise<APIResponse> {
        return this.request.get(`${this.baseUrl}/comments`, { params: { postId } });
    }

    async createPost(post: PostPayload): Promise<APIResponse> {
        return this.request.post(`${this.baseUrl}/posts`, { data: post });
    }

    async replacePost(postId: number, post: PostPayload): Promise<APIResponse> {
        return this.request.put(`${this.baseUrl}/posts/${postId}`, { data: post });
    }

    async updatePost(postId: number, post: Partial<PostPayload>): Promise<APIResponse> {
        return this.request.patch(`${this.baseUrl}/posts/${postId}`, { data: post });
    }

    async deletePost(postId: number): Promise<APIResponse> {
        return this.request.delete(`${this.baseUrl}/posts/${postId}`);
    }
}
