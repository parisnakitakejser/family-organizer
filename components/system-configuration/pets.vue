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
          @input="updateField('name', n, $event)"
          :value="getData('name', n)"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="Which pet?"
          hint="Select the pet eg. dog or cat"
          :items="pet.type"
          :rules="validation.pet.type"
          @input="updateField('type', n, $event)"
          :value="getData('type', n)"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="Gender"
          hint="Do you know the gender of you pet?"
          :items="pet.gender"
          :rules="validation.gender"
          @input="updateField('gender', n, $event)"
          :value="getData('gender', n)"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          label="Birthday"
          hint="When have you pet birthday"
          type="date"
          :rules="validation.birthday"
          @input="updateField('birthday', n, $event)"
          :value="getData('birthday', n)"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>
  </template>
</div>
</template>

<script>
  import {mapState} from 'vuex';

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


        computed: {
            ...mapState({
                family_data: state => state.configuration.family_data
            })
        },

        methods: {
            updateField(field, idx, e) {
                this.$store.commit('configuration/updateListData', {
                    'area': 'pets_list',
                    'field': field,
                    'value': e,
                    'num': idx
                })
            },

            getData(field, idx) {
                if (this.family_data.data.pets_list[idx] && this.family_data.data.pets_list[idx][field]) {
                    return this.family_data.data.pets_list[idx][field];
                } else {
                    return '';
                }
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
