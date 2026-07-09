import { escapeHtml } from '../lib/escape-html';

describe('escapeHtml', () => {
  it('escapes ampersands first to avoid double-escaping', () => {
    expect(escapeHtml('a & b')).toBe('a &amp; b');
    expect(escapeHtml('&amp;')).toBe('&amp;amp;');
  });

  it('escapes angle brackets and quotes', () => {
    expect(escapeHtml(`<script>alert("x")</script>`)).toBe(
      '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;',
    );
  });

  it('escapes apostrophes', () => {
    expect(escapeHtml(`it's`)).toBe('it&#39;s');
  });

  it('returns empty string for empty input', () => {
    expect(escapeHtml('')).toBe('');
  });
});
