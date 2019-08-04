<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list class="pt-0" dense>
        <v-list-item two-line>
          <v-list-item-avatar color="grey lighten-4">
<!--            <img src="https://randomuser.me/api/portraits/men/81.jpg" />-->
            <span class="black--text">PNK</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Paris Nakita Kejser</v-list-item-title>
            <v-list-item-subtitle>Parent</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      fixed
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home-heart',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-calendar-month',
          title: 'Calendar',
          to: '/calendar'
        },
        {
          icon: 'mdi-food-apple-outline',
          title: 'Food plan',
          to: '/food-plan'
        },
        {
          icon: 'mdi-cart-outline',
          title: 'Shopping list',
          to: '/shopping-list'
        },
        {
          icon: 'mdi-account-group',
          title: 'Family members',
          to: '/family-members'
        }
      ],
      title: 'Vuetify.js'
    }
  }
}
</script>
