<template>
  <ChatApplication />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChatApplication from '@/components/ChatApplication.vue';

@Component({
  components: {
    ChatApplication,
  },
})
export default class Home extends Vue {}
</script>
