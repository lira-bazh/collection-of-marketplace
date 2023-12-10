import React from 'react'

export function Link({ link, title }) {
  return link ? (
    <a href={link} target="_blank">
      {title}
    </a>
  ) : null;
}
