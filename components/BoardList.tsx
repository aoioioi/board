import React from 'react';
import { EmptySearch } from "./EmptySearch";
import { EmptyBoard } from "./EmptyBoard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./BoardCard";
import { NewBoardButton } from "./NewBoardButton";

interface BoardListProps {
  orgId: string;
  // query: object;
  query: {
    search?: string;
    favourites?: string;
  };
}

export const BoardList = ({
  orgId,
  query
}: BoardListProps) => {
  // const data = [];
  const data = useQuery(
    api.boards.get,
    {
      orgId,
      ...query,
      // search: query.search
    }
  );

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">{query.favourites ? "Favourite boards" : "Team boards"}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />

          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && query.search) {
    return (
      <EmptySearch />
    );
  }

  if (!data?.length && query.favourites) {
    return (
      <div>
        No favourites
      </div>
    );
  }

  if (!data?.length) {
    return (
      <EmptyBoard />
    );
  }

  return (
    <div>
      {/* {JSON.stringify(data)} */}

      <h2 className="text-2xl">{query.favourites ? "Favourite Boards" : "Team boards"}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />

        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavourite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
