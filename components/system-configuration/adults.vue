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
          :rules="validation.fullname"
          @input="updateField('fullname', n, $event)"
          :value="getData('fullname', n)"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          label="Gender"
          hint="Select adult gender eg. female"
          :items="human.gender"
          :rules="validation.gender"
          @input="updateField('gender', n, $event)"
          :value="getData('gender', n)"
          required
        ></v-select>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          label="Birthday"
          hint="When is the birthday"
          type="date"
          :rules="validation.birthday"
          @input="updateField('birthday', n, $event)"
          :value="getData('birthday', n)"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          label="Relationship"
          hint="What is the relationship for this person?"
          :items="human.relationship"
          :rules="validation.relationship"
          @input="updateField('relationship', n, $event)"
          :value="getData('relationship', n)"
          required
        ></v-select>
      </v-col>

      <v-col cols="12" md="8">
        <v-text-field
          label="E-mail"
          hint="Family member will received mail with login info"
          :rules="validation.email"
          @input="updateField('email', n, $event)"
          :value="getData('email', n)"
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
  import human from '~/assets/javascript/human';

  export default {
      name: "adults",
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
                  'area': 'adults_list',
                  'field': field,
                  'value': e,
                  'num': idx
              })
          },

          getData(field, idx) {
            if (this.family_data.data.adults_list[idx] && this.family_data.data.adults_list[idx][field]) {
                return this.family_data.data.adults_list[idx][field];
            } else {
                return '';
            }
          }
      },

      data () {
          return {
              validation: validation,
              human: human
          }
      }
  }
</script>

<style scoped>

</style>
