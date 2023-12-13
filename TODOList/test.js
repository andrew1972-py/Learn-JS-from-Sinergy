//создаем объект приложения vuejs
const app = Vue.createApp({});

//создаем компонент
//первый параметр - название компонента
//второй параметр - объект со свойством шаблона
app.component("counter",
    {
        // свойства компонента
        data() {
            return {
                count: 0,
            }
        },
        //методы компонента
        methods: {
            increase() {
                this.count++
            },
            decrease() {
                this.count--
            },
        },
        //шаблон компонента
        template: `
        <h2> Счетчик </h2>
        <p> {{ count }} </p>
        <button v-on:click="increase"> Увеличить</button>
        <button v-on:click="decrease"> Уменьшить</button>
        <button v-on:click="addMess"> Вывод  </button>
    `,
    });

// связываем приложение vue.js с эл-том на странице по ID
app.mount("#app");