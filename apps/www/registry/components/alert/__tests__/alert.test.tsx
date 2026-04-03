import { render, screen } from '@testing-library/react';

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertFooter,
  AlertHeader,
  AlertTitle,
} from '../index';

describe('Alert context props', () => {
  it('shows checkbox in header when check is true on AlertContent', () => {
    render(
      <Alert open>
        <AlertContent check>
          <AlertHeader>
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>Description</AlertDescription>
          </AlertHeader>
        </AlertContent>
      </Alert>,
    );

    expect(
      screen.getByRole('checkbox', { name: 'Do not ask again' }),
    ).toBeInTheDocument();
  });

  it('shows help icon in footer when help is true on AlertContent', () => {
    render(
      <Alert open>
        <AlertContent help>
          <AlertHeader>
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>Description</AlertDescription>
          </AlertHeader>
          <AlertFooter />
        </AlertContent>
      </Alert>,
    );

    const footer = document.querySelector('[data-slot="alert-footer"]');
    expect(footer?.querySelector('svg')).toBeInTheDocument();
  });

  it('hides checkbox and help icon by default', () => {
    render(
      <Alert open>
        <AlertContent>
          <AlertHeader>
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>Description</AlertDescription>
          </AlertHeader>
          <AlertFooter />
        </AlertContent>
      </Alert>,
    );

    expect(
      screen.queryByRole('checkbox', { name: 'Do not ask again' }),
    ).not.toBeInTheDocument();
    const footer = document.querySelector('[data-slot="alert-footer"]');
    expect(footer?.querySelector('svg')).not.toBeInTheDocument();
  });

  it('uses figma-aligned header/footer spacing classes', () => {
    render(
      <Alert open>
        <AlertContent>
          <AlertHeader>
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>Description</AlertDescription>
          </AlertHeader>
          <AlertFooter />
        </AlertContent>
      </Alert>,
    );

    const header = document.querySelector('[data-slot="alert-header"]');
    const footer = document.querySelector('[data-slot="alert-footer"]');

    expect(header).toHaveClass('gap-ui-control');
    expect(footer).toHaveClass('absolute');
    expect(footer).toHaveClass('bottom-ui-alert-footer');
    expect(footer).toHaveClass('left-ui-alert-footer');
    expect(footer).toHaveClass('right-ui-alert-footer');
    expect(footer).toHaveClass('h-10');
    expect(footer).toHaveClass('shrink-0');
    expect(footer).toHaveClass('gap-ui-actions');
  });
});
