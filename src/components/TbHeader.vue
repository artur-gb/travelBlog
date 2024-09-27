<template>
  <div
    class="flex gap-2 justify-end items-center sticky top-0 p-4"
  >
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
        name: NamedRoutes.ContactsPage,
      }"
    >
      <button class="flex items-center text-xl p-4 gap-2 text-amber-600">
        <span>Contacts</span>
      </button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NamedRoutes } from "../routes/root";
</script>

<style scoped></style>
