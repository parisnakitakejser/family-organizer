<template>
<div>
  <template v-for="n in this.amount">
    <h2 mb0>{{n}}# Adult</h2>

    <v-row :key="'adults-'+ n">
      <v-col cols="12" md="4">
        <v-text-field
          label="Name"
          hint="What is the full name?"
          type="text"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          label="Gender"
          hint="Select adult gender eg. female"
          :items="human.gender"
        ></v-select>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          label="Birthday"
          hint="When is the birthday"
          type="date"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          label="Relationship"
          hint="What is the relationship for this person?"
          :items="human.relationship"
        ></v-select>
      </v-col>

      <v-col cols="12" md="8">
        <v-text-field
          label="E-mail"
          hint="Family member will received mail with login info"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>
  </template>
</div>
</template>

<script>
  import human from '~/assets/javascript/human';

  export default {
      name: "adults",
      props: {
          amount: {
              default: 0,
              required: true
          }
      },
      data () {
          return {
              human: human
          }
      }
  }
</script>

<style scoped>

</style>
