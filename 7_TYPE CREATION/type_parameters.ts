// 4 - Type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `The key ${key} is in the object and it's value is ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "ram"))