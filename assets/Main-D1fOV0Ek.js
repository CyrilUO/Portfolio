import{_,r as k,o as P,a as j,b as r,c as d,d as e,e as a,w as f,t as m,f as x,g as $,h as y,i as L,j as b,F as g,k as v,n as C,u as T,l as A,m as B,p as E,s as M,q,v as I,x as D}from"./index-CN1-oJyC.js";const U="/Portfolio/assets/delaware-logo-CuKqSlgQ.png",V={id:"home",class:"h-screen relative overflow-hidden flex items-center justify-center"},J={class:"relative z-10 text-center px-4"},z={class:"text-title font-display font-bold text-white mb-4"},O={key:0,class:"dynamic-typing block whitespace-nowrap overflow-hidden border-r-4 border-primary-200 pr-2"},R={key:1,class:"dynamic-typing inline-flex items-center"},F={class:"logo-container ml-2"},G=["src"],H={__name:"LandingPage",setup(h){const u=()=>{L.push("/#contact")},o=[{type:"text",value:"N'hésite pas à me contacter !"},{type:"text",value:"Bienvenue sur mon site !"},{type:"text",value:"Je m'appelle Cyril"},{type:"text",value:"Je suis développeur en alternance"},{type:"text-image",textBefore:"Chez",image:U}],s=k(o[0]);let c=0,t;const i=()=>{if(c=(c+1)%o.length,s.value={type:"text",value:""},o[c].type==="text"){let n=0;const l=()=>{n<o[c].value.length?(s.value.value+=o[c].value[n],n++,setTimeout(l,100)):setTimeout(()=>{i()},2e3)};l()}else s.value=o[c],setTimeout(()=>{i()},2e3)};return P(()=>{i();const n=document.getElementById("hero-bg"),l=n.getContext("2d");t=()=>{n.width=window.innerWidth,n.height=window.innerHeight},window.addEventListener("resize",t),t();const w=Array.from({length:100},()=>({x:Math.random()*n.width,y:Math.random()*n.height,size:Math.random()*3,velocityX:(Math.random()-.5)*2,velocityY:(Math.random()-.5)*2})),S=()=>{l.clearRect(0,0,n.width,n.height),w.forEach(p=>{p.x+=p.velocityX,p.y+=p.velocityY,(p.x<0||p.x>n.width)&&(p.velocityX*=-1),(p.y<0||p.y>n.height)&&(p.velocityY*=-1),l.beginPath(),l.arc(p.x,p.y,p.size,0,Math.PI*2),l.fillStyle="#b29627",l.fill()}),requestAnimationFrame(S)};S()}),j(()=>{t&&window.removeEventListener("resize",t)}),(n,l)=>(r(),d("section",V,[l[0]||(l[0]=e("div",{class:"absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0"},null,-1)),l[1]||(l[1]=e("canvas",{id:"hero-bg",class:"absolute inset-0 pointer-events-none z-0"},null,-1)),a(b,null,{default:f(()=>[e("div",J,[e("h1",z,[s.value.type==="text"?(r(),d("span",O,m(s.value.value),1)):s.value.type==="text-image"?(r(),d("span",R,[x(m(s.value.textBefore)+" ",1),e("span",F,[e("img",{src:s.value.image,alt:"Logo",class:"logo"},null,8,G)])])):$("",!0)]),a(y,{title:"Entrez en contact",label:"Entrons en contact",onClick:u})])]),_:1})]))}},N=_(H,[["__scopeId","data-v-04236fe7"]]),Q="/Portfolio/assets/me-CRjOMHmh.jpg",W="/Portfolio/assets/cyril_cv-DzMeiBkS.png",X={id:"about",class:"w-full flex items-center justify-center bg-black py-20 px-6 mx-auto md:px-10"},Y={class:"max-w-7xl w-full flex flex-col items-center space-y-12"},K={class:"flex justify-center mt-8"},Z={__name:"About",setup(h){const u=()=>{const o=document.createElement("a");o.href=W,o.download="Cyril_DUPONT_CV.png",document.body.appendChild(o),o.click(),document.body.removeChild(o)};return(o,s)=>(r(),d(g,null,[s[2]||(s[2]=e("div",{class:"py-1 bg-white"},null,-1)),e("section",X,[a(b,null,{default:f(()=>[e("div",Y,[s[0]||(s[0]=e("h2",{class:"section-title text-center text-4xl font-bold text-yellow-400 mb-6"},"Qui suis-je ?",-1)),s[1]||(s[1]=e("div",{class:"flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full"},[e("div",{class:"w-full md:w-1/2 flex justify-center"},[e("img",{src:Q,alt:"Votre photo",class:"rounded-xl shadow-lg object-cover w-full h-auto max-w-sm md:max-w-md transition-transform duration-300 hover:scale-105"})]),e("div",{class:"w-full text-yellow-400 md:w-1/2 space-y-6"},[e("p",{class:"text-lg md:text-xl leading-relaxed"},[x(" Passionné par le développement informatique, j'apprends différentes technos pour obtenir un bagage de développeur fullstack. "),e("br"),e("br"),x("Avec l'apprentissage permanent comme credo, j'aime mettre à dispositions mes compétences dans le cadre de projets personnels ou professionnels ")]),e("p",{class:"text-lg text-yellow-400 md:text-xl leading-relaxed"}," Je m'intéresse également aux frameworks agentic permettant l'automatisation des tâches au sein des entreprises. ")])],-1)),e("div",K,[a(y,{label:"Télécharger mon CV",onClick:u})])])]),_:1})])],64))}},ee=_(Z,[["__scopeId","data-v-a507bcd6"]]),te={id:"education",class:"relative bg-black pt-24 pb-12 mx-4"},se={class:"mx-auto bg-black pb-10 pt-5 space-mono-regular py-10 rounded-3xl sm:px-6 lg:px-8"},oe={class:"relative border-t border-white"},ne={class:"absolute inset-0 left-1/2 w-1 transform -translate-x-1/2 z-10"},ie={class:"relative bg-black border-b border-t border-l border-white glsm shadow-lg rounded-lg p-6 w-full sm:w-1/2 z-20"},le={class:"text-lg font-bold text-yellow-400 space-mono-regular"},ae={class:"mt-2 text-sm text-white"},re={class:"mt-1 text-sm text-white"},de={class:"mt-1 text-sm text-gray-100"},ce={key:0,class:"mt-1 text-sm text-white"},me={__name:"Education",setup(h){const u=k([{diploma:"Baccalauréat",title:"Économique & Social",year:"2014",university:"Lycée Louis Aragon",city:"Givors"},{diploma:"Licence",title:"Langues Étrangères Appliquées",year:"2018",materia:"Anglais - Espagnol",university:"Université Jean-Moulin",city:"Lyon 3"},{diploma:"Master",title:"Métiers de l'enseignement, de l'éducation et de la formation",year:"2021",materia:"Espagnol",university:"Jean-Monnet",city:"Saint-Étienne"},{diploma:"Brevet de Technicien Supérieur",title:"Services Informatiques Aux Organisations (en cours)",year:"2023-2025",materia:"Développement Web et Applicatifs",university:"AFIP",city:"Villeurbanne"}]),o=k(null),s=()=>{const c=document.querySelector("#education"),t=o.value;if(c&&t){const i=c.offsetTop,n=c.offsetHeight,l=window.scrollY,w=window.innerHeight;if(l+w>=i&&l<=i+n){const p=Math.min(l+w-i,n)/n*99.5;t.style.height=`${p}%`,t.style.opacity="1"}else t.style.height="0%",t.style.opacity="0"}};return P(()=>{window.addEventListener("scroll",s),s()}),j(()=>{window.removeEventListener("scroll",s)}),(c,t)=>(r(),d(g,null,[t[5]||(t[5]=e("div",{class:"bg-white py-1"},null,-1)),e("section",te,[a(b,null,{default:f(()=>[e("div",se,[t[4]||(t[4]=e("h2",{class:"text-4xl font-bold text-center text-yellow-400 mb-8"}," Mon Parcours Éducatif ",-1)),e("div",oe,[e("div",ne,[e("div",{ref_key:"goldBar",ref:o,class:"w-full goldBar rounded-full bg-yellow-500 transition-all duration-300 opacity-0"},null,512)]),(r(!0),d(g,null,v(u.value,(i,n)=>(r(),d("div",{key:n,class:C([n%2===0?"flex-row-reverse":"flex-row","relative flex items-center mb-12 sm:mb-16 sm:z-40"])},[e("div",ie,[e("h3",le,m(i.diploma)+" "+m(i.title),1),e("p",ae,[t[0]||(t[0]=e("strong",null,"Année :",-1)),x(" "+m(i.year),1)]),e("p",re,[t[1]||(t[1]=e("strong",null,"Université :",-1)),x(" "+m(i.university),1)]),e("p",de,[t[2]||(t[2]=e("strong",null,"Ville :",-1)),x(" "+m(i.city),1)]),i.materia?(r(),d("p",ce,[t[3]||(t[3]=e("strong",null,"Matière :",-1)),x(" "+m(i.materia),1)])):$("",!0)])],2))),128))])])]),_:1})])],64))}},ue=_(me,[["__scopeId","data-v-9bf0ced8"]]),pe="/Portfolio/assets/gradio-min-DmxHIaad.png",ge={id:"projects",class:"bg-black pt-24 pb-12 mx-4"},xe={class:"max-w-7xl mx-auto px-4"},fe={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8"},he={class:"text-xl font-semibold text-white mb-2"},be=["src","alt"],ve={class:"text-white text-center flex-grow"},_e={class:"flex flex-wrap justify-center gap-2 mt-3"},ye={class:"mt-4 flex justify-center py-2"},we={class:"flex justify-center mt-5 pt-5"},Se={__name:"Projects",setup(h){const u=()=>{const t=document.createElement("a");t.href=I,t.download="Cyril_DUPONT_REFERENTIELS.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t)},o=[{id:1,title:"Agentic IA",description:"Implémentation de framework IA permettant de contraindre les LLM à répondre selon des structures de données définies   ",tech:["FastAPI","Langchain","Langraph","Langfuse","Pydantic","Python"],image:A,seeMore:"https://example-weather.com"},{id:2,title:"GSB ecommerce",description:"Réplicat d'une solution ecommerce dans le cadre du projet de fin d'étude répondant à un besoin d'une entreprise fictive",tech:["Vue.JS3","Spring JDBC-Security-Web","Java","Javascript","MySQL","Docker","Axios"],image:B,seeMore:{githubFront:"https://github",githubBack:"https://github"}},{id:3,title:"Portfolio Website",description:"Portfolio réalisé en cours de deuxième année de formation.",tech:["Vue","Tailwind CSS"],image:E},{id:4,title:"Sap commerce ADVEO",description:"Ajout de fonctionnalités en accord avec des spec techniques",tech:["Sap Commerce","Flexible Search","Javascript","Java"],image:M},{id:5,title:"Analyse SEO",description:"Compréhension des enjeux du référencement en ligne pour améliorer la visibilité des organisations",tech:["Wappalyzer","gtmetrix","SEO","SEA","SMO","Wireshark"],image:q}],s=T(),c=t=>{s.push(`/projects/${t}`)};return(t,i)=>(r(),d(g,null,[i[2]||(i[2]=e("div",{class:"bg-white py-1"},null,-1)),e("section",ge,[a(b,null,{default:f(()=>[e("div",xe,[i[0]||(i[0]=e("h2",{class:"text-4xl font-bold text-center text-yellow-400 mb-5"},"Réalisations",-1)),i[1]||(i[1]=e("p",{class:"mt-2 text-lg text-center text-white space-mono-regular-italic"}," Quelques projets professionnels - académiques - personnels ",-1)),e("div",fe,[(r(),d(g,null,v(o,n=>e("div",{key:n.id,class:"bg-black p-6 rounded-xl shadow-lg flex flex-col items-center min-h-[450px] border border-white"},[e("h3",he,m(n.title),1),e("img",{src:n.image,alt:n.title,class:"h-40 w-fit object-contain rounded-md mb-4 shadow-xl"},null,8,be),e("p",ve,m(n.description),1),e("div",_e,[(r(!0),d(g,null,v(n.tech,l=>(r(),d("span",{key:l,class:"bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"},m(l),1))),128))]),e("div",ye,[a(y,{label:"Voir le projet",onClick:l=>c(n.id)},null,8,["onClick"])])])),64))]),e("div",null,[e("div",we,[a(y,{label:"Télécharger le référentiel",onClick:u})])])])]),_:1})])],64))}},ke=_(Se,[["__scopeId","data-v-1aecddc8"]]),Pe="/Portfolio/assets/Python-logo-removebg-preview-8DwMmysQ.png",je="/Portfolio/assets/JavaScript-logo-Dj4XT3RX.png",$e="/Portfolio/assets/java-removebg-preview-BrJKv_PX.png",Ce="/Portfolio/assets/HTML-min-CJ1kvmJu.png",Le="/Portfolio/assets/tailwind-removebg-preview-B5h8ZIp7.png",Te="/Portfolio/assets/CSS-min-CUy_fL6b.png",Ae="/Portfolio/assets/scss-DRZENi8o.png",Be="/Portfolio/assets/vuejs-BRxHL6MS.png",Ee="/Portfolio/assets/Angular-min-CJtTtpVq.png",Me="/Portfolio/assets/spring_-removebg-preview-C8q_wJvd.png",qe="/Portfolio/assets/Intellij-min-oYVl71pr.png",Ie="/Portfolio/assets/git-removebg-preview-CFQnTGdd.png",De="/Portfolio/assets/docker-min-removebg-preview-BXnG5G4c.png",Ue="/Portfolio/assets/postmn-removebg-preview-DiZHj5wd.png",Ve="/Portfolio/assets/swagger-removebg-preview-D2qOWMGA.png",Je="/Portfolio/assets/sql_aclehmy-D3k-II9q.jpg",ze="/Portfolio/assets/mysql-BPF4OQra.png",Oe="/Portfolio/assets/Android_Studio_icon_(2023).svg-BNpGSB7a.png",Re="/Portfolio/assets/retrofit-DrV7POKC.png",Fe={id:"skills",class:"bg-black pt-24 pb-12 mx-4"},Ge={class:"max-w-7xl mx-auto px-4"},He={class:"space-y-12"},Ne={class:"text-2xl font-semibold text-white mb-4"},Qe={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"},We=["src","alt"],Xe={class:"text-lg font-semibold text-white mb-2"},Ye={class:"text-sm text-white mb-4"},Ke={__name:"Skills",setup(h){const u={"Langages de programmation":[{name:"Python",description:"Utilisation dans le cadre d'une refonte d'application centrée data",image:Pe},{name:"JavaScript",description:"Utilisation en entreprise et au cours de mon projet de fin de BTS",image:je},{name:"Java",description:"Utilisation lors de mon projet de fin de BTS",image:$e},{name:"HTML",description:"Utilisé dans l'ensemble des projets",image:Ce},{name:"CSS",description:"Utilisation récurrente dans l'ensemble des projets",image:Te},{name:"SCSS",description:"Utilisation dans le cadre d'un projet entreprise",image:Ae}],"Frameworks & Librairies":[{name:"Vue.js",description:"Utilisé lors du projet de fin de BTS afin d'améliorer la courbe d'apprentissage d'Angular et de débuter par un framework front plus intuitif et facile à prendre en main",image:Be},{name:"Angular",description:"Utilisé lors de projet en entreprise",image:Ee},{name:"Spring",description:"Utilisé lors du projet web de fin d'étude",image:Me},{name:"TailwindCSS",description:"Utilisation pour le projet web de fin de BTS",image:Le},{name:"Retrofit",description:"Appréhendé lors du projet mobile de fin d'étude de fin de BTS",image:Re},{name:"Gradio",description:"Utilisation en entreprise",image:pe}],"Outils & Environnements":[{name:"Intellij",description:"En entreprise dans le cadre de la méthode Agile ainsi que lors de la réalisation du projet de fin de BTS",image:qe},{name:"Git",description:"Utilisé dans le cadre de la méthode Agile ainsi que lors de la réalisation du projet de fin de BTS",image:Ie},{name:"Docker",description:"Quelques cas d'utilisation, encore beaucoup à apprendre sur cet outils!",image:De},{name:"Swagger",description:"Utilisation pour du test en local ainsi qu'au cours de plusieurs TP en étude",image:Ve},{name:"Postman",description:"Largement utilisé au cours de la deuxième année d'étude",image:Ue},{name:"Android Studio",description:"Envrionnement utilisé pour développer l'application mobile de fin d'étude",image:Oe}],"Base de donnees et ORM":[{name:"MySQL",description:"Utilisé en entreprise comme pour les deux projets de fin de BTS",image:ze},{name:"SQLAlchemy",description:"Appréhendé lors du projet mobile de fin d'étude",image:Je}]};return(o,s)=>(r(),d(g,null,[s[3]||(s[3]=e("div",{class:"bg-white py-0.5"},null,-1)),e("section",Fe,[a(b,null,{default:f(()=>[e("div",Ge,[s[1]||(s[1]=e("h2",{class:"text-4xl font-bold text-center text-yellow-400 mb-6"},"Compétences",-1)),s[2]||(s[2]=e("p",{class:"text-lg text-center text-white mb-8 space-mono-regular-italic"}," Technologies utilisées lors de réalisations académiques ou professionnelles ",-1)),e("div",He,[(r(),d(g,null,v(u,(c,t)=>e("div",{key:t},[e("h3",Ne,m(t),1),e("div",Qe,[(r(!0),d(g,null,v(c,i=>(r(),d("div",{key:t+i.name,class:"skill-card relative shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"},[s[0]||(s[0]=e("div",{class:"absolute inset-0 bg-white bg-opacity-10 rounded-2xl pointer-events-none"},null,-1)),e("img",{src:i.image,alt:i.name,class:"h-24 w-24 object-contain mb-4 rounded-full bg-white p-2"},null,8,We),e("h4",Xe,m(i.name),1),e("p",Ye,m(i.description),1)]))),128))])])),64))])])]),_:1})])],64))}},Ze=_(Ke,[["__scopeId","data-v-44720bfa"]]),et="/Portfolio/assets/vue-react-angular-D68oh9FG.png",tt={id:"tech-watch",class:"bg-black min-h-screen mx-4"},st={class:"max-w-7xl mx-auto py-8"},ot=["src","alt"],nt={class:"p-4 flex flex-col flex-grow"},it={class:"text-xl font-semibold text-white mb-2"},lt={class:"text-white mb-4 flex-grow"},at={class:"text-sm text-gray-50 mb-4"},rt={class:"flex justify-center mt-10"},dt={__name:"TechWatch",setup(h){const u=[{id:1,title:"Comparatif : Vue.js, React, et Angular",description:"Quel framework frontend choisir en 2024-2025 ?",date:"1 Décembre 2024",image:et,filename:"react-angular-vue.pdf"}];return(o,s)=>{const c=D("router-link");return r(),d(g,null,[s[3]||(s[3]=e("div",{class:"bg-white py-1"},null,-1)),e("section",tt,[a(b,null,{default:f(()=>[e("div",st,[s[1]||(s[1]=e("h2",{class:"text-4xl font-bold text-center text-yellow-400 mb-2"}," Tech Watch ",-1)),s[2]||(s[2]=e("p",{class:"text-lg text-center text-white space-mono-regular-italic mb-8"}," Articles sur les tendances tech de 2024 - 2025 ",-1)),e("div",{class:C(["grid gap-8",u.length===1?"grid-cols-1":u.length===2?"grid-cols-2":"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"])},[(r(),d(g,null,v(u,t=>e("div",{key:t.id,class:"bg-black border-white border rounded-lg overflow-hidden flex flex-col items-center text-center"},[e("img",{src:t.image,alt:t.title,class:"h-40 object-contain"},null,8,ot),e("div",nt,[e("h3",it,m(t.title),1),e("p",lt,m(t.description),1),e("div",at,m(t.date),1),e("div",rt,[a(c,{to:{name:"TechWatchDetails",params:{id:t.id}},class:"text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-1.5 bg-gray-900 text-yellow-400 font-mono font-bold rounded-sm border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition duration-300 shadow-[4px_4px_0_theme(colors.yellow.400)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"},{default:f(()=>s[0]||(s[0]=[x(" Voir l'article ")])),_:2},1032,["to"])])])])),64))],2)])]),_:1})])],64)}}},ct={id:"contact",class:"bg-black mx-4"},mt={class:"max-w-7xl mx-auto pb-4 pt-16"},ut={class:"max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg border-yellow-400"},pt={action:"https://formspree.io/f/xwpvnadv",method:"POST",class:"space-y-6"},gt={class:"flex justify-center"},xt={__name:"Contact",setup(h){return(u,o)=>(r(),d(g,null,[o[5]||(o[5]=e("div",{class:"py-0.5 bg-white"},null,-1)),e("section",ct,[a(b,null,{default:f(()=>[e("div",mt,[o[3]||(o[3]=e("h2",{class:"text-4xl font-bold text-center text-yellow-400 mb-6"},"Entrer en contact",-1)),o[4]||(o[4]=e("p",{class:"text-lg text-center mb-8 text-white space-mono-regular-italic"}," Parlons de vos projets ",-1)),e("div",ut,[e("form",pt,[o[0]||(o[0]=e("div",null,[e("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Nom"),e("input",{type:"text",name:"name",required:"",class:"mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"})],-1)),o[1]||(o[1]=e("div",null,[e("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email"),e("input",{type:"email",name:"email",required:"",class:"mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"})],-1)),o[2]||(o[2]=e("div",null,[e("label",{for:"message",class:"block text-sm font-medium text-gray-700"},"Message"),e("textarea",{name:"message",rows:"4",required:"",class:"mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"})],-1)),e("div",gt,[a(y,{label:"Envoyez votre message",type:"submit"})])])])])]),_:1})])],64))}},ft=_(xt,[["__scopeId","data-v-7b75a2ca"]]),bt={__name:"Main",setup(h){return(u,o)=>(r(),d("div",null,[a(N),a(ee),a(ue),a(ke),a(Ze),a(dt),a(ft)]))}};export{bt as default};
