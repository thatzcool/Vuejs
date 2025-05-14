<script>
export default {
  props: {
    computedTodo: {
      type: Array,
      default: () => []
    }
  },
  emits: ['delete-todo', 'update-todo', 'edit-todo', 'save-edit-todo'],
  data() {
    return {
      editId: null,
      editMsg: ""
    };
  },
  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
    updateTodo(id) {
      this.$emit('update-todo', id);
    },
    editTodo(id, msg) {
      this.editId = id;
      this.editMsg = msg;
    },
    saveEditTodo() {
      if (this.editId !== null) {
        this.$emit('save-edit-todo', this.editId, this.editMsg);
        this.editId = null;
        this.editMsg = "";
      }
    }
  }
};
</script>

<template>
  <div class="todo__list">
    <div
      v-for="item in computedTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.completed }"
    >
      <input
        type="checkbox"
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
        @click="updateTodo(item.id)"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>

      <span v-if="editId !== item.id" class="todo__item-text" @dblclick="editTodo(item.id, item.msg)">
        {{ item.msg }}
      </span>

      <div v-else>
        <input v-model="editMsg" />
        <button @click="saveEditTodo">저장</button>
      </div>

      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
      >delete</span>
    </div>
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할 일이 없습니다.</p>
    </div>
  </div>
</template>
