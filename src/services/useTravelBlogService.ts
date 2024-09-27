import { inject } from "vue";
import { ITravelBlogService, ITravelBlogServiceKey } from "./ITravelBlogService";

export const useTravelBlogService = () => {
  return inject(ITravelBlogServiceKey) as ITravelBlogService;
};