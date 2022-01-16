const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.slate,
      blue: colors.blue,
      cyan: colors.cyan,
      zinc: colors.zinc,
      'body-gray': '#111215',
      'body-gray-after': 'rgba(255, 255, 255, 0.01)',
      skill: 'rgba(255, 255, 255, 0.01)',
      'white-opacity': {
        10: 'rgba(255, 255, 255, 0.1)',
        20: 'rgba(255, 255, 255, 0.2)',
        30: 'rgba(255, 255, 255, 0.3)',
        40: 'rgba(255, 255, 255, 0.4)',
        50: 'rgba(255, 255, 255, 0.5)',
        60: 'rgba(255, 255, 255, 0.6)',
        70: 'rgba(255, 255, 255, 0.7)',
        80: 'rgba(255, 255, 255, 0.8)',
        90: 'rgba(255, 255, 255, 0.9)',
        100: 'rgba(255, 255, 255, 1)',
      },
      'black-opacity': {
        10: 'rgba(0, 0, 0, 0.1)',
        20: 'rgba(0, 0, 0, 0.2)',
        30: 'rgba(0, 0, 0, 0.3)',
        40: 'rgba(0, 0, 0, 0.4)',
        50: 'rgba(0, 0, 0, 0.5)',
        60: 'rgba(0, 0, 0, 0.6)',
        70: 'rgba(0, 0, 0, 0.7)',
        80: 'rgba(0, 0, 0, 0.8)',
        90: 'rgba(0, 0, 0, 0.9)',
        100: 'rgba(0, 0, 0, 1)',
      },
    },
    extend: {
      fontFamily: {
        sourcesans: ['"Source Sans Pro"', 'sans-serif'],
        sourcecode: ['"Source Code Pro"', 'monospace'],
      },
      backgroundImage: {
        'mountains-hiking': "url('/images/profile/reno-hiking-background.jpg')",
      },
      boxShadow: {
        even: '0 0 10px rgb(0 0 0 / 0.1), 0 0 5px rgb(0 0 0 / 0.1)',
        'skill-item': '0 2px 70px 0 rgb(34,211,238 / 5%)',
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`
        })
      })
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`
        })
      })
    }),

    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
        },
        '.content-before': {
          content: 'attr(data-before)',
        },
        '.content-after': {
          content: 'attr(data-after)',
        },
      }

      addUtilities(contentUtilities, ['before', 'after'])
    }),
  ],
  safelist: ['bg-body-gray', 'bg-body-gray-after'],
}
