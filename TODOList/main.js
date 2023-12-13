

const todoItem = {

    props: ['todo'],
    emits: ["complete-todo"],
    methods: {
        makeComplete() {
            this.$emit("complete-todo")
        },
    },
        template: `
            <div>
                {{ todo.title }}
                <input type="checkbox" :checked="todo.completed" v-on:click="makeComplete">
            </div>
    `,
    
}

    const app = Vue.createApp({
        data() {
            return {
                todoList: [
                    {
                        "title": "задача 1",
                        "completed": false,
                        "noActive": false
                    },
                    {
                        "title": "задача 2",
                        "completed": false,
                        "noActive": false
                    },
                ],
            },
        },
        components: {
            "todo-item": todoItem,
        },
        methods: {
            makeDone(index) {
                console.log("before", this.todoList[index]);
                this.todoList[index].completed = !this.todoList[index].completed;
                console.log("after", this.todoList[index]);
            },
            add() {
                if {!this.itemForAdd.trim(){
                    return;
                }
                this.todoList.push {

                    {
                        "title": this.itemForAdd,
                            "completed": false,
                            "noActive": false,
                            "id": this.todoList.length + 1
                    },
                };
                console.log(this.todoList)
            }
        },
         
            /*mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(response => response.json())
                .then(json => (this.todoList = json))*/
        },
    });



    app.mount("#app");