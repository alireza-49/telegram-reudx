import React from "react";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { change_avatar } from "../sotre/userData";
import { Contact } from "@/randomUserData/userData";
import { change_active_user, change_is_favorite } from "../sotre/contacts";
import Image from "next/image";
import { Box, Checkbox, Typography } from "@mui/material";
type Props = {};

const Contacts = (props: Props) => {
  const contacts: Contact[] = useSelector((state: any) => state.contacts);
  const dispatch = useDispatch();
  return (
    <Box overflow={"scroll"} width="30%">
      <Stack width="100%">
        {contacts.map((item) => {
          return (
            <Stack
              direction="row"
              alignItems="center"
              width="100%"
              key={item.id}
              height={80}
              bgcolor={item.isActive ? "azure" : "white"}
            >
              <Stack
                onClick={() => dispatch(change_active_user(item.id))}
                spacing={3}
                direction="row"
                width="90%"
                justifyContent="space-around"
              >
                <Image
                  src={item.avatar}
                  width={50}
                  height={50}
                  alt="avatar"
                  style={{ borderRadius: "100%" }}
                />
                <Typography>{item.name}</Typography>
                <Stack direction="row" spacing={2}>
                  <Box
                    borderRadius="100%"
                    width={20}
                    height={20}
                    borderColor="black"
                    bgcolor={item.isOnline ? "green" : "gray"}
                  ></Box>
                  <Typography color={item.isOnline ? "green" : "gray"}>
                    {item.isOnline ? "online" : "offline"}
                  </Typography>
                </Stack>
              </Stack>
              <Checkbox
                onChange={() => dispatch(change_is_favorite(item.id))}
              />
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Contacts;
