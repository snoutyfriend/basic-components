import * as React from "react";

export interface RandomImageGridProps {
    imagesUrl: string[];
}
export class RandomImageGrid extends React.Component<RandomImageGridProps, {}> {
    public render() {
        return (
            <div className="image-grid image-grid--random">
                {this.props.imagesUrl.map((imageUrl: string, index: number) => {
                    return <div className="image-grid__image">
                        <img key={index} src={imageUrl} />
                    </div>;
                })}
            </div>
        );
    }
}
