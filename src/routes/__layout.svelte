<script>
  import '../app.css';
  import { Nav, Container } from '$lib/components';
</script>

<Container>
  <Nav></Nav>
  <hr class="sep"/>
  <slot/>
  <hr class="sep"/>
  <p class="text-xs text-center content">Scratch Explorer made with 💖 by <a href="https://scratch.mit.edu/users/NFlex23">NFlex23</a>.</p>
</Container>
