class Genre {
    id: number;
	description: string;

    constructor(
        id: number,
        description: string
    ){
        this.id = id;
        this.description = description;
    }

    static fromJson(json: string){
        let obj = JSON.parse(json);

        return new Genre(
            obj['id'],
            obj['name'],
        );
    }
}

export default Genre;