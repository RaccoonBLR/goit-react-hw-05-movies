"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{126:function(t,n,r){r.d(n,{e:function(){return u}});var e=r(87),c=r(184),u=function(t){var n=t.location,r=t.movies;return(0,c.jsx)("ul",{children:r.map((function(t){var r=t.id,u=t.title;return(0,c.jsx)("li",{children:(0,c.jsx)(e.rU,{to:"/movies/".concat(r),state:{from:n},children:u})},r)}))})}},577:function(t,n,r){r.d(n,{V:function(){return c}});var e=r(184),c=function(t){var n=t.title;return(0,e.jsx)("h1",{children:n})}},415:function(t,n,r){r.r(n);var e=r(439),c=r(791),u=r(689),a=r(627),o=r(577),i=r(126),s=r(184);n.default=function(){var t=(0,c.useState)([]),n=(0,e.Z)(t,2),r=n[0],f=n[1],p=(0,u.TH)();return(0,c.useEffect)((function(){(0,a.Df)().then(f)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.V,{title:"Trending today"}),(0,s.jsx)(i.e,{location:p,movies:r})]})}},627:function(t,n,r){r.d(n,{Df:function(){return s},IQ:function(){return x},Jh:function(){return d},TP:function(){return l},gy:function(){return p}});var e=r(861),c=r(757),u=r.n(c),a=r(243),o="https://api.themoviedb.org/3",i="api_key=5e1540d5ab73ca6abba3993527b5288a";function s(){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"/trending/movie/day?").concat(i),t.next=3,a.Z.get(n).then((function(t){return t.data.results}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"/search/movie?").concat(i,"&query=").concat(n),t.next=3,a.Z.get(r).then((function(t){return t.data.results}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"/movie/").concat(n,"?").concat(i),t.next=3,a.Z.get(r).then((function(t){return t.data}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"/movie/").concat(n,"/reviews?").concat(i),t.next=3,a.Z.get(r).then((function(t){return t.data.results}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"/movie/").concat(n,"/credits?").concat(i),t.next=3,a.Z.get(r).then((function(t){return t.data.cast}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.eb5f27ec.chunk.js.map