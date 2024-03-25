import{n as B,q as st,s as W,t as P,x as F,y as mt,z as ft,A as bt,_ as gt,g as vt,h as $,B as Et,c as w,a as t,C as I,l as M,F as Y,D as J,e as X,i as T,v as N,E as At,d as yt,o as C,G as V,p as xt,f as kt}from"./index-0baRJdtR.js";import{a as L}from"./axios-G2rPRu76.js";var it={exports:{}},K={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function wt(){return Z||(Z=1,function(v,A){(function(d,a){v.exports=a(B(),st(),W())})(P,function(d,a,h){const n="backdrop",f="fade",_="show",p=`mousedown.bs.${n}`,E={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},g={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class c extends a{constructor(o){super(),this._config=this._getConfig(o),this._isAppended=!1,this._element=null}static get Default(){return E}static get DefaultType(){return g}static get NAME(){return n}show(o){if(!this._config.isVisible){h.execute(o);return}this._append();const u=this._getElement();this._config.isAnimated&&h.reflow(u),u.classList.add(_),this._emulateAnimation(()=>{h.execute(o)})}hide(o){if(!this._config.isVisible){h.execute(o);return}this._getElement().classList.remove(_),this._emulateAnimation(()=>{this.dispose(),h.execute(o)})}dispose(){this._isAppended&&(d.off(this._element,p),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const o=document.createElement("div");o.className=this._config.className,this._config.isAnimated&&o.classList.add(f),this._element=o}return this._element}_configAfterMerge(o){return o.rootElement=h.getElement(o.rootElement),o}_append(){if(this._isAppended)return;const o=this._getElement();this._config.rootElement.append(o),d.on(o,p,()=>{h.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(o){h.executeAfterTransition(o,this._getElement(),this._config.isAnimated)}}return c})}(K)),K.exports}var R={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var H;function Tt(){return H||(H=1,function(v,A){(function(d,a){a(A,B(),F(),W())})(P,function(d,a,h,n){const f=(_,p="hide")=>{const E=`click.dismiss${_.EVENT_KEY}`,g=_.NAME;a.on(document,E,`[data-bs-dismiss="${g}"]`,function(c){if(["A","AREA"].includes(this.tagName)&&c.preventDefault(),n.isDisabled(this))return;const i=h.getElementFromSelector(this)||this.closest(`.${g}`);_.getOrCreateInstance(i)[p]()})};d.enableDismissTrigger=f,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})})}(R,R.exports)),R.exports}var z={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var tt;function Ct(){return tt||(tt=1,function(v,A){(function(d,a){v.exports=a(B(),F(),st())})(P,function(d,a,h){const n="focustrap",_=".bs.focustrap",p=`focusin${_}`,E=`keydown.tab${_}`,g="Tab",c="forward",i="backward",o={autofocus:!0,trapElement:null},u={autofocus:"boolean",trapElement:"element"};class y extends h{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return o}static get DefaultType(){return u}static get NAME(){return n}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),d.off(document,_),d.on(document,p,l=>this._handleFocusin(l)),d.on(document,E,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,d.off(document,_))}_handleFocusin(l){const{trapElement:e}=this._config;if(l.target===document||l.target===e||e.contains(l.target))return;const s=a.focusableChildren(e);s.length===0?e.focus():this._lastTabNavDirection===i?s[s.length-1].focus():s[0].focus()}_handleKeydown(l){l.key===g&&(this._lastTabNavDirection=l.shiftKey?i:c)}}return y})}(z)),z.exports}var G={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var et;function Dt(){return et||(et=1,function(v,A){(function(d,a){v.exports=a(mt(),F(),W())})(P,function(d,a,h){const n=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",f=".sticky-top",_="padding-right",p="margin-right";class E{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,_,i=>i+c),this._setElementAttributes(n,_,i=>i+c),this._setElementAttributes(f,p,i=>i-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,_),this._resetElementAttributes(n,_),this._resetElementAttributes(f,p)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,i,o){const u=this.getWidth(),y=x=>{if(x!==this._element&&window.innerWidth>x.clientWidth+u)return;this._saveInitialAttribute(x,i);const l=window.getComputedStyle(x).getPropertyValue(i);x.style.setProperty(i,`${o(Number.parseFloat(l))}px`)};this._applyManipulationCallback(c,y)}_saveInitialAttribute(c,i){const o=c.style.getPropertyValue(i);o&&d.setDataAttribute(c,i,o)}_resetElementAttributes(c,i){const o=u=>{const y=d.getDataAttribute(u,i);if(y===null){u.style.removeProperty(i);return}d.removeDataAttribute(u,i),u.style.setProperty(i,y)};this._applyManipulationCallback(c,o)}_applyManipulationCallback(c,i){if(h.isElement(c)){i(c);return}for(const o of a.find(c,this._element))i(o)}}return E})}(G)),G.exports}/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(v,A){(function(d,a){v.exports=a(ft(),B(),F(),wt(),Tt(),Ct(),W(),Dt())})(P,function(d,a,h,n,f,_,p,E){const g="modal",i=".bs.modal",o=".data-api",u="Escape",y=`hide${i}`,x=`hidePrevented${i}`,l=`hidden${i}`,e=`show${i}`,s=`shown${i}`,D=`resize${i}`,q=`click.dismiss${i}`,ot=`mousedown.dismiss${i}`,nt=`keydown.dismiss${i}`,at=`click${i}${o}`,Q="modal-open",lt="fade",j="show",U="modal-static",rt=".modal.show",dt=".modal-dialog",ct=".modal-body",ut='[data-bs-toggle="modal"]',ht={backdrop:!0,focus:!0,keyboard:!0},_t={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class S extends d{constructor(r,b){super(r,b),this._dialog=h.findOne(dt,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new E,this._addEventListeners()}static get Default(){return ht}static get DefaultType(){return _t}static get NAME(){return g}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||this._isTransitioning||a.trigger(this._element,e,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Q),this._adjustDialog(),this._backdrop.show(()=>this._showElement(r)))}hide(){!this._isShown||this._isTransitioning||a.trigger(this._element,y).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(j),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){a.off(window,i),a.off(this._dialog,i),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new n({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new _({trapElement:this._element})}_showElement(r){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const b=h.findOne(ct,this._dialog);b&&(b.scrollTop=0),p.reflow(this._element),this._element.classList.add(j);const k=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,a.trigger(this._element,s,{relatedTarget:r})};this._queueCallback(k,this._dialog,this._isAnimated())}_addEventListeners(){a.on(this._element,nt,r=>{if(r.key===u){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),a.on(window,D,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),a.on(this._element,ot,r=>{a.one(this._element,q,b=>{if(!(this._element!==r.target||this._element!==b.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Q),this._resetAdjustments(),this._scrollBar.reset(),a.trigger(this._element,l)})}_isAnimated(){return this._element.classList.contains(lt)}_triggerBackdropTransition(){if(a.trigger(this._element,x).defaultPrevented)return;const b=this._element.scrollHeight>document.documentElement.clientHeight,k=this._element.style.overflowY;k==="hidden"||this._element.classList.contains(U)||(b||(this._element.style.overflowY="hidden"),this._element.classList.add(U),this._queueCallback(()=>{this._element.classList.remove(U),this._queueCallback(()=>{this._element.style.overflowY=k},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const r=this._element.scrollHeight>document.documentElement.clientHeight,b=this._scrollBar.getWidth(),k=b>0;if(k&&!r){const O=p.isRTL()?"paddingLeft":"paddingRight";this._element.style[O]=`${b}px`}if(!k&&r){const O=p.isRTL()?"paddingRight":"paddingLeft";this._element.style[O]=`${b}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(r,b){return this.each(function(){const k=S.getOrCreateInstance(this,r);if(typeof r=="string"){if(typeof k[r]>"u")throw new TypeError(`No method named "${r}"`);k[r](b)}})}}return a.on(document,at,ut,function(pt){const r=h.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&pt.preventDefault(),a.one(r,e,O=>{O.defaultPrevented||a.one(r,l,()=>{p.isVisible(this)&&this.focus()})});const b=h.findOne(rt);b&&S.getInstance(b).hide(),S.getOrCreateInstance(r).toggle(this)}),f.enableDismissTrigger(S),p.defineJQueryPlugin(S),S})})(it);var Nt=it.exports;const St=bt(Nt);var $t={VITE_APP_API_URL:"https://ec-course-api.hexschool.io",VITE_APP_API_PATH:"vue3-api-use",BASE_URL:"/Cafe-Website/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const m=v=>(xt("data-v-a16f590d"),v=v(),kt(),v),Vt={class:"d-flex justify-content-between align-items-center mb-3"},Ot={"aria-label":"Page navigation example"},It={class:"pagination"},Mt=["onClick"],Lt=m(()=>t("i",{class:"bi bi-cart-plus me-2"},null,-1)),Pt=m(()=>t("span",null,"新增產品",-1)),Rt=[Lt,Pt],Bt={class:"bg-db-dark rounded-4 px-5 py-4"},Wt={class:"table table-db-dark table-hover align-middle"},Ft=m(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"項次"),t("th",{scope:"col"},"名稱"),t("th",{scope:"col"},"類別"),t("th",{scope:"col"},"原價"),t("th",{scope:"col"},"售價"),t("th",{scope:"col"},"是否啟用"),t("th",{scope:"col",class:"text-center"},"操作")])],-1)),qt={scope:"row",class:"ps-3"},Ut={key:0,class:"text-success fw-bold"},Yt={key:1,class:"text-danger fw-bold"},Kt={class:"text-center"},zt=["onClick"],Gt=["onClick"],Qt={class:"modal-dialog modal-lg"},jt={class:"modal-content"},Jt=m(()=>t("div",{class:"modal-header bg-db-dark text-db-secondary"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"新增產品"),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Xt={class:"modal-body py-4"},Zt={class:"list-group flex-row border-bottom",id:"list-tab",role:"tablist"},Ht=m(()=>t("i",{class:"bi bi-pencil-square me-1"},null,-1)),te=m(()=>t("i",{class:"bi bi-image me-1"},null,-1)),ee={class:"tab-content py-4",id:"nav-tabContent"},se={class:"tab-pane fade show active",id:"list-content",role:"tabpanel","aria-labelledby":"list-content-list"},ie={class:"input-group mb-3"},oe=m(()=>t("span",{class:"input-group-text",id:"basic-addon2",style:{width:"90px"}},[t("p",{class:"mx-auto"},"標題")],-1)),ne={class:"row"},ae={class:"col"},le={class:"input-group mb-3"},re=m(()=>t("span",{class:"input-group-text",id:"basic-addon2",style:{width:"90px"}},[t("p",{class:"mx-auto"},"類別")],-1)),de={class:"col"},ce={class:"input-group mb-3"},ue=m(()=>t("span",{class:"input-group-text",id:"basic-addon2",style:{width:"90px"}},[t("p",{class:"mx-auto"},"單位")],-1)),he={class:"row"},_e={class:"col"},pe={class:"input-group mb-3"},me=m(()=>t("span",{class:"input-group-text",id:"basic-addon2",style:{width:"90px"}},[t("p",{class:"mx-auto"},"原價")],-1)),fe={class:"col"},be={class:"input-group mb-3"},ge=m(()=>t("span",{class:"input-group-text",id:"basic-addon2",style:{width:"90px"}},[t("p",{class:"mx-auto"},"售價")],-1)),ve={class:"input-group mb-3"},Ee=m(()=>t("span",{class:"input-group-text",id:"basic-addon2",style:{width:"90px"}},[t("p",{class:"mx-auto"},"產品描述")],-1)),Ae={class:"input-group mb-3"},ye=m(()=>t("span",{class:"input-group-text",id:"basic-addon2",style:{width:"90px"}},[t("p",{class:"mx-auto"},"產品內容")],-1)),xe={class:"form-check form-switch"},ke=m(()=>t("label",{class:"form-check-label",for:"flexSwitchCheckDefault"}," 是否啟用",-1)),we={class:"tab-pane fade",id:"list-image",role:"tabpanel","aria-labelledby":"list-image-list"},Te={class:"row"},Ce={class:"col-6"},De=m(()=>t("h4",{class:"mb-3"},"主圖設置🔗",-1)),Ne={class:"input-group mb-3"},Se=m(()=>t("span",{class:"input-group-text",id:"basic-addon2"},"網址",-1)),$e=["disabled"],Ve=m(()=>t("i",{class:"bi bi-pen fs-5"},null,-1)),Oe=[Ve],Ie=m(()=>t("i",{class:"bi bi-floppy fs-5"},null,-1)),Me=[Ie],Le=["src"],Pe=yt('<div class="col-6" data-v-a16f590d><h4 class="mb-3" data-v-a16f590d>多圖設置🔗</h4><div class="d-flex flex-column justify-content-center align-items-center h-100" data-v-a16f590d><h2 class="mb-3" data-v-a16f590d>(っ °Д °;)っ</h2><p class="h2" data-v-a16f590d>內容建構中...</p></div></div>',1),Re={class:"modal-footer"},Be=m(()=>t("button",{type:"button",class:"btn btn-outline-db-dark","data-bs-dismiss":"modal"},"取消",-1)),We={__name:"AdminProducts",setup(v){const{VITE_APP_API_URL:A,VITE_APP_API_PATH:d}=$t,a=vt(),h=$([]),n=$({}),f=$({current_page:null,has_next:null,has_pre:null,total_page:null}),_=$(null),p=$(null),E=$(!0);function g(l=1){L.get(`${A}/v2/api/${d}/admin/products/?page=${l}`).then(e=>{h.value=e.data.products,f.value=e.data.pagination}).catch(e=>alert(e.response.data.message))}function c(){L.post(`${A}/v2/api/user/check`).then(()=>g()).catch(l=>{alert(l.response.data.message),a.push("/login")})}function i(l){let e="post",s=`${A}/v2/api/${d}/admin/product`;E.value===!1&&(e="put",s=`${A}/v2/api/${d}/admin/product/${l}`),L[e](s,{data:n.value}).then(D=>{alert(D.data.message),g(),p.value.hide()}).catch(D=>alert(D.data.message))}function o(l){L.delete(`${A}/api/${d}/admin/product/${l}`).then(e=>{alert(e.data.message),g()}).catch(e=>alert(e.data.message))}Et(()=>{const l=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");L.defaults.headers.common.Authorization=l,c(),p.value=new St(_.value)});const u=$([{id:"modContent",status:!0},{id:"modImgae",status:!1,edit:!1,loading:!1}]);function y(l,e){l==="create"?(E.value=!0,n.value={},p.value.show()):l==="edit"&&(E.value=!1,n.value={...e},p.value.show())}function x(l){l==="modContent"?(u.value[0].status=!0,u.value[1].status=!1):(u.value[1].status=!0,u.value[0].status=!1)}return(l,e)=>(C(),w(Y,null,[t("div",Vt,[t("nav",Ot,[t("ul",It,[t("li",{class:I(["page-item",{disabled:f.value.current_page===1}])},[t("a",{class:"page-link text-bg-db-dark",href:"#",onClick:e[0]||(e[0]=M(s=>g(1),["prevent"]))},"首頁")],2),(C(!0),w(Y,null,J(f.value.total_pages,s=>(C(),w("li",{class:"page-item",key:s+123},[t("a",{class:I(["page-link text-bg-db-dark",[{active:f.value.current_page===s},{"bs-pointer-none":f.value.current_page===s}]]),href:"#",onClick:M(D=>g(s),["prevent"])},V(s),11,Mt)]))),128)),t("li",{class:I(["page-item",{disabled:f.value.current_page===f.value.total_pages}])},[t("a",{class:"page-link text-bg-db-dark",href:"#",onClick:e[1]||(e[1]=M(s=>g(f.value.total_pages),["prevent"]))},"尾頁")],2)])]),t("button",{type:"button",class:"btn btn-db-primary px-4 d-flex align-items-center",onClick:e[2]||(e[2]=s=>y("create"))},Rt)]),t("div",Bt,[t("table",Wt,[Ft,t("tbody",null,[(C(!0),w(Y,null,J(h.value,(s,D)=>(C(),w("tr",{key:s.id},[t("th",qt,V(++D),1),t("td",null,V(s.title),1),t("td",null,V(s.category),1),t("td",null,"$ "+V(s.origin_price),1),t("td",null,"$ "+V(s.price),1),t("td",null,[s.is_enabled?(C(),w("span",Ut,"已啟用")):(C(),w("span",Yt,"未啟用"))]),t("td",Kt,[t("button",{type:"button",class:"btn btn-outline-db-primary py-1 fw-bold me-2 my-1",onClick:q=>y("edit",s)},"編輯",8,zt),t("button",{type:"button",class:"btn btn-outline-danger py-1 fw-bold",onClick:q=>o(s.id)},"刪除",8,Gt)])]))),128))])])]),t("div",{class:"modal fade",id:"productModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"refProductModal",ref:_},[t("div",Qt,[t("div",jt,[Jt,t("div",Xt,[t("div",null,[t("div",Zt,[t("a",{class:"list-group-item border rounded-1 active",id:"list-content-list","data-bs-toggle":"list",href:"#list-content",role:"tab","aria-controls":"list-content",onClick:e[3]||(e[3]=M(s=>x("modContent"),["prevent"]))},[t("div",{class:I(["d-flex align-items-center",{"text-black-50":u.value[0].status===!1}])},[Ht,X("內容 ")],2)]),t("a",{class:"list-group-item border rounded-1",id:"list-image-list","data-bs-toggle":"list",href:"#list-image",role:"tab","aria-controls":"list-image",onClick:e[4]||(e[4]=M(s=>x("modImage"),["prevent"]))},[t("div",{class:I(["d-flex align-items-center",{"text-black-50":u.value[1].status===!1}])},[te,X("圖片 ")],2)])]),t("div",ee,[t("div",se,[t("form",null,[t("div",ie,[oe,T(t("input",{type:"text",class:"form-control",placeholder:"請輸入產品標題","aria-label":"Recipient's username","aria-describedby":"basic-addon2","onUpdate:modelValue":e[5]||(e[5]=s=>n.value.title=s)},null,512),[[N,n.value.title]])]),t("div",ne,[t("div",ae,[t("div",le,[re,T(t("input",{type:"text",class:"form-control",placeholder:"請輸入產品類別","aria-label":"Recipient's username","aria-describedby":"basic-addon2","onUpdate:modelValue":e[6]||(e[6]=s=>n.value.category=s)},null,512),[[N,n.value.category]])])]),t("div",de,[t("div",ce,[ue,T(t("input",{type:"text",class:"form-control",placeholder:"請輸入單位","aria-label":"Recipient's username","aria-describedby":"basic-addon2","onUpdate:modelValue":e[7]||(e[7]=s=>n.value.unit=s)},null,512),[[N,n.value.unit]])])])]),t("div",he,[t("div",_e,[t("div",pe,[me,T(t("input",{type:"number",class:"form-control",placeholder:"請輸入原價","aria-label":"Recipient's username","aria-describedby":"basic-addon2","onUpdate:modelValue":e[8]||(e[8]=s=>n.value.origin_price=s)},null,512),[[N,n.value.origin_price,void 0,{number:!0}]])])]),t("div",fe,[t("div",be,[ge,T(t("input",{type:"number",class:"form-control",placeholder:"請輸入售價","aria-label":"Recipient's username","aria-describedby":"basic-addon2","onUpdate:modelValue":e[9]||(e[9]=s=>n.value.price=s)},null,512),[[N,n.value.price,void 0,{number:!0}]])])])]),t("div",ve,[Ee,T(t("textarea",{class:"form-control","aria-label":"With textarea",rows:"3",placeholder:"產品相關描述","onUpdate:modelValue":e[10]||(e[10]=s=>n.value.description=s)},null,512),[[N,n.value.description]])]),t("div",Ae,[ye,T(t("textarea",{class:"form-control","aria-label":"With textarea",rows:"3","onUpdate:modelValue":e[11]||(e[11]=s=>n.value.content=s)},null,512),[[N,n.value.content]])]),t("div",xe,[T(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=s=>n.value.is_enabled=s)},null,512),[[At,n.value.is_enabled]]),ke])])]),t("div",we,[t("div",Te,[t("div",Ce,[De,t("div",Ne,[Se,T(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片網址","aria-label":"Recipient's username","aria-describedby":"basic-addon2","onUpdate:modelValue":e[13]||(e[13]=s=>n.value.imageUrl=s),disabled:u.value[1].edit===!1},null,8,$e),[[N,n.value.imageUrl]]),u.value[1].edit===!1?(C(),w("button",{key:0,type:"button",class:"input-group-text d-flex btn btn-sm btn-outline-success rounded-end",onClick:e[14]||(e[14]=s=>u.value[1].edit=!0)},Oe)):(C(),w("button",{key:1,type:"button",class:"input-group-text d-flex btn btn-sm btn-outline-success rounded-end",onClick:e[15]||(e[15]=s=>u.value[1].edit=!1)},Me)),t("img",{src:n.value.imageUrl,class:"mt-3 img-fluid",alt:""},null,8,Le)])]),Pe])])])])]),t("div",Re,[Be,t("button",{type:"button",class:"btn btn-db-primary text-db-dark",onClick:e[16]||(e[16]=s=>i(n.value.id))},"儲存")])])])],512)],64))}},Ue=gt(We,[["__scopeId","data-v-a16f590d"]]);export{Ue as default};
