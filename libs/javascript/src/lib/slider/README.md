[![glide.js](https://glidejs.com/images/glidejs-logotype-dark.png)](https://glidejs.com)

### [Glide.js](https://glidejs.com) is a dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more

[![Build Status](https://api.travis-ci.org/glidejs/glide.svg?branch=master)](https://travis-ci.org/glidejs/glide)

What can convince you:

- **Dependency-free**. Everything included, ready for action.
- Lightweight. Only **~23kb (~7kb gzipped)** with every functionality on board.
- **Modular**. Remove unused modules and drop script weight even more.
- **Extendable**. Plug-in your own modules with additional functionalities.
- **Bundlers ready**. Using Rollup or Webpack? We have your back.

## Getting started

Pull-in a latest version with NPM ...

```bash
npm install @glidejs/glide
```

... provide `<link>` to the required core stylesheet. You can also optionally add an included theme stylesheet ...

```html
<!-- Required Core stylesheet -->
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css" />

<!-- Optional Theme stylesheet -->
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css" />
```

... then, prepare a little bit of necessary markup ...

```html
<div class="glide">
  <div data-glide-el="track" class="glide__track">
    <ul class="glide__slides">
      <li class="glide__slide"></li>
      <li class="glide__slide"></li>
      <li class="glide__slide"></li>
    </ul>
  </div>
</div>
```

... and finally, initialize and mount a Glide.

```js
import Glide from '@glidejs/glide';

new Glide('.glide').mount();
```

Need a few selected modules? Import and mount only what you need.

```js
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide').mount({ Controls, Breakpoints });
```

## Browser Support

- IE 11+
- Edge
- Chrome 10+
- Firefox 10+
- Opera 15+
- Safari 5.1+
- Safari iOS 9+

## Building

Build using NPM scripts. The following scripts are available:

- `build:css` - Outputs CSS files from SASS files.
- `build:js` - Outputs all destination variants of the script.
- `build` - Comprehensively builds the entire library.
- `test` - Runs complete test suite.
- `lint` - Lints library JavaScript files.
