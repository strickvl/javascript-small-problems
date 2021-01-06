function diamond(int) {
  if (int === 1) {
    console.log("*");
    return;
  }
  for (let i = 1; i <= int -2; i += 2) {
    spaces = " ".repeat((int - i) / 2);
    stars = "*".repeat(i);
    console.log(`${spaces}${stars}${spaces}`);
  }
  console.log("*".repeat(int));
  for (let i = int - 2; i >= 1; i -= 2) {
    spaces = " ".repeat((int - i) / 2);
    stars = "*".repeat(i);
    console.log(`${spaces}${stars}${spaces}`);
  }
}

diamond(1);
diamond(3);
diamond(9);
