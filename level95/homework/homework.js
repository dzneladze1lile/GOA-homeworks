const vaultKey = {
    owner: "Admin",
    accesLevel: 5,
    isExpired: false, 
    renewKey() {
        this.isExpired = !this.isExpired
        console.log('Key updated')
    }
}
for (let i in vaultKey) {
    if (vaultKey[i] === 5) {
        console.log("Top Secret Access!")
    } else {
        console.log(i)
    }
}
vaultKey.renewKey();


visitors = ["Victor", "Alice", "Peter", "Stranger", "John"];
for (let i of visitors) {
    if (i === "Stranger") {
        console.log("Intruder detected: " + i);
    } else {
        console.log("Guest " + i + " cleared")
    }
};
