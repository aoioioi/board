"use client";

import { BoardList } from "@/components/BoardList";
import { EmptyOrg } from '@/components/EmptyOrg';
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favourites?: string;
  };
}

export default function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const { organization } = useOrganization();

  return (
    <div className='flex-1 h-[calc(100%-80px)] p-6'>
      {/* {JSON.stringify(searchParams)} */}

      {!organization ?
        <EmptyOrg />
        : <BoardList
          orgId={organization.id}
          query={searchParams}
        />
      }
    </div>
  );
}