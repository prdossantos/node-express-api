export class Offer {
    constructor(
        public id: number,
        public name: string,
        public value: string,
        public isFavorite: boolean,
        public createdAt: string,
        public updatedAt: string
    ) {}
}

