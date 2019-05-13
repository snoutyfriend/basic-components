import * as React from "react";
import {IconFilenames} from "../../../../core";
import {DefaultComponentProps} from "../../../../core/interfaces/DefaultComponentProps";
import {ImagesRepository} from "../../../../core/interfaces/ImagesRepository";

export interface IconProps extends DefaultComponentProps {
    iconName: IconFilenames;
    alt: string;
    size?: number;
    imagesRepository: ImagesRepository;
}
export class Icon extends React.Component<IconProps, {}> {

    public render() {
        const { iconName, className, alt } = this.props;
        const imagesRepository = this.props.imagesRepository;

        return (
            <i
                className={`icon ${className || ""}`}>
                <img src={imagesRepository.getIcon(iconName)} alt={alt}/>
            </i>
        );
    }
}
