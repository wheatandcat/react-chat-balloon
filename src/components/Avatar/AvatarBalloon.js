// @flow
import React, { type Node } from "react"
import styled from "styled-components"
import AvatarBalloon, { Right, Left } from "./"

type Props = {
  avatarStyle?: CSSStyleDeclaration,
  avatarUtl: string,
  children?: Node,
  position?: "left" | "right",
}

export default ({ children, position, avatarUtl, avatarStyle }: Props) => {
  if (position === "right") {
    return (
      <Right
        avatarUtl={avatarUtl}
        position={position}
        avatarStyle={avatarStyle}
      >
        {children}
      </Right>
    )
  }

  return (
    <Left avatarUtl={avatarUtl} position={position} avatarStyle={avatarStyle}>
      {children}
    </Left>
  )
}
