// @flow
import React, { type Node } from "react"
import styled from "styled-components"
import { Right, Left } from "./"

type Props = {
  children?: Node,
  position?: "left" | "right",
}

export default ({ children, position }: Props) => {
  if (position === "right") {
    return <Right>{children}</Right>
  }

  return <Left>{children}</Left>
}
