module.exports = {
  familyname: [
    v => !!v || 'Your family name required',
    v => v.length <= 90 || 'Your family name mush be less then 90 characters'
  ],

  fullname: [
    v => !!v || 'Name required'
  ],

  gender: [
    v => !!v || 'Gender required'
  ],

  birthday: [
    v => !!v || 'Birthday required'
  ],

  relationship: [
    v => !!v || 'Relationship required'
  ],

  email: [
    v => !!v || 'E-mail required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
  ],

  pet: {
    name: [
      v => !!v || 'Pet name required'
    ],

    type: [
      v => !!v || 'Pet type required'
    ],

  }
};
