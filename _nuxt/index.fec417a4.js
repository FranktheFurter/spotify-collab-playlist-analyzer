import{_ as v}from"./nuxt-link.b955fa37.js";import{f as g,r as m,g as k,h as w,c as p,a as e,i as S,v as I,b as h,w as _,j as f,F as C,k as F,l as y,o as r,m as B,t as b,p as E,e as M}from"./entry.fa07db68.js";import{_ as N}from"./_plugin-vue_export-helper.c27b6911.js";const T=()=>{const{token:t,getAccessToken:o}=g(),s=m([]),n=m(!1);return{searchResults:s,isLoading:n,searchPlaylists:async c=>{if(!c){s.value=[];return}n.value=!0;try{t.value===""&&await o();const l={method:"get",url:`https://api.spotify.com/v1/search?q=${encodeURIComponent(c)}&type=playlist&limit=50`,headers:{Authorization:`Bearer ${t.value}`}},i=await k(l);s.value=i.data.playlists.items}catch(l){console.error("Error searching playlists:",l),s.value=[]}finally{n.value=!1}}}},u=t=>(E("data-v-874ed5e4"),t=t(),M(),t),A={class:"flex flex-col items-center justify-center min-h-screen"},D={class:"flex w-fit mb-4"},L={class:"flex space-x-2"},P=u(()=>e("button",{class:"btn k-border p-2 bg-transparent text-white"}," Feldzug West ",-1)),R=u(()=>e("button",{class:"btn k-border p-2 bg-transparent text-white"}," Faro Jams ",-1)),V=u(()=>e("button",{class:"btn k-border p-2 bg-transparent text-white"}," Frankreich 3 ",-1)),z={key:0,class:"scroll-container mb-4"},K={class:"btn k-border p-2 bg-transparent text-white w-full text-left"},U={class:"flex flex-col"},$={class:"font-medium"},j={class:"text-sm opacity-75"},J={key:1,class:"text-white opacity-75"},O=u(()=>e("div",{class:"flex space-x-2"},null,-1)),W=w({__name:"index",setup(t){const o=m(""),{searchResults:s,isLoading:n,searchPlaylists:x}=T(),c=()=>{x(o.value)};return(l,i)=>{const d=v;return r(),p("div",A,[e("div",D,[S(e("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>o.value=a),type:"text",placeholder:"Search playlists...",class:"w-full border-none bg-transparent text-lg text-white focus:outline-none rounded-md bg-gray-50/10 p-2 k-border",onInput:c},null,544),[[I,o.value]]),e("div",L,[h(d,{to:"/playlist/0zsrKYsMTsy2Iktc6epKOc"},{default:_(()=>[P]),_:1}),h(d,{to:"/playlist/2xAEbfU2EyNetdtDcdx5Cr"},{default:_(()=>[R]),_:1}),h(d,{to:"/playlist/2tF88JEs5MC68rK2DRMMus"},{default:_(()=>[V]),_:1})])]),f(s).length>0?(r(),p("div",z,[(r(!0),p(C,null,F(f(s),a=>(r(),B(d,{key:a.id,to:`/playlist/${a.id}`},{default:_(()=>[e("button",K,[e("div",U,[e("span",$,b(a.name),1),e("span",j,"by "+b(a.owner.display_name),1)])])]),_:2},1032,["to"]))),128))])):y("",!0),f(n)?(r(),p("div",J,"Searching...")):y("",!0),O])}}});const H=N(W,[["__scopeId","data-v-874ed5e4"]]);export{H as default};
