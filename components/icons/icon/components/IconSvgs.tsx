import * as React from "react";
import {ReactNode} from "react";
export enum IconName {
    MAGNIFIER = "magnifier",
    ARROW_DOWN = "arrowDown",
}

export class IconSvgs {
    public static getIcon(name: IconName): ReactNode {
        return this[`${name}Icon`]();
    }

    public static magnifierIcon(): ReactNode {
        return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
            <path fill="#D8D8D8"
                  d="M12.502 12.403a7.473 7.473 0 0 0 1.926-5.015C14.428 3.321 11.197 0 7.214 0 3.232 0 0 3.32 0 7.388s3.232 7.389 7.214 7.389a7.068 7.068 0 0 0 4.32-1.471l5.364 5.493a.62.62 0 0 0 .914 0 .691.691 0 0 0 0-.947l-5.31-5.45zM1.4 7.457c0-3.319 2.64-6.027 5.9-6.027 3.249 0 5.9 2.697 5.9 6.027s-2.64 6.027-5.9 6.027c-3.26 0-5.9-2.708-5.9-6.027z"/>
        </svg>;
    }

    public static arrowDownIcon(): ReactNode {
        return <div
            className={"icon__arrowDown"}
        ></div>;
    }
}
