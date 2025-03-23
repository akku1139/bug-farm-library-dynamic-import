import static from "./static.js"
const dynamic = (await import("./dynamic.js")).default

console.log("static import:", static)
console.log("dynamic import:", dynamic)
