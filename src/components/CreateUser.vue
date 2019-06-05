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
      <sui-button primary type="submit">Create User</sui-button>
    </sui-form>
    <sui-message v-if="submitted">
      <sui-message-header>Success</sui-message-header>
      <p message>User has been created</p>
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
      password: ''
    };
  },
  props: ['backend_url'],
  methods: {
    async handleSubmit() {
      console.log(this.name, this.email, this.password);
      const user = await axios.post(this.backend_url + '/user', {
        name: this.name,
        email: this.email,
        password: this.password
      });
      console.log(user);
      this.submitted = true;
    }
  }
};
</script>

<style></style>
