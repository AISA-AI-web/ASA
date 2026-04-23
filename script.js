/* ═══════════════════════════════════════════════════════════
   AISA ASA — shared script.js
═══════════════════════════════════════════════════════════ */

/* ── Season calendars ── */
const SEASONS = [
  {
    id:'autumn', label:'Autumn Season', emoji:'🍂',
    registration:{ start:'2026-09-01', end:'2026-09-08', label:'Sep. 1 – 8, 2026' },
    asa:{ start:'2026-09-14', end:'2026-11-13', label:'Week of Sep. 14 – Week of Nov. 12, 2026' },
    breaks:[
      { start:'2026-10-12', end:'2026-10-16', label:'Mid-Term Break (Oct. 12 – 16)' }
    ],
    months:[
      { year:2026, month:8 },
      { year:2026, month:9 },
      { year:2026, month:10 }
    ]
  },
  {
    id:'winter', label:'Winter Season', emoji:'❄️',
    registration:{ start:'2026-11-02', end:'2026-11-15', label:'Nov. 2 – 15, 2026' },
    asa:{ start:'2026-11-23', end:'2027-02-05', label:'Week of Nov. 23, 2026 – Week of Feb. 5, 2027' },
    breaks:[
      { start:'2026-11-30', end:'2026-12-04', label:'UAE National Day Celebrations (week of Dec. 1)' },
      { start:'2026-12-14', end:'2027-01-03', label:'Winter Holiday Break (Dec. 14 – Jan. 3)' }
    ],
    months:[
      { year:2026, month:10 },
      { year:2026, month:11 },
      { year:2027, month:0 },
      { year:2027, month:1 }
    ]
  },
  {
    id:'spring', label:'Spring Season', emoji:'🌸',
    registration:{ start:'2027-03-01', end:'2027-03-14', label:'March 1 – 14, 2027' },
    asa:{ start:'2027-03-15', end:'2027-05-14', label:'Week of March 15 – Week of May 14, 2027' },
    breaks:[
      { start:'2027-04-05', end:'2027-04-09', label:'Spring Break (Apr. 5 – 9)' }
    ],
    months:[
      { year:2027, month:2 },
      { year:2027, month:3 },
      { year:2027, month:4 }
    ]
  }
];

const MONTH_NAMES=['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOW_SHORT=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const TERM_IDS=['autumn','winter','spring'];
const DAY_CLASS={
  'Monday':'day-monday','Tuesday':'day-tuesday',
  'Wednesday':'day-wednesday','Thursday':'day-thursday','Friday':'day-friday'
};

function parseDate(s){
  const [y,m,d]=s.split('-').map(Number);
  return new Date(y, m-1, d);
}
function weekRange(dateStr){
  const d=parseDate(dateStr);
  const day=d.getDay();
  const diffToMon=(day===0?-6:1-day);
  const mon=new Date(d); mon.setDate(d.getDate()+diffToMon);
  const fri=new Date(mon); fri.setDate(mon.getDate()+4);
  return [mon,fri];
}
function isBetween(date, start, end){
  return date.getTime()>=start.getTime() && date.getTime()<=end.getTime();
}

function buildMonth(year, month, season, today){
  const first=new Date(year,month,1);
  const startDow=first.getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const [asaStartMon]=weekRange(season.asa.start);
  const [,asaEndFri]=weekRange(season.asa.end);
  const regStart=parseDate(season.registration.start);
  const regEnd=parseDate(season.registration.end);
  const breaks=season.breaks.map(b=>{
    const [ms]=weekRange(b.start);
    const [,me]=weekRange(b.end);
    return [ms,me];
  });

  let html=`<div class="cal-month"><div class="cal-month-title">${MONTH_NAMES[month]} ${year}</div>`;
  html+=`<div class="cal-dow-row">${DOW_SHORT.map(d=>`<div class="cal-dow">${d.charAt(0)}</div>`).join('')}</div>`;
  html+=`<div class="cal-day-row">`;
  for(let i=0;i<startDow;i++) html+=`<div class="cal-day empty"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const cur=new Date(year,month,d);
    const dow=cur.getDay();
    const isWeekend=(dow===0||dow===6);
    const classes=['cal-day'];
    const inReg=isBetween(cur,regStart,regEnd);
    const inAsaWindow=isBetween(cur,asaStartMon,asaEndFri) && !isWeekend;
    const inBreak=breaks.some(([s,e])=>isBetween(cur,s,e)) && !isWeekend;
    if(inBreak) classes.push('noasa');
    else if(inAsaWindow) classes.push('asa');
    if(inReg) classes.push('reg');
    if(isWeekend && !inReg) classes.push('weekend');
    if(today && cur.getFullYear()===today.getFullYear() && cur.getMonth()===today.getMonth() && cur.getDate()===today.getDate()){
      classes.push('today');
    }
    html+=`<div class="${classes.join(' ')}">${d}</div>`;
  }
  html+=`</div></div>`;
  return html;
}

function computeNextRegistration(today){
  for(const s of SEASONS){
    const end=parseDate(s.registration.end);
    if(today.getTime()<=end.getTime()) return s;
  }
  return null;
}

function computeCurrentTerm(today){
  for(const s of SEASONS){
    const [asaStart]=weekRange(s.asa.start);
    const [,asaEnd]=weekRange(s.asa.end);
    if(today.getTime()<=asaEnd.getTime()) return s;
  }
  return SEASONS[SEASONS.length-1];
}

function renderSeasonCalendars(filterIds){
  const root=document.getElementById('season-calendars');
  if(!root) return;
  const today=new Date();
  const next=computeNextRegistration(today);

  if(!filterIds && root.dataset.only==='current'){
    filterIds=[computeCurrentTerm(today).id];
  }

  const banner=document.getElementById('next-reg-banner');
  if(banner){
    if(next){
      banner.hidden=false;
      const termEl=document.getElementById('nrb-term');
      const datesEl=document.getElementById('nrb-dates');
      const countEl=document.getElementById('nrb-count');
      if(termEl) termEl.textContent=`${next.emoji} ${next.label}`;
      if(datesEl) datesEl.textContent=`Registration: ${next.registration.label}`;
      const regStart=parseDate(next.registration.start);
      const regEnd=parseDate(next.registration.end);
      const msPerDay=86400000;
      const t0=new Date(today.getFullYear(),today.getMonth(),today.getDate()).getTime();
      let countText;
      if(t0<regStart.getTime()){
        const days=Math.ceil((regStart.getTime()-t0)/msPerDay);
        countText=`Opens in ${days} day${days===1?'':'s'}`;
      }else if(t0<=regEnd.getTime()){
        const days=Math.ceil((regEnd.getTime()-t0)/msPerDay);
        countText=`Open now · ${days} day${days===1?'':'s'} left`;
      }else{
        countText='Upcoming';
      }
      if(countEl) countEl.textContent=countText;
    }else{
      banner.hidden=false;
      const termEl=document.getElementById('nrb-term');
      const datesEl=document.getElementById('nrb-dates');
      const countEl=document.getElementById('nrb-count');
      if(termEl) termEl.textContent='🎉 Next year';
      if(datesEl) datesEl.textContent='All 2026–2027 registration periods have closed.';
      if(countEl) countEl.textContent='—';
    }
  }

  const seasonList=filterIds?SEASONS.filter(s=>filterIds.includes(s.id)):SEASONS;
  root.innerHTML=seasonList.map(s=>{
    const isNext=next && next.id===s.id;
    const months=s.months.map(m=>buildMonth(m.year,m.month,s,today)).join('');
    const breaksHtml=s.breaks.map(b=>`<div class="cal-fact break"><strong>No ASAs</strong>${b.label}</div>`).join('');
    return `
      <div class="cal-wrap ${isNext?'is-next':''}" id="cal-${s.id}">
        <div class="cal-head">
          <div class="cal-title">${s.emoji} ${s.label}</div>
          ${isNext?'<div class="cal-next-chip">Next Registration</div>':''}
        </div>
        <div class="cal-facts">
          <div class="cal-fact reg"><strong>Registration</strong>${s.registration.label}</div>
          <div class="cal-fact asa"><strong>ASAs Active</strong>${s.asa.label}</div>
          ${breaksHtml}
        </div>
        <div class="cal-months">${months}</div>
        <div class="cal-legend">
          <span><i class="reg"></i>Registration Period</span>
          <span><i class="asa"></i>ASAs Active</span>
          <span><i class="noasa"></i>No ASAs (Break)</span>
        </div>
      </div>`;
  }).join('');
}

/* ── FAQ accordion ── */
function initFaqAccordion(){
  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click',()=>{
      const item=q.parentElement;
      item.classList.toggle('open');
    });
  });
}

/* ── Term tabs ── */
let activeTerm='autumn';
function setTerm(term){
  if(!TERM_IDS.includes(term))return;
  activeTerm=term;
  document.querySelectorAll('.term-tab').forEach(btn=>{
    const on=btn.dataset.term===term;
    btn.classList.toggle('active',on);
    btn.setAttribute('aria-selected',on?'true':'false');
  });
  document.querySelectorAll('.term-panel').forEach(panel=>{
    const on=panel.dataset.term===term;
    panel.classList.toggle('active',on);
    if(on){panel.removeAttribute('hidden')}else{panel.setAttribute('hidden','')}
  });
}
function initTermTabs(){
  const tabsWrap=document.querySelector('.term-tabs');
  document.querySelectorAll('.term-tab').forEach(btn=>{
    btn.addEventListener('click',()=>setTerm(btn.dataset.term));
  });
  function syncTermFromHash(){
    const h=(location.hash||'').replace('#','');
    if(TERM_IDS.includes(h)){setTerm(h);return true;}
    return false;
  }
  window.addEventListener('hashchange',syncTermFromHash);
  const didHash=syncTermFromHash();
  if(!didHash && tabsWrap && tabsWrap.dataset.default==='current'){
    setTerm(computeCurrentTerm(new Date()).id);
  }
}

/* ── Directory filter ── */
let activeCat='all';
function filterDir(){
  const input=document.getElementById('dirSearch');
  const q=(input?input.value:'').toLowerCase();
  document.querySelectorAll('#dirGrid .dir-card').forEach(c=>{
    const name=c.dataset.name||'';
    const cat=c.dataset.cat||'';
    const matchSearch=!q||name.includes(q);
    const matchCat=activeCat==='all'||cat===activeCat;
    c.style.display=(matchSearch&&matchCat)?'':'none';
  });
}
function setCat(btn,cat){
  activeCat=cat;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  filterDir();
}

/* ── Day-of-week chip colouring ── */
function initDayChips(){
  document.querySelectorAll('table.asa-table td:nth-child(2)').forEach(td=>{
    const day=td.textContent.trim();
    if(DAY_CLASS[day]){
      td.innerHTML=`<span class="day-chip ${DAY_CLASS[day]}">${day}</span>`;
    }
  });
}

/* ── Activity modal ── */
function catLabel(cat){
  return{wellness:'🌿 Wellness',academic:'📚 Academic',athletic:'⚽️ Athletic',arts:'🎨 Arts'}[cat]||cat;
}
function openAct(id){
  const card=document.getElementById(id);
  if(!card){
    if(location.pathname.split('/').pop()!=='directory.html'){
      location.href='directory.html?open='+encodeURIComponent(id);
    }
    return;
  }
  const icon=card.querySelector('.dc-icon')?.textContent||'';
  const name=card.querySelector('.dc-name')?.textContent||'';
  const desc=card.querySelector('.dc-desc')?.innerHTML||'';
  const goals=card.querySelector('.dc-goals')?.textContent||'';
  const d=card.dataset;
  const feeClass=d.fee==='free'?'free':'paid';
  const feeLabel=d.fee==='free'?'Free':(d.feeLabel||'Paid');

  const chips=[
    d.cat?`<span class="act-chip">${catLabel(d.cat)}</span>`:'',
    d.grades?`<span class="act-chip">📐 ${d.grades}</span>`:'',
    d.day?d.day.split(',').map(dy=>`<span class="act-chip day-chip ${DAY_CLASS[dy.trim()]||''}">${dy.trim()}</span>`).join(''):'',
    d.cap?`<span class="act-chip">Cap: ${d.cap}</span>`:'',
    d.instructor?`<span class="act-chip">👤 ${d.instructor}</span>`:'',
  ].join('');

  const goalItems=goals.split('·').map(g=>g.replace(/^🎯\s*/,'').trim()).filter(Boolean)
    .map(g=>`<li>${g}</li>`).join('');
  const req=d.req?`<div class="act-req">📌 ${d.req}</div>`:'';
  const why=d.why?`<div class="act-why"><strong>💡 Why Join?</strong>${d.why}</div>`:'';

  const content=document.getElementById('actContent');
  const overlay=document.getElementById('actOverlay');
  if(!content||!overlay)return;
  content.innerHTML=`
    <div class="act-icon-lg">${icon}</div>
    <div class="act-modal-name">${name}</div>
    <div class="act-chips">${chips}</div>
    <div class="act-desc">${desc}</div>
    <ul class="act-goals-list">${goalItems}</ul>
    <div class="act-footer">
      <span class="act-fee ${feeClass}">💲 ${feeLabel}</span>
      ${req}
    </div>
    ${why}
  `;
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeAct(){
  const overlay=document.getElementById('actOverlay');
  if(overlay) overlay.classList.remove('open');
  document.body.style.overflow='';
}
function handleOverlayClick(e){
  const overlay=document.getElementById('actOverlay');
  if(e.target===overlay)closeAct();
}

function initDirectory(){
  document.querySelectorAll('#dirGrid .dir-card[id]').forEach(card=>{
    card.addEventListener('click',(e)=>{
      if(e.target.closest('.dir-info-btn'))return;
      openAct(card.id);
    });
  });
  document.querySelectorAll('table.asa-table tbody tr[data-act]').forEach(row=>{
    row.style.cursor='pointer';
    row.addEventListener('click',()=>openAct(row.dataset.act));
  });
}

/* ── ASA Categories reference modal (from info button) ── */
function openCatModal(){
  const overlay=document.getElementById('catOverlay');
  if(!overlay)return;
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCatModal(){
  const overlay=document.getElementById('catOverlay');
  if(overlay) overlay.classList.remove('open');
  document.body.style.overflow='';
}
function handleCatOverlayClick(e){
  const overlay=document.getElementById('catOverlay');
  if(e.target===overlay)closeCatModal();
}
function initCatInfoButtons(){
  document.querySelectorAll('.dir-info-btn').forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      e.stopPropagation();
      openCatModal();
    });
  });
}

/* ── Active nav link (multi-page) ── */
function initActivePageNav(){
  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.nav-tabs a[data-page]').forEach(a=>{
    if(a.dataset.page.toLowerCase()===page){
      a.classList.add('active-page','active');
    }
  });
}

/* ── AI Chatbot widget (placeholder) ── */
function initChatbot(){
  if(document.getElementById('chatbot-launcher'))return;
  const launcher=document.createElement('button');
  launcher.id='chatbot-launcher';
  launcher.className='chatbot-launcher no-print';
  launcher.setAttribute('aria-label','Open AI assistant');
  launcher.innerHTML='💬<span class="chatbot-dot"></span>';

  const panel=document.createElement('div');
  panel.id='chatbot-panel';
  panel.className='chatbot-panel no-print';
  panel.innerHTML=`
    <div class="chatbot-head">
      <div class="chatbot-title">🤖 AISA ASA Assistant</div>
      <button class="chatbot-close" aria-label="Close">✕</button>
    </div>
    <div class="chatbot-body" id="chatbot-body">
      <div class="chatbot-msg bot">Hi! I'm the AISA ASA Assistant. Ask me about registration, activities, fees, or schedules.</div>
    </div>
    <form class="chatbot-input-row" id="chatbot-form">
      <input type="text" id="chatbot-input" placeholder="Type a message..." autocomplete="off"/>
      <button type="submit" aria-label="Send">➤</button>
    </form>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  launcher.addEventListener('click',()=>panel.classList.toggle('open'));
  panel.querySelector('.chatbot-close').addEventListener('click',()=>panel.classList.remove('open'));

  const form=panel.querySelector('#chatbot-form');
  const input=panel.querySelector('#chatbot-input');
  const body=panel.querySelector('#chatbot-body');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=input.value.trim();
    if(!text)return;
    const u=document.createElement('div');
    u.className='chatbot-msg user';
    u.textContent=text;
    body.appendChild(u);
    input.value='';
    body.scrollTop=body.scrollHeight;
    setTimeout(()=>{
      const b=document.createElement('div');
      b.className='chatbot-msg bot';
      b.textContent="Thanks! A staff member will follow up via email. For urgent questions, call +971 2 444 4333.";
      body.appendChild(b);
      body.scrollTop=body.scrollHeight;
    },600);
  });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded',()=>{
  renderSeasonCalendars();
  initFaqAccordion();
  initTermTabs();
  initDayChips();
  initDirectory();
  initCatInfoButtons();
  initActivePageNav();
  initChatbot();
  const params=new URLSearchParams(location.search);
  const openId=params.get('open');
  if(openId) setTimeout(()=>openAct(openId),50);
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeAct();closeCatModal();}
});
