import { useState } from "react";
import { User } from "lucide-react";
import { userInfo } from "@/data/info";

export function ProfileHeader() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative flex flex-col items-center py-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mb-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-full blur-md scale-110 animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="relative avatar-ring rounded-full p-1">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-secondary ring-4 ring-background">
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
            ) : (
              <img
                src={userInfo.avatar}
                alt={userInfo.name}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
        <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full online-dot border-[3px] border-background" />
      </div>

      <h1 className="relative text-3xl font-bold gradient-text mb-2 tracking-tight">{userInfo.name}</h1>

      <p className="text-muted-foreground text-sm mb-3 font-medium">{userInfo.role}</p>

      <div className="glass rounded-full px-4 py-1.5 backdrop-blur-xl">
        <span className="text-xs text-muted-foreground">
          {userInfo.status.replace("♥", "")}
          <span className="love-text animate-pulse">♥</span>
        </span>
      </div>
    </div>
  );
}
