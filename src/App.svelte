<script>
  // @ts-nocheck
  import Nav from "./lib/Nav.svelte";
  import Contact from "./lib/Contact.svelte";
  import Footer from "./lib/Footer.svelte";
  import Tech from "./lib/Tech.svelte";
  import Projects from "./lib/Projects.svelte";
  import Header from "./lib/Header.svelte";
  import Annotation from "svelte-rough-notation";
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import userData from "./constants/userData";
  import * as animateScroll from "svelte-scrollto";

  let visible = false;

  onMount(() => {
    AOS.init();

    setTimeout(() => {
      visible = true;
    }, 500);
  });
</script>

<svelte:head>
  <title>Jose Vega | Portfolio</title>
</svelte:head>

<section>
  <Nav />
  <main>
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
              <br class="hidden lg:inline-block" /> a web developer specializing
              in delivering awesome products.
            </Annotation>
          </h1>
          <p class="mb-8 leading-relaxed text-2xl">
            {userData.about.title}
          </p>
          <div class="flex justify-center">
            <button
              on:click={() =>
                animateScroll.scrollTo({
                  element: "#about",
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
          <lottie-player
            class="object-cover object-center"
            src="https://assets4.lottiefiles.com/packages/lf20_hntzYU.json"
            background="transparent"
            speed="1"
            style="width: 100%; height: 100%;"
            loop
            autoplay
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-16 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p class="leading-relaxed">
                Over the years I have learned the required tools to develop a
                succesful platform. I have developed projects using services
                like Braintree, AWS, Heroku, Netlify, Nuxt, Next, among others.
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg-anaranjado mt-6 mb-4"
              />
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p class="leading-relaxed">
                I am also proficient in several languages and frameworks such as
                Ruby on Rails, Html, CSS, Vue and React. I can also connect
                and/or build APIs.
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg-anaranjado mt-6 mb-4"
              />
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <p class="leading-relaxed">
                I am always interested in learning new languages so if you
                prefer a specific one or a different stack, we can make it work!
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg-anaranjado mt-6 mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="text-gray-600 body-font bg-gray-100">
      <div class="container px-5 py-24 mx-auto">
        <Header
          title="Design & Development"
          description="Clean, modern designs - optimized for performance"
        />

        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 sm:w-1/2 w-full">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-anaranjado w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">Unique websites</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-anaranjado w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">Intuitive UX | UI</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-anaranjado w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium"
                >Constant communication with client</span
              >
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="250"
              data-aos-once="true"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-anaranjado w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium"> Responsive design </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-anaranjado w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">Continuous monitoring</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-once="true"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-anaranjado w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span class="title-font font-medium">Unit tests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <section id="employement" class="text-gray-600 body-font py-16 my-16">
    <Header title="Employement History" />
    <div class="container mx-auto flex flex-wrap">
      <div class="flex flex-wrap w-full justify-start md:justify-center">
        <div class="md:pr-10 md:py-6">
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-anaranjado inline-flex items-center justify-center text-white relative z-10"
            >
              1
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                <a href="https://www.softensity.com/">Softensity</a>
              </h2>
              <p class="leading-relaxed">(June 2021– August 2021)</p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-anaranjado inline-flex items-center justify-center text-white relative z-10"
            >
              2
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                <a href="https://ocho.life/">Ocho</a>
              </h2>
              <p class="leading-relaxed">(Oct. 2020 – June 2021)</p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-anaranjado inline-flex items-center justify-center text-white relative z-10"
            >
              3
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                <a href="https://safetyspot.com/">SafetySpot Inc</a>
              </h2>
              <p class="leading-relaxed">(Feb. 2017 – June 2020)</p>
            </div>
          </div>

          <div class="flex relative">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-anaranjado inline-flex items-center justify-center text-white relative z-10"
            >
              4
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                Independent Consultant
              </h2>
              <p class="leading-relaxed">(Oct. 2016 – Current)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Projects />
  <Tech />
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
