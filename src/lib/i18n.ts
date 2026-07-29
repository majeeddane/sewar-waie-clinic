export const languages = {
  ar: 'العربية',
  en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'ar';

// Arabic translations
const ar = {
  // Navigation
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    team: 'فريقنا',
    blog: 'المدونة',
    contact: 'تواصل معنا',
    faq: 'الأسئلة الشائعة',
    bookNow: 'احجز استشارتك',
  },
  
  // Hero Section
  hero: {
    title: 'رعاية نفسية متكاملة…',
    subtitle: 'في رحلتك نحو الوعي والتعافي',
    description: 'عيادة سوار وعي - مركز رعاية نفسية متكامل يرافقك في رحلة الشفاء بخصوصية وأمان تام',
    cta: 'احجز استشارتك الآن',
    learnMore: 'اعرف المزيد',
  },
  
  // About Section
  about: {
    sectionTitle: 'نبذة عن العيادة',
    title: 'سوار وعي',
    subtitle: 'مركز للرعاية النفسية المتكاملة',
    description: 'عيادة "سوار وعي" هي مركز رعاية نفسية متكامل، يضم طاقمًا مميزًا من الأخصائيين والمعالجين النفسيين في مجالي العلاج النفسي وعلاج الإدمان.',
    description2: 'نقدم رعاية شاملة قائمة على الوعي والدعم، ترافق المستفيد في رحلته نحو الشفاء والتعافي بخصوصية وأمان تام.',
    features: [
      { title: 'خصوصية تامة', desc: 'جميع بياناتك وجلساتك تحظى بسرية تامة' },
      { title: 'فريق متخصص', desc: 'أخصائيون معتمدون ذوو خبرة واسعة' },
      { title: 'بيئة آمنة', desc: 'مساحة دافئة ومريحة للعلاج' },
      { title: 'متابعة مستمرة', desc: 'دعم متواصل طوال رحلة التعافي' },
    ],
  },
  
  // Services
  services: {
    sectionTitle: 'خدماتنا',
    sectionSubtitle: 'نقدم مجموعة شاملة من الخدمات النفسية المتخصصة',
    items: [
      {
        title: 'العلاج النفسي الفردي',
        description: 'جلسات علاجية فردية مصممة خصيصاً لتلبية احتياجاتك الفردية، تساعدك على فهم مشاعرك وتطوير أدوات التعامل مع التحديات.',
        icon: 'user',
      },
      {
        title: 'علاج الإدمان',
        description: 'برامج علاجية متكاملة للإدمان، تجمع بين الجلسات الفردية والجماعية، مع دعم مستمر لضمان التعافي المستدام.',
        icon: 'heart',
      },
      {
        title: 'الاستشارات الأسرية',
        description: 'جلسات أسرية لتعزيز التواصل وحل الخلافات، وبناء علاقات أسرية صحية قائمة على الفهم المتبادل.',
        icon: 'users',
      },
      {
        title: 'العلاج الجماعي',
        description: 'جلسات جماعية داعمة في بيئة آمنة، حيث تشارك التجارب مع آخرين يمرّون بتجارب مماثلة تحت إشراف متخصص.',
        icon: 'message-circle',
      },
      {
        title: 'استشارات الأطفال والمراهقين',
        description: 'تقييم وعلاج متخصص للأطفال والمراهقين، يعالج التحديات النفسية والسلوكية بأساليب مناسبة لكل فئة عمرية.',
        icon: 'baby',
      },
      {
        title: 'برامج التوعية والتدريب',
        description: 'ورش عمل وبرامج توعوية للجهات والمؤسسات، لتعزيز الصحة النفسية في بيئة العمل والمجتمع.',
        icon: 'graduation-cap',
      },
    ],
    bookNow: 'احجز الآن',
  },
  
  // Why Us
  whyUs: {
    sectionTitle: 'لماذا سوار وعي؟',
    reasons: [
      { title: 'السرية التامة', desc: 'نلتزم بأعلى معايير السرية المهنية لحماية خصوصيتك' },
      { title: 'فريق متخصص', desc: 'نخبة من الأخصائيين المعتمدين بخبرات متنوعة' },
      { title: 'نهج قائم على الوعي', desc: 'نعتمد أساليب علاجية حديثة تركز على الوعي الذاتي' },
      { title: 'بيئة آمنة ودافئة', desc: 'مساحة مريحة تشعر فيها بالأمان والقبول' },
      { title: 'خطط علاجية شخصية', desc: 'برامج مصممة خصيصاً لتناسب احتياجاتك الفردية' },
      { title: 'متابعة مستمرة', desc: 'دعم متواصل حتى بعد انتهاء البرنامج العلاجي' },
    ],
  },
  
  // Team
  team: {
    sectionTitle: 'فريقنا المتخصص',
    sectionSubtitle: 'نخبة من الأخصائيين والمعالجين النفسيين المعتمدين',
    viewAll: 'عرض الكل',
    members: [
      {
        name: 'د. أحمد الراشد',
        specialty: 'استشاري الطب النفسي',
        bio: 'خبرة تزيد عن 15 عاماً في مجال الطب النفسي وعلاج الإدمان',
      },
      {
        name: 'أ. سارة المنصور',
        specialty: 'أخصائية العلاج النفسي',
        bio: 'متخصصة في العلاج السلوكي المعرفي والعلاج الجماعي',
      },
      {
        name: 'د. خالد العمري',
        specialty: 'أخصائي علاج الإدمان',
        bio: 'خبير في برامج إعادة التأهيل والعلاج السلوكي للإدمان',
      },
      {
        name: 'أ. نورة القحطاني',
        specialty: 'أخصائية علاج أسرى',
        bio: 'متخصصة في العلاج الأسري واستشارات الزواج والأطفال',
      },
    ],
  },
  
  // Testimonials
  testimonials: {
    sectionTitle: 'آراء المستفيدين',
    sectionSubtitle: 'قصص نجاح وتجارب واقعية من رحلة التعافي',
    items: [
      {
        name: 'محمد ع.',
        text: 'تجربتي في سوار وعي غيّرت حياتي تماماً. الفريق هنا جعلني أشعر بأنني لست وحدی، وساعدوني على استعادة ثقتي بنفسي.',
      },
      {
        name: 'فاطمة س.',
        text: 'بيئة آمنة ودافئة حقاً. أشعر بالارتياح في كل جلسة، وأقدر الاحترافية والسرية التامة التي يتعامل بها الفريق.',
      },
      {
        name: 'عبدالله م.',
        text: 'برنامج علاج الإدمان هنا مختلف تماماً. التركيز على الوعي الذاتي والدعم المستمر كان مفتاح تعافيي.',
      },
    ],
  },
  
  // CTA
  cta: {
    title: 'ابدأ رحلتك نحو التعافي اليوم',
    description: 'نحن هنا لمساعدتك. تواصل معنا الآن واحجز استشارتك الأولى',
    button: 'تواصل معنا الآن',
    whatsapp: 'واتساب',
  },
  
  // About Page
  aboutPage: {
    title: 'من نحن',
    subtitle: 'قصتنا، رسالتنا، ورؤيتنا',
    storyTitle: 'قصتنا',
    story1: 'تأسست عيادة "سوار وعي" من إيمان عميق بأن كل شخص يستحق الفرصة ليعيش حياة صحية ومتوازنة نفسياً. بدأت رحلتنا بهدف تقديم رعاية نفسية تمزج بين الاحترافية العلمية والدفء الإنساني.',
    story2: 'اخترنا اسم "سوار وعي" لأنه يجسد رسالتنا: السوار يرمز إلى الارتباط والاحتوان، والوعي يمثل الأساس الذي نبني عليه برامجنا العلاجية. نؤمن بأن الوعي هو أول خطوة نحو التغيير الإيجابي.',
    missionTitle: 'رسالتنا',
    mission: 'نقدم رعاية نفسية متكاملة ومتخصصة، ترافق كل مستفيد في رحلته الفردية نحو الوعي والشفاء والتعافي، في بيئة آمنة تحترم الخصوصية والكرامة الإنسانية.',
    visionTitle: 'رؤيتنا',
    vision: 'أن نكون المرجع الموثوق للرعاية النفسية المتكاملة، نساهم في بناء مجتمع أكثر وعياً وصحة نفسية.',
    valuesTitle: 'قيمنا',
    values: [
      { name: 'الوعي', desc: 'نؤمن بقوة الوعي الذاتي كأساس للتغيير والإيجابي' },
      { name: 'الدعم', desc: 'نقدم دعماً شاملاً ومستمراً لكل من يطلب مساعدتنا' },
      { name: 'الأمان النفسي', desc: ' نوفر بيئة آمنة خالية من الأحكام المسبقة' },
      { name: 'السرية التامة', desc: 'نلتزم بأعلى معايير السرية المهنية' },
      { name: 'الاحترافية', desc: 'نتبع أفضل الممارسات والأساليب العلاجية المثبتة' },
      { name: 'الرحمة', desc: 'نتعامل مع كل个案 بتعاطف واحترام' },
    ],
    philosophyTitle: 'فلسفتنا في العلاج',
    philosophy: 'نبني علاجنا على مفهوم "الوعي" كركيزة أساسية. نؤمن بأن فهم الذات والوعي بالمشاعر والسلوكيات هو مفتاح التغيير الحقيقي والدائم. نجمع بين الأساليب العلاجية الحديثة والنهج الإنساني الدافئ، لنقدم رعاية تتسم بالاحترافية والعمق الإنساني في آن واحد.',
  },
  
  // Contact Page
  contact: {
    title: 'تواصل معنا',
    subtitle: 'نحن هنا لمساعدتك. لا تتردد في التواصل معنا',
    form: {
      name: 'الاسم الكامل',
      phone: 'رقم الجوال',
      email: 'البريد الإلكتروني (اختياري)',
      subject: 'الموضوع',
      message: 'رسالتك',
      submit: 'إرسال الرسالة',
      success: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
      error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    },
    info: {
      address: 'العنوان',
      addressValue: 'المملكة العربية السعودية',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      workingHours: 'ساعات العمل',
      workingHoursValue: 'السبت - الخميس: 9 صباحاً - 9 مساءً',
    },
    privacy: 'جميع بياناتك وجلساتك تحظى بسرية تامة ولا يتم مشاركتها مع أي طرف ثالث.',
    whatsappDirect: 'تواصل عبر واتساب',
  },
  
  // FAQ
  faq: {
    title: 'الأسئلة الشائعة',
    subtitle: 'إجابات على الأسئلة الأكثر شيوعاً',
    items: [
      {
        question: 'كيف يمكنني حجز موعد؟',
        answer: 'يمكنك حجز موعد عبر الاتصال بنا أو إرسال رسالة عبر نموذج التواصل أو واتساب. سيقوم فريقنا بالتواصل معك لتحديد الموعد المناسب.',
      },
      {
        question: 'هل الجلسات سرية؟',
        answer: 'نعم، نلتزم بأعلى معايير السرية المهنية. جميع المعلومات التي تشاركها معنا محمية تماماً ولا يتم مشاركتها مع أي طرف ثالث دون موافقتك الصريحة.',
      },
      {
        question: 'كم مدة الجلسة الواحدة؟',
        answer: 'تستمر الجلسة الفردية عادة ما بين 45-60 دقيقة. قد تختلف المدة حسب نوع الجلسة والخطة العلاجية المحددة.',
      },
      {
        question: 'ما هي طرق الدفع المتاحة؟',
        answer: 'نقبل الدفع النقدي والتحويل البنكي وبطاقات الائتمان. نقدم أيضاً خطط دفع مرنة للحالات التي تحتاج ذلك.',
      },
      {
        question: 'هل يمكنني حضور الجلسات أونلاين؟',
        answer: 'نعم، نقدم خدمة الجلسات عن بُعد (أونلاين) للذين لا يستطيعون الحضور شخصياً، مع الحفاظ على نفس معايير الجودة والسرية.',
      },
      {
        question: 'كم عدد الجلسات التي أحتاجها؟',
        answer: 'يختلف عدد الجلسات من شخص لآخر حسب الحالة الفردية والأهداف العلاجية. يتم تحديد خطة علاجية مخصصة خلال الجلسات الأولى.',
      },
    ],
  },
  
  // Blog
  blog: {
    title: 'المدونة',
    subtitle: 'مقالات توعوية حول الصحة النفسية والتعافي',
    readMore: 'اقرأ المزيد',
    posts: [
      {
        title: 'أهمية الوعي النفسي في حياتنا اليومية',
        excerpt: 'كيف يساعدنا الوعي بمشاعرنا وسلوكياتنا على تحسين جودة حياتنا وعلاقاتنا...',
        category: 'الصحة النفسية',
        date: '15 ديسمبر 2024',
      },
      {
        title: '10 نصائح للتعامل مع الضغط النفسي',
        excerpt: 'استراتيجيات عملية ومثبتة علمياً للتعامل مع الضغوطات اليومية...',
        category: 'نصائح وإرشادات',
        date: '10 ديسمبر 2024',
      },
      {
        title: 'خطوات نحو التعافي من الإدمان',
        excerpt: 'رحلة التعافي تبدأ بخطوة واحدة. تعرف على المراحل الأساسية في طريق الشفاء...',
        category: 'علاج الإدمان',
        date: '5 ديسمبر 2024',
      },
    ],
  },
  
  // Footer
  footer: {
    description: 'مركز رعاية نفسية متكامل يرافقك في رحلة الشفاء والتعافي بخصوصية وأمان تام',
    quickLinks: 'روابط سريعة',
    services: 'خدماتنا',
    contactUs: 'تواصل معنا',
    followUs: 'تابعنا',
    rights: 'جميع الحقوق محفوظة',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
  },
};

// English translations
const en = {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    team: 'Our Team',
    blog: 'Blog',
    contact: 'Contact Us',
    faq: 'FAQ',
    bookNow: 'Book Now',
  },
  
  // Hero Section
  hero: {
    title: 'Integrated Mental Health Care...',
    subtitle: 'Your Journey Towards Awareness & Recovery',
    description: 'Sewar Waie Clinic - An integrated mental health center that accompanies you on your healing journey with complete privacy and safety',
    cta: 'Book Your Consultation Now',
    learnMore: 'Learn More',
  },
  
  // About Section
  about: {
    sectionTitle: 'About the Clinic',
    title: 'Sewar Waie',
    subtitle: 'Integrated Mental Health Care Center',
    description: '"Sewar Waie" is an integrated mental health care center, featuring a distinguished team of specialists and therapists in psychotherapy and addiction treatment.',
    description2: 'We provide comprehensive care based on awareness and support, accompanying beneficiaries on their journey to healing and recovery with complete privacy and safety.',
    features: [
      { title: 'Complete Privacy', desc: 'All your data and sessions are completely confidential' },
      { title: 'Specialized Team', desc: 'Certified experts with extensive experience' },
      { title: 'Safe Environment', desc: 'A warm and comfortable space for therapy' },
      { title: 'Continuous Follow-up', desc: 'Ongoing support throughout the recovery journey' },
    ],
  },
  
  // Services
  services: {
    sectionTitle: 'Our Services',
    sectionSubtitle: 'We offer a comprehensive range of specialized mental health services',
    items: [
      {
        title: 'Individual Psychotherapy',
        description: 'Individual therapy sessions custom-designed to meet your unique needs, helping you understand your emotions and develop coping tools for challenges.',
        icon: 'user',
      },
      {
        title: 'Addiction Treatment',
        description: 'Comprehensive addiction treatment programs combining individual and group sessions with continuous support for sustainable recovery.',
        icon: 'heart',
      },
      {
        title: 'Family Counseling',
        description: 'Family sessions to enhance communication, resolve conflicts, and build healthy family relationships based on mutual understanding.',
        icon: 'users',
      },
      {
        title: 'Group Therapy',
        description: 'Supportive group sessions in a safe environment where you share experiences with others going through similar journeys under expert supervision.',
        icon: 'message-circle',
      },
      {
        title: 'Child & Adolescent Counseling',
        description: 'Specialized assessment and treatment for children and adolescents, addressing psychological and behavioral challenges with age-appropriate approaches.',
        icon: 'baby',
      },
      {
        title: 'Awareness & Training Programs',
        description: 'Workshops and awareness programs for organizations to promote mental health in workplace and community settings.',
        icon: 'graduation-cap',
      },
    ],
    bookNow: 'Book Now',
  },
  
  // Why Us
  whyUs: {
    sectionTitle: 'Why Sewar Waie?',
    reasons: [
      { title: 'Complete Confidentiality', desc: 'We adhere to the highest professional confidentiality standards to protect your privacy' },
      { title: 'Specialized Team', desc: 'Elite certified professionals with diverse expertise' },
      { title: 'Awareness-Based Approach', desc: 'We use modern therapeutic approaches focused on self-awareness' },
      { title: 'Safe & Warm Environment', desc: 'A comfortable space where you feel safe and accepted' },
      { title: 'Personalized Treatment Plans', desc: 'Programs specifically designed to meet your individual needs' },
      { title: 'Continuous Support', desc: 'Ongoing support even after completing the treatment program' },
    ],
  },
  
  // Team
  team: {
    sectionTitle: 'Our Specialized Team',
    sectionSubtitle: 'Elite certified specialists and therapists',
    viewAll: 'View All',
    members: [
      {
        name: 'Dr. Ahmed Al-Rashid',
        specialty: 'Psychiatry Consultant',
        bio: 'Over 15 years of experience in psychiatry and addiction treatment',
      },
      {
        name: 'Sarah Al-Mansour',
        specialty: 'Psychotherapist',
        bio: 'Specialized in CBT and group therapy',
      },
      {
        name: 'Dr. Khaled Al-Omari',
        specialty: 'Addiction Treatment Specialist',
        bio: 'Expert in rehabilitation and behavioral addiction treatment programs',
      },
      {
        name: 'Noura Al-Qahtani',
        specialty: 'Family Therapist',
        bio: 'Specialized in family therapy and marriage/child counseling',
      },
    ],
  },
  
  // Testimonials
  testimonials: {
    sectionTitle: 'Client Testimonials',
    sectionSubtitle: 'Real success stories from the recovery journey',
    items: [
      {
        name: 'Mohammed A.',
        text: 'My experience at Sewar Waie completely changed my life. The team made me feel I\'m not alone, and helped me regain my self-confidence.',
      },
      {
        name: 'Fatima S.',
        text: 'A truly safe and warm environment. I feel comfortable in every session, and appreciate the professionalism and complete confidentiality.',
      },
      {
        name: 'Abdullah M.',
        text: 'The addiction treatment program here is completely different. The focus on self-awareness and continuous support was key to my recovery.',
      },
    ],
  },
  
  // CTA
  cta: {
    title: 'Start Your Recovery Journey Today',
    description: 'We are here to help. Contact us now and book your first consultation',
    button: 'Contact Us Now',
    whatsapp: 'WhatsApp',
  },
  
  // About Page
  aboutPage: {
    title: 'About Us',
    subtitle: 'Our story, mission, and vision',
    storyTitle: 'Our Story',
    story1: '"Sewar Waie" was founded from a deep belief that everyone deserves the opportunity to live a psychologically healthy and balanced life. Our journey began with the goal of providing mental health care that combines scientific professionalism with human warmth.',
    story2: 'We chose the name "Sewar Waie" because it embodies our message: The bracelet symbolizes connection and containment, while awareness represents the foundation on which we build our therapeutic programs. We believe awareness is the first step towards positive change.',
    missionTitle: 'Our Mission',
    mission: 'To provide integrated and specialized mental health care that accompanies each beneficiary on their individual journey towards awareness, healing, and recovery, in an environment that respects privacy and human dignity.',
    visionTitle: 'Our Vision',
    vision: 'To be the trusted reference for integrated mental health care, contributing to building a more aware and psychologically healthy community.',
    valuesTitle: 'Our Values',
    values: [
      { name: 'Awareness', desc: 'We believe in the power of self-awareness as the foundation for positive change' },
      { name: 'Support', desc: 'We provide comprehensive and ongoing support to anyone who seeks our help' },
      { name: 'Psychological Safety', desc: 'We provide a safe environment free from pre-judgment' },
      { name: 'Complete Confidentiality', desc: 'We adhere to the highest professional confidentiality standards' },
      { name: 'Professionalism', desc: 'We follow best practices and proven therapeutic approaches' },
      { name: 'Compassion', desc: 'We treat every case with empathy and respect' },
    ],
    philosophyTitle: 'Our Therapeutic Philosophy',
    philosophy: 'We build our therapy on the concept of "awareness" as a core pillar. We believe that understanding oneself and being aware of feelings and behaviors is the key to real and lasting change. We combine modern therapeutic approaches with a warm humanistic approach to deliver care that is both professional and deeply human.',
  },
  
  // Contact Page
  contact: {
    title: 'Contact Us',
    subtitle: 'We are here to help. Don\'t hesitate to reach out',
    form: {
      name: 'Full Name',
      phone: 'Phone Number',
      email: 'Email (optional)',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Your message has been sent successfully! We will contact you soon.',
      error: 'An error occurred. Please try again.',
    },
    info: {
      address: 'Address',
      addressValue: 'Saudi Arabia',
      phone: 'Phone',
      email: 'Email',
      workingHours: 'Working Hours',
      workingHoursValue: 'Saturday - Thursday: 9 AM - 9 PM',
    },
    privacy: 'All your data and sessions are completely confidential and will not be shared with any third party.',
    whatsappDirect: 'Contact via WhatsApp',
  },
  
  // FAQ
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to the most common questions',
    items: [
      {
        question: 'How can I book an appointment?',
        answer: 'You can book an appointment by calling us, sending a message through the contact form, or via WhatsApp. Our team will contact you to schedule a convenient time.',
      },
      {
        question: 'Are sessions confidential?',
        answer: 'Yes, we adhere to the highest professional confidentiality standards. All information you share with us is fully protected and will not be shared with any third party without your explicit consent.',
      },
      {
        question: 'How long is each session?',
        answer: 'Individual sessions typically last between 45-60 minutes. Duration may vary depending on session type and the specific treatment plan.',
      },
      {
        question: 'What payment methods are available?',
        answer: 'We accept cash, bank transfers, and credit cards. We also offer flexible payment plans for those who need them.',
      },
      {
        question: 'Can I attend sessions online?',
        answer: 'Yes, we offer remote (online) sessions for those who cannot attend in person, while maintaining the same quality and confidentiality standards.',
      },
      {
        question: 'How many sessions do I need?',
        answer: 'The number of sessions varies from person to person depending on individual case and therapeutic goals. A personalized treatment plan is determined during the initial sessions.',
      },
    ],
  },
  
  // Blog
  blog: {
    title: 'Blog',
    subtitle: 'Awareness articles about mental health and recovery',
    readMore: 'Read More',
    posts: [
      {
        title: 'The Importance of Psychological Awareness in Daily Life',
        excerpt: 'How awareness of our feelings and behaviors helps improve our life quality and relationships...',
        category: 'Mental Health',
        date: 'December 15, 2024',
      },
      {
        title: '10 Tips for Dealing with Stress',
        excerpt: 'Practical and scientifically proven strategies for dealing with daily pressures...',
        category: 'Tips & Guidelines',
        date: 'December 10, 2024',
      },
      {
        title: 'Steps Towards Addiction Recovery',
        excerpt: 'The recovery journey begins with one step. Learn about the basic stages on the path to healing...',
        category: 'Addiction Treatment',
        date: 'December 5, 2024',
      },
    ],
  },
  
  // Footer
  footer: {
    description: 'An integrated mental health care center that accompanies you on your journey of healing and recovery with complete privacy and safety',
    quickLinks: 'Quick Links',
    services: 'Services',
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    rights: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
};

export type Translations = typeof ar;

const translations: Record<Locale, Translations> = { ar, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
