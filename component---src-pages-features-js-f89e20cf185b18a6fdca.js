(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return O});var i=a(10),c=a.n(i),n=a(130),l=a(0),g=a.n(l),s=a(225),o=a(224),I=a(331),r=a(267),d=a(279),m=(a(276),a(220)),b=a(209),C=a(208),u=a.n(C),A=C.colors.ui.light,p={display:"table-row"},j={display:"table-row"},y={display:"table-row"},Z=function(){var e,t,a,i={float:"none",marginLeft:0,marginRight:0,display:"inline-block"},c={display:"table-cell",verticalAlign:"middle",textAlign:"center",padding:10,borderLeft:"1px solid "+A,borderBottom:"1px solid "+A},l=((e={display:"table-cell",verticalAlign:"middle",textAlign:"center",padding:10,borderLeft:"1px solid "+A,borderBottom:"1px solid "+A})[u.a.Phablet]={borderBottom:0},e),o=[g.a.createElement("div",{className:Object(n.css)(c)},g.a.createElement("h4",{style:{margin:0}},"Icon")),g.a.createElement("div",{className:Object(n.css)(c)},g.a.createElement(r.a,{num:"3",style:i})),g.a.createElement("div",{className:Object(n.css)(c)},g.a.createElement(r.a,{num:"2",style:i})),g.a.createElement("div",{className:Object(n.css)(c)},g.a.createElement(r.a,{num:"1",style:i})),g.a.createElement("div",{className:Object(n.css)(c)},g.a.createElement(r.a,{num:"0",style:i}))],I=[g.a.createElement("div",{className:Object(n.css)(l)},g.a.createElement("h5",{style:{margin:0}},"Feature Level")),g.a.createElement("div",{className:Object(n.css)(l)},"Good"),g.a.createElement("div",{className:Object(n.css)(l)},"Normal"),g.a.createElement("div",{className:Object(n.css)(l)},"Need work"),g.a.createElement("div",{className:Object(n.css)(l)},"Not possible")];return g.a.createElement("div",null,g.a.createElement(s.Helmet,null,g.a.createElement("title",null,"Features")),g.a.createElement("div",{className:Object(n.css)((t={border:"1px solid "+A,borderLeft:0,fontFamily:b.b.headerFontFamily.join(","),display:"none"},t[u.a.Phablet]={display:"table"},t))},g.a.createElement("div",{className:Object(n.css)(p)},o),g.a.createElement("div",{className:Object(n.css)(j)},I)),g.a.createElement("div",{className:Object(n.css)((a={display:"table",border:"1px solid "+A,borderLeft:0,fontFamily:b.b.headerFontFamily.join(",")},a[u.a.Phablet]={display:"none"},a))},[0,1,2,3,4].map(function(e){return g.a.createElement("div",{className:Object(n.css)(y),key:e},o[e],I[e])})))},N={textTransform:"uppercase"},h=function(){return g.a.createElement("section",null,g.a.createElement("h1",{id:"introduction",style:{marginTop:0}},"Features"),g.a.createElement(d.a,null,"There are many hotels to choose. Every choice has its own reason. Therefore, there is no hotel fits every need. We, as a family, made a place whick we would like to stay while traveling abroad."),g.a.createElement(d.a,null,"We, at Hotel Fulva, value flexibility, safety, and security for guests' comfort."),g.a.createElement("h6",{id:"legend",className:Object(n.css)(N)},"Legend"),g.a.createElement(Z,null))},v=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=function(e){var t=(e||[]).map(function(e,t){return e.node.Category?t:-1}).filter(function(e){return-1!==e}).map(function(t,a,i){return a<i.length-1?[t,i[a+1]]:[t,e.length]}).map(function(t){return e.slice(t[0],t[1])});return{sectionHeaders:(e||[]).filter(function(e){return e.node.Category}).map(function(e){return e.node.Category}),sections:t}}(this.props.data.allGatsbySpecsCsv.edges),t=e.sections,a=e.sectionHeaders;return g.a.createElement(o.a,{location:this.props.location,enableScrollSync:!0},g.a.createElement(m.a,null,g.a.createElement("main",{id:"reach-skip-nav"},g.a.createElement(h,null),g.a.createElement(I.a,{sections:t,sectionHeaders:a}))))},t}(l.Component);t.default=v;var O="2271241596"},220:function(e,t,a){"use strict";a(18);var i=a(130),c=a(0),n=a.n(c),l=a(208),g=a.n(l),s=a(209);t.a=function(e){var t,a=e.children,c=e.className,l=void 0===c?"":c,o=e.hasSideBar,I=void 0===o||o,r=e.overrideCSS,d=void 0===r?{}:r;return n.a.createElement("div",{className:Object(i.merge)(Object(i.css)(Object.assign((t={maxWidth:I?Object(s.c)(g.a.maxWidthWithSidebar):Object(s.c)(g.a.maxWidth),margin:"0 auto",padding:Object(s.c)(2)+" "+Object(s.c)(s.b.blockMarginBottom),paddingBottom:Object(s.c)(3.5),position:"relative"},t[g.a.Tablet]={paddingBottom:Object(s.c)(1.5)},t),d))+" "+l)},a)}},266:function(e,t){e.exports=[{title:"Documentation",items:[{title:"Introduction",link:"/docs/"},{title:"Quick Start",link:"/docs/quick-start"},{title:"Recipes",link:"/docs/recipes/"}]}]},267:function(e,t,a){"use strict";a(18);var i,c=a(130),n=a(0),l=a.n(n),g=a(209),s=a(208),o=a.n(s),I=s.colors.accent,r=function(e){switch(e){case"2":return"linear-gradient(90deg, transparent 50%, #edebf0 50%)";case"1":return"linear-gradient(180deg, transparent 50%, #edebf0 50%), linear-gradient(90deg, transparent 50%, #edebf0 50%)";case"3":case"0":case"":case"N/A":default:return"none"}},d=((i={height:Object(g.c)(.75),width:Object(g.c)(.75),borderRadius:"50%",margin:"0 auto"})[o.a.Mobile]={height:Object(g.c)(.875),width:Object(g.c)(.875)},i);t.a=function(e){var t=e.num,a=e.style;return l.a.createElement("div",{className:Object(c.css)(Object.assign({},d,{backgroundColor:-1!==["N/A","0",""].indexOf(t)?"#edebf0":I,backgroundImage:r(t)},a||{}))})}},276:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return d});a(18),a(214);var i=a(266),c=a.n(i),n=a(277),l=a.n(n),g=a(278),s=a.n(g),o=function(e){return e.forEach(function(e){e.items&&I(e.items,e.title)}),e},I=function e(t,a){t.forEach(function(t){var i,c;t.hash=(i=t.link,c=-1,i&&(c=i.indexOf("#")),c>=0&&i.substr(c+1)),t.parentTitle=a,t.items&&e(t.items,t.title)})},r=o(c.a).map(function(e){return Object.assign({},e,{key:"docs"})}),d=(o(l.a).map(function(e){return Object.assign({},e,{key:"features",disableAccordions:!0,disableExpandAll:!0})}),o(s.a).map(function(e){return Object.assign({},e,{key:"tutorial"})}))},277:function(e,t){e.exports=[{title:"Introduction",items:[{title:"Introduction",link:"/features/#introduction"},{title:"Legend",link:"/features/#legend"}]},{title:"Performance",items:[{title:"Static content",link:"/features/#static-content"},{title:"CDN",link:"/features/#cdn"},{title:"AMP support",link:"/features/#amp-support"},{title:"Offline access",link:"/features/#offline-access"},{title:"Prefetch linked pages",link:"/features/#prefetch-linked-pages"},{title:"Page caching",link:"/features/#page-caching"},{title:"No extraneous code fetching",link:"/features/#no-extraneous-code-fetching"},{title:"Progressive image loading",link:"/features/#progressive-image-loading"},{title:"Responsive image loading",link:"/features/#responsive-image-loading"},{title:"Inlines critical CSS",link:"/features/#inlines-critical-css"},{title:"Font self-hosting",link:"/features/#font-self-hosting"}]},{title:"Developer Experience",items:[{title:"Serverless",link:"/features/#serverless"},{title:"Export as Code",link:"/features/#export-as-code"},{title:"Refresh or link to preview",link:"/features/#refresh-or-link-to-preview"},{title:"Hot reload content",link:"/features/#hot-reload-content"},{title:"Hot reload code",link:"/features/#hot-reload-code"},{title:"Componentization",link:"/features/#componentization"},{title:"One-way data binding",link:"/features/#one-way-data-binding"},{title:"Declarative API data queries (GraphQL)",link:"/features/#declarative-api-data-queries-(graphql)"},{title:"Declarative UI",link:"/features/#declarative-ui"},{title:"Asset pipelines",link:"/features/#asset-pipelines"},{title:"CSS Extensions (eg Sass)",link:"/features/#css-extensions-(eg-sass)"},{title:"Advanced JavaScript syntax",link:"/features/#advanced-javascript-syntax"}]},{title:"Ecosystem",items:[{title:"Component ecosystem",link:"/features/#component-ecosystem"},{title:"Hosted option",link:"/features/#hosted-option"},{title:"Theme ecosystem",link:"/features/#theme-ecosystem"}]},{title:"Design",items:[{title:"Programmatic Design",link:"/features/#programmatic-design"},{title:"Design systems",link:"/features/#design-systems"},{title:"Component library",link:"/features/#component-library"}]}]},278:function(e,t){e.exports=[{title:"Tutorial (step-by-step)",items:[{title:"Introduction",link:"/Guest Book/"},{title:"0. Before your travel",link:"/tutorial/part-zero/",ui:"steps"},{title:"1. Access to Fulva",link:"/tutorial/part-one/",ui:"steps"},{title:"2. Check in and check out",link:"/tutorial/part-two/",ui:"steps"},{title:"3. While staying at Fulva",link:"/tutorial/part-three/",ui:"steps"},{title:"4.Food experience",link:"/tutorial/part-four/",ui:"steps"},{title:"5. Activities in Kyoto",link:"/tutorial/part-five/",ui:"steps"},{title:"6. Emergency Contingency",link:"/tutorial/part-six/",ui:"steps"},{title:"7. Terms of Booking",link:"/tutorial/part-seven/",ui:"steps"},{title:"8. Safe travel back",link:"/tutorial/part-eight/",ui:"steps"}]}]},279:function(e,t,a){"use strict";var i=a(130),c=a(0),n=a.n(c),l=a(209);t.a=function(e){var t=e.children;return n.a.createElement("p",{className:Object(i.css)({fontFamily:l.b.headerFontFamily.join(","),marginBottom:0})},t)}},325:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYwIiB3aWR0aD0iMTYwIiB2ZXJzaW9uPSIxLjAiPgogIDxnIGZpbGw9IiM0YjRiNGIiPgogICAgPHBhdGggZD0iTTgwIDE1Yy0zNS44OCAwLTY1IDI5LjEyLTY1IDY1czI5LjEyIDY1IDY1IDY1IDY1LTI5LjEyIDY1LTY1LTI5LjEyLTY1LTY1LTY1em0wIDEwYzMwLjM2IDAgNTUgMjQuNjQgNTUgNTVzLTI0LjY0IDU1LTU1IDU1LTU1LTI0LjY0LTU1LTU1IDI0LjY0LTU1IDU1LTU1eiIvPgogICAgPHBhdGggZD0iTTg5Ljk5OCA1MS4yNWExMS4yNSAxMS4yNSAwIDEgMS0yMi41IDAgMTEuMjUgMTEuMjUgMCAxIDEgMjIuNSAwem0uNjY3IDU5LjcxYy0uMDY5IDIuNzMgMS4yMTEgMy41IDQuMzI3IDMuODJsNS4wMDguMVYxMjBINjAuOTI3di01LjEybDUuNTAzLS4xYzMuMjkxLS4xIDQuMDgyLTEuMzggNC4zMjctMy44MlY4MC4xNDdjLjAzNS00Ljg3OS02LjI5Ni00LjExMy0xMC43NTctMy45Njh2LTUuMDc0TDkwLjY2NSA3MCIvPgogIDwvZz4KPC9zdmc+Cg=="},326:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNTBweCIKICAgaGVpZ2h0PSI1MHB4IgogICB2aWV3Qm94PSIwIDAgNTAgNTAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9IlNWR1Jvb3QiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImEuc3ZnIj4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNS4xMiIKICAgICBpbmtzY2FwZTpjeD0iMjUiCiAgICAgaW5rc2NhcGU6Y3k9IjI1IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpncmlkLWJib3g9InRydWUiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczU2NjgiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNTY3MSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpZD0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogICAgPGZsb3dSb290CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgaWQ9ImZsb3dSb290NjIyNyIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSI+PGZsb3dSZWdpb24KICAgICAgICAgaWQ9ImZsb3dSZWdpb242MjI5Ij48cmVjdAogICAgICAgICAgIGlkPSJyZWN0NjIzMSIKICAgICAgICAgICB3aWR0aD0iNDEuMjEwOTM4IgogICAgICAgICAgIGhlaWdodD0iNDEuNDA2MjUiCiAgICAgICAgICAgeD0iNC42ODc1IgogICAgICAgICAgIHk9IjQuNDkyMTg3NSIgLz48L2Zsb3dSZWdpb24+PGZsb3dQYXJhCiAgICAgICAgIGlkPSJmbG93UGFyYTYyMzMiPkFhYWFhZGZzZDwvZmxvd1BhcmE+PC9mbG93Um9vdD4gICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICB4PSI5LjM3NSIKICAgICAgIHk9IjQzLjk0NTMxMiIKICAgICAgIGlkPSJ0ZXh0NjIzNyI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjYyMzUiCiAgICAgICAgIHg9IjkuMzc1IgogICAgICAgICB5PSI0My45NDUzMTIiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6NDIuNjY2NjY2NjdweCI+QTwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="},327:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNTBweCIKICAgaGVpZ2h0PSI1MHB4IgogICB2aWV3Qm94PSIwIDAgNTAgNTAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9IlNWR1Jvb3QiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImIuc3ZnIj4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNS4xMiIKICAgICBpbmtzY2FwZTpjeD0iMjUiCiAgICAgaW5rc2NhcGU6Y3k9IjI1IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpncmlkLWJib3g9InRydWUiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczU2NjgiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNTY3MSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpZD0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogICAgPGZsb3dSb290CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgaWQ9ImZsb3dSb290NjIyNyIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSI+PGZsb3dSZWdpb24KICAgICAgICAgaWQ9ImZsb3dSZWdpb242MjI5Ij48cmVjdAogICAgICAgICAgIGlkPSJyZWN0NjIzMSIKICAgICAgICAgICB3aWR0aD0iNDEuMjEwOTM4IgogICAgICAgICAgIGhlaWdodD0iNDEuNDA2MjUiCiAgICAgICAgICAgeD0iNC42ODc1IgogICAgICAgICAgIHk9IjQuNDkyMTg3NSIgLz48L2Zsb3dSZWdpb24+PGZsb3dQYXJhCiAgICAgICAgIGlkPSJmbG93UGFyYTYyMzMiPkFhYWFhZGZzZDwvZmxvd1BhcmE+PC9mbG93Um9vdD4gICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICB4PSI5LjM3NSIKICAgICAgIHk9IjQzLjk0NTMxMiIKICAgICAgIGlkPSJ0ZXh0NjIzNyI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIHg9IjkuMzc1IgogICAgICAgICB5PSI0My45NDUzMTIiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6NDIuNjY2NjY3OTRweCIKICAgICAgICAgaWQ9InRzcGFuNjIzOSI+QjwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="},328:function(e,t,a){e.exports=a.p+"static/squarespace-compressed-7b4009b3bdafd1b8497b956ff7342236.png"},331:function(e,t,a){"use strict";var i=a(130),c=(a(19),a(10)),n=a.n(c),l=a(0),g=a.n(l),s=a(208),o=a.n(s),I=a(267),r=a(325),d=a.n(r),m=a(3),b=a.n(m),C=a(209),u={borderBottom:0},A={borderBottom:0},p=function(e){return g.a.createElement("tr",{className:Object(i.css)(u)},g.a.createElement("td",{className:Object(i.css)(A),colSpan:4},g.a.createElement("h3",{className:Object(i.css)({marginTop:Object(C.c)(C.b.blockMarginBottom)})},e.text)))};p.propTypes={text:b.a.string};var j,y=p,Z=(a(18),["Feature","Fulva","Hotel A","Hotel B"]),N={WebkitHyphens:"auto",MsHyphens:"auto",hyphens:"auto",display:"inline-block"},h=function(){return g.a.createElement("tr",null,Z.map(function(e,t){var a;return g.a.createElement("td",{key:t,className:Object(i.css)(Object.assign({"&&":{padding:Object(C.c)(.5)+" "+Object(C.c)(.5)+" "+Object(C.c)(3/8)},display:"none",textTransform:"uppercase"},Object(C.d)(-.5),(a={lineHeight:1,fontWeight:500,textAlign:"center",verticalAlign:"bottom",width:0===t?120:"inherit",border:0,color:s.colors.gray.calm,background:s.colors.ui.whisper,"&:first-child":{borderTopLeftRadius:o.a.radiusLg,textAlign:"left"},"&:last-child":{borderTopRightRadius:o.a.radiusLg}},a[o.a.Mobile]={display:"table-cell",width:125},a[o.a.Tablet]={width:150},a[o.a.Desktop]={width:175},a)))},g.a.createElement("span",{className:Object(i.css)(N)},e))}))},v=a(242),O=a.n(v),M=a(326),k=a.n(M),W=a(327),G=a.n(W),f=(a(328),(j={height:Object(C.c)(.75),marginBottom:0,display:"block",margin:"auto"})[o.a.Mobile]={height:Object(C.c)(5/4)},j),w=["",g.a.createElement("img",{src:O.a,key:"0",className:Object(i.css)(f),alt:"Fulva Logo"}),g.a.createElement("img",{src:k.a,key:"1",className:Object(i.css)(f),alt:"Hotel_A Logo"}),g.a.createElement("img",{src:G.a,key:"2",className:Object(i.css)(f),alt:"Hotel_B Logo"})],Y=function(e){return g.a.createElement("tr",{key:"subhead",style:{display:e.display?"table-row":"none"}},w.map(function(t,a){var c;return g.a.createElement("td",{key:a,className:Object(i.css)(Object.assign({display:"table-cell",background:""+s.colors.ui.whisper,fontWeight:600},Object(C.d)(-1/9),(c={lineHeight:1.3,textAlign:"left",verticalAlign:"middle",fontFamily:C.b.headerFontFamily.join(","),borderColor:s.colors.ui.light,"&&":{paddingTop:Object(C.c)(.25),paddingLeft:Object(C.c)(.25),paddingRight:a>=1?Object(C.c)(.5):0,paddingBottom:Object(C.c)(.25),"&:last-child":{paddingRight:a>=1?Object(C.c)(.5):0}}},c[o.a.Mobile]={paddingTop:Object(C.c)(.5),paddingLeft:Object(C.c)(.5)+" !important",paddingRight:Object(C.c)(.5),paddingBottom:Object(C.c)(.5),"&:last-child":{paddingRight:Object(C.c)(.5)}},c)))},t||e.category||"Feature")}))},L={"&&":{fontWeight:"normal",borderBottom:0}},D=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}return n()(t,e),t.prototype.render=function(){var e=this,t=["Feature","Fulva","Hotel_A","Hotel_B"],a=function(e,t){switch(t){case 0:var a;return g.a.createElement("div",{className:Object(i.css)((a={verticalAlign:"middle",textAlign:"left",display:"inline-block",marginLeft:"auto",marginRight:"auto",padding:Object(C.c)(.25)+" 0 "+Object(C.c)(.25)+" "+Object(C.c)(.25)},a[o.a.Mobile]={padding:Object(C.c)(.5)+" 0 "+Object(C.c)(.5)+" "+Object(C.c)(.5)},a))},g.a.createElement("a",{className:Object(i.css)(L),onClick:function(e){e.preventDefault()}},[(c=e.split(" ")).slice(0,c.length-1).join(" "),g.a.createElement("span",{className:Object(i.css)({"&:hover":{background:s.colors.ui.bright}})}," ",c[c.length-1]+" ",g.a.createElement("img",{src:d.a,className:Object(i.css)({height:Object(C.c)(.4),marginBottom:Object(C.c)(2/15),verticalAlign:"text-bottom"}),alt:"Info Icon"}))]));case 1:case 2:case 3:case 4:return g.a.createElement(I.a,{num:e});default:return null}var c},c=function(t,a){return e.state[t+","+a]},n=this.props,l=n.sections,r=n.sectionHeaders,m=function(e){return[].concat.apply([],e)};return g.a.createElement("div",{style:{display:"table",overflowX:"scroll"}},g.a.createElement("tbody",null,m(l.map(function(n,l){return[g.a.createElement(y,{text:r[l]}),g.a.createElement(h,null)].concat(m(n.map(function(n,I){var r;return[].concat([g.a.createElement(Y,{display:n.node.Subcategory,category:n.node.Subcategory}),g.a.createElement("tr",null,t.map(function(t,o){return g.a.createElement("td",{key:o,className:Object(i.css)({display:"table-cell","&:hover":{cursor:o>=0?"pointer":"inherit"},borderBottom:c(l,I)?"none":"1px solid "+s.colors.ui.light,minWidth:40,paddingRight:0,paddingLeft:0,textAlign:"left",verticalAlign:"middle",fontSize:"90%",lineHeight:""+Object(C.c)(.75)}),id:0===o&&n.node.Feature.toLowerCase().split(" ").join("-"),onClick:function(){var t;e.setState(((t={})[l+","+I]=!c(l,I),t))}},a(n.node[t],o))})),g.a.createElement("tr",{style:{display:c(l,I)?"table-row":"none"}},g.a.createElement("td",{className:Object(i.css)({fontFamily:C.b.headerFontFamily.join(","),paddingBottom:"calc("+Object(C.c)(1)+" - 1px)","&&":(r={paddingRight:""+Object(C.c)(.25),paddingLeft:""+Object(C.c)(.25)},r[o.a.Mobile]={paddingRight:""+Object(C.c)(.5),paddingLeft:""+Object(C.c)(.5)},r[o.a.Phablet]={paddingRight:""+Object(C.c)(2),paddingLeft:""+Object(C.c)(2)},r)}),colSpan:"5"},g.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.node.Description}})))])})))}))))},t}(l.Component);t.a=D}}]);
//# sourceMappingURL=component---src-pages-features-js-f89e20cf185b18a6fdca.js.map