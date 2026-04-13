/* script.js */
const regionsInfo = {
    'europe': {
        name: 'Зарубежная Европа',
        color: '#ff007f', // Neon Pink
        countries: ['Germany', 'United Kingdom', 'France', 'Italy', 'Spain', 'Ukraine', 'Poland', 'Romania', 'Netherlands', 'Belgium', 'Czech Rep.', 'Greece', 'Portugal', 'Sweden', 'Hungary', 'Belarus', 'Austria', 'Serbia', 'Switzerland', 'Bulgaria', 'Denmark', 'Finland', 'Slovakia', 'Norway', 'Ireland', 'Croatia', 'Moldova', 'Bosnia and Herz.', 'Albania', 'Lithuania', 'Macedonia', 'Slovenia', 'Latvia', 'Estonia', 'Montenegro', 'Luxembourg', 'Malta', 'Iceland', 'Andorra', 'Liechtenstein', 'Monaco', 'San Marino', 'Kosovo'],
        desc: 'Зарубежная Европа — один из главных мировых геополитических и экономических центров. Это регион с ярко выраженной постиндустриальной экономикой, который производит почти четверть мирового ВВП. Ключевая особенность макрорегиона — глубочайшая экономическая и политическая интеграция внутри Европейского союза (ЕС). Страны Европы являются мировыми лидерами по уровню качества жизни, социальной защищенности и экологическим стандартам.',
        details: [
            {label: 'Ведущие отрасли', value: 'Развитое машиностроение (автомобилестроение в Германии и Франции, аэрокосмическая промышленность, точное приборостроение), передовая химическая и фармацевтическая промышленность (Швейцария, Германия), легкая промышленность мировых брендов одежды (Италия, Франция).'},
            {label: 'Непроизводственная сфера', value: 'Сфера услуг генерирует более 70% ВВП многих стран региона. Здесь базируются крупнейшие мировые банки (Лондон, Цюрих) и располагаются главные центры международного туризма (Италия, Испания, Франция).'},
            {label: 'Экономические лидеры', value: 'Основу мощи региона составляет "большая четверка": Германия (индустриальный мотор), Франция (АПК, инновации), Великобритания (финансы) и Италия (промышленность и дизайн).'},
            {label: 'Транспорт и инфраструктура', value: 'Плотнейшая транспортная сеть в мире со сверхскоростными железнодорожными магистралями и крупнейшими морскими портами (Роттердам, Гамбург, Антверпен).'},
            {label: 'Проблемы региона', value: 'Демографическое старение населения («седеющая Европа»), увеличивающее социальную нагрузку, а также структурные диспропорции между более богатым Севером и менее развитым Югом (Греция, Португалия).'}
        ]
    },
    'asia': {
        name: 'Зарубежная Азия',
        color: '#00e5ff', // Cyan
        countries: ['China', 'India', 'Indonesia', 'Pakistan', 'Bangladesh', 'Japan', 'Philippines', 'Vietnam', 'Turkey', 'Iran', 'Thailand', 'Myanmar', 'South Korea', 'Iraq', 'Afghanistan', 'Saudi Arabia', 'Uzbekistan', 'Malaysia', 'Yemen', 'Nepal', 'North Korea', 'Sri Lanka', 'Kazakhstan', 'Syria', 'Cambodia', 'Jordan', 'Azerbaijan', 'United Arab Emirates', 'Tajikistan', 'Israel', 'Laos', 'Lebanon', 'Kyrgyzstan', 'Turkmenistan', 'Singapore', 'Oman', 'State of Palestine', 'Kuwait', 'Georgia', 'Mongolia', 'Armenia', 'Qatar', 'Bahrain', 'Timor-Leste', 'Cyprus', 'Bhutan', 'Maldives', 'Brunei'],
        desc: 'Зарубежная Азия — крупнейший по площади и самый населенный (более 4 млрд человек) регион земного шара. Сегодня это главный и самый динамично развивающийся локомотив мировой экономики, выступающий в роли «мировой фабрики». Для региона характерны поразительные социально-экономические контрасты.',
        details: [
            {label: 'Экономическая структура', value: 'Огромное разнообразие: высокоразвитая постиндустриальная Япония, "азиатские тигры" (Республика Корея, Сингапур, Тайвань), новые индустриальные страны, а также быстрорастущие гиганты с колоссальным внутренним рынком (Китай и Индия).'},
            {label: 'Мировое производство', value: 'Абсолютный монополист в производстве бытовой и вычислительной электроники, микрочипов. Регион лидирует по объемам выпуска автомобилей, судостроению, а также производству текстиля и обуви.'},
            {label: 'Природные ресурсы и энергетика', value: 'Страны Ближнего Востока (Саудовская Аравия, ОАЭ, Катар) концентрируют крупнейшие запасы углеводородов и доминируют на мировом рынке, формируя свое благосостояние за счет экспорта нефти.'},
            {label: 'Сельское хозяйство', value: 'Главный в мире производитель сельскохозяйственной продукции. Абсолютное лидерство в выращивании риса, чая, натурального каучука, джута и специй.'},
            {label: 'Основные тенденции', value: 'Колоссальный приток иностранных инвестиций, мощнейшие темпы урбанизации, рост среднего класса, но при этом сохраняются проблемы экологического характера и перенаселенности.'}
        ]
    },
    'africa': {
        name: 'Африка',
        color: '#ffaa00', // Neon Orange
        countries: ['Nigeria', 'Ethiopia', 'Egypt', 'Dem. Rep. Congo', 'Tanzania', 'South Africa', 'Kenya', 'Uganda', 'Algeria', 'Sudan', 'Morocco', 'Angola', 'Mozambique', 'Ghana', 'Madagascar', 'Cameroon', 'Côte d\'Ivoire', 'Niger', 'Burkina Faso', 'Mali', 'Malawi', 'Zambia', 'Senegal', 'Chad', 'Somalia', 'Zimbabwe', 'Guinea', 'Rwanda', 'Benin', 'Burundi', 'Tunisia', 'South Sudan', 'Togo', 'Sierra Leone', 'Libya', 'Congo', 'Liberia', 'Central African Rep.', 'Mauritania', 'Eritrea', 'Namibia', 'Gambia', 'Botswana', 'Gabon', 'Lesotho', 'Guinea-Bissau', 'Eq. Guinea', 'Mauritius', 'Eswatini', 'Djibouti', 'Comoros', 'Cabo Verde', 'Sao Tome and Principe', 'Seychelles', 'W. Sahara'],
        desc: 'Зарубежная Африка — второй по величине макрорегион, обладающий исключительным, во многом еще не освоенным природно-ресурсным потенциалом. Несмотря на свои богатства, Африка остается наименее экономически развитым регионом планеты, сильно зависящим от экспорта сырья.',
        details: [
            {label: 'Экономическая специализация', value: 'Ярко выраженная монокультурная и аграрно-сырьевая структура. Промышленность представлена в основном добычей нефти (Нигерия, Алжир) и драгоценных/цветных металлов (ДР Конго, ЮАР, Ботсвана).'},
            {label: 'Сельское хозяйство', value: 'Основа выживания большей части жителей континента. Африка — мировой поставщик тропических культур: какао-бобов (Кот-д\'Ивуар), кофе, хлопка и фиников.'},
            {label: 'Инфраструктура', value: 'Крайне слабая транспортная сеть (основные дороги идут от рудников к портам), низкий уровень электрификации. Обрабатывающая промышленность сконцентрирована лишь в нескольких странах.'},
            {label: 'Проблемы развития', value: 'Критический уровень бедности, дефицит развитой медицины и пресной воды, нехватка квалифицированных кадров, а также политическая и военная нестабильность.'},
            {label: 'Экономические лидеры', value: 'Единственное высокоразвитое государство — ЮАР (Южно-Африканская Республика) с диверсифицированной экономикой. Среди развивающихся выделяются Нигерия и Египет.'}
        ]
    },
    'na': {
        name: 'Северная Америка',
        color: '#ff3366', // Neon Red
        countries: ['United States', 'Canada', 'Greenland'],
        desc: 'Северная Америка, ядром которой являются США и Канада — ведущий макрорегион планеты, выступающий локомотивом мирового научно-технического прогресса. Это мощнейшая постиндустриальная экономика, обеспеченная огромными ресурсами и внутренним рынком.',
        details: [
            {label: 'Постиндустриальные отрасли', value: 'Безусловное лидерство в сфере наукоемких производств (IT, биотехнологии, разработка ПО, аэрокосмическая промышленность). Доля сферы услуг превышает 75% ВВП.'},
            {label: 'Промышленность и финансы', value: 'Крупнейший мировой финансовый сектор, управляющий инвестиционными потоками глобальной экономики. Доминирование автомобилестроительных, фармацевтических и химических корпораций.'},
            {label: 'Агропромышленный комплекс', value: 'США и Канада являются главными мировыми экспортерами продовольствия. Сельское хозяйство здесь отличается максимальной степенью механизации, химизации и применением биотехнологий.'},
            {label: 'Интеграция', value: 'Глубокая экономическая интеграция США, Канады (и Мексики) в рамках одного из крупнейших в мире торговых блоков USMCA, обеспечивающая свободный транзит капиталов и товаров.'}
        ]
    },
    'la': {
        name: 'Латинская Америка',
        color: '#00ff66', // Neon Green
        countries: ['Brazil', 'Mexico', 'Colombia', 'Argentina', 'Peru', 'Venezuela', 'Chile', 'Guatemala', 'Ecuador', 'Bolivia', 'Haiti', 'Cuba', 'Dominican Rep.', 'Honduras', 'Paraguay', 'Nicaragua', 'El Salvador', 'Costa Rica', 'Panama', 'Uruguay', 'Jamaica', 'Trinidad and Tobago', 'Guyana', 'Suriname', 'Belize', 'Bahamas', 'Barbados', 'Saint Lucia', 'Grenada', 'Saint Vincent and the Grenadines', 'Antigua and Barb.', 'Dominica', 'Saint Kitts and Nevis', 'Puerto Rico', 'Falkland Is.', 'Mexico', 'Panama', 'Cuba', 'Dominican Rep.'],
        desc: 'Латинская Америка — это обширный индустриально-аграрный макрорегион, состоящий из развивающихся стран «новой волны». В последние десятилетия здесь происходит активный процесс индустриализации, при этом сохраняется зависимость от экспорта сырья.',
        details: [
            {label: 'Промышленное развитие', value: 'Темп задают новые индустриальные страны («большая тройка»: Бразилия, Мексика, Аргентина), создавшие мощную обрабатывающую, нефтехимическую промышленность и машиностроение.'},
            {label: 'Горнодобывающая отрасль', value: 'Регион играет ключевую роль на мировом рынке, являясь главным экспортером железной и медной руды (Чили, Перу), нефти (Венесуэла), серебра и стратегического лития.'},
            {label: 'Сельское хозяйство', value: 'Диверсифицированный и крупный аграрный сектор. Абсолютное лидерство по экспорту говядины, сои, сахарного тростника, кофе, какао и тропических фруктов.'},
            {label: 'Экономические вызовы', value: 'Огромный внешний долг, частые инфляционные кризисы, сильное социальное расслоение населения и зависимость экономик от транснациональных корпораций Запада.'}
        ]
    },
    'oceania': {
        name: 'Австралия и Океания',
        color: '#ffff00', // Neon Yellow
        countries: ['Australia', 'Papua New Guinea', 'New Zealand', 'Fiji', 'Solomon Is.', 'Vanuatu', 'New Caledonia', 'French Polynesia', 'Samoa', 'Guam', 'Kiribati', 'Micronesia', 'Tonga', 'Marshall Is.', 'Palau', 'Nauru', 'Tuvalu'],
        desc: 'Австралия и Океания представляют собой самый малочисленный и географически удаленный макрорегион. Его экономическая картина исключительно контрастна: она варьируется от передовых высокоразвитых стран до островных государств с патриархально-общинным укладом.',
        details: [
            {label: 'Австралия и Новая Зеландия', value: 'Высокоразвитые страны «переселенческого капитализма». Будучи постиндустриальными державами с передовой наукой, они выступают как крупнейшие мировые экспортеры сырья (железная руда, уголь, золото).'},
            {label: 'Аграрный сектор лидеров', value: 'Чрезвычайно продуктивное сельское хозяйство, обеспечивающее рынки качественным мясом, молочной продукцией, пшеницей и овечьей шерстью.'},
            {label: 'Хозяйство Океании', value: 'Островные развивающиеся государства (Фиджи, Вануату и др.) обладают крайне ограниченными ресурсами. Их экономика базируется на туризме, рыболовстве и экспорте копры пальмового масла.'},
            {label: 'Тенденции и вызовы', value: 'Острая демографическая и экологическая уязвимость островов. Одновременно макрорегион активно переориентирует свою экономику на быстрорастущие рынки Азиатско-Тихоокеанского региона.'}
        ]
    }
};

let activeRegionId = null;
let chartInstance = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initMap();
    
    document.getElementById('close-panel').addEventListener('click', () => {
        closeInfoPanel();
        activeRegionId = null;
        updateNavUI();
        updateMapSeries();
    });

    document.getElementById('sidebar-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const resizeObserver = new ResizeObserver(() => {
        if (chartInstance) {
            chartInstance.resize();
        }
    });
    resizeObserver.observe(document.querySelector('.main-content'));
});

function initNav() {
    const navContainer = document.getElementById('region-nav');
    
    Object.entries(regionsInfo).forEach(([id, data]) => {
        const btn = document.createElement('button');
        btn.className = 'nav-item';
        btn.innerText = data.name;
        btn.style.setProperty('--region-color', data.color);
        
        btn.addEventListener('click', () => {
            selectRegion(id);
        });
        
        navContainer.appendChild(btn);
    });
}

function selectRegion(id) {
    if (activeRegionId === id) return; // already active
    
    activeRegionId = id;
    
    // Update UI
    updateNavUI();
    showInfoPanel(id);
    updateMapSeries();
    document.getElementById('placeholder-text').classList.add('hidden');
}

function updateNavUI() {
    const navItems = document.querySelectorAll('.nav-item');
    const regionIds = Object.keys(regionsInfo);
    
    navItems.forEach((btn, index) => {
        if (regionIds[index] === activeRegionId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function showInfoPanel(id) {
    const data = regionsInfo[id];
    const panel = document.getElementById('info-panel');
    const title = document.getElementById('info-title');
    const desc = document.getElementById('info-desc');
    const detailsContainer = document.getElementById('info-details');
    
    // Update CSS Variable for glow
    panel.style.setProperty('--active-color', data.color);
    
    title.innerText = data.name;
    desc.innerText = data.desc;
    
    // Clear old details
    detailsContainer.innerHTML = '';
    
    data.details.forEach(detail => {
        const item = document.createElement('div');
        item.className = 'detail-item';
        
        const label = document.createElement('div');
        label.className = 'detail-label';
        label.innerText = detail.label;
        
        const val = document.createElement('div');
        val.className = 'detail-value';
        val.innerText = detail.value;
        
        item.appendChild(label);
        item.appendChild(val);
        detailsContainer.appendChild(item);
    });
    
    panel.classList.remove('hidden');
}

function closeInfoPanel() {
    document.getElementById('info-panel').classList.add('hidden');
    document.getElementById('placeholder-text').classList.remove('hidden');
}

function initMap() {
    chartInstance = echarts.init(document.getElementById('map'));
    
    window.addEventListener('resize', () => {
        chartInstance.resize();
        updateMapSeries();
    });
    
    // Click on map to select region
    chartInstance.on('click', (params) => {
        if (params.name) {
            // Find which region this country belongs to
            let foundRegion = null;
            for (const [id, data] of Object.entries(regionsInfo)) {
                if (data.countries.includes(params.name)) {
                    foundRegion = id;
                    break;
                }
            }
            if (foundRegion) {
                selectRegion(foundRegion);
            }
        }
    });

    updateMapSeries();
}

function updateMapSeries() {
    const baseColor = '#212936';
    const borderColor = '#3a4659';
    const mapData = [];
    
    // Build array of highlighted countries if a region is active
    if (activeRegionId) {
        const activeData = regionsInfo[activeRegionId];
        
        activeData.countries.forEach(country => {
            mapData.push({
                name: country,
                itemStyle: {
                    areaColor: activeData.color,
                    borderColor: 'rgba(255,255,255,0.5)',
                    borderWidth: 1,
                    shadowBlur: 20,
                    shadowColor: activeData.color
                },
                emphasis: {
                    itemStyle: {
                        areaColor: activeData.color,
                        shadowBlur: 35
                    }
                }
            });
        });
    }

    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            backgroundColor: 'rgba(20,25,30,0.9)',
            borderColor: '#555',
            textStyle: { color: '#fff', fontFamily: 'Outfit' },
            formatter: (params) => {
                if (!params.name) return '';
                // which region is it?
                let rName = 'Вне выбранных регионов';
                if (params.name === 'Russia') {
                   rName = 'Россия (не входит в макрорегионы из списка)';
                } else {
                    for (const [id, data] of Object.entries(regionsInfo)) {
                        if (data.countries.includes(params.name)) {
                            rName = data.name;
                            break;
                        }
                    }
                }
                return `<div style="text-align: center;"><strong>${params.name}</strong><br><span style="font-size: 0.85em; opacity: 0.8;">${rName}</span></div>`;
            }
        },
        geo: {
            map: 'world',
            roam: true, 
            zoom: window.innerWidth <= 850 ? 1 : 1.25,
            center: [10, 30], // initial center view
            left: window.innerWidth <= 850 ? '2%' : '5%', 
            right: (window.innerWidth > 850 && activeRegionId) ? '35%' : (window.innerWidth <= 850 ? '2%' : 'auto'), 
            bottom: (window.innerWidth <= 850 && activeRegionId) ? '60%' : 'auto', // shift up on mobile when card active
            itemStyle: {
                areaColor: baseColor,
                borderColor: borderColor,
                borderWidth: 1.5,
                borderJoin: 'round'
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#3d4c62'
                },
                label: {
                    show: false
                }
            },
            regions: mapData
        }
    };

    chartInstance.setOption(option);
}
