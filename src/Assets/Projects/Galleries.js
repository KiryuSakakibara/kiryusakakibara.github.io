function importAll(r) {
    let images = [];
    r.keys().forEach((item, index) => {
        images.push(r(item));
    });
    return images
}

const Galleries = {
    YetiSetGo: importAll(require.context('./YetiSetGo', false, /\.(png|jpe?g|mp4)$/)),
    HoneyHeist: importAll(require.context('./HoneyHeist', false, /\.(png|jpe?g|mp4)$/))
}

export default Galleries