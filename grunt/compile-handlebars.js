/**
* Grunt.js init config for module grunt-compile-handlebars
* @author  Lars Hendahl
*/
module.exports = {
  pagehead_en: {
    preHTML: 'src/handlebars/fixtures/pageHeadPre.html',
    template: 'src/handlebars/fixtures/pageHead.handlebars',
    helpers: ['src/handlebars/helpers/edatehelper.js'],
    templateData: 'src/handlebars/data/en/global.json',
    output: 'dist/html/partials/en/pageHead.html',
  },
  pagefoot_en: {
    preHTML: 'src/handlebars/fixtures/pageFootPre.html',
    postHTML: 'src/handlebars/fixtures/pageFootPost.html',
    template: 'src/handlebars/fixtures/pageFoot.handlebars',
    templateData: 'src/handlebars/data/en/global.json',
    output: 'dist/html/partials/en/pageFoot.html',
  },
  homepage_en: {
    preHTML: 'dist/html/partials/en/pageHead.html',
    postHTML: 'dist/html/partials/en/pageFoot.html',
    template : 'src/handlebars/fixtures/homePage.handlebars',
    templateData: 'src/handlebars/data/en/homePage.json',
    output: 'dist/html/en/homepage.html',
    globals: [
    'src/handlebars/data/en/global.json',
    ]
  },
  pagehead_sv: {
    preHTML: 'src/handlebars/fixtures/pageHeadPre.html',
    template: 'src/handlebars/fixtures/pageHead.handlebars',
    helpers: ['src/handlebars/helpers/edatehelper.js'],
    templateData: 'src/handlebars/data/sv/global.json',
    output: 'dist/html/partials/sv/pageHead.html',
  },
  pagefoot_sv: {
    preHTML: 'src/handlebars/fixtures/pageFootPre.html',
    postHTML: 'src/handlebars/fixtures/pageFootPost.html',
    template: 'src/handlebars/fixtures/pageFoot.handlebars',
    templateData: 'src/handlebars/data/sv/global.json',
    output: 'dist/html/partials/sv/pageFoot.html',
  },
  homepage_sv: {
    preHTML: 'dist/html/partials/sv/pageHead.html',
    postHTML: 'dist/html/partials/sv/pageFoot.html',
    template : 'src/handlebars/fixtures/homePage.handlebars',
    templateData: 'src/handlebars/data/sv/homePage.json',
    output: 'dist/html/sv/homepage.html',
    globals: [
    'src/handlebars/data/sv/global.json',
    ]
  },

  examples_pagehead_en: {
    template: 'src/handlebars/fixtures/examples/pageHead.handlebars',
    templateData: 'src/handlebars/data/en/global.json',
    output: 'dist/html/partials/en/examples/pageHead.html',
    helpers: ['src/handlebars/helpers/edatehelper.js'],
  },
  examples_pagefoot_en: {
    template: 'src/handlebars/fixtures/examples/pageFoot.handlebars',
    templateData: 'src/handlebars/data/en/global.json',
    output: 'dist/html/partials/en/examples/pageFoot.html',
  },
  examples_gridpage_en: {
    preHTML: 'dist/html/partials/en/examples/pageHead.html',
    postHTML: 'dist/html/partials/en/examples/pageFoot.html',
    template : 'src/handlebars/fixtures/examples/gridPage.handlebars',
    templateData: 'src/handlebars/data/en/examples/gridPage.json',
    output: 'dist/html/en/examples/grid.html',
    globals: [
    'src/handlebars/data/en/global.json',
    ]
  },
  examples_formpage_en: {
    preHTML: 'dist/html/partials/en/examples/pageHead.html',
    postHTML: 'dist/html/partials/en/examples/pageFoot.html',
    template : 'src/handlebars/fixtures/examples/formPage.handlebars',
    templateData: 'src/handlebars/data/en/examples/formPage.json',
    output: 'dist/html/en/examples/form.html',
    globals: [
    'src/handlebars/data/en/global.json'
    ]
  },
  examples_iconspage_en: {
    preHTML: 'dist/html/partials/en/examples/pageHead.html',
    postHTML: 'dist/html/partials/en/examples/pageFoot.html',
    template : 'src/handlebars/fixtures/examples/iconsPage.handlebars',
    templateData: 'src/handlebars/data/en/examples/iconsPage.json',
    output: 'dist/html/en/examples/icons.html',
    globals: [
    'src/handlebars/data/en/global.json',
    ]
  },
  examples_imagespage_en: {
    preHTML: 'dist/html/partials/en/examples/pageHead.html',
    postHTML: 'dist/html/partials/en/examples/pageFoot.html',
    template : 'src/handlebars/fixtures/examples/imagesPage.handlebars',
    templateData: 'src/handlebars/data/en/examples/imagesPage.json',
    output: 'dist/html/en/examples/images.html',
    globals: [
    'src/handlebars/data/en/global.json',
    ]
  },
  examples_widgetspage_en: {
    preHTML: 'dist/html/partials/en/examples/pageHead.html',
    postHTML: 'dist/html/partials/en/examples/pageFoot.html',
    template : 'src/handlebars/fixtures/examples/widgetsPage.handlebars',
    templateData: 'src/handlebars/data/en/examples/widgetsPage.json',
    output: 'dist/html/en/examples/widgets.html',
    globals: [
    'src/handlebars/data/en/global.json',
    ]
  },
  examples_elementspage_en: {
    preHTML: 'dist/html/partials/en/examples/pageHead.html',
    postHTML: 'dist/html/partials/en/examples/pageFoot.html',
    template : 'src/handlebars/fixtures/examples/elementsPage.handlebars',
    templateData: 'src/handlebars/data/en/examples/elementsPage.json',
    output: 'dist/html/en/examples/elements.html',
    globals: [
    'src/handlebars/data/en/global.json',
    ]
  },
  examples_metricspage_en: {
    preHTML: 'dist/html/partials/en/examples/pageHead.html',
    postHTML: 'dist/html/partials/en/examples/pageFoot.html',
    template : 'src/handlebars/fixtures/examples/metricsPage.handlebars',
    templateData: 'src/handlebars/data/en/examples/metricsPage.json',
    output: 'dist/html/en/examples/metrics.html',
    globals: [
    'src/handlebars/data/en/global.json',
    ]
  },
  examples_sectionspage_en: {
    preHTML: 'dist/html/partials/en/examples/pageHead.html',
    postHTML: 'dist/html/partials/en/examples/pageFoot.html',
    template : 'src/handlebars/fixtures/examples/sectionsPage.handlebars',
    templateData: 'src/handlebars/data/en/examples/sectionsPage.json',
    output: 'dist/html/en/examples/sections.html',
    globals: [
    'src/handlebars/data/en/global.json',
    ]
  }
};