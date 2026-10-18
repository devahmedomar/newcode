(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var cl=function(v){return Math.max(0,Math.min(1,v))};
var H=document.documentElement;
/* ---------- translations ---------- */
var EN={"say0": "<b>Every product</b> starts with one line.", "say1": "This isn’t just a logo.<br><b>It’s a door.</b>", "say2": "Come, let us tell you <b>the story.</b>", "hint": "Scroll to begin the story ↓", "mq": "IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ ", "about.h": "Before the code, there are people.", "about.l": "New Code is a team of engineers and designers, founded in [year], building software that solves real problems. Our mission: [company mission in one line].", "culture.h": "How do we work together?", "culture.c0h": "// We test before we ship", "culture.c0p": "Nothing reaches the client until we’ve tried to break it first.", "culture.c1h": "// Honesty first", "culture.c1p": "If there’s a problem, the client hears it from us before they find it.", "culture.c2h": "// We learn every day", "culture.c2p": "One hour a week to try a new technology, with no delivery pressure.", "culture.c3h": "// Code gets reviewed", "culture.c3p": "Every line is reviewed by a teammate before merging. No lone heroes.", "process.h": "Every project takes the same road.", "services.h": "And this is what we can build for you.", "exp.h": "The numbers speak.", "exp.p0": "Projects delivered", "exp.p1": "Years of experience", "exp.p2": "Engineers and designers", "exp.p3": "% of clients came back", "clients.h": "People who trusted us.", "clients.q0": "“[Client quote about delivery quality and communication].”", "clients.n0": "[Client name] — [Title]", "clients.q1": "“[Second quote about the impact on the client’s business].”", "clients.n1": "[Client name] — [Title]", "acad.h": "We don’t just build products. <span style=\"color:var(--am)\">We build programmers.</span>", "acad.c0h": "Programming Basics", "acad.c0p": "8 weeks · Beginner", "acad.c1h": "Web Development", "acad.c1p": "12 weeks · Intermediate", "acad.c2h": "Mobile Apps", "acad.c2p": "10 weeks · Intermediate", "acad.grads": "Academy graduates", "work.h": "Projects we built for the Saudi market.", "work.l": "From Riyadh to Jeddah and Dammam: Arabic-first apps and platforms, local payments, and compliance with the Kingdom\u2019s requirements.", "end.h": "This story is still being written.", "end.l": "And the next line could be your project.", "end.btn": "Write the new code with us", "foot": "© New Code · All data on this page is placeholder"};
var ST={ar:{},en:EN};
$$('[data-i18n]').forEach(function(e){ST.ar[e.dataset.i18n]=e.innerHTML});
var D={
ar:{title:'نيو كود — كل منتج بيبدأ بسطر واحد',
team:[['أ','أحمد س.','قائد تقني'],['م','مريم ع.','مصممة منتجات'],['ي','يوسف ه.','مهندس موبايل'],['ن','نور ك.','مهندسة جودة']],
tl:[['فهم','نسمع قبل ما نكتب'],['تصميم','نماذج تجربها بإيدك'],['بناء','إصدار كل أسبوعين'],['اختبار','نكسر قبل ما تكسر'],['إطلاق','ودعم بعد الإطلاق']],
svc:[['تطبيقات الموبايل','iOS وAndroid بكود واحد.'],['مواقع ومتاجر','سريعة وبلغتين.'],['أنظمة وداشبورد','بياناتك في مكان واحد.'],['ذكاء اصطناعي','أتمتة حقيقية مش دعاية.']],
net:['شركة نور','مطاعم الأصيل','بنك الدلتا','تجارة المنصورة','عيادات الشفاء','لوجستيك السريع'],
term:['✓ تطبيق iOS وAndroid جاهز','✓ موقع سريع بلغتين','✓ بياناتك في مكان واحد','✓ الحكاية بدأت ▮'],
"cats":["الكل","تطبيقات الموبايل","مواقع ومتاجر","أنظمة ولوحات تحكم","ذكاء اصطناعي"],"fl":"تصنيف المشاريع","wk":[{"c":1,"n":"سُفرة — تطبيق توصيل المطاعم","s":"مطاعم وتوصيل · الرياض","a":"واجهة تطبيق توصيل مع خريطة وتتبع السائق","d":"تطبيق iOS وAndroid لطلب الوجبات وتتبّع السائق لحظة بلحظة، بواجهة عربية أولاً ودفع عبر مدى وApple Pay وSTC Pay.","t":["Flutter","mada","Apple Pay"],"m":[["−40%","زمن التوصيل"],["4.8","تقييم المتجر"]]},{"c":1,"n":"رحلة — تطبيق السياحة والتجارب","s":"سياحة وضيافة · العُلا وجدة","a":"تذكرة سفر وطائرة وكثبان رملية","d":"حجز الفنادق والتجارب السياحية وتنظيم الرحلات، مع خرائط تعمل بدون إنترنت ومواقيت الصلاة واتجاه القبلة.","t":["Flutter","Maps","Offline"],"m":[["85K","تحميل"],["4.7","تقييم المتجر"]]},{"c":2,"n":"ديار — متجر إلكتروني بفوترة متوافقة","s":"تجزئة · جدة","a":"متجر إلكتروني مع رمز QR للفاتورة الإلكترونية","d":"متجر سريع بالعربية والإنجليزية، مع فوترة إلكترونية متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك، وشحن لمدن المملكة ودفع بالتقسيط.","t":["React","Node.js","ZATCA"],"m":[["+85%","مبيعات"],["1.1s","زمن التحميل"]]},{"c":2,"n":"عقارك — منصة عقارية","s":"عقارات · الرياض","a":"بطاقة عقار وخريطة تفاعلية وأبراج الرياض","d":"منصة بحث وعرض عقارات بخرائط تفاعلية وفلترة حسب الحي والسعر وجولات 360°، مع لوحة خاصة للمطوّرين والوسطاء.","t":["React","PostgreSQL","Maps"],"m":[["12K","عقار منشور"],["×3","طلبات المعاينة"]]},{"c":3,"n":"نقطة — لوحة مدفوعات للتجار","s":"تقنية مالية · الرياض","a":"لوحة تحكم مدفوعات مع رسوم بيانية وبطاقة","d":"لوحة للتجار لمتابعة المدفوعات والتسويات اليومية والتقارير اللحظية، مع صلاحيات متعددة المستخدمين وتحقق ثنائي.","t":["Node.js","PostgreSQL","AWS"],"m":[["−70%","وقت التسوية"],["24/7","مباشر"]]},{"c":3,"n":"مسار — إدارة الأساطيل واللوجستيات","s":"لوجستيات · الدمام","a":"خريطة تتبع شاحنات ولوحة مؤشرات","d":"تتبّع مباشر للشاحنات والسائقين على الخريطة، وجدولة الرحلات، وتقارير الوقود والصيانة لخفض التكلفة التشغيلية.","t":["React","Python","IoT"],"m":[["−22%","تكلفة الوقود"],["1,200","مركبة"]]},{"c":4,"n":"ردّ — مساعد خدمة العملاء","s":"خدمات · على مستوى المملكة","a":"محادثة مع مساعد ذكي وشبكة عصبية","d":"مساعد ذكي يفهم اللهجة السعودية والعربية الفصحى، يجيب عملاء الموقع وواتساب على مدار الساعة ويحوّل الحالات المعقّدة لموظف.","t":["LLM","WhatsApp","Python"],"m":[["70%","بدون تدخل بشري"],["24/7","متاح دائماً"]]},{"c":4,"n":"عيادتي — حجوزات ذكية للعيادات","s":"صحة · جدة","a":"تقويم مواعيد ومؤشرات توقّع الازدحام","d":"نظام حجز وتذكيرات ذكية يقلّل التغيّب، مع لوحة تتوقّع أوقات الذروة وتوزّع الأطباء، وتخزين للبيانات داخل المملكة.","t":["Python","ML","Dashboard"],"m":[["−35%","نسبة التغيّب"],["+40%","استغلال المواعيد"]]}],sec:{work:'مشاريعنا',hero:'البداية',about:'نحن مين',culture:'ثقافتنا',process:'كيف نعمل',services:'خدماتنا',exp:'خبرتنا',clients:'عملاؤنا',acad:'الأكاديمية','end':'النهاية'},
lb:'EN',sb:'موسيقى'},
en:{title:'New Code — Every product starts with one line',
team:[['A','Ahmed S.','Tech Lead'],['M','Maryam A.','Product Designer'],['Y','Youssef H.','Mobile Engineer'],['N','Nour K.','QA Engineer']],
tl:[['Understand','We listen before we write'],['Design','Prototypes you can touch'],['Build','A release every two weeks'],['Test','We break it before you do'],['Launch','And support after launch']],
svc:[['Mobile apps','iOS and Android from one codebase.'],['Websites & stores','Fast, and bilingual.'],['Systems & dashboards','Your data in one place.'],['Artificial intelligence','Real automation, not hype.']],
net:['Nour Co.','Al-Aseel Restaurants','Delta Bank','Mansoura Trading','Shifa Clinics','Fast Logistics'],
term:['✓ iOS and Android app ready','✓ Fast bilingual website','✓ Your data in one place','✓ The story has begun ▮'],
"cats":["All","Mobile Apps","Websites & Stores","Systems & Dashboards","AI"],"fl":"Project categories","wk":[{"c":1,"n":"Sufra — Restaurant Delivery App","s":"Food & delivery · Riyadh","a":"Delivery app screen with map and live driver tracking","d":"iOS and Android app to order meals and track the driver live, Arabic-first, with payments via mada, Apple Pay and STC Pay.","t":["Flutter","mada","Apple Pay"],"m":[["−40%","Delivery time"],["4.8","Store rating"]]},{"c":1,"n":"Rihla — Tourism & Experiences App","s":"Tourism & hospitality · AlUla & Jeddah","a":"Boarding pass, plane and desert dunes","d":"Book hotels and experiences and plan trips, with offline maps, prayer times and Qibla direction.","t":["Flutter","Maps","Offline"],"m":[["85K","Downloads"],["4.7","Store rating"]]},{"c":2,"n":"Diyar — Online Store with Compliant Invoicing","s":"Retail · Jeddah","a":"Online store with an e-invoice QR code","d":"A fast Arabic and English store with e-invoicing aligned to ZATCA requirements, shipping across the Kingdom, and pay-later options.","t":["React","Node.js","ZATCA"],"m":[["+85%","Sales"],["1.1s","Load time"]]},{"c":2,"n":"Aqarak — Real Estate Platform","s":"Real estate · Riyadh","a":"Property card, interactive map and Riyadh skyline","d":"Property search and listings with interactive maps, filters by district and price, and 360° tours, plus a portal for developers and agents.","t":["React","PostgreSQL","Maps"],"m":[["12K","Listings"],["×3","Viewing requests"]]},{"c":3,"n":"Nuqta — Merchant Payments Dashboard","s":"Fintech · Riyadh","a":"Payments dashboard with charts and a card","d":"A dashboard for merchants to follow payments, daily settlements and live reports, with multi-user roles and two-factor sign-in.","t":["Node.js","PostgreSQL","AWS"],"m":[["−70%","Settlement time"],["24/7","Live"]]},{"c":3,"n":"Masar — Fleet & Logistics Management","s":"Logistics · Dammam","a":"Truck tracking map and KPI panel","d":"Live truck and driver tracking on the map, trip scheduling, and fuel and maintenance reports to cut operating costs.","t":["React","Python","IoT"],"m":[["−22%","Fuel cost"],["1,200","Vehicles"]]},{"c":4,"n":"Radd — Customer Service Assistant","s":"Services · Kingdom-wide","a":"Chat with an AI assistant and neural network","d":"An assistant that understands Saudi dialect and Modern Standard Arabic, answers website and WhatsApp customers around the clock, and hands complex cases to staff.","t":["LLM","WhatsApp","Python"],"m":[["70%","Handled without staff"],["24/7","Always on"]]},{"c":4,"n":"Eyadati — Smart Clinic Scheduling","s":"Healthcare · Jeddah","a":"Appointment calendar and peak-time forecast","d":"Smart booking and reminders that cut no-shows, with a dashboard that forecasts peak hours and balances doctors, and data stored inside the Kingdom.","t":["Python","ML","Dashboard"],"m":[["−35%","No-show rate"],["+40%","Slot utilisation"]]}],sec:{work:'Projects',hero:'Start',about:'Who we are',culture:'Culture',process:'How we work',services:'Services',exp:'Expertise',clients:'Clients',acad:'Academy','end':'End'},
lb:'عربي',sb:'Music'}};
var lang='ar';try{lang=localStorage.getItem('nc-lang')||'ar'}catch(e){}
var nets=[[-300,-110],[300,-110],[-330,60],[330,60],[-150,125],[150,125]];
var flt=0,secs=[],dots=[],first=true,termDone=false;
var card=function(col,inner){return '<div class="'+col+'"><div class="nc-card rv">'+inner+'</div></div>'};
function render(){
 var d=D[lang];
 $('#team').innerHTML=d.team.map(function(t){return card('col-12 col-sm-6 col-lg-3','<div class="av">'+t[0]+'</div><h3>'+t[1]+'</h3><p>'+t[2]+'</p>')}).join('');
 $('#tl').innerHTML=d.tl.map(function(s){return '<div class="st rv"><i></i><b>'+s[0]+'</b><span>'+s[1]+'</span></div>'}).join('');
 $('#svc').innerHTML=d.svc.map(function(s){return card('col-12','<h3>'+s[0]+'</h3><p>'+s[1]+'</p>')}).join('');
 $('#net').innerHTML='<svg viewBox="-400 -160 800 320" preserveAspectRatio="none">'+nets.map(function(n){return '<line x1="0" y1="0" x2="'+n[0]*0.9+'" y2="'+n[1]*0.9+'"/>'}).join('')+'</svg><div class="hub mono">NC</div>'+nets.map(function(n,i){return '<div class="n" style="--x:'+n[0]+'px;--y:'+n[1]+'px">'+d.net[i]+'</div>'}).join('');
 renderWork();
 var t=$('#term');t.innerHTML='';
 if(termDone)fill(t);
 if(!first)$$('#team .rv,#tl .rv,#svc .rv,#net').forEach(function(e){e.classList.add('in')});else $$('#team .rv,#tl .rv,#svc .rv,#net').forEach(function(e){io.observe(e)});
 collect();
}
function renderWork(){
 var d=D[lang],f=$('#flt');f.setAttribute('aria-label',d.fl);
 f.innerHTML=d.cats.map(function(c,i){return '<button type="button" data-f="'+i+'" aria-pressed="'+(i===flt)+'"'+(i===flt?' class="on"':'')+'>'+c+'</button>'}).join('');
 $('#wk').innerHTML=d.wk.map(function(w,n){return {w:w,n:n+1}}).filter(function(o){return !flt||o.w.c===flt}).map(function(o,i){var w=o.w;
  return '<div class="col-12 col-md-6"><article class="wk" style="--i:'+i+'"><div class="wk-img"><img src="images/p'+o.n+'.svg" alt="'+w.a+'" width="800" height="500" loading="lazy"><span class="wk-cat">'+d.cats[w.c]+'</span></div>'
  +'<div class="wk-b"><div class="wk-sec">'+w.s+'</div><h3>'+w.n+'</h3><p>'+w.d+'</p><div class="wk-tags mono">'+w.t.map(function(t){return '<span>'+t+'</span>'}).join('')+'</div>'
  +'<div class="res">'+w.m.map(function(r){return '<div><b class="mono">'+r[0]+'</b><span>'+r[1]+'</span></div>'}).join('')+'</div></div></article></div>'}).join('');
}
function collect(){
 secs=$$('[data-t]');var nav=$('#nav');
 nav.innerHTML=secs.map(function(s,i){if(!s.id)s.id='s'+i;var n=s.dataset['t'+lang]||s.dataset.t;return '<a href="#'+s.id+'" aria-label="'+n+'"><span>'+n+'</span></a>'}).join('');
 dots=$$('a',nav);
}
function setSecNames(){secs.forEach(function(s){var n=D[lang].sec[s.id];if(n)s.dataset.t=n})}
function applyStatic(){$$('[data-i18n]').forEach(function(e){e.innerHTML=ST[lang][e.dataset.i18n]})}
var tlines=function(){return ['$ build --app mobile',D[lang].term[0],'$ build --web --lang ar,en',D[lang].term[1],'$ build --dashboard',D[lang].term[2],'$ deploy --prod',D[lang].term[3]]};
function fill(t){tlines().forEach(function(l,i){var s=document.createElement('span');s.className=i%2?'o':'c';s.style.display='block';s.textContent=l;t.appendChild(s)})}
function type(t){var L=tlines(),i=0,j=0,el=null;termDone=true;
 (function step(){if(i>=L.length)return;if(j===0){el=document.createElement('span');el.className=i%2?'o':'c';el.style.display='block';t.appendChild(el)}
 if(i%2){el.textContent=L[i];i++;j=0;return setTimeout(step,450)}
 el.textContent=L[i].slice(0,++j);if(j>=L[i].length){i++;j=0;setTimeout(step,350)}else setTimeout(step,45)})()}
function setLang(l){
 lang=l;H.lang=l;H.dir=l==='ar'?'rtl':'ltr';
 $('#bs').href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap'+(l==='ar'?'.rtl':'')+'.min.css';
 applyStatic();render();setSecNames();collect();
 document.title=D[l].title;$('#lb').textContent=D[l].lb;$('#sb span').textContent=D[l].sb;
 try{localStorage.setItem('nc-lang',l)}catch(e){}
 tick();
}
/* ---------- observers ---------- */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');io.unobserve(t);
 var c=$('[data-n]',t);if(c)count(c);
 if(t.id==='term'&&!termDone){t.innerHTML='';type(t)}});},{threshold:.25});
$$('.rv,.net').forEach(function(e){io.observe(e)});
function count(c){var n=+c.dataset.n,s=null;function f(ts){s=s||ts;var p=cl((ts-s)/1400);c.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
/* ---------- scroll ---------- */
var hero=$('#hero'),cc=$('#cc'),tg=$('#tg'),mk=$('#mk'),bar=$('#bar'),len=2*Math.PI*70,lp=null;
function tick(){
 var says=$$('.say div'),vh=innerHeight,r=hero.getBoundingClientRect(),p=cl(-r.top/(hero.offsetHeight-vh));
 var g=.1+.34*cl(p/.5);cc.setAttribute('stroke-dasharray',(len*(1-g))+' '+(len*g));cc.setAttribute('transform','rotate('+(g*180)+' 250 100)');
 var q=cl((p-.25)/.5);tg.setAttribute('transform','translate('+(q*34)+' 0) scale('+(1+q*.6)+')');tg.setAttribute('style','transform-origin:250px 112px;font-family:JetBrains Mono,monospace');
 mk.style.transform='scale('+(1+cl(p/.5)*.15)+')';mk.style.transformOrigin='50% 50%';
 var si=p<.3?0:p<.72?1:2;says.forEach(function(s,i){s.classList.toggle('on',i===si)});
 var sp=cl(scrollY/(document.body.scrollHeight-vh));bar.style.transform='scaleX('+sp+')';
 var cur=0;secs.forEach(function(s,i){if(s.getBoundingClientRect().top<vh*.5)cur=i});dots.forEach(function(d,i){d.classList.toggle('on',i===cur)});
 if(lp&&ac)lp.frequency.setTargetAtTime(700+2600*sp,ac.currentTime,.4);
}
var tk=false;addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(function(){tick();tk=false})}},{passive:true});addEventListener('resize',tick);
/* ---------- generative ambient music (Web Audio, no files) ---------- */
var ac=null,master=null,mt=null,playing=false;
var CH=[[220,261.63,329.63],[174.61,220,261.63],[261.63,329.63,392],[196,246.94,293.66]],SC=[440,523.25,587.33,659.25,783.99,880];
function pad(fs,t){fs.forEach(function(f){[-7,7].forEach(function(dt){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.value=f;o.detune.value=dt;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.05,t+2);g.gain.linearRampToValueAtTime(0,t+6.5);o.connect(g);g.connect(lp);o.start(t);o.stop(t+7)})})}
function pluck(f,t){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.1,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+1.6);o.connect(g);g.connect(lp);o.start(t);o.stop(t+1.7)}
function musicOn(){
 ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();
 if(!master){master=ac.createGain();master.gain.value=0;master.connect(ac.destination);
  lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=900;
  var dl=ac.createDelay(2),fb=ac.createGain();dl.delayTime.value=.45;fb.gain.value=.42;lp.connect(master);lp.connect(dl);dl.connect(fb);fb.connect(dl);dl.connect(master)}
 master.gain.cancelScheduledValues(ac.currentTime);master.gain.setTargetAtTime(.9,ac.currentTime,1.2);
 var i=0;(function loop(){var t=ac.currentTime+.1;pad(CH[i%4],t);for(var k=0;k<4;k++)if(Math.random()<.7)pluck(SC[Math.floor(Math.random()*SC.length)],t+k*1.5+Math.random()*.3);i++;mt=setTimeout(loop,6000)})();
 playing=true;tick();
}
function musicOff(){clearTimeout(mt);if(master)master.gain.setTargetAtTime(0,ac.currentTime,.5);playing=false}
$('#sb').addEventListener('click',function(){this.classList.remove('nudge');if(playing)musicOff();else musicOn();this.classList.toggle('on',playing);this.setAttribute('aria-pressed',playing)});
$('#lb').addEventListener('click',function(){setLang(lang==='ar'?'en':'ar')});
$('#flt').addEventListener('click',function(e){var b=e.target.closest('button[data-f]');if(!b)return;flt=+b.dataset.f;renderWork()});
/* ---------- start ---------- */
setLang(lang);first=false;
})();
