!function(t){var e="mmenu",c="toggles";t[e].addons[c]={setup:function(){var s=this;this.opts[c],this.conf[c];l=t[e].glbl,this.bind("initPanels:after",function(e){this.__refactorClass(e.find("input"),this.conf.classNames[c].toggle,i.toggle),this.__refactorClass(e.find("input"),this.conf.classNames[c].check,i.check),e.find("input."+i.toggle+", input."+i.check).each(function(){var e=t(this),c=e.closest("li"),n=e.hasClass(i.toggle)?"toggle":"check",l=e.attr("id")||s.__getUniqueId();c.children('label[for="'+l+'"]').length||(e.attr("id",l),c.prepend(e),t('<label for="'+l+'" class="'+i[n]+'"></label>').insertAfter(c.children("."+i.listitem+"__text").last()))})})},add:function(){i=t[e]._c,s=t[e]._d,n=t[e]._e,i.add("toggle check")},clickAnchor:function(t,e){}},t[e].configuration.classNames[c]={toggle:"Toggle",check:"Check"};var i,s,n,l}(jQuery);