 
 
 // Your code !! =============================================Javascript
// function addGoal(){
//     let data = document.querySelector('#goal');
//     if (data != ""){
//         let ul = document.createElement('ul');
//         let li = document.createElement('li');
//         li.textContent = data.value;
//         ul.appendChild(li);
//         document.body.querySelector('#app').appendChild(ul);
//         data.value = "";
//     }
// }

//=============================================================Vue

const app = Vue.createApp({
    data() {
        return {
            datas: [],
        }
    },

    methods: {
        addDatas(){
            let data = document.querySelector('#goal');
            if (data != ""){
                this.datas.push(data.value);
                data.value = "";
            }
        }
    }
})
app.mount('#app')
