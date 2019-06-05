<template>
  <button @click="fetchResults" />
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      value: null
    };
  },

  methods: {
    async fetchResults() {
      await axios.get('mock/service');
      this.value = 'value';
    }
  }
};
</script>
