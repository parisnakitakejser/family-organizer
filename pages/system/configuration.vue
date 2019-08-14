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
                          label="Chields"
                          v-model="family_data.chields"
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
                        <template v-for="n in parseInt(val)">
                          <h2 mb0>{{n}}# {{inx}}</h2>

                          <template v-if="inx === 'adults'">
                            <v-row :key="inx +'-'+ n">
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
                                  :items="options.human.gender"
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
                                  :items="options.human.relationship"
                                ></v-select>
                              </v-col>

                              <v-col cols="12" md="8">
                                <v-text-field
                                  label="E-mail"
                                  hint="Family member will received mail with login info"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </template>
                          <template v-else-if="inx === 'chields'">
                            <v-row :key="inx +'-'+ n">
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
                                  :items="options.human.gender"
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
                                  :items="options.human.relationship"
                                ></v-select>
                              </v-col>

                              <v-col cols="12" md="8">
                                <v-text-field
                                  label="E-mail"
                                  hint="Family member will received mail with login info"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </template>
                          <template v-else-if="inx === 'pets'">
                            <v-row :key="inx +'-'+ n">
                              <v-col cols="12" md="4">
                                <v-text-field
                                  label="Name"
                                  hint="What are you pets name"
                                  type="text"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-select
                                  label="Which pet?"
                                  hint="Select the pet eg. dog or cat"
                                  :items="options.pet.type"
                                ></v-select>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-select
                                  label="Gender"
                                  hint="Do you know the gender of you pet?"
                                  :items="options.pet.gender"
                                ></v-select>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-text-field
                                  label="Birthday"
                                  hint="When have you pet birthday"
                                  type="date"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </template>

                          <v-spacer></v-spacer>
                        </template>
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
    export default {
        name: "configuration",
        layout: "system",
        data () {
          return {
            agree: false,
            family_data: {
              adults: 1,
              chields: 0,
              pets: 0
            },
            options: {
              human: {
                gender: ['Male', 'Female', 'Prefer not to say'],
                relationship: ['The King', 'The Queen', 'Chield', 'Friend']
              },

              pet: {
                type: ['Dog', 'Cat', 'Other'],
                gender: ['Male', 'Female', 'Don\'t know']
              }
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
