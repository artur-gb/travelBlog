<template>
  <div class="flex flex-col md:flex-row gap-2 items-center">
    <div class="flex flex-row gap-2">
      <button
        @click="changeCurrentPage(1)"
        class="flex items-center justify-center p-2 rounded-full text-amber-600 text-lg h-10 min-w-10"
      >
        <Icon :icon="keyboardDoubleArrowLeftRounded" />
      </button>
      <button
        v-if="currentPage > 1"
        @click="changeCurrentPage(currentPage - 1)"
        class="flex items-center justify-center p-2 rounded-full text-amber-600 text-lg h-10 min-w-10"
      >
        <Icon :icon="chevronLeftRounded" />
      </button>
      <button
        v-if="currentPage > 1"
        @click="changeCurrentPage(currentPage - 1)"
        class="flex items-center justify-center p-2 rounded-full text-amber-600 text-lg h-10 min-w-10"
      >
        {{ currentPage - 1 }}
      </button>
      <button
        @click="changeCurrentPage(currentPage)"
        class="flex items-center justify-center p-2 rounded-full text-amber-600 font-black text-lg h-10 min-w-10"
      >
        {{ currentPage }}
      </button>
      <button
        v-if="currentPage < totalPages"
        @click="changeCurrentPage(currentPage + 1)"
        class="flex items-center justify-center p-2 rounded-full text-amber-600 text-lg h-10 min-w-10"
      >
        {{ currentPage + 1 }}
      </button>
      <button
        v-if="currentPage < totalPages"
        @click="changeCurrentPage(currentPage + 1)"
        class="flex items-center justify-center p-2 rounded-full text-amber-600 text-lg h-10 min-w-10"
      >
        <Icon :icon="chevronRightRounded" />
      </button>
      <button
        @click="changeCurrentPage(totalPages)"
        class="flex items-center justify-center p-2 rounded-full text-amber-600 text-lg h-10 min-w-10"
      >
        <Icon :icon="keyboardDoubleArrowRightRounded" />
      </button>
    </div>
    <div>
      <select
        id="pageSelect"
        v-model="selectedPageSize"
        class="p-2 bg-transparent rounded-sm text-amber-600"
      >
        <option v-for="page in props.pageSizes" :key="page" :value="page">
          {{ page }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

import { Icon } from "@iconify/vue";
import keyboardDoubleArrowLeftRounded from "@iconify-icons/material-symbols/keyboard-double-arrow-left-rounded";
import chevronLeftRounded from "@iconify-icons/material-symbols/chevron-left-rounded";
import chevronRightRounded from "@iconify-icons/material-symbols/chevron-right-rounded";
import keyboardDoubleArrowRightRounded from "@iconify-icons/material-symbols/keyboard-double-arrow-right-rounded";

const currentPage = ref(1);

const props = defineProps<{
  pageSize: number;
  pageSizes: number[];
  totalRecords: number;
}>();

const emits = defineEmits<{
  (e: "onPageChange", value: number): void;
  (e: "onPageSizeChange", value: number): void;
}>();

const totalPages = computed(() => {
  return Math.ceil(props.totalRecords / props.pageSize);
});
const changeCurrentPage = (newPage: number) => {
  currentPage.value = newPage;
};

watch(currentPage, (val) => {
  emits("onPageChange", val);
});

const selectedPageSize = ref(props.pageSize);

watch(selectedPageSize, (val) => {
  if (val !== props.pageSize) emits("onPageSizeChange", val);
});
</script>
