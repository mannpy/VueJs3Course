<template>
  <form>
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model.trim="value"></textarea>
    </div>

    <app-button
      class-type="primary"
      :disabled="!isValueMoreThanThree"
      type="submit"
      @action="submit"
      >Добавить
    </app-button>
  </form>
</template>

<script>
import AppButton from "@/components/AppButton";

export default {
  name: "AppForm",
  emits: ["submit"],
  components: { AppButton },
  computed: {
    isValueMoreThanThree() {
      return this.value.length > 3;
    }
  },
  data() {
    return {
      type: "title",
      value: ""
    };
  },
  methods: {
    submit() {
      if (this.isValueMoreThanThree) {
        this.$emit("submit", this.type, this.value);
        this.type = "title";
        this.value = "";
      }
    }
  }
};
</script>
