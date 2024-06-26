const { program } = require('commander');

program
  .version('1.0.0')
  .argument('<name>', 'name to greet')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

program.parse(process.argv);