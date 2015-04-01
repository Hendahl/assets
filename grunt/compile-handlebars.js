/**
* Grunt.js init config for module grunt-compile-handlebars
* @author  lars.hendahl@cygni.se
*/
module.exports = {
  pagehead_en: {
          preHTML: 'src/handlebars/fixtures/pageHeadPre.html',
          template: 'src/handlebars/fixtures/pageHead.handlebars',
          templateData: 'src/handlebars/data/en/global.json',
          output: 'dist/html/temp/en/pageHead.html',
  },
  pagefoot_en: {
          preHTML: 'src/handlebars/fixtures/pageFootPre.html',
          postHTML: 'src/handlebars/fixtures/pageFootPost.html',
          template: 'src/handlebars/fixtures/pageFoot.handlebars',
          templateData: 'src/handlebars/data/en/global.json',
          output: 'dist/html/temp/en/pageFoot.html',
  },
  homepage_en: {
           preHTML: 'dist/html/temp/en/pageHead.html',
           postHTML: 'dist/html/temp/en/pageFoot.html',
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
          templateData: 'src/handlebars/data/sv/global.json',
          output: 'dist/html/temp/sv/pageHead.html',
  },
  pagefoot_sv: {
          preHTML: 'src/handlebars/fixtures/pageFootPre.html',
          postHTML: 'src/handlebars/fixtures/pageFootPost.html',
          template: 'src/handlebars/fixtures/pageFoot.handlebars',
          templateData: 'src/handlebars/data/sv/global.json',
          output: 'dist/html/temp/sv/pageFoot.html',
  },
  homepage_sv: {
           preHTML: 'dist/html/temp/sv/pageHead.html',
           postHTML: 'dist/html/temp/sv/pageFoot.html',
           template : 'src/handlebars/fixtures/homePage.handlebars',
           templateData: 'src/handlebars/data/sv/homePage.json',
           output: 'dist/html/sv/homepage.html',
           globals: [
              'src/handlebars/data/sv/global.json',
           ]
  },
  pagehead_no: {
          preHTML: 'src/handlebars/fixtures/pageHeadPre.html',
          template: 'src/handlebars/fixtures/pageHead.handlebars',
          templateData: 'src/handlebars/data/no/global.json',
          output: 'dist/html/temp/no/pageHead.html',
  },
  pagefoot_no: {
          preHTML: 'src/handlebars/fixtures/pageFootPre.html',
          postHTML: 'src/handlebars/fixtures/pageFootPost.html',
          template: 'src/handlebars/fixtures/pageFoot.handlebars',
          templateData: 'src/handlebars/data/no/global.json',
          output: 'dist/html/temp/no/pageFoot.html',
  },
  countrypage_no: {
           preHTML: 'dist/html/temp/no/pageHead.html',
           postHTML: 'dist/html/temp/no/pageFoot.html',
           template : 'src/handlebars/fixtures/countryPage.handlebars',
           templateData: 'src/handlebars/data/no/countryPage.json',
           output: 'dist/html/no/homepage.html',
           globals: [
              'src/handlebars/data/no/global.json',
           ]
  },
  pagehead_fi: {
          preHTML: 'src/handlebars/fixtures/pageHeadPre.html',
          template: 'src/handlebars/fixtures/pageHead.handlebars',
          templateData: 'src/handlebars/data/fi/global.json',
          output: 'dist/html/temp/fi/pageHead.html',
  },
  pagefoot_fi: {
          preHTML: 'src/handlebars/fixtures/pageFootPre.html',
          postHTML: 'src/handlebars/fixtures/pageFootPost.html',
          template: 'src/handlebars/fixtures/pageFoot.handlebars',
          templateData: 'src/handlebars/data/fi/global.json',
          output: 'dist/html/temp/fi/pageFoot.html',
  },
  countrypage_fi: {
           preHTML: 'dist/html/temp/fi/pageHead.html',
           postHTML: 'dist/html/temp/fi/pageFoot.html',
           template : 'src/handlebars/fixtures/countryPage.handlebars',
           templateData: 'src/handlebars/data/fi/countryPage.json',
           output: 'dist/html/fi/homepage.html',
           globals: [
              'src/handlebars/data/fi/global.json',
           ]
  }
}