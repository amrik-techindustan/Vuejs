
<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      type="password"
      label="Password"
      required
    ></v-text-field>

    <v-btn color="red" class="mr-4" @click="validate"> LogIn </v-btn>

    <v-btn color="red" class="mr-4" @click="validate"> Sign_Up </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    isValid: false ,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    validate(e) {
      e.preventDefault();
      
      if (this.email && this.password) {
        window.location.href = "/second";
      }
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>


