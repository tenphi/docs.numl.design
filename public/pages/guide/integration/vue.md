# Integration with Vue.js

Vue.js requires just a little step to use **Numl**. You should add all custom elements to the **Ignore List**.

For short, we can use Regexp:

```javascript
Vue.config.ignoredElements = [/^nu-/];
```

If you are using any other Web Components, just add them to the list.

## Attribute binding

Bind `string` attribute:

```html
<nu-btn :padding="padding"></nu-btn>
```

Bind `boolean` attribute:

```html
<nu-btn :special="isSpecial"></nu-btn>
```

## Bind event handlers

Bind event handlers as you do it with other Vue Components.

**tap** event binding:

```html
<nu-btn
  @tap="onTap">
  Button
</nu-btn>
```

**input** event binding:

```html
<nu-switch @input="onInput($event.detail)"></nu-switch>
```

## Real-world examples (repositories)

* [This Storybook](!https://github.com/tenphi/numl-storybook)
* [Tenphi's homepage](!https://github.com/tenphi/tenphi.me)
* [Web Standards Calendar](!https://github.com/katrinLuna/frontend-events-numl)

