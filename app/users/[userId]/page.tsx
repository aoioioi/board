import React from 'react';

interface UserIdPageProps {
  params: {
    userId: string;
  };
}

function page({
  params,
}: UserIdPageProps) {
  return (
    <div>
      ID: {params.userId}
    </div>
  );
}

export default page;
