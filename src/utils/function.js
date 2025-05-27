export const getImageURL = (image) => {
    return new URL(`../assets/ImageData/${image}`, import.meta.url).href
}