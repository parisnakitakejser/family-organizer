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
                  <v-form>
                    <v-text-field label="Your family name" type="text"></v-text-field>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Adults"
                          v-model="family_data.adults"
                          hint="How many people are over 18 years?"
                          type="number"
                          min="0"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Childs"
                          v-model="family_data.childs"
                          hint="How many people are below 18 years?"
                          type="number"
                          min="0"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Pets"
                          v-model="family_data.pets"
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

                    <v-checkbox v-model="agree" label="Do you agree and ready to setup this family?"></v-checkbox>
                  </v-form>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="primary" :disabled="(agree && (family_data.adults) > 0 ? false : true)" @click="makeConfiguration">
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
        data () {
          return {
            agree: false,
            family_data: {
              adults: 1,
              childs: 0,
              pets: 0
            }
          }
        },

      methods: {
        makeConfiguration () {
          console.log('press the btn - makeConfiguration')
        }
      }
    }
</script>

<style scoped>

</style>
