var app = new Vue(
  {
    el: '#app',
    data: {
      title: '',
      isActive: true,
      // todos: [
      //   'Cras justo odio',
      //   'prendere il latte',
      //   'far mangiare Gea'
      // ]
      todos: [
        {
          text: 'Cras justo odio',
          done: true,
          input: false
        },
        {
          text: 'prendere il latte',
          done: false,
          input: false
        },
        {
          text: 'far mangiare Gea',
          done: false,
          input: false
        }
      ],
      newTodo: ''
    },
    methods: {
      toggleText() {
        // this.isActive = !this.isActive;
        this.isActive = (this.isActive) ? false : true;
        // if (this.isActive) {
        //   this.isActive = false;
        // } else {
        //   this.isActive = true;
        // }
      },
      deleteTodo(index) {
        this.todos.splice(index,1);
      },
      addTodo() {
        // {
        //   text: 'far mangiare Gea',
        //   done: false
        // }
        var newTodo = {
              text: this.newTodo,
              done: false
            };
        this.todos.push(newTodo);
        this.newTodo = '';
      },
      toggleTodo(index) {
        this.todos[index].done = !this.todos[index].done;
      },
      inputActive(index) {
        
        this.todos[index].input = !this.todos[index].input;
      },
      todoActive(index) {
        this.todos[index].input = !this.todos[index].input;
        
      }
    },
    mounted() {
      this.title = 'Ci sono';
    }
  }
);