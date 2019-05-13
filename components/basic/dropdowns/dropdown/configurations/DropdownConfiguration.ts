export interface DropdownConfigurationIcons {
    [key: string]: string;
}
export interface DropdownConfiguration {
    getIcons(): DropdownConfigurationIcons;
}
