const pluginTailwind = require('eleventy-plugin-tailwindcss');
const Image = require("@11ty/eleventy-img");
const Path = require("path");
const slugify = require("slugify");
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = (config) => {
    config.addPlugin(pluginTailwind, {
        src: 'src/assets/css/*'
    });

    /*
    Cache buster
    */
    const cacheBusterOptions = {
        createResourceHash(outputDirectory, url, target) {
            return Date.now();
        }
    };
    config.addPlugin(cacheBuster(cacheBusterOptions));

    config.setDataDeepMerge(true);

    config.addPassthroughCopy('src/assets/img/**/*');
    config.addPassthroughCopy('src/assets/fonts/**/*');

    config.addWatchTarget("src/assets/img/");
    config.addWatchTarget("src/assets/js/");

    config.addLayoutAlias('default', 'layouts/default.njk');
    config.addLayoutAlias('paint', 'layouts/paint.njk');
    config.addLayoutAlias('homepage', 'layouts/homepage.njk');

    config.addFilter('readableDate', require('./lib/filters/readableDate'));
    config.addFilter('minifyJs', require('./lib/filters/minifyJs'));
    config.addFilter("sortByOrder", sortByOrder);

    // minify html output
    config.addTransform('minifyHtml', require('./lib/transforms/minifyHtml'));

    /* Image shortcode for templating */
    config.addNunjucksAsyncShortcode("image", imageShortcode);
    config.addLiquidShortcode("image", imageShortcode);
    config.addJavaScriptFunction("image", imageShortcode);

    /* FILTER : Limit for post grid */
    config.addFilter("limit", function (array, limit) {
        return array.slice(0, limit);
    });

    /* FILTER : Sort by order (in front matter parameter) */
    function sortByOrder(values) {
        let vals = [...values];     // this *seems* to prevent collection mutation...
        return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
    }

    /* Slugify (safe url) */
    config.addFilter("slug", (input) => {
        const options = {
            replacement: "-",
            remove: /[&,+()$~%.'":*?<>{}]/g,
            lower: true
        };
        return slugify(input, options);
    });

    /* Markdown It enabled */
    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };

    config.setLibrary("md", markdownIt(options));

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
        // pathPrefix: "/subfolder/",
        templateFormats: ['md', 'njk', 'html'],
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: "njk"
    };
};

/* Image generator plugin parameters */
async function imageShortcode(src, alt, className, sizes = "(min-width: 640px) 50vw, 100vw") {
    let metadata = await Image(src, {
        widths: [366, 758, null],
        formats: ["webp", "jpeg"],
        urlPath: "/assets/img/",
        outputDir: "./dist/assets/img",
        filenameFormat: function (id, src, width, format) {
            const extension = Path.extname(src);
            const name = Path.basename(src, extension);
            return `${name}-${width}w.${format}`;
        }
    });
    let lowsrc = metadata.jpeg[0];
    let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

    return `<picture>
    ${Object.values(metadata).map(imageFormat => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
    }).join("\n")}
      <img
        src="${highsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        class="${className}"
        data-zoom-src="${highsrc.url}"
        loading="lazy"
        decoding="async">
    </picture>`;
}

// Shortcode for button "Prendre RDV"
// module.exports = function ({className}) {
//     return `<button class="button">${this.user(className)}</button>`;
// };
