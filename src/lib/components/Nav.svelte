<script>
  import { page } from '$app/stores';

  $: path = $page.url.pathname + $page.url.hash;
</script>

<nav class="flex justify-between text-neutral-700">
  <div>
    <a href="/" class="portal" class:is-active={path === '/'}>Home</a>
    <a href="/#explore" class="portal" class:is-active={path === '/#explore' | path.length === 3}>Explore</a>
    <a href="/faq" class="portal" class:is-active={path === '/faq'}>FAQs</a>
  </div>
  <div class="">
    <a href="https://github.com/mystpi/scratch-explorer" class="portal">GitHub</a>
  </div>
</nav>

<style lang="postcss">
  .is-active {
    @apply active ~urge;
  }
</style>