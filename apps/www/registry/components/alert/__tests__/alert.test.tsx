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

    const footer = document.querySelector('[data-slot="jb-alert-footer"]');
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
    const footer = document.querySelector('[data-slot="jb-alert-footer"]');
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

    const header = document.querySelector('[data-slot="jb-alert-header"]');
    const footer = document.querySelector('[data-slot="jb-alert-footer"]');

    expect(header).toHaveClass('gap-2');
    expect(footer).toHaveClass('absolute');
    expect(footer).toHaveClass('bottom-[13px]');
    expect(footer).toHaveClass('left-[19px]');
    expect(footer).toHaveClass('right-[19px]');
    expect(footer).toHaveClass('h-10');
    expect(footer).toHaveClass('shrink-0');
  });
});
