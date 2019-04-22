import * as arrowDown from "../../../../../static/images/icons/arrow-down.svg";
import * as facebook from "../../../../../static/images/icons/facebook.svg";
import * as instagram from "../../../../../static/images/icons/instagram.svg";
import * as magnifier from "../../../../../static/images/icons/magnifier.svg";

export enum IconName {
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM",
    MAGNIFIER = "MAGNIFIER",
    ARROW_DOWN = "ARROW_DOWN",
}

export class IconContent {
    public static getContent( iconName: IconName ) {
        return this[iconName];
    }
    private static FACEBOOK = facebook;
    private static INSTAGRAM = instagram;
    private static MAGNIFIER = magnifier;
    private static ARROW_DOWN = arrowDown;
}
