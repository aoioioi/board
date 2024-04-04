import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { CreateOrganization } from "@clerk/nextjs";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <p>Welcome image placeholder</p>

      <h2 className="text-2xl font-semibold mt-6">
        Welcome to Boardsta
      </h2>

      <p className="text-muted-foreground text-sm mt-2">
        Create an organisation to get started
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">
              Create organisation
            </Button>
          </DialogTrigger>

          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
