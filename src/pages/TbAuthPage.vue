<template>
  <div>
    <form @submit.prevent="sendData">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
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
    errorMessage.value = 'Authorization error';
    console.error(err);
  }
  isSigningIn.value = false;
};
</script>
