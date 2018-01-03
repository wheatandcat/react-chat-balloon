// @flow
import React, { type Node } from "react"
import styled from "styled-components"

const Balloon = styled.div`
  text-align: left !important;
  position: relative;
  display: inline-block;
  padding: 0 15px;
  width: auto;
  min-height: 50px;
  min-width: 200px;
  line-height: 34px;
  color: #19283c;
  text-align: center;
  background: #f6f6f6;
  border: 3px solid #19283c;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    top: 25px;
    right: -8px;
    margin-top: -9px;
    display: block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 9px 0 9px 9px;
    border-color: transparent transparent transparent #f6f6f6;
    z-index: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 25px;
    right: -12px;
    margin-top: -10px;
    display: block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #19283c;
    z-index: -1;
  }
`

type Props = {
  children?: Node,
}

export default ({ children }: Props) => <Balloon>{children}</Balloon>
