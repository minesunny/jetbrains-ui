import { cn } from '../lib/utils';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('dedupes conflicting tailwind utilities via tailwind-merge', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('filters falsy entries', () => {
    const visible = false as boolean;
    expect(cn('base', visible && 'hidden', 'block')).toBe('base block');
  });
});
