import { render } from '@testing-library/react';
import { Icon, ThemedIcon } from '../index';

describe('Icon', () => {
  it('renders an svg element', () => {
    const { container } = render(<Icon name="feedback" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders use element with correct href for light theme', () => {
    const { container } = render(<Icon name="feedback" />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#icon-feedback-light',
    );
  });

  it('renders use element with correct href for dark theme', () => {
    const { container } = render(<Icon name="feedback" theme="dark" />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#icon-feedback-dark',
    );
  });

  it('defaults to light theme', () => {
    const { container } = render(<Icon name="add" />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute('href', '/icons/general.svg#icon-add-light');
  });

  it('defaults to size 16', () => {
    const { container } = render(<Icon name="add" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '16');
    expect(svg).toHaveAttribute('height', '16');
  });

  it('supports custom size', () => {
    const { container } = render(<Icon name="add" size={24} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('passes className through', () => {
    const { container } = render(<Icon name="add" className="my-icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('my-icon');
  });

  it('lowercases camelCase name (toLowerCase runs before regex)', () => {
    // The implementation calls .toLowerCase() first, so 'graphQl' becomes 'graphql'
    // and the camelCase regex (/([a-z])([A-Z])/) no longer matches
    const { container } = render(<Icon name="graphQl" />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#icon-graphql-light',
    );
  });

  it('normalizes name with spaces to kebab-case', () => {
    const { container } = render(<Icon name="my icon name" />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#icon-my-icon-name-light',
    );
  });

  it('normalizes name with underscores to kebab-case', () => {
    const { container } = render(<Icon name="my_icon_name" />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#icon-my-icon-name-light',
    );
  });

  it('removes special characters from name', () => {
    const { container } = render(<Icon name="icon@v2!" />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute('href', '/icons/general.svg#icon-iconv2-light');
  });

  it('collapses multiple hyphens', () => {
    const { container } = render(<Icon name="my--icon" />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#icon-my-icon-light',
    );
  });

  it('forwards additional SVG props', () => {
    const { container } = render(
      <Icon name="add" data-testid="my-svg" aria-hidden="true" />,
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('data-testid', 'my-svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('sets correct viewBox', () => {
    const { container } = render(<Icon name="add" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 88 44');
  });
});

describe('ThemedIcon', () => {
  it('renders with light theme', () => {
    const { container } = render(
      <ThemedIcon name="feedback" currentTheme="light" />,
    );
    const use = container.querySelector('use');
    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#icon-feedback-light',
    );
  });

  it('renders with dark theme', () => {
    const { container } = render(
      <ThemedIcon name="feedback" currentTheme="dark" />,
    );
    const use = container.querySelector('use');
    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#icon-feedback-dark',
    );
  });

  it('passes size and className to Icon', () => {
    const { container } = render(
      <ThemedIcon
        name="add"
        currentTheme="light"
        size={32}
        className="themed"
      />,
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveClass('themed');
  });
});
