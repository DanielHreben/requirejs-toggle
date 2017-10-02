# requirejs-toggle
Allows you to turn off requirejs

I hope you will newer need this hack, but sometimes it can be very useful.
See https://github.com/requirejs/requirejs/issues/947 for details.

```html
<!-- Let's assume requirejs already active... -->

<!-- Using this script tag you can disable it -->
<script src="https://unpkg.com/requirejs-toggle"></script>

<!-- After that, this UMD script will register window.React variable instead of registering React as requirejs module -->
<script src="https://unpkg.com/react@15/dist/react.min.js"></script>

<!-- Then you can restore requirejs if you need it, using same script tag again -->
<script src="https://unpkg.com/requirejs-toggle"></script>
```
