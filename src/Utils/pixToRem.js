export const pixToRem = (pixels) => {
    return (pixels/18.018) + 'rem';
}

export const pixToVh = (px, portHeight = 940) => `${(px * 100) / portHeight}vh`;

export const pixToVw = (px, portWidth = 1920) => `${(px * 100) / portWidth}vw`;

export const pixToMvh = (px, portHeight = 853) => `${(px * 100) / portHeight}vh`;

export const pixToMvw = (px, portWidth = 480) => `${(px * 100) / portWidth}vw`;