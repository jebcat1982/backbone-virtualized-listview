import _ from 'underscore';
import ListView from '../../js/index';
import 'style!css!./index.css';

window.listView = new ListView({
  el: '.container',
}).set({
  items: _.map(_.range(200000), i => ({ text: i })),
  defaultItemHeight: 40,
}).render();
