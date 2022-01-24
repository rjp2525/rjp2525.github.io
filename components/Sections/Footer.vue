<template>
  <footer class="mt-5 pt-6 max-w-full sm:max-w-6xl mx-auto">
    <div
      class="flex items-center justify-center md:justify-between text-sm text-white-opacity-50"
    >
      <div class="p-4">
        <span
          >Copyright &copy; {{ new Date().getFullYear() }} Reno J Philibert. All
          Rights Reserved.</span
        >
      </div>
      <div class="p-4">
        <ul>
          <li>
            <a
              href="https://github.com/rjp2525"
              target="_blank"
              class="hover:text-cyan-400 focus:text-cyan-400 active:text-cyan-400"
              >GitHub</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
