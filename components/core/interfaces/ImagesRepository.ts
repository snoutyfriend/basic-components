export interface ImagesRepository {
    getIcon(icon: string): string;
    getImage(image: string): string;
    getImagesUrl(): string;
}
