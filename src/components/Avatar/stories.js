import React from "react"
import { storiesOf } from "@storybook/react"
import AvatarBalloon, { Left, Right } from "./"

storiesOf("components/Avatar", module)
  .add("Left", () => (
    <div>
      <Left avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        foo
      </Left>
      <Left avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        foo<br />bar<br />baz<br />foooooooooooooooooooooooooooooooooooooooooo
      </Left>
      <Left avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        bar
      </Left>
    </div>
  ))
  .add("Right", () => (
    <div>
      <Right avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        foo
      </Right>
      <Right avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        foo<br />bar<br />baz<br />foooooooooooooooooooooooooooooooooooooooooo
      </Right>
      <Right avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        bar
      </Right>
    </div>
  ))
  .add("AvatarBalloon", () => (
    <div>
      <AvatarBalloon avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        foo
      </AvatarBalloon>
      <AvatarBalloon avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        foo<br />bar<br />baz<br />foooooooooooooooooooooooooooooooooooooooooo
      </AvatarBalloon>
      <AvatarBalloon avatarUtl="https://dotstamp.com/static/files/character/default1.png">
        bar
      </AvatarBalloon>
    </div>
  ))
