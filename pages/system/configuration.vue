<template>
    <v-app>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>

              <v-card class="elevation-2">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>
                    Family Organizer - Setup / Configuration screen
                  </v-toolbar-title>

                  <v-spacer></v-spacer>
                </v-toolbar>

                <v-card-text>
                  <v-form ref="form" v-model="valid">
                    <v-text-field
                      label="Your family name"
                      type="text"
                      @input="updateFamilyData('familyname', $event)"
                      :value="family_data.data.familyname"
                      :rules="validation.familyname"
                      :counter="90"
                      required
                    ></v-text-field>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Adults"
                          @input="updateFamilyNum('adults', $event)"
                          :value="family_data.adults"
                          hint="How many people are over 18 years?"
                          type="number"
                          min="0"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Childs"
                          @input="updateFamilyNum('childs', $event)"
                          :value="family_data.childs"
                          hint="How many people are below 18 years?"
                          type="number"
                          min="0"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Pets"
                          @input="updateFamilyNum('pets', $event)"
                          :value="family_data.pets"
                          hint="How many lovely pets did you own?"
                          type="number"
                          min="0"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-spacer></v-spacer>

                    <template v-if="parseInt(family_data.adults) > 0">
                      <template v-for="(val, inx) in family_data">
                        <adults v-if="inx === 'adults'" :amount="parseInt(val)"></adults>
                        <childs v-if="inx === 'childs'" :amount="parseInt(val)"></childs>
                        <pets v-if="inx === 'pets'" :amount="parseInt(val)"></pets>
                      </template>
                    </template>
                    <template v-else>
                      <v-alert type="warning">
                        You need at least 1 adult in your family
                      </v-alert>
                    </template>

                    <v-checkbox
                      v-model="agree"
                      label="Do you agree and ready to setup this family?"
                      :rules="[v => !!v || 'Do you agree?']"
                      required
                    ></v-checkbox>
                  </v-form>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="primary" :disabled="!valid" @click="makeConfiguration">
                    Complete my family configuration
                  </v-btn>
                </v-card-actions>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
  import { mapState } from 'vuex';

  import validation from '~/assets/javascript/validation';

  import adults from "../../components/system-configuration/adults";
  import childs from "../../components/system-configuration/childs";
  import pets from "../../components/system-configuration/pets";
    export default {
        name: "configuration",
        layout: "system",
        components: {
            adults,
            childs,
            pets
        },

        computed: {
          ...mapState({
              family_data: state => state.configuration.family_data
          })
        },

        data () {
          return {
            validation: validation,
            valid: true,
            agree: false,
          }
        },

      methods: {
        updateFamilyNum(fam_type, e) {
          this.$store.commit('configuration/update', {
              'field': fam_type,
              'value': e
          })
        },

        updateFamilyData(field, e) {
            this.$store.commit('configuration/updateData', {
                'field': field,
                'value': e
            })
        },

        makeConfiguration () {
            // (agree && (family_data.adults) > 0 ? false : true)

            if (this.$refs.form.validate()) {
                let members = [];
                let pets = [];

                this.family_data.data.adults_list.forEach((val, inx) => {
                  members.push(val);
                });

                this.family_data.data.childs_list.forEach((val, inx) => {
                  members.push(val);
                });

                this.family_data.data.pets_list.forEach((val, inx) => {
                  pets.push(val);
                });

                this.$axios.put(process.env.API_SERVER +'system/configuration/completed', {
                  name: this.family_data.data.familyname,
                  members: members,
                  pets: pets
                }).then((resp) => {
                  this.$router.push({'name': 'users-login'});
                }).catch((err) => {
                  console.log('we hit a error!');
                  console.log(err);
                });

                console.log('press the btn - makeConfiguration')
                console.log(this.family_data)
            } else {
                console.log('Validate not currect!')
            }

        }
      }
    }
</script>

<style scoped>

</style>
