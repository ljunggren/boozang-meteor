Package.describe({
  name: 'boozang:boozang',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This is a  helper package to enable Boozang test servvice. It requires you to do a free  account on https://boozang.com and get a project key.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ljunggren/boozang-meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.1');
  api.use('ecmascript');
  api.mainModule('boozang.js');
  api.add_files([
    'bz.html',
  ]',client);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('boozang:boozang');
  api.mainModule('boozang-tests.js');
});
