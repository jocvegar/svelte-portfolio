<script>
  // @ts-nocheck
  import Nav from "./lib/Nav.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
  import Contact from "./lib/Contact.svelte";
  import Footer from "./lib/Footer.svelte";
  import Tech from "./lib/Tech.svelte";
  import Alert from "./lib/Alert.svelte";
  import Projects from "./lib/Projects.svelte";
  import Header from "./lib/Header.svelte";
  import Annotation from "svelte-rough-notation";
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import userData from "./constants/userData";
  import * as animateScroll from "svelte-scrollto";

  const visible = [false, false];
  let open = false;
  let alert = false;

  onMount(() => {
    AOS.init();

    setTimeout(() => (visible[0] = true), 1200);
    setTimeout(() => (visible[1] = true), 2000);
  });
</script>

<svelte:head>
  <title>Jose Vega | Portfolio</title>
</svelte:head>

<section>
  <Nav bind:sidebar={open} />
  <Sidebar bind:open />
  <Alert bind:alert />

  <main>
    <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-8 md:py-16 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-4 items-center text-center order-last md:order-first"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200"
          >
            <Annotation
              bind:visible={visible[0]}
              type="highlight"
              color="#FF3E00"
              multiline
            >
              {userData.name}
              <br />
              {userData.designation}
            </Annotation>
          </h1>
          <p class="mb-8 leading-relaxed text-2xl">
            I'm a software developer that
            <Annotation
              bind:visible={visible[1]}
              type="underline"
              color="#FF3E00"
            >
              loves
            </Annotation>
            building products and web applications that make life a little easier.
          </p>
          <div class="flex justify-center">
            <button
              on:click={() =>
                animateScroll.scrollTo({
                  element: "#about",
                  offset: 50,
                })}
              class="inline-flex text-white bg-anaranjado border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg shadow-md"
            >
              More
            </button>
            <button
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg shadow-md"
            >
              <a href="/JoseVegaCV.pdf" download> Download Resume </a>
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

    <section id="about" class="text-gray-600 body-font bg-gray-100">
      <div class="container px-5 py-16 mx-auto">
        <Header title="About" />
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <div
                class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-light-anaranjado text-anaranjado mb-4 shadow"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <p class="leading-relaxed">
                Over the years, I have learned the required tools to develop
                succesful platforms using services like Braintree, AWS, Heroku,
                Netlify, Nuxt, Next, among others.
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg-anaranjado mt-6 mb-4"
              />
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <div
                class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-light-anaranjado text-anaranjado mb-4 shadow"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <p class="leading-relaxed">
                I am proficient in several languages and frameworks such as Ruby
                on Rails, HTML, CSS, APIs, Vue and React.
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg-anaranjado mt-6 mb-4"
              />
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <div
                class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-light-anaranjado text-anaranjado mb-4 shadow"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-10 w-10"
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

    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto">
        <Header
          title="Design & Development"
          description="Clean, modern designs - optimized for performance"
        />

        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 sm:w-1/2 w-full transform hover:scale-105">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="100"
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
              <span class="title-font font-medium text-left">
                Unique websites
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full transform hover:scale-105">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="150"
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
              <span class="title-font font-medium text-left">
                Intuitive UX | UI
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full transform hover:scale-105">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="200"
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
              <span class="title-font font-medium text-left">
                Constant communication with client
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full transform hover:scale-105">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="250"
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
              <span class="title-font font-medium text-left">
                Responsive design
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full transform hover:scale-105">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="300"
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
              <span class="title-font font-medium text-left">
                Continuous monitoring
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full transform hover:scale-105">
            <div
              class="bg-gray-100 rounded flex p-4 h-full items-center"
              data-aos="fade-down"
              data-aos-delay="350"
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
              <span class="title-font font-medium text-left">Unit tests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <section
    id="employement"
    class="text-gray-600 body-font py-16 my-16 bg-gray-100 "
  >
    <Header title="Employement History" />
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 mx-auto">
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
                  class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider"
                >
                  <a href="https://www.encora.com/">Encora</a>
                </h2>
                <p class="leading-relaxed">(August 2021 - present)</p>
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
                  class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider"
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
                3
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider"
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
                4
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider"
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
                5
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider"
                >
                  Independent Consultant
                </h2>
                <p class="leading-relaxed">(Oct. 2016 – Current)</p>
              </div>
            </div>
          </div>
          <img
            class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 scale-75"
            src="./images/undraw.png"
            alt="step"
          />
        </div>
      </div>
    </section>
  </section>

  <Projects />
  <Tech />
  <Contact bind:alert />
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
