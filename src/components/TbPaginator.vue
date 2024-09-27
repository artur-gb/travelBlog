<template>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

import keyboardDoubleArrowLeftRounded from "@iconify-icons/material-symbols/keyboard-double-arrow-left-rounded";
import chevronLeftRounded from "@iconify-icons/material-symbols/chevron-left-rounded";
import chevronRightRounded from "@iconify-icons/material-symbols/chevron-right-rounded";
import keyboardDoubleArrowRightRounded from "@iconify-icons/material-symbols/keyboard-double-arrow-right-rounded";
import { computed } from "vue";

const currentPage = ref(1);

const props = defineProps<{
  pageSize: number;
  totalRecords: number;
}>();

const emits = defineEmits<{
  (e: "onPageChange", value: number): void;
}>();

const totalPages = computed(() => {
  return Math.ceil(props.totalRecords / props.pageSize);
});
const changeCurrentPage = (newPage: number) => {
  currentPage.value = newPage;
};
</script>
