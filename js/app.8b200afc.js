(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{"chunk-0206bfa0":"43180e95","chunk-04b93936":"fdd9dc59","chunk-13a6037e":"5bb0e99d","chunk-16015154":"47d0109c","chunk-17977988":"0b79cdbe","chunk-2c06842c":"a539447e","chunk-2d208d90":"8f0b021b","chunk-2d21d0e2":"8084ceb7","chunk-2d22c123":"b6fe20f3","chunk-2e80bb9a":"cab1171f","chunk-3145fe0f":"4098f9fc","chunk-319206de":"c02121cd","chunk-328f70dd":"6a57d7fd","chunk-3807499c":"54e8a8e0","chunk-3dc647fd":"494ed364","chunk-4cdd78c0":"337ab599","chunk-4fde0a08":"583c19fb","chunk-515a8379":"fdcdcd40","chunk-53ccb27e":"804ac6f4","chunk-59974754":"28bfa0b6","chunk-766a929b":"11a83165","chunk-839300a6":"8ab37204","chunk-c796899c":"014e1f9d","chunk-dbb9869e":"9141750b",comple:"0c7bf677",creditos:"24e085b8",glosario:"25e41ebd",intro:"925a16a8",referencias:"74c75c76",tema1:"ff8b48a3",tema2:"805801cf"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"af523a77","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"aca61583","chunk-766a929b":"d05dea55","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"10775c03",creditos:"33e0638d",glosario:"84a96c6a",intro:"0e433876",referencias:"61c3bfbc",tema1:"31d6cfe0",tema2:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("section",{staticClass:"inicio"},[o("BannerPrincipal",{staticClass:"mb-5"}),o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5 mb-5",attrs:{id:"contenidos"}},[e._m(0),o("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[o("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(a){return o("router-link",{key:"desarrollo-"+a.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:a.nombreRuta}}},[o("div",{staticClass:"desarrollo-contenidos__item__texto"},[a.hasOwnProperty("numero")?o("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(a.numero))]):o("i",{staticClass:"desarrollo-contenidos__item__icono",class:a.icono}),o("span",{domProps:{innerHTML:e._s(a.titulo)}})]),o("a",{staticClass:"boton--sm"},[o("span",{staticClass:"d-none d-md-block"},[e._v("Ver contenido")]),o("span",{staticClass:"d-md-none"},[e._v("Ver")])])])})),1)])]),o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro creditos-inicio px-3 py-4 px-sm-5"},[e.creditosInicio?o("div",{staticClass:"creditos-inicio__container"},e._l(e.creditosInicio,(function(a,n){return o("div",{staticClass:"creditos-inicio__item"},[o("div",{staticClass:"row"},[o("div",{staticClass:"creditos-inicio__titulo col-md-3 col-lg-2 mb-3 mb-md-0"},[o("h5",{staticClass:"mb-0",domProps:{innerHTML:e._s(a.titulo)}})]),o("div",{staticClass:"creditos-inicio__imagenes col"},e._l(a.contenido,(function(e){return o("img",{attrs:{src:e}})})),0)]),n!=e.creditosInicio.length-1?o("hr"):e._e()])})),0):o("div",{staticClass:"text-center"},[o("img",{staticClass:"d-inline-block mb-2",staticStyle:{width:"100px"},attrs:{src:n("9eb5")}}),o("h5",{staticClass:"mb-0"},[e._v("Ecosistema de recursos educativos digitales")])])]),o("Footer")],1)},f=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"titulo__template--a mb-4"},[n("h3",[e._v("Desarrollo"),n("br"),e._v("de contenidos")])])}],b=n("2909"),g=(n("99af"),n("4de4"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"banner-principal"},[n("div",{staticClass:"container tarjeta",style:{"background-image":e.globalData.fondoBannerPrincipal?"url("+e.globalData.fondoBannerPrincipal+")":"none"}},[n("div",{staticClass:"row banner-principal__row"},[n("div",{staticClass:"col-lg-6 ps-4 ps-sm-5 py-4 py-sm-5 banner-principal__info"},[n("div",{staticClass:"banner-principal__componente"},[n("h1",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.componenteFormativo)}})]),n("div",{staticClass:"banner-principal__descripcion"},[n("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})]),n("div",{staticClass:"banner-principal__accion"},[n("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[n("span",{staticClass:"me-1"},[e._v("Ver más")]),n("i",{staticClass:"fas fa-angle-right"})])],1)]),n("div",{staticClass:"d-none d-lg-block col-lg-5 px-0 banner-principal__img"},[n("img",{attrs:{src:e.globalData.imagenBannerPrincipal}})])])])])}),v=[],h=n("ecc5"),y={name:"BannerPrincipal",mixins:[h["a"]],computed:{globalData:function(){return this.$config.global}}},C=y,_=(n("6524"),Object(s["a"])(C,g,v,!1,null,null,null)),k=_.exports,E=n("e9c6"),q={name:"Inicio",components:{BannerPrincipal:k,Footer:E["a"]},computed:{menuPrincipalData:function(){return this.$config.menuPrincipal},creditosInicio:function(){return this.$config.creditosInicio},desarrolloContenidosData:function(){var e=[].concat(Object(b["a"])(this.menuPrincipalData.menu),Object(b["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},S=q,x=(n("6e1b"),Object(s["a"])(S,p,f,!1,null,null,null)),A=x.exports,M=n("7e58");u["a"].use(m["a"]);var j=new m["a"]({routes:[{path:"/",name:"inicio",component:A},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:M["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}}]},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),z=j,D=n("1c2c"),w=(n("a3a0"),{global:{componenteFormativo:"Interpretación del diseño para el desarrollo de la colección",descripcionCurso:"En este componente formativo, se abordarán los elementos a tener en cuenta para la interpretación de colecciones de moda, también se tratarán temas como el contexto de las marcas nacionales e internacionales, los problemas y las necesidades del mercado y el consumidor, el <i>Concept Book</i>, el ADN de la marca, el desarrollo de Concepto, el <i>moodboard</i> y la ilustración en figurín, con lo cual el aprendiz desarrollará por completo su capacidad para identificar las necesidades de un segmento del mercado y desarrollar nuevos productos para colecciones de moda.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Interpretación y conceptualización de la marca",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Contexto de marcas, problemáticas y necesidades de los segmentos de mercado",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Identificación del <i>target</i> o segmento de los mercados nuevos, tradicionales o emergentes",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Caracterizar el producto por segmento de mercado",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Elaborar el <i>Concept Book</i> del proyecto según ADN de marca",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"<i>Brief</i> de proyecto",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Informe de investigación y conceptualización del proyecto según ADN de marca",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Concepto de la colección",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"<i>Moodboard</i> del concepto de la colección",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Ilustración de la colección (figurín)",hash:"t_2_4"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Aitex. (s. f.). Análisis y gestión de tendencias."},{referencia:"Aitex. (s.f.). Branding 1."},{referencia:"Ballestas, M. (s. f.). Malébolo [manuscrito no publicado]. SENA."},{referencia:"Balmain. (2017, 28 junio). Balmain Spring/Summer 2018 Menswear Show [video]. YouTube. ",link:"https://youtu.be/iFHifGono8Y"},{referencia:"Bell, A. (s.f.). El Consumidor del Futuro 2022. WGSN. ",link:"https://www.wgsn.com/wp-content/uploads/future-consumer-2022-executive-summary-es.pdf"},{referencia:"Bellvís, M. (2012). Las estrategias de Visual Merchandising en la distribución del fashion retail: manual operativo del desarrollo e implantación para un producto moda textil predeterminado. Universidad CEU Cardenal Herrera. ",link:"http://hdl.handle.net/10637/4139"},{referencia:"Díaz, P. (2014). Comunicación y gestión de marcas de moda. Editorial Gustavo Gili. ",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45542?page=1"},{referencia:"DIESEL. (2017, 14 febrero). Make Love Not Walls - Diesel SS17 [Video]. YouTube. ",link:"https://youtu.be/COXx3YTNW1s"},{referencia:"Echeverry, D. (s. f.). DANIEL ECHEVERRY [manuscrito no publicado]. SENA."},{referencia:"Echeverry, L. (2019a). 11 Conceptos de moda [manuscrito no publicado]. SENA."},{referencia:"Echeverry, L. (2019b). 26 Conceptos Fashion [manuscrito no publicado]. SENA."},{referencia:"Gutiérrez, G. (s. f.). YƎLLOW [manuscrito no publicado]. SENA."},{referencia:"INEXMODA. (s. f.). La nueva visión del consumidor de moda. (ISCI)."},{referencia:"Mesa, N. (s. f.). VICI [manuscrito no publicado]. SENA."},{referencia:"Montava, X. (s. f.). El Concept Book. (Máster en moda, gestión del diseño y operaciones). Asociación de Investigación de la Industria Textil [AITEX]."},{referencia:"Osorio, N. (s. f.). Mandrágora [manuscrito no publicado]. SENA."},{referencia:"Posner, H. (2015). Marketing de moda (2ª. ed.). Editorial Gustavo Gili. ",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/"},{referencia:"Pulgarin, M. (s. f.). SERES [manuscrito no publicado]. SENA."},{referencia:"Reig, M. (s. f.). Moda, gestión del diseño y operaciones. Universidad CEU Cardenal Herrera. ",link:"https://repositorioinstitucional.ceu.es/bitstream/10637/4137/1/IndiceyResumen_TFM_ReigOrtega%2CMar%C3%ADa.pdf"},{referencia:"Seivewright, S. (2013). Diseño e Investigación (2.ª ed.). Editorial Gustavo Gili."},{referencia:"Trendencias. (2018, 7 junio). Todo lo que tienes que saber si quieres dedicarte a la moda: colecciones, tejidos, diseñadores y más [video]. YouTube. ",link:"https://youtu.be/cbYcsNxBLg8"},{referencia:"Tutoriales Con La Miss. (2018, 23 noviembre). 73 ¿Cómo definir el concepto de una colección de moda? [video]. Youtube. ",link:"https://youtu.be/fkjgvkujtpk"},{referencia:"Zapata, M. (s. f.). Slowly [manuscrito no publicado]. SENA."}],glosario:[{termino:"ADN de marca",significado:"Viene a ser un compendio de información genética de los seres vivos; y del mismo modo, las marcas, como los seres vivos, nacen, crecen, se reproducen y mueren. Esto hace que en el ADN de una marca se encuentren diferentes aspectos claves emocionales, numéricos, de propuesta única, personalidad y filosofía."},{termino:"Aitex",significado:"Es una asociación de carácter privado, sin ánimo de lucro, integrada por empresas textiles y afines, cuyo objetivo principal es mejorar la competitividad del sector. Por este motivo, desde el instituto se fomenta la modernización y la introducción de las tecnologías emergentes y nuevas mediante la realización de proyectos de investigación y desarrollo (i+d) y, en general, de actuaciones que contribuyen al progreso industrial del sector."},{termino:"Alfabeto visual",significado:"Son los elementos que es posible encontrar en cada una de las composiciones visuales. Cada vez que se diseña algo o se elabora alguna pieza visual, se utilizan diferentes elementos visuales que constituyen la sustancia básica de todo lo que vemos, lo que se denomina como el alfabeto visual."},{termino:"Armonía",significado:"Desde una perspectiva general, la armonía es el equilibrio de las proporciones entre las distintas partes de un todo, y su resultado siempre connota belleza."},{termino:"Aspiracional",significado:"Esta tipología de marca es clave en el <i>branding</i>, ya que la propuesta que ofrece la marca a los consumidores debe apuntar a un objetivo en el horizonte. Este ha de ser motivador para que el público lo plantee como un sueño optimista (no frustrante)."},{termino:"Branding",terminoHtml:"<em>Branding</em>",significado:"Hace referencia al proceso de crear y construir una marca (en inglés, <i>brand equity</i>) mediante la administración estratégica del conjunto total de activos vinculados en forma directa o indirecta al nombre y símbolo (logo) que identifican la marca, influyendo en el valor de la marca, tanto para el cliente como para la empresa propietaria de la marca."},{termino:"Brief",terminoHtml:"<em>Brief</em>",significado:"Es un documento escrito que el cliente le entrega al diseñador en la etapa de definiciones del proyecto. Al emitir un resumen escrito (<i>brief</i>), el cliente está definiendo objetivos, expectativas y alcance del trabajo a realizarse."},{termino:"Collage",terminoHtml:"<em>Collage</em>",significado:"Es una técnica artística que consiste en pegar distintas imágenes sobre un lienzo o papel. El término se aplica sobre todo a la pintura, pero por extensión se puede referir a cualquier otra manifestación artística, como la música, el cine, la literatura o el videoclip."},{termino:"Conceptualizar",significado:"Se entiende por conceptualización la representación de una idea abstracta en un concepto; surge de los conocimientos generales que se posee sobre diversos temas."},{termino:"Concept Book",terminoHtml:"<em>Concept Book</em>",significado:"El principal objetivo de la propuesta consiste en el aprendizaje, conceptualización y ejecución de un <i>concept book</i>. Se trata de un manual de valores que ayude a visualizar y representar el dogma de la “marca”, a partir del cual puedan trabajar todos los departamentos de la empresa, se encuentren internos o externos a esta."},{termino:"Confortables",significado:"Es un adjetivo para referirnos a algo que conforta o alienta, o que es agradable o placentero."},{termino:"Consumidor",significado:"Es una persona u organización que consume bienes o servicios, los mismos que le sirven para satisfacer algún tipo de necesidad."},{termino:"Contexto",significado:"Es un marco, un ambiente, un entorno físico o simbólico, un conjunto de fenómenos, situaciones y circunstancias (como el tiempo y el lugar), no comparables a otras, que rodean o condicionan un hecho."},{termino:"Croquis de colección",significado:"Es la representación matemática de la cantidad y tipo de prendas, por color y silueta, y las posibles combinaciones entre ellas que se proponen para la colección."},{termino:"Cuaderno de bocetos",significado:"Recoge una parte del pensamiento reflexivo durante el proceso de creación. Ahí queda plasmado en imágenes, grafismos, ilustraciones, textos y demás, el registro visual de lo que se observa o se piensa, y esto es muy útil en el día a día sometido a continuos cambios."},{termino:"Emergente",significado:"Un grupo emergente se define como un grupo particular de individuos que le plantea a la sociedad una reivindicación buscando ser aceptados por esta."},{termino:"Fashion Snoops",terminoHtml:"<em>Fashion Snoops</em>",significado:"Innovadora agencia de consultoría con sede en Nueva York. Lleva más de diecisiete años inspirando y creando confianza en sus clientes a través de su plataforma virtual, para que se conozcan anticipadamente las tendencias de moda, belleza, decoración y hogar que estarán presentes en el mercado, desarrollando así productos coherentes con lo que exige el consumidor."},{termino:"Hilo conductor",significado:"Factor que permite la coherencia de un texto o discurso en su desarrollo. En el caso de la moda específicamente, es el que hace posible la coherencia entre las diferentes piezas y elementos de una colección."},{termino:"Identidad",significado:"Circunstancia de ser una persona o cosa en concreto y no otra, determinada por un conjunto de rasgos o características que la diferencian de otras."},{termino:"Imagen de marca",significado:"Es el conjunto de elementos gráficos, visuales, emocionales, que demuestra y define lo que es y representa la marca."},{termino:"Lafayette",significado:"es una empresa textil colombiana, verticalmente integrada, que cuenta con más de 2000 empleados y una planta de más de 80 mil metros cuadrados de área construida. El informe de tendencias de Lafayette es el resultado de una cuidadosa investigación de comportamientos del consumidor y sus múltiples configuraciones mentales, proyectados hacia el futuro y aterrizados en el mercado textil. Su contenido se construye a partir de un robusto ecosistema de investigación, al cual pertenecen las fuentes de análisis de tendencias más relevantes y con mayor experticia del sector, paralelamente a un continuo análisis de datos sobre producto y consumidor, además de un monitoreo constante de tendencias digitales."},{termino:"Marca",significado:"Señal que permite identificar o distinguir algo o para dar alguna información sobre ello. "},{termino:"Outfit",terminoHtml:"<em>Outfit</em>",significado:"Es una palabra del inglés que significa vestimenta, ropa o conjunto. El término se ha vuelto popular gracias a las redes sociales, donde se utiliza para comentar la manera de vestir de alguien, especialmente de celebridades e influenciadores."},{termino:"Portable",significado:"La definición de portable aplicado a cualquier elemento, cosa y objeto en particular, que es posible, fácil o sencillo de mover, trasladar, transportar, enviar, transbordar, acarrear, embarcar, portear, cargar, traer, llevar o mover. A esta acepción se le conoce como portátil con el mismo significado."},{termino:"Prenda",significado:"Vestimenta o indumentaria es la denominación genérica que reciben las prendas y accesorios confeccionados a partir de tejidos textiles y de tejidos animales que los humanos usan para abrigar, cubrir, adornar, proteger y vestir el cuerpo."},{termino:"Producto",significado:"Es una cosa o un objeto producido o fabricado, algo material que se elabora de manera natural o industrial mediante un proceso, para el consumo o utilidad de los individuos."},{termino:"Reinventar",significado:"Es una modificación de algo que existe y requiere ser modificado, ya sea por gusto o necesidad; tiene lugar cuando una persona ha de enfrentarse a un cambio (negativo o positivo) importante en su vida o su entorno, que suele ocurrir de forma inesperada. La reinvención, pues, parece espoleada por un elemento externo que impulsa el cambio."},{termino:"Tangible vs intangible",terminoHtml:"Tangible <em>vs</em> intangible",significado:"Tangible es un adjetivo que indica que algo se puede tocar. También indica que se puede percibir de manera precisa. Esta palabra procede del latín <i>tangibĭlis</i>. Algunos sinónimos son palpable, perceptible, concreto y real. Como antónimos, se pueden utilizar las palabras: intangible, inmaterial, abstracto, etéreo."},{termino:"Target",terminoHtml:"<em>Target</em>",significado:"En el ámbito de la publicidad, los anglicismos <i>target, target group y target market</i> se utilizan como sinónimos para designar al destinatario ideal de una determinada campaña, producto o servicio."},{termino:"Tendencia",significado:"La podemos definir como aquel proceso de cambio en los grupos humanos, que da lugar a nuevas necesidades, deseos, formas de comportamiento y, por ende, a nuevos productos y servicios."},{termino:"Tienda",significado:"Un tipo de establecimiento comercial, físico o virtual, donde el comprador puede adquirir tanto bienes como servicios a cambio de dinero."},{termino:"Usuario",significado:"Se refiere a la persona que utiliza un producto o servicio de forma habitual."},{termino:"WGSN ",significado:"Es una compañía de pronóstico de tendencias de la organización matriz <i>Ascential</i>. WGSN fue fundada en 1998 en el oeste de Londres por los hermanos Julian y Marc Worth."}],complementario:[{texto:"Bellvís, M. (2012). Las estrategias de <i>Visual Merchandising</i> en la distribución del <i>fashion retail</i>: manual operativo del desarrollo e implantación para un producto moda textil predeterminado. Universidad CEU Cardenal Herrera.",tipo:"Trabajo fin de Máster",descarga:"/downloads/U1_Anexo_K_TFM_BellvisVazquez_Maria_Parte2.pdf"},{texto:"Aitex. (s. f.). Análisis y gestión de tendencias.",tipo:"PDF",descarga:"/downloads/U2_Anexo_K_Analisis_y_Gestion_de_Tendencias.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura -  Regional Santander"},{nombre:"Luis Alfonso Hincapié Echeverri",cargo:"Instructor",centro:"Centro de Formación en Diseño, Confección y Moda - Regional Antioquia."},{nombre:"Idian Fernando López Agudelo",cargo:"Instructor",centro:"Centro de Formación en Diseño, Confección y Moda - Regional Antioquia."},{nombre:"Ruth Elena Morales Ríos",cargo:"Instructora",centro:"Centro de Formación en Diseño, Confección y Moda - Regional Antioquia."},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Diseñador instruccional",centro:"Centro para la comunicación de la Industria Gráfica – Regional Distrito Capital"},{nombre:"Alba Inés Gutiérrez González",cargo:"Corrector de estilo",centro:"Centro para la Comunicación de la Industria Gráfica – Regional Distrito Capital"},{nombre:"Darío González",cargo:"Revisión y corrección de estilo",centro:"Regional Tolima – Centro Agropecuario La Granja"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional - Tolima"},{nombre:"Carlos Julián Ramírez Benítez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jhana Johanna Bustillo Ardila",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=w;var R=n("9224");o["a"].prototype.$package=R,new o["a"]({router:z,store:D["a"],render:function(e){return e(d)}}).$mount("#app")},"628c":function(e,a,n){},6524:function(e,a,n){"use strict";n("628c")},"6e1b":function(e,a,n){"use strict";n("703c")},"703c":function(e,a,n){},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.9e09bcab.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.eddbac05.png"}});
//# sourceMappingURL=app.8b200afc.js.map