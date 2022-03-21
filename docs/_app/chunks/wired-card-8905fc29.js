import{W as f,B as p,i as v,T as b,b as g,a as u,l as a,e as w,n as y}from"./wired-base-02cb0b5c.js";var o=globalThis&&globalThis.__decorate||function(d,i,s,r){var t=arguments.length,e=t<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,s):r,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(d,i,s,r);else for(var l=d.length-1;l>=0;l--)(h=d[l])&&(e=(t<3?h(e):t>3?h(i,s,e):h(i,s))||e);return t>3&&e&&Object.defineProperty(i,s,e),e},c=globalThis&&globalThis.__metadata||function(d,i){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(d,i)};let n=class extends f{constructor(){super();this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[p,v`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return b`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(i){const s=i.has("fill");this.wiredRender(s),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const i=this.getBoundingClientRect(),s=Math.min(Math.max(1,this.elevation),5),r=i.width+(s-1)*2,t=i.height+(s-1)*2;return[r,t]}draw(i,s){const r=Math.min(Math.max(1,this.elevation),5),t={width:s[0]-(r-1)*2,height:s[1]-(r-1)*2};if(this.fill&&this.fill.trim()){const e=g([[2,2],[t.width-4,2],[t.width-2,t.height-4],[2,t.height-4]],this.seed);e.classList.add("cardFill"),i.style.setProperty("--wired-card-background-fill",this.fill.trim()),i.appendChild(e)}u(i,2,2,t.width-4,t.height-4,this.seed);for(let e=1;e<r;e++)a(i,e*2,t.height-4+e*2,t.width-4+e*2,t.height-4+e*2,this.seed).style.opacity=`${(85-e*10)/100}`,a(i,t.width-4+e*2,t.height-4+e*2,t.width-4+e*2,e*2,this.seed).style.opacity=`${(85-e*10)/100}`,a(i,e*2,t.height-4+e*2,t.width-4+e*2,t.height-4+e*2,this.seed).style.opacity=`${(85-e*10)/100}`,a(i,t.width-4+e*2,t.height-4+e*2,t.width-4+e*2,e*2,this.seed).style.opacity=`${(85-e*10)/100}`}};o([w({type:Number}),c("design:type",Object)],n.prototype,"elevation",void 0);o([w({type:String}),c("design:type",String)],n.prototype,"fill",void 0);n=o([y("wired-card"),c("design:paramtypes",[])],n);export{n as WiredCard};
