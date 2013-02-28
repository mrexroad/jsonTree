// jsonTree
// Version - 0.1.1
// @author Eric Ponce
// License MIT
//
;(function(window, undefined){

var defaults = {
  childLabel: 'li',
  parentLabel: 'ul',
  keyLabel: 'span',
  keyTemplate: '%element%: '
};

var labels = ['childLabel', 'parentLabel', 'keyLabel'];

var len = labels.length;

var reTagMatch = /(\.|\#)([^\.\#]+)/;

var replace = String.prototype.replace;

function extend () {
  for(var i=1; i<arguments.length; i++){
    for(var key in arguments[i]){
      if(arguments[i].hasOwnProperty(key)){
        arguments[0][key] = arguments[i][key];
      }
    }
  }
  return arguments[0];
}

function render (tag, tags) {
  var idcss = tag.match(reTagMatch);
  tags = tags || [];
  if (idcss) {
    if (idcss[1] === '#') {
      tags.id = idcss[2];
    }else if(idcss[1] === '.') {
      tags.css = tags['class'] || [];
      tags.css.push(idcss[2]);
    }
    render(replace.call(tag, idcss[0], ''), tags);
  }else{
    tags.original = tag;
  }

  return tags;
}

function jsonTree (json, options) {
  this.json = json;
  this.labels = [];
  this.html = '';
  this.opt = extend({}, defaults, options);
  this.init();

  return this;
}

jsonTree.prototype = {

  init: function() {
    this.renderLabels();
    this.walk(this.json);
  },

  walk: function (json) {
    var label = this.labels,
      keyTemplate = this.opt.keyTemplate,
      html = '';

      this.html = (function run(json){
        html += label.parentLabel.openTag;
        for(var element in json){
          html += label.childLabel.openTag;
          html += label.keyLabel.openTag + replace.call(keyTemplate, '%element%', element) + label.keyLabel.closeTag;
          if(typeof json[element] === 'object'){
            run(json[element]);
          }else{
            html += json[element];
          }
          html += label.childLabel.closeTag;
        }
        html += label.parentLabel.closeTag;

        return html;
      })(json);
  },

  renderLabels: function () {
    for (var i = len - 1; i >= 0; i--) {
      var tags = render(this.opt[labels[i]]),
      id = tags.id ? ' id="' + tags.id + '"' : '',
      classTag = tags.css ? ' class="' + tags.css.join(' ') + '"' : '';

      this.labels[labels[i]] = {
        openTag: '<' + tags.original + id + classTag + '>',
        closeTag: '</' + tags.original + '>'
      };
    }
  }
};

window.jsontree = function (json, options) {
  return new jsonTree(json, options).html;
};

})(this);