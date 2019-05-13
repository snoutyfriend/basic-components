import * as React from "react";
import {Link} from "./interfaces/Link";

export class SocialLinksFormatter {
    public getFormatterLinks(links: Link[], andSeparator: string) {
        const indexToPlaceSeparatorAnd = links.length - 2;
        return links.map((link, index) => {
            if (index === indexToPlaceSeparatorAnd) {
                return this.getLinkComponent(link, `${index}`, ` ${andSeparator} `);
            }

            return this.getLinkComponent(link, `${index}`);
        });
    }

    private getLinkComponent(link: Link, key: string, separator: string = "") {
        return (
            <span key={key}>
                <a href={link.href}>
                    {link.value}
                </a>
                {separator}
            </span>
        );
    }
}
