<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
interface MyCustomParsedContent extends ParsedContent {
  title: string;
  description: string;
}

// genre
const genres: string[] = ["flutter"];

// genre毎にPost持ってくる
const { data: posts } = await useAsyncData<MyCustomParsedContent[]>(
  "posts",
  () => queryContent<MyCustomParsedContent>("flutter").find()
);
</script>

<template>
  <v-list>
    <v-list-item v-for="post in posts" :key="post._id">
      <v-card>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-subtitle>{{ post.description }}</v-card-subtitle>
        <v-card-actions>
          <v-btn variant="outlined" :to="post._path"> 詳しくはこちら </v-btn>
        </v-card-actions>
      </v-card>
    </v-list-item>
  </v-list>
</template>
