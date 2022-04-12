<script>
  export let letter = 'A';
</script>

<div id={letter.toLowerCase()} class="mt-12 md:mt-16 md:flex">
  <section class="self-start mb-4 md:mb-0 md:mr-16 md:sticky top-12">
    <h1 class="heading ~neutral w-8">{letter}</h1>
  </section>
  <article class="flex flex-col items-start w-full grid-cols-2 gap-8 md:grid">
    <slot/>
  </article>
</div>