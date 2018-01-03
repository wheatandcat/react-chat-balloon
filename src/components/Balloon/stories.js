// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import Balloon, { Left, Right } from "./"

storiesOf("components/Balloon", module)
  .add("Left", () => (
    <div>
      <Left>
        foo<br />bar<br />baz
      </Left>
    </div>
  ))
  .add("Right", () => (
    <div>
      <Right>
        foo<br />bar<br />baz
      </Right>
    </div>
  ))
  .add("Balloon", () => (
    <div>
      <Balloon position="left">
        foo<br />bar<br />baz
      </Balloon>
    </div>
  ))
