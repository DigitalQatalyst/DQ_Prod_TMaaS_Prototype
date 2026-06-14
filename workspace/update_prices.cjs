const fs = require('fs');
const file = 'src/data/services.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"price": "Request Quote"/g, '"price": "Custom"');

fs.writeFileSync(file, content);
console.log("Replaced all occurrences of 'Request Quote' with 'Custom' in services.ts");
