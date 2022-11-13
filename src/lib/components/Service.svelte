<script>
  import { Icon } from '$lib/components';

  export let icon = 'explore';
  export let title = 'Scratch Explorer';
  export let href = '/';
  export let topic = '';
  export let theme = '~urge';
  export let type = 'Forums'
  export let username = '';
  if (!Array.isArray(username)) username = [username];
</script>

<div class="p-0 text-left card">
  <div class="relative p-4">
    <Icon {theme} shield className="absolute right-4">{icon}</Icon>
    <p class="support">{type}</p>
    <h2 class="text-xl heading">{title}</h2>
    <p><slot>Explore the latest and greatest Scratch services taking the community by storm.</slot></p>
    {#if username}
      <p class="support mt-2">
        Made by
        <a class="underline" href="https://scratch.mit.edu/users/{username[0]}/" target="_blank">{username[0]}</a>
        {#each username.slice(1) as user}
          and <a class="underline" href="https://scratch.mit.edu/users/{user}/" target="_blank">{user}</a>
        {/each}
      </p>
    {/if}
  </div>
  <section class="section flex gap-2 p-4 ~neutral">
    <a {href} target="_blank" class="@high button {theme}">Visit {title}</a>
    {#if topic}
      <a href="https://scratch.mit.edu/discuss/topic/{topic}/" target="_blank" class="button ~neutral">Forum Topic</a>
    {/if}
  </section>
</div>
