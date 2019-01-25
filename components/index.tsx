import { storiesOf } from "@storybook/react";
import {mount} from "enzyme";
import * as React from "react";
import { describe, it, specs, test } from "storybook-addon-specifications";
import {PrimaryButton} from "./buttons/primary-button";

const stories = storiesOf("Buttons", module);
stories.add("primary-button",
    () => {
        return <PrimaryButton className={"button primary-button button--stretch"}>SEARCH</PrimaryButton>;
    });
