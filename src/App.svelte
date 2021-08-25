<script>
  // @ts-nocheck
  // import logo from "./assets/svelte.png";
  // import jose from "./assets/jose.png";
  import Counter from "./lib/Counter.svelte";
  import Nav from "./lib/Nav.svelte";
  import Contact from "./lib/Contact.svelte";
  import Footer from "./lib/Footer.svelte";
  import Annotation from "svelte-rough-notation";
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css"; // You can also use <link> for styles
  import userData from "./constants/userData";
  import axios from "axios";
  import * as animateScroll from "svelte-scrollto";

  let visible = false;

  onMount(() => {
    AOS.init();

    setTimeout(() => {
      visible = true;
    }, 500);
  });

  const test = async () => {
    try {
      await axios.post("/.netlify/functions/sendgrid/sendgrid", {
        message: "HOLA JOC!",
      });
    } catch (e) {
      console.error(e);
      alert("Your message could not be sent. Sorry about that.");
    }
  };
</script>

<svelte:head>
  <title>Jose Vega | Portfolio</title>
</svelte:head>

<section>
  <Nav />
  <main>
    <!-- <button
      on:click|preventDefault={test}
      class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
    >
      Trigger function
    </button> -->
    <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-4 items-center text-center order-last md:order-first"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200"
          >
            <Annotation bind:visible type="highlight" color="#FF3E00" multiline>
              {userData.name}
              <br class="hidden lg:inline-block" />A some what developer
            </Annotation>
          </h1>
          <p class="mb-8 leading-relaxed text-2xl">
            {userData.about.title}
          </p>
          <div class="flex justify-center">
            <button
              on:click={() =>
                animateScroll.scrollTo({
                  element: "#div1",
                  offset: 50,
                })}
              class="inline-flex text-white bg-anaranjado border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              More
            </button>
            <button
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Download Resume
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16">
          <!-- <img
            class="object-cover object-center rounded-full"
            alt="hero"
            src={jose}
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-duration="1000"
          /> -->
          <lottie-player
            class="object-cover object-center"
            src="https://assets7.lottiefiles.com/packages/lf20_Yiahbq.json"
            background="transparent"
            speed="1"
            style="width: 550px; height: 550px;"
            loop
            autoplay
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>

    <div class="py-5">
      <Counter />
    </div>

    <section id="div1" class="text-gray-600 body-font bg-gray-100">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
          >
            Raw Denim Heirloom Man Braid
          </h1>
          <p
            class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500"
          >
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-anaranjado inline-flex" />
          </div>
        </div>
        <div
          class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
        >
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div
              class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-light-anaranjado text-anaranjado mb-5 flex-shrink-0"
              data-aos="fade-down"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Shooting Stars
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <a
                href={"#"}
                class="mt-3 text-anaranjado inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div
              class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-light-anaranjado text-anaranjado mb-5 flex-shrink-0"
              data-aos="fade-down"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                The Catalyzer
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <a
                href={"#"}
                class="mt-3 text-anaranjado inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div
              class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-light-anaranjado text-anaranjado mb-5 flex-shrink-0"
              data-aos="fade-down"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Neptune
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <a
                href={"#"}
                class="mt-3 text-anaranjado inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button
          class="flex mx-auto mt-16 text-white bg-anaranjado border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >Button</button
        >
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"
          >
            Raw Denim Heirloom Man Braid
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">Authentic Cliche Forage</span
              >
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">Kinfolk Chips Snackwave</span
              >
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">Coloring Book Ethical</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium"
                >Typewriter Polaroid Cray</span
              >
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">Pack Truffaut Blue</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">The Catcher In The Rye</span>
            </div>
          </div>
        </div>
        <button
          class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >Button</button
        >
      </div>
    </section>
  </main>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-wrap w-full justify-start md:justify-center">
        <div class="md:pr-10 md:py-6">
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                STEP 1
              </h2>
              <p class="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                STEP 2
              </h2>
              <p class="leading-relaxed">
                Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                slow-carb health goth, vape typewriter.
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3" />
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                STEP 3
              </h2>
              <p class="leading-relaxed">
                Coloring book nar whal glossier master cleanse umami. Salvia +1
                master cleanse blog taiyaki.
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                STEP 4
              </h2>
              <p class="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
          <div class="flex relative">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                FINISH
              </h2>
              <p class="leading-relaxed">
                Pitchfork ugh tattooed scenester echo park gastropub whatever
                cold-pressed retro.
              </p>
            </div>
          </div>
        </div>
        <!-- <img
          class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
          src="https://dummyimage.com/1200x500"
          alt="step"
        /> -->
      </div>
    </div>
  </section>
  <Contact />
  <Footer />
</section>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    margin: 0 auto;
  }
</style>
