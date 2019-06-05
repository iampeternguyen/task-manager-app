<template>
  <sui-container>
    <create-user :backend_url="BACKEND_URL"></create-user>
  </sui-container>
</template>

<script>
import CreateUser from './components/CreateUser';
export default {
  name: 'App',
  data() {
    return {
      BACKEND_URL: 'http://127.0.0.1:3000'
    };
  },
  components: {
    CreateUser
  }
};
</script>

<style></style>
