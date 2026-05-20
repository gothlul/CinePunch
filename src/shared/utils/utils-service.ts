
export default class UtilsService{
    static shuffle(array: any[]): any[] {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    static pickRandomItems(allItems: any[], count: number): any[] {
        const selected: any[] = [];

        while (selected.length < count && selected.length < allItems.length) {
            const randomIndex = Math.floor(Math.random() * allItems.length);
            const item = allItems[randomIndex];

            if (!selected.includes(item)) {
                selected.push(item);
            }
        }

        return selected;
    }
}