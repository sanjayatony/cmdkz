{
  "version": 2,
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/now-builder",
      "config": {
        "serverFiles": ["package.json"]
      }
    }
  ]
}
