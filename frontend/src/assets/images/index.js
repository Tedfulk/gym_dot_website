

function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item)));
    return images;
}

const carouselimages = importAll(require.context('./carousel', false, /\.(png|jpeg)$/));
export const coachesimages = importAll(require.context('./coaches', false, /\.(png|jpeg)$/));

export default carouselimages;

