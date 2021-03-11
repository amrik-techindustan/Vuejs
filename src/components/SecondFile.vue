<template>
  <v-form ref="form" v-model="valid" lazy-validation class="login-form">
    <h1>Sign_Up Form</h1>
    <v-text-field
      v-model="firstname"
      :rules="firstnameRules"
      label="FirstName"
      required
      full-width
    ></v-text-field>
    <v-text-field
      v-model="lastname"
      :rules="lastnameRules"
      label="LastName"
      required
      full-width
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      full-width
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      type="password"
      label="Password"
      required
      full-width
    ></v-text-field>

    <v-btn color="red" class="mr-4" @click="validate"> LogIn </v-btn>

    <v-btn color="red" class="mr-4" @click="validate"> Sign_Up </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    isValid: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    validate(e) {
      e.preventDefault();

      if (this.email === "amrik@test.com" && this.password === "123456") {
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
<style lang="scss">
.login-form {
  border: 1px solid red;
  width: 50%;
  padding: 50px 50px 50px 50px;
  margin-left: 25%;
}
</style>