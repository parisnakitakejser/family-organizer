<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      This is the index pages - welcom!
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
  },
  middleware: [
    'auth'
  ]
}
</script>
