// Susana Martínez - Lógica Interactiva y Motor Bilingüe (Enfocado a Colegios Concertados & PT)

const translations = {
    es: {
        // Nav
        nav_about: "Sobre mí",
        nav_pillars: "Especialidades",
        nav_exp: "Experiencia docente",
        nav_edu: "Formación",
        nav_contact: "Contacto",

        // Hero
        hero_avail: "Disponible para Colegios Concertados y de Primaria",
        hero_location: "Aranjuez · Valdemoro · Ciempozuelos · Pinto · Getafe · Toledo · Madrid Sur",
        hero_name: "Susana",
        hero_surname: "Martínez",
        hero_title: "Maestra de Educación Primaria e Infantil · Especialidad en Pedagogía Terapéutica (PT) e Inglés",
        hero_desc: "Maestra vocacional con doble titulación en Educación Infantil (UCM) y Educación Primaria (UCJC), con mención oficial en Pedagogía Terapéutica (PT) y mención en Lengua Extranjera (Inglés). Con titulación D.E.C.A. completa, experiencia en aulas de compensatoria y programas de refuerzo PROA+. Cercana, comprometida con el acompañamiento individual a cada niño y con la colaboración constante con las familias y el equipo docente.",
        
        // Metrics / Badges
        metric_1_num: "Maestra Primaria e Infantil",
        metric_1_lbl: "Doble Grado (UCM & UCJC)",
        metric_2_num: "Especialista PT",
        metric_2_lbl: "Pedagogía Terapéutica",
        metric_3_num: "Mención en Inglés",
        metric_3_lbl: "B2 Cambridge · Bilingüe",
        metric_4_num: "Titulación D.E.C.A.",
        metric_4_lbl: "Infantil y Primaria",

        // Buttons
        btn_exp: "Ver experiencia docente",
        btn_download: "Descargar CV (PDF)",
        credentials_badge_txt: "Maestra de Primaria e Infantil<br>Especialidad PT · D.E.C.A.",

        // Contact bar
        contact_phone: "Teléfono",
        contact_address: "Zona de trabajo",
        contact_address_val: "Aranjuez, Valdemoro, Ciempozuelos, Pinto, Getafe, Toledo",
        contact_langs: "Idiomas",
        contact_langs_val: "Español (Nativo) · Inglés (B2 First Cambridge)",
        contact_cert: "Acreditaciones",
        contact_cert_val: "D.E.C.A. (Infantil/Primaria) · Formación continua",

        // Pillars section (Áreas de aula y PT)
        pillars_title: "Especialidades & <span>Labor en el Aula</span>",
        pillar_1_title: "Pedagogía Terapéutica (PT) & Apoyo a la Inclusión",
        pillar_1_desc: "Acompañamiento a alumnos con necesidades específicas de apoyo educativo (NEAE), dificultades de aprendizaje y desfase curricular. Adaptaciones curriculares individualizadas, estimulación del lenguaje, refuerzo de la autoestima y clima de aula seguro y respetuoso.",
        pillar_1_tag1: "Adaptación curricular",
        pillar_1_tag2: "Atención a la diversidad",
        pillar_1_tag3: "Aula de compensatoria",
        pillar_1_tag4: "Apoyo individual y en aula",

        pillar_2_title: "Enseñanza de Inglés & Dinamización Lúdica",
        pillar_2_desc: "Mención en lengua extranjera: inglés y certificación B2 First de Cambridge. Metodologías comunicativas basadas en juegos, canciones, rimas e inmersión natural para que los alumnos disfruten y ganen seguridad expresándose en inglés.",
        pillar_2_tag1: "Mención oficial Inglés",
        pillar_2_tag2: "Cambridge B2 First",
        pillar_2_tag3: "Talleres y canciones",
        pillar_2_tag4: "Docencia bilingüe",

        pillar_3_title: "Metodologías Activas & Educación Emocional",
        pillar_3_desc: "Formación de 863 horas en pedagogía activa y Waldorf en Primaria, complementada con experiencia en bosque-escuela (Erasmus+ Eslovaquia). Aprendizaje vivencial, respeto a los ritmos de maduración infantil, expresión plástica y resolución pacífica de conflictos.",
        pillar_3_tag1: "Pedagogía activa",
        pillar_3_tag2: "Educación emocional",
        pillar_3_tag3: "Resolución de conflictos",
        pillar_3_tag4: "Bosque-escuela",

        pillar_4_title: "Cercanía con Familias & Trabajo en Claustro",
        pillar_4_desc: "Capacidad de escucha, comunicación empática y coordinación estrecha con tutores, especialistas y familias para remar juntos por el bienestar del alumno. Complementado con un máster en gestión de personas que aporta herramientas en mediación y trabajo en equipo.",
        pillar_4_tag1: "Tutoría y familias",
        pillar_4_tag2: "Trabajo en equipo",
        pillar_4_tag3: "Escucha activa",
        pillar_4_tag4: "Mediación escolar",

        // Experience
        exp_title: "Experiencia <span>Docente y Trayectoria</span>",
        
        job1_title: "Maestra de refuerzo educativo (Programa PROA+)",
        job1_company: "Fundación Juanjo Torrejón · IES Domenico Scarlatti (Aranjuez)",
        job1_date: "Enero 2026 - Junio 2026",
        job1_desc1: "Acompañamiento y refuerzo en materias instrumentales a alumnos con dificultades de aprendizaje y en riesgo de rezago escolar.",
        job1_desc2: "Coordinación con el departamento de orientación y tutores para afianzar hábitos de estudio, confianza y motivación personal.",

        job2_title: "Maestra de refuerzo y formación básica",
        job2_company: "Ayuntamiento de Ontígola",
        job2_date: "Septiembre 2025 - Diciembre 2025",
        job2_desc1: "Apoyo educativo adaptado a las necesidades de cada estudiante, refuerzo en lectura, escritura y habilidades fundamentales.",
        job2_desc2: "Creación de un espacio acogedor y motivador donde recuperar el gusto por aprender y la seguridad personal.",

        job3_title: "Monitora de infantil (Pedagogía activa y Waldorf 3-5 años)",
        job3_company: "Asociación Educación Alternativa en Toledo",
        job3_date: "Septiembre 2018 - Octubre 2018",
        job3_desc1: "Acompañamiento respetuoso a niños de 3 a 5 años en aula basada en ritmos naturales, juego libre y expresión artística.",
        job3_desc2: "Comunicación fluida y cercana con los padres para favorecer un entorno coherente de cariño y desarrollo.",

        job4_title: "Gestión y atención a familias en centro educativo",
        job4_company: "Centro de Idiomas Egastiz S.L.",
        job4_date: "Noviembre 2016 - Junio 2017",
        job4_desc1: "Atención diaria a padres y alumnos, apoyo organizativo al profesorado y seguimiento de las actividades de aula.",
        job4_desc2: "Resolución cercana de dudas familiares y coordinación de horarios y grupos de aprendizaje.",

        job5_title: "Profesora de actividades extraescolares (Inglés y Talleres)",
        job5_company: "Inst. Superior de Estudios Empresariales Cambridge S.A.",
        job5_date: "Octubre 2016",
        job5_desc1: "Taller de juegos y canciones en inglés (CEIP Carlos III) fomentando la soltura y diversión con el idioma.",
        job5_desc2: "Taller de iniciación informática (CEIP San Isidro) y taller de musicoterapia (CPEE Príncipe de Asturias) con alumnado de educación especial.",

        job6_title: "Maestra de Primaria (Aula de Compensatoria)",
        job6_company: "Colegio San Pascual (Aranjuez)",
        job6_date: "Septiembre 2012 - Junio 2013",
        job6_desc1: "Docencia directa a alumnos con importante desfase curricular, diseñando materiales a su nivel para recuperar competencias.",
        job6_desc2: "Integración, refuerzo de la autoestima y fomento de la convivencia positiva en el colegio.",

        job7_title: "Maestra de Educación Infantil",
        job7_company: "Colegio Sagrada Familia (Aranjuez)",
        job7_date: "Febrero 2011",
        job7_desc1: "Práctica docente en primer ciclo de infantil, estimulación del lenguaje y autonomía en las rutinas de aula.",

        job8_title: "Gestión administrativa y coordinación",
        job8_company: "M.A.I Soluciones Técnicas Capilares S.L.",
        job8_date: "Noviembre 2018 - Julio 2025",
        job8_desc1: "Experiencia en gestión documental, atención a personas y resolución de incidencias en equipo interdisciplinar.",

        // Education section
        edu_section_title: "Titulaciones Académicas & <span>Cursos Docentes</span>",
        edu_col1_title: "Grados y Menciones Oficiales",
        edu1_title: "Mención en Pedagogía Terapéutica (PT)",
        edu1_school: "Universidad Camilo José Cela (UCJC) · 2026",
        edu1_details: "Especialidad oficial para el apoyo a la inclusión, atención a la diversidad y adaptación curricular en centros educativos.",

        edu2_title: "Mención Oficial en Lengua Extranjera: Inglés",
        edu2_school: "Universidad Camilo José Cela (UCJC) · 2012 - 2013",
        edu2_details: "Capacitación oficial para impartir inglés en Primaria y metodologías bilingües.",

        edu3_title: "Grado en Magisterio de Primaria",
        edu3_school: "Universidad Camilo José Cela (UCJC) · 2011 - 2012",
        edu3_details: "Habilitación oficial completa como maestra de Educación Primaria.",

        edu4_title: "Diplomatura en Magisterio de Educación Infantil",
        edu4_school: "Universidad Complutense de Madrid (UCM) · 2006 - 2009",
        edu4_details: "Didáctica y desarrollo evolutivo de la infancia de 0 a 6 años.",

        edu5_title: "Máster en Dirección de Recursos Humanos",
        edu5_school: "Universidad Camilo José Cela (UCJC) · 2023 - 2025",
        edu5_details: "Formación de posgrado aplicada a la gestión de personas, comunicación interpersonal y resolución de conflictos.",

        edu_col2_title: "Formación Docente Complementaria & Acreditaciones",
        spec1_title: "Declaración Eclesiástica de Competencia Académica (D.E.C.A.)",
        spec1_school: "Acreditación oficial para Infantil y Primaria",
        spec1_details: "Requisito y formación fundamental para la docencia en colegios concertados.",

        spec2_title: "Pedagogía Waldorf en Primaria (863 Horas)",
        spec2_school: "Centro de Formación de Pedagogía Waldorf · 2020",
        spec2_details: "Didáctica viva, recursos artísticos y enfoque integral de las etapas infantiles.",

        spec3_title: "Psicotraumatología Escolar I (Dr. Bernd Ruf)",
        spec3_school: "Formación en apoyo ante situaciones difíciles en la infancia · 2019",
        spec3_details: "Recursos pedagógicos para estabilizar, acoger y acompañar a niños que atraviesan dificultades emocionales.",

        spec4_title: "Enseñanza Bilingüe en Inglés & Pizarras Digitales",
        spec4_school: "Univ. Francisco de Vitoria (130h) & Univ. Camilo José Cela · 2010 - 2012",
        spec4_details: "Metodologías de aula bilingüe y uso práctico de herramientas interactivas.",

        spec5_title: "Logopedia, Musicoterapia & Psicomotricidad (UNED - 180h)",
        spec5_school: "Universidad Nacional de Educación a Distancia (UNED) · 2009",
        spec5_details: "Herramientas de apoyo práctico en el aula para la expresión oral, el ritmo y el desarrollo motor.",

        // CTA
        cta_title: "¿Hablamos para su colegio?",
        cta_desc: "Estaré encantada de concertar una entrevista para incorporarme a su centro como maestra de Primaria, especialista de PT o en refuerzo educativo.",
        cta_call: "Llamar",
        cta_cv: "Descargar CV (PDF)",
        cta_email: "Enviar Email",
        footer_text: "© 2026 Susana Martínez · Maestra de Educación Primaria e Infantil (PT e Inglés) · Aranjuez / Madrid Sur / Toledo"
    },
    en: {
        // Nav
        nav_about: "About me",
        nav_pillars: "Specialties",
        nav_exp: "Teaching experience",
        nav_edu: "Education",
        nav_contact: "Contact",

        // Hero
        hero_avail: "Available for Primary & Semi-Private (Concertados) Schools",
        hero_location: "Aranjuez · Valdemoro · Ciempozuelos · Pinto · Getafe · Toledo · South Madrid",
        hero_name: "Susana",
        hero_surname: "Martínez",
        hero_title: "Primary & Early Childhood Teacher · Special Needs (PT) & English Mention",
        hero_desc: "Dedicated school teacher holding degrees in Early Childhood Education (UCM) and Primary Education (UCJC), with official specializations in Therapeutic Pedagogy (Special Needs - PT) and Foreign Language (English). Full D.E.C.A. certified, experienced in compensatory classrooms and PROA+ learning reinforcement programs. Empathetic, supportive, and committed to individualized child care and active family collaboration.",
        
        // Metrics / Badges
        metric_1_num: "Primary & Early Years",
        metric_1_lbl: "Dual Degree (UCM & UCJC)",
        metric_2_num: "Special Needs (PT)",
        metric_2_lbl: "Therapeutic Pedagogy",
        metric_3_num: "English Mention",
        metric_3_lbl: "Cambridge B2 · Bilingual",
        metric_4_num: "D.E.C.A. Certified",
        metric_4_lbl: "Early Years & Primary",

        // Buttons
        btn_exp: "View teaching experience",
        btn_download: "Download CV (PDF)",
        credentials_badge_txt: "Primary & Early Years Teacher<br>Special Needs (PT) · D.E.C.A.",

        // Contact bar
        contact_phone: "Phone",
        contact_address: "Work area",
        contact_address_val: "Aranjuez, Valdemoro, Ciempozuelos, Pinto, Getafe, Toledo",
        contact_langs: "Languages",
        contact_langs_val: "Spanish (Native) · English (Cambridge B2 First)",
        contact_cert: "Certifications",
        contact_cert_val: "D.E.C.A. · Continuing Teacher Training",

        // Pillars section
        pillars_title: "Teaching Specialties & <span>Classroom Focus</span>",
        pillar_1_title: "Special Needs (PT) & Inclusive Education",
        pillar_1_desc: "Individualized support for students with special educational needs, learning difficulties, and curricular lag. Customized curricular adaptations, speech stimulation, confidence boosting, and fostering a safe, encouraging classroom environment.",
        pillar_1_tag1: "Curricular adaptation",
        pillar_1_tag2: "Diversity support",
        pillar_1_tag3: "Compensatory education",
        pillar_1_tag4: "Classroom assistance",

        pillar_2_title: "English Teaching & Playful Immersion",
        pillar_2_desc: "Official foreign language specialization (English) and Cambridge B2 First certification. Communicative methods utilizing rhymes, games, and music to help children enjoy learning and build spoken confidence.",
        pillar_2_tag1: "English Specialization",
        pillar_2_tag2: "Cambridge B2 First",
        pillar_2_tag3: "Games & music",
        pillar_2_tag4: "Bilingual education",

        pillar_3_title: "Active Learning & Emotional Well-being",
        pillar_3_desc: "863 hours of specialized training in Waldorf and active pedagogy for primary years, plus forest-school experience (Erasmus+ Slovakia). Experiential learning, respecting individual developmental paces, and constructive conflict resolution.",
        pillar_3_tag1: "Active pedagogy",
        pillar_3_tag2: "Emotional education",
        pillar_3_tag3: "Conflict resolution",
        pillar_3_tag4: "Forest schools",

        pillar_4_title: "Close Family Relations & Team Collaboration",
        pillar_4_desc: "Active listening, transparent communication, and teamwork alongside fellow teachers and families for the child's overall well-being. Complemented by postgraduate studies in people management and mediation.",
        pillar_4_tag1: "Family engagement",
        pillar_4_tag2: "Teamwork",
        pillar_4_tag3: "Active listening",
        pillar_4_tag4: "School mediation",

        // Experience
        exp_title: "Teaching Experience & <span>Classroom Career</span>",
        
        job1_title: "Educational Reinforcement Teacher (PROA+ Program)",
        job1_company: "Fundación Juanjo Torrejón · IES Domenico Scarlatti (Aranjuez)",
        job1_date: "January 2026 - June 2026",
        job1_desc1: "Targeted support in core subjects for students with learning difficulties to overcome hurdles and regain learning confidence.",
        job1_desc2: "Close teamwork with school counselors and classroom teachers to establish solid study habits and positive motivation.",

        job2_title: "Remedial & Adult Education Teacher",
        job2_company: "Ontígola City Council",
        job2_date: "September 2025 - December 2025",
        job2_desc1: "Tailored educational support addressing specific learning needs in literacy, basic skills, and essential learning.",
        job2_desc2: "Fostering an encouraging environment where students regain enthusiasm for learning.",

        job3_title: "Early Years Educator (Active & Waldorf Pedagogy 3-5 yrs)",
        job3_company: "Toledo Alternative Education Association",
        job3_date: "September 2018 - October 2018",
        job3_desc1: "Attentive guidance for 3 to 5-year-olds centered on natural rhythm, creative play, and artistic expression.",
        job3_desc2: "Clear and supportive dialogue with parents to maintain a nurturing developmental setting.",

        job4_title: "Educational Center Administration & Family Support",
        job4_company: "Egastiz Language Center S.L.",
        job4_date: "November 2016 - June 2017",
        job4_desc1: "Daily support for parents and students, organizational assistance for teaching staff, and classroom scheduling.",
        job4_desc2: "Attentive problem-solving for family inquiries and coordination of learning groups.",

        job5_title: "Extracurricular Programs Teacher (English & Workshops)",
        job5_company: "Cambridge Higher Institute for Business Studies S.A.",
        job5_date: "October 2016",
        job5_desc1: "English games and music workshop (CEIP Carlos III) promoting natural language fluency.",
        job5_desc2: "Computing workshop (CEIP San Isidro) and music therapy workshop (CPEE Príncipe de Asturias) for special educational needs.",

        job6_title: "Primary School Teacher (Compensatory Education)",
        job6_company: "San Pascual School (Aranjuez)",
        job6_date: "September 2012 - June 2013",
        job6_desc1: "Direct instruction for students experiencing curricular lag, tailoring individualized materials to bridge learning gaps.",
        job6_desc2: "Promoting inclusion, positive self-esteem, and collaborative school harmony.",

        job7_title: "Early Childhood Teacher",
        job7_company: "Sagrada Familia School (Aranjuez)",
        job7_date: "February 2011",
        job7_desc1: "Classroom practice in early years education (ages 0-3), language stimulation, and classroom routine autonomy.",

        job8_title: "Administrative Coordination & Support",
        job8_company: "M.A.I Soluciones Técnicas Capilares S.L.",
        job8_date: "November 2018 - July 2025",
        job8_desc1: "Administrative management and teamwork in collaborative healthcare support services.",

        // Education section
        edu_section_title: "Academic Degrees & <span>Teacher Training</span>",
        edu_col1_title: "Official Degrees & Specializations",
        edu1_title: "Official Specialization in Therapeutic Pedagogy (PT)",
        edu1_school: "Camilo José Cela University (UCJC) · 2026",
        edu1_details: "Official qualifying credential for educational inclusion, diversity support, and individual curricular adaptation.",

        edu2_title: "Official Mention in Foreign Language: English",
        edu2_school: "Camilo José Cela University (UCJC) · 2012 - 2013",
        edu2_details: "Official qualifying mention to teach English in primary schools and bilingual classrooms.",

        edu3_title: "Bachelor's Degree in Primary Education",
        edu3_school: "Camilo José Cela University (UCJC) · 2011 - 2012",
        edu3_details: "Complete official qualification as a Primary School Teacher.",

        edu4_title: "Degree in Early Childhood Education (Diplomatura)",
        edu4_school: "Complutense University of Madrid (UCM) · 2006 - 2009",
        edu4_details: "Specialized teaching and developmental psychology for children aged 0 to 6.",

        edu5_title: "Master's Degree in Human Resources Management",
        edu5_school: "Camilo José Cela University (UCJC) · 2023 - 2025",
        edu5_details: "Postgraduate education applied to communication, conflict mediation, and interpersonal teamwork.",

        edu_col2_title: "Complementary Qualifications & Training",
        spec1_title: "Ecclesiastical Competence Credential (D.E.C.A.)",
        spec1_school: "Official Credential for Early Years & Primary",
        spec1_details: "Essential qualification for teaching in Spanish semi-private (concertados) schools.",

        spec2_title: "Waldorf Primary Pedagogy (863 Hours)",
        spec2_school: "Center for Waldorf Pedagogy Training · 2020",
        spec2_details: "Active didactics, artistic teaching techniques, and comprehensive child developmental support.",

        spec3_title: "School Trauma Pedagogy I (Dr. Bernd Ruf)",
        spec3_school: "Specialized training for supporting vulnerable children · 2019",
        spec3_details: "Pedagogical tools to welcome, reassure, and accompany children facing emotional adversity.",

        spec4_title: "Bilingual English Teaching & Interactive Whiteboards",
        spec4_school: "Francisco de Vitoria Univ. (130h) & Camilo José Cela Univ. · 2010 - 2012",
        spec4_details: "Classroom teaching methodologies and digital educational resources.",

        spec5_title: "Speech Therapy, Music Therapy & Psychomotricity (UNED - 180h)",
        spec5_school: "National Distance Education University (UNED) · 2009",
        spec5_details: "Practical classroom tools for oral expression, rhythm, and motor development.",

        // CTA
        cta_title: "Shall we arrange an interview for your school?",
        cta_desc: "I will be delighted to meet you and discuss joining your educational team as a Primary teacher, PT specialist, or in learning reinforcement.",
        cta_call: "Call",
        cta_cv: "Download CV (PDF)",
        cta_email: "Send Email",
        footer_text: "© 2026 Susana Martínez · Primary & Early Childhood Teacher (PT & English) · Aranjuez / South Madrid / Toledo"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('susana_preferred_lang') || 'es';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('susana_preferred_lang', lang);

        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.documentElement.lang = lang;

        const trans = translations[lang] || translations.es;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (trans[key]) {
                el.innerHTML = trans[key];
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    setLanguage(currentLang);

    // 2. Tilt Effect on Profile Image Wrapper
    const tiltWrapper = document.querySelector('.tilt-card');
    if (tiltWrapper && window.matchMedia('(pointer: fine)').matches) {
        tiltWrapper.addEventListener('mousemove', (e) => {
            const rect = tiltWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const tiltX = (y / (rect.height / 2)) * -5;
            const tiltY = (x / (rect.width / 2)) * 5;
            tiltWrapper.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        tiltWrapper.addEventListener('mouseleave', () => {
            tiltWrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    }

    // 3. Scroll Animations via IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 4. Timeline dynamic progress tracker
    const timeline = document.querySelector('.timeline');
    const progress = document.querySelector('.timeline-progress');

    if (timeline && progress) {
        window.addEventListener('scroll', () => {
            const rect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const totalHeight = rect.height;
                const visiblePart = Math.max(0, windowHeight - rect.top - 120);
                const percentage = Math.min(100, Math.max(0, (visiblePart / totalHeight) * 100));
                progress.style.height = `${percentage}%`;
            }
        });
    }
});
