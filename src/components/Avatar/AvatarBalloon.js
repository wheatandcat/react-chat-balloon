// @flow
import React, { type Node } from "react"
import styled from "styled-components"
import AvatarBalloon, { Right, Left } from "./"

type Props = {
  children?: Node,
  avatarUtl: string,
  position?: "left" | "right",
}

export default ({ children, position, avatarUtl }: Props) => {
  if (position === "right") {
    return (
      <Right avatarUtl={avatarUtl} position={position}>
        {children}
      </Right>
    )
  }

  return (
    <Left avatarUtl={avatarUtl} position={position}>
      {children}
    </Left>
  )
}
