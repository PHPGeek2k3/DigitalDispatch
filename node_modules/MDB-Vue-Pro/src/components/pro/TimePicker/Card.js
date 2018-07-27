import Colorable from './colorable';

export default {
  name: 'card',

  mixins: [Colorable],

  props: {
    flat: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    hover: Boolean,
    img: String,
    raised: Boolean,
    tag: {
      type: String,
      default: 'div'
    },
    tile: Boolean,
    width: [String, Number],
    activeClass: String,
    append: Boolean,
    disabled: Boolean,
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: String,
    href: [String, Object],
    to: [String, Object],
    nuxt: Boolean,
    replace: Boolean,
    target: String
  },

  computed: {
    classes () {
      return this.addBackgroundColorClassChecks({
        'card': true,
        'card--flat': this.flat,
        'card--horizontal': this.horizontal,
        'card--hover': this.hover,
        'card--raised': this.raised,
        'card--tile': this.tile,
        'theme--light': this.light,
        'theme--dark': this.dark
      });
    },
    styles () {
      const style = {
        height: isNaN(this.height) ? this.height : `${this.height}px`
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      if (this.width) {
        style.width = isNaN(this.width) ? this.width : `${this.width}px`;
      }

      return style;
    }
  },
  methods: {
    click () {
      // empty for now
    },
    generateRouteLink () {
      let exact = this.exact;
      let tag;

      const data = {
        attrs: { disabled: this.disabled },
        class: this.classes,
        props: {},
        [this.to ? 'nativeOn' : 'on']: {
          // ...this.$listeners,
          click: this.click
        }
      };

      if (typeof this.exact === 'undefined') {
        exact = this.to === '/' ||
          (this.to === Object(this.to) && this.to.path === '/');
      }

      if (this.to) {
        // Add a special activeClass hook
        // for component level styles
        let activeClass = this.activeClass;
        let exactActiveClass = this.exactActiveClass || activeClass;

        if (this.proxyClass) {
          activeClass += ' ' + this.proxyClass;
          exactActiveClass += ' ' + this.proxyClass;
        }

        tag = this.nuxt ? 'nuxt-link' : 'router-link';
        Object.assign(data.props, {
          to: this.to,
          exact,
          activeClass,
          exactActiveClass,
          append: this.append,
          replace: this.replace
        });
      } else {
        tag = (this.href && 'a') || this.tag || 'a';

        if (tag === 'a') {
          if (this.href) data.attrs.href = this.href;
          if (this.target) data.attrs.target = this.target;
        }
      }

      return { tag, data };
    }
  },

  render (h) {
    const { tag, data } = this.generateRouteLink();

    data.style = this.styles;

    return h(tag, data, this.$slots.default);
  }
};
