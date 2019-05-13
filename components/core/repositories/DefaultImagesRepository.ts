import {ImagesRepository} from "../interfaces/ImagesRepository";
import {StaticUrlConfiguration} from "../interfaces/StaticUrlConfiguration";

export enum IconFilenames {
    ARROW_DOWN = "arrow-down.svg",
    FACEBOOK = "facebook.svg",
    INSTAGRAM = "instagram.svg",
    MAGNIFIER = "magnifier.svg",
}

export enum ImageFilenames {
    LOGO_BLUE = "logo-blue.svg",
}

export class DefaultImagesRepository implements ImagesRepository {
    private baseUrl = "https://github.com/snoutyfriend/basic-components/tree/components/basic/static/images";

    constructor(private staticRepositoryConfiguration?: StaticUrlConfiguration) {
        if (staticRepositoryConfiguration === undefined) {
            return;
        }

        this.baseUrl = staticRepositoryConfiguration.getBaseUrl();
    }

    public getImagesUrl() {
        return this.baseUrl;
    }

    public getIcon(icon: IconFilenames) {
        return `${this.baseUrl}/images/icons/${icon}`;
    }

    public getImage(image: ImageFilenames): string {
        return `${this.baseUrl}/images/${image}`;
    }
}
