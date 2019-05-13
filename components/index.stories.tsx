import {select} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import * as React from "react";

import "../scss/all.scss";
import {PrimaryButton} from "./basic/buttons/primary-button";
import {SearchableDropdown} from "./basic/dropdowns/dropdown/components/SearchableDropdown";
import {SearchableDropdownObservable} from "./basic/dropdowns/dropdown/observables/SearchableDropdownObservable";
import {SimpleDropdownObservable} from "./basic/dropdowns/dropdown/observables/SimpleDropdownObservable";
import {Header, HeaderType} from "./basic/headers/header/components/Header";
import {Icon} from "./basic/icons/icon/components/Icon";
import {Panel} from "./basic/panels/panel/components/Panel";
import {Paragraph} from "./basic/paragraphs/paragraph/components/Paragraph";
import {DefaultImagesRepository, IconFilenames} from "./core/repositories/DefaultImagesRepository";
import {StaticRepositoryConfiguration} from "./core/repositories/StaticRepositoryConfiguration";
import {DescriptionBoard} from "./snoutyfriend/descriptionSection/components/DescriptionBoard";
import {
    DescriptionBoardFooterViewObject,
} from "./snoutyfriend/descriptionSection/models/DescriptionBoardFooterViewObject";
import {DescriptionBoardViewObject} from "./snoutyfriend/descriptionSection/models/DescriptionBoardViewObject";
import {FindPlacesViewObject} from "./snoutyfriend/findPlacesForm";
import {FindPlacesForm} from "./snoutyfriend/findPlacesForm/components/FindPlacesForm";
import {
    SocialImages,
    SocialImagesProps,
    SocialImagesViewObject,
} from "./snoutyfriend/findPlacesForm/components/SocialImages";
import {ObservableForm} from "./snoutyfriend/findPlacesForm/controllers/ObservableForm";
import {FindPlacesHeader, FindPlacesHeaderType} from "./snoutyfriend/header/components/FindPlacesHeader";
import {FindPlacesHeaderViewObject} from "./snoutyfriend/header/models/FindPlacesHeaderViewObject";
import {FiltersSection} from "./snoutyfriend/searchPage/components/FiltersSection";
import {DropdownFilterModel, DropdownFilterSize} from "./snoutyfriend/searchPage/models/DropdownFilterModel";
import {FilterSectionViewObject} from "./snoutyfriend/searchPage/models/FilterSectionViewObject";

const imagesRepository = new DefaultImagesRepository();

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
            imagesRepository={imagesRepository}
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
                <Icon iconName={IconFilenames.MAGNIFIER} alt={"Magnifier"} imagesRepository={imagesRepository} />
                <Icon iconName={IconFilenames.FACEBOOK}  alt={"Facebook"} imagesRepository={imagesRepository} />
                <Icon iconName={IconFilenames.INSTAGRAM} alt={"Instagram"} imagesRepository={imagesRepository} />
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
    const findPlacesViewObject = new FindPlacesViewObject({
        description: "Odaberite grad i pronadjite kafice i restorane u kojima su dopustene zivotinje!",
        title: "Find Pet-Friendly Places",
        ctaSearch: "Find",
    });
    const observableForm = new ObservableForm([]);
    observableForm.getSubmittedObservable().subscribe((inputStates) => {
        console.log("Submitted", inputStates);
    });
    return <FindPlacesForm
        observableForm={observableForm}
        viewObject={findPlacesViewObject}
        imagesRepository={imagesRepository}
        searchableDropdownObservable={searchableDropdownObservable}/>;
});

snoutyFriendStories.add("Social images", () => {
    const viewObject: SocialImagesViewObject = {
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
        andSeparator: "i",
        images: [
            "https://scontent-lht6-1.cdninstagram.com/vp/7c60c7669f848fffcb3a0da8847a4812/5D5703B7/t51.2885-15/sh0.08/e35/s640x640/56962154_2269904143268101_3706237357547553237_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/ba2bf9063bd537326dc2cacef449972c/5D5AB71C/t51.2885-15/e35/54513663_585604535283742_4348662001913804805_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/7c60c7669f848fffcb3a0da8847a4812/5D5703B7/t51.2885-15/sh0.08/e35/s640x640/56962154_2269904143268101_3706237357547553237_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/7c60c7669f848fffcb3a0da8847a4812/5D5703B7/t51.2885-15/sh0.08/e35/s640x640/56962154_2269904143268101_3706237357547553237_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/7c60c7669f848fffcb3a0da8847a4812/5D5703B7/t51.2885-15/sh0.08/e35/s640x640/56962154_2269904143268101_3706237357547553237_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/ba2bf9063bd537326dc2cacef449972c/5D5AB71C/t51.2885-15/e35/54513663_585604535283742_4348662001913804805_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/7c60c7669f848fffcb3a0da8847a4812/5D5703B7/t51.2885-15/sh0.08/e35/s640x640/56962154_2269904143268101_3706237357547553237_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/ba2bf9063bd537326dc2cacef449972c/5D5AB71C/t51.2885-15/e35/54513663_585604535283742_4348662001913804805_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/7c60c7669f848fffcb3a0da8847a4812/5D5703B7/t51.2885-15/sh0.08/e35/s640x640/56962154_2269904143268101_3706237357547553237_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/ba2bf9063bd537326dc2cacef449972c/5D5AB71C/t51.2885-15/e35/54513663_585604535283742_4348662001913804805_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
            "https://scontent-lht6-1.cdninstagram.com/vp/7c60c7669f848fffcb3a0da8847a4812/5D5703B7/t51.2885-15/sh0.08/e35/s640x640/56962154_2269904143268101_3706237357547553237_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
        ],
    };
    return <SocialImages viewObject={viewObject} />;
});
snoutyFriendStories.add("Header", () => {
    const viewObject = new FindPlacesHeaderViewObject({
        share: "SHARE",
        socialLinks: [
            {
                link: {
                    href: "www.facebook.com",
                    value: "",
                },
                alt: "Facebook",
                iconName: IconFilenames.FACEBOOK,
            },
            {
                link: {
                    href: "www.instagram.com",
                    value: "",
                },
                alt: "Instagram",
                iconName: IconFilenames.INSTAGRAM,
            },
        ],
    });
    const label = "Type";
    const values = {
        "STANDARD": FindPlacesHeaderType.DEFAULT,
        "FIXED TOP": FindPlacesHeaderType.FIXED,
    };
    const type = select(label, values, FindPlacesHeaderType.DEFAULT);
    const staticUrl = "https://github.com/snoutyfriend/basic-components/tree/components/basic/static";
    const staticUrlConfiguration = new StaticRepositoryConfiguration(staticUrl);
    return (
        <div>
            <div className="bg bg--fixed-fill bg--gradient-1"/>
            <FindPlacesHeader imagesRepository={imagesRepository} viewObject={viewObject} type={type}/>
            <div style={{height: "2000px"}}></div>
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
            new DropdownFilterModel({
                label: "Dozvoljeni kucni ljubimci:",
                size: DropdownFilterSize.SMALL,
                dropdownObservable: new SimpleDropdownObservable([
                    {
                        key: "1",
                        name: "Da",
                    },
                    {
                        key: "2",
                        name: "Ne",
                    },
                ]),
            }),
        ],
    });

    return <FiltersSection imagesRepository={imagesRepository} viewObject={filterSectionViewObject} />;
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
