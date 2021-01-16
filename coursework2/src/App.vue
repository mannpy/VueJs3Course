<template>
  <div class="container column">
    <div class="card card-w30">
      <app-form @submit="addBlock"></app-form>
    </div>

    <div class="card card-w70">
      <app-blocks :blocks="blocks"></app-blocks>
    </div>
  </div>
  <div class="container">
    <app-comments v-if="comments.length" :comments="comments"></app-comments>
    <app-loader v-else-if="commentsLoading"></app-loader>
    <p v-else>
      <app-button class-type="primary" @action="getComments">Загрузить комментарии</app-button>
    </p>
  </div>
</template>

<script>
import AppForm from "@/components/AppForm";
import AppBlocks from "@/components/AppBlocks";
import AppButton from "@/components/AppButton";
import AppComments from "@/components/AppComments";
import AppLoader from "@/components/AppLoader";

const commentsUrl = "https://jsonplaceholder.typicode.com/comments?_limit=42";

export default {
  name: "App",
  components: {
    AppBlocks,
    AppButton,
    AppComments,
    AppForm,
    AppLoader
  },
  data() {
    return {
      commentsLoading: false,
      blocks: [],
      comments: []
    };
  },
  methods: {
    addBlock(type, value) {
      this.blocks.push({
        componentName: `app-${type}-block`,
        id: Math.random(),
        value: value
      });
    },
    async getComments() {
      this.commentsLoading = true;
      try {
        const response = await fetch(commentsUrl);
        if (response.ok) {
          this.comments = await response.json();
        }
      } catch (e) {
        console.log(e.message);
      } finally {
        this.commentsLoading = false;
      }
    }
  }
};
</script>

