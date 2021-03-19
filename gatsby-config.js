const {
    prismicRepo,
    releaseID,
    accessToken,
} = require('./prismic-configuration')
const linkResolver = require('./src/utils/linkResolver')

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo
const apiKey = process.env.PRISMIC_API_KEY || accessToken
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID || releaseID

const postSchema = require('./custom_types/post.json')

const gastbySourcePrismicConfig = {
    resolve: 'gatsby-source-prismic',
    options: {
        repositoryName: reponame,
        accessToken: apiKey,
        releaseID: prismicReleaseID,
        prismicToolbar: true,
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
            post: postSchema,
        },
    },
}

module.exports = {
    siteMetadata: {
        title: 'Remedy Point Solutions site',
    },
    plugins: [
        gastbySourcePrismicConfig,
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/favicon.png',
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
    ],
}
