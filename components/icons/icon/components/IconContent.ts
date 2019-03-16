import * as facebook from "../images/facebook.svg";
import * as instagram from "../images/instagram.svg";
import * as magnifier from "../images/magnifier.svg";

export enum IconName {
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM",
    MAGNIFIER = "MAGNIFIER",
}

export class IconContent {
    public static getContent( iconName: IconName ) {
        return this[iconName];
    }
    private static FACEBOOK = facebook;
    private static INSTAGRAM = instagram;
    private static MAGNIFIER = magnifier;
}
