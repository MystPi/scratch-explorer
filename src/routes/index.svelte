<script>
  import { Header, Service, Category } from '$lib/components';
  import { categories } from '$lib/services';
</script>

<svelte:head>
  <title>Scratch Explorer</title>
</svelte:head>

<Header></Header>

<h1 id="explore" class="heading">Explore</h1>
<h3 class="subheading">Want to submit or edit your site? Head to the <a href="/faq" class="underline">FAQs</a> page to get started.</h3>

{#each Object.entries(categories) as [letter, services]}
  <Category letter={letter.toUpperCase()}>
    {#each services as service}
      <Service {...service}>
        {service.description}
      </Service>
    {/each}
  </Category>
{/each}