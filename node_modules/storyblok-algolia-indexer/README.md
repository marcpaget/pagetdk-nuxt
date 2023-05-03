# storyblok-algolia-indexer

## Setup

```sh
yarn add storyblok-algolia-indexer # yarn
npm i storyblok-algolia-indexer # npm
```

## Basic usage

Initialize `storyblok-algolia-indexer` in your Node.js based serverless function

```javascript
new StoryblokAlgoliaIndexer({
  algoliaAppId,
  algoliaApiAdminToken,
  algoliaIndexName,
  storyblokContentDeliveryApiToken,
  options
})
```

```js
const options = {
  starts_with: 'articles/',
  per_page: 100,
  page: 1,
  version: 'draft'
}
```

Create webhook in Storyblok that will trigger this indexer accordingly to [this article](https://www.storyblok.com/tp/index-storyblok-algolia)