const { execSync } = require('child_process');

function testFltmc() {
  try {
    execSync('fltmc');
    return true;
  } catch (_) {
    return false;
  }
}

module.exports = () => {
  if (process.platform !== 'win32') {
    return false;
  }

  try {
    execSync('fsutil dirty query %systemdrive%');
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return testFltmc();
    }

    return false;
  }
};
