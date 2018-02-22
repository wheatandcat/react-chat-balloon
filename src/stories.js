import React from "react"
import { storiesOf } from "@storybook/react"
import AvatarBalloon, { Balloon } from "../dist"

storiesOf("dist", module)
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
  .add("Balloon", () => (
    <div>
      <Balloon position="left">
        foo<br />bar<br />baz
      </Balloon>
    </div>
  ))
