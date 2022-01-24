<template>
  <section id="contact">
    <div
      class="w-full sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-0"
    >
      <div
        class="mb-5 lg:mb-10 flex text-center justify-center align-middle items-center"
      >
        <h2
          class="text-7xl md:text-9xl md:p-0 w-full text-zinc-900 leading-snug uppercase font-bold mb-0 whitespace-nowrap"
        >
          Contact
        </h2>
        <p
          class="text-center font-semibold text-white leading-normal text-3xl md:text-4xl p-0 m-0 self-center w-full absolute"
        >
          Get in touch
          <span
            class="w-20 border-b-4 border-cyan-500 m-0 p-0 md:pt-2 block mx-auto"
          ></span>
        </p>
      </div>
      <div
        class="pt-5 pr-10 pb-8 pl-10 lg:pt-20 lg:pr-20 lg:pb-16 lg:pl-20 relative z-10"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 flex-auto">
          <div class="text-center lg:text-left w-full">
            <div class="mb-5">
              <span
                class="uppercase block text-cyan-500 font-bold text-sm mb-3 tracking-widest"
                >Say Hello</span
              >
              <h2 class="mb-0 text-4xl leading-snug tracking-tight">
                Let's talk about your next project
              </h2>
            </div>
            <p
              class="mb-0 text-base leading-relaxed font-normal text-white-opacity-60"
            >
              Even if it's not for a project, I still love to connect with
              people. Drop me a line and let's see what we can do!
            </p>
            <h3
              class="text-2xl tracking-tight font-sourcecode mb-4 lg:mb-0 mt-7"
            >
              <a
                href="mailto:hello@reno.sh"
                target="_blank"
                class="text-cyan-600 hover:text-cyan-400 active:text-cyan-400 focus:text-cyan-400 transition-colors"
                >hello@reno.sh</a
              >
            </h3>
            <div
              v-if="success"
              class="rounded-md border border-green-700 p-4 mt-4"
            >
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg
                    class="h-5 w-5 text-green-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-700">
                    {{ successMessage }}
                  </p>
                </div>
                <div class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button
                      type="button"
                      class="inline-flex bg-transparent rounded-full p-1.5 text-green-500 hover:bg-green-400/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                      @click="success = false"
                    >
                      <span class="sr-only">Dismiss</span>
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="error" class="rounded-md border border-red-600 p-4 mt-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg
                    class="h-5 w-5 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-red-600">
                    {{ errorMessage }}
                  </p>
                </div>
                <div class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button
                      type="button"
                      class="inline-flex bg-transparent rounded-full p-1.5 text-red-500 hover:bg-red-400/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600"
                      @click="error = false"
                    >
                      <span class="sr-only">Dismiss</span>
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="md:ml-8 relative">
            <form
              id="contact-form"
              action="https://formspree.io/f/xnqwjrne"
              method="POST"
              @submit.prevent="handleContactSubmit"
            >
              <input
                id="name"
                v-model="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                aria-required="true"
                autocomplete="off"
                class="block w-full border-0 border-b-2 border-b-white-opacity-40 pt-1 pb-3 px-2 text-white-opacity-40 placeholder-white-opacity-40 bg-transparent duration-300 focus:text-cyan-400 focus:border-b-cyan-400 text-base mb-7 transition-all outline-0 ring-0"
              />
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                autocomplete="off"
                aria-required="true"
                class="block w-full border-0 border-b-2 border-b-white-opacity-40 pt-1 pb-3 px-2 text-white-opacity-40 placeholder-white-opacity-40 bg-transparent duration-300 focus:text-cyan-400 focus:border-b-cyan-400 text-base mb-7 transition-all outline-0 ring-0"
              />
              <input
                id="subject"
                v-model="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                required
                autocomplete="off"
                aria-required="true"
                class="block w-full border-0 border-b-2 border-b-white-opacity-40 pt-1 pb-3 px-2 text-white-opacity-40 placeholder-white-opacity-40 bg-transparent duration-300 focus:text-cyan-400 focus:border-b-cyan-400 text-base mb-7 transition-all outline-0 ring-0"
              />
              <textarea
                id="message"
                v-model="message"
                name="message"
                type="text"
                placeholder="Message"
                required
                autocomplete="off"
                aria-required="true"
                class="block w-full border-0 border-b-2 border-b-white-opacity-40 pt-1 pb-8 px-2 text-white-opacity-40 placeholder-white-opacity-40 bg-transparent duration-300 focus:text-cyan-400 focus:border-b-cyan-400 text-base mb-7 transition-all outline-0 ring-0 h-24"
              ></textarea>
              <button
                type="submit"
                class="absolute right-0 mr-2 bottom-10 border-0 text-cyan-600 uppercase bg-transparent p-0 text-base font-bold tracking-widest leading-none hover:text-cyan-400 focus:text-cyan-400 active:text-cyan-400 transition-all duration-300"
                :class="{ 'text-white-opacity-40': submitting }"
                :disabled="submitting"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Contact',

  data() {
    return {
      submitting: false,
      error: false,
      errorMessage: '',
      errorInfo: {},
      success: false,
      successMessage: 'thanks for contacting',
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  },

  methods: {
    async handleContactSubmit() {
      this.submitting = true

      await fetch('https://formspree.io/f/xnqwjrne', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        }),
      })
        .then((res) => {
          this.submitting = false
          this.success = true
          this.successMessage =
            "Thank you for contacting me, I'll be in touch shortly!"
          this.name = ''
          this.email = ''
          this.subject = ''
          this.message = ''
        })
        .catch((err) => {
          this.submitting = false
          this.error = true
          this.errorMessage = 'Something went wrong, please try again later.'
          this.errorInfo = err
        })
    },
  },
}
</script>
