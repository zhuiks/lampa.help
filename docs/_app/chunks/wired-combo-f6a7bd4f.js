import{h as m,r as v,i as w,T as y,a as u,p as S,f as x,e as g,o as b,n as I}from"./wired-base-02cb0b5c.js";import"./wired-card-8905fc29.js";import"./wired-item-6a5aa092.js";var r=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(o=(s<3?l(o):s>3?l(e,t,o):l(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},h=globalThis&&globalThis.__metadata||function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let a=class extends m{constructor(){super(...arguments);this.disabled=!1,this.seed=v(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return w`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return y`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const i=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${i.width}`),t.setAttribute("height",`${i.height}`);const s=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=s.height+"px",u(t,0,0,s.width,s.height,this.seed);const o=s.width-4;u(t,o,0,34,s.height,this.seed);const l=Math.max(0,Math.abs((s.height-24)/2)),d=S(t,[[o+8,5+l],[o+26,5+l],[o+17,l+Math.min(s.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const c=this.shadowRoot.getElementById("slot").assignedNodes();if(c&&c.length)for(let p=0;p<c.length;p++){const f=c[p];f.tagName==="WIRED-ITEM"&&(f.setAttribute("role","option"),this.itemNodes.push(f))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){const o=t[s];if(o.tagName==="WIRED-ITEM"){const l=o.value||o.getAttribute("value")||"";if(this.selected&&l===this.selected){i=o;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(i=>i.nodeType===Node.ELEMENT_NODE).forEach(i=>{const s=i;s.requestUpdate&&s.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){x(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};r([g({type:Object}),h("design:type",Object)],a.prototype,"value",void 0);r([g({type:String,reflect:!0}),h("design:type",String)],a.prototype,"selected",void 0);r([g({type:Boolean,reflect:!0}),h("design:type",Object)],a.prototype,"disabled",void 0);r([b("svg"),h("design:type",SVGSVGElement)],a.prototype,"svg",void 0);r([b("#card"),h("design:type",HTMLDivElement)],a.prototype,"card",void 0);a=r([I("wired-combo")],a);export{a as WiredCombo};
