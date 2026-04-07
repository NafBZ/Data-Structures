class HashTable {
    private dataMap: Array<any>;
    private primeNumber: number = 31;

    constructor(size: number) {
        this.dataMap = new Array(size);
    }

    _hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * this.primeNumber) % this.dataMap.length;
        }
        return hash;
    }

    set(key:string, value:any): void {
        const index = this._hash(key)
        if (!this.dataMap[index]) this.dataMap[index] = []  
        this.dataMap[index].push([key, value])
        return 
    }

    get(key:string): any {
        const index = this._hash(key)
        if (this.dataMap[index]) {
             for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined
    }

    keys(): string[] {
        const allKeys: string[] = []
        for(let i = 0; i < this.dataMap.length; i++){
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return allKeys; 
    }
}

let myHashTable = new HashTable(7);
myHashTable.set("grapes", 100);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
console.log(myHashTable.get("grapes"))