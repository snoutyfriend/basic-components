import { configure, addDecorator, addParameters } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import {configure as configureEnzyme} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

//THIS IS NEEDED ONLY IF YOU ARE USING MOCHA AS A TEST RUNNER

import "./facade";
import {customTheme} from "./customTheme";
import {allViewports} from "./viewports/allViewports";
import {withA11y} from "@storybook/addon-a11y";

function loadStories() {
  require("../components/index.stories.tsx");
}

addParameters(customTheme);
addParameters({
  viewport: { viewports: allViewports },
});
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);

configureEnzyme({ adapter: new Adapter() });
configure(loadStories, module);
