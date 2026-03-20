import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  useCollapsible,
} from '../collapsible';

// Mock motion/react — AnimatePresence renders children directly, motion.div renders a plain div
type MockMotionDivProps = React.HTMLAttributes<HTMLDivElement> & {
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
  layout?: unknown;
};

vi.mock('motion/react', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  motion: {
    div: ({
      children,
      className,
      initial: _initial,
      animate: _animate,
      exit: _exit,
      transition: _transition,
      layout: _layout,
      ...rest
    }: MockMotionDivProps) => {
      void _initial;
      void _animate;
      void _exit;
      void _transition;
      void _layout;

      return (
        <div className={className} {...rest}>
          {children}
        </div>
      );
    },
  },
}));

// ---------- Collapsible ----------
describe('Collapsible', () => {
  it('renders without crashing', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.getByText('Toggle')).toBeInTheDocument();
  });

  it('is closed by default', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('respects defaultOpen prop', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('supports controlled open prop', () => {
    const { rerender } = render(
      <Collapsible open={false}>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();

    rerender(
      <Collapsible open={true}>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('calls onOpenChange when toggled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Collapsible onOpenChange={handleChange}>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );

    await user.click(screen.getByText('Toggle'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('passes disabled to the root', () => {
    render(
      <Collapsible disabled>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.getByText('Toggle')).toBeDisabled();
  });

  it('renders data-slot="collapsible" on root', () => {
    const { container } = render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      </Collapsible>,
    );
    expect(
      container.querySelector('[data-slot="collapsible"]'),
    ).toBeInTheDocument();
  });
});

// ---------- CollapsibleTrigger ----------
describe('CollapsibleTrigger', () => {
  it('renders data-slot="collapsible-trigger"', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      </Collapsible>,
    );
    expect(
      document.querySelector('[data-slot="collapsible-trigger"]'),
    ).toBeInTheDocument();
  });

  it('toggles content on click', async () => {
    const user = userEvent.setup();

    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );

    expect(screen.queryByText('Content')).not.toBeInTheDocument();
    await user.click(screen.getByText('Toggle'));
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('supports custom children', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>
          <span data-testid="custom-child">Custom</span>
        </CollapsibleTrigger>
      </Collapsible>,
    );
    expect(screen.getByTestId('custom-child')).toBeInTheDocument();
  });

  it('supports asChild prop', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger asChild>
          <div data-testid="as-child-trigger">Custom trigger</div>
        </CollapsibleTrigger>
      </Collapsible>,
    );
    expect(screen.getByTestId('as-child-trigger')).toBeInTheDocument();
  });

  it('toggles open state back to closed on second click', async () => {
    const user = userEvent.setup();

    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );

    await user.click(screen.getByText('Toggle'));
    expect(screen.getByText('Content')).toBeInTheDocument();

    await user.click(screen.getByText('Toggle'));
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});

// ---------- CollapsibleContent ----------
describe('CollapsibleContent', () => {
  it('does not render content when closed', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('renders content when open', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Visible content</CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  it('passes className through', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent className="my-custom-class">
          Content
        </CollapsibleContent>
      </Collapsible>,
    );
    const contentEl = document.querySelector(
      '[data-slot="collapsible-content"]',
    );
    expect(contentEl).toHaveClass('my-custom-class');
  });

  it('renders complex children', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders data-slot="collapsible-content"', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );
    expect(
      document.querySelector('[data-slot="collapsible-content"]'),
    ).toBeInTheDocument();
  });

  it('accepts custom transition prop without error', () => {
    expect(() =>
      render(
        <Collapsible defaultOpen>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent transition={{ duration: 0.5, ease: 'easeOut' }}>
            Content
          </CollapsibleContent>
        </Collapsible>,
      ),
    ).not.toThrow();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});

// ---------- useCollapsible ----------
describe('useCollapsible', () => {
  it('throws when used outside Collapsible', () => {
    // Suppress console.error for expected error
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => renderHook(() => useCollapsible())).toThrow(
      'useCollapsible must be used within a Collapsible',
    );
    spy.mockRestore();
  });

  it('returns isOpen = false when collapsible is closed', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        {children}
      </Collapsible>
    );

    const { result } = renderHook(() => useCollapsible(), { wrapper });
    expect(result.current.isOpen).toBe(false);
  });

  it('returns isOpen = true when collapsible is open', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        {children}
      </Collapsible>
    );

    const { result } = renderHook(() => useCollapsible(), { wrapper });
    expect(result.current.isOpen).toBe(true);
  });

  it('updates isOpen after trigger click', async () => {
    const user = userEvent.setup();
    let hookResult: { isOpen: boolean } | undefined;

    function Consumer() {
      hookResult = useCollapsible();
      return null;
    }

    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <Consumer />
      </Collapsible>,
    );

    expect(hookResult!.isOpen).toBe(false);
    await user.click(screen.getByText('Toggle'));
    expect(hookResult!.isOpen).toBe(true);
  });
});
