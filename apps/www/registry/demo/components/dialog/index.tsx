'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/registry/components/dialog';
import { Button } from '@/registry/components/button';

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="flex-1 px-5 py-4">
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </div>
        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
          <DialogClose asChild>
            <Button>Save Changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
