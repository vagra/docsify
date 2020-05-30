/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { style } from './style';
import { rebuild, collapse } from './sidebar';
import { highlight } from './scroll';

const install = function(hook, vm) {
  hook.doneEach(function() {
    rebuild();
    highlight();
  });

  hook.mounted(function() {
    style();
    collapse();
  });
};

$docsify.plugins = [].concat(install, $docsify.plugins);
