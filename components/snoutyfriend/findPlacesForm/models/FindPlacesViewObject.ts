import {Link} from "../../../core/interfaces/Link";
import {SocialLink} from "../../../core/interfaces/SocialLink";

export interface FindPlacesViewObjectProps {
    share: string;
    socialLinks: SocialLink[];
}

export class FindPlacesViewObject implements FindPlacesViewObjectProps {
    public share: string;
    public socialLinks: SocialLink[];

    constructor(props: FindPlacesViewObjectProps) {
        this.share = props.share;
        this.socialLinks = props.socialLinks;
    }
}
