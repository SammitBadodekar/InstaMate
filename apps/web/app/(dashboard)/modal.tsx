"use client";

import { Dialog, DialogOverlay, DialogContent } from "@instamate/ui";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay className="bg-gray-100/0 backdrop-blur-sm">
        <DialogContent className="overflow-y-hidden rounded-xl">
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
