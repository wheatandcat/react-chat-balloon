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
  margin-right: 2rem;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export default ({ children, avatarUtl, avatarStyle }: Props) => (
  <Container>
    <BalloonContainer>
      <Balloon position="right">{children}</Balloon>
    </BalloonContainer>
    <ImgeContainer>
      <img src={avatarUtl} alt="avatar" style={avatarStyle} />
    </ImgeContainer>
  </Container>
)
