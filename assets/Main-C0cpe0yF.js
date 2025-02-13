import{o as i,c as N,w as x,a as f,t as d,r as T,_ as b,b as B,d as Q,e as L,f as r,g as e,h as u,i as H,j as F,k as A,F as h,l as v,n as M,u as I,m as W,p as q,q as z,s as E,v as O}from"./index-DlyE9aej.js";const V="/assets/delaware-logo-CuKqSlgQ.png",y={__name:"buttons",props:{label:String,href:String,onClick:Function,download:String,class:String},emits:["click"],setup(p,{emit:m}){const a=p,s=m,n=()=>{a.onClick&&a.onClick(),s("click")};return(o,l)=>(i(),N(T(p.href?"a":"button"),{href:p.href,download:p.download,onClick:n,class:"text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-1.5 bg-gray-900 text-yellow-400 font-mono font-bold rounded-sm border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition duration-300 shadow-[4px_4px_0_theme(colors.yellow.400)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"},{default:x(()=>[f(d(p.label),1)]),_:1},8,["href","download"]))}},R={id:"home",class:"h-screen relative overflow-hidden flex items-center justify-center"},j={class:"relative z-10 text-center px-4"},D={class:"text-title font-display font-bold text-white mb-4"},G={key:0,class:"dynamic-typing block whitespace-nowrap overflow-hidden border-r-4 border-primary-200 pr-2"},Z={key:1,class:"dynamic-typing inline-flex items-center"},J={class:"logo-container ml-2"},X=["src"],U={__name:"LandingPage",setup(p){const m=()=>{F.push("/#contact")},a=[{type:"text",value:"N'hésite pas à me contacter !"},{type:"text",value:"Bienvenue sur mon site !"},{type:"text",value:"Je m'appelle Cyril"},{type:"text",value:"Je suis développeur en alternance"},{type:"text-image",textBefore:"Chez",image:V}],s=B(a[0]);let n=0,o;const l=()=>{if(n=(n+1)%a.length,s.value={type:"text",value:""},a[n].type==="text"){let t=0;const c=()=>{t<a[n].value.length?(s.value.value+=a[n].value[t],t++,setTimeout(c,100)):setTimeout(()=>{l()},2e3)};c()}else s.value=a[n],setTimeout(()=>{l()},2e3)};return Q(()=>{l();const t=document.getElementById("hero-bg"),c=t.getContext("2d");o=()=>{t.width=window.innerWidth,t.height=window.innerHeight},window.addEventListener("resize",o),o();const w=Array.from({length:100},()=>({x:Math.random()*t.width,y:Math.random()*t.height,size:Math.random()*3,velocityX:(Math.random()-.5)*2,velocityY:(Math.random()-.5)*2})),S=()=>{c.clearRect(0,0,t.width,t.height),w.forEach(g=>{g.x+=g.velocityX,g.y+=g.velocityY,(g.x<0||g.x>t.width)&&(g.velocityX*=-1),(g.y<0||g.y>t.height)&&(g.velocityY*=-1),c.beginPath(),c.arc(g.x,g.y,g.size,0,Math.PI*2),c.fillStyle="#b29627",c.fill()}),requestAnimationFrame(S)};S()}),L(()=>{o&&window.removeEventListener("resize",o)}),(t,c)=>(i(),r("section",R,[c[1]||(c[1]=e("div",{class:"absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0"},null,-1)),c[2]||(c[2]=e("canvas",{id:"hero-bg",class:"absolute inset-0 pointer-events-none z-0"},null,-1)),u(A,null,{default:x(()=>[e("div",j,[e("h1",D,[s.value.type==="text"?(i(),r("span",G,d(s.value.value),1)):s.value.type==="text-image"?(i(),r("span",Z,[f(d(s.value.textBefore)+" ",1),e("span",J,[e("img",{src:s.value.image,alt:"Logo",class:"logo"},null,8,X)])])):H("",!0)]),c[0]||(c[0]=e("p",{class:"text-body space-mono-bold text-gray-200 max-w-xl mx-auto mb-8 mt-5"}," Créons ensemble des expériences web modernes et performantes. ",-1)),u(y,{title:"Entrez en contact",label:"Entrons en contact",onClick:m})])]),_:1})]))}},K=b(U,[["__scopeId","data-v-4ae59512"]]),Y="/assets/me-CRjOMHmh.jpg",_={id:"about",class:"w-full flex items-center justify-center"},$={class:"max-w-7xl w-5/6 py-10 px-10 m-auto"},ee={class:"flex justify-center mt-8 align-middle"},te={__name:"About",setup(p){const m=()=>{};return(a,s)=>(i(),r("section",_,[u(A,null,{default:x(()=>[e("div",$,[s[0]||(s[0]=e("h2",{class:"section-title text-center text-4xl font-bold text-white mb-6"},"Qui suis-je ?",-1)),s[1]||(s[1]=e("div",{class:"flex flex-col md:flex-row items-center gap-14"},[e("div",{class:"w-full md:w-1/2 flex justify-center overflow-hidden"},[e("img",{src:Y,alt:"Votre photo",class:"rounded-ee-xl shadow-lg object-cover w-full h-auto max-w-xs md:max-w-md"})]),e("div",{class:"w-full md:w-1/2 text-gray-700"},[e("p",{class:"text-lg leading-relaxed"}," Passionné par le développement web, j'apprends différents technologies pour appréhender le développement front et back end "),e("p",{class:"text-lg leading-relaxed mt-4"}," Je m'intéresse aussi aux différents framework IA et tout ce qui est relatif à ce domaine. ")])],-1)),e("div",ee,[u(y,{label:"Télécharger mon CV",onClick:m})])])]),_:1})]))}},se=b(te,[["__scopeId","data-v-d3f12ce9"]]),oe={id:"education",class:"relative bg-gray-500"},ae={class:"mx-auto bg-gray-500 pb-10 pt-5 space-mono-regular py-10 rounded-3xl sm:px-6 lg:px-8"},ne={class:"relative"},le={class:"absolute inset-0 left-1/2 w-1 transform -translate-x-1/2 z-10"},ie={class:"relative bg-black border-b border-white glsm shadow-lg rounded-lg p-6 w-full sm:w-1/2 z-20"},re={class:"text-lg font-bold text-yellow-400 space-mono-regular"},de={class:"mt-2 text-sm text-white"},ce={class:"mt-1 text-sm text-white"},ue={class:"mt-1 text-sm text-gray-100"},me={key:0,class:"mt-1 text-sm text-white"},ge={__name:"Education",setup(p){const m=B([{diploma:"Baccalauréat",title:"Économique & Social",year:"2014",university:"Lycée Louis Aragon",city:"Givors"},{diploma:"Licence",title:"Langues Étrangères Appliquées",year:"2018",materia:"Anglais - Espagnol",university:"Université Jean-Moulin",city:"Lyon 3"},{diploma:"Master",title:"Métiers de l'enseignement, de l'éducation et de la formation",year:"2021",materia:"Espagnol",university:"Jean-Monnet",city:"Saint-Étienne"},{diploma:"Brevet de Technicien Supérieur",title:"Services Informatiques Aux Organisations (en cours)",year:"2023-2025",materia:"Développement Web et Applicatifs",university:"AFIP",city:"Villeurbanne"}]),a=B(null),s=()=>{const n=document.querySelector("#education"),o=a.value;if(n&&o){const l=n.offsetTop,t=n.offsetHeight,c=window.scrollY,w=window.innerHeight;if(c+w>=l&&c<=l+t){const g=Math.min(c+w-l,t)/t*99.5;o.style.height=`${g}%`,o.style.opacity="1"}else o.style.height="0%",o.style.opacity="0"}};return Q(()=>{window.addEventListener("scroll",s),s()}),L(()=>{window.removeEventListener("scroll",s)}),(n,o)=>(i(),r("section",oe,[u(A,null,{default:x(()=>[e("div",ae,[o[4]||(o[4]=e("h2",{class:"text-4xl font-bold text-center text-yellow-400 mb-8 space-mono-regular-italic"}," Mon Parcours Éducatif ",-1)),e("div",ne,[e("div",le,[e("div",{ref_key:"goldBar",ref:a,class:"w-full goldBar rounded-full bg-yellow-500 transition-all duration-300 opacity-0"},null,512)]),(i(!0),r(h,null,v(m.value,(l,t)=>(i(),r("div",{key:t,class:M([t%2===0?"flex-row-reverse":"flex-row","relative flex items-center mb-12 sm:mb-16 sm:z-40"])},[e("div",ie,[e("h3",re,d(l.diploma)+" "+d(l.title),1),e("p",de,[o[0]||(o[0]=e("strong",null,"Année :",-1)),f(" "+d(l.year),1)]),e("p",ce,[o[1]||(o[1]=e("strong",null,"Université :",-1)),f(" "+d(l.university),1)]),e("p",ue,[o[2]||(o[2]=e("strong",null,"Ville :",-1)),f(" "+d(l.city),1)]),l.materia?(i(),r("p",me,[o[3]||(o[3]=e("strong",null,"Matière :",-1)),f(" "+d(l.materia),1)])):H("",!0)])],2))),128))])])]),_:1})]))}},pe=b(ge,[["__scopeId","data-v-6b98c70b"]]),xe={id:"projects",class:"bg-gray-600 py-24"},he={class:"max-w-7xl mx-auto px-4"},ve={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8"},Ae={class:"text-xl font-semibold text-white space-mono-bold mb-2"},fe=["src","alt"],be={class:"text-white space-mono-regular flex-grow"},ye={class:"flex flex-wrap justify-start gap-2 mt-3"},we={class:"mt-4 flex justify-center py-2"},Ce={__name:"Projects",setup(p){const m=[{id:1,title:"LLM",description:"Implémentation de framework IA permettant de contraindre les LLM à répondre selon des structures de données définies   ",tech:["FastAPI","Gradio","Langchain","Langraph","Langfuse","Pydantic","Python"],image:W,seeMore:"https://example-weather.com"},{id:2,title:"GSB ecommerce",description:"Réplicat d'une solution ecommerce dans le cadre du projet de fin d'étude répondant à un besoin d'une entreprise fictive",tech:["Vue.JS3","Spring JDBC-Security-Web","Java","Javascript","MySQL","Docker","Axios"],image:q,seeMore:{githubFront:"https://github",githubBack:"https://github"}},{id:3,title:"Portfolio Website",description:"Portfolio réalisé en cours de deuxième année de formation.",tech:["Vue","Tailwind CSS"],image:z,seeMore:""},{id:4,title:"Participation projet client ecommerce",description:"Ajout de fonctionnalités en accord avec des spec techniques",tech:["Sap Commerce","Flexible Search","Javascript","Java"],image:E,seeMore:"https:"},{id:5,title:"Utilisation de SonarCube",description:"Implémentation du plug-in SonarCube pour tester les vulénrabilités dans un projet entreprise",tech:["SonarCube"],image:E,seeMore:"https"},{id:6,title:"Visualisation ",description:"Ajout de fonctionnalités en accord avec des spec techniques",tech:["Sap Commerce","Flexible Search","Javascript","Java"],image:E,seeMore:"https"}],a=I(),s=n=>{a.push(`/projects/${n}`)};return(n,o)=>(i(),r("section",xe,[u(A,null,{default:x(()=>[e("div",he,[o[0]||(o[0]=e("h2",{class:"text-4xl font-bold text-center text-yellow-400 mb-5"},"Réalisations",-1)),o[1]||(o[1]=e("p",{class:"mt-2 text-lg text-center text-white space-mono-regular-italic"}," Quelques projets professionnels - académiques - personnels ",-1)),e("div",ve,[(i(),r(h,null,v(m,l=>e("div",{key:l.id,class:"bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center min-h-[450px]"},[e("h3",Ae,d(l.title),1),e("img",{src:l.image,alt:l.title,class:"h-40 w-fit object-contain rounded-md mb-4 shadow-xl"},null,8,fe),e("p",be,d(l.description),1),e("div",ye,[(i(!0),r(h,null,v(l.tech,t=>(i(),r("span",{key:t,class:"bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"},d(t),1))),128))]),e("div",we,[u(y,{label:"Voir le projet",onClick:t=>s(l.id)},null,8,["onClick"])])])),64))])])]),_:1})]))}},Pe=b(Ce,[["__scopeId","data-v-5be49170"]]),Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoBAMAAACIy3zmAAAAFVBMVEX5xj3u7u83fvD///8lc/ChwPP446tWbrZ7AAAJ2ElEQVR42u2dz27jLBfGiSJ5XUrdfQjZD+Vr92PZF5A/3seKlPu/hHfh2HHbxJyDzQHPB5sRtTz96ekDhgMcmGmL5m1ZRJUl6ASdoBN0gk7QCTpBJ+h/Efr2r7j9fBHVBJ2gE3SCTtAJOkEn6AT9T0KnSUCCTtAJOkFPq2ojhFgUtOE8r+u63u3quuacCxM/dF5LWd5LIWW9F1pHDM0PqiwLJaVSUsqiUEpJWUpZcxEntDD5oSzlg1KostiJCKGFzqV6iNyWDjsmaMEPZVHIsVIW+7igTS5LaSuq3ImYoqavpZ25FzuSScABhCyllD11aGgNZ5aq3EcBjWG+U4eFxjFLqcpjeGgks5RlcQwMLV6xzFKqQoSF/lQSX9QuKLQ+FQ7QstwEhBavTsxSFiIctJM5WoPoUNDi4Ci0lMUxFLSz0FKqSgeCfnUWWsryGAZauwvdu5o8ajoQWqkS34EEmQScBl9mKbHY7RCEGvqzuP+p98bk2IFTFQK6d4eqhOZca2QHWASAFqeffS6yYapjAOgOUW1uj80HSmq1pYfuLd2PI4zBSV3RQ+cd9O7+FPm1oYfuANX2/vQT5w9BDd23QyXuTzW6JQaCLoZPVdzQ/fewGj49oaTeBlP6G/Qbts8jVrpzwt/h0//FrXQPvRk+/aBR2nk8feq76cFTXEe9IZ8EdEpXQ2ikp6OAFrjeg17pvp/mrtABlZZi8FTJZXhaHe9PcWMPGU5ptbkvo+A6DxXO07dptTEG2w4DKt1Om9rQHs4dahMQuuo+WNi47zacPWS5cYuShVRaynbBKkdHybYhoVWxq+uDwoYjQ/YeUkpVliV+wSis0q6B0w151HQ6dIDp1gxKb4NNbJekNF+i0iJ5Onk6eTp5Onk6eXp+pUtbidDTeZ3nfJ/zfZ7v63xf5/v9rX6r2mdf2xB7TQ3XgvehPKPFt3peeBtP+zsWBlA6PuiPpHRSOlqltek7CCO0uXcXZqzYI3tDpcW80ELntUs5gOzxfv1RxBzQOv92Qghe7AGnLefizH6WTEyG1q+2oyDTgjW/oRm7TIV22B+NWnN5BM0uk6BFrvwxP1WaZdOUVoU/6CeeZoyx1RToV5/Mz5VmrHGH1h7NMebpziAuUdMJ+6PB060n0OziOgn49Cv0KHTmCC28OrqduZhn0OziqLRfoceVZis36A/PQstRaOYELU4ypNLs4gLtub+zQmcu0L6boc0ezAHauztsSrO1g9K+3WFVeoWH/ixCK83Q0P7dYVWaXdBK+3eHVek1Ftq/O+xKZ1jojyK80gwbNX2TBEo/H08PxqeISQBBO5RHG/QaB60JLF1aoTMcNEU7VFZohoP+WCI0haUB0Jc4oUeZu5YIg+YlBTS3Qq8w0BTtEAKdYaAp2qEs7NAMA/0qKQoAWsChSdqhrLQd+oKAVhTQOwD0GmEPCmi14Zzz+aA/JVE3zd8ZpPsARU1pejxhjPljgWbwSQAJdGEg0BoMTdJNV2YsaIpX+o2kHRpjjI25XccAQdMMl4wx2gq9igoaZmmE0orK0i8zKk0ArbagdgiH1vFYul2bg0ATdNPt2ak/C4MGuqPtqCOBbs8DshmhCT6IlTHGfC0Luk0N9DIntP/JVsWh7mANMGr6RiA05xwkNLvAJgH+Vz0rY+yTlsigy6Mx9kkLDpp7hlYbYwznZxj0Ogro9mMIFRoK7dceqmiTsZ5nhlZemdu0t1ChY4BW3Xnt83Kg+wTUX2xuaCcJVamKsrBsmt116afBQrOVL+jne3gPh0O963cn8+5sxh82NzQ2kleWu7ruLl7oU5R0u1W7zeGcC9H9Irg54NDIprW7J+/WArTb/MzCKq2K2mD39WOYfSitir3BHkZ4YVOhH42nEUoX+ExsKJ3bmS1kEoBog/hLFpDMbAWEVqjxGgr6nWFLpueFviV+0bw9pfLjv7odj9FccMEFN+b9emb4MrfS7XjNaP4+TpOxCWVm6C4Dk74yj2Vm6FsCJn1mC4LGDjJjgL4J7ZkZDA2bbm04OEoUDXQhOHK85lbWM0KrjeYE5ngcFnOFLo6cowbzvu0BieVVmnPI8gOZ0m8Qd3DO/bdCRNT0FdjfcQJmJoCTAMARhoqku+t2MUGgASsBW3BQnAravlCkjiR9NAY6tytN5o5sPqUrMneAoa3TcbUlcwccWkEsTeKOdrcpBFqAoM8k0Gsw9AnyaWFxQdsXXcgs3e7bBCltG3wUhmSAh4K2fscrOmjEtk0A9Ets0JZPoqrIOg/EXlPb8dpKc04EjThwFg30CgF9StATJ1tQ6I9YoC8IaEufRwfNFwidoY6rqjigVyjo0wKhTSTQDUrp8SgCGTTuCPZ4S9wRQWfIc+MqBqWx0CeL0oKwHUKhxzMDUSndIE/oj5r6L9F4Gpuma+y0uyKCztC5xU4WpSksjYYeMzWR0g0a+rMIrrRD6jkV2tMrB+hTaKUbB+gRf9Ao7ZKZcGRMTaJ05pRO8TS6O4Xic+gA/dwfJEo7Jq5UIaFXjtBPZwIU0K4pQp81RQpPZ855TZ99ygmUbpxvg3om9QZ8HmhaiNftcoOP8vFnnPueuYgpNzI8vojPu9LrSddI6EdpkdVfz9DZxLsvPh9R+1Z68oUdufqVn1xt/HpaTL9lRB/kz2tQvNrjKma5GqXPuZ/fyh6k9Pv1/dr0qfSbK6jazHafy8+iIUpn3+5P+XGdyrOq8HvdDxTa6ZoZXzfnABdbo4JOSielY1Xa+ZoZaETcw/U27tAzxD1W5NAsQSfo5OkEnaATdOo9kj3+T6A9jqchEbvYZi4RQjsonYkfJ58XoHT2K69A/EpnvxM4xK/0pXt3QUrf4+Qvy1F61b/7tRylB++el6J0Nnj3ZSlKrwbvvi9F6TigkUo3/MEiQuxKxwEdVGmi8fS3m4uXMkdM0FTQ68G7/Xd8HTn0avDuH/smNl/QL8hB3oPUc/TQyDO24v7u2b7zzhc08gj2un/3iy0G+n7v+cvwR8TQ2GhN012tB9nj6A0aewa7dfXgHrYmADT2tHvGBRfD4zEBFj8dkjBd+TA3YRYCemqEugkCPTEbwoS18Um7ASbFeUNsneCcT5JaBIKekg9tyhaWSdBT0mVcgkGbiY4OA+3sah4Q2rWvboJCu7XFjAeFdstsxANDu/QgTXBovK0bHR4aS904/6I5oXFpkRseBzTm4HvDY4HW0FTpmQi71/R79QvaP4fda/qzeoVZIy5o83W2HwWJDtqMJrG/RrEV+XH1sUmyJpL908+qv64wuDbxbPoeq2renxSKa6c6qCr4AqF5gk7QCTpBxwQ945EqsmqCTtAJOkEn6ASdoBN0gv4nodMkIEEn6ASdoBN0gk7QCTpBx1H9D7fs1jlnMmqGAAAAAElFTkSuQmCC",Ee="data:image/png;base64,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",k="/assets/java-min-Cl2fAN1t.png",Be="/assets/HTML-min-CJ1kvmJu.png",Me="data:image/png;base64,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",ke="/assets/CSS-min-CUy_fL6b.png",Qe="data:image/png;base64,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",Le="/assets/Angular-min-CJtTtpVq.png",He="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAAD8BAMAAADJUwFFAAAAElBMVEVptyru7+7///9cshbG4q+VzWmrnQu1AAAL3UlEQVR42u2dS3vqug6GRVXmJNA51g5zdYvMSxLmlMD//yt7kAuQe2wZOOepZ11Pl3lRP8uybMtARTNB0d78R/jD/cP9w/1fxQ3pvr097ibLsizLgvDtcTfZ9QQsIiLMsLxmIdF74oYmOp5QhBnKhijCy+xQ/MJb4YYmO6HUpLcmAtcDmbfCDc3m1MVaEvP1QG+ES5sr9sICAAhcwvfBPaLASJPl4U1wzWkUFgCELxq45T9Uf6vZP9ImZ5jSUJYH4/BBQRCE5IpLR5xGCwAYH+i1uOYok2kBhH/plbjmR2BWKwX8GtzZtADy+zrc+bQ33ufj2tDWvI9dbYx33C8rWgA+t3s+ece1pQXgpNUz+hZDhLa0gHHY6DmSxC9ulLM1Lkjc6HkrZ7+4LrQA+PnYc4oLr7grJ1oAPD+MLYS98Yi7E3BsfC/WiCH2iGtyV1rAZXjrecvAE8VgE3f+MLjz/t7WeSkAJt7Cc3cpAAByUveMAHj2hasgBQAA3Fc97xgYP3zhakgBAEDOZc8riHPYe8KNBJQah0QmCMIcvlOIPeHmrIULCyITBBHjecXgB3enRwuckAmCFUuyY0x84CqNs3q0mSDMIabIE+5K0bgAkpggAlyQKV2DMq5BTVrA2IQrxoQoh4UHXF3jAuCZcmAiSmGvj6tsXACII8ZvIloXnkwVN9Q2LgCeGM9EtGMO1a2rblwAAC5iSEyUcT0YFwCwGGOFkVUzkF6MW4aOiAvl8HznxbhFsEAp7I0ubu7FuOcKN9bF9WJc4PKjtsy6YkjB20ArjBFq4hr0aVyKGBNNXD9ebF/vdAOeNXG9DDRJ6p35HBaKuDu/xiXKYW/0cFPPxqU1xHq4XgbavXFpy7GeGLxo4d64tGPQw/WhBfy8PwQTMSZauF60wI+HdhDPWrg+tFBPaDXuQikD6cPpYvxoXEphoRSeRx60IGdq4u6VcD1o4cGJVZ5MCTf1Ps6K1aUSLvqXAlHEEKrg6muhLQUiw5io4K68ewUiIoP19pUbbu519r3FZPihgRtpa6E+g9HAhYUGrrZ05bOTltbV3qUbbvoE4RIR/VPtXbrh6kq33FDraDvWwNWVbj9tEfE646pKd4C2XLu74qaqtL+9tOXa3TUDmT+JlgirhJlDeK4o3RFaysudYRdcPenKgG5Lj/ntihuqBQwSj9BW2z9OuErSRfkMR2hpVW5ku4gBlYTwS6Nty864KiMNZZmM09KOwRVXYaSJQEY0CRdDR9yVs2FleaFpzZT77va4ocucxiLC1wPR03Ct5jREFBFhgEsW0oxWT2u2uDOTYyIiggBwvWTZgea2elqzxd3wLNTl9Xo5hGTbylMN9rhTHQOKLK+HgNxadT7LFnfiFIzCnwdyb+tR3JF4N502ZV0SIhXccvljG57nalPWlPaPK657EDunFRvD9rjjEcN4WDij1YtLX7gSh3q0t8WlJe6YH5OlK63RxN2yXUJmhkEbuGcX3LVvWso6l+52uMPxGLLCKLu09tYccPP5WdqZ0j239tYcxIDzs7QzXZcq7oQTVY4TQ9KIcb6NPe6Q22WV6SFthWQOuAPRruhMvctWYsQBt3+W0JECRfuZuIPx7gDuWSem+e5OO9mF59s523hW0j03cWMH3JVPl0tEhIkmburZuFFzI3vtBVfLuKu4tfoBD7hKxqV830qZsgNu7tUtkJGP9upHHzdWMu6udaphy6COix9KuGnryIgbLnodaKY9NW4ZQntcvwNtx/uOpbA2rtZAo7StKg/W5VBLC5h0nHayxzWetcCkat1uXDW/0PHFR607FO9u/PqFDoe4ZUisw/PI5xyx5bZ06ySZHW6H38VvrXgBuOs7uOB6dGMRd43ZKmOqh6vkxlLu+uLq1o21BhpIxxffggNul2f41hponV98pSwGLenmraPn1XrAHtf0XjVUyOp39pSCg3U7MnqsNaN195SWWz92uL5GWiQ9oYc27l7Ji/UMAjdc9LPuMdinKqcMZIh+HMOK+/5Mbri5F8dgsPd7o1MGsoUroZJxezwMltOQUhaHtYzbrQUD5fkLJdxYybg9Woi4XKu8D67B/r9SVIVpdritTctPJeMu+uZmJ9yt/lIiwgEH44jb2pv4V2NC69dUvX7TwXWf1CIZmmzW1WJFCdd5Ust5KA+UuuFG2rg7HhwB9erYDtew7hxcHFHs7yWvVG157A11cYvKa73O27Ajbq6acCoqr/Ur6pZ70MF1tG4+bFzaseORzVTTukX9jL4ZrZglPkZwB1cTzaPcTtYtM24D2ex1fenHbvETNg5mOVm3kAJ+Dq2PqytVdrjNAw0u1i1LqQx94xzADTdSs25Zj3Fo89sggON9NS3tmnzcuLdCsUrnd+0n4bI05+DJgh3XV1ltcVMd3Kou9qCa1lAVObbGXavs+lS7BsPHNvIJlxdHcB9dA/7rJNyRoYrgfDW04cm+HTzusM8lihjQ9eJtI4TcOwyzse3ZLSvcwkbnhftRekq1tHO+7nfcU1fcW7H8eDz/74y7csyR3Whl2AsaBoVyEg3XMHda+8KppyZ3DBOKdYzdV3s8ZDp3ntjdHn4ZizdSAHAvkvR4YW1mouHrRjsyzohygNg44zZS0vt5uuXJlwAiBvhUwLV3DUcZrIPT8roqFbMaY22ya3h4pgZHU5c5gEo9sshurEW5zLkPEjEAq1R7w6EiYhMG2aRVyJZBp1KhjXjN4+Nw41KgHAB16kA+lteccors6/G9tQnH6iMGAJ0qm3PFGzXe3ZtyNWhVSFellh7O8bztp+xkwujMAbTq7zbEO7y19pU3XzCbch9kx1CEYxrWXU1Ww6YF21vAqRUvwFlJDA3x9qqh67HISbdXIoFCujp1IHFKKmdzErG8L5gylCsJlTqQ6fjm2ubaATuRttgN+hjFsKyl13ZMnZadfIf4h+vAXwW3UaShqd7s1P0M58Q7xEWyT/OtlIGcv9mAdL++OPUOccq3WEQHt5GVvknSHPO+lyInlO25319JFHGb24GlM42OKNJXVmBquZYyxUOKuK1TLvJZSJZdigzd76/sNXFNq+i5XPskO69iQ5mbrKZKJdz2ldaBx02Fpwqhzk0yqeLOqJs1qxhGlVT/1MUNJpfAn2HaW0aqDpu0cKOH8jcDz15/hvNpIdZ+rblWA8ZZkPU8q4USzyk3s8N6vWq0cb/4boYwnbyzdHC/WMZE/S3sMm4oo8eOGxU4s3DH3dI+NvpvYa/4PrppO2KeV3boLiOFZw8P9EZ8H9w0HDHKZZZpH14n59DHe8L5Q1IkdymO85CIwAX5wN09HBJe3ycS5pl28/jwuyRecAnvs9G3FYYsZ6k2uDZyPHvyg7u6v6ZTiXemar+uzUkGz55wHy5HlrilaoPgcPtPveMrO2JrRsSYPOHSz92avdzOvASb7ASAUsbpy2uWZZsWebDJjtAZco4cKXXBjaRl3eVJRLg8FITAImVMcbour2U7XQFFBAH7b2h5eQs7beFi12zMWNYsrFp/ODdWSdEJd9ceasPlIAERB0szxuQRNzw8ZOcVarF++MS9G0Jr3Yrtnt5xp761sR1uvV72hBtOl+4k48617tR49yHtUGaKnAvznud9rt1b2KT0BjLu6Tm4EWoYl5Nn4H5lRxVaXNAzcKOhWWquE3uCGL5UZohiu+0Z2tV4vbvMMz0DV+HJqmo+e4pn+HL2Y1Uo+gxcY06sIoUn4QaRm3zvNjeeghtu0Il2clJMBzcIXeTLB/Nk3CD8seaVXxM8GzcwP5bylYsJrHFnxrv3aQc791Duydl9rgOuHW91HOP5uBTN560Pj7wAN4xOMpc2fB1uEJp5vHIJX4kbBGaGP0O+hMFrcQMzeWmBfKDg1bhBMxnev/d6MMHrcYMwOI6vhoQvxRubL8cNws4TZK1tbY0P0sElcxw4MYCyzKx79oJbAEtn1rR8lui9cInM8dTceuC7Z4neDZfIbI5FXr9Kmi+vt8d+3g43CEKiYJNlx+v1er1k2SEIyYSquNbxbv862TxuT+n17BKev+THP9w/3D/cP9w/3D/c/x/c/wAD6O+fnfWZlAAAAABJRU5ErkJggg==",C="/assets/Intellij-min-oYVl71pr.png",P="/assets/docker-min-CJeZVvXJ.png",Ne={id:"skills",class:"bg-gray-50 pt-24"},Te={class:"max-w-7xl mx-auto px-4"},Fe={class:"space-y-12"},Ie={class:"text-2xl font-semibold text-gray-700 mb-4"},We={class:"relative overflow-hidden py-4"},qe=["src","alt"],ze={class:"text-lg font-semibold text-gray-800 mb-2"},Oe={class:"text-sm text-gray-600 mb-4"},Ve={class:"w-full bg-gray-200 rounded-full h-3"},Re=["src","alt"],je={class:"text-lg font-semibold text-gray-800 mb-2"},De={class:"text-sm text-gray-600 mb-4"},Ge={__name:"Skills",setup(p){const m={"Langages de programmation":[{name:"Python",description:"Langage polyvalent.",image:Se,level:80},{name:"JavaScript",description:"Langage interactif.",image:Ee,level:75},{name:"Java",description:"Backend robuste.",image:k,level:75},{name:"PHP",description:"Backend dynamique.",image:k,level:70},{name:"HTML",description:"Backend dynamique.",image:Be,level:70},{name:"CSS",description:"Backend dynamique.",image:ke,level:70}],Frameworks:[{name:"Vue.js",description:"Framework interactif.",image:Qe,level:70},{name:"Angular",description:"Framework robuste.",image:Le,level:65},{name:"Spring",description:"Backend puissant.",image:He,level:60},{name:"TailwindCSS",description:"Backend puissant.",image:Me,level:60}],Outils:[{name:"Git",description:"Contrôle de version.",image:C,level:90},{name:"Docker",description:"Conteneurisation.",image:P,level:80},{name:"Git",description:"Contrôle de version.",image:C,level:90},{name:"Docker",description:"Conteneurisation.",image:P,level:80},{name:"Git",description:"Contrôle de version.",image:C,level:90},{name:"Docker",description:"Conteneurisation.",image:P,level:80},{name:"Git",description:"Contrôle de version.",image:C,level:90},{name:"Docker",description:"Conteneurisation.",image:P,level:80}]};return(a,s)=>(i(),r("section",Ne,[u(A,null,{default:x(()=>[e("div",Te,[s[0]||(s[0]=e("h2",{class:"text-4xl font-bold text-center text-gray-800 mb-6"},"Compétences",-1)),s[1]||(s[1]=e("p",{class:"text-lg text-center text-gray-600 mb-8"}," Technologies utilisées lors de réalisations académiques ou professionnelles ",-1)),e("div",Fe,[(i(),r(h,null,v(m,(n,o,l)=>e("div",{key:o},[e("h3",Ie,d(o),1),e("div",We,[e("div",{class:M(["scrolling-container",{reverse:l%2!==0}])},[(i(!0),r(h,null,v(n,t=>(i(),r("div",{key:o+t.name,class:"skill-card flex-shrink-0 w-72 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center mx-4"},[e("img",{src:t.image,alt:t.name,class:"h-20 w-20 object-contain mb-4"},null,8,qe),e("h4",ze,d(t.name),1),e("p",Oe,d(t.description),1),e("div",Ve,[e("div",{class:"bg-primary-500 h-3 rounded-full",style:O({width:t.level+"%"})},null,4)])]))),128)),(i(!0),r(h,null,v(n,t=>(i(),r("div",{key:o+t.name+"-duplicate",class:"skill-card flex-shrink-0 w-72 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center mx-4"},[e("img",{src:t.image,alt:t.name,class:"h-20 w-20 object-contain mb-4"},null,8,Re),e("h4",je,d(t.name),1),e("p",De,d(t.description),1)]))),128))],2)])])),64))])])]),_:1})]))}},Ze=b(Ge,[["__scopeId","data-v-de939d36"]]),Je="/assets/vue-react-angular-D68oh9FG.png",Xe={id:"tech-watch",class:"bg-white"},Ue={class:"max-w-7xl mx-auto py-8"},Ke=["src","alt"],Ye={class:"p-4 flex flex-col flex-grow"},_e={class:"text-xl font-semibold text-gray-800 mb-2"},$e={class:"text-gray-600 mb-4 flex-grow"},et={class:"text-sm text-gray-500 mb-4"},tt={class:"flex justify-center"},st={__name:"TechWatch",setup(p){const m=[{id:1,title:"Comparatif : Vue.js, React, et Angular",description:"Quel framework frontend choisir en 2024 ?",date:"1 Décembre 2024",image:Je,filename:"react-angular-vue.pdf"}];return(a,s)=>(i(),r("section",Xe,[u(A,null,{default:x(()=>[e("div",Ue,[s[1]||(s[1]=e("h2",{class:"text-4xl font-bold text-center text-gray-800 mb-2"}," Tech Watch ",-1)),s[2]||(s[2]=e("p",{class:"text-lg text-center text-gray-600 mb-8"}," Articles sur les tendances tech de 2024 - 2025 ",-1)),e("div",{class:M(["grid gap-8",m.length===1?"grid-cols-1":m.length===2?"grid-cols-2":"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"])},[(i(),r(h,null,v(m,n=>e("div",{key:n.id,class:"bg-white border-t border-l rounded-lg overflow-hidden flex flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"},[e("img",{src:n.image,alt:n.title,class:"h-40 object-contain"},null,8,Ke),e("div",Ye,[e("h3",_e,d(n.title),1),e("p",$e,d(n.description),1),e("div",et,d(n.date),1),e("div",tt,[u(y,{label:"Télécharger l'article",download:`${n.filename}`,href:`/articles/${n.filename}`,onClick:s[0]||(s[0]=()=>{})},null,8,["download","href"])])])])),64))],2)])]),_:1})]))}},ot={id:"contact",class:"bg-gray-50 mt-20"},at={class:"max-w-7xl mx-auto px-4"},nt={class:"max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"},lt={action:"https://formspree.io/f/xwpvnadv",method:"POST",class:"space-y-6"},it={__name:"Contact",setup(p){return(m,a)=>(i(),r("section",ot,[u(A,null,{default:x(()=>[e("div",at,[a[3]||(a[3]=e("h2",{class:"text-4xl font-bold text-center text-gray-800 mb-6"},"Entrer en contact",-1)),a[4]||(a[4]=e("p",{class:"text-lg text-center text-gray-600 mb-8"}," Parlons de vos projets ",-1)),e("div",nt,[e("form",lt,[a[0]||(a[0]=e("div",null,[e("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Nom"),e("input",{type:"text",name:"name",required:"",class:"mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"})],-1)),a[1]||(a[1]=e("div",null,[e("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email"),e("input",{type:"email",name:"email",required:"",class:"mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"})],-1)),a[2]||(a[2]=e("div",null,[e("label",{for:"message",class:"block text-sm font-medium text-gray-700"},"Message"),e("textarea",{name:"message",rows:"4",required:"",class:"mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"})],-1)),e("div",null,[u(y,{label:"Envoyez votre message",type:"submit"})])])])])]),_:1})]))}},rt=b(it,[["__scopeId","data-v-dc334898"]]),ct={__name:"Main",setup(p){return(m,a)=>(i(),r("div",null,[u(K),u(se),u(pe),u(Pe),u(Ze),u(st),u(rt)]))}};export{ct as default};
