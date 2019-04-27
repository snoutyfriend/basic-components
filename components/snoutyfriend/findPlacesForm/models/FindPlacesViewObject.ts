export interface FindPlacesViewObjectProps {
    title: string;
    description: string;
    ctaSearch: string;
}

export class FindPlacesViewObject implements FindPlacesViewObjectProps {
    public title: string;
    public ctaSearch: string;
    public description: string;

    constructor(props: FindPlacesViewObjectProps) {
        this.title = props.title;
        this.ctaSearch = props.ctaSearch;
        this.description = props.description;
    }
}
