# Getting started

To start prototyping with **Numl** just add a single module to the page:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/numl@1.0.0-beta.1/dist/index.js"></script>
```

That's it! No build step, no explicit function call to apply changes.

If you want to prevent flash of unstyled content then add the following tag to the `<head>`:

```html
<style>*:not(:defined) { visibility: hidden; }</style>
```

Make sure you are using `nu-root` tags on the top-level of your app:

```html
<body>
  <nu-root>
    <nu-card>
      My first Numl application!
    </nu-card>
  </nu-root>
</body>
```

Now it's time to have fun!...
