import { Chat, Contact, userData } from "@/randomUserData/userData";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { add_chat, change_reaction } from "../sotre/contacts";
import { uuid } from "uuidv4";

type Props = {};

const Chats = (props: Props) => {
  const chats: [Chat[], Contact] = useSelector((state) => {
    const user: Contact = state.contacts.find((item: Contact) => item.isActive);
    if (!user) {
      return [[], user];
    }
    return [user.chat, user];
  });
  const users = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  if (!chats[0].length) {
    return <></>;
  }
  return (
    <Box overflow="scroll" height="100vh" width="70%" position="relative">
      <Stack alignItems="center" width="100%" pb={"50px"}>
        {chats[0].map((chat) => {
          return (
            <Stack
              justifyContent={chat.owner === 0 ? "left" : "right"}
              key={chat.id}
              width="100%"
              direction={!chat.owner ? "row" : "row-reverse"}
              alignItems="center"
              p={3}
              spacing={2}
            >
              <Image
                src={chats[1].avatar}
                width={50}
                height={50}
                alt="avatar"
                style={{ borderRadius: "100%" }}
              />
              <Box>
                <Typography>{chat.text}</Typography>
              </Box>
              <Stack
                direction="row"
                width="fit-content"
                position="relative"
                zIndex={1}
              >
                <Box
                  onClick={() =>
                    dispatch(
                      change_reaction({
                        id: chats[1].id,
                        chatId: chat.id,
                        reactions: chat.reactions
                          .split(" ")
                          .find((item) => item === "smile")
                          ? ""
                          : chat.reactions + "smile",
                      })
                    )
                  }
                >
                  <InsertEmoticonIcon
                    sx={{
                      bgcolor: chat.reactions
                        ? chat.reactions
                            .split(" ")
                            ?.find((item) => item === "smile")
                          ? "white"
                          : "green"
                        : "white",
                    }}
                  />
                </Box>
                <Typography>{chat.reactions}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
      <Box
        bgcolor="white"
        sx={{
          position: "fixed",
          bottom: 20,
          zIndex: 99,
          width: "100%",
        }}
      >
        <TextField
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              dispatch(
                add_chat({
                  contactId: chats[1].id,
                  chat: {
                    text: e.target.value,
                    reactions: "",
                    dateAndTime: new Date(),
                    id: uuid(),
                    owner: 1,
                  },
                })
              );
            }
          }}
          sx={{
            height: "50px",
            width: "69%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Chats;
