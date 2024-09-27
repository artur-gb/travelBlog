import { AuthResponse } from "../entities/AuthResponse";
import { Post } from "../entities/Post";
import { User } from "../entities/User";
import {
  PostsQueryRequestDto,
  ITravelBlogService,
  AuthRequestDto,
} from "./ITravelBlogService";

export class ApiTravelBlogService implements ITravelBlogService {
  async signIn(query: AuthRequestDto): Promise<{ token: string }> {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    if (response.status !== 200) {
      throw new Error(`Auth error`);
    }

    return (await response.json()) as AuthResponse;
  }

  async getUser(userId: number): Promise<User> {
    const response = await fetch(`https://reqres.in/api/users/${userId}`, {
      // headers: {
      //   'Authorization': `Bearer ${token}`,
      // },
    });

    if (response.status !== 200) {
      throw new Error(`Get user error`);
    }

    return (await response.json()) as User;
  }

  async listPosts(query: PostsQueryRequestDto): Promise<Post[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${query.keywords}&_page=${query.page}&_limit=${query.pageSize}`
    );

    if (response.status !== 200) {
      throw new Error(`Post list query error`);
    }

    return (await response.json()) as Post[];
  }
}
