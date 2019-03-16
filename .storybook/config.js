import { configure, addDecorator, addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import {configure as configureEnzyme} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

//THIS IS NEEDED ONLY IF YOU ARE USING MOCHA AS A TEST RUNNER

import "./facade";
import {customTheme} from "./customTheme";

function loadStories() {
  require('../components');
}

addParameters(customTheme);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withInfo);

configureEnzyme({ adapter: new Adapter() });
configure(loadStories, module);
