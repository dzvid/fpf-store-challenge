<template>
  <v-btn small fab text color="primary" @click="onClick">
    <v-icon>mdi-pencil-outline</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonEditProduct',
  props: {
    onClick: {
      required: true,
      type: Function,
    },
  },
};
</script>

<style></style>
