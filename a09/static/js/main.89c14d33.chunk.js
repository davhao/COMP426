(this.webpackJsonpa09_dev=this.webpackJsonpa09_dev||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(16),s=c.n(a),l=(c(21),c(4)),r=(c(22),c(2)),A=c.n(r),o=c(5),j=c(6),b=c.n(j),d=c(0),u=function(e){var t=e.setLoggedIn,c=function(){var e=Object(o.a)(A.a.mark((function e(c){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),n={email:c.target[0].value,password:c.target[1].value},e.prev=2,e.next=5,b.a.post("https://comp426-1fa20.cs.unc.edu/sessions/login",n,{withCredentials:!0});case 5:t(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{id:"login",children:Object(d.jsxs)("div",{className:"login-card",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h1",{children:"COMP 426 Login"})}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("form",{id:"login-form",onSubmit:function(e){return c(e)},children:[Object(d.jsx)("input",{id:"email",type:"email",name:"email",title:"email",placeholder:"Email",required:!0,autoFocus:!0}),Object(d.jsx)("input",{id:"password",type:"password",name:"password",title:"password",placeholder:"Password",required:!0}),Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})})}),Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("p",{id:"message"})})})]})})]})})},h=function(e){var t=e.setOpen,c=e.getTweets,i=e.replying,a=e.editing,s=e.body,r=e.id,j=e.author,u=Object(n.useState)(i?"Replying to @".concat(j,": \n"):s||""),h=Object(l.a)(u,2),I=h[0],m=h[1],p=function(){var e=Object(o.a)(A.a.mark((function e(n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(I,r),e.prev=2,e.next=5,b()({method:a?"put":"post",url:"https://comp426-1fa20.cs.unc.edu/a09/tweets".concat(a?"/"+r:""),withCredentials:!0,data:i?{type:"reply",body:I,parent:r}:{body:I}});case 5:c(),t(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"modal is-active",children:[Object(d.jsx)("div",{className:"modal-background",onClick:function(){return t()}}),Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsx)("strong",{children:a?"Edit Tweet":"Compose a Tweet"}),Object(d.jsxs)("form",{className:"tweet-compose-box",onSubmit:function(e){return p(e)},children:[Object(d.jsx)("textarea",{placeholder:a?"":"What's on your mind?",value:I,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:Object(d.jsxs)("button",{type:"submit",children:[a?"Save":"Send"," Tweet"]})})]})]})]})},I=Object(d.jsx)("svg",{viewBox:"0 0 24 24",className:"twt-btn",children:Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"})})}),m=Object(d.jsx)("svg",{viewBox:"0 0 24 24",className:"twt-btn",children:Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"})})}),p=Object(d.jsx)("svg",{viewBox:"0 0 24 24",className:"twt-btn",children:Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"})})}),v=function(e){var t=e.tweet,c=e.getTweets,i=t.author,a=t.body,s=t.replyCount,r=t.likeCount,j=t.retweetCount,u=t.isLiked,v=t.id,O=t.isMine,w=Object(n.useState)(u),Z=Object(l.a)(w,2),N=Z[0],M=Z[1],x=Object(n.useState)(r),R=Object(l.a)(x,2),G=R[0],y=R[1],Y=Object(n.useState)(!1),D=Object(l.a)(Y,2),W=D[0],g=D[1],k=Object(n.useState)(!1),C=Object(l.a)(k,2),L=C[0],T=C[1],z=function(){var e=Object(o.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,b()({method:"put",url:"https://comp426-1fa20.cs.unc.edu/a09/tweets/".concat(v,"/").concat(N?"unlike":"like"),withCredentials:!0});case 5:M(!N),y(N?G-1:G+1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"delete",url:"https://comp426-1fa20.cs.unc.edu/a09/tweets/".concat(v),withCredentials:!0});case 3:c(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"post",url:"https://comp426-1fa20.cs.unc.edu/a09/tweets",withCredentials:!0,data:{type:"retweet",parent:v,body:"Retweeted @".concat(i,"'s Tweet:\n ").concat(a)}});case 3:c(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:Object(d.jsxs)("strong",{className:"author",children:["@",i]})})}),Object(d.jsx)("span",{dangerouslySetInnerHTML:{__html:a}}),Object(d.jsxs)("div",{className:"tweet-stats",children:[Object(d.jsxs)("span",{className:"reply",onClick:function(){return T(!0)},children:[p," ",s]}),Object(d.jsxs)("span",{className:"like ".concat(N?"liked":null),onClick:function(){return z()},children:[m," ",G]}),Object(d.jsxs)("span",{className:"rt",onClick:function(){return E()},children:[I," ",j]}),O?Object(d.jsx)("img",{alt:"pen",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTE4VDAwOjQxOjE2LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0xOFQxNzo0Njo1Ni0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0xOFQxNzo0Njo1Ni0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODMzMGE4Mi05ZTJkLWFmNDctOTVkOC03ZWVkNjFkMGQyZDAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmZmQ4MDY5Mi00NTg2LTNhNDMtODg3ZS1lMzc2NWNhNTUzOWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowN2E3YjFkNS1kZGRjLTUwNDYtYTlkNC1iZWFkYWI1MjBhMTYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3YTdiMWQ1LWRkZGMtNTA0Ni1hOWQ0LWJlYWRhYjUyMGExNiIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0xOFQwMDo0MToxNi0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMmEyMDlhNi1hZGMxLWYwNGQtYTExNy05NDg3YjVjY2JiMzkiIHN0RXZ0OndoZW49IjIwMjEtMDQtMThUMTc6NDY6NTYtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjgzMzBhODItOWUyZC1hZjQ3LTk1ZDgtN2VlZDYxZDBkMmQwIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTE4VDE3OjQ2OjU2LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ox3wdgAAAqFJREFUaIHt2j9v00AYx/Hv+U/ss+uNmUpAYaAj4gXwGtiZkJCQYIQBIVEWYENiQ2Jn4TXwGhgYKCDRrbPx/0uOoXHkRG1Jmth3Qfym6Ll7ovvoOXmxhdaafyGO6QNsKl774/GT5ybPcWaSKPhQj/W9uqodDXiep2Xgf02zYh/g7esDoAOxMUksv6VZsdetKaVEqtTNSIZlXpRhW7f2aiWx/NEiYhmWceg/jEbunSSWRwB5UQZJLL+0+62cyBRxBSCO5O8sL5LZYl3sJrH8lWbF5aJq9tuydRPpIgDyotzZCf1n3T0T1dyHk2vW1qyCLCIAtNZklXo5hxHiBoDo7LMGchqizSJGC/cNQBCMJu0eKyDnIdq0mDiSafu08l3xvl03DlkG0UZrTZYXO9O+wzSvHrRrRiFJLL8vi1joO0qz4nq3ZgwyRVy9QN9RmhW7i3UjkE0jwACkDwQMDOkLAQNC+kTAQJC+ETAAZAgE9AwZCgE9QoZEQE+QoRHQA8QEAjYMMYWADUJMImBDENMI2ADEBgSsCbEFAWtAbELABSG2IeACEBsRsCLEVgSsALEZAUtCbEfAEpBtQMBfINuCgHMg24SAMyDbhoBTIGsgfppCwAIkDrz9NRAr920ycxDH9d6t+gfT62QUAQuQieY2gAwDJYQ4vaMT09epmzlIWTcSwHP4FAXe0/MwtkyizeytbhR4d/NKAaCa+lHR6OM49Mkr9WrxMw+TT6ezMpuI6/kvAILRaFI0+lj64pLjOLfCYKS6DTZdp25mE1FjvQegtRbBaDQu69rRTTW3efqa7NrAZ1wqs4mUVeUD1E0jqvrkuw/XdYllWCRR+Fn64qatCOhMxPNcrdRYhEHQeK44HKvmIK/Ux6wYmzzf0hH/v9eyLH8ApNLPrrWeRbAAAAAASUVORK5CYII=",style:{width:"1rem",height:"1rem"},onClick:function(){return g(!0)}}):null,O?Object(d.jsx)("img",{alt:"trash",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTE4VDAxOjIwOjU5LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0xOFQxNzo0NToyMi0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0xOFQxNzo0NToyMi0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkOTUzMDQ4MS1iN2VjLTFmNGYtYmNhZS0yOWYxNWQ2MjY4MDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZDk1MzA0ODEtYjdlYy0xZjRmLWJjYWUtMjlmMTVkNjI2ODAyIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDk1MzA0ODEtYjdlYy0xZjRmLWJjYWUtMjlmMTVkNjI2ODAyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkOTUzMDQ4MS1iN2VjLTFmNGYtYmNhZS0yOWYxNWQ2MjY4MDIiIHN0RXZ0OndoZW49IjIwMjEtMDQtMThUMDE6MjA6NTktMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7WzWhDAAABjklEQVRIie2WzUoCURTH/3dooYvyqzLIrAcwEqUGUWYXvUK9QYsiCMpWLaJN7Vz1PgNaUyhGgjIolGblxyiGo23ktsiBQR1nFGk1P7iLe8+c87sHDsMllFIAwEn0Elpk0qlbj3f92OZwWgghAABKKVrNxs978S3m8wcutHJjN1cAgDnN6n1e0snrTX/wbPCcEAK702WxO13RTDrF+PyB83F1GD2Rx7txCgB5MZsQ4rwbAAFAhDjvLoi5ewBYXfMe6dUZKxLivMVmd1gBoClJ+2yYqyoxNsxVG1L9AABsDqdViPMWw6J6tfINgCqLDXNdhvn7ZDsUKapjAOh2KPIKAAzDgA1zXXWsVvlqaYoWl93z4241CUvulQUtEZ2VZFRN3WGYFerxJgO3IJiOkfn/1pERkTJJRvdTi2aCKTJFpsgUDaP7OMHwX1xvP5Khjjqy3AOA5+TjoZECapScjtzu6Yo+y6UnANgK7txh4I2gt/o5+CiXBF1RvVbdLYi5B6WzSejI7V5ezCakWm1vMPYLgYSSo0QNGFkAAAAASUVORK5CYII=",style:{width:"1rem",height:"1rem"},onClick:function(){return S()}}):null]}),W?Object(d.jsx)(h,{setOpen:g,getTweets:c,editing:!0,body:a,id:v}):null,L?Object(d.jsx)(h,{setOpen:T,getTweets:c,replying:!0,body:a,id:v,author:i}):null]})},O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],a=function(){var e=Object(o.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({method:"get",url:"https://comp426-1fa20.cs.unc.edu/a09/tweets",withCredentials:!0,params:{where:{type:["tweet","retweet","reply"]}}});case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){a()}),[]);var s=Object(n.useState)(!1),r=Object(l.a)(s,2),j=r[0],u=r[1];return Object(d.jsxs)("div",{className:"mainpage container",children:[Object(d.jsx)("h1",{className:"title",children:"426witter"}),Object(d.jsx)("div",{className:"feed",children:c.map((function(e,t){return Object(d.jsx)(v,{tweet:e,getTweets:a},t)}))}),Object(d.jsx)("img",{className:"compose-button",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTE4VDAwOjQxOjE2LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0xOFQxNzo0NDozOC0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0xOFQxNzo0NDozOC0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowN2E3YjFkNS1kZGRjLTUwNDYtYTlkNC1iZWFkYWI1MjBhMTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDdhN2IxZDUtZGRkYy01MDQ2LWE5ZDQtYmVhZGFiNTIwYTE2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDdhN2IxZDUtZGRkYy01MDQ2LWE5ZDQtYmVhZGFiNTIwYTE2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowN2E3YjFkNS1kZGRjLTUwNDYtYTlkNC1iZWFkYWI1MjBhMTYiIHN0RXZ0OndoZW49IjIwMjEtMDQtMThUMDA6NDE6MTYtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz65qAi8AAACnklEQVRogd3aQWvaUAAHcHU7hNGDN+l5OHbaJxi7DfYRdpmU3bZ9Ay8qkpJ60cLYBsqLqYdtpyKKF+dFWthBxqKsgg62srLECg5pSkpb899hdcRWbVqTvJf+4UFCHuH93st7h7znB+C7CQnQboBdYR6SyWSeb21tKcPh0NB1Hc1m8yCXy725UBEAs4UQQk5OTjAtlUrlm7ku9cbOKqIobhiGAQAolUqyIAgPk8nk3Xw+/17TNABANpt9zTTEjNjc3Px8/rkkSR8AQJblA2YhZgQAqKo6SqVST8x1VldX7wHA4eEhmIScR8zCCILwCAAGg4HBHGQWYhqmXC43AaBer/9mCnIZwow5mzM4Pj5GOp1+xgzEKsIcwzBACCHm91BFEELyo9HoyoizVWviXTcCQQ1iN4IKxAmE6xCnEK5CnES4BnEa4QrEDYTjELcQjkLcRDgGcRvhCIQGwnYILYStEJoI2yC0EbZAWEAsDGEFsRCEJcS1IawhrgVhEXFlCKuIK0FYRliGsI6wBPEC4lKIVxBzIV5CzIR4DTEVQgiRrvMvVhTFDVqICxCe50O6rnsOAWByVzcYDL7gOM7yjisAX6FQ+LiyshJZfP92wZhVxWLxCwDUarUfqqqeemEkxmXiptPpHAHA+vr6q7W1tceKokzF0J7YcyE8zz8wDAOapiEejy8B8E3DsIiAeY6EQqGXfr/fJ8vyfiwW0xKJxB2O4+7v7Oz8Mn+GkiQVIpHIUzoTYU7Gomq1+h0AGo3Gn+3t7Z6maRNrsK7rIITkaff8rOIH/p0OUhTldHl5+ZYZ2e12j9rtdntvb6/Y7/ffxmKxfSq9bSG3xxeKomiBQGCp1Wr93N3d/dTr9d5Fo9Gv4XCYZvss5/+IeD3MH3Oymr8rSOcB3ltu0wAAAABJRU5ErkJggg==",alt:"compose tweet",onClick:function(){return u(!0)}}),j?Object(d.jsx)(h,{setOpen:u,getTweets:a}):null]})};var w=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],i=t[1];return c?Object(d.jsx)(O,{}):Object(d.jsx)(u,{setLoggedIn:i})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),Z()}},[[43,1,2]]]);
//# sourceMappingURL=main.89c14d33.chunk.js.map