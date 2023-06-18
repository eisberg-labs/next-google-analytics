[![Continuous Integration](https://github.com/eisberg-labs/next-google-analytics/actions/workflows/ci.yml/badge.svg)](https://github.com/eisberg-labs/next-google-analytics/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/eisberg-labs/next-google-analytics/branch/master/graph/badge.svg?token=GQCS6ZEVU3)](https://codecov.io/gh/eisberg-labs/next-google-analytics)
[![npm downloads](https://img.shields.io/npm/dm/@eisberg-labs/next-google-analytics.svg)](https://www.npmjs.com/package/@eisberg-labs/next-google-analytics)
[![npm latest package](https://img.shields.io/npm/v/@eisberg-labs/next-google-analytics/latest.svg)](https://www.npmjs.com/package/@eisberg-labs/next-google-analytics)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/eisberg-labs/next-google-analytics.svg)](https://isitmaintained.com/project/eisberg-labs/next-google-analytics 'Average time to resolve an issue')
[![Follow me](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anamarjanica/)

# Next Google Analytics

> NextJS React Component for Google analytics 4.

## Installation

```bash
npm i --save @eisberg-labs/next-google-analytics
```

## Usage
Add this on your page, either in `pages/_app.tsx` for global access, or if you're using NextJs 13 server components [like me](https://www.najsalon.com),
include it in the root layout.

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
