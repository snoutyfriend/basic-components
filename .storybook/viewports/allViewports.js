import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";

export const allViewports = {
    ...INITIAL_VIEWPORTS,
    desktop: {
        name: 'Responsive',
        styles: {
            width: '100%',
            height: '100%',
        },
        type: 'desktop',
    },
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px',
        },
    },
    kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
            width: '533px',
            height: '801px',
        },
    },
};
