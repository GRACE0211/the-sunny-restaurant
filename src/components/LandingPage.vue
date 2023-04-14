<template>
  <div class="box-border">
    <div class="hidden justify-between fixed w-full z-40 bg-orange-900 md:flex shadow-2xl shadow-orange-900/50">
      <div class="md:ml-10">
        <div class="">
          <img src="" alt="">
        </div>
        <p class="py-2 px-1 font-bold text-lg text-amber-300 md:inline-block">THE SUNNY RESTAURANT</p>
      </div>
      <ul class="md:mr-10">
        <li class="py-2 px-1 font-bold text-lg text-amber-100 transition hover:bg-orange-700 md:inline-block"><a href="#menu">MENU</a></li>
        <li class="py-2 px-1 font-bold text-lg text-amber-100 transition hover:bg-orange-700 md:inline-block"><a href="#">SURVEY FORM</a></li>
        <li class="py-2 px-1 font-bold text-lg text-amber-100 transition hover:bg-orange-700 md:inline-block"><a href="#">SHOPPING CART</a></li>
      </ul>
    </div>
    <div class="md:hidden ">
    <nav>
        <section class=" MOBILE-MENU z-50 flex justify-between items-center px-4 lg:hidden w-full fixed bg-amber-800 shadow-gray-900/50 shadow-md">
        <div
          v-on:click='navOpen()'
          class="HAMBURGER-ICON p-2"
        >
            <span class="block h-0.5 my-2 w-6 bg-amber-50 rounded-md"></span>
            <span class="block h-0.5 my-2 w-6 bg-amber-50 rounded-md"></span>
            <span class="block h-0.5 my-2 w-6 bg-amber-50 rounded-md"></span>
        </div>
        <p class="py-2 px-1 font-bold text-lg text-amber-300 md:inline-block">THE SUNNY RESTAURANT</p>
        
        <div :class="showMenuNav ? 'showMenuNav' : 'hideMenuNav'" >
            <div
            class="CROSS-ICON absolute top-0 left-0 pl-5 pt-3"
              v-on:click='navOpen()'
            >
            <svg
                class="h-8 w-8 text-amber-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            </div>
            <ul class=" flex flex-col items-center justify-evenly h-full  font-bold">
            <li class="border-b border-amber-400  my-2">
                <a href="#menu">MENU</a>
            </li>
            <li class="border-b border-amber-400 mb-2">
                <a href="https://grace0211.github.io/surveyform.github.io/survey%20form/survey%20form">SURVEY FORM</a>
            </li>
            <li class="border-b border-amber-400  mb-4">
                <a href="#">SHOPPING CART</a>
            </li>
            </ul>
        </div>
        <div>
            <a href='#'>
                <ph-shopping-cart :size="20" weight="bold" />
            </a>
        </div>
        </section>

        </nav>
    </div>
    <div class="md:flex h-2/5 pt-14 w-full md:pt-0">
      <div class="md:w-4/6 w-full">
        <img class="h-full w-full object-cover md:h-full md:w-full" src="https://recipes.net/wp-content/uploads/2021/11/best-american-breakfast-foods.jpg" alt="Modern building architecture" />
      </div>
      <div class=" md:h-screen h-full bg-amber-100 p-8">
        <div class="text-5xl font-semibold uppercase tracking-wide text-amber-500 md:mt-56 md:text-7xl" data-aos="fade-down" data-aos-once="true">THE SUNNY RESTAURANT</div>
        <button class="my-8 rounded-full bg-amber-900 px-5 py-2 text-xl font-bold text-white duration-200 ease-in hover:scale-110 hover:bg-amber-600 shadow-md shadow-amber-900/50"  data-aos-once="true" data-aos="zoom-in" >ORDER NOW</button>
        <p class=" text-yellow-900 md:w-10/12" data-aos="fade-up" data-aos-once="true">You can't eat here just once. Sunny restaurant not only provides the best service but also provides food to put you in a good mood. Meat you here! </p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  name: 'LandingPage',
  data() {
    return {
      showMenuNav:false,
    }
  },
  methods:{
    navOpen (){
        this.showMenuNav = !this.showMenuNav;
    }
  },
  mounted() {
    AOS.init({
      duration: 1000,
    });
  }
}
</script>

<style scoped>
  .hideMenuNav{
    position: absolute;
    top: 0;
    left: 0;
    transition: .5s;
    opacity: 0;
    visibility: hidden;
    z-index: 0;
    /* animation: slideOutUp;  */
    padding: 20px 0;
    display: block;
    width: 0%;
    height: full;
    background: #FAEBD7;
    color: #FAEBD7;
    /* display: flex; */
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .showMenuNav {
    position: absolute;
    top: 0;
    left: 0;      
    opacity: 1;
    visibility: visible;
    z-index: 999;
    transition: all .25s ease-in;
    padding: 20px 0;
    display: block;
    width: 100%;
    height: full;
    background: #FAEBD7;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
      }
</style>
