"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from 'react';
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({
  orgId,
  disabled
}: NewBoardButtonProps) => {
  const router = useRouter();

  // const create = useMutation(api.board.create);
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    // create({
    //   orgId,
    //   title: "Untitled",
    // });
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Could not create board");
      });
  };

  return (
    <button
      type="button"
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />

      <Plus className="size-12 text-white stroke-1" />

      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};
