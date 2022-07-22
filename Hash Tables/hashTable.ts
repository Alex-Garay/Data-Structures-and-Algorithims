class HashTable {
    private size: number;
    private data: Array<Array<any>>

    constructor(size:number){
      this.size = size;
      this.data = new Array(size)
    }

    public Get(key: string) {
        const address = this._hash(key);

        if (this.data[address] && this.data[address].length === 1) {
            return this.data[address][0]
        }
    }

    public Set(key:string, value:any):void {
        const address = this._hash(key);

        // If the hashed key has not been found, insert our key value pair.
        if (!this.data[address]) {
            // Create a bucket for our key valueu pair
            this.data[address] = [];
            // Push our key value pair into our bucket
            this.data[address].push([key, value]);
        }
        // Collision - If hashed key has been found!
        if (this.data[address]) {
            let found: boolean = false;
            // Check every bucket within our address to verify that our insert key and our existing key are not the same
            for (let i = 0; i < this.data[address].length; i++) {
                // Checks if we have found our matching keys
                if (this.data[address][i][0] === key) {
                    found = true;
                }
            }
            // We have not found a matching key, push into our bucket!
            if (!found) {
                this.data[address].push([key, value]);
            }
        }
    }
  
    private _hash(key:string) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.Set('grapes', 10000)
  console.log(
      myHashTable.Get('grapes')
  )
  myHashTable.Set('apples', 9)
  console.log(
      myHashTable.Get('apples')
  )