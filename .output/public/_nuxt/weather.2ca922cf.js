import{a as u,E as h,b as f,aa as p,t as l,u as a,e as t,a8 as w,ai as m,aj as v,a4 as x,o as y,a6 as g,a7 as S}from"./entry.f00c1bb3.js";import{u as b}from"./asyncData.4361819b.js";/* empty css                   */const i=s=>(g("data-v-ac24f3a4"),s=s(),S(),s),k={class:"h-screen relative overflow-hidden"},I=i(()=>t("img",null,null,-1)),j=i(()=>t("div",{class:"absolute w-full h-full top-0 overlay"},null,-1)),B={class:"absolute w-full h-full top-0 p-48"},D={class:"flex justify-between"},V={class:"text-7xl text-white"},$=i(()=>t("p",{class:"font-extralight text-2xl mt-2 text-white"},"Sunday",-1)),C=["src"],E={class:"text-9xl text-white font-extralight"},N={class:"mt-20"},T={__name:"weather",setup(s){const o=h("toronto"),e=h(""),{data:c}=b("city",async()=>await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${o.value}&units=metric&appid=4c18f36d4332129c1554f3328b881e0a`),{watch:[o]}),d=()=>{const n=e.value.trim().split(" ").join("+");o.value=n,e.value=""};return(n,r)=>(y(),f(x,null,[p(l(a(e))+" ",1),t("div",k,[I,p(" "+l(a(o))+" ",1),j,t("div",B,[t("div",D,[t("div",null,[t("h1",V,l(a(c).name),1),$,t("img",{src:`https://openweathermap.org/img/wn/${a(c).weather[0].icon}@4x.png`,class:"w-56 icon"},null,8,C)]),t("div",null,[t("p",E,l(a(c).main.temp)+"°",1)])]),t("div",N,[w(t("input",{"onUpdate:modelValue":r[0]||(r[0]=_=>v(e)?e.value=_:null),type:"text",class:"w-1/2 h-10",placeholder:"Search weather for a city"},null,512),[[m,a(e)]]),t("button",{class:"bg-sky-400 w-20 text-white h-10",onClick:d},"Search")])])])],64))}},M=u(T,[["__scopeId","data-v-ac24f3a4"]]);export{M as default};
