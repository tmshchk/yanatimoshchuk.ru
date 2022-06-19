
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/timoshchuk/yanatimoshchuk.ru/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/timoshchuk/yanatimoshchuk.ru/src/pages/404.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/Users/timoshchuk/yanatimoshchuk.ru/src/pages/blog/index.js")),
  "component---src-pages-contacts-js": preferDefault(require("/Users/timoshchuk/yanatimoshchuk.ru/src/pages/contacts.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/timoshchuk/yanatimoshchuk.ru/src/pages/index.js")),
  "component---src-pages-tags-index-js": preferDefault(require("/Users/timoshchuk/yanatimoshchuk.ru/src/pages/tags/index.js")),
  "component---src-templates-post-js": preferDefault(require("/Users/timoshchuk/yanatimoshchuk.ru/src/templates/post.js")),
  "component---src-templates-tags-js": preferDefault(require("/Users/timoshchuk/yanatimoshchuk.ru/src/templates/tags.js"))
}

