<template>
  <div class="bg-neutral-50 px-4 md:px-8 lg:px-16">
    <tb-header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import TbHeader from "./components/TbHeader.vue";
import { useSessionStore } from "./stores/sessionStore";
import { NamedRoutes } from "./routes/root";

const router = useRouter();

const sessionStore = useSessionStore();

const redirectToAuth = () => {
  router.beforeEach(async (to, _) => {
    if (!sessionStore.isAuthorized && to.name !== NamedRoutes.AuthPage) {
      return { name: NamedRoutes.AuthPage };
    }
  });
};

onMounted(redirectToAuth);
</script>

<style scoped></style>
