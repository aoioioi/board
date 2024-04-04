import { Hint } from "@/components/Hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from 'react';

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

export const UserAvatar = ({
  src,
  name,
  fallback,
  borderColor,
}: UserAvatarProps) => {
  return (
    <Hint
      label={name || "Anonymous"}
      side="bottom"
      sideOffset={18}
    >
      <Avatar
        className="size-8 border-2"
        style={{ borderColor }}
      >
        <AvatarImage src={src} />

        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};
