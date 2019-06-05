<template>
  <div>
    <h2>Create User Component</h2>
    <sui-form form @submit.prevent="handleSubmit">
      <sui-form-field>
        <label
          >Name
          <input
            type="text"
            data-name
            placeholder="Name"
            required
            v-model="name"
        /></label>
      </sui-form-field>
      <sui-form-field>
        <label
          >Email
          <input
            type="email"
            data-email
            placeholder="Email"
            required
            v-model="email"
          />
        </label>
      </sui-form-field>
      <sui-form-field>
        <label>
          Password
          <input
            type="password"
            data-password
            placeholder="password"
            required
            v-model="password"
          />
        </label>
      </sui-form-field>
      <sui-button primary button-sub type="submit" @click="handleSubmit">
        Create User
      </sui-button>
    </sui-form>
    <sui-message v-if="submitted" success success-message>
      <sui-message-header>Success</sui-message-header>
      <p>User has been created</p>
    </sui-message>
    <sui-message v-if="error" error error-message>
      <sui-message-header>Error</sui-message-header>
      <p>{{ error }}</p>
    </sui-message>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateUser',
  data() {
    return {
      submitted: false,
      name: '',
      email: '',
      password: '',
      error: false
    };
  },
  props: ['backend_url'],
  methods: {
    async handleSubmit() {
      try {
        await this.createUser({
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.submitted = true;
        this.error = false;
      } catch (error) {
        this.error = error.response.data.message;
        this.submitted = false;
      }
    },
    createUser(user) {
      return axios.post(this.backend_url + '/user', user);
    }
  }
};
</script>

<style></style>
