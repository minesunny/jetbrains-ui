import ace from 'ace-builds/src-noconflict/ace';
import './ace-jetbrains.css';

ace.define(
  'ace/theme/jetbrains',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function (
    _require: unknown,
    exports: { isDark: boolean; cssClass: string; cssText: string },
    _module: unknown,
  ) {
    exports.isDark = false;
    exports.cssClass = 'ace-jetbrains';
    exports.cssText = '';
  },
);

export {};
