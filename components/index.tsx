import {storiesOf} from "@storybook/react";
import {mount} from "enzyme";
import * as React from "react";
import {describe, it, specs, test} from "storybook-addon-specifications";
import "../scss/all.scss";
import {PrimaryButton} from "./buttons/primary-button";
import {Dropdown} from "./dropdowns/dropdown/components/Dropdown";
import {SearchableDropdownObservable} from "./dropdowns/dropdown/observables/SearchableDropdownObservable";
import {Header, HeaderType} from "./headers/header/components/Header";
import {Icon} from "./icons/icon/components/Icon";
import {IconName} from "./icons/icon/components/IconSvgs";
import {Panel} from "./panels/panel/components/Panel";
import {Paragraph} from "./paragraphs/paragraph/components/Paragraph";
import {FindPlacesForm} from "./snoutyfriend/findPlacesForm/components/FindPlacesForm";

const buttonStories = storiesOf("Buttons", module);
buttonStories.add("primary-button",
    () => {
        return <PrimaryButton className={"button--stretch"}>SEARCH</PrimaryButton>;
    });

const headerStories = storiesOf("Headers", module);
headerStories.add("h1",
    () => {
        return (
            <div>
                {getHeaderInAllColors(HeaderType.h1).map((coloredHeader) => {
                    return coloredHeader;
                })}
            </div>
        );
    });
headerStories.add("h2",
    () => {
        return (
            <div>
                {getHeaderInAllColors(HeaderType.h2).map((coloredHeader) => {
                    return coloredHeader;
                })}
            </div>
        );
    });
headerStories.add("h3",
    () => {
        return (
            <div>
                {getHeaderInAllColors(HeaderType.h3).map((coloredHeader) => {
                    return coloredHeader;
                })}
            </div>
        );
    });
const paragprahStories = storiesOf("Paragraphs", module);
paragprahStories.add("normal",
    () => {
        return (
            <div>
                <Paragraph>
                    {getLoremIpsum()}
                </Paragraph>
            </div>
        );
    });
const panelStories = storiesOf("Panels", module);
panelStories.add("find pet-friendly places",
    () => {
        return (
            <Panel>
                <Header> Find pet-friendly places</Header>
                <Paragraph>{getLoremIpsum()}</Paragraph>
                <PrimaryButton className="button--stretch">Find</PrimaryButton>
            </Panel>
        );
    });

const dropdownStories = storiesOf("Dropdowns", module);
dropdownStories.add("locations",
    () => {
    const searchableDropdownObservable = new SearchableDropdownObservable([
        {
            key: "1",
            name: "Zagreb",
        },
        {
            key: "2",
            name: "Split",
        },
        {
            key: "3",
            name: "Rijeka",
        },
    ]);
    return (
            <Dropdown
                searchableDropdownObservable={searchableDropdownObservable}
                activeItem={{
                key: "1",
                name: "Zagreb",
            }}/>
        );
    });

const iconStories = storiesOf("Icons", module);
iconStories.add("basic",
    () => {
        return (
            <div>
                <Icon iconName={IconName.MAGNIFIER} />
                <Icon iconName={IconName.ARROW_DOWN} />
            </div>
        );
    });
const snoutyFriendStories = storiesOf("SnoutyFriend", module);
snoutyFriendStories.add("Find places form", () => {
    return <FindPlacesForm></FindPlacesForm>;
});

function getHeaderInAllColors(headerType: HeaderType) {
    const coloredHeaders = [];
    for (let i = 1; i <= 4; i++) {
        coloredHeaders.push(
            <Header key={i} className={`color color--${i}`} type={headerType}>This is {headerType}</Header>,
        );
    }
    return coloredHeaders;
}

function getLoremIpsum(): string {
    return `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.`;
}
