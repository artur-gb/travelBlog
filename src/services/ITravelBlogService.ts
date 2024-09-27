import { InjectionKey } from "vue";

import { Post } from "../entities/Post";
import { User } from "../entities/User";
// import { AuthResponse } from "../entities/AuthResponse";

export interface ITravelBlogService {
  signIn(query: AuthRequestDto): Promise<{ token: string }>;
  getUser(userId: number): Promise<User>;
  listPosts(query: PostsQueryRequestDto): Promise<Post[]>;
}

export const ITravelBlogServiceKey =
  Symbol() as InjectionKey<ITravelBlogService>;

export type PostsQueryRequestDto = {
  pageSize?: number;
  page?: number;
  keywords?: string;
};
export type AuthRequestDto = {
  email: string;
  password: string;
};
