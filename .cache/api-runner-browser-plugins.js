module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"/Users/timoshchuk/yanatimoshchuk.ru/node_modules/gatsby-remark-images","id":"194de7ad-4c7a-57e9-b023-6b26b284f68a","name":"gatsby-remark-images","version":"6.16.0","modulePath":"/Users/timoshchuk/yanatimoshchuk.ru/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":false,"quality":80},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/timoshchuk/yanatimoshchuk.ru","commonmark":false,"JSFrontmatterEngine":false,"engines":{}},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":false,"quality":80},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withWebp":false,"withAvif":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
