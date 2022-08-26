<script>
  import { Service } from '$lib/components';
</script>

<svelte:head>
  <title>FAQs - Scratch Explorer</title>
</svelte:head>

<div class="content">
  <h1>Frequently Asked Questions</h1>
  <h2>How do I submit/edit my service?</h2>
  <p>
    Simply leave a post on Scratch Explorer's
    <a href="https://scratch.mit.edu/discuss/topic/595985/">forum topic</a> with the following template.
    If you're editing your service, you can leave out any items and they will
    stay as they are. Please make sure to choose your theme color and icon
    <em>from the links given</em>!
  </p>
  <pre>[quote]
[b]Service Request[/b]
[b]Name:[/b] (name of service)
[b]Username:[/b] (Scratch username of the creator)
[b]Description:[/b] (description)
[b]Link:[/b] (link to the site)
[b]For:[/b] (forums, projects, studios, library, community, etc.)
[b]Forum topic (optional):[/b] (forum topic ID)
[b]Theme color:[/b] (choose a color name from [url=https://tailwindcss.com/docs/customizing-colors]here[/url])
[b]Icon:[/b] (choose an icon from [url=https://fonts.google.com/icons?icon.style=Rounded&icon.set=Material+Icons]here[/url])
[/quote]</pre>
</div>

<div class="max-w-md mt-4 mb-8">
  <Service type="<for>" icon="settings_suggest" topic="0" title="<name of service>">
    <div contenteditable="true">
      &lt;description&gt; This is editable so you can preview your card.
      Ideally the description should be 1 to 3 lines long.
    </div>
  </Service>
</div>

<div class="content">
  <h2>My site is already on Scratch Explorer and I want to change it</h2>
  <p>
    Just follow the instructions above to edit your service.
  </p>
  <h2>Can I add my library?</h2>
  <p>
    Yup, just put 'Library' for the 'For' option. A link to its GitHub
    repository is acceptable for the 'Link' option.
  </p>
  <h2>Do you have to pay for any services?</h2>
  <p>
    Nope, all of the services on Scratch Explorer are free,
    and most of them are open source as well.
  </p>
</div>
