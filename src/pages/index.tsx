import Chats from "@/component/ChatsC/chats";
import Contacts from "@/component/contacts/contacts";
import { Stack } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const uID = 0;

export default function Home() {
  return (
    <Stack direction="row" width="100%" height="100vh">
      <Contacts />
      <Chats />
    </Stack>
  );
}
