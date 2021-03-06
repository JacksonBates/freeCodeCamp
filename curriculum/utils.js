const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

exports.dasherize = function dasherize(name) {
  return ('' + name)
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9\-\.]/gi, '')
    .replace(/\:/g, '');
};

const supportedLangs = [
  'arabic',
  'chinese',
  'english',
  'portuguese',
  'russian',
  'spanish'
];

exports.testedLangs = function testedLangs() {
  if (process.env.TEST_CHALLENGES_FOR_LANGS) {
    const filterLangs = process.env.TEST_CHALLENGES_FOR_LANGS.split(',').map(
      lang => lang.trim().toLowerCase()
    );
    return supportedLangs.filter(lang => filterLangs.includes(lang));
  } else {
    return [...supportedLangs];
  }
};

exports.supportedLangs = supportedLangs;
