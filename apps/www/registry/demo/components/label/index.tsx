import { Label } from '@/registry/components/label';
import { Input } from '@/registry/components/input';

export default function LabelDemo() {
  return (
    <div className="grid w-[280px] gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  );
}
