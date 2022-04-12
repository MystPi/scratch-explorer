<script>
  export let theme = '~urge';
  export let shield = false;
  export let className = '';
  export let size = '';
</script>

<span class:shield={shield} class:p-3={shield} class="select-none {theme} {className}">
  <span class="icon {size}">
    <i class="material-icons-round {size}"><slot>explore</slot></i>
  </span>
</span>