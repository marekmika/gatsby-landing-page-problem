var plugins = [{
      plugin: require('/home/marekmika/development/personal/gatsby-landing-page-problem/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/marekmika/development/personal/gatsby-landing-page-problem/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"fileName":false,"pure":true},
    },{
      plugin: require('/home/marekmika/development/personal/gatsby-landing-page-problem/node_modules/gatsby-plugin-intl/gatsby-ssr'),
      options: {"plugins":[],"path":"/home/marekmika/development/personal/gatsby-landing-page-problem/src/intl","languages":["en"],"defaultLanguage":"en"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
