<template>
    <div id="menu" class="text-center text-5xl font-semibold uppercase tracking-wide text-amber-500 mt-10 md:mt-60 md:text-7xl mx-auto">MENU</div>
    <div class="text-center">
        <select v-model="input.type" class="mt-4 w-1/2 rounded-lg px-4 bg-amber-400 text-amber-900 text-lg font-bold p-2 text-center  shadow-md shadow-amber-900/50">
            <option>All</option>
            <option>Sandwiches</option>
            <option>Hamburgers</option>
            <option>Pancakes</option>
            <option>Omelettes</option>
            <option>Drinks</option>
        </select>
    </div>
    <div class="mx-auto mt-5 rounded-xl  md:w-8/12 w-10/12 p-2 mb-20">
        <ul class=" flex flex-wrap gap-5 justify-between mx-auto" >
            <div v-for="item in typeMenu" :key="item.id" class="mx-auto lg:mx-0 overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:scale-110 duration-500 hover:bg-amber-300 ease-in-out hover:text-amber-50  md:max-w-2xl  animate__animated animate__fadeInRight">
                <div class="md:flex md:items-center max-w-md">
                    <div class="md:shrink-0 overflow-hidden">
                        <img class="h-40 w-full object-cover md:h-48 md:w-60 duration-300 transition hover:scale-110 ease-in-out" v-bind:src="item.image" alt="Modern building architecture" />
                    </div>
                    <div class="p-4">
                        <div class="text-sm font-extrabold uppercase text-amber-800">{{ item.title }}</div>
                        <div class="my-2 text-sm font-bold text-gray-400">{{ item.description }}</div>
                        <p class="font-bold">$ {{ item.price }}</p>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    import 'animate.css/animate.min.css';

    export default {
    name: 'OptionMenu',
    data(){
    return{
        menu:[],
        input: {
            type: "All",
            title: ""
        }
    }
    },
    mounted() {
        axios.get('/data/data.json')
        .then((response) =>{ 
        this.menu = response.data;
        console.log(response.data);
        console.log(this.menu);
        })
    },
    computed:{
      // 依照 type 篩選內容
        typeMenu() {
        if(this.input.type === "All"){
            return this.menu;
        }
        else {
            return this.menu.filter(item => {
                return item.type === this.input.type;
            });
        }
        },
    }
    }
</script>
