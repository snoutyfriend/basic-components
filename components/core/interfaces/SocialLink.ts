import {IconFilenames} from "../repositories/DefaultImagesRepository";
import {Link} from "./Link";

export interface SocialLink {
    link: Link;
    iconName: IconFilenames;
    alt: string;
}
