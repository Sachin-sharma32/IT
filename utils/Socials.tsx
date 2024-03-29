// @ts-nocheck
import InstagramIcon from "@mui/icons-material/Instagram";
import { State } from "./types";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useSelector } from "react-redux";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const actions = [
  {
    icon: <InstagramIcon className="cursor-none  text-black" />,
    name: "Instagram",
    url: "https://instagram.com/it_xccelerate?igshid=YmMyMTA2M2Y=",
  },
  {
    icon: <LinkedInIcon />,
    name: "Facebook",
    url: "https://instagram.com/it_xccelerate?igshid=YmMyMTA2M2Y=",
  },
  {
    icon: <TwitterIcon />,
    name: "Twitter",
    url: "https://twitter.com/itxccelerate/status/1630569929710899201?s=46&t=CkXjIjsjO4tMLkygtRHk_A",
  },
  {
    icon: <TelegramIcon />,
    name: "Telegram",
    url: "https://t.me/+RveSAODvj0hjYTZl",
  },
];



export default function Social() {
  return (
    <div
      style={{ position: "fixed", bottom: 2, left: 2 }}
      className={` flex h-10 bg-transparent w-10 z-50`}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          margin: 2,
          "& .MuiFab-primary": {
            backgroundColor: `black`,
            color: `white`,
            width: "37px",
            height: "45px",
          },
        }}
        className="cursor-none "
        icon={<SpeedDialIcon />}
        FabProps={{
          sx: {
            "&:hover": {
              bgcolor: `white`,
              color: `black`,
            },
          },
        }}
      >
        {actions.map((action, i) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.url}
            sx={{
              width: 50,
              height: 50,
            }}
            FabProps={{
              sx: {
                "&": {
                  bgcolor: `${i === 0 ? "" : "white"}`,
                },
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              },
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
