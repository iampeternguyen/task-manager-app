<template>
  <div>
    <h2>Create User Component</h2>
    <sui-form>
      <sui-form-field>
        <label>Name <input type="text" id="name" placeholder="Name"/></label>
      </sui-form-field>
      <sui-form-field>
        <label
          >Email <input type="text" id="email" placeholder="Email" />
        </label>
      </sui-form-field>
      <sui-form-field>
        <label>
          Password <input type="text" id="password" placeholder="password" />
        </label>
      </sui-form-field>
      <sui-button primary type="submit">Create User</sui-button>
    </sui-form>
  </div>
</template>
<script>
export default {
  name: 'CreateUser'
};
</script>
<style></style>
