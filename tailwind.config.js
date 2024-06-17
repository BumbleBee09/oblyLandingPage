module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, rgba(47,10,15,1), rgba(14,32,41,1))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

