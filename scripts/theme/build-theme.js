const fs = require('fs-extra');
const path = require('path');
const request = require('request');
const { spawn } = require('child_process');

const args = Array.apply(null, process.argv);
console.log('args: ', args);
console.log('lengths: ', args.length);

let theme = 'staging';
if (args.length > 2) {
  theme = args[2];
}

//const envFilePath = path.join(process.cwd(), `${theme}`);

//console.log('envFilePath: ', envFilePath);

const baseScssFilePath = path.join(process.cwd(), `\\src\\styles\\base.scss`);

//console.log('baseScssFilePath: ', baseScssFilePath);
// return spawn('vue-cli-service', ['build', '--mode', theme], {
//     stdio: 'inherit'
// });

let configURI = `https://raw.githubusercontent.com/CodingWorkshop/env-portal-web/master/${theme}.scss`;
//console.log(configURI);
return request(
  {
    method: 'GET',
    uri: configURI
  },
  (error, response, body) => {
    //console.log(body);

    return fs.writeFile(baseScssFilePath, body).then(() =>
      spawn(
        /^win/.test(process.platform)
          ? 'vue-cli-service.cmd'
          : 'vue-cli-service',
        ['build', '--mode', theme],
        {
          stdio: 'inherit'
        }
        //spawn(
        //  /^win/.test(process.platform)
        //    ? 'vue-cli-service.cmd'
        //    : 'vue-cli-service',
        //  ['serve'],
        //  {
        //    stdio: 'inherit'
        //  }
      )
    );
  }
);
