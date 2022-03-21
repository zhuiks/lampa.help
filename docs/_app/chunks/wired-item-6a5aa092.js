import{W as f,B as h,i as b,T as u,b as v,e as d,n as g}from"./wired-base-02cb0b5c.js";var l=globalThis&&globalThis.__decorate||function(n,e,t,i){var a=arguments.length,o=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(o=(a<3?s(o):a>3?s(e,t,o):s(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o},p=globalThis&&globalThis.__metadata||function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let r=class extends f{constructor(){super(...arguments);this.value="",this.name="",this.selected=!1}static get styles(){return[h,b`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return u`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const i=v([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(i)}};l([d(),p("design:type",Object)],r.prototype,"value",void 0);l([d(),p("design:type",Object)],r.prototype,"name",void 0);l([d({type:Boolean}),p("design:type",Object)],r.prototype,"selected",void 0);r=l([g("wired-item")],r);export{r as WiredItem};
