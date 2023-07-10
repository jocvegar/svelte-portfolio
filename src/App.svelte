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
  AOS.init();

  const visible = [false, false];
  let open = false;
  let alert = false;

  onMount(() => {
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
    <section class="body-font text-gray-600">
      <div
        class="container mx-auto flex flex-col items-center px-5 py-8 md:flex-row md:py-16"
      >
        <div
          class="order-last mb-16 flex flex-col items-center text-center md:order-first md:mb-4 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
        >
          <h1
            class="title-font mb-4 text-3xl font-medium text-gray-200 sm:text-4xl"
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
          <p class="mb-8 text-2xl leading-relaxed">
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
              class="inline-flex rounded border-0 bg-anaranjado py-2 px-6 text-lg text-white shadow-md hover:bg-red-600 focus:outline-none"
            >
              More
            </button>
            <button
              class="ml-4 inline-flex rounded border-0 bg-gray-100 py-2 px-6 text-lg text-gray-700 shadow-md hover:bg-gray-200 focus:outline-none"
            >
              <a href="/JoseVegaCV.pdf" download> Download Resume </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mb-16 w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
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

    <section id="about" class="body-font bg-gray-100 text-gray-600">
      <div class="container mx-auto px-5 py-16">
        <Header title="About" />
        <div class="-m-4 flex flex-wrap">
          <div class="mb-6 p-4 lg:mb-0 lg:w-1/3">
            <div class="h-full text-center">
              <div
                class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-light-anaranjado text-anaranjado shadow"
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
                class="mt-6 mb-4 inline-block h-1 w-10 rounded bg-anaranjado"
              />
            </div>
          </div>
          <div class="mb-6 p-4 lg:mb-0 lg:w-1/3">
            <div class="h-full text-center">
              <div
                class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-light-anaranjado text-anaranjado shadow"
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
                class="mt-6 mb-4 inline-block h-1 w-10 rounded bg-anaranjado"
              />
            </div>
          </div>
          <div class="p-4 lg:mb-0 lg:w-1/3">
            <div class="h-full text-center">
              <div
                class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-light-anaranjado text-anaranjado shadow"
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
                class="mt-6 mb-4 inline-block h-1 w-10 rounded bg-anaranjado"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="body-font text-gray-600 ">
      <div class="container mx-auto px-5 py-24">
        <Header
          title="Design & Development"
          description="Clean, modern designs - optimized for performance"
        />
        <div class="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {#each userData.skills as skill}
            <div class="w-full transform p-2 hover:scale-105 sm:w-1/2">
              <div
                class="flex h-full items-center rounded bg-gray-100 p-4"
                data-aos="fade-down"
                data-aos-delay={skill.delay}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-anaranjado"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span class="title-font text-left font-medium">
                  {skill.name}
                </span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </main>

  <section
    id="employement"
    class="body-font my-16 bg-gray-100 py-16 text-gray-600 "
  >
    <Header title="Employement History" />
    <section class="body-font text-gray-600">
      <div class="container mx-auto flex flex-wrap px-5">
        <div class="flex w-full flex-wrap">
          <div class="mx-auto md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
            {#each userData.work as work}
              <div class="relative flex pb-12">
                <div
                  class="absolute inset-0 flex h-full w-12 items-center justify-center"
                >
                  <div class="pointer-events-none h-full w-1 bg-gray-200" />
                </div>
                <div
                  class="relative z-10 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-anaranjado text-white shadow"
                >
                  {work.order}
                </div>
                <div class="flex-grow pl-4">
                  <h2
                    class="title-font mb-1 text-lg font-medium tracking-wider text-gray-900"
                  >
                    <a href={work.link}>{work.name}</a>
                  </h2>
                  <p class="leading-relaxed">({work.date})</p>
                </div>
              </div>
            {/each}
          </div>
          <img
            class="mt-12 scale-75 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-3/5"
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
