<template>
  <div>
    <v-app>
      <v-app-bar color="blue-grey-darken-2" density="compact">
        <v-app-bar-title>
          <nuxt-link to="/" class="text-decoration-none"
            >atabata site</nuxt-link
          >
        </v-app-bar-title>
      </v-app-bar>
      <v-main>
        <slot />
      </v-main>
    </v-app>
  </div>
</template>
