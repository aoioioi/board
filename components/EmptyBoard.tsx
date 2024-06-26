"use client";

import React from 'react';
import { Button } from "./ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const EmptyBoard = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  // const create = useMutation(api.board.create);
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    // create({orgId: organization.id})
    mutate({
      orgId: organization.id,
      title: "Untitled board"
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
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>

      <p className="text-muted-foreground text-sm mt-2`">Start by creating a board for your organisation</p>

      <div className="mt-6">
        <Button size="lg" onClick={onClick} disabled={pending}>
          Create board
        </Button>
      </div>
    </div>
  );
};
