"use client";

import { cn } from '@/lib/utils';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { LayoutDashboard, Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favourites = searchParams.get('favourites');

  return (
    <div className='hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5'>
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <span
            className={cn(
              "font-semibold text-xl",
              font.className,
            )}
          >
            Boardsta
          </span>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #EFE7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            }
          }
        }}
      />

      <div className="space-y-1 w-full">
        <Button
          variant={favourites ? "ghost" : "secondary"}
          asChild
          size="lg"
          className='font-normal justify-start px-2 w-full'
        >
          <Link href="/">
            <LayoutDashboard className='h-4 w-4 mr-2' />
            <span>Team boards</span>
          </Link>
        </Button>

        <Button
          variant={favourites ? "secondary" : "ghost"}
          asChild
          size="lg"
          className='font-normal justify-start px-2 w-full'
        >
          <Link href={{
            pathname: "/",
            query: {
              favourites: true,
            }
          }}>
            <Star className='h-4 w-4 mr-2' />
            <span>Favourite boards</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};
