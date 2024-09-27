<template>
  <tb-loader />
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
    <div
      v-for="post in posts"
      class="flex flex-col border shadow-lg gap-2 bg-white rounded p-4 w-full"
    >
      <div class="flex justify-between items-center pt-4 border-b">
        <span class="text-amber-600 font-medium">{{ post.title }}</span>
      </div>
      <span class="text-lg">{{ post.body }}</span>
    </div>
  </div>
  <tb-paginator
    :page-size="pagination.pageSize"
    :total-records="pagination.totalRecords"
  />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

import TbLoader from "../components/TbLoader.vue";
import TbPaginator from "../components/TbPaginator.vue";

import { Post } from "../entities/Post";
import { useTravelBlogService } from "../services/useTravelBlogService";

const travelBlogService = useTravelBlogService();

const posts = ref<Post[]>([]);

const isFeedLoading = ref(false);

const fetchFeed = async () => {
  isFeedLoading.value = true;
  try {
    const result = await travelBlogService.listPosts({
      pageSize: pagination.pageSize,
      page: pagination.page as number,
      keywords: searchKeywords.value,
    });
    posts.value = result;
  } catch (error) {
    posts.value = [];
  }
  isFeedLoading.value = false;
};

onMounted(fetchFeed);

const pagination = reactive({
  page: 1,
  pageSize: 10,
  pageSizes: [10, 50, 100],
  totalRecords: 100,
  onUpdatePageSize: (val: number) => {
    pagination.pageSize = val;
  },
  onUpdatePage: (val: { page: number }) => {
    pagination.page = val.page + 1;
  },
});

watch(() => pagination.page, fetchFeed);
watch(() => pagination.pageSize, fetchFeed);

const searchKeywords = ref("");
</script>

<style scoped></style>
