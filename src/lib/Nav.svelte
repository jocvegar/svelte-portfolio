<script>
  import userData from "../constants/userData";
  import * as animateScroll from "svelte-scrollto";

  const goHome = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
</script>

<header class="text-gray-600 body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <a
      name="home"
      on:click={goHome}
      class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 text-white p-2 bg-anaranjado rounded-full"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          fill-rule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>

      <span class="ml-3 text-xl">{userData.name}</span>
    </a>

    <nav
      class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
    >
      <a
        class="mr-5 transition duration-500 ease-in-out hover:text-anaranjado transform hover:-translate-y-1 hover:scale-110"
        name="navigation"
        on:click={() =>
          animateScroll.scrollTo({
            element: "#div1",
            offset: 50,
          })}
      >
        About
      </a>

      <a
        name="navigation"
        class="mr-5 transition duration-500 ease-in-out hover:text-anaranjado transform hover:-translate-y-1 hover:scale-110"
      >
        Projects
      </a>
      <a
        name="navigation"
        class="mr-5 transition duration-500 ease-in-out hover:text-anaranjado transform hover:-translate-y-1 hover:scale-110"
      >
        No idea
      </a>
      <a
        name="navigation"
        class="mr-5 transition duration-500 ease-in-out hover:text-anaranjado transform hover:-translate-y-1 hover:scale-110"
      >
        There
      </a>
    </nav>

    <button
      class="transition duration-500 ease-in-out inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-anaranjado hover:text-white rounded text-base mt-4 md:mt-0 transform hover:-translate-y-1 hover:scale-110"
      on:click={() =>
        animateScroll.scrollTo({
          element: "#contact",
          offset: 50,
        })}
    >
      Contact
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 ml-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
        />
      </svg>
    </button>
  </div>
</header>
