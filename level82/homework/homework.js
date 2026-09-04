let name1 = "John";
function sayHello() {
    let name1 = "Alice";
    console.log(name1);
}
sayHello();
console.log(name1);

// Scope-ები: ადგილია სადაც ცვლადებს ვხედავთ (global, local, block)
// Global vs Block: Global ყველგან ჩანს, Block მხოლოდ ბლოკში
// Window: ბრაუზერის გლობალური ობიექტი, აქ შეიძლება გავუწიოთ წვდომა global ცვლადებს
// Scope pollution: როცა ბევრი ცვლადი უშვებთ global-ში და ერთმანეთს ავნებს
