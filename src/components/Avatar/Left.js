// @flow
import React, { type Node } from "react"
import styled from "styled-components"
import Balloon from "../Balloon"

type Props = {
  children?: Node,
  avatarUtl: string,
  avatarStyle?: CSSStyleDeclaration,
}

const ImgeContainer = styled.div`
  width 12.5rem;
`

const BalloonContainer = styled.div`
  margin-top: 1.5rem;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export default ({ children, avatarUtl, avatarStyle }: Props) => (
  <Container>
    <ImgeContainer>
      <img src={avatarUtl} alt="avatar" style={avatarStyle} />
    </ImgeContainer>
    <BalloonContainer>
      <Balloon position="left">{children}</Balloon>
    </BalloonContainer>
  </Container>
)
