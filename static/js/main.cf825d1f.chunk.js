(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={section:"Section_section__2QJMq"}},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(3),s=n.n(i),o=(n(17),n(18),n(4)),r=n(5),l=n(6),d=n(12),b=n(11),u=n(7),j=n.n(u),h=n(0);function O(t){var e=t.options,n=t.onLeaveFeedback;return Object(h.jsx)("div",{className:"controls",children:e.map((function(t){return Object(h.jsx)("button",{name:t,type:"button",className:j.a.button,onClick:n,children:t},t)}))})}var v=n(8),x=n.n(v);function f(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,i=t.positiveFedback;return Object(h.jsxs)("ul",{className:x.a.statistics,children:[Object(h.jsxs)("li",{children:["Good: ",Object(h.jsx)("span",{children:e})]}),Object(h.jsxs)("li",{children:["Neutral: ",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("li",{children:["Bad: ",Object(h.jsx)("span",{children:c})]}),Object(h.jsxs)("li",{children:["Total: ",Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("li",{children:["Positive Feedback: ",Object(h.jsxs)("span",{children:[i,"%"]})]})]})}var p=n(9),k=n.n(p);function g(t){var e=t.message;return Object(h.jsx)("p",{className:k.a.notification,children:e})}var m=n(10),F=n.n(m);function _(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:F.a.section,children:[Object(h.jsx)("h2",{children:e}),n]})}var N=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.heandleBtnClick=function(e){console.log(e.target),t.setState((function(t){return Object(o.a)({},e.target.name,t[e.target.name]+1)}))},t}return Object(l.a)(n,[{key:"countTotalFeedback",value:function(){var t=this.state;return t.good+t.neutral+t.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.countTotalFeedback(),e=(this.state.good/t*100).toFixed(0);return t?e:0}},{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(_,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.heandleBtnClick})}),Object(h.jsx)(_,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(f,{good:e,neutral:n,bad:c,total:this.countTotalFeedback(),positiveFedback:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(g,{message:"No feedback given"})})]})}}]),n}(c.Component);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={button:"FeedbackOptions_button__3Pz4q"}},8:function(t,e,n){t.exports={statistics:"Statistics_statistics__1yBlE"}},9:function(t,e,n){t.exports={notification:"Notification_notification__2JQmD"}}},[[20,1,2]]]);
//# sourceMappingURL=main.cf825d1f.chunk.js.map