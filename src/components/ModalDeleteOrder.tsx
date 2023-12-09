import { Button } from "@/app/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog"
import { useToast } from "@/app/components/ui/use-toast";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type propTypes = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  id: number | null;
  onSuccessDelete: (id: number) => void;
}

export function ModalDeleteOrder({ isOpen, onOpenChange, id, onSuccessDelete }: propTypes) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleDelete = () => {
    if (id) {
      setLoading(true);

      fetch(`/api/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: 'Berhasil!',
              description: 'Data berhasil dihapus dari database.',
              variant: "success",
            });
            onSuccessDelete(id);
            return;
          }

          toast({
            title: res.status,
            description: res.message,
            variant: "destructive",
          });
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: (error as Error).message,
            variant: "destructive",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Apakah anda yakin?</DialogTitle>
          <DialogDescription>
            Dengan menghapus orderan ini berarti server tidak akan menyediakan data ini lagi!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button disabled={loading} type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button disabled={loading} onClick={handleDelete} type="button" variant="destructive">
            {loading ? (
              <AiOutlineLoading3Quarters
                fontSize={24}
                className="mx-auto animate-spin"
              />
            ) : (
              "Confirm"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
