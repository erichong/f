(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{221:function(e,t,a){"use strict";a(244)("fixed",function(e){return function(){return e(this,"tt","","")}})},228:function(e,t,a){"use strict";a(21),a(20),a(9),a(47),a(93),a(221);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(10)),s=r(a(62)),d=r(a(132)),o=r(a(88)),l=r(a(0)),c=r(a(3)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function S(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function O(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+l+s+d+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(I,(0,o.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},I=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!h&&b&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,j=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:z?1:0,transition:R?"opacity "+b+"ms":"none"},d),T="boolean"==typeof m?"lightgray":m,k={transitionDelay:b+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&k,d,f),C={title:t,alt:this.state.isVisible?"":a,style:P,className:g};if(p){var x=p,G=x[0];return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),T&&l.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&k)}),G.base64&&l.default.createElement(N,{src:G.base64,spreadProps:C,imageVariants:x,generateSources:E}),G.tracedSVG&&l.default.createElement(N,{src:G.tracedSVG,spreadProps:C,imageVariants:x,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,y(x),l.default.createElement(I,{alt:a,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:w},G,{imageVariants:x}))}}))}if(h){var W=h,q=W[0],M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},T&&l.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:T,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},R&&k)}),q.base64&&l.default.createElement(N,{src:q.base64,spreadProps:C,imageVariants:W,generateSources:E}),q.tracedSVG&&l.default.createElement(N,{src:q.tracedSVG,spreadProps:C,imageVariants:W,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,y(W),l.default.createElement(I,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:W}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:R,sizes:V,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=z;t.default=T},717:function(e,t,a){"use strict";var r=a(88),i=a.n(r),n=a(211),s=a.n(n),d=(a(3),a(0)),o=a.n(d),l=a(264),c=a(420),u=a(421),f=a(210);function g(e){var t=e.children,a=e.className,r=e.clearing,n=e.content,d=e.fitted,p=e.hidden,h=e.horizontal,m=e.inverted,b=e.section,v=e.vertical,y=s()("ui",Object(l.a)(r,"clearing"),Object(l.a)(d,"fitted"),Object(l.a)(p,"hidden"),Object(l.a)(h,"horizontal"),Object(l.a)(m,"inverted"),Object(l.a)(b,"section"),Object(l.a)(v,"vertical"),"divider",a),S=Object(c.a)(g,e),O=Object(u.a)(g,e);return o.a.createElement(O,i()({},S,{className:y}),f.a.isNil(t)?n:t)}g.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],g.propTypes={},t.a=g},768:function(e,t,a){"use strict";a(280);var r=a(88),i=a.n(r),n=(a(250),a(211)),s=a.n(n),d=(a(3),a(0)),o=a.n(d),l=a(264),c=a(420),u=a(421),f=a(210),g=a(401),p=a(767),h=a(440);function m(e){var t=e.children,a=e.className,r=e.content,n=s()("sub header",a),d=Object(c.a)(m,e),l=Object(u.a)(m,e);return o.a.createElement(l,i()({},d,{className:n}),f.a.isNil(t)?r:t)}m.handledProps=["as","children","className","content"],m.propTypes={},m.create=Object(h.f)(m,function(e){return{content:e}});var b=m;function v(e){var t=e.children,a=e.className,r=e.content,n=s()("content",a),d=Object(c.a)(v,e),l=Object(u.a)(v,e);return o.a.createElement(l,i()({},d,{className:n}),f.a.isNil(t)?r:t)}v.handledProps=["as","children","className","content"],v.propTypes={};var y=v;function S(e){var t=e.attached,a=e.block,r=e.children,n=e.className,d=e.color,h=e.content,m=e.disabled,v=e.dividing,O=e.floated,E=e.icon,w=e.image,j=e.inverted,L=e.size,N=e.sub,I=e.subheader,z=e.textAlign,R=s()("ui",d,L,Object(l.a)(a,"block"),Object(l.a)(m,"disabled"),Object(l.a)(v,"dividing"),Object(l.d)(O,"floated"),Object(l.a)(!0===E,"icon"),Object(l.a)(!0===w,"image"),Object(l.a)(j,"inverted"),Object(l.a)(N,"sub"),Object(l.b)(t,"attached"),Object(l.c)(z),"header",n),V=Object(c.a)(S,e),T=Object(u.a)(S,e);if(!f.a.isNil(r))return o.a.createElement(T,i()({},V,{className:R}),r);var k=g.a.create(E,{autoGenerateKey:!1}),P=p.a.create(w,{autoGenerateKey:!1}),C=b.create(I,{autoGenerateKey:!1});return k||P?o.a.createElement(T,i()({},V,{className:R}),k||P,(h||C)&&o.a.createElement(y,null,h,C)):o.a.createElement(T,i()({},V,{className:R}),h,C)}S.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],S.propTypes={},S.Content=y,S.Subheader=b;t.a=S}}]);
//# sourceMappingURL=29-ccd971fc52f920d5687d.js.map