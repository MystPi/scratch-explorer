<script>
  import { Icon } from '$lib/components';

  export let icon = 'explore';
  export let title = 'Scratch Explorer';
  export let href = '/';
  export let topic = '';
  export let theme = '~urge';
  export let type = 'Forums'
</script>

<div class="p-0 text-left card">
  <div class="relative p-4">
    <Icon {theme} shield className="absolute right-4">{icon}</Icon>
    <p class="support">{type}</p>
    <h2 class="mb-1 text-xl heading">{title}</h2>
    <p><slot>Explore the latest and greatest Scratch services taking the community by storm.</slot></p>
  </div>
  <section class="section flex gap-2 p-4 ~neutral">
    <a {href} target="_blank" class="@high button {theme}">Visit {title}</a>
    {#if topic}
      <a href="https://scratch.mit.edu/discuss/topic/{topic}" target="_blank" class="button ~neutral">Forum Topic</a>
    {/if}
  </section>
</div>