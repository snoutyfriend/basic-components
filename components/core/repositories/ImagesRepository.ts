export enum IconFilenames {
    ARROW_DOWN = "arrow-down.svg",
    FACEBOOK = "facebook.svg",
    INSTAGRAM = "instagram.svg",
    MAGNIFIER = "magnifier.svg",
}

export enum ImageFilenames {
    LOGO_BLUE = "logo-blue.svg",
}

export class ImagesRepository {
    private baseUrl = "https://github.com/snoutyfriend/basic-components/tree/components/basic/static/images";

    public getImagesUrl() {
        return this.baseUrl;
    }

    public getIcon(icon: IconFilenames) {
        return `${this.baseUrl}/icons/${icon}`;
    }

    public getImage(image: ImageFilenames) {
        return `${this.baseUrl}/${image}`;
    }
}
