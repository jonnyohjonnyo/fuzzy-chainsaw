/*
  This task deletes old files before a webpack bundle
*/

const del = require('del');
const { dest } = require('./lib/path-helpers');


module.exports = () => (
  del([
    dest('**/*.html'),
    dest('*.json'),
    dest('assets/*.{js,js.map,css,css.map}'),
    dest('assets/fonts/**'),
    dest('assets/images/**'),
    dest('assets/offline/**'),
    dest('assets/svgs/*'),
    dest('assets/static/*')
  ], {
    force: true
  })
);
