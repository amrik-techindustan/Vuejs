<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="openSearchField">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 50px"> </v-container>
      </v-sheet>
    </v-card>
    <br />

    <v-card class="mx-auto" height="850" width="300">
      <v-navigation-drawer
        absolute
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        width="100%"
        permanent
      >
        <v-list>
          <v-list-item v-for="([icon, text], i) in items" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<script>
import Appbar from "../components/Appbar";
export default {
  components: Appbar,
  data: () => ({
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),

  methods: {
    openSearchField() {
      return <v-text-field></v-text-field>;
    },
  },
};
</script>