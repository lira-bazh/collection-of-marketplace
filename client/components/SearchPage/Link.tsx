import React from 'react'
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export function Link({ link, title }) {
  return link ? (
    <Button
      href={link}
      target="_blank"
      variant="outlined"
      endIcon={<ArrowOutwardIcon />}
    >
      {title}
    </Button>
  ) : null;
}
