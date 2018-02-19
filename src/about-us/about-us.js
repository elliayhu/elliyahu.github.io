export class AboutUs {
    mainDiv = document.getElementById("mainDiv");
    attached()
    {
      this.mainDiv.scrollTop =0;
    }
    logos = [
        { src: "src/images/logo/01.png" },
        { src: "src/images/logo/02.png" },
        { src: "src/images/logo/03.png" },
        { src: "src/images/logo/04.png" },
        { src: "src/images/logo/05.png" },
        { src: "src/images/logo/06.png" },
        { src: "src/images/logo/07.png" },
        { src: "src/images/logo/08.png" },
        { src: "src/images/logo/09.png" },
        { src: "src/images/logo/10.png" },
        { src: "src/images/logo/11.png" }
    ];

    hebrew = true;
    buttonText = 'Eng';

    languageChange() {
        this.hebrew = !this.hebrew;
        this.buttonText = this.buttonText != 'Eng' ? 'Eng' : 'Heb';
    }
    titleH1 = 'טופ דיזיין, בניה והשקעות בע"מ';
    titleH1E = 'TOP DESIGN - CONSTRUCTION ET INVESTISSEMENTS LTD';
    title1H5 = 'אמינות ומקצועיות ללא פשרות';
    title1H5E = 'Uncompromising integrity and professionalism';
    paragraph1 = `חברת טופ דיזיין הינה חברה בעלת סיווג קבלני
    רשום בפנקס הקבלנים ובעלת ניסיון של למעלה מעשרים שנים
    בתחום הבנייה והפיתוח הצוות הניהולי והביצועי של החברה מורכב מבעלי
    מקצוע מדופלמים הנדסאים ומהנדסי בניין ובעלי ניסיון של למעלה מעשר שנים לפחות
    בתחום הבנייה והפיתוח וכולל אנשי מקצוע מהמובילים בתחומם בארץ במטרה
    לעמוד בסטנדרטים הגבוהים ביותר, ללא פשרות ולהבטיח
    את רמת הבנייה והגימור המקצועיים והטובים
    ביותר בתחום במשך השנים רכשה לעצמה חברת טופ  דיזיין בע"מ
    מוניטין של אמינות ומקצועיות בתחום הגימור והבנייה, תוך מתן דגש על פיתוח ושיכלול 
    דרכי ביצוע באמצעות שימוש נכון בידע, ניסיון שימוש
    בחומרים האיכותיים ביותר ובמוצרים המתקדמים ביותר הקיימים בשוק -
    לאורך כל הדרך`;
    paragraph1E = `The “Top Design” Company is registered as a contractor company in the Israeli
    contractor registrar and has over 20 years of experience in the field of construction
    and development. The administrative and operational staff of the company is made
    up of highly skilled professionals and construction engineers with at least a
    decade’s worth of experience in the field of construction and development. Our
    team includes some of the leading professionals in their fields in Israel and are
    dedicated to uncompromisingly meeting the highest professional standards and
    ensuring the best level of construction and finishing in the field. Over the years, the
    Top Design Company has acquired a reputation of integrity and professionalism in
    the field of finishing and construction, while emphasizing development and
    improvement of its techniques through correct use of knowledge and experience,
    and the use of the highest quality materials and the most advanced products in the
    market for every phase of its projects.`;
    title2H5 = `פרויקטים, ניסיון והצלחה`;
    title2H5E = `Projects, experience, and success-`;
    paragraph2 = `הפרויקטים שבוצעו ע"י חברת טופ  דיזיין בע"מ קשרו את שמה של החברה עם ניסיון, 
    מקצועיות והצלחה. כקבלן ממונה וכקבלן ראשי, מתמחה החברה בניהול וביצוע פרויקטים בתחום הבנייה, 
    בביצוע עבודות גמר, שיפוץ כללי, תוספות בנייה יוקרתיות וגימור פרויקטים של מבנים למגזר הפרטי והעסקי:
    בניית מבני מסחר, תעשיה, משרדים ומבני ציבור.
    חברת טופ  דיזיין בע"מ שמה דגש על ביצוע עבודות ושימוש בחומרים בעלי תו תקן בלבד,
    בהתאם להוראות חוק תכנון ובניה. 
    השאיפה למצוינות וההצלחה המוכחת בשירות ובמקצועיות, עמידה בלוחות זמנים, 
    ומתן דגש מיוחד על שביעות רצון לקוחותיה, הם אלו שהפכו את טופ דיזיין בע"מ למובילה בתחומה.`;
    paragraph2E = `The projects performed by the Top Design Company LTD, have linked the name of
    the Company with experience, professionalism and success. Both as a
    subcontractor and as the primary contractor, the company specializes in the
    management and performance of projects in the field of construction, in the
    performance of finishing jobs, general renovation, exclusive building additions, and
    finishing projects of private and business structures; the construction of commercial
    buildings, industrial buildings, offices and public structures. The Top Design LTD`;
    paragraph2E2 = `Company emphasizes the performance of work and the exclusive use of standards
    association stamped materials, in accordance with the ordinances of the design
    and construction law. Our striving for excellence and our proven success in
    providing professional service, meeting timetables, and particularly emphasizing
    customer satisfaction, are what have made Top Design LTD into a leader in the
    field.`;
    paragraph3 = `בין לקוחותינו העסקיים סיטי בנק, ע.טופ הנדסה, טלדור, פררה יזמות בע"מ, ורוניקה השקעות בע"מ,
    י.מאנע ושות', דיימלר מרצדס, סלברייט, ביתא מדיה ועוד לקוחות ציבוריים ופרטיים.`;
    paragraph3E = `Amongst our business clients are: Citybank, E.Top Engineering, Teldor I.T,
    Daimler Mercedes, Google, Servicenow, Movit, Cellbrite LTD, Broadcom LTD,
    Cisco, Ortam Sahar LTD, and many other private clients.`;
    title3H5 = `בניית משרדים ,בנייה פרטית/ציבורית ושטחי מסחר. מהמסד ועד הטפחות`;
    paragraph4 = `בנייה בסטנדרטים הגבוהים ביותר, שלד, וגימור עד מפתח, תוך הקפדה יתרה על 
    ביצוע עבודה ושימוש בחומרים בעלי תו תקן בלבד בהתאם להוראות חוק תכנון ובנייה.`;
    paragraph4E = `Construction of offices, private/ public construction and trading areas. From
    foundations to rafters.`;
    paragraph5 = `הבנייה כוללת את כל הפעילות מהריסת קירות אם צריך ועד לקבלת המפתח,
    פיקוח על הבנייה	פיקוח וניהול כולל של הבניה, כתובת אחת לכל שאלה
    ניהול מלא של כל נושא בטיחות ונהלי העבודה מול בניין המשרדים
    העבודה מתבצעת בשקיפות מלאה אליכם, תוך כדי דיווח שוטף על התקדמות העבודה באתר
    עבודה מתוך הבנה ורגישות לצורכי הלקוח
    עמידה בלוח הזמנים
    מתן אחריות מלאה בגמר השיפוץ
    רמת בנייה גבוהה מאוד חווית בנייה ברמה שלא מכירים בארץ.`;
    paragraph5E = `Construction to the highest standards, framing, and complete finishing work, while
    meticulously observing the finest details and the exclusive use of standards
    association stamped materials in accordance with the ordinances of the design and
    construction law.`;
    paragraph6 = `כמנהל אתה ודאי מכיר את הקשיים הנלווים להעברה והקמה של משרדי החברה למקום חדש. 
    קשיים אלו באים לידי ביטוי בביטול התפוקה ואיבוד זמן יקר על ידי הסטת 
    תשומת ליבך מהעיסוק המרכזי לפרויקט ההעברה, לאלו מתווסף הקושי בתכנון ובביצוע העברה.`;
    paragraph6E = `Construction includes all phases of activity from wall demolition, should this be
    necessary, to bringing the finishing work to ready-to-use condition.`;
    paragraph7 = `מתוך מודעות לקשיים הכרוכים במעבר, ומתוך רצון שלנו לעזור לכם לעשות את זה באופן החלק והיעיל ביותר,
    אנו ננהל עבורכם את פרויקט הקמת המשרדים משלב הייעוץ והארגון ועד סיום המעבר. על ידי ניהול מקצועי ומלא, 
    צוות הבנייה והשיפוץ שלנו מאפשר לך לנצל את השקט ולהישאר ממוקד בעבודתך בצורה מרבית. `;
    paragraph7E = `Supervision of construction: full supervision and total management of all
    construction, a single address for any question.`;
    paragraph8 = ` אנו בחברת טופ דיזיין בע"מ מחויבים לאיכות התהליך לכל אורכו.
    הליך הקמת המשרד מתנהל בתאום עם הלקוח ובהתאם לצרכיו, ותוך כדי רגישות ללוח הזמנים. 
    העבודה מתבצעת בשקיפות מלאה ללקוח, תוך כדי דיווח שוטף על התקדמות העבודה באתר.
    גמר טוב הוא עבודת אומנות, והוא זה שיעניק מחמאות מהאורחים שלכם. 
    צוות הגמר שלנו הם בעלי מקצוע מעולים ומנוסים, מדויקים וכאלו שאכפת להם איך יוצאת העבודה שלהם.`;
    paragraph8E = `Full management of any safety issue and work procedure versus the office building.`;
    paragraph9E = `The work is performed in total transparency versus the customer, with ongoing and
    frequent updates of the progress of the work on the site.`;
    paragraph10E1 = `✓ Performance of all work out of understanding and sensitivity to the requirements of the customer.`;
    paragraph10E2 = `✓ Meeting the schedule.`;
    paragraph10E3 = `✓ Offering full responsibility and liability at the finishing of therenovation.`;
    paragraph10E4 = `✓ Moreover, we guarantee an extremely high level of construction work- a construction experience at a level unknown in Israel.`;
    paragraph11E = `As a manager, you are no doubt familiar with the difficulties associated with the
    transfer and setting up of the company offices to a new location. These difficulties
    are expressed in stalling production and loss of valuable time by diverting your
    attention from your central occupation to the moving project. The difficulty in
    planning and performing the move is an additional burden.`;
    paragraph12E = `Being well aware of the difficulties relocation entails, and out of our desire to assist
    you in carrying out the move as smoothly and efficiently as possible, we will
    manage the project of setting up your new offices from the consultation and
    organization phase to the completion of the relocation. Through full and
    professional management of the process, our construction and renovation team
    enables you to maintain your peace of mind and to stay focused on your work.`;
    paragraph13E = `In Top Design, we are fully committed to the quality of the relocation process from
    beginning to conclusion. The process of setting up the office is managed in full
    coordination with the customer and in accordance to his needs, and with full
    sensitivity to his schedule.`;
    paragraph14E = `The work is performed in full transparency, while providing frequent and ongoing
    reports of the progress of the work on the site to the customer.`;
    paragraph15E = `A good finishing job is a work of art, and it is what will draw out the compliments
    from your guests. Our finishing crews are precise, excellent and experienced
    professionals and as such they care about how the outcome of their work.`;
    paragraph16E = `All construction and renovation work is performed using only the highest quality
    materials, while meticulously emphasizing the precision of every detail.`;
    paragraph17E = `Complex and unique decoration work, specialized designs and solutions in plaster,
    and high-level spatula and paint jobs to ensure your walls will come out perfect and
    impressive.`;
    paragraph18E = `Precise tiling and surfacing.`;
    paragraph19E = `These are the details that will ensure your office is a pleasant work environment.`;
    paragraph20E = `This is exactly what the commercial construction department of Top Design
    specializes in.`;
    paragraph21E = `We like to build success stories.`;
    paragraph22E = `Leave you construction and renovation needs in our hands- we will take it from
    there and all you will need to do is confirm…`;
}