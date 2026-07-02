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
    noasaDays:[
      { date:'2026-10-19', label:'Oct. 19 – Professional Development (No School for Students)' },
      { date:'2026-10-20', label:'Oct. 20 – Professional Development (No School for Students)' },
      { date:'2026-11-09', label:'Nov. 9 – Parent-Teacher Conferences' }
    ],
    comms:[
      { date:'2026-09-09', type:'pre', label:'Pre-Communication — Sep. 9, 2026' },
      { date:'2026-10-07', type:'mid', label:'Mid-Term Communication — Oct. 7, 2026' },
      { date:'2026-11-12', type:'end', label:'End-of-Season Communication — Nov. 12, 2026' }
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
    comms:[
      { date:'2026-11-18', type:'pre', label:'Pre-Communication — Nov. 18, 2026' },
      { date:'2027-01-13', type:'mid', label:'Mid-Term Communication — Jan. 13, 2027' },
      { date:'2027-02-04', type:'end', label:'End-of-Season Communication — Feb. 4, 2027' }
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
    noasaDays:[
      { date:'2027-03-15', label:'Mar. 15 – Professional Development (No School for Students)' },
      { date:'2027-05-03', label:'May 3 – Parent-Teacher Conferences' }
    ],
    comms:[
      { date:'2027-03-17', type:'pre', label:'Pre-Communication — Mar. 17, 2027' },
      { date:'2027-04-14', type:'mid', label:'Mid-Term Communication — Apr. 14, 2027' },
      { date:'2027-05-13', type:'end', label:'End-of-Season Communication — May 13, 2027' }
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
const DAY_ORDER={'Monday':0,'Tuesday':1,'Wednesday':2,'Thursday':3,'Friday':4};

/* ── Translations — shared UI strings ── */
const TRANSLATIONS = {
  en: {
    /* nav */
    nav_welcome:   'Welcome',
    nav_about:     'Register & Calendars',
    nav_terms:     'Current Term',
    nav_directory: 'Directory',
    nav_faqs:      'FAQs',
    /* topbar */
    save_pdf:  '🖨️ Save as PDF',
    lang_btn:  'العربية',
    /* footer */
    footer_tagline: 'Explore. Create. Grow.',
    footer_invite:  'We invite every student to take part in the ASA program — to discover new interests, build lasting relationships, and continue their journey as confident, capable, and caring AISA Lions.',
    footer_copy:    'American International School Abu Dhabi · ASA Program 2026–2027',
    /* chatbot */
    chatbot_title:       'Leo — ASA Assistant',
    chatbot_greeting:    "Hi! I'm Leo, your AISA ASA guide 🦁 Ask me about registration, activities, fees, no-ASA days, or schedules!",
    chatbot_placeholder: 'Ask Leo…',
    chatbot_reply:       'Thanks! A staff member will follow up via email. For urgent questions, call +971 2 444 4333.',
    /* next-reg banner */
    nrb_label: 'Next Registration Period',

    /* ── index.html ── */
    hero_badge_index:   '2026 – 2027 Academic Year',
    hero_h1_index:      'After School<br/><span>Activities</span>',
    hero_sub_index:     'American International School Abu Dhabi — expanding learning through passion, creativity, and movement.',
    pill_wellness:      '🌿 Reflective & Wellness',
    pill_academic:      '📚 Academics & Enrichment',
    pill_athletic:      '⚽️ Athletics & Movement',
    pill_arts:          '🎨 Arts & Creativity',
    welcome_badge:      'Welcome',
    welcome_h2:         'Welcome to AISA<br/><span>After School Activities</span>',
    welcome_p1:         'At the American International School Abu Dhabi, learning does not end when the school day finishes — it expands, deepens, and comes alive through our After School Activities (ASA) program.',
    welcome_p2:         'Our ASAs are a natural extension of our mission: <strong>Developing resilient learners and compassionate leaders for a dynamic world.</strong>',
    welcome_p3:         'Each activity — whether athletic, creative, academic, or reflective — is intentionally designed to provide students with opportunities to explore their passions, challenge themselves, and grow as individuals within a supportive community.',
    card_lion_title:    'The AISA Lion Way',
    card_lion_desc:     'Be Responsible. Be Safe. Be Respectful. Be Kind.',
    card_learn_title:   'Learning Beyond the Classroom',
    card_learn_desc:    'Academic growth, creative expression, physical development & well-being.',
    card_comm_title:    'A Community of Belonging',
    card_comm_desc:     'Students build friendships, develop empathy & strengthen their sense of belonging.',
    card_globe_title:   'Growing Global Citizens',
    card_globe_desc:    'Collaboration, leadership & intercultural understanding prepare students for the world.',
    staff_heading:      'Athletics & Activities Leadership',
    cat_h2:             'Categories of <span>ASAs</span>',
    cat_sub:            'Four categories cover the breadth of the ASA program. Every activity in the directory belongs to one of these.',
    cat_wellness_name:  'Reflective & Wellness',
    cat_wellness_desc:  'Nurturing balance, mindfulness, and well-being through activities that support a healthy body and mind.',
    cat_wellness_eg:    'Examples: Sustainability Club, Greenhouse Care, Quran Club, Peace Leaders',
    cat_academic_name:  'Academics & Enrichment',
    cat_academic_desc:  'Extending learning beyond the classroom by building knowledge, curiosity, and critical thinking skills.',
    cat_academic_eg:    'Examples: STEM Club, Number Ninjas, Robotics & Coding, IB English Study Hall',
    cat_athletic_name:  'Athletics & Movement',
    cat_athletic_desc:  'Promoting physical fitness, teamwork, and resilience through active and engaging movement experiences.',
    cat_athletic_eg:    'Examples: PASS Football, Zumba, Learn To Swim, CUBS Sports',
    cat_arts_name:      'Arts & Creativity',
    cat_arts_desc:      'Inspiring imagination and self-expression through artistic exploration, design, and creative thinking.',
    cat_arts_eg:        'Examples: Creative Writing, DIY Club, Ballet, Guitar Lessons',

    /* ── about-asas.html ── */
    hero_badge_about:   'About the ASA Program',
    hero_h1_about:      'Registration <span>& Calendar</span>',
    hero_sub_about:     'Everything you need to know about the step-by-step registration process and the full yearly ASA calendar.',
    proc_h2:            'Registration <span>Process</span>',
    proc_sub:           'Follow the steps below to register your child for an ASA. Times differ slightly between Elementary and Secondary programs.',
    elem_heading:       '🏫 Elementary Process',
    sec_heading:        '🏫 Secondary Process',
    step1_title:        'End of School Day',     step1_desc:  'School finishes at 14:50.',
    step2_title:        'ASA Meet-Up',
    step2_elem_desc:    'Students with an ASA will meet their instructor in the following locations:<br>KG2–Gr2: Lower Mini-Pitch<br>Gr3–Gr5: Upper Mini-Pitch',
    step2_sec_desc:     'Secondary students head to their assigned ASA location (HS Library, Homeroom, Greenhouse, Soccer Field, etc.)',
    step3_title:        'Attendance',            step3_desc:  'Attendance completed on Mograsys by ASA Instructor.',
    step4_title:        'ASA Timing',            step4_desc:  '15:00–16:00 — Students will be in their ASAs!',
    step5_title:        'Dismissal & Pick-Up',   step5_desc:  'Dismissed at 16:00 from their ASA. Pick-up at Gate 4. Please be prompt!',
    warning_schedule:   'Please note that all schedules are subject to change based on decisions made by the UAE Government, ADEK (Abu Dhabi Department of Education and Knowledge), and the School Administration.',
    cal_h2:             '📅 Yearly <span>Calendar</span>',
    cal_sub:            'All ASA terms and registration windows for the 2026–2027 academic year. The next registration period is highlighted in orange.',

    /* ── terms.html ── */
    hero_badge_terms:   'Term Specifics',
    hero_h1_terms:      'Current <span>Term</span>',
    hero_sub_terms:     'The calendar for this term, followed by the full list of activities available during this timeframe.',
    term_cal_h2:        '📅 Current Term <span>Calendar</span>',
    term_cal_sub:       'The active term\'s calendar with registration window, active ASA weeks, and school breaks highlighted.',
    term_sched_h2:      '📋 Current Term <span>Schedule</span>',
    term_sched_sub:     'Click any row to open the full activity details.',

    /* ── directory.html ── */
    hero_badge_dir:     'ASA Directory',
    hero_h1_dir:        'Activity <span>Directory</span>',
    hero_sub_dir:       'Every ASA, searchable and filterable. Tap the <strong>ⓘ</strong> button on any card to view the ASA Categories reference.',
    dir_h2:             '📋 Activity <span>Directory</span>',
    dir_sub:            'Detailed descriptions for each ASA. Use the search and filter buttons to find the perfect activity, or tap ⓘ on any card to see the ASA Categories reference.',
    dir_search:         '🔍 Search activities…',
    filter_all:         'All',
    filter_wellness:    '🌿 Wellness',
    filter_academic:    '📚 Academic',
    filter_athletic:    '⚽ Athletic',
    filter_arts:        '🎨 Arts',

    /* ── faqs.html ── */
    hero_badge_faqs:    'Themed Support',
    hero_h1_faqs:       'Frequently Asked <span>Questions</span>',
    hero_sub_faqs:      'Answers organised by theme — Payments, Transportation, Scheduling, Requirements, Communication, and Safety.',
    faq_h2:             '❓ FAQs by <span>Theme</span>',
    faq_sub:            'Tap any question to reveal the answer. Still need help? Reach us at <a href="mailto:activities@aisa.sch.ae" style="color:var(--blue);font-weight:700">activities@aisa.sch.ae</a>.',
    faq_pay_title:      'Payments & Fees',
    faq_pay_sub:        'Costs, free activities, and material fees.',
    faq_pay_q1:         'Are there fees involved when joining an activity?',
    faq_pay_a1:         'Some activities require full payment upon registration. Certain activities may collect a partial fee to cover materials. A range of free activities is also available; however, registration is still required. Detailed instructions will be shared in the Welcome Letter from the activity coordinator.',
    faq_trans_title:    'Transportation & Pick-Up',
    faq_trans_sub:      'Off-campus activities and end-of-session pick-up.',
    faq_trans_q1:       'Is transportation provided for off-campus activities?',
    faq_trans_a1:       'Transportation is available for selected off-campus activities (e.g., bowling, equestrian club, Cubs sports). Parents/guardians are kindly asked to collect their children from AISA campus after the activity.',
    faq_sched_title:    'Scheduling & Duration',
    faq_sched_sub:      'Registration, session length, and cancellations.',
    faq_sched_q1:       'How can my child join an activity?',
    faq_sched_a1:       'Please scan the QR code provided or follow the link shared via email. You may select activities based on your child\'s grade-level offerings.',
    faq_sched_q2:       'How long does an activity run?',
    faq_sched_a2:       'Most activities are scheduled to last for approximately 8 weeks. Any changes will be communicated in advance through email.',
    faq_sched_q3:       'What happens if activities are canceled or postponed?',
    faq_sched_a3:       'Any changes or cancellations will be communicated to your registered email address as early as possible. Adjustments may occur due to operational needs or external factors.',
    faq_req_title:      'Requirements & Preparation',
    faq_req_sub:        'What to bring and what parents should do.',
    faq_req_q1:         'What should my child bring or prepare for each session?',
    faq_req_a1:         'Any specific requirements will be shared ahead of time by the activity coordinator via email to ensure students are well-prepared.',
    faq_req_q2:         'What are the expectations for parents and guardians?',
    faq_req_a2:         'Parents and guardians are kindly requested to:<br/>• Notify the activity coordinator in advance if their child will be absent.<br/>• Ensure timely collection of their child at the conclusion of each session (typically one hour after school dismissal).<br/>• Prepare any necessary requirements prior to their child\'s participation.',
    faq_comm_title:     'Communication & Updates',
    faq_comm_sub:       'How we notify you and how to raise concerns.',
    faq_comm_q1:        'What should I do if my child cannot attend a session?',
    faq_comm_a1:        'Notify the school and your child\'s teacher via email or by calling the school.<br/><br/>📧 Elementary: <a href="mailto:attendance@aisa.sch.ae">attendance@aisa.sch.ae</a><br/>📧 Secondary: <a href="mailto:secondaryattendance@aisa.sch.ae">secondaryattendance@aisa.sch.ae</a><br/>📞 <a href="tel:+97124444333">+971 2 4444 333</a> (Elementary and Secondary)',
    faq_comm_q2:        'How will I receive updates about schedules and events?',
    faq_comm_a2:        'Updates and any changes will be shared via email through Mograsys by the staff leading the activity.',
    faq_comm_q3:        'Will I be notified about my child\'s attendance?',
    faq_comm_a3:        'Yes, you will receive email notifications confirming whether your child has attended or missed a session.',
    faq_comm_q4:        'What is the process for raising concerns or providing feedback?',
    faq_comm_a4:        'We prioritize open communication and invite parents to share any concerns or feedback through our official school email channels. Please direct your concerns or feedback to the Athletics and Activities department.',
    faq_safe_title:     'Safety & Well-Being',
    faq_safe_sub:       'Supervision, vetting, and student benefits.',
    faq_safe_q1:        'How are student safety and well-being ensured?',
    faq_safe_a1:        'AISA has implemented the following measures:<br/>• A maximum ratio of 15 students per supervising adult<br/>• All activity personnel are thoroughly vetted and approved as per ADEK requirements<br/>• Staff members are trained in health and safety protocols<br/>• On-site school nurses are available to provide support<br/>• Upon successful allocation, parents must provide acknowledgment of consent prior to a student participating.',
    faq_safe_q2:        'How does participation benefit my child?',
    faq_safe_a2:        'Participation in activities supports students in developing confidence, teamwork, and a strong sense of responsibility. It also encourages positive social interaction, builds resilience, and helps students discover and grow their individual interests in a supportive environment.',
  },
  ar: {
    /* nav */
    nav_welcome:   'الرئيسية',
    nav_about:     'التسجيل والتقاويم',
    nav_terms:     'الفصل الحالي',
    nav_directory: 'الدليل',
    nav_faqs:      'الأسئلة الشائعة',
    /* topbar */
    save_pdf:  '🖨️ حفظ كـ PDF',
    lang_btn:  'English',
    /* footer */
    footer_tagline: 'استكشف. ابتكر. انمُ.',
    footer_invite:  'ندعو كل طالب للمشاركة في برنامج الأنشطة — لاستكشاف اهتمامات جديدة وبناء علاقات دائمة ومواصلة رحلته كأسد أيسا واثق وقادر ومُهتم.',
    footer_copy:    'المدرسة الدولية الأمريكية أبوظبي · برنامج الأنشطة 2026–2027',
    /* chatbot */
    chatbot_title:       'ليو — مساعد الأنشطة',
    chatbot_greeting:    'مرحباً! أنا ليو، مرشدك لأنشطة أيسا 🦁 اسألني عن التسجيل والأنشطة والرسوم وأيام بدون أنشطة أو الجداول!',
    chatbot_placeholder: 'اسأل ليو…',
    chatbot_reply:       'شكراً! سيتابع معك أحد أعضاء الفريق عبر البريد الإلكتروني. للاستفسارات العاجلة اتصل على: 4333 444 2 971+.',
    /* next-reg banner */
    nrb_label: 'فترة التسجيل التالية',

    /* ── index.html ── */
    hero_badge_index:   'العام الدراسي 2026 – 2027',
    hero_h1_index:      'الأنشطة<br/><span>بعد المدرسة</span>',
    hero_sub_index:     'المدرسة الدولية الأمريكية أبوظبي — توسيع آفاق التعلم من خلال الشغف والإبداع والحركة.',
    pill_wellness:      '🌿 الانعكاس والصحة',
    pill_academic:      '📚 الدراسة والإثراء',
    pill_athletic:      '⚽️ الرياضة والحركة',
    pill_arts:          '🎨 الفنون والإبداع',
    welcome_badge:      'مرحباً',
    welcome_h2:         'مرحباً بكم في أيسا<br/><span>الأنشطة بعد المدرسة</span>',
    welcome_p1:         'في المدرسة الدولية الأمريكية أبوظبي، لا ينتهي التعلم مع انتهاء يوم الدراسة — بل يتوسع ويتعمق وينبض بالحياة من خلال برنامج الأنشطة بعد المدرسة.',
    welcome_p2:         'تُمثّل أنشطتنا امتداداً طبيعياً لرسالتنا: <strong>تنمية متعلمين مرنين وقادة متعاطفين لعالم ديناميكي.</strong>',
    welcome_p3:         'كل نشاط — سواء كان رياضياً أو إبداعياً أو أكاديمياً أو تأملياً — مُصمَّم بشكل مقصود لمنح الطلاب فرصاً لاستكشاف شغفهم وتحدي أنفسهم والنمو كأفراد ضمن مجتمع داعم.',
    card_lion_title:    'طريقة أسد أيسا',
    card_lion_desc:     'كن مسؤولاً. كن آمناً. كن محترماً. كن لطيفاً.',
    card_learn_title:   'التعلم خارج الفصل الدراسي',
    card_learn_desc:    'النمو الأكاديمي والتعبير الإبداعي والتطور البدني والرفاهية.',
    card_comm_title:    'مجتمع الانتماء',
    card_comm_desc:     'يبني الطلاب الصداقات ويطوّرون التعاطف ويُعزّزون إحساسهم بالانتماء.',
    card_globe_title:   'تنشئة مواطنين عالميين',
    card_globe_desc:    'التعاون والقيادة والتفاهم بين الثقافات تُعدّ الطلاب لعالم متغير.',
    staff_heading:      'قيادة قسم الرياضة والأنشطة',
    cat_h2:             'فئات <span>الأنشطة</span>',
    cat_sub:            'تغطي أربع فئات نطاق برنامج الأنشطة. كل نشاط في الدليل ينتمي إلى إحداها.',
    cat_wellness_name:  'الانعكاس والصحة',
    cat_wellness_desc:  'تعزيز التوازن واليقظة الذهنية والرفاهية من خلال أنشطة تدعم الجسم والعقل.',
    cat_wellness_eg:    'أمثلة: نادي الاستدامة، رعاية البيت الزجاجي، نادي القرآن، قادة السلام',
    cat_academic_name:  'الدراسة والإثراء',
    cat_academic_desc:  'توسيع التعلم خارج الفصل الدراسي من خلال بناء المعرفة والفضول ومهارات التفكير النقدي.',
    cat_academic_eg:    'أمثلة: نادي العلوم والتقنية، عباقرة الأرقام، الروبوتات والبرمجة، قاعة دراسة اللغة الإنجليزية IB',
    cat_athletic_name:  'الرياضة والحركة',
    cat_athletic_desc:  'تعزيز اللياقة البدنية والعمل الجماعي والمرونة من خلال تجارب حركية نشطة وجذابة.',
    cat_athletic_eg:    'أمثلة: كرة قدم PASS، الزومبا، تعلم السباحة، رياضة CUBS',
    cat_arts_name:      'الفنون والإبداع',
    cat_arts_desc:      'إلهام الخيال والتعبير الذاتي من خلال الاستكشاف الفني والتصميم والتفكير الإبداعي.',
    cat_arts_eg:        'أمثلة: الكتابة الإبداعية، نادي اصنع بنفسك، الباليه، دروس الغيتار',

    /* ── about-asas.html ── */
    hero_badge_about:   'حول برنامج الأنشطة',
    hero_h1_about:      'التسجيل <span>والتقويم</span>',
    hero_sub_about:     'كل ما تحتاج معرفته حول عملية التسجيل خطوة بخطوة والتقويم السنوي الكامل لبرنامج الأنشطة.',
    proc_h2:            'عملية <span>التسجيل</span>',
    proc_sub:           'اتبع الخطوات التالية لتسجيل طفلك في أحد الأنشطة. تختلف الأوقات قليلاً بين برنامجَي الابتدائية والثانوية.',
    elem_heading:       '🏫 مراحل الابتدائية',
    sec_heading:        '🏫 مراحل الثانوية',
    step1_title:        'نهاية يوم الدراسة',             step1_desc:  'تنتهي الدراسة في الساعة 14:50.',
    step2_title:        'نقطة التجمع',
    step2_elem_desc:    'سيلتقي الطلاب المسجّلون في نشاط ASA بمدرّبهم في الأماكن التالية:<br>KG2–G2: الملعب الصغير السفلي<br>G3–G5: الملعب الصغير العلوي',
    step2_sec_desc:     'يتوجّه طلاب الثانوية إلى موقع النشاط المخصَّص لهم (مكتبة الثانوية، الفصل، البيت الزجاجي، ملعب كرة القدم، إلخ).',
    step3_title:        'تسجيل الحضور',                  step3_desc:  'يُسجِّل مدرِّب النشاط الحضور عبر نظام Mograsys.',
    step4_title:        'توقيت النشاط',                  step4_desc:  '15:00–16:00 — يكون الطلاب منخرطين في أنشطتهم!',
    step5_title:        'الانصراف والاستقبال',           step5_desc:  'الانصراف في الساعة 16:00 من موقع النشاط. الاستقبال عند البوابة 4. يُرجى الحضور في الوقت المحدد!',
    warning_schedule:   'يُرجى ملاحظة أن جميع الجداول قابلة للتغيير بناءً على قرارات حكومة الإمارات العربية المتحدة ودائرة التعليم والمعرفة في أبوظبي (أدك) وإدارة المدرسة.',
    cal_h2:             '📅 التقويم <span>السنوي</span>',
    cal_sub:            'جميع فصول الأنشطة ونوافذ التسجيل للعام الدراسي 2026–2027. فترة التسجيل التالية مُبرَزة باللون البرتقالي.',

    /* ── terms.html ── */
    hero_badge_terms:   'تفاصيل الفصل',
    hero_h1_terms:      'الفصل <span>الحالي</span>',
    hero_sub_terms:     'تقويم هذا الفصل، يليه القائمة الكاملة للأنشطة المتاحة خلال هذه الفترة.',
    term_cal_h2:        '📅 تقويم <span>الفصل الحالي</span>',
    term_cal_sub:       'تقويم الفصل النشط مع نافذة التسجيل وأسابيع الأنشطة النشطة والعطلات المدرسية مُبرَزة.',
    term_sched_h2:      '📋 جدول <span>الفصل الحالي</span>',
    term_sched_sub:     'انقر على أي صف لفتح تفاصيل النشاط الكاملة.',

    /* ── directory.html ── */
    hero_badge_dir:     'دليل الأنشطة',
    hero_h1_dir:        'دليل <span>الأنشطة</span>',
    hero_sub_dir:       'كل الأنشطة قابلة للبحث والتصفية. اضغط زر <strong>ⓘ</strong> على أي بطاقة لعرض مرجع فئات الأنشطة.',
    dir_h2:             '📋 دليل <span>الأنشطة</span>',
    dir_sub:            'أوصاف مُفصَّلة لكل نشاط. استخدم أزرار البحث والتصفية للعثور على النشاط المناسب، أو اضغط ⓘ على أي بطاقة لعرض مرجع فئات الأنشطة.',
    dir_search:         '🔍 ابحث عن نشاط…',
    filter_all:         'الكل',
    filter_wellness:    '🌿 الصحة',
    filter_academic:    '📚 الدراسة',
    filter_athletic:    '⚽ الرياضة',
    filter_arts:        '🎨 الفنون',

    /* ── faqs.html ── */
    hero_badge_faqs:    'دعم منظَّم حسب الموضوع',
    hero_h1_faqs:       'الأسئلة <span>الشائعة</span>',
    hero_sub_faqs:      'إجابات مُنظَّمة حسب المواضيع — المدفوعات والمواصلات والجداول والمتطلبات والتواصل والسلامة.',
    faq_h2:             '❓ الأسئلة الشائعة حسب <span>الموضوع</span>',
    faq_sub:            'اضغط على أي سؤال لعرض الإجابة. لا تزال بحاجة إلى مساعدة؟ تواصل معنا على <a href="mailto:activities@aisa.sch.ae" style="color:var(--blue);font-weight:700">activities@aisa.sch.ae</a>.',

    faq_pay_title:      'المدفوعات والرسوم',
    faq_pay_sub:        'التكاليف والأنشطة المجانية ورسوم المواد.',
    faq_pay_q1:         'هل هناك رسوم للانضمام إلى نشاط؟',
    faq_pay_a1:         'تتطلب بعض الأنشطة دفعاً كاملاً عند التسجيل. وقد تتطلب أنشطة معينة رسوماً جزئية لتغطية المواد. كما تتوفر مجموعة من الأنشطة المجانية؛ غير أنه لا يزال من الضروري التسجيل فيها. وستُشارَك التعليمات التفصيلية في رسالة الترحيب من منسِّق النشاط.',

    faq_trans_title:    'المواصلات والاستقبال',
    faq_trans_sub:      'الأنشطة خارج الحرم المدرسي والاستقبال بعد انتهاء النشاط.',
    faq_trans_q1:       'هل تتوفر المواصلات للأنشطة خارج الحرم المدرسي؟',
    faq_trans_a1:       'المواصلات متوفرة لأنشطة مُختارة خارج الحرم المدرسي (مثل البولينغ ونادي الفروسية ورياضة Cubs). يُرجى من أولياء الأمور/الأوصياء اصطحاب أبنائهم من حرم أيسا بعد انتهاء النشاط.',

    faq_sched_title:    'الجدولة والمدة',
    faq_sched_sub:      'التسجيل ومدة الجلسة وحالات الإلغاء.',
    faq_sched_q1:       'كيف يمكن لطفلي الانضمام إلى نشاط؟',
    faq_sched_a1:       'يُرجى مسح رمز QR المُقدَّم أو اتباع الرابط المُشارَك عبر البريد الإلكتروني. يمكنك اختيار الأنشطة بناءً على العروض المتاحة للصف الدراسي لطفلك.',
    faq_sched_q2:       'ما مدة النشاط؟',
    faq_sched_a2:       'تستمر معظم الأنشطة لمدة 8 أسابيع تقريباً. وسيتم إبلاغكم بأي تغييرات مسبقاً عبر البريد الإلكتروني.',
    faq_sched_q3:       'ماذا يحدث إذا تم إلغاء الأنشطة أو تأجيلها؟',
    faq_sched_a3:       'سيتم إبلاغكم بأي تغييرات أو إلغاءات عبر عنوان بريدكم الإلكتروني المُسجَّل في أقرب وقت ممكن. قد تحدث تعديلات بسبب الاحتياجات التشغيلية أو العوامل الخارجية.',

    faq_req_title:      'المتطلبات والاستعداد',
    faq_req_sub:        'ما يجب إحضاره وما يجب على الوالدين القيام به.',
    faq_req_q1:         'ماذا يجب أن يُحضِر طفلي أو يُحضِّر لكل جلسة؟',
    faq_req_a1:         'سيتم مشاركة أي متطلبات محددة مسبقاً من قِبل منسِّق النشاط عبر البريد الإلكتروني لضمان استعداد الطلاب جيداً.',
    faq_req_q2:         'ما هي التوقعات من أولياء الأمور والأوصياء؟',
    faq_req_a2:         'يُرجى من أولياء الأمور والأوصياء التكرم بما يلي:<br/>• إبلاغ منسِّق النشاط مسبقاً في حال غياب طفلهم.<br/>• ضمان استقبال طفلهم في الوقت المحدد عند انتهاء كل جلسة (عادةً بعد ساعة من انصراف المدرسة).<br/>• إعداد أي متطلبات ضرورية قبل مشاركة طفلهم.',

    faq_comm_title:     'التواصل والتحديثات',
    faq_comm_sub:       'كيف نُبلغكم وكيفية إبداء الملاحظات.',
    faq_comm_q1:        'ماذا أفعل إذا لم يتمكن طفلي من حضور جلسة؟',
    faq_comm_a1:        'يُرجى إبلاغ المدرسة ومُعلِّم طفلك عبر البريد الإلكتروني أو بالاتصال بالمدرسة.<br/><br/>📧 الابتدائية: <a href="mailto:attendance@aisa.sch.ae">attendance@aisa.sch.ae</a><br/>📧 الثانوية: <a href="mailto:secondaryattendance@aisa.sch.ae">secondaryattendance@aisa.sch.ae</a><br/>📞 <a href="tel:+97124444333">+971 2 4444 333</a> (الابتدائية والثانوية)',
    faq_comm_q2:        'كيف سأتلقى التحديثات حول الجداول والفعاليات؟',
    faq_comm_a2:        'ستتم مشاركة التحديثات وأي تغييرات عبر البريد الإلكتروني من خلال نظام Mograsys بواسطة الفريق الذي يقود النشاط.',
    faq_comm_q3:        'هل سأُخطَر بحضور طفلي؟',
    faq_comm_a3:        'نعم، ستصلك إشعارات بالبريد الإلكتروني تؤكد ما إذا حضر طفلك الجلسة أم غاب عنها.',
    faq_comm_q4:        'ما إجراءات إبداء المخاوف أو تقديم الملاحظات؟',
    faq_comm_a4:        'نحرص على التواصل المفتوح وندعو الآباء لمشاركة أي مخاوف أو ملاحظات عبر قنوات البريد الإلكتروني الرسمية للمدرسة. يُرجى توجيه المخاوف أو الملاحظات إلى قسم الرياضة والأنشطة.',

    faq_safe_title:     'السلامة والرفاهية',
    faq_safe_sub:       'الإشراف والتحقق ومنافع الطلاب.',
    faq_safe_q1:        'كيف يتم ضمان سلامة الطلاب ورفاهيتهم؟',
    faq_safe_a1:        'نفّذت أيسا التدابير التالية:<br/>• نسبة قصوى 15 طالباً لكل بالغ مُشرف<br/>• تم التحقق من جميع موظفي الأنشطة واعتمادهم وفقاً لمتطلبات دائرة التعليم والمعرفة (أدك)<br/>• تم تدريب الموظفين على بروتوكولات الصحة والسلامة<br/>• يتوفر ممرضو مدرسة في الموقع لتقديم الدعم<br/>• عند التخصيص الناجح، يجب على الآباء تقديم إقرار الموافقة قبل مشاركة الطالب.',
    faq_safe_q2:        'كيف تفيد المشاركة طفلي؟',
    faq_safe_a2:        'تدعم المشاركة في الأنشطة الطلاب في تطوير الثقة والعمل الجماعي وحس المسؤولية القوي. كما تُشجِّع التفاعل الاجتماعي الإيجابي وتبني المرونة وتساعد الطلاب على اكتشاف وتنمية اهتماماتهم الفردية في بيئة داعمة.',
  }
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
  const noasaDates=(season.noasaDays||[]).map(nd=>parseDate(nd.date));

  let html=`<div class="cal-month"><div class="cal-month-title">${MONTH_NAMES[month]} ${year}</div>`;
  html+=`<div class="cal-dow-row">${DOW_SHORT.map(d=>`<div class="cal-dow">${d.charAt(0)}</div>`).join('')}</div>`;
  html+=`<div class="cal-day-row">`;
  for(let i=0;i<startDow;i++) html+=`<div class="cal-day empty"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const cur=new Date(year,month,d);
    const dow=cur.getDay();
    const isWeekend=(dow===0||dow===5||dow===6); // Sun=0, Fri=5, Sat=6
    const classes=['cal-day'];
    const inReg=isBetween(cur,regStart,regEnd);
    const inAsaWindow=isBetween(cur,asaStartMon,asaEndFri) && !isWeekend;
    const inBreak=breaks.some(([s,e])=>isBetween(cur,s,e)) && !isWeekend;
    const isNoasaDay=noasaDates.some(nd=>nd.getFullYear()===year&&nd.getMonth()===month&&nd.getDate()===d)&&!isWeekend;
    const commMatch=(season.comms||[]).find(c=>{
      const cd=parseDate(c.date);
      return cd.getFullYear()===year&&cd.getMonth()===month&&cd.getDate()===d;
    });
    if(inBreak||isNoasaDay) classes.push('noasa');
    else if(inAsaWindow) classes.push('asa');
    if(inReg) classes.push('reg');
    if(isWeekend && !inReg) classes.push('weekend');
    if(commMatch) classes.push('comm','comm-'+commMatch.type);
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
    const breaksHtml=s.breaks.map(b=>`<div class="cal-fact break"><strong>No ASAs</strong> ${b.label}</div>`).join('');
    const noasaDaysHtml=(s.noasaDays||[]).map(nd=>`<div class="cal-fact break"><strong>No ASAs</strong> ${nd.label}</div>`).join('');
    const COMM_LABELS={pre:'Pre-Communication',mid:'Mid-Term Communication',end:'End-of-Season Communication'};
    const commsHtml=(s.comms||[]).map(c=>`<div class="cal-fact comm"><strong>${COMM_LABELS[c.type]||c.type}</strong>${c.label}</div>`).join('');
    return `
      <div class="cal-wrap ${isNext?'is-next':''}" id="cal-${s.id}">
        <div class="cal-head">
          <div class="cal-title">${s.emoji} ${s.label}</div>
          ${isNext?'<div class="cal-next-chip">Next Registration</div>':''}
        </div>
        <div class="cal-facts">
          <div class="cal-fact reg"><strong>Registration</strong> ${s.registration.label}</div>
          <div class="cal-fact asa"><strong>ASAs Active</strong> ${s.asa.label}</div>
          ${breaksHtml}
          ${noasaDaysHtml}
          ${commsHtml}
        </div>
        <div class="cal-months">${months}</div>
        <div class="cal-legend">
          <span><i class="reg"></i>Registration Period</span>
          <span><i class="asa"></i>ASAs Active</span>
          <span><i class="noasa"></i>No ASAs (Break)</span>
          <span><i class="comm"></i>Instructor Communication</span>
        </div>
      </div>`;
  }).join('');
}

/* ── Language (i18n) ── */
let currentLang = 'en';

function applyTranslations(lang){
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key = el.getAttribute('data-i18n-html');
    if(dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(dict[key] != null) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{
    const key = el.getAttribute('data-i18n-aria-label');
    if(dict[key] != null) el.setAttribute('aria-label', dict[key]);
  });
}

function setLanguage(lang){
  if(!TRANSLATIONS[lang]) lang = 'en';
  currentLang = lang;
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-ar', lang === 'ar');
  applyTranslations(lang);
  try{ localStorage.setItem('asa_lang', lang); }catch(_e){}
  // Update toggle button label
  const btn = document.getElementById('lang-toggle');
  if(btn){
    const dict = TRANSLATIONS[lang];
    if(dict && dict.lang_btn) btn.textContent = dict.lang_btn;
  }
  // Refresh chatbot dynamic content if it exists
  const greeting = document.querySelector('#chatbot-body .chatbot-msg.bot.greeting');
  if(greeting && TRANSLATIONS[lang].chatbot_greeting){
    greeting.textContent = TRANSLATIONS[lang].chatbot_greeting;
  }
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

/* ── Activity data store (used by openAct when cards aren't in the current page DOM) ── */
const ACT_STORE={
  /* ACADEMIC */
  'act-chess-club-ms':{icon:'♟️',name:'Chess Club',cat:'academic',grades:'G6–G12',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students develop strategic thinking and compete in friendly matches while learning new tactics and improving their gameplay. Beginner to advanced players welcome.',
    goals:'🎯 Improve Strategic Thinking · Build Focus · Develop Planning Skills',
    why:'Think ahead and master the game!'},
  'act-creative-writing':{icon:'📖',name:'Creative Writing Club',cat:'academic',grades:'G3–G5',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students develop writing skills through storytelling, poetry, and creative exercises. Encourages imagination and builds confidence in written expression.',
    goals:'🎯 Improve Writing Skills · Develop Creativity · Build Confidence in Storytelling',
    why:'Share your stories and find your voice!'},
  'act-ib-stem':{icon:'🔬',name:'IB STEM Support Club',cat:'academic',grades:'G9–G12',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students receive targeted support in STEM subjects, helping them understand complex concepts and succeed in their coursework.',
    goals:'🎯 Strengthen STEM Understanding · Improve Academic Performance · Build Confidence',
    why:'Get support to succeed in challenging subjects!'},
  'act-ibdp-business':{icon:'📊',name:'IBDP Business Management',cat:'academic',grades:'G11–G12',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students deepen their understanding of business concepts and prepare for IB assessments through discussion, case studies, and guided support.',
    goals:'🎯 Strengthen Business Knowledge · Prepare for IB Assessments · Develop Analytical Thinking',
    why:'Excel in your business studies!'},
  'act-intro-chess':{icon:'♟️',name:'Intro to Chess',cat:'academic',grades:'KG2–G5',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students discover the fundamentals of chess in a fun and welcoming environment. Perfect for beginners learning the pieces, rules, and basic strategies.',
    goals:'🎯 Learn Chess Fundamentals · Develop Strategic Thinking · Build Patience & Focus',
    why:"A perfect introduction to the world's greatest strategy game!"},
  'act-lego-club':{icon:'🧱',name:'LEGO Club',cat:'academic',grades:'KG2–G2',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students use LEGO bricks to build, design, and engineer imaginative creations. Develops spatial thinking, creativity, and collaborative problem-solving in a hands-on environment.',
    goals:'🎯 Develop Spatial Thinking · Encourage Creativity · Build Collaborative Skills',
    why:'Build your imagination one brick at a time!'},
  'act-number-ninjas':{icon:'➕',name:'Number Ninjas Club',cat:'academic',grades:'G3–G5',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Sharpen math skills through fun games, puzzles, and challenges. Students build confidence while exploring problem-solving in exciting new ways.',
    goals:'🎯 Strengthen Math Fluency · Develop Problem-Solving · Build Confidence in Mathematics',
    why:'Become a math champion in a fun, game-based setting!'},
  'act-read-aloud':{icon:'📖',name:'Read-A-Loud Reading Club',cat:'academic',grades:'KG2–G2',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students share stories through expressive reading aloud, building fluency, comprehension, and a love of literature in a warm and engaging setting.',
    goals:'🎯 Build Reading Fluency · Develop Comprehension · Foster a Love of Literature',
    why:'Fall in love with books and stories!'},
  'act-robotics':{icon:'🤖',name:'Robotics & Coding',cat:'academic',grades:'G3–G5',day:'Monday',cap:'15',instructor:'Vendor',fee:'paid',feeLabel:'Paid – Vendor',
    desc:'Students explore coding and robotics through hands-on activities. The club promotes innovation and problem solving. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Develop Coding Skills · Encourage Logical Thinking · Explore Technology',
    why:'Bring your ideas to life through coding and robotics!'},
  'act-rubiks-ms':{icon:'🧩',name:"Rubik's Cube Club",cat:'academic',grades:'G6–G12',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:"Students learn advanced techniques to solve the Rubik's Cube while building patience, memory, and problem-solving skills. All skill levels welcome.",
    goals:'🎯 Improve Problem-Solving · Develop Persistence · Enhance Concentration',
    why:'Master the cube and challenge yourself!'},
  'act-sh-academic-math':{icon:'📐',name:'Academic Assistance (Math) - Study Hall',cat:'academic',grades:'G6–G10',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students receive additional support in mathematics through guided practice and individualized help to strengthen understanding and confidence.',
    goals:'🎯 Improve Math Skills · Build Confidence · Develop Problem-Solving Strategies',
    why:'Get the help you need to succeed in math!'},
  'act-sh-am-diploma':{icon:'📘',name:'Study Hall – American Diploma',cat:'academic',grades:'G9–G12',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',req:'American Diploma students',
    desc:'Students receive structured time and support to complete assignments, prepare for assessments, and stay organized in their coursework.',
    goals:'🎯 Improve Organization · Complete Assignments Efficiently · Build Study Habits',
    why:'Stay organized and on top of your work!'},
  'act-sh-ib-english':{icon:'📝',name:'IB English Study Hall',cat:'academic',grades:'G11–G12',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'IB students recommended',
    desc:'Students develop reading, writing, and analysis skills while receiving support for IB English coursework and assessments.',
    goals:'🎯 Improve Writing & Analysis · Strengthen Comprehension · Build Confidence in English',
    why:'Enhance your communication and writing skills!'},
  'act-sh-ib-math':{icon:'📚',name:'IB Math & Science Study Hall',cat:'academic',grades:'G11–G12',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'IB students recommended',
    desc:'Students receive targeted academic support in IB Math and Science, with time for guided practice, review, and clarification of key concepts.',
    goals:'🎯 Strengthen Subject Understanding · Improve Academic Performance · Build Independent Study Habits',
    why:'Stay on track and succeed in IB courses!'},
  'act-stem-club':{icon:'🔬',name:'STEM Club',cat:'academic',grades:'G6–G8',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students explore science, technology, engineering, and math through hands-on projects and engaging challenges that spark curiosity and innovation.',
    goals:'🎯 Encourage Innovation · Develop Problem-Solving Skills · Explore STEM Concepts',
    why:'Create, experiment, and discover!'},
  'act-storytelling':{icon:'📖',name:'Storytelling Time',cat:'academic',grades:'KG2–G5',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students listen to, discuss, and create their own stories in a warm and interactive setting. Develops language, imagination, and a love for literature.',
    goals:'🎯 Develop Language & Vocabulary · Foster Imagination · Build a Love of Reading',
    why:'Ignite your imagination through the power of stories!'},
  'act-arabic-foundation':{icon:'🔤',name:'Arabic Language Foundation Club',cat:'academic',grades:'G6–G12',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students build core Arabic language skills through grammar practice, vocabulary building, and guided conversation. Designed to strengthen proficiency for learners at every stage.',
    goals:'🎯 Strengthen Grammar Skills · Build Vocabulary · Develop Confidence in Arabic',
    why:'Build a strong foundation in the Arabic language!'},
  'act-arabic-spelling-bee-mshs':{icon:'🐝',name:'Arabic Spelling Bee',cat:'academic',grades:'G6–G12',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students sharpen their Arabic spelling and vocabulary through friendly rounds of competition, building toward a culminating spelling bee.',
    goals:'🎯 Improve Arabic Spelling · Expand Vocabulary · Build Competitive Confidence',
    why:'Spell your way to Arabic mastery!'},
  'act-arabic-spelling-bee-elem':{icon:'🐝',name:'Arabic Spelling Bee',cat:'academic',grades:'G3–G5',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students practice Arabic spelling and vocabulary through fun games and friendly competition, building toward a culminating spelling bee.',
    goals:'🎯 Improve Arabic Spelling · Expand Vocabulary · Build Competitive Confidence',
    why:'Spell your way to Arabic mastery!'},
  'act-arabic-read-aloud':{icon:'📚',name:'Arabic Read Aloud Club (Short Stories)',cat:'academic',grades:'KG2–G2',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students listen to and read short Arabic stories aloud, building fluency, comprehension, and a love of the Arabic language in a warm, interactive setting.',
    goals:'🎯 Build Arabic Fluency · Develop Comprehension · Foster a Love of Reading',
    why:'Discover the joy of Arabic stories!'},
  'act-university-bootcamp-g12':{icon:'🎓',name:'University BootCamp (G12)',cat:'academic',grades:'G12',day:'Tuesday',cap:'15',instructor:'Ms. Jennifer Guss',fee:'free',req:'Contact: Ms. Jennifer Guss (<a href="mailto:jguss@aisa.sch.ae">jguss@aisa.sch.ae</a>)',
    desc:'Seniors get hands-on support tackling the university application journey — personal statements, portfolios, and application strategy — in focused weekly sessions. 🎓 Contact: Ms. Jennifer Guss (<a href="mailto:jguss@aisa.sch.ae">jguss@aisa.sch.ae</a>).',
    goals:'🎯 Strengthen University Applications · Build Essay & Portfolio Skills · Navigate the Admissions Process',
    why:'Get a head start on your university journey!'},
  'act-university-bootcamp-g11':{icon:'🎓',name:'University BootCamp (G11)',cat:'academic',grades:'G11',day:'Tuesday',cap:'15',instructor:'Ms. Naiema Zaki',fee:'free',req:'Contact: Ms. Naiema Zaki (<a href="mailto:nhassan@aisa.sch.ae">nhassan@aisa.sch.ae</a>)',
    desc:'Juniors get an early start on the university journey, exploring career interests, researching schools, and building the foundations for a strong application. 🎓 Contact: Ms. Naiema Zaki (<a href="mailto:nhassan@aisa.sch.ae">nhassan@aisa.sch.ae</a>).',
    goals:'🎯 Explore Career & University Options · Build Research Skills · Prepare for the Application Process',
    why:'Start planning your future with confidence!'},

  /* ATHLETIC */
  'act-bowling':{icon:'🎳',name:'Bowling',cat:'athletic',grades:'KG2–G12',day:'Wednesday',cap:'15',instructor:'Vendor',fee:'paid',feeLabel:'Paid – Vendor',
    desc:'Students enjoy weekly bowling sessions at a local lane, developing technique, focus, and friendly competition. A fun off-campus activity for all skill levels.',
    goals:'🎯 Develop Bowling Technique · Build Focus & Patience · Encourage Friendly Competition',
    why:'Roll your way to a great time!'},
  'act-equestrians':{icon:'🏇',name:'Early Equestrians',cat:'athletic',grades:'G1–G5',day:'Tuesday',cap:'8',instructor:'Vendor',fee:'paid',feeLabel:'Paid – Vendor',req:'Pants & athletic shoes or boots required. Later pick-up due to off-campus location.',
    desc:'Introduction to horse riding in a safe, structured environment at the Abu Dhabi Country Club. Students learn basic riding skills and proper etiquette. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Develop Coordination & Balance · Build Confidence · Learn Basic Riding Skills',
    why:'An unforgettable experience connecting with horses!'},
  'act-cubs-basketball-boys-g45':{icon:'🏀',name:'CUBS Basketball – Boys (G4–G5)',cat:'athletic',grades:'G4–G5 (Boys)',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students develop basketball skills through drills and game play in a fun and supportive environment. The program includes opportunities for local competitions in Abu Dhabi or Dubai.',
    goals:'🎯 Improve Basketball Skills · Build Teamwork · Develop Coordination & Fitness',
    why:'Dribble, pass, and score with confidence!'},
  'act-cubs-basketball-boys-g6':{icon:'🏀',name:'CUBS Basketball – Boys (G6)',cat:'athletic',grades:'G6 (Boys)',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students refine basketball techniques and develop game strategies through structured sessions and competitive play opportunities.',
    goals:'🎯 Enhance Technical Skills · Develop Game Understanding · Build Teamwork',
    why:'Take your basketball skills to the next level!'},
  'act-cubs-basketball-girls-g45':{icon:'🏀',name:'CUBS Basketball – Girls (G4–G5)',cat:'athletic',grades:'G4–G5 (Girls)',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students build basketball fundamentals in a supportive and engaging environment, with opportunities to participate in local competitions.',
    goals:'🎯 Build Basketball Skills · Develop Confidence · Encourage Teamwork',
    why:'Play, learn, and grow as a team!'},
  'act-cubs-basketball-girls-g6':{icon:'🏀',name:'CUBS Basketball – Girls (G6)',cat:'athletic',grades:'G6 (Girls)',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students improve basketball performance through structured training and game play, with opportunities to compete locally.',
    goals:'🎯 Improve Technical Ability · Build Teamwork · Develop Competitive Confidence',
    why:'Compete, improve, and have fun!'},
  'act-cubs-football-boys-g45':{icon:'🏃',name:'CUBS Football – Boys (G4–G5)',cat:'athletic',grades:'G4–G5 (Boys)',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students learn core football skills including dribbling, passing, and teamwork in a fun and supportive environment. Sessions focus on skill development and game play, with opportunities to participate in local competitions in Abu Dhabi or Dubai.',
    goals:'🎯 Improve Football Skills · Build Teamwork & Sportsmanship · Develop Fitness & Coordination',
    why:'Train, compete, and represent the AISA Lions!'},
  'act-cubs-football-boys-g6':{icon:'🏃',name:'CUBS Football – Boys (G6)',cat:'athletic',grades:'G6 (Boys)',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students continue developing football skills through structured training and game play. The program includes opportunities to compete in local competitions in Abu Dhabi or Dubai.',
    goals:'🎯 Enhance Technical Skills · Develop Game Understanding · Build Teamwork & Leadership',
    why:'Take your game to the next level!'},
  'act-cubs-football-girls-g45':{icon:'🏃',name:'CUBS Football – Girls (G4–G5)',cat:'athletic',grades:'G4–G5 (Girls)',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students develop football skills in a supportive and engaging environment, focusing on teamwork, confidence, and game play. Opportunities for local competitions are included.',
    goals:'🎯 Build Football Skills · Develop Confidence · Encourage Teamwork',
    why:'Play, learn, and grow as a team!'},
  'act-cubs-football-girls-g6':{icon:'🏃',name:'CUBS Football – Girls (G6)',cat:'athletic',grades:'G6 (Girls)',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students refine football techniques and develop game strategies through structured sessions. Participation in local competitions helps build confidence and teamwork.',
    goals:'🎯 Improve Technical Ability · Develop Teamwork · Build Confidence in Competition',
    why:'Compete, improve, and have fun!'},
  'act-cubs-track-g45':{icon:'🏃',name:'CUBS Track & Field (G4–G5)',cat:'athletic',grades:'G4–G5',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students are introduced to the fundamentals of track and field, including running, jumping, and throwing events. The program focuses on skill development, fitness, and participation, with one external competition to be determined.',
    goals:'🎯 Develop Fundamental Athletic Skills · Improve Fitness & Coordination · Build Confidence in Events',
    why:'Discover your strengths in track and field!'},
  'act-cubs-track-g6':{icon:'🏃',name:'CUBS Track & Field (G6)',cat:'athletic',grades:'G6',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Sports Attire Required',
    desc:'Students build on track and field fundamentals through structured training in multiple events. The program includes preparation for one external competition.',
    goals:'🎯 Improve Technique in Events · Build Endurance & Strength · Develop Competitive Confidence',
    why:'Train, compete, and challenge yourself!'},
  'act-football-kg1':{icon:'⚽️',name:'Football Training (PASS)',cat:'athletic',grades:'KG1',day:'Monday',cap:'15',instructor:'PASS',fee:'paid',feeLabel:'Paid – Vendor',req:'Sports Attire Required',
    desc:'Students learn core football skills including dribbling, passing, and teamwork in a fun and supportive environment. Sessions focus on skill development and game play. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Develop Fitness & Coordination · Build Teamwork · Improve Football Skills',
    why:'Develop your football skills in a fun, supportive environment!'},
  'act-football-kg2g2':{icon:'⚽️',name:'Football Training (PASS)',cat:'athletic',grades:'KG2–G2',day:'Monday',cap:'15',instructor:'PASS',fee:'paid',feeLabel:'Paid – Vendor',req:'Sports Attire Required',
    desc:'Students learn core football skills including dribbling, passing, and teamwork in a fun and supportive environment. Sessions focus on skill development and game play. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Develop Fitness & Coordination · Build Teamwork · Improve Football Skills',
    why:'Develop your football skills in a fun, supportive environment!'},
  'act-football-g35':{icon:'⚽️',name:'Football Training (PASS)',cat:'athletic',grades:'G3–G5',day:'Tuesday',cap:'15',instructor:'PASS',fee:'paid',feeLabel:'Paid – Vendor',req:'Sports Attire Required',
    desc:'Students learn core football skills including dribbling, passing, and teamwork in a fun and supportive environment. Sessions focus on skill development and game play. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Develop Fitness & Coordination · Build Teamwork · Improve Football Skills',
    why:'Develop your football skills in a fun, supportive environment!'},
  'act-learn-swim':{icon:'🤿',name:'Learn to Swim',cat:'athletic',grades:'KG2–G2',day:'Monday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Swimwear required. Students must be capable of changing alone.',
    desc:'Students build confidence in the water while learning basic swimming techniques. Sessions focus on safety, comfort, and skill development.',
    goals:'🎯 Develop Water Confidence · Learn Basic Swimming Skills · Promote Safety in Water',
    why:'Build water confidence and essential life skills!'},
  'act-competitive-swim':{icon:'🏅',name:'Competitive Swim',cat:'athletic',grades:'G3–G5',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Swimming Attire Required',
    desc:'Students who have mastered the basics move into structured, technique-focused training, building speed, stamina, and stroke precision in preparation for competitive swimming.',
    goals:'🎯 Refine Stroke Technique · Build Speed & Stamina · Develop Competitive Confidence',
    why:'Take your swimming to the next level and race ahead!'},
  'act-little-ath-kg1':{icon:'🏃',name:'Little Athletics Program (KG1)',cat:'athletic',grades:'KG1',day:'Wednesday',cap:'15',instructor:'Origo',fee:'paid',feeLabel:'Paid – Vendor',
    desc:'Students develop fundamental movement skills through fun, structured activities that build coordination, balance, and confidence. Energetic, engaging, and age-appropriate. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Develop Motor Skills · Build Confidence in Movement · Encourage Teamwork',
    why:'A perfect first step into the world of athletics!'},
  'act-little-ath-kg2':{icon:'🏃',name:'Little Athletics Program (KG2–G2)',cat:'athletic',grades:'KG2–G2',day:'Wednesday',cap:'15',instructor:'Origo',fee:'paid',feeLabel:'Paid – Vendor',
    desc:'Continue developing fundamental movement skills through structured games and activities that enhance coordination, balance, and teamwork. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Improve Coordination & Balance · Build Confidence in Movement · Encourage Teamwork',
    why:'Keep moving and growing through structured sport!'},
  'act-playground':{icon:'🛝',name:'Playground Games',cat:'athletic',grades:'KG2–G5',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students enjoy a variety of organised outdoor games that encourage movement, laughter, and teamwork. Activities rotate each week to keep things fresh and engaging.',
    goals:'🎯 Promote Active Play · Build Social Skills · Encourage Teamwork & Fun',
    why:'Get outside and have fun with friends!'},
  'act-zumba':{icon:'💃',name:'ZUMBA Kids',cat:'wellness',grades:'KG2–G2',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'High-energy dance routines set to fun music while improving fitness and coordination. Sessions are lively and engaging.',
    goals:'🎯 Improve Fitness · Build Confidence · Encourage Self-Expression',
    why:'Move, dance, and have a great time!'},

  /* ARTS */
  'act-caroling':{icon:'🎄',name:'Winter Caroling Club',cat:'arts',grades:'G3–G5',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students learn festive songs and harmonies together, preparing to spread holiday cheer through music. The club will perform at the annual Winter Tree Lighting event, hosted every year in early December at the Novotel Al Bustan.',
    goals:'🎯 Develop Vocal Skills · Build Confidence Performing · Encourage Teamwork & Joy',
    why:'Sing your way into the holiday spirit!'},
  'act-ballet':{icon:'🩰',name:'Ballet Bloom',cat:'arts',grades:'KG2–G5',day:'Monday',cap:'15',instructor:'BodyTree',fee:'paid',feeLabel:'Paid – Vendor',req:'Ballet Attire Required',
    desc:'Students learn foundational ballet techniques while expressing themselves through movement and music. Inclusive to all ability levels. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Develop Coordination · Build Confidence · Learn Dance Fundamentals',
    why:'Discover the joy of dance and movement!'},
  'act-ballet-kg1':{icon:'🩰',name:'Ballet',cat:'arts',grades:'KG1',day:'Monday',cap:'15',instructor:'BodyTree',fee:'paid',feeLabel:'Paid – Vendor',req:'Ballet Attire Required',
    desc:'Students learn foundational ballet techniques while expressing themselves through movement and music. Inclusive to all ability levels. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Develop Coordination · Build Confidence · Learn Dance Fundamentals',
    why:'Discover the joy of dance and movement!'},
  'act-diy':{icon:'💡',name:'DIY Club',cat:'arts',grades:'KG2–G2',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'paid',feeLabel:'Paid – Supplies',
    desc:'Students explore creativity and hands-on projects using a variety of materials. Each session encourages imagination, problem-solving, and artistic expression.',
    goals:'🎯 Encourage Creativity · Develop Fine Motor Skills · Explore Design & Building',
    why:'Create something amazing every session!'},
  'act-drawing':{icon:'✍️',name:'Drawing & Coloring Practice',cat:'arts',grades:'KG2–G2',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students practice drawing and coloring techniques in a relaxed and creative setting. Sessions cover a range of styles and subjects that inspire self-expression and artistic growth.',
    goals:'🎯 Develop Drawing Skills · Encourage Self-Expression · Build Artistic Confidence',
    why:'Express yourself through art every week!'},
  'act-guitar-g35':{icon:'🎸',name:'Guitar Strings (G3–G5)',cat:'arts',grades:'G3–G5',day:'Wednesday',cap:'15',instructor:'Notes & Chords',fee:'paid',feeLabel:'Paid – Vendor',req:'Guitar Required',
    desc:'Students learn guitar basics including chords, rhythm, and simple songs while building confidence and skills. Built for beginners and those developing their musical skills.',
    goals:'🎯 Learn Guitar Fundamentals · Develop Rhythm & Timing · Explore Creative Side',
    why:'Pick up the guitar and start playing songs you love!'},
  'act-intro-guitar-kg1':{icon:'🎸',name:'Intro to Guitar (Notes & Chords)',cat:'arts',grades:'KG1',day:'Monday',cap:'15',instructor:'Notes & Chords',fee:'paid',feeLabel:'Paid – Vendor',req:'Guitar Required',
    desc:'Young learners are introduced to the guitar through fun, age-appropriate activities covering basic strumming, rhythm, and simple sounds. A joyful first step into music.',
    goals:'🎯 Discover Guitar Fundamentals · Develop Rhythm & Listening · Encourage Creative Expression',
    why:'Discover the magic of guitar from the very beginning!'},
  'act-guitar-kg2g2':{icon:'🎸',name:'Guitar Lessons (Notes & Chords)',cat:'arts',grades:'KG2–G2',day:'Monday',cap:'15',instructor:'Notes & Chords',fee:'paid',feeLabel:'Paid – Vendor',req:'Guitar Required',
    desc:'Students learn guitar basics including chords, rhythm, and simple songs while building confidence and skills. Built for beginners and those developing their musical skills. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Learn Guitar Fundamentals · Develop Rhythm & Timing · Explore Creative Side',
    why:'Pick up the guitar and start playing songs you love!'},
  'act-guitar-lessons-g35':{icon:'🎸',name:'Guitar Lessons (Notes & Chords)',cat:'arts',grades:'G3–G5',day:'Monday',cap:'15',instructor:'Notes & Chords',fee:'paid',feeLabel:'Paid – Vendor',req:'Guitar Required',
    desc:'Students learn guitar basics including chords, rhythm, and simple songs while building confidence and skills. Built for beginners and those developing their musical skills. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Learn Guitar Fundamentals · Develop Rhythm & Timing · Explore Creative Side',
    why:'Pick up the guitar and start playing songs you love!'},
  'act-hip-hop':{icon:'💃',name:'Hip-Hop Dance Club',cat:'arts',grades:'G6–G12',day:'Wednesday, Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students learn dynamic hip-hop routines while expressing themselves through movement and music in an energetic environment. Open to all experience levels.',
    goals:'🎯 Develop Dance Skills · Build Confidence · Encourage Self-Expression',
    why:'Move, groove, and express yourself!'},
  'act-intro-music':{icon:'🎹',name:'Intro to Music',cat:'arts',grades:'KG1',day:'Monday',cap:'15',instructor:'Notes & Chords',fee:'paid',feeLabel:'Paid – Vendor',
    desc:'Young learners are introduced to the world of music through fun, age-appropriate activities covering rhythm, melody, and basic keyboard skills. A joyful and engaging start to musical learning. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Discover Music Fundamentals · Develop Rhythm & Listening · Encourage Creative Expression',
    why:'Discover the magic of music from the very beginning!'},
  'act-piano':{icon:'🎹',name:'Piano Practicers',cat:'arts',grades:'KG2–G5',day:'Monday',cap:'15',instructor:'Notes & Chords',fee:'paid',feeLabel:'Paid – Vendor',
    desc:'Learn the fundamentals of keyboard playing including rhythm, melody, and basic music reading in a fun and engaging way. Suitable for beginners and those developing skills. For general inquiries, contact <a href="mailto:activities@aisa.sch.ae">activities@aisa.sch.ae</a>.',
    goals:'🎯 Learn Basic Keyboard Skills · Develop Musical Understanding · Promote Memorization & Routines',
    why:'Learn to play beautiful music on the piano!'},
  'act-musical-play-mshs':{icon:'🎭',name:'Middle/High School Musical Play',cat:'arts',grades:'G6–G12',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students rehearse and perform in a full musical production, building skills in singing, acting, and stagecraft while working together toward an end-of-term show.',
    goals:'🎯 Build Performance Skills · Develop Teamwork · Grow Confidence on Stage',
    why:'Take the stage and bring a story to life!'},
  'act-musical-play-elem':{icon:'🎭',name:'Elementary Musical Play',cat:'arts',grades:'G3–G5',day:'Thursday',cap:'—',instructor:'AISA Staff',fee:'free',
    desc:'Students rehearse and perform in a fun, age-appropriate musical production, building skills in singing, acting, and stagecraft while working together toward an end-of-term show.',
    goals:'🎯 Build Performance Skills · Develop Teamwork · Grow Confidence on Stage',
    why:'Take the stage and bring a story to life!'},
  'act-hair-dance':{icon:'💃',name:'Arabic Hair Dance Club',cat:'arts',grades:'G6–G12',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Open to female students. Selected students perform during the National Day Assembly.',
    desc:'Students learn traditional Arabic hair dance (Al Na\'ashat) routines, celebrating Emirati heritage through rhythm and movement. Selected dancers perform at the National Day Assembly.',
    goals:'🎯 Learn Traditional Dance Techniques · Celebrate Emirati Culture · Build Performance Confidence',
    why:'Celebrate heritage through dance and movement!'},
  'act-stuco-elem':{icon:'🗳️',name:'Student Council (StuCo Club)',cat:'arts',grades:'G3–G5',day:'Wednesday',cap:'—',instructor:'AISA Staff',fee:'free',
    desc:'Students develop leadership and teamwork skills by planning school events, representing classmates, and contributing ideas that shape student life.',
    goals:'🎯 Develop Leadership Skills · Build Teamwork · Encourage Student Voice',
    why:'Lead, plan, and make a difference at school!'},
  'act-arts-crafts-mshs':{icon:'🎨',name:'Arts and Crafts',cat:'arts',grades:'G6–G12',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students explore a variety of creative mediums — painting, collage, and upcycled crafts — building artistic skills and self-expression in a relaxed, hands-on space. 🎨',
    goals:'🎯 Explore Creative Mediums · Build Fine Motor Skills · Encourage Self-Expression',
    why:'Unleash your creativity, one project at a time!'},

  /* WELLNESS */
  'act-brain-gym':{icon:'🧠',name:'Brain Gym',cat:'wellness',grades:'KG2–G2',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Fun physical and mental exercises to improve focus, coordination, and learning readiness. Activities are playful and engaging.',
    goals:'🎯 Improve Concentration · Enhance Coordination · Support Learning Readiness',
    why:'A fun and active way to sharpen your mind!'},
  'act-early-sprouts':{icon:'🌱',name:'Early Sprouts Club',cat:'wellness',grades:'KG2–G2',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students explore nature by planting, growing, and caring for plants in the AISA greenhouse. Develops a deeper understanding of biological processes.',
    goals:'🎯 Learn about Plants & Nature · Build Responsibility · Promote Sustainability',
    why:'Get your hands in the soil and grow something incredible!'},
  'act-greenhouse':{icon:'🌿',name:'Greenhouse Care',cat:'wellness',grades:'G6–G12',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students take care of plants and learn about sustainability through hands-on gardening and environmental stewardship in the AISA greenhouse.',
    goals:'🎯 Learn Plant Care · Build Responsibility · Promote Sustainability',
    why:'Grow something meaningful and make a difference!'},
  'act-power-up':{icon:'🔋',name:'Power-Up with Affirmations',cat:'wellness',grades:'KG2–G2',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students build a positive mindset through guided affirmations, reflection, and wellbeing activities. Each session fosters self-confidence, gratitude, and emotional resilience.',
    goals:'🎯 Build a Positive Mindset · Develop Emotional Resilience · Promote Self-Confidence & Gratitude',
    why:'Start strong with a positive mindset every week!'},
  'act-quran-elem':{icon:'🌙',name:'Quran Club',cat:'wellness',grades:'G3–G5',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students engage in reflection, recitation, and discussion in a calm and respectful environment. The club promotes personal growth and mindfulness.',
    goals:'🎯 Encourage Respectful Discussion · Build Personal Discipline · Develop Understanding & Reflection',
    why:'A meaningful space for reflection and growth.'},
  'act-quran-female':{icon:'🌙',name:'Quran Club (Female)',cat:'wellness',grades:'G6–G12',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Open to female students',
    desc:'Students engage in reflection, recitation, and discussion in a supportive and respectful environment. The club promotes personal growth, mindfulness, and community.',
    goals:'🎯 Develop Understanding & Reflection · Encourage Respectful Dialogue · Build Personal Discipline',
    why:'A meaningful space for reflection and connection.'},
  'act-quran-male':{icon:'🌙',name:'Quran Club (Male)',cat:'wellness',grades:'G6–G12',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',req:'Open to male students',
    desc:'Students explore recitation and reflection in a structured and respectful setting. The club encourages mindfulness, discipline, and personal growth.',
    goals:'🎯 Strengthen Reflection & Understanding · Build Discipline · Encourage Respectful Engagement',
    why:'Grow through reflection in a supportive environment.'},
  'act-relax-color':{icon:'🖍️',name:'Relax & Color Journaling',cat:'wellness',grades:'KG2–G2',day:'Wednesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students engage in mindful coloring and reflective journaling to decompress, express their feelings, and develop a healthy creative outlet. A calming, structured activity.',
    goals:'🎯 Promote Mindfulness · Encourage Self-Expression · Build Emotional Awareness',
    why:'Unwind and express yourself through color!'},
  'act-sustainability':{icon:'🌱',name:'Sustainability Club',cat:'wellness',grades:'G6–G12',day:'Tuesday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students explore environmental issues and lead initiatives that promote sustainability within the school and community. Hands-on projects and discussions drive real change.',
    goals:'🎯 Build Environmental Awareness · Encourage Leadership · Promote Sustainable Practices',
    why:'Make a positive impact on the world!'},
  'act-vr-explorers':{icon:'🥽',name:'VR Explorers',cat:'academic',grades:'G6–G12',day:'Thursday',cap:'15',instructor:'AISA Staff',fee:'free',
    desc:'Students unwind and recharge through guided virtual reality experiences that spark curiosity, calm the mind, and offer a fresh way to explore new worlds — a screen-based space to relax, reflect, and reset after the school day. 🥽',
    goals:'🎯 Encourage Mindful Exploration · Build Focus & Curiosity · Promote Relaxation & Reset',
    why:'Step into new worlds and unwind, one experience at a time!'},
  'act-student-ambassadors':{icon:'🤝',name:'Student Ambassadors at AISA',cat:'wellness',grades:'G3–G5',day:'Thursday',cap:'15',instructor:'Ms. Sonya Davis & Ms. Amy Classen',fee:'free',req:'Contact: Ms. Sonya Davis (<a href="mailto:sdavis@aisa.sch.ae">sdavis@aisa.sch.ae</a>) · Ms. Amy Classen (<a href="mailto:aclassen@aisa.sch.ae">aclassen@aisa.sch.ae</a>)',
    desc:'Student Ambassadors welcome new students, support schoolwide events, assist during assemblies and special activities, mentor younger students when appropriate, and help reinforce our culture of being Responsible, Safe, Respectful, and Kind. 🤝 Contact: Ms. Sonya Davis (<a href="mailto:sdavis@aisa.sch.ae">sdavis@aisa.sch.ae</a>) · Ms. Amy Classen (<a href="mailto:aclassen@aisa.sch.ae">aclassen@aisa.sch.ae</a>).',
    goals:'🎯 Build Leadership & Confidence · Foster a Welcoming Community · Reinforce the AISA Lion Way',
    why:'Be a Lion others look up to — welcome, lead, and represent AISA with pride!'},
};

/* ── Activity modal ── */
function catLabel(cat){
  return{wellness:'🌿 Wellness',academic:'📚 Academic',athletic:'⚽️ Athletic',arts:'🎨 Arts'}[cat]||cat;
}
function ensureActOverlay(){
  if(document.getElementById('actOverlay')) return;
  const div=document.createElement('div');
  div.className='act-overlay';
  div.id='actOverlay';
  div.addEventListener('click',handleOverlayClick);
  div.innerHTML=`<div class="act-box" id="actBox"><button class="act-close" onclick="closeAct()">✕</button><div id="actContent"></div></div>`;
  document.body.appendChild(div);
}
function openAct(id){
  ensureActOverlay();
  const card=document.getElementById(id);
  if(!card){
    const a=ACT_STORE[id];
    if(a){
      const feeClass=a.fee==='free'?'free':'paid';
      const feeLabel=a.fee==='free'?'Free':(a.feeLabel||'Paid');
      const chips=[
        a.cat?`<span class="act-chip">${catLabel(a.cat)}</span>`:'',
        a.grades?`<span class="act-chip">📐 ${a.grades}</span>`:'',
        a.day?a.day.split(',').map(dy=>`<span class="act-chip day-chip ${DAY_CLASS[dy.trim()]||''}">${dy.trim()}</span>`).join(''):'',
        a.cap?`<span class="act-chip">Cap: ${a.cap}</span>`:'',
        a.instructor?`<span class="act-chip">👤 ${a.instructor}</span>`:'',
      ].join('');
      const goalItems=a.goals.split('·').map(g=>g.replace(/^🎯\s*/,'').trim()).filter(Boolean).map(g=>`<li>${g}</li>`).join('');
      const req=a.req?`<div class="act-req">📌 ${a.req}</div>`:'';
      const why=a.why?`<div class="act-why"><strong>💡 Why Join?</strong>${a.why}</div>`:'';
      const content=document.getElementById('actContent');
      const overlay=document.getElementById('actOverlay');
      if(!content||!overlay)return;
      content.innerHTML=`
        <div class="act-icon-lg">${a.icon}</div>
        <div class="act-modal-name">${a.name}</div>
        <div class="act-chips">${chips}</div>
        <div class="act-desc">${a.desc}</div>
        <ul class="act-goals-list">${goalItems}</ul>
        <div class="act-footer">
          <span class="act-fee ${feeClass}">💲 ${feeLabel}</span>
          ${req}
        </div>
        ${why}
      `;
      overlay.classList.add('open');
      document.body.style.overflow='hidden';
      return;
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

function sortDirectory(){
  const grid=document.getElementById('dirGrid');
  if(!grid)return;
  [...grid.querySelectorAll('.dir-card')].sort((a,b)=>{
    const na=(a.querySelector('.dc-name')?.textContent||'').toLowerCase();
    const nb=(b.querySelector('.dc-name')?.textContent||'').toLowerCase();
    return na.localeCompare(nb);
  }).forEach(c=>grid.appendChild(c));
}

function sortTermTables(){
  document.querySelectorAll('table.asa-table tbody').forEach(tbody=>{
    [...tbody.querySelectorAll('tr[data-act]')].sort((a,b)=>{
      const da=DAY_ORDER[a.children[1]?.textContent.trim()]??99;
      const db=DAY_ORDER[b.children[1]?.textContent.trim()]??99;
      return da-db;
    }).forEach(tr=>tbody.appendChild(tr));
  });
}

function initDirectory(){
  sortDirectory();
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

/* ── Language toggle button (auto-injected into every topbar) ── */
function initLanguageToggle(){
  // Read saved preference
  let saved = 'en';
  try{ saved = localStorage.getItem('asa_lang') || 'en'; }catch(_e){}

  // Inject the toggle button if a topbar exists and it's not already there
  const topbar = document.querySelector('.topbar');
  if(topbar && !document.getElementById('lang-toggle')){
    const btn = document.createElement('button');
    btn.id = 'lang-toggle';
    btn.className = 'lang-btn no-print';
    btn.type = 'button';
    btn.setAttribute('aria-label','Change language');
    btn.innerHTML = '🌐 <span id="lang-btn-label">العربية</span>';
    // Place it just before the save-btn if present, else append
    const saveBtn = topbar.querySelector('.save-btn');
    if(saveBtn) topbar.insertBefore(btn, saveBtn);
    else topbar.appendChild(btn);
    btn.addEventListener('click', ()=>{
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // Apply saved language on load
  setLanguage(saved);
}

/* ── Leo Lion Chatbot ── */
const LION_EMOJI = '🦁';

/* ── Leo's knowledge base ── */
function getLeoResponse(text){
  const t=text.toLowerCase();
  if(/register|registration|sign.?up|enrol|enroll|how.*(join|start)|qr/.test(t)){
    return 'To register for an ASA, scan the QR code or follow the link shared via email 📧\n\nRegistration windows:\n🍂 Autumn: Sep. 1–8, 2026\n❄️ Winter: Nov. 2–15, 2026\n🌸 Spring: Mar. 1–14, 2027\n\nVisit the Register & Calendars page for the full calendar!';
  }
  if(/no.?asa|no school|prof.*dev|professional development|parent.?teacher|conference/.test(t)){
    return 'Upcoming No-ASA days:\n🍂 Autumn:\n  • Oct. 19 & 20 – Professional Development (No School)\n  • Nov. 9 – Parent-Teacher Conferences\n🌸 Spring:\n  • Mar. 15 – Professional Development (No School)\n  • May 3 – Parent-Teacher Conferences\n\nPlus term breaks (Mid-Term, UAE National Day, Winter Holiday, Spring Break).';
  }
  if(/break|holiday|vacation|mid.?term|national day|winter.?break|spring.?break/.test(t)){
    return 'School breaks with no ASAs:\n🍂 Autumn: Oct. 12–16 Mid-Term Break\n❄️ Winter: Week of Dec. 1 (UAE National Day) · Dec. 14 – Jan. 3 Winter Holiday\n🌸 Spring: Apr. 5–9 Spring Break\n\nIndividual no-school days are also marked on the Register & Calendars page.';
  }
  if(/time|timing|hour|start|finish|end|dismiss|pick.?up|gate|when.*asa|asa.*when/.test(t)){
    return 'ASAs run from 15:00 to 16:00 (3 pm – 4 pm) every school day.\n\nSchool finishes at 14:50. Students head to their ASA meet-up point, then activities begin at 15:00.\n\n🚪 Pick-up is at Gate 4 at 16:00. Please be prompt!';
  }
  if(/fee|cost|price|paid|free|pay|charge/.test(t)){
    return 'Fees vary by activity:\n✅ Many ASAs are FREE (e.g. Chess, Power-Up, Playground Games, Quran Club)\n💳 Some require vendor payment (e.g. Football/PASS, Ballet/BodyTree, Bowling, Piano)\n\nRegistration is required even for free activities. Check the Directory page for each activity\'s fee details.';
  }
  if(/contact|email|phone|call|reach|staff|mr.*zischka|ms.*cristobal/.test(t)){
    return 'You can reach the Athletics & Activities team at:\n📧 activities@aisa.sch.ae\n📞 +971 2 444 4333\n🌐 www.aisa.sch.ae\n\nHead of Athletics: Mr. Luka Zischka (lzischka@aisa.sch.ae)\nAssistant Head: Ms. Ledinia Cristobal (lcristobal@aisa.sch.ae)';
  }
  if(/activit|asa|club|sport|what.*offer|what.*available|list|categor/.test(t)){
    return 'ASAs fall into 4 categories:\n🌿 Reflective & Wellness (Quran Club, Sustainability, Greenhouse…)\n📚 Academics & Enrichment (Chess, Math Ninjas, STEM Club, Robotics…)\n⚽️ Athletics & Movement (Football, Swimming, CUBS Sports…)\n🎨 Arts & Creativity (Ballet, Piano, Guitar, Hip-Hop Dance…)\n\nVisit the Directory page to browse all activities with full details!';
  }
  if(/football|soccer|pass/.test(t)){
    return '⚽️ Football Training (PASS) is available for KG1–G12 on Mondays & Tuesdays. It\'s a paid vendor activity. Students develop dribbling, passing, and teamwork skills. Sports attire required!';
  }
  if(/basketball|gametime/.test(t)){
    return '🏀 CUBS Basketball teams (G4–G5 and G6, Boys & Girls) train on Wednesdays and compete in local Abu Dhabi/Dubai competitions — free, sports attire required.';
  }
  if(/swim|pool|water/.test(t)){
    return '🏊 Swimming options:\n• Learn to Swim (KG2–G2, Mondays) – fee applies\n• Learn to Swim G3–G5 (Mondays) – lifeguard fee applies\n• Splash Fun Day (G3–G5 Spring, Mondays) – lifeguard fee · must be able to swim\n\nSwimwear required. Students must be capable of changing alone.';
  }
  if(/ballet|dance|bodytree/.test(t)){
    return '🩰 Ballet Bloom (BodyTree) is available for KG1–G5 on Mondays & Wednesdays. It\'s a paid vendor activity. Ballet attire is required. All ability levels welcome!';
  }
  if(/chess/.test(t)){
    return '♟️ Chess options:\n• Intro to Chess – KG2–G5, Thursdays (free)\n• Chess Club – G6–G12, Thursdays (free)\n\nAll skill levels welcome – from absolute beginners to experienced players!';
  }
  if(/grade|kg|kindergarten|elementary|middle|high.?school|secondary|who.*(can|eligible)/.test(t)){
    return 'ASAs are available for all grades from KG1 through Grade 12!\n\nGrade groups per term:\n• KG1 – smaller selection of age-appropriate activities\n• KG2–G2 – broad Elementary selection\n• G3–G5 – Elementary+ selection including CUBS sports\n• Middle & High School – includes study halls, IB support, and competitive CUBS teams\n\nCheck the Current Term page for grade-specific offerings.';
  }
  if(/calendar|schedule|term|season|date|autumn|winter|spring|when.*start|when.*end/.test(t)){
    return '📅 2026–2027 ASA Seasons:\n🍂 Autumn ASAs: Sep. 14 – Nov. 13, 2026\n  Registration: Sep. 1–8\n❄️ Winter ASAs: Nov. 23, 2026 – Feb. 5, 2027\n  Registration: Nov. 2–15\n🌸 Spring ASAs: Mar. 15 – May 14, 2027\n  Registration: Mar. 1–14\n\nFull calendar on the Register & Calendars page!';
  }
  if(/absent|absence|miss|attendance|cannot attend|can't attend/.test(t)){
    return 'If your child cannot attend a session, please notify us as early as possible:\n📧 Elementary: attendance@aisa.sch.ae\n📧 Secondary: secondaryattendance@aisa.sch.ae\n📞 +971 2 444 4333\n\nAttendance is recorded via Mograsys by the ASA instructor.';
  }
  if(/safe|safety|ratio|nurse|supervisi|vett/.test(t)){
    return 'Safety at AISA ASAs:\n• Max 15 students per supervising adult\n• All activity staff are vetted per ADEK requirements\n• Staff trained in health & safety protocols\n• On-site school nurses available\n• Parent consent required before participation\n\nYour child\'s well-being is our top priority!';
  }
  if(/transport|bus|off.?campus|bowling|equestrian/.test(t)){
    return '🚌 Transportation is provided for selected off-campus activities (e.g. Bowling, Equestrian Club, CUBS sports).\n\nParents/guardians collect their children from AISA campus after the activity. Pick-up at Gate 4 at 16:00.';
  }
  if(/quran|islam|reflect|wellbeing|wellness/.test(t)){
    return '🌙 Quran Club options:\n• Quran Club (KG2–G5 general) – Tuesdays, free\n• Quran Club Female (G6–G12) – Tuesdays, free\n• Quran Club Male (G6–G12) – Wednesdays, free\n\nA calm, reflective space for recitation, discussion, and personal growth.';
  }
  return null;
}

function initChatbot(){
  if(document.getElementById('chatbot-launcher'))return;
  const launcher=document.createElement('button');
  launcher.id='chatbot-launcher';
  launcher.className='chatbot-launcher lion-launcher no-print';
  launcher.setAttribute('aria-label','Open Leo ASA Assistant');
  launcher.setAttribute('data-i18n-aria-label','chatbot_title');
  launcher.innerHTML = `<span class="leo-emoji" aria-hidden="true">${LION_EMOJI}</span><span class="chatbot-dot"></span>`;

  const panel=document.createElement('div');
  panel.id='chatbot-panel';
  panel.className='chatbot-panel no-print';
  panel.innerHTML=`
    <div class="chatbot-head">
      <div class="chatbot-title">
        <span class="chatbot-title-lion" aria-hidden="true">${LION_EMOJI}</span>
        <span data-i18n="chatbot_title">Leo — ASA Assistant</span>
      </div>
      <button class="chatbot-close" aria-label="Close">✕</button>
    </div>
    <div class="chatbot-body" id="chatbot-body">
      <div class="chatbot-msg bot greeting" data-i18n="chatbot_greeting">Hi! I'm Leo, your AISA ASA guide 🦁 Ask me about registration, activities, fees, no-ASA days, or schedules!</div>
    </div>
    <form class="chatbot-input-row" id="chatbot-form">
      <input type="text" id="chatbot-input" data-i18n-placeholder="chatbot_placeholder" placeholder="Ask Leo…" autocomplete="off"/>
      <button type="submit" aria-label="Send">➤</button>
    </form>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  launcher.addEventListener('click',()=>{
    panel.classList.toggle('open');
  });
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
      const smart=getLeoResponse(text);
      if(smart){
        b.style.whiteSpace='pre-line';
        b.textContent=smart;
      }else{
        const dict=TRANSLATIONS[currentLang]||TRANSLATIONS.en;
        b.textContent=dict.chatbot_reply;
      }
      body.appendChild(b);
      body.scrollTop=body.scrollHeight;
    },500);
  });
}


/* ── Boot ── */
document.addEventListener('DOMContentLoaded',()=>{
  initLanguageToggle();
  renderSeasonCalendars();
  initFaqAccordion();
  initTermTabs();
  sortTermTables();
  initDayChips();
  initDirectory();
  initCatInfoButtons();
  initActivePageNav();
  initChatbot();
  // Re-apply translations after chatbot is injected so its strings get translated too
  applyTranslations(currentLang);
  const params=new URLSearchParams(location.search);
  const openId=params.get('open');
  if(openId) setTimeout(()=>openAct(openId),50);
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeAct();closeCatModal();}
});
