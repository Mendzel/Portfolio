import { Icon } from "./icon";

export interface Project {
    name: string,
    description: string,
    stackIcons: Icon[],
    mobilePreview: string,
    desktopPreview: string,
    moreDetailsLink?: string
}