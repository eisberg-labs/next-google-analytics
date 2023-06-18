[![Downloads](http://img.shields.io/npm/dm/@eisberg-labs/next-google-analytics.svg)](https://npmjs.org/package/@eisberg-labs/next-google-analytics)

# Next Google Analytics

> NextJS React Component for Google universal analytics.

## Installation

```bash
npm i --save @eisberg-labs/next-google-analytics
```

## Usage
Add this on your page, either in `pages/_app.tsx` for global access.

```jsx
import { GoogleAnalytics } from '@eisberg-labs/next-google-analytics';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_ANALYTICS_ID} />
      <Component {...pageProps} />
    </>
  );
}

```

## License

MIT © [Eisberg Labs](http://www.eisberg-labs.com)
