const spins = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

const spinner2 = (input) => {

  for (let i = 0; i < input.length; i++) {
    if (i === input.length - 1) {
      setTimeout(() => {
        process.stdout.write(`\r${input[i]}\n`);
      }, 100 + (i * 200));
    } else {
      setTimeout(() => {
        process.stdout.write(`\r${input[i]}   `);
      }, 100 + (i * 200));
    }
  }
};

spinner2(spins);
