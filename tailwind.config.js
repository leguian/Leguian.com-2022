module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.njk', './src/**/*.svg', './src/**/*.md', './src/**/*.json'],
        layers: ['components', 'utilities']
    },
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            display: ['Roboto', 'sans-serif'],
            body: ['Roboto', 'sans-serif']
        },
        extend: {
            borderRadius: {
                DEFAULT: '0.5rem'
            },
            colors: {
                'background': {
                    DEFAULT: '#1d1d1d',
                },
                'black': {
                    DEFAULT: '#000000',
                },
                'white': {
                    DEFAULT: '#e6e6e6',
                },
                "primary": {
                    DEFAULT: "#1d1d1d",
                    '50': '#ffffff',
                    '100': '#e6e6e6',
                    '200': '#cccccc',
                    '300': '#b3b3b3',
                    '400': '#999999',
                    '500': '#808080',
                    '600': '#666666',
                    '700': '#4d4d4d',
                    '800': '#333333',
                    '900': '#1d1d1d',
                },
                "gray": {
                    DEFAULT: "#757D82",
                    '50': '#ffffff',
                    '100': '#e6e6e6',
                    '200': '#cccccc',
                    '300': '#b3b3b3',
                    '400': '#999999',
                    '500': '#808080',
                    '600': '#666666',
                    '700': '#4d4d4d',
                    '800': '#333333',
                    '900': '#1d1d1d',
                }
            }
        }
    },
    variants: {
        fill: ['hover', 'focus'], // this line does the trick
        extend: {},
    },
    plugins: [],
};
