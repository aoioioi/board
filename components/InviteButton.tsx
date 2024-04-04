import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { OrganizationProfile } from '@clerk/nextjs';

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className='size-4 mr-2' />
          Invite members
        </Button>
      </DialogTrigger>

      <DialogContent className='p-0 bg-transparent border-none max-w-[880px]'>
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
