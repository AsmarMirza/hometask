// JS-For
// const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`


// 1. sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

const sampleNews1 = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`
let space = 0;
for (let i = 0; i < sampleNews1.length; i++) {
    if (sampleNews1[i] == ` `) {
        space++;
    }
}
console.log(space);



// 2. sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın.

const sampleNews2 = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`
let comma = 0;
let dot = 0;
for (let i = 0; i < sampleNews2.length; i++) {
    if (sampleNews2[i] == `,`) {
        comma++;
    }
    if (sampleNews2[i] == `.`) {
        dot++;
    }
}
console.log(comma);
console.log(dot);