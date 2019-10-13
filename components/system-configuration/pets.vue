<template>
<div>
  <template v-for="n in this.amount">
    <h2 mb0>{{n}}# Pet</h2>

    <v-row :key="'pets-'+ n">
      <v-col cols="12" md="4">
        <v-text-field
          label="Name"
          hint="What are you pets name"
          type="text"
          :rules="validation.pet.name"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="Which pet?"
          hint="Select the pet eg. dog or cat"
          :items="pet.type"
          :rules="validation.pet.type"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="Gender"
          hint="Do you know the gender of you pet?"
          :items="pet.gender"
          :rules="validation.gender"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          label="Birthday"
          hint="When have you pet birthday"
          type="date"
          :rules="validation.birthday"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>
  </template>
</div>
</template>

<script>
  import validation from '~/assets/javascript/validation';
  import pet from '~/assets/javascript/pet';

    export default {
        name: "pets",
        props: {
            amount: {
                default: 0,
                required: true
            }
        },
        data () {
            return {
                validation: validation,
                pet: pet
            }
        }
    }
</script>

<style scoped>

</style>
