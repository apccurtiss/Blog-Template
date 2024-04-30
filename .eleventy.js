var filterDate = require('nunjucks-date-filter');

module.exports = (config) => {
  config.addFilter('date', filterDate);

  config.addPassthroughCopy({ 'src/assets': 'assets' });
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true
  })
  config.setDataDeepMerge(true);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}