function _createForOfIteratorHelper(r,e){var t=typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&typeof r.length==="number"){if(t)r=t;var n=0;var a=function r(){};return{s:a,n:function e(){if(n>=r.length)return{done:true};return{done:false,value:r[n++]}},e:function r(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=true,o=false,l;return{s:function e(){t=t.call(r)},n:function r(){var e=t.next();i=e.done;return e},e:function r(e){o=true;l=e},f:function r(){try{if(!i&&t.return!=null)t.return()}finally{if(o)throw l}}}}function _unsupportedIterableToArray(r,e){if(!r)return;if(typeof r==="string")return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor)t=r.constructor.name;if(t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(r,e)}function _arrayLikeToArray(r,e){if(e==null||e>r.length)e=r.length;for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}mixins.search={data:function r(){return{rawSearch:""}},watch:{search:function r(e){var t=this.$refs.timeline.childNodes;var n=_createForOfIteratorHelper(t),a;try{for(n.s();!(a=n.n()).done;){var i=a.value;if(!e||i.dataset.title.includes(e)){i.style.opacity=1;i.style.visibility="visible";i.style.marginTop=0}else{i.style.opacity=0;i.style.visibility="hidden";i.style.marginTop=-i.offsetHeight-30+"px"}}}catch(r){n.e(r)}finally{n.f()}}},computed:{search:function r(){return this.rawSearch.toLowerCase().replace(/\s+/g,"")}}};