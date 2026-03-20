import { Input } from '@/registry/components/input';

interface InputDemoProps {
  type: 'text' | 'email' | 'password';
  disabled?: boolean;
  invalid?: boolean;
}

export default function InputDemo({
  type,
  disabled = false,
  invalid = false,
}: InputDemoProps) {
  const placeholder =
    type === 'email'
      ? 'name@example.com'
      : type === 'password'
        ? 'Enter password'
        : 'Type here...';

  return (
    <Input
      type={type}
      className="w-[240px]"
      placeholder={placeholder}
      disabled={disabled}
      aria-invalid={invalid}
    />
  );
}
