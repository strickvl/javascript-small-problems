function diamond(int) {
  if (int === 1) {
    console.log("*");
    return;
  }
  for (let i = 1; i <= int -2; i += 2) {
    let spaces = " ".repeat((int - i) / 2);
    let stars = "*".repeat(i);
    if (i > 1) {
      let middleBlanks = " ".repeat(i - 2);
      stars = `*${middleBlanks}*`;
    }
    console.log(`${spaces}${stars}${spaces}`);
  }

  console.log(`*${" ".repeat(int-2)}*`);

  for (let i = int - 2; i >= 1; i -= 2) {
    let spaces = " ".repeat((int - i) / 2);
    let stars = "*".repeat(i);
    if (i > 1) {
      let middleBlanks = " ".repeat(i - 2);
      stars = `*${middleBlanks}*`;
    }
    console.log(`${spaces}${stars}${spaces}`);
  }
}

diamond(1);
diamond(3);
diamond(9);
diamond(13);
