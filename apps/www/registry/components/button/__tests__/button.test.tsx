import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, buttonVariants } from '../index';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserverMock);
});

afterAll(() => {
  vi.unstubAllGlobals();
});

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: 'Click me' }),
    ).toBeInTheDocument();
  });

  it('renders data-slot="button"', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'button');
  });

  it('uses a single default size without data-size attribute', () => {
    render(<Button>Default Size</Button>);
    const button = screen.getByRole('button');
    expect(button).not.toHaveAttribute('data-size');
    expect(button).not.toHaveAttribute('data-slim');
    expect(button.className).toContain('h-7');
    expect(button.className).toContain('text-ui-default');
  });

  it('applies primary variant by default', () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('data-variant', 'primary');
    expect(btn.className).toContain('bg-blue-4');
  });

  it('applies secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('data-variant', 'secondary');
    expect(btn.className).toContain('bg-transparent');
  });

  it('passes className through', () => {
    render(<Button className="my-custom">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('my-custom');
  });

  it('supports disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports slim mode', () => {
    render(<Button slim>Slim</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('data-slim', 'true');
    expect(btn.className).toContain('h-6');
  });

  it('renders tooltip content when tooltip prop is provided', async () => {
    const user = userEvent.setup();
    render(<Button tooltip="Button tooltip">With Tooltip</Button>);

    const btn = screen.getByRole('button', { name: 'With Tooltip' });
    await user.hover(btn);
    expect(
      await screen.findByRole('tooltip', { name: 'Button tooltip' }),
    ).toBeInTheDocument();
  });

  it('fires onClick handler', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Click
      </Button>,
    );
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders as child element with asChild', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    );
    const link = screen.getByRole('link', { name: 'Link Button' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveAttribute('data-slot', 'button');
  });

  it('forwards additional HTML attributes', () => {
    render(
      <Button type="submit" aria-label="submit form">
        Submit
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('type', 'submit');
    expect(btn).toHaveAttribute('aria-label', 'submit form');
  });
});

describe('buttonVariants', () => {
  it('returns a string of class names', () => {
    const result = buttonVariants({ variant: 'primary' });
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  it('includes primary-specific classes for primary variant', () => {
    const result = buttonVariants({ variant: 'primary' });
    expect(result).toContain('bg-blue-4');
  });

  it('includes secondary-specific classes for secondary variant', () => {
    const result = buttonVariants({ variant: 'secondary' });
    expect(result).toContain('bg-transparent');
  });

  it('defaults to primary variant when no variant specified', () => {
    const result = buttonVariants({});
    expect(result).toContain('bg-blue-4');
  });

  it('uses slim size classes when slim is true', () => {
    const result = buttonVariants({ size: 'slim' });
    expect(result).toContain('h-6');
  });
});
