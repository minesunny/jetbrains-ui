import { Button, type ButtonProps } from '@/registry/components/button';

interface ButtonDemoProps {
  variant: ButtonProps['variant'];
  slim?: ButtonProps['slim'];
  tooltip?: ButtonProps['tooltip'];
}

export default function ButtonDemo({
  variant,
  slim = false,
  tooltip,
}: ButtonDemoProps) {
  return (
    <Button variant={variant} slim={slim} tooltip={tooltip}>
      Button
    </Button>
  );
}
