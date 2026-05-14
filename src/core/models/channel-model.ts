class Channel {
    id: number;
	logo: string;
	name: string;

    constructor(
        id: number,
        logo: string,
        name: string
    ){
        this.id = id;
        this.logo = logo;
        this.name = name;
    }

    static fromJson(json: string){
        let obj = JSON.parse(json);

        return new Channel(
            obj['id'],
            obj['logo_path'],
            obj['name'],
        );
    }
}

export default Channel;