import {array, select, text, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import {mount} from "enzyme";
import * as React from "react";

import "../scss/all.scss";
import {PrimaryButton} from "./basic/buttons/primary-button";
import {BasicDropdown} from "./basic/dropdowns/dropdown/components/BasicDropdown";
import {SearchableDropdownObservable} from "./basic/dropdowns/dropdown/observables/SearchableDropdownObservable";
import {Header, HeaderType} from "./basic/headers/header/components/Header";
import {Icon} from "./basic/icons/icon/components/Icon";
import {IconName} from "./basic/icons/icon/components/IconContent";
import {Panel} from "./basic/panels/panel/components/Panel";
import {Paragraph} from "./basic/paragraphs/paragraph/components/Paragraph";
import {DescriptionBoard} from "./snoutyfriend/descriptionSection/components/DescriptionBoard";
import {DescriptionBoardFooterViewObject} from "./snoutyfriend/descriptionSection/models/DescriptionBoardFooterViewObject";
import {DescriptionBoardViewObject} from "./snoutyfriend/descriptionSection/models/DescriptionBoardViewObject";
import {FindPlacesForm} from "./snoutyfriend/findPlacesForm/components/FindPlacesForm";
import {FindPlacesViewObject} from "./snoutyfriend/findPlacesForm/models/FindPlacesViewObject";
import {FindPlacesHeader, FindPlacesHeaderType} from "./snoutyfriend/header/components/FindPlacesHeader";
import {FilterSectionViewObject} from "./snoutyfriend/searchPage/models/FilterSectionViewObject";
import {SimpleDropdownObservable} from "./basic/dropdowns/dropdown/observables/SimpleDropdownObservable";
import {DropdownFilterModel} from "./snoutyfriend/searchPage/models/DropdownFilterModel";
import {FiltersSection} from "./snoutyfriend/searchPage/components/FiltersSection";
import {SearchableDropdown} from "./basic/dropdowns/dropdown/components/SearchableDropdown";

const buttonStories = storiesOf("basic/Buttons", module);
buttonStories.add("primary-button",
    () => {
        return <PrimaryButton className={"button--stretch"}>SEARCH</PrimaryButton>;
    });

const headerStories = storiesOf("basic/Headers", module);
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
headerStories.add("h4",
    () => {
        return (
            <div>
                {getHeaderInAllColors(HeaderType.h4).map((coloredHeader) => {
                    return coloredHeader;
                })}
            </div>
        );
    });
const paragprahStories = storiesOf("basic/Paragraphs", module);
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
const panelStories = storiesOf("basic/Panels", module);
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

const dropdownStories = storiesOf("basic/Dropdowns", module);
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
        <SearchableDropdown
            searchableDropdownObservable={searchableDropdownObservable}
            activeItem={{
                key: "1",
                name: "Zagreb",
            }}/>
        );
    });

const iconStories = storiesOf("basic/Icons", module);
iconStories.add("basic",
    () => {
        return (
            <div>
                <Icon iconName={IconName.MAGNIFIER} alt={"Magnifier"} />
                <Icon iconName={IconName.FACEBOOK}  alt={"Facebook"}/>
                <Icon iconName={IconName.INSTAGRAM} alt={"Instagra"} />
            </div>
        );
    });
const snoutyFriendStories = storiesOf("SnoutyFriend/FindPlaces", module);
snoutyFriendStories.add("Form", () => {
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
    return <FindPlacesForm searchableDropdownObservable={searchableDropdownObservable}/>;
});
snoutyFriendStories.add("Header", () => {
    const viewObject = new FindPlacesViewObject({
        share: "SHARE",
        socialLinks: [
            {
                link: {
                    href: "www.facebook.com",
                    value: "",
                },
                alt: "Facebook",
                iconName: IconName.FACEBOOK,
            },
            {
                link: {
                    href: "www.instagram.com",
                    value: "",
                },
                alt: "Instagram",
                iconName: IconName.INSTAGRAM,
            },
        ],
    });
    const label = "Type";
    const values = {
        "STANDARD": FindPlacesHeaderType.DEFAULT,
        "FIXED TOP": FindPlacesHeaderType.FIXED,
    };
    const type = select(label, values, FindPlacesHeaderType.DEFAULT);
    return (
        <div>
            <div className="bg bg--fixed-fill bg--gradient-1"/>
            <FindPlacesHeader viewObject={viewObject} type={type}/>
        </div>
    );
});

snoutyFriendStories.add("Description Board", () => {
    const footerViewObject = new DescriptionBoardFooterViewObject({
        title: "Pridruzite se Snoutyfriend zajednici na",
        links: [
            {
                href: "",
                value: "Facebooku",
            },
            {
                href: "",
                value: "Instagramu",
            },
        ],
        description: "Saznajte puno korisnih informacija i saljite nam vasa misljenja i prijedloge.",
        andSeparator: "i",
    });
    const descriptionBoardViewObject = new DescriptionBoardViewObject({
        title: "Snoutyfriend je drustvena mreza za ponosne vlasnike kucnih ljubimaca i sve ljubitelje zivotinja.",
        description: `Trenutno kod nas mozete pronaci pet-friendly kafice i restorane u Hrvatskoj.
Istrazujemo koji su najbolji veterinari i saloni za ljubimce po gradovima i uskoro sirimo sadrzaj stranice.
Stranica je besplatna i uveseljavat ce sve vlasnicike ljubimaca i ljubitelje zivotinja!`,
        footer: footerViewObject,
    });
    return <DescriptionBoard viewObject={descriptionBoardViewObject}/>;
});

snoutyFriendStories.add("Filter Section", () => {
    const filterSectionViewObject = new FilterSectionViewObject({
        header: "FILTERI",
        description: "Ovdje upravljate sadrzajem koji se prikazuje s lijeve strane. Isprobajte kako rade filteri pretrazivanja: \n" +
            "\n",
        filters: [
            new DropdownFilterModel({
                label: "Grad:",
                dropdownObservable: new SimpleDropdownObservable([
                    {
                        key: "1",
                        name: "Zagreb",
                    },
                    {
                        key: "2",
                        name: "Split",
                    },
                ]),
            }),
            new DropdownFilterModel({
                label: "Tip:",
                dropdownObservable: new SimpleDropdownObservable([
                    {
                        key: "1",
                        name: "Kafic",
                    },
                    {
                        key: "2",
                        name: "Restoran",
                    },
                ]),
            }),
        ],
    });

    return <FiltersSection viewObject={filterSectionViewObject} />;
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
