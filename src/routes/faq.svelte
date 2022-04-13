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
    Either create a new
    <a href="https://github.com/MystPi/scratch-explorer/issues/new?assignees=&labels=&template=service-addition-edit-request.md&title=Service+Addition%2FEdit+Request%3A+%5BNAME%5D">issue</a>
    on the GitHub repository or leave a post on Scratch Explorer's
    <a href="https://scratch.mit.edu/discuss/topic/595985/">forum topic</a>. You should use this template for your post:
    (If you're editing your service, you can leave out any items and they will
    stay as they are.)
  </p>
  <pre>[quote]
[b]Service &lt;Addition / Edit&gt; Request[/b]
[b]Name:[/b] &lt;name of service&gt;
[b]Username:[/b] &lt;your Scratch username&gt;
[b]Description:[/b] &lt;description&gt;
[b]Link:[/b] &lt;link to the site&gt;
[b]For:[/b] &lt;forums, library, community, etc.&gt;
[b]Forum topic (optional):[/b] &lt;forum topic number&gt;
[b]Theme color:[/b] &lt;Tailwind CSS color name, eg. "violet" (<a href="https://tailwindcss.com/docs/customizing-colors">list</a>)&gt;
[b]Icon:[/b] &lt;icon ID, eg. "settings_suggest" (<a href="https://fonts.google.com/icons?icon.style=Rounded">list</a>)&gt;
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
  <h2>My site is already on Scratch Explorer and I want to change it!</h2>
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
