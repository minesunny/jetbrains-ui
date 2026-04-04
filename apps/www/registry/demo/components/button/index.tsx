import { Button, type ButtonProps } from '@/registry/components/button';

interface ButtonDemoProps {
  variant: ButtonProps['variant'];
  slim?: ButtonProps['slim'];
}

export default function ButtonDemo({
  variant,
  slim = false,
}: ButtonDemoProps) {
  return (
    <Button variant={variant} slim={slim}>
      Button
    </Button>
  );
}
