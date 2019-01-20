<template>
  <div :id="gameElementId">
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Chat from '@/chat';

@Component
export default class ChatApplication extends Vue {
  @Prop() private gameElementId: string = 'game-container';

  private chat!: Chat;

  public mounted() {
    this.chat = new Chat(this.gameElementId);
  }
}

</script>
