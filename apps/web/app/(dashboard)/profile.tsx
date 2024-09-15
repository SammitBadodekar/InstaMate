import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from "@instamate/ui";
// import { signOut } from "@/auth/helper";
// import { useSession } from "next-auth/react";

const Profile = () => {
  // const { data: session }: any = useSession();
  // console.log(session);
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        <Avatar className="mt-auto">
          {/* <AvatarImage src={session?.user?.picture.data.url!} /> */}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="hidden xl:block">Profile</p>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Avatar className="mt-auto">
            {/* <AvatarImage src={session?.user?.picture.data.url!} /> */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <p>{session?.user?.name}</p> */}
        </div>
        {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
