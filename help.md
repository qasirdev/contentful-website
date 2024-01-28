```
npm  i -g vercel
npm run build
vercel // to upload project
```

### with graphql
https://graphql.contentful.com/content/v1/spaces/{SPACE-ID}?access_token={ACCESS-TOKEN}&content_type=card
```
query GetAllCards {
    card(id: "uqZVeghjfm8p8tCGxtp5S") {
        title,
        price,
        image {
            sys {
                id
            }
        }
        # Include other fields you want to retrieve
    }
}
```



<!--
https://www.youtube.com/watch?v=WXz2OR8jgMc
https://github.com/panaverse/learn-nextjs/tree/main/step09_headless_cms
https://github.com/AhmedRazaShaikh0/contentful-tutorial/tree/main

example with contentful.createClient and handling content model with API:
https://github.com/eric-schmidt/demo-agile-deployments/blob/main/lib/contentful.mjs#L8
-->
