const { exec } = require('child_process');
const { Server } = require('karma');
const chokidar = require('chokidar');

function testMain() {
  exec('npm run build && karma start');
  let loading = false;
  chokidar.watch('./src/**/*.ts', {ignored: /(flycheck|spec)/}).on('all', () => {
    if (loading) {
      return false;
    }
    loading = true;
    setTimeout(() => {
      exec('npm run build');
      console.log('changed');
      loading = false;
    }, 100);
  });
}

testMain();
