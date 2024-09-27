<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <img :src="sessionStore.user?.data.avatar" class="rounded-full" />
    <div class="flex gap-2">
      <span class="text-3xl"> {{ sessionStore.user?.data.first_name }}</span>
      <span class="text-3xl text-amber-600">
        {{ sessionStore.user?.data.last_name }}</span
      >
    </div>
    <span class="italic">
      {{ sessionStore.user?.data.email }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from "../stores/sessionStore";
const sessionStore = useSessionStore();
</script>

<style scoped></style>
