
// json-tree
// Version - 0.1
//
// License MIT
//
;(function(window, undefined){

var defaults = {
  child: 'li',
  parent: 'ul',
  keyLabel: 'span',
  templateElement: '%element%: '
};

function jsonTree (json, options) {
  this.json = json;
  this.labels = [];
  this.html = '';
  this.opt = extend({}, defaults, options);
  this.init();
}

jsonTree.prototype = {

  init: function() {
    this.renderLabels();
    this.walk(this.json);
  },

  walk: function (json) {
    var element = [],
    opt = this.opt,
    label = this.labels;

    for(element in json){
      this.html += label.parent.openTag + label.child.openTag + label.keyLabel.openTag + this.renderElement(element) + label.keyLabel.closeTag;
      if(typeof json[element] === 'object'){
        this.walk(json[element]);
      }else{
        this.html += json[element];
      }
      this.html += label.child.closeTag + label.parent.closeTag;
    }
  },

  renderLabels: function () {
    var labels = ['child', 'parent', 'keyLabel'],
    len = labels.length;

    for (var i = len - 1; i >= 0; i--) {
      var tags = render(this.opt[labels[i]]),
      id = tags.id ? ' id="' + tags.id + '"' : '',
      classTag = tags.css ? ' class="' + tags.css.join(' ') + '"' : '';

      this.labels[labels[i]] = {
        openTag: '<' + tags.original + id + classTag + '>',
        closeTag: '</' + tags.original + '>'
      };
    }

  },

  renderElement: function (element) {
    return this.opt.templateElement.replace('%element%', element);
  }
};

function render (tag, tags) {
  var idcss = tag.match(/(\.|\#)([^\.\#]+)/);
  tags = tags || [];
  if (idcss) {
    if (idcss[1] === '#') {
      tags.id = idcss[2];
    }else if(idcss[1] === '.') {
      tags.css = tags['class'] || [];
      tags.css.push(idcss[2]);
    }
    var newtag = tag.replace(idcss[0], '');
    render(newtag, tags);

  }else{
    tags.original = tag;
  }

  return tags;
}

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

window.jsontree = function (json, options) {
  var instance = new jsonTree(json, options);
  return instance.html;
};

})(this);