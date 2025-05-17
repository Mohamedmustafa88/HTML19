// 1. Tulosta luvut 0-10: for, while, do...while

console.log("1. Luvut 0-10:");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

// 2. Tulosta luvut 10-0: for, while, do...while

console.log("\n2. Luvut 10-0:");

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let k = 10;
while (k >= 0) {
  console.log(k);
  k--;
}

let l = 10;
do {
  console.log(l);
  l--;
} while (l >= 0);

// 3. Tulosta pyramidimainen kuvio

console.log("\n3. Pyramidi:");

let pyramid = "";
for (let i = 1; i <= 7; i++) {
  pyramid += "#";
  console.log(pyramid);
}

// 4. Kertotaulu itsellään

console.log("\n4. Neliöiden tulostus:");

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 5. Taulukkomuotoinen tulos: i, i^2, i^3

console.log("\n5. i | i^2 | i^3");

console.log(" i    i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(` ${i}    ${i*i}     ${i**3}`);
}

// 6. Parilliset luvut 0-100

console.log("\n6. Parilliset luvut 0–100:");

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// 7. Summa luvuista 0–200

console.log("\n7. Summa 0–200:");

let sum = 0;
for (let i = 0; i <= 200; i++) {
  sum += i;
}
console.log(sum);

// 8. Taulukko 5 satunnaisesta numerosta

console.log("\n8. Satunnaiset numerot:");

let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(randomNumbers);

// 9. Taulukko 5 uniikeista numeroista

console.log("\n9. Uniikit numerot:");

function getUniqueRandoms(count, max) {
  let result = new Set();
  while (result.size < count) {
    result.add(Math.floor(Math.random() * max));
  }
  return Array.from(result);
}

console.log(getUniqueRandoms(5, 100));

// 10. 8 merkin tunnus

console.log("\n10. Satunnainen 8 merkin tunnus:");

function generateRandomID(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

console.log(generateRandomID(8));

// 11. Random RGB-väri

console.log("\n11. Satunnainen RGB-väri:");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(getRandomColor());

// 12. Tulosta NASA annetusta taulukosta

console.log("\n12. Tulosta 'NASA':");

const minorPlanets = ["Newtonia", "Arecibo", "Sibelius", "Ariane"];

const nasaInitials = minorPlanets.map(word => word[0]).join('');
console.log(nasaInitials); // Pitäisi tulostaa "NASA"
