import Image from "../models/Image";

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://10.1.1.105:3333/uploads/${image.path}`
        }
    },
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}