<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoList from "@/components/TodoList.vue";
import TodoInput from "@/components/TodoInput.vue";
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
  },
  data() {
    return {
      todo: [],
      current: "all",
      editId: null,
      editMsg: ""
    };
  },
  computed: {
    computedTodo() {
      if (this.current === "all") {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    },
  },
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(),
        msg: inputMsg,
        completed: false,
      };
      this.todo.push(item);
    },
    updateTab(tab) {
      this.current = tab;
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id);
    },
    updateTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
    },
    editTodo(id, msg) {
      this.editId = id;
      this.editMsg = msg;
    },
    saveEditTodo() {
      if (this.editId !== null) {
        this.todo = this.todo.map((v) =>
          v.id === this.editId ? { ...v, msg: this.editMsg } : v
        );
        console.log("Updated Todo: ", this.todo);
        this.editId = null;
        this.editMsg = "";
      }
    }
  },
};
</script>

<template>
  <div class="todo">
    <TodoHeader :current="current" @update-tab="updateTab" />
    <TodoList
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @edit-todo="editTodo"
    />

    <div v-if="editId !== null" class="todo__edit">
      <input v-model="editMsg" placeholder="수정할 내용을 입력하세요." />
      <button @click="saveEditTodo">저장</button>
    </div>

    <TodoInput @add-todo="addTodo" />
  </div>
</template>
