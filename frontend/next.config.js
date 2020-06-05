const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'WAULTO',
        API_DEVELOPMENT: 'http://localhost:5000/api',
        API_PRODUCTION: 'https://seoblog.com/api',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://seoblog.com',
        FB_APP_ID: '1627412520743045',
        DISQUS_SHORTNAME:'waulto-1'
    }
    
});



// const webpack = require('webpack')
// const withCSS = require('@zeit/next-css')
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// const path = require('path');
// const isDevelopment = process.env.NODE_ENV === 'development'
// const isProduction = process.env.NODE_ENV === 'production';

// const nextConfig = {
//     webpack: (config, { dev }) => {
//         config.plugins.push(
//             new webpack.EnvironmentPlugin(process.env),
//         );
        
//         config.resolve.alias['components'] = path.join(__dirname, 'components')
//         config.resolve.alias['static'] = path.join(__dirname, 'static')

//         return config;
//     },
// };

// module.exports = withPlugins([
//     [optimizedImages, {
//         handleImages: ['jpeg', 'png'],
//     }],
//     withCSS
//     ],
//     nextConfig
// );