import { render, screen } from '@testing-library/react';
import React from 'react';
import GoogleAnalytics from './ga';
import {ScriptProps} from 'next/script';
// @ts-ignore
jest.mock(
  'next/script',
  () =>
    ({ children, strategy, ...rest }: ScriptProps) => {
      // @ts-ignore
      return <mock-script {...rest}>{children}</mock-script>;
    }
);
// @ts-ignore
jest.mock<typeof import('next/head')>('next/head', () => ({ children }) => (
  <>{children}</>
));
describe('googleAnalytics', () => {
  const trackingId = 'G-XXXXXXX'; // Example tracking id

  it('renders Google Analytics scripts correctly', () => {
    render(<GoogleAnalytics trackingId={trackingId} />);

    const gtagScript = screen.getByTestId('gtag');
    const gtagSetupScript = screen.getByTestId('gtagSetup');

    // Checking if the scripts have the correct src and setup
    expect(gtagScript).toHaveAttribute(
      'src',
      `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
    );
    expect(gtagSetupScript).toContainHTML(`window.dataLayer`);
  });
});
