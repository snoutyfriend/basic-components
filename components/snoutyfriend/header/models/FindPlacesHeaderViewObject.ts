import {SocialLink} from "../../../core/interfaces/SocialLink";

export interface FindPlacesHeaderViewObjectProps {
    share: string;
    socialLinks: SocialLink[];
}

export class FindPlacesHeaderViewObject implements FindPlacesHeaderViewObjectProps {
    public share: string;
    public socialLinks: SocialLink[];

    constructor(props: FindPlacesHeaderViewObjectProps) {
        this.share = props.share;
        this.socialLinks = props.socialLinks;
    }
}
