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
            display: ['"Nunito"', 'sans-serif'],
            body: ['Roboto', 'sans-serif']
        },
        extend: {
            borderRadius: {
                DEFAULT: '0.5rem'
            },
            colors: {
                'background': {
                    DEFAULT: '#ffffff',
                },
                'black': {
                    DEFAULT: '#5E6569',
                },
                "primary": {
                    DEFAULT: "#B1CEFB",
                    "50": "#F5F9FF",
                    "100": "#F0F6FE",
                    "200": "#E2EDFE",
                    "300": "#CEE1FD",
                    "400": "#C0D8FC",
                    "500": "#B1CEFB",
                    "600": "#5F9CF7",
                    "700": "#0C68F3",
                    "800": "#0847A5",
                    "900": "#042452"
                },
                "gray": {
                    DEFAULT: "#757D82",
                    "50": "#F2F2F3",
                    "100": "#E4E6E7",
                    "200": "#C7CACC",
                    "300": "#ACB1B4",
                    "400": "#91989C",
                    "500": "#757D82",
                    "600": "#5E6569",
                    "700": "#464B4E",
                    "800": "#2E3133",
                    "900": "#181A1B"
                },
                "purple": {
                    DEFAULT: "#A855F7",
                    "50": "#F8F0FE",
                    "100": "#EEDDFD",
                    "200": "#DCBBFC",
                    "300": "#CB99FA",
                    "400": "#BA77F9",
                    "500": "#A855F7",
                    "600": "#8815F4",
                    "700": "#6609BE",
                    "800": "#44067F",
                    "900": "#22033F"
                },
                "red": {
                    DEFAULT: "#EF4444",
                    "50": "#FDECEC",
                    "100": "#FCD9D9",
                    "200": "#F9B4B4",
                    "300": "#F58E8E",
                    "400": "#F26969",
                    "500": "#EF4444",
                    "600": "#E11313",
                    "700": "#A90F0F",
                    "800": "#710A0A",
                    "900": "#380505"
                },
                "green": {
                    DEFAULT: "#22C55E",
                    "50": "#E9FBF0",
                    "100": "#CFF7DE",
                    "200": "#9FEFBC",
                    "300": "#6FE69B",
                    "400": "#40DE7A",
                    "500": "#22C55E",
                    "600": "#1B9D4B",
                    "700": "#147538",
                    "800": "#0D4E25",
                    "900": "#072713"
                },
                "blue": {
                    DEFAULT: "#3B82F6",
                    "50": "#EBF3FE",
                    "100": "#D8E6FD",
                    "200": "#B1CEFB",
                    "300": "#8AB5FA",
                    "400": "#639CF8",
                    "500": "#3B82F6",
                    "600": "#0B60EA",
                    "700": "#0848B0",
                    "800": "#053075",
                    "900": "#03183B"
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
