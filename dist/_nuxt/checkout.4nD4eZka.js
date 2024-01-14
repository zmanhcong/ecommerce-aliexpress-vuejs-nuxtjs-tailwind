import z from"./Icon.toWk4sdj.js";import{_ as F}from"./nuxt-link.q8lydtwj.js";import{o as n,c as _,a as e,s as I,n as M,v as N,r as x,x as j,q as y,f as q,y as D,h as O,z as b,w as g,A as o,b as f,d as w,t as c,B as U,F as L,C as V,D as R,E as K}from"./entry.EXSZ9ZkO.js";import{u as A,_ as W}from"./MainLayout.Z5SRclw9.js";import{_ as Z}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./index.hPcBRl07.js";const G={},H=e("h2",null,"CheckoutItem",-1),J=[H];function Q(E,a){return n(),_("div",null,J)}const X=Z(G,[["render",Q]]),Y={id:"CheckoutPage",class:"mt-4 max-w-[1200px] mx-auto px-2"},ee={class:"md:flex gap-4 justify-between mx-auto w-full"},te={class:"md:w-[65%]"},se={class:"bg-white rounded-lg p-4"},oe=e("div",{class:"text-xl font-semibold mb-2"},"Shipping Address",-1),ae={key:0},ne={class:"pt-2 border-t"},de=e("div",{class:"underline pb-1"},"Delivery Address",-1),ie={class:"text-xs"},le={class:"flex items-center gap-2"},re=e("div",null,"Contact name:",-1),ce={class:"font-bold"},ue={class:"flex items-center gap-2"},_e=e("div",null,"Address:",-1),me={class:"font-bold"},pe={class:"flex items-center gap-2"},he=e("div",null,"Zip Code:",-1),fe={class:"font-bold"},ve={class:"flex items-center gap-2"},xe=e("div",null,"City:",-1),ye={class:"font-bold"},be={class:"flex items-center gap-2"},ge=e("div",null,"Country:",-1),we={class:"font-bold"},ke={id:"Items",class:"bg-white rounded-lg p-4 mt-4"},Ce=e("div",{class:"md:hidden block my-4"},null,-1),Se={class:"md:w-[35%]"},Ae={id:"PlaceOrder",class:"bg-white rounded-lg p-4"},Ee=e("div",{class:"text-2xl font-extrabold mb-2"},"Summary",-1),Be=e("div",{class:"flex items-center justify-between my-4"},[e("div",{class:""},"Total Shipping"),e("div",{class:""},"Free")],-1),Pe=e("div",{class:"border-t"},null,-1),$e={class:"flex items-center justify-between my-4"},Te=e("div",{class:"font-semibold"},"Total",-1),ze={class:"text-2xl font-semibold"},Fe={class:"font-extrabold"},Ie=e("div",{class:"border border-gray-500 p-2 rounded-sm",id:"card-element"},null,-1),Me=e("p",{id:"card-error",role:"alert",class:"text-red-700 text-center font-semibold"},null,-1),Ne=["disabled"],je={key:1},qe=e("div",{class:"bg-white rounded-lg p-4 mt-4"},[e("div",{class:"text-lg font-semibold mb-2 mt-2"},"AliExpress"),e("p",{class:"my-2"}," AliExpress keeps your information and payment safe ")],-1),Ke={__name:"checkout",setup(E){const a=I(),m=M(),B=N();let p=null,k=null,h=null,i=x(0),C=null,t=x(null),d=x(!1);j(async()=>{if(a.checkout.length<1)return y("/shoppingcart");i.value=0,m.value&&(t.value=await A(`/api/prisma/get-address-by-user/${m.value.id}`,"$DrBjMi2MAK"),setTimeout(()=>a.isLoading=!1,200))}),q(()=>{if(B.fullPath=="/checkout"&&!m.value)return y("/auth")}),D(async()=>{d.value=!0,a.checkout.forEach(s=>{i.value+=s.price})}),O(()=>i.value,()=>{i.value>0&&P()});const P=async()=>{const s=K();p=Stripe(s.stripePk),console.log("🚀 log of stripe:",p),C=(await $fetch("/api/stripe/paymentintent",{method:"POST",body:{amount:i.value}})).client_secret,k=p.elements();var u={base:{fontSize:"18px"},invalid:{fontFamily:"Arial, sans-serif",color:"#EE4B2B",iconColor:"#EE4B2B"}};h=k.create("card",{hidePostalCode:!0,style:u}),h.mount("#card-element"),h.on("change",function(r){document.querySelector("button").disabled=r.empty,document.querySelector("#card-error").textContent=r.error?r.error.message:""}),d.value=!1},$=async()=>{if(t.value&&t.value.data==""){S("Please add shipping address");return}d.value=!0;let s=await p.confirmCardPayment(C,{payment_method:{card:h}});s.error?(S(s.error.message),d.value=!1):(await T(s.paymentIntent.id),a.cart=[],a.checkout=[],setTimeout(()=>y("/success"),500))},T=async s=>{await A("/api/prisma/create-order",{method:"POST",body:{userId:m.value.id,stripeId:s,name:t.value.data.name,address:t.value.data.address,zipcode:t.value.data.zipcode,city:t.value.data.city,country:t.value.data.country,products:a.checkout}},"$lfAUWrkpn7")},S=s=>{let l=document.querySelector("#card-error");l.textContent=s,setTimeout(()=>{l.textContent=""},4e3)};return(s,l)=>{const u=z,r=F;return n(),b(W,null,{default:g(()=>[e("div",Y,[e("div",ee,[e("div",te,[e("div",se,[oe,o(t)&&o(t).data?(n(),_("div",ae,[f(r,{to:"/address",class:"flex items-center pb-2 text-blue-500 hover:text-red-400"},{default:g(()=>[f(u,{name:"mdi:plus",size:"18",class:"mr-2"}),w(" Update Address ")]),_:1}),e("div",ne,[de,e("ul",ie,[e("li",le,[re,e("div",ce,c(o(t).data.name),1)]),e("li",ue,[_e,e("div",me,c(o(t).data.address),1)]),e("li",pe,[he,e("div",fe,c(o(t).data.zipcode),1)]),e("li",ve,[xe,e("div",ye,c(o(t).data.city),1)]),e("li",be,[ge,e("div",we,c(o(t).data.country),1)])])])])):(n(),b(r,{key:1,to:"/address",class:"flex items-center text-blue-500 hover:text-red-400"},{default:g(()=>[f(u,{name:"mdi:plus",size:"18",class:"mr-2"}),w(" Add New Address ")]),_:1}))]),e("div",ke,[(n(!0),_(L,null,U(o(a).checkout,v=>(n(),_("div",{key:v.id},[f(X,{product:v},null,8,["product"])]))),128))])]),Ce,e("div",Se,[e("div",Ae,[Ee,Be,Pe,e("div",$e,[Te,e("div",ze,[w(" $ "),e("span",Fe,c(o(i)/100),1)])]),e("form",{onSubmit:l[0]||(l[0]=V(v=>$(),["prevent"]))},[Ie,Me,e("button",{disabled:o(d),type:"submit",class:R(["mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full",o(d)?"opacity-70":"opacity-100"])},[o(d)?(n(),b(u,{key:0,name:"eos-icons:loading"})):(n(),_("div",je,"Place order"))],10,Ne)],32)]),qe])])])]),_:1})}}};export{Ke as default};
