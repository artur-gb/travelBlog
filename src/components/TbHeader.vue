<template>
  <div class="flex gap-2 justify-end items-center sticky top-0 p-4">
    <router-link
      :to="{
        name: NamedRoutes.MainPage,
      }"
    >
      <button class="flex items-center text-xl p-4 gap-2 text-amber-600">
        <span>Main</span>
      </button>
    </router-link>
    <router-link
      :to="{
        name: NamedRoutes.PostsPage,
      }"
    >
      <button class="flex items-center text-xl p-4 gap-2 text-amber-600">
        <span>Posts</span>
      </button>
    </router-link>
    <router-link
      :to="{
        name: NamedRoutes.AuthPage,
      }"
    >
      <button
        @click="signOut"
        class="flex items-center text-xl p-4 gap-2 text-amber-600"
      >
        <Icon :icon="logoutRounded" />
      </button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import logoutRounded from "@iconify-icons/material-symbols/logout-rounded";

import { RouterLink } from "vue-router";
import { NamedRoutes } from "../routes/root";
import { useSessionStore } from "../stores/sessionStore";

const sessionStore = useSessionStore();

// Sign Out
const signOut = async () => {
  sessionStore.setUser(undefined);
};
</script>

<style scoped></style>
