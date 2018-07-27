export var createSimpleFunctional = function (c, el = 'div', name) {
  let nameFn = name;
  nameFn = name || c.replace(/__/g, '-');

  return {
    name: `v-${nameFn}`,
    functional: true,

    render: (h, { data, children }) => {
      data.staticClass = (`${c} ${data.staticClass || ''}`).trim();

      return h(el, data, children);
    }
  };
};

export var createSimpleTransition = function (name, origin = 'top center 0', mode) {
  return {
    name,

    functional: true,

    props: {
      origin: {
        type: String,
        default: origin
      }
    },

    render (h, context) {
      context.data = context.data || {};
      context.data.props = { name };
      context.data.on = context.data.on || {};

      if (mode) context.data.props.mode = mode;

      context.data.on.beforeEnter = el => {
        el.style.transformOrigin = context.props.origin;
        el.style.webkitTransformOrigin = context.props.origin;
      };

      return h('transition', context.data, context.children);
    }
  };
};

export var createJavaScriptTransition = function (name, functions, css = true, mode = 'in-out') {
  return {
    name,

    functional: true,

    props: {
      css: {
        type: Boolean,
        default: css
      },
      mode: {
        type: String,
        default: mode
      }
    },

    render (h, context) {
      const data = {
        props: {
          name
        },
        on: functions
      };

      return h('transition', data, context.children);
    }
  };
};

export var directiveConfig = function (binding, defaults = {}) {
  return Object.assign({},
    defaults,
    binding.modifiers,
    { value: binding.arg },
    binding.value || {}
  );
};

export var addOnceEventListener = function (el, event, cb) {
  var once = () => {
    el.removeEventListener(event, once, false);
    return cb();
  };

  el.addEventListener(event, once, false);
};

export var getObjectValueByPath = function (obj, path) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (!path || path.constructor !== String) return;
  let d = path;
  // convert indexes to properties
  d = d.replace(/\[(\w+)\]/g, '.$1');
  // strip a leading dot
  d = d.replace(/^\./, '');
  const a = d.split('.');
  let p = '';
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (obj instanceof Object && k in obj) {
      p = obj[k];
    } else {
      return;
    }
  }
  return p;
};

export var createRange = function (length) {
  return [...Array.from({ length }, (v, k) => k)];
};

export var getZIndex = function (el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;

  const index = window.getComputedStyle(el).getPropertyValue('z-index');

  if (isNaN(index)) return getZIndex(el.parentNode);
  return index;
};

const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

export var escapeHTML = function (str) {
  return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag);
};

export var filterObjectOnKeys = function (obj, keys) {
  const filtered = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key];
    }
  }

  return filtered;
};

export var filterChildren = function (array = [], tag) {
  return array.filter(child => {
    return child.componentOptions &&
      child.componentOptions.Ctor.options.name === tag;
  });
};
