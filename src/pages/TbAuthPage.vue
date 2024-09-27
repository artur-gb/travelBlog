<template>
  <div class="flex flex-col h-screen items-center justify-center gap-2">
    <form @submit.prevent="sendData" class="grid grid-cols-[auto_auto] items-center gap-2">
        <label for="email">Email:</label>
        <input
          type="email"
          v-model="email"
          required
          class="p-2 border rounded border-amber-600"
        />
        <label for="password">Password:</label>
        <input
          type="password"
          v-model="password"
          required
          class="p-2 border rounded border-amber-600"
        />
      <button type="submit" class="p-2 text-amber-600 col-span-2">Sign In</button>
    </form>
    <div class="text-red-500">{{ errorMessage ?? "&nbsp;" }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTravelBlogService } from "../services/useTravelBlogService";

import { useSessionStore } from "../stores/sessionStore";
import { useRouter } from "vue-router";
import { NamedRoutes } from "../routes/root";

const travelBlogService = useTravelBlogService();

const email = ref("");
const password = ref("");
const errorMessage = ref<string | null>(null);

const isSigningIn = ref(false);

const sessionStore = useSessionStore();
const router = useRouter();

const sendData = async () => {
  isSigningIn.value = true;
  try {
    await travelBlogService.signIn({
      email: email.value,
      password: password.value,
    });
    const user = await travelBlogService.getUser(2);
    sessionStore.setUser(user);
    router.push({
      name: NamedRoutes.MainPage,
    });
  } catch (err) {
    errorMessage.value = "Authorization error";
    console.error(err);
  }
  isSigningIn.value = false;
};
</script>
