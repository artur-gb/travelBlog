<template>
  <div class="px-4 md:px-8 lg:px-16">
    <tb-header v-if="showHeader" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import TbHeader from "./components/TbHeader.vue";
import { useSessionStore } from "./stores/sessionStore";
import { NamedRoutes } from "./routes/root";

const router = useRouter();
const route = useRoute();

const sessionStore = useSessionStore();

const redirectToAuth = () => {
  router.beforeEach(async (to, _) => {
    if (!sessionStore.isAuthorized && to.name !== NamedRoutes.AuthPage) {
      return { name: NamedRoutes.AuthPage };
    }
  });
};

const showHeader = computed(() => {
  return (
    route.name === NamedRoutes.MainPage || route.name === NamedRoutes.PostsPage
  );
});

onMounted(redirectToAuth);
</script>

<style scoped></style>
