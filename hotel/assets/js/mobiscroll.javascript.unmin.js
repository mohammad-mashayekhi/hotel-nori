
/* eslint-disable */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).mobiscroll = {}));
})(this, function (e) {
    "use strict";
    var t = { apiKey: "032ed04a", apiUrl: "https://trial.mobiscroll.com/" },
        n =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>',
        a =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>',
        s =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>',
        i =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"/></svg>',
        r =
            '<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 17 17" width="17"><path d="M8.5 0a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm3.364 5.005a.7.7 0 00-.99 0l-2.44 2.44-2.439-2.44-.087-.074a.7.7 0 00-.903 1.064l2.44 2.439-2.44 2.44-.074.087a.7.7 0 001.064.903l2.439-2.441 2.44 2.441.087.074a.7.7 0 00.903-1.064l-2.441-2.44 2.441-2.439.074-.087a.7.7 0 00-.074-.903z" fill="currentColor" fill-rule="evenodd"/></svg>',
        o = function (e, t) {
            return (
                (o =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }),
                o(e, t)
            );
        };
    function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e;
        }
        o(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    var c = function () {
        return (
            (c =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, a = arguments.length; n < a; n++) for (var s in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e;
                }),
            c.apply(this, arguments)
        );
    };
    function d(e, t) {
        var n = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]]);
        }
        return n;
    }
    var h,
        u,
        m = (function () {
            function e() {
                (this.nr = 0), (this.keys = 1), (this.subscribers = {});
            }
            return (
                (e.prototype.subscribe = function (e) {
                    var t = this.keys++;
                    return (this.subscribers[t] = e), this.nr++, t;
                }),
                (e.prototype.unsubscribe = function (e) {
                    this.nr--, delete this.subscribers[e];
                }),
                (e.prototype.next = function (e) {
                    for (var t = this.subscribers, n = 0, a = Object.keys(t); n < a.length; n++) {
                        var s = a[n];
                        t[s] && t[s](e);
                    }
                }),
                e
            );
        })(),
        _ = [],
        p = !1,
        v = "undefined" != typeof window,
        f = v && window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)"),
        g = v ? navigator.userAgent : "",
        y = v ? navigator.platform : "",
        b = v ? navigator.maxTouchPoints : 0,
        x = g && g.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        D = g && /Safari/.test(g);
    /Android/i.test(x)
        ? ((h = "android"), (u = g.match(/Android\s+([\d.]+)/i)), (p = !0), u && (_ = u[0].replace("Android ", "").split(".")))
        : /iPhone|iPad|iPod/i.test(x) || /iPhone|iPad|iPod/i.test(y) || ("MacIntel" === y && b > 1)
        ? ((h = "ios"), (u = g.match(/OS\s+([\d_]+)/i)), (p = !0), u && (_ = u[0].replace(/_/g, ".").replace("OS ", "").split(".")))
        : /Windows Phone/i.test(x)
        ? ((h = "wp"), (p = !0))
        : /Windows|MSIE/i.test(x) && (h = "windows");
    var T = +_[0],
        S = +_[1],
        C = {},
        w = {},
        k = {},
        M = {},
        E = new m();
    function N() {
        var e = "",
            t = "",
            n = "";
        for (var a in ((t = "android" === h ? "material" : "wp" === h || "windows" === h ? "windows" : "ios"), k)) {
            if (k[a].baseTheme === t && !1 !== k[a].auto && a !== t + "-dark") {
                e = a;
                break;
            }
            a === t ? (e = a) : n || (n = a);
        }
        return e || n;
    }
    function I(e, t, n) {
        var a = k[t];
        (k[e] = c({}, a, { auto: n, baseTheme: t })), (M.theme = N());
    }
    var L = { majorVersion: T, minorVersion: S, name: h },
        H = { clearIcon: r, labelStyle: "inline" };
    (k.ios = {
        Calendar: { nextIconH: s, nextIconV: a, prevIconH: n, prevIconV: i },
        Checkbox: { position: "end" },
        Datepicker: { clearIcon: r, display: "bottom" },
        Dropdown: H,
        Eventcalendar: { chevronIconDown: a, nextIconH: s, nextIconV: a, prevIconH: n, prevIconV: i },
        Input: H,
        Radio: { position: "end" },
        Scroller: { display: "bottom", itemHeight: 34, minWheelWidth: 55, rows: 5, scroll3d: !0 },
        SegmentedGroup: { drag: !0 },
        Select: { clearIcon: r },
        Textarea: H,
    }),
        I("ios-dark", "ios");
    var Y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        P = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z"/></svg>',
        F = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M15 9l-2.12 2.12L19.76 18l-6.88 6.88L15 27l9-9z"/></svg>',
        R =
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',
        z = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',
        V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        A = { clearIcon: R, dropdownIcon: Y, inputStyle: "box", labelStyle: "floating", notch: !0, ripple: !0 },
        W = "material";
    (k.material = {
        Button: { ripple: !0 },
        Calendar: { downIcon: Y, nextIconH: F, nextIconV: z, prevIconH: P, prevIconV: V, upIcon: O },
        Datepicker: { clearIcon: R, display: "center" },
        Dropdown: A,
        Eventcalendar: { chevronIconDown: z, colorEventList: !0, downIcon: Y, nextIconH: F, nextIconV: z, prevIconH: P, prevIconV: V, upIcon: O },
        Input: A,
        ListItem: { ripple: !0 },
        Scroller: { display: "center", rows: 3 },
        Select: { clearIcon: R, rows: 3 },
        Textarea: A,
    }),
        I("material-dark", W);
    var U = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.03 4.28l-11 11-.686.72.687.72 11 11 1.44-1.44L10.187 16l10.28-10.28-1.437-1.44z"/></svg>',
        B = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.97 4.28l-1.44 1.44L21.814 16 11.53 26.28l1.44 1.44 11-11 .686-.72-.687-.72-11-11z"/></svg>',
        j = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15 4v20.063L8.22 17.28l-1.44 1.44 8.5 8.5.72.686.72-.687 8.5-8.5-1.44-1.44L17 24.063V4h-2z"/></svg>',
        K = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4.094l-.72.687-8.5 8.5 1.44 1.44L15 7.936V28h2V7.937l6.78 6.782 1.44-1.44-8.5-8.5-.72-.686z"/></svg>',
        X =
            '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>',
        J = { clearIcon: X, inputStyle: "box", labelStyle: "stacked" },
        q = "windows";
    (k.windows = {
        Calendar: { nextIconH: B, nextIconV: j, prevIconH: U, prevIconV: K },
        Checkbox: { position: "start" },
        Datepicker: { clearIcon: X, display: "center" },
        Dropdown: J,
        Eventcalendar: {
            chevronIconDown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.22 10.78l-1.44 1.44 12.5 12.5.72.686.72-.687 12.5-12.5-1.44-1.44L16 22.564 4.22 10.78z"/></svg>',
            nextIconH: B,
            nextIconV: j,
            prevIconH: U,
            prevIconV: K,
        },
        Input: J,
        Scroller: { display: "center", itemHeight: 44, minWheelWidth: 88, rows: 6 },
        Select: { clearIcon: X, rows: 6 },
        Textarea: J,
    }),
        I("windows-dark", q),
        (M.theme = N());
    var G = {
            rtl: !0,
            setText: "تعيين",
            cancelText: "إلغاء",
            clearText: "مسح",
            closeText: "إغلاق",
            selectedText: "{count} المحدد",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD. D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            fromText: "يبدا",
            monthNames: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            amText: "ص",
            pmText: "م",
            timeFormat: "hh:mm A",
            timeWheels: "Ammhh",
            toText: "ينتهي",
            nowText: "الآن",
            firstDay: 0,
            dateText: "تاريخ",
            timeText: "وقت",
            todayText: "اليوم",
            allDayText: "اليوم كله",
            noEventsText: "لا توجد احداث",
            eventText: "الحدث",
            eventsText: "أحداث",
            moreEventsText: "واحد آخر",
            moreEventsPluralText: "اثنان آخران {count}",
            weekText: "أسبوع {count}",
            rangeEndHelp: "أختر",
            rangeEndLabel: "ينتهي",
            rangeStartHelp: "أختر",
            rangeStartLabel: "يبدا",
            filterEmptyText: "لا نتيجة",
            filterPlaceholderText: "بحث",
        },
        Z = {
            setText: "Задаване",
            cancelText: "Отмяна",
            clearText: "Изчистване",
            closeText: "затвори",
            selectedText: "{count} подбран",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMMM YYYY",
            dateWheelFormat: "|DDD MM.DD|",
            dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            fromText: "ОТ",
            monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
            timeFormat: "H:mm",
            toText: "ДО",
            nowText: "Сега",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Дата",
            timeText: "път",
            todayText: "днес",
            eventText: "Събитие",
            eventsText: "Събития",
            allDayText: "Цял ден",
            noEventsText: "Няма събития",
            moreEventsText: "Още {count}",
            weekText: "Седмица {count}",
            rangeStartLabel: "ОТ",
            rangeEndLabel: "ДО",
            rangeStartHelp: "Избирам",
            rangeEndHelp: "Избирам",
            filterEmptyText: "Без резултат",
            filterPlaceholderText: "Търсене",
        },
        Q = {
            setText: "Acceptar",
            cancelText: "Cancel·lar",
            clearText: "Esborrar",
            closeText: "Tancar",
            selectedText: "{count} seleccionat",
            selectedPluralText: "{count} seleccionats",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
            dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            fromText: "Iniciar",
            monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
            timeFormat: "H:mm",
            toText: "Final",
            nowText: "Ara",
            pmText: "pm",
            amText: "am",
            todayText: "Avui",
            firstDay: 1,
            dateText: "Data",
            timeText: "Temps",
            allDayText: "Tot el dia",
            noEventsText: "Cap esdeveniment",
            eventText: "Esdeveniments",
            eventsText: "Esdeveniments",
            moreEventsText: "{count} més",
            weekText: "Setmana {count}",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
            filterEmptyText: "Cap resultat",
            filterPlaceholderText: "Buscar",
        },
        $ = {
            setText: "Zadej",
            cancelText: "Storno",
            clearText: "Vymazat",
            closeText: "Zavřít",
            selectedText: "Označený: {count}",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D.M.YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
            fromText: "Začátek",
            monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
            timeFormat: "H:mm",
            toText: "Konec",
            nowText: "Teď",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý den",
            noEventsText: "Žádné události",
            eventText: "Událostí",
            eventsText: "Události",
            moreEventsText: "{count} další",
            weekText: "{count}. týden",
            rangeStartLabel: "Začátek",
            rangeEndLabel: "Konec",
            rangeStartHelp: "Vybrat",
            rangeEndHelp: "Vybrat",
            filterEmptyText: "Žádné výsledky",
            filterPlaceholderText: "Hledat",
        },
        ee = {
            setText: "Sæt",
            cancelText: "Annuller",
            clearText: "Ryd",
            closeText: "Luk",
            selectedText: "{count} valgt",
            selectedPluralText: "{count} valgt",
            dateFormat: "DD/MM/YYY",
            dateFormatLong: "DDD. D. MMM. YYYY.",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH.mm",
            toText: "Slut",
            nowText: "Nu",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen begivenheder",
            eventText: "Begivenheder",
            eventsText: "Begivenheder",
            moreEventsText: "{count} mere",
            weekText: "Uge {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Vælg",
            rangeEndHelp: "Vælg",
            filterEmptyText: "Ingen resultater",
            filterPlaceholderText: "Søg",
        },
        te = {
            setText: "OK",
            cancelText: "Abbrechen",
            clearText: "Löschen",
            closeText: "Schließen",
            selectedText: "{count} ausgewählt",
            dateFormat: "DD.MM.YYYY",
            dateFormatFull: "DDDD, D. MMMM YYYY",
            dateFormatLong: "DDD. D. MMM. YYYY",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
            fromText: "Von",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            timeFormat: "HH:mm",
            nowText: "Jetzt",
            pmText: "pm",
            amText: "am",
            todayText: "Heute",
            toText: "Bis",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Zeit",
            allDayText: "Ganztägig",
            noEventsText: "Keine Ereignisse",
            eventText: "Ereignis",
            eventsText: "Ereignisse",
            moreEventsText: "{count} weiteres Element",
            moreEventsPluralText: "{count} weitere Elemente",
            weekText: "Woche {count}",
            rangeStartLabel: "Von",
            rangeEndLabel: "Bis",
            rangeStartHelp: "Auswählen",
            rangeEndHelp: "Auswählen",
            filterEmptyText: "Keine Treffer",
            filterPlaceholderText: "Suchen",
        },
        ne = {
            setText: "Ορισμος",
            cancelText: "Ακυρωση",
            clearText: "Διαγραφη",
            closeText: "Κλείσιμο",
            selectedText: "{count} επιλεγμένα",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            fromText: "Αρχή",
            monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            timeFormat: "H:mm",
            toText: "Τέλος",
            nowText: "τώρα",
            pmText: "μμ",
            amText: "πμ",
            firstDay: 1,
            dateText: "Ημερομηνία",
            timeText: "φορά",
            todayText: "Σήμερα",
            eventText: "Γεγονότα",
            eventsText: "Γεγονότα",
            allDayText: "Ολοήμερο",
            noEventsText: "Δεν υπάρχουν γεγονότα",
            moreEventsText: "{count} ακόμη",
            weekText: "Εβδομάδα {count}",
            rangeStartLabel: "Αρχή",
            rangeEndLabel: "Τέλος",
            rangeStartHelp: "Επιλογή",
            rangeEndHelp: "Επιλογή",
            filterEmptyText: "Κανένα αποτέλεσμα",
            filterPlaceholderText: "Αναζήτηση",
        },
        ae = { dateFormat: "DD/MM/YYYY", dateFormatFull: "DDDD, D MMMM YYYY", dateWheelFormat: "|DDD D MMM|", timeFormat: "H:mm" },
        se = {
            setText: "Aceptar",
            cancelText: "Cancelar",
            clearText: "Borrar",
            closeText: "Cerrar",
            selectedText: "{count} seleccionado",
            selectedPluralText: "{count} seleccionados",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, MMM. D. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Iniciar",
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            timeFormat: "H:mm",
            toText: "Final",
            nowText: "Ahora",
            pmText: "pm",
            amText: "am",
            todayText: "Hoy",
            firstDay: 1,
            dateText: "Fecha",
            timeText: "Tiempo",
            allDayText: "Todo el día",
            noEventsText: "No hay eventos",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "{count} más",
            weekText: "Semana {count}",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
            filterEmptyText: "Sin resultados",
            filterPlaceholderText: "Buscar",
        },
        ie = void 0,
        re = ye(3),
        oe = ye(4),
        le = ye(7);
    function ce(e, t, n) {
        return Math.max(t, Math.min(e, n));
    }
    function de(e, t) {
        return c({}, e, t);
    }
    function he(e) {
        return Array.isArray(e);
    }
    function ue(e) {
        return e - parseFloat(e) >= 0;
    }
    function me(e) {
        return "number" == typeof e;
    }
    function _e(e) {
        return "string" == typeof e;
    }
    function pe(e) {
        return e === ie || null === e || "" === e;
    }
    function ve(e) {
        return void 0 === e;
    }
    function fe(e) {
        return "object" == typeof e;
    }
    function ge(e) {
        return null !== e && e !== ie && "" + e != "false";
    }
    function ye(e) {
        return Array.apply(0, Array(Math.max(0, e)));
    }
    function be(e) {
        return e !== ie ? e + (ue(e) ? "px" : "") : "";
    }
    function xe() {}
    function De(e, t) {
        void 0 === t && (t = 2);
        for (var n = e + ""; n.length < t; ) n = "0" + n;
        return n;
    }
    function Te(e) {
        return Math.round(e);
    }
    function Se(e, t) {
        return Ce(e / t) * t;
    }
    function Ce(e) {
        return Math.floor(e);
    }
    function we(e, t) {
        var n, a;
        return (
            void 0 === t && (t = 100),
            function () {
                for (var s = [], i = 0; i < arguments.length; i++) s[i] = arguments[i];
                var r = +new Date();
                n && r < n + t
                    ? (clearTimeout(a),
                      (a = setTimeout(function () {
                          (n = r), e.apply(void 0, s);
                      }, t)))
                    : ((n = r), e.apply(void 0, s));
            }
        );
    }
    function ke(e, t) {
        var n;
        return (
            void 0 === t && (t = 100),
            function () {
                for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                clearTimeout(n),
                    (n = setTimeout(function () {
                        e.apply(void 0, a);
                    }, t));
            }
        );
    }
    function Me(e, t) {
        if (e === t) return !0;
        if ((e && !t) || (t && !e)) return !1;
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    function Ee(e, t) {
        e._cdr ? setTimeout(t) : t();
    }
    function Ne(e, t) {
        return Le(e, t);
    }
    function Ie(e, t) {
        return Le(e, t, !0);
    }
    function Le(e, t, n) {
        for (var a = e.length, s = 0; s < a; s++) {
            var i = e[s];
            if (t(i, s)) return n ? s : i;
        }
        return n ? -1 : ie;
    }
    function He(e, t) {
        return he(e) ? e.map(t) : t(e, 0, [e]);
    }
    function Ye(e) {
        var t = [];
        if (e)
            for (var n = 0, a = Object.keys(e); n < a.length; n++) {
                var s = a[n];
                t.push(e[s]);
            }
        return t;
    }
    ye(24);
    var Oe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Pe = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    function Fe(e, t, n) {
        var a,
            s = e - 1600,
            i = t - 1,
            r = n - 1,
            o = 365 * s + Ce((s + 3) / 4) - Ce((s + 99) / 100) + Ce((s + 399) / 400);
        for (a = 0; a < i; ++a) o += Oe[a];
        i > 1 && ((s % 4 == 0 && s % 100 != 0) || s % 400 == 0) && ++o;
        var l = (o += r) - 79,
            c = 979 + 33 * Ce(l / 12053) + 4 * Ce((l %= 12053) / 1461);
        for ((l %= 1461) >= 366 && ((c += Ce((l - 1) / 365)), (l = (l - 1) % 365)), a = 0; a < 11 && l >= Pe[a]; ++a) l -= Pe[a];
        return [c, a + 1, l + 1];
    }
    var Re = {
            getYear: function (e) {
                return Fe(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --Fe(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return Fe(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, n, a, s, i, r) {
                t < 0 && ((e += Ce(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Ce(t / 12)), (t %= 12));
                var o = (function (e, t, n) {
                    var a,
                        s = e - 979,
                        i = t - 1,
                        r = n - 1,
                        o = 365 * s + 8 * Ce(s / 33) + Ce(((s % 33) + 3) / 4);
                    for (a = 0; a < i; ++a) o += Pe[a];
                    var l = (o += r) + 79,
                        c = 1600 + 400 * Ce(l / 146097),
                        d = !0;
                    for (
                        (l %= 146097) >= 36525 && ((c += 100 * Ce(--l / 36524)), (l %= 36524) >= 365 ? l++ : (d = !1)), c += 4 * Ce(l / 1461), (l %= 1461) >= 366 && ((d = !1), (c += Ce(--l / 365)), (l %= 365)), a = 0;
                        l >= Oe[a] + (1 === a && d ? 1 : 0);
                        a++
                    )
                        l -= Oe[a] + (1 === a && d ? 1 : 0);
                    return [c, a + 1, l + 1];
                })(e, +t + 1, n);
                return new Date(o[0], o[1] - 1, o[2], a || 0, s || 0, i || 0, r || 0);
            },
            getMaxDayOfMonth: function (e, t) {
                var n,
                    a,
                    s,
                    i = 31;
                for (
                    t < 0 && ((e += Ce(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Ce(t / 12)), (t %= 12));
                    (a = t + 1), (s = i), ((n = e) < 0 || n > 32767 || a < 1 || a > 12 || s < 1 || s > Pe[a - 1] + (12 === a && ((n - 979) % 33) % 4 == 0 ? 1 : 0)) && i > 29;

                )
                    i--;
                return i;
            },
        },
        ze = {
            setText: "تاييد",
            cancelText: "انصراف",
            clearText: "واضح ",
            closeText: "نزدیک",
            selectedText: "{count} منتخب",
            rtl: !0,
            calendarSystem: Re,
            dateFormat: "YYYY/MM/DD",
            dateFormatLong: "DDD D MMM YYYY",
            dateWheelFormat: "|DDDD MMM D|",
            dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
            dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            fromText: "شروع ",
            monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            timeFormat: "HH:mm",
            timeWheels: "mmHH",
            toText: "پایان",
            nowText: "اکنون",
            amText: "ب",
            pmText: "ص",
            todayText: "امروز",
            firstDay: 6,
            dateText: "تاریخ ",
            timeText: "زمان ",
            allDayText: "تمام روز",
            noEventsText: "هیچ رویداد",
            eventText: "رویداد",
            eventsText: "رویدادها",
            moreEventsText: "{count} مورد دیگر",
            weekText: "{count} هفته",
            rangeStartLabel: "شروع ",
            rangeEndLabel: "پایان",
            rangeStartHelp: "انتخاب کنید",
            rangeEndHelp: "انتخاب کنید",
            filterEmptyText: "نتیجه ای ندارد",
            filterPlaceholderText: "جستجو کردن",
        },
        Ve = {
            setText: "Aseta",
            cancelText: "Peruuta",
            clearText: "Tyhjennä",
            closeText: "Sulje",
            selectedText: "{count} valita",
            dateFormat: "D. MMMM YYYY",
            dateFormatLong: "DDD, D. MMMM, YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
            fromText: "Alkaa",
            monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
            timeFormat: "H:mm",
            toText: "Päättyy",
            nowText: "Nyt",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Päiväys",
            timeText: "Aika",
            todayText: "Tänään",
            eventText: "Tapahtumia",
            eventsText: "Tapahtumia",
            allDayText: "Koko päivä",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} muu",
            moreEventsPluralText: "{count} muuta",
            weekText: "Viikko {count}",
            rangeStartLabel: "Alkaa",
            rangeEndLabel: "Päättyy",
            rangeStartHelp: "Valitse",
            rangeEndHelp: "Valitse",
            filterEmptyText: "Ei tuloksia",
            filterPlaceholderText: "Haku",
        },
        Ae = {
            setText: "Terminer",
            cancelText: "Annuler",
            clearText: "Effacer",
            closeText: "Fermer",
            selectedText: "{count} sélectionné",
            selectedPluralText: "{count} sélectionnés",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Démarrer",
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
            timeFormat: "HH:mm",
            toText: "Fin",
            nowText: "Maintenant",
            pmText: "pm",
            amText: "am",
            todayText: "Aujourd'hui",
            firstDay: 1,
            dateText: "Date",
            timeText: "Heure",
            allDayText: "Toute la journée",
            noEventsText: "Aucun événement",
            eventText: "Événement",
            eventsText: "Événements",
            moreEventsText: "{count} autre",
            moreEventsPluralText: "{count} autres",
            weekText: "Semaine {count}",
            rangeStartLabel: "Démarrer",
            rangeEndLabel: "Fin",
            rangeStartHelp: "Choisir",
            rangeEndHelp: "Choisir",
            filterEmptyText: "Aucun résultat",
            filterPlaceholderText: "Rechercher",
        },
        We = {
            rtl: !0,
            setText: "שמירה",
            cancelText: "ביטול",
            clearText: "נקה",
            closeText: "סגירה",
            selectedText: "{count} נבחר",
            selectedPluralText: "{count} נבחרו",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D בMMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
            dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
            fromText: "התחלה",
            monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
            amText: "am",
            pmText: "pm",
            timeFormat: "H:mm",
            timeWheels: "mmH",
            toText: "סיום",
            nowText: "עכשיו",
            firstDay: 0,
            dateText: "תאריך",
            timeText: "זמן",
            todayText: "היום",
            allDayText: "כל היום",
            noEventsText: "אין אירועים",
            eventText: "מִקרֶה",
            eventsText: "מִקרֶה",
            moreEventsText: "אירוע אחד נוסף",
            moreEventsPluralText: "{count} אירועים נוספים",
            weekText: "{count} שבוע",
            rangeStartLabel: "התחלה",
            rangeEndLabel: "סיום",
            rangeStartHelp: "בחר",
            rangeEndHelp: "בחר",
            filterEmptyText: "אין תוצאוה",
            filterPlaceholderText: "לחפש",
        },
        Ue = {
            setText: "सैट करें",
            cancelText: "रद्द करें",
            clearText: "साफ़ को",
            closeText: "बंद",
            selectedText: "{count} चयनित",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
            dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            fromText: "से",
            monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
            timeFormat: "H:mm",
            toText: "तक",
            nowText: "अब",
            pmText: "अपराह्न",
            amText: "पूर्वाह्न",
            firstDay: 1,
            dateText: "तिथि",
            timeText: "समय",
            todayText: "आज",
            eventText: "इवेट३",
            eventsText: "इवेट३",
            allDayText: "पूरे दिन",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} और",
            weekText: "सप्ताह {count}",
            rangeStartLabel: "से",
            rangeEndLabel: "तक",
            rangeStartHelp: "चुनें",
            rangeEndHelp: "चुनें",
            filterEmptyText: "कोई परिणाम नही",
            filterPlaceholderText: "खोज",
        },
        Be = {
            setText: "Postavi",
            cancelText: "Izlaz",
            clearText: "Izbriši",
            closeText: "Zatvori",
            selectedText: "{count} odabran",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D. MMM. YYYY.",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            fromText: "Počinje",
            monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            timeFormat: "H:mm",
            toText: "Završava",
            nowText: "Sada",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Vrijeme",
            todayText: "Danas",
            eventText: "Događaj",
            eventsText: "događaja",
            allDayText: "Cijeli dan",
            noEventsText: "Bez događaja",
            moreEventsText: "Još {count}",
            weekText: "{count}. tjedan",
            rangeStartLabel: "Počinje",
            rangeEndLabel: "Završava",
            rangeStartHelp: "Odaberite",
            rangeEndHelp: "Odaberite",
            filterEmptyText: "Bez rezultata",
            filterPlaceholderText: "Traži",
        },
        je = {
            setText: "OK",
            cancelText: "Mégse",
            clearText: "Törlés",
            closeText: "Bezár",
            selectedText: "{count} kiválasztva",
            dateFormat: "YYYY.MM.DD.",
            dateFormatLong: "YYYY. MMM. D., DDD",
            dateWheelFormat: "|MMM. D. DDD|",
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
            fromText: "Eleje",
            monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            toText: "Vége",
            nowText: "Most",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Dátum",
            timeText: "Idő",
            todayText: "Ma",
            eventText: "esemény",
            eventsText: "esemény",
            allDayText: "Egész nap",
            noEventsText: "Nincs esemény",
            moreEventsText: "{count} további",
            weekText: "{count}. hét",
            rangeStartLabel: "Eleje",
            rangeEndLabel: "Vége",
            rangeStartHelp: "Válasszon",
            rangeEndHelp: "Válasszon",
            filterEmptyText: "Nincs találat",
            filterPlaceholderText: "Keresés",
        },
        Ke = {
            setText: "OK",
            cancelText: "Annulla",
            clearText: "Chiarire",
            closeText: "Chiudere",
            selectedText: "{count} selezionato",
            selectedPluralText: "{count} selezionati",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
            fromText: "Inizio",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            timeFormat: "HH:mm",
            toText: "Fine",
            nowText: "Ora",
            pmText: "pm",
            amText: "am",
            todayText: "Oggi",
            firstDay: 1,
            dateText: "Data",
            timeText: "Volta",
            allDayText: "Tutto il giorno",
            noEventsText: "Nessun evento",
            eventText: "Evento",
            eventsText: "Eventi",
            moreEventsText: "{count} altro",
            moreEventsPluralText: "altri {count}",
            weekText: "Settimana {count}",
            rangeStartLabel: "Inizio",
            rangeEndLabel: "Fine",
            rangeStartHelp: "Scegli",
            rangeEndHelp: "Scegli",
            filterEmptyText: "Nessun risultato",
            filterPlaceholderText: "Cerca",
        },
        Xe = {
            setText: "セット",
            cancelText: "キャンセル",
            clearText: "クリア",
            closeText: "クローズ",
            selectedText: "{count} 選択",
            dateFormat: "YYYY年MM月DD日",
            dateFormatLong: "YYYY年MM月DD日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            fromText: "開始",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            timeFormat: "H:mm",
            toText: "終わり",
            nowText: "今",
            pmText: "午後",
            amText: "午前",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今日",
            dateText: "日付",
            timeText: "時間",
            allDayText: "終日",
            noEventsText: "イベントはありません",
            eventText: "イベント",
            eventsText: "イベント",
            moreEventsText: "他 {count} 件",
            weekText: "{count}週目",
            rangeStartLabel: "開始",
            rangeEndLabel: "終わり",
            rangeStartHelp: "選択",
            rangeEndHelp: "選択",
            filterEmptyText: "検索結果はありません",
            filterPlaceholderText: "探す",
        },
        Je = {
            setText: "설정",
            cancelText: "취소",
            clearText: "삭제",
            closeText: "닫기",
            selectedText: "{count} 선택된",
            dateFormat: "YYYY년MM월DD일",
            dateFormatLong: "YYYY년MM월DD일",
            dateWheelFormat: "|M월 D일 DDD|",
            dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            fromText: "시작",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            timeFormat: "H:mm",
            toText: "종료",
            nowText: "지금",
            pmText: "오후",
            amText: "오전",
            yearSuffix: "년",
            monthSuffix: "월",
            daySuffix: "일",
            firstDay: 0,
            dateText: "날짜",
            timeText: "시간",
            todayText: "오늘",
            eventText: "이벤트",
            eventsText: "이벤트",
            allDayText: "종일",
            noEventsText: "이벤트 없음",
            moreEventsText: "{count}개 더보기",
            weekText: "{count}주차",
            rangeStartLabel: "시작",
            rangeEndLabel: "종료",
            rangeStartHelp: "선택",
            rangeEndHelp: "선택",
            filterEmptyText: "결과가 없다",
            filterPlaceholderText: "찾다",
        },
        qe = {
            setText: "OK",
            cancelText: "Atšaukti",
            clearText: "Išvalyti",
            closeText: "Uždaryti",
            selectedText: "Pasirinktas {count}",
            selectedPluralText: "Pasirinkti {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "YYYY-MM-DD",
            dateWheelFormat: "|MM-DD DDD|",
            dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
            dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            fromText: "Nuo",
            monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH:mm",
            toText: "Iki",
            nowText: "Dabar",
            todayText: "Šiandien",
            firstDay: 1,
            dateText: "Data",
            timeText: "Laikas",
            allDayText: "Visą dieną",
            noEventsText: "Nėra įvykių",
            eventText: "Įvykių",
            eventsText: "Įvykiai",
            moreEventsText: "Dar {count}",
            weekText: "{count} savaitė",
            rangeStartLabel: "Nuo",
            rangeEndLabel: "Iki",
            rangeStartHelp: "Pasirinkti",
            rangeEndHelp: "Pasirinkti",
            filterEmptyText: "Nėra rezultatų",
            filterPlaceholderText: "Paieška",
        },
        Ge = {
            setText: "Instellen",
            cancelText: "Annuleren",
            clearText: "Leegmaken",
            closeText: "Sluiten",
            selectedText: "{count} gekozen",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DD-MM-YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            dayNamesShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            dayNamesMin: ["Z", "M", "D", "W", "D", "V", "Z"],
            fromText: "Start",
            monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            toText: "Einde",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "Vandaag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tijd",
            allDayText: "Hele dag",
            noEventsText: "Geen activiteiten",
            eventText: "Activiteit",
            eventsText: "Activiteiten",
            moreEventsText: "nog {count}",
            weekText: "Week {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Einde",
            rangeStartHelp: "Kies",
            rangeEndHelp: "Kies",
            filterEmptyText: "Niets gevonden",
            filterPlaceholderText: "Zoek",
        },
        Ze = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Tømme",
            closeText: "Lukk",
            selectedText: "{count} valgt",
            dateFormat: "DD.MM.YYY",
            dateFormatLong: "DDD. D. MMM. YYYY",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            timeFormat: "HH:mm",
            toText: "End",
            nowText: "Nå",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen hendelser",
            eventText: "Hendelse",
            eventsText: "Hendelser",
            moreEventsText: "{count} mere",
            weekText: "Uke {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "End",
            rangeStartHelp: "Velg",
            rangeEndHelp: "Velg",
            filterEmptyText: "Ingen treff",
            filterPlaceholderText: "Søk",
        },
        Qe = {
            setText: "Zestaw",
            cancelText: "Anuluj",
            clearText: "Oczyścić",
            closeText: "Zakończenie",
            selectedText: "Wybór: {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D.MM|",
            dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort: ["Nie.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
            dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
            fromText: "Rozpoczęcie",
            monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
            timeFormat: "HH:mm",
            toText: "Koniec",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dzisiaj",
            firstDay: 1,
            dateText: "Data",
            timeText: "Czas",
            allDayText: "Cały dzień",
            noEventsText: "Brak wydarzeń",
            eventText: "Wydarzeń",
            eventsText: "Wydarzenia",
            moreEventsText: "Jeszcze {count}",
            weekText: "Tydzień {count}",
            rangeStartLabel: "Rozpoczęcie",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Wybierz",
            rangeEndHelp: "Wybierz",
            filterEmptyText: "Brak wyników",
            filterPlaceholderText: "Szukaj",
        },
        $e = {
            setText: "Seleccionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            closeText: "Fechar",
            selectedText: "{count} selecionado",
            selectedPluralText: "{count} selecionados",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DDD, D MMM, YYYY",
            dateWheelFormat: "|DDD D de MMM|",
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            fromText: "Início",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            timeFormat: "HH:mm",
            toText: "Fim",
            nowText: "Actualizar",
            pmText: "pm",
            amText: "am",
            todayText: "Hoje",
            firstDay: 1,
            dateText: "Data",
            timeText: "Tempo",
            allDayText: "Todo o dia",
            noEventsText: "Nenhum evento",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "Mais {count}",
            weekText: "Semana {count}",
            rangeStartLabel: "Início",
            rangeEndLabel: "Fim",
            rangeStartHelp: "Escolha",
            rangeEndHelp: "Escolha",
            filterEmptyText: "Nenhum resultado",
            filterPlaceholderText: "Pesquisa",
        },
        et = de($e, { setText: "Selecionar", dateFormat: "DD/MM/YYYY", nowText: "Agora", allDayText: "Dia inteiro", filterPlaceholderText: "Buscar" }),
        tt = {
            setText: "Setare",
            cancelText: "Anulare",
            clearText: "Ştergere",
            closeText: "Închidere",
            selectedText: "{count} selectat",
            selectedPluralText: "{count} selectate",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD., D MMM YYYY",
            dateWheelFormat: "|DDD. D MMM|",
            dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Start",
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
            timeFormat: "HH:mm",
            toText: "Final",
            nowText: "Acum",
            amText: "am",
            pmText: "pm",
            todayText: "Astăzi",
            eventText: "Eveniment",
            eventsText: "Evenimente",
            allDayText: "Toată ziua",
            noEventsText: "Niciun eveniment",
            moreEventsText: "Încă unul",
            moreEventsPluralText: "Încă {count}",
            firstDay: 1,
            dateText: "Data",
            timeText: "Ora",
            weekText: "Săptămâna {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Final",
            rangeStartHelp: "Selectare",
            rangeEndHelp: "Selectare",
            filterEmptyText: "Niciun rezultat",
            filterPlaceholderText: "Căutare",
        },
        nt = {
            setText: "Установить",
            cancelText: "Отмена",
            clearText: "Очистить",
            closeText: "Закрыть",
            selectedText: "{count} Выбрать",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
            fromText: "Начало",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            timeFormat: "HH:mm",
            toText: "Конец",
            nowText: "Сейчас",
            amText: "am",
            pmText: "pm",
            todayText: "Cегодня",
            firstDay: 1,
            dateText: "Дата",
            timeText: "Время",
            allDayText: "Весь день",
            noEventsText: "Нет событий",
            eventText: "Мероприятия",
            eventsText: "Мероприятия",
            moreEventsText: "Ещё {count}",
            weekText: "Неделя {count}",
            rangeStartLabel: "Начало",
            rangeEndLabel: "Конец",
            rangeStartHelp: "выбирать",
            rangeEndHelp: "выбирать",
            filterEmptyText: "Нет результатов",
            filterPlaceholderText: "Поиск",
        },
        at = de(nt, {
            cancelText: "Отменить",
            clearText: "Очиститьr",
            selectedText: "{count} Вібрать",
            monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
            filterEmptyText: "Ніякага выніку",
            filterPlaceholderText: "Пошук",
        }),
        st = {
            setText: "Zadaj",
            cancelText: "Zrušiť",
            clearText: "Vymazať",
            closeText: "Zavrieť",
            selectedText: "Označený: {count}",
            dateFormat: "D.M.YYYY",
            dateFormatLong: "DDD D. MMM YYYY",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
            dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
            fromText: "Začiatok",
            monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            toText: "Koniec",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý deň",
            noEventsText: "Žiadne udalosti",
            eventText: "Udalostí",
            eventsText: "Udalosti",
            moreEventsText: "{count} ďalšia",
            moreEventsPluralText: "{count} ďalšie",
            weekText: "{count}. týždeň",
            rangeStartLabel: "Začiatok",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Vybrať",
            rangeEndHelp: "Vybrať",
            filterEmptyText: "Žiadne výsledky",
            filterPlaceholderText: "Vyhľadávanie",
        },
        it = {
            setText: "Постави",
            cancelText: "Откажи",
            clearText: "Обриши",
            selectedText: "{count} изабрана",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D. MMM YYYY.",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            fromText: "Од",
            monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            timeFormat: "HH:mm",
            toText: "До",
            nowText: "сада",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Датум",
            timeText: "време",
            todayText: "Данас",
            closeText: "Затвори",
            eventText: "Догађај",
            eventsText: "Догађаји",
            allDayText: "Цео дан",
            noEventsText: "Нема догађаја",
            moreEventsText: "Још {count}",
            weekText: "{count}. недеља",
            rangeStartLabel: "Од",
            rangeEndLabel: "До",
            rangeStartHelp: "Изаберите",
            rangeEndHelp: "Изаберите",
            filterEmptyText: "Без резултата",
            filterPlaceholderText: "Претрага",
        },
        rt = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Klara",
            closeText: "Stäng",
            selectedText: "{count} vald",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            toText: "Slut",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tid",
            allDayText: "Heldag",
            noEventsText: "Inga aktiviteter",
            eventText: "Händelse",
            eventsText: "Händelser",
            moreEventsText: "{count} till",
            weekText: "Vecka {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Välj",
            rangeEndHelp: "Välj",
            filterEmptyText: "Inga träffar",
            filterPlaceholderText: "Sök",
        },
        ot = {
            setText: "ตั้งค่า",
            cancelText: "ยกเลิก",
            clearText: "ล้าง",
            closeText: "ปิด",
            selectedText: "{count} เลือก",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "วันDDDที่ D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            fromText: "จาก",
            monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            timeFormat: "HH:mm",
            toText: "ถึง",
            nowText: "ตอนนี้",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "วัน",
            timeText: "เวลา",
            todayText: "วันนี้",
            eventText: "เหตุการณ์",
            eventsText: "เหตุการณ์",
            allDayText: "ตลอดวัน",
            noEventsText: "ไม่มีกิจกรรม",
            moreEventsText: "อีก {count} กิจกรรม",
            weekText: "สัปดาห์ที่ {count}",
            rangeStartLabel: "จาก",
            rangeEndLabel: "ถึง",
            rangeStartHelp: "เลือก",
            rangeEndHelp: "เลือก",
            filterEmptyText: "ไม่มีผลลัพธ์",
            filterPlaceholderText: "ค้นหา",
        },
        lt = {
            setText: "Seç",
            cancelText: "İptal",
            clearText: "Temizleyin",
            closeText: "Kapatmak",
            selectedText: "{count} seçilmiş",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "D MMMM DDD, YYYY",
            dateWheelFormat: "|D MMM DDD|",
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
            dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
            fromText: "Başla",
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            timeFormat: "HH:mm",
            toText: "Son",
            nowText: "Şimdi",
            pmText: "pm",
            amText: "am",
            todayText: "Bugün",
            firstDay: 1,
            dateText: "Tarih",
            timeText: "Zaman",
            allDayText: "Tüm gün",
            noEventsText: "Etkinlik Yok",
            eventText: "Etkinlik",
            eventsText: "Etkinlikler",
            moreEventsText: "{count} tane daha",
            weekText: "{count}. Hafta",
            rangeStartLabel: "Başla",
            rangeEndLabel: "Son",
            rangeStartHelp: "Seç",
            rangeEndHelp: "Seç",
            filterEmptyText: "Sonuç Yok",
            filterPlaceholderText: "Arayın",
        },
        ct = {
            setText: "встановити",
            cancelText: "відміна",
            clearText: "очистити",
            closeText: "Закрити",
            selectedText: "{count} вибрані",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM.|",
            dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            fromText: "від",
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
            timeFormat: "H:mm",
            toText: "кінець",
            nowText: "Зараз",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "дата",
            timeText: "Час",
            todayText: "Сьогодні",
            eventText: "подія",
            eventsText: "події",
            allDayText: "Увесь день",
            noEventsText: "Жодної події",
            moreEventsText: "та ще {count}",
            weekText: "{count} тиждень",
            rangeStartLabel: "від",
            rangeEndLabel: "кінець",
            rangeEndHelp: "Обрати",
            rangeStartHelp: "Обрати",
            filterEmptyText: "Ніякого результату",
            filterPlaceholderText: "Пошук",
        },
        dt = {
            setText: "Đặt",
            cancelText: "Hủy bò",
            clearText: "Xóa",
            closeText: "Đóng",
            selectedText: "{count} chọn",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D, MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            fromText: "Từ",
            monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            timeFormat: "H:mm",
            toText: "Tới",
            nowText: "Bây giờ",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "Ngày",
            timeText: "Hồi",
            todayText: "Hôm nay",
            eventText: "Sự kiện",
            eventsText: "Sự kiện",
            allDayText: "Cả ngày",
            noEventsText: "Không có sự kiện",
            moreEventsText: "{count} thẻ khác",
            weekText: "Tuần {count}",
            rangeStartLabel: "Từ",
            rangeEndLabel: "Tới",
            rangeStartHelp: "Chọn",
            rangeEndHelp: "Chọn",
            filterEmptyText: "Không kết quả",
            filterPlaceholderText: "Tìm kiếm",
        },
        ht = {
            setText: "确定",
            cancelText: "取消",
            clearText: "明确",
            closeText: "关闭",
            selectedText: "{count} 选",
            dateFormat: "YYYY年M月D日",
            dateFormatLong: "YYYY年M月D日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            fromText: "开始时间",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            timeFormat: "H:mm",
            toText: "结束时间",
            nowText: "当前",
            pmText: "下午",
            amText: "上午",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今天",
            dateText: "日",
            timeText: "时间",
            allDayText: "全天",
            noEventsText: "无事件",
            eventText: "活动",
            eventsText: "活动",
            moreEventsText: "他 {count} 件",
            weekText: "第 {count} 週",
            rangeStartLabel: "开始时间",
            rangeEndLabel: "结束时间",
            rangeStartHelp: "选取",
            rangeEndHelp: "选取",
            filterEmptyText: "没有结果",
            filterPlaceholderText: "搜索",
        };
    function ut(e) {
        return e < -1e-7 ? Math.ceil(e - 1e-7) : Math.floor(e + 1e-7);
    }
    function mt(e, t, n) {
        var a,
            s,
            i = [0, 0, 0];
        a =
            e > 1582 || (1582 === e && t > 10) || (1582 === e && 10 === t && n > 14)
                ? ut((1461 * (e + 4800 + ut((t - 14) / 12))) / 4) + ut((367 * (t - 2 - 12 * ut((t - 14) / 12))) / 12) - ut((3 * ut((e + 4900 + ut((t - 14) / 12)) / 100)) / 4) + n - 32075
                : 367 * e - ut((7 * (e + 5001 + ut((t - 9) / 7))) / 4) + ut((275 * t) / 9) + n + 1729777;
        var r = ut(((s = a - 1948440 + 10632) - 1) / 10631),
            o = ut((10985 - (s = s - 10631 * r + 354)) / 5316) * ut((50 * s) / 17719) + ut(s / 5670) * ut((43 * s) / 15238);
        return (s = s - ut((30 - o) / 15) * ut((17719 * o) / 50) - ut(o / 16) * ut((15238 * o) / 43) + 29), (t = ut((24 * s) / 709)), (n = s - ut((709 * t) / 24)), (e = 30 * r + o - 30), (i[2] = n), (i[1] = t), (i[0] = e), i;
    }
    var _t = {
            getYear: function (e) {
                return mt(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --mt(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return mt(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, n, a, s, i, r) {
                t < 0 && ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Math.floor(t / 12)), (t %= 12));
                var o = (function (e, t, n) {
                    var a,
                        s,
                        i,
                        r,
                        o,
                        l = new Array(3),
                        c = ut((11 * e + 3) / 30) + 354 * e + 30 * t - ut((t - 1) / 2) + n + 1948440 - 385;
                    return (
                        c > 2299160
                            ? ((i = ut((4 * (a = c + 68569)) / 146097)),
                              (a -= ut((146097 * i + 3) / 4)),
                              (r = ut((4e3 * (a + 1)) / 1461001)),
                              (a = a - ut((1461 * r) / 4) + 31),
                              (s = ut((80 * a) / 2447)),
                              (n = a - ut((2447 * s) / 80)),
                              (t = s + 2 - 12 * (a = ut(s / 11))),
                              (e = 100 * (i - 49) + r + a))
                            : ((o = ut(((s = c + 1402) - 1) / 1461)),
                              (i = ut(((a = s - 1461 * o) - 1) / 365) - ut(a / 1461)),
                              (s = ut((80 * (r = a - 365 * i + 30)) / 2447)),
                              (n = r - ut((2447 * s) / 80)),
                              (t = s + 2 - 12 * (r = ut(s / 11))),
                              (e = 4 * o + i + r - 4716)),
                        (l[2] = n),
                        (l[1] = t),
                        (l[0] = e),
                        l
                    );
                })(e, +t + 1, n);
                return new Date(o[0], o[1] - 1, o[2], a || 0, s || 0, i || 0, r || 0);
            },
            getMaxDayOfMonth: function (e, t) {
                t < 0 && ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Math.floor(t / 12)), (t %= 12));
                return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][t] + (11 === t && (11 * e + 14) % 30 < 11 ? 1 : 0);
            },
        },
        pt = {},
        vt = {
            ar: G,
            bg: Z,
            ca: Q,
            cs: $,
            da: ee,
            de: te,
            el: ne,
            en: pt,
            "en-GB": ae,
            es: se,
            fa: ze,
            fi: Ve,
            fr: Ae,
            he: We,
            hi: Ue,
            hr: Be,
            hu: je,
            it: Ke,
            ja: Xe,
            ko: Je,
            lt: qe,
            nl: Ge,
            no: Ze,
            pl: Qe,
            "pt-BR": et,
            "pt-PT": $e,
            ro: tt,
            ru: nt,
            "ru-UA": at,
            sk: st,
            sr: it,
            sv: rt,
            th: ot,
            tr: lt,
            ua: ct,
            vi: dt,
            zh: ht,
        },
        ft = new Date(1970, 0, 1),
        gt = 6e4,
        yt = 36e5,
        bt = 864e5;
    function xt(e) {
        return !!e._mbsc;
    }
    function Dt(e, t, n) {
        var a = n || t.dataTimezone || t.displayTimezone,
            s = t.timezonePlugin;
        if (a && s && xt(e)) {
            var i = e.clone();
            return i.setTimezone(a), i.toISOString();
        }
        return e;
    }
    var Tt = {
            amText: "am",
            dateFormat: "MM/DD/YYYY",
            dateFormatFull: "DDDD, MMMM D, YYYY",
            dateFormatLong: "D DDD MMM YYYY",
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daySuffix: "",
            firstDay: 0,
            fromText: "Start",
            getDate: Vt,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthSuffix: "",
            pmText: "pm",
            quarterText: "Q{count}",
            separator: " ",
            shortYearCutoff: "+10",
            timeFormat: "h:mm A",
            toText: "End",
            todayText: "Today",
            weekText: "Week {count}",
            yearSuffix: "",
            getMonth: function (e) {
                return e.getMonth();
            },
            getDay: function (e) {
                return e.getDate();
            },
            getYear: function (e) {
                return e.getFullYear();
            },
            getMaxDayOfMonth: function (e, t) {
                return 32 - new Date(e, t, 32, 12).getDate();
            },
            getWeekNumber: function (e) {
                var t = new Date(+e);
                t.setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var n = new Date(t.getFullYear(), 0, 1);
                return Math.ceil(((t - n) / 864e5 + 1) / 7);
            },
        },
        St = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[T\s](\d{2}):?(\d{2})(?::?(\d{2})(?:\.(\d{3}))?)?((Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/,
        Ct = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
    function wt(e, t, n) {
        var a,
            s,
            i = { y: 1, m: 2, d: 3, h: 4, i: 5, s: 6, u: 7, tz: 8 };
        if (n) for (var r = 0, o = Object.keys(i); r < o.length; r++) (s = e[i[(a = o[r])] - t]) && (n[a] = "tz" === a ? s : 1);
    }
    function kt(e) {
        return +new Date(1970, 0, 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) - +ft;
    }
    function Mt(e, t, n, a, s) {
        var i = +e,
            r = +n;
        return i < (s && r === +a ? +a + 1 : +a) && (s && i === +t ? +t + 1 : +t) > r;
    }
    function Et(e, t) {
        var n = jt(e, t);
        return n.setHours(0, 0, 0, 0), n;
    }
    function Nt(e, t) {
        var n = jt(e, t);
        return n.setHours(23, 59, 59, 999), n;
    }
    function It(e, t, n, a, s) {
        return ((!t && !s) || e.exclusiveEndDates) && n && a && n < a ? jt(t ? ie : e, +a - 1) : a;
    }
    function Lt(e) {
        return e.getFullYear() + "-" + De(e.getMonth() + 1) + "-" + De(e.getDate());
    }
    function Ht(e, t) {
        return xt(e) && !t ? e.createDate(e.getFullYear(), e.getMonth(), e.getDate()) : Vt(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function Yt(e) {
        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function Ot(e, t) {
        return Te((Yt(t) - Yt(e)) / bt);
    }
    function Pt(e, t, n, a) {
        for (var s = -1, i = Ht(e); i <= Ht(t); i.setDate(i.getDate() + 1)) tn(i.getDay(), n, a) && s++;
        return s;
    }
    function Ft(e, t, n) {
        var a = e.getFullYear(),
            s = e.getMonth(),
            i = e.getDay(),
            r = n === ie ? t.firstDay : n;
        return new Date(a, s, r - (r - i > 0 ? 7 : 0) - i + e.getDate());
    }
    function Rt(e, t) {
        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
    }
    function zt(e, t, n) {
        return n.getYear(e) === n.getYear(t) && n.getMonth(e) === n.getMonth(t);
    }
    function Vt(e, t, n, a, s, i, r) {
        var o = new Date(e, t, n, a || 0, s || 0, i || 0, r || 0);
        return 23 === o.getHours() && 0 === (a || 0) && o.setHours(o.getHours() + 2), o;
    }
    function At(e) {
        return e.getTime;
    }
    function Wt(e) {
        return _e(e) && Ct.test(e);
    }
    function Ut(e, t) {
        return jt(e, t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
    }
    function Bt(e) {
        return e ? new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) : e;
    }
    function jt(e, t, n, a, s, i, r, o) {
        return null === t
            ? null
            : t && (me(t) || _e(t)) && ve(n)
            ? Kt(t, e)
            : e && e.timezonePlugin
            ? e.timezonePlugin.createDate(e, t, n, a, s, i, r, o)
            : fe(t)
            ? new Date(t)
            : ve(t)
            ? new Date()
            : new Date(t, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0);
    }
    function Kt(e, t, n, a, s) {
        var i;
        if ((_e(e) && (e = e.trim()), !e)) return null;
        var r = t && t.timezonePlugin;
        if (r && !s) {
            var o = xt(e) ? e : r.parse(e, t);
            return o.setTimezone(t.displayTimezone), o;
        }
        if (At(e)) return e;
        if (e._isAMomentObject) return e.toDate();
        if (me(e)) return new Date(e);
        i = Ct.exec(e);
        var l = t && t.defaultValue,
            c = Kt((he(l) ? l[0] : l) || new Date()),
            d = c.getFullYear(),
            h = c.getMonth(),
            u = c.getDate();
        return i
            ? (wt(i, 2, a), new Date(d, h, u, i[2] ? +i[2] : 0, i[3] ? +i[3] : 0, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0))
            : (i = St.exec(e))
            ? (wt(i, 0, a), new Date(i[1] ? +i[1] : d, i[2] ? i[2] - 1 : h, i[3] ? +i[3] : u, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0, i[6] ? +i[6] : 0, i[7] ? +i[7] : 0))
            : Gt(n, e, t);
    }
    function Xt(e, t, n, a, s) {
        var i = (v && window.moment) || t.moment,
            r = t.timezonePlugin && (t.dataTimezone || t.displayTimezone),
            o = r ? "iso8601" : t.returnFormat;
        if (r && s) return Dt(e, t);
        if (e) {
            if ("moment" === o && i) return i(e);
            if ("locale" === o) return qt(n, e, t);
            if ("iso8601" === o)
                return (function (e, t) {
                    var n = "",
                        a = "";
                    return (
                        e &&
                            (t.h && ((a += De(e.getHours()) + ":" + De(e.getMinutes())), t.s && (a += ":" + De(e.getSeconds())), t.u && (a += "." + De(e.getMilliseconds(), 3)), t.tz && (a += t.tz)),
                            t.y ? ((n += e.getFullYear()), t.m && ((n += "-" + De(e.getMonth() + 1)), t.d && (n += "-" + De(e.getDate())), t.h && (n += "T" + a))) : t.h && (n = a)),
                        n
                    );
                })(e, a);
        }
        return e;
    }
    function Jt(e, t, n) {
        return qt(e, t, c({}, Tt, C.locale, n));
    }
    function qt(e, t, n) {
        var a,
            s,
            i = "",
            r = !1,
            o = function (t) {
                for (var n = 0, s = a; s + 1 < e.length && e.charAt(s + 1) === t; ) n++, s++;
                return n;
            },
            l = function (e) {
                var t = o(e);
                return (a += t), t;
            },
            c = function (e, t, n) {
                var a = "" + t;
                if (l(e)) for (; a.length < n; ) a = "0" + a;
                return a;
            },
            d = function (e, t, n, a) {
                return 3 === l(e) ? a[t] : n[t];
            };
        for (a = 0; a < e.length; a++)
            if (r) "'" !== e.charAt(a) || l("'") ? (i += e.charAt(a)) : (r = !1);
            else
                switch (e.charAt(a)) {
                    case "D":
                        i += o("D") > 1 ? d("D", t.getDay(), n.dayNamesShort, n.dayNames) : c("D", n.getDay(t), 2);
                        break;
                    case "M":
                        i += o("M") > 1 ? d("M", n.getMonth(t), n.monthNamesShort, n.monthNames) : c("M", n.getMonth(t) + 1, 2);
                        break;
                    case "Y":
                        (s = n.getYear(t)), (i += 3 === l("Y") ? s : (s % 100 < 10 ? "0" : "") + (s % 100));
                        break;
                    case "h":
                        var h = t.getHours();
                        i += c("h", h > 12 ? h - 12 : 0 === h ? 12 : h, 2);
                        break;
                    case "H":
                        i += c("H", t.getHours(), 2);
                        break;
                    case "m":
                        i += c("m", t.getMinutes(), 2);
                        break;
                    case "s":
                        i += c("s", t.getSeconds(), 2);
                        break;
                    case "a":
                        i += t.getHours() > 11 ? n.pmText : n.amText;
                        break;
                    case "A":
                        i += t.getHours() > 11 ? n.pmText.toUpperCase() : n.amText.toUpperCase();
                        break;
                    case "'":
                        l("'") ? (i += "'") : (r = !0);
                        break;
                    default:
                        i += e.charAt(a);
                }
        return i;
    }
    function Gt(e, t, n) {
        var a = c({}, Tt, n),
            s = Kt(a.defaultValue || new Date());
        if (!t) return s;
        e || (e = a.dateFormat + a.separator + a.timeFormat);
        var i,
            r = a.shortYearCutoff,
            o = a.getYear(s),
            l = a.getMonth(s) + 1,
            d = a.getDay(s),
            h = s.getHours(),
            u = s.getMinutes(),
            m = 0,
            _ = -1,
            p = !1,
            v = 0,
            f = function (t) {
                for (var n = 0, a = i; a + 1 < e.length && e.charAt(a + 1) === t; ) n++, a++;
                return n;
            },
            g = function (e) {
                var t = f(e);
                return (i += t), t;
            },
            y = function (e) {
                var n = g(e),
                    a = new RegExp("^\\d{1," + (n >= 2 ? 4 : 2) + "}"),
                    s = t.substr(v).match(a);
                return s ? ((v += s[0].length), parseInt(s[0], 10)) : 0;
            },
            b = function (e, n, a) {
                for (var s = 3 === g(e) ? a : n, i = 0; i < s.length; i++) if (t.substr(v, s[i].length).toLowerCase() === s[i].toLowerCase()) return (v += s[i].length), i + 1;
                return 0;
            },
            x = function () {
                v++;
            };
        for (i = 0; i < e.length; i++)
            if (p) "'" !== e.charAt(i) || g("'") ? x() : (p = !1);
            else
                switch (e.charAt(i)) {
                    case "Y":
                        o = y("Y");
                        break;
                    case "M":
                        l = f("M") < 2 ? y("M") : b("M", a.monthNamesShort, a.monthNames);
                        break;
                    case "D":
                        f("D") < 2 ? (d = y("D")) : b("D", a.dayNamesShort, a.dayNames);
                        break;
                    case "H":
                        h = y("H");
                        break;
                    case "h":
                        h = y("h");
                        break;
                    case "m":
                        u = y("m");
                        break;
                    case "s":
                        m = y("s");
                        break;
                    case "a":
                        _ = b("a", [a.amText, a.pmText], [a.amText, a.pmText]) - 1;
                        break;
                    case "A":
                        _ = b("A", [a.amText, a.pmText], [a.amText, a.pmText]) - 1;
                        break;
                    case "'":
                        g("'") ? x() : (p = !0);
                        break;
                    default:
                        x();
                }
        if (o < 100) {
            var D = void 0;
            (D = o <= (_e(r) ? (new Date().getFullYear() % 100) + parseInt(r, 10) : +r) ? 0 : -100), (o += new Date().getFullYear() - (new Date().getFullYear() % 100) + D);
        }
        h = -1 === _ ? h : _ && h < 12 ? h + 12 : _ || 12 !== h ? h : 0;
        var T = a.getDate(o, l - 1, d, h, u, m);
        return a.getYear(T) !== o || a.getMonth(T) + 1 !== l || a.getDay(T) !== d ? s : T;
    }
    function Zt(e, t, n) {
        if (e === t) return !0;
        if ((he(e) && !e.length && null === t) || (he(t) && !t.length && null === e)) return !0;
        if (null === e || null === t || e === ie || t === ie) return !1;
        if (_e(e) && _e(t)) return e === t;
        var a = n && n.dateFormat;
        if (he(e) || he(t)) {
            if (e.length !== t.length) return !1;
            for (var s = 0; s < e.length; s++) {
                var i = e[s],
                    r = t[s];
                if (!(_e(i) && _e(r) ? i === r : +Kt(i, n, a) == +Kt(r, n, a))) return !1;
            }
            return !0;
        }
        return +Kt(e, n, a) == +Kt(t, n, a);
    }
    function Qt(e) {
        return xt(e) ? e.clone() : new Date(e);
    }
    function $t(e, t) {
        var n = Qt(e);
        return n.setDate(n.getDate() + t), n;
    }
    function en(e, t, n) {
        var a = n.getYear(e),
            s = n.getMonth(e) + t,
            i = n.getMaxDayOfMonth(a, s);
        return Ut(n, n.getDate(a, s, Math.min(n.getDay(e), i), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    }
    function tn(e, t, n) {
        return t > n ? e <= n || e >= t : e >= t && e <= n;
    }
    function nn(e, t) {
        var n = gt * t,
            a = Qt(e).setHours(0, 0, 0, 0),
            s = a + Math.round((+e - +a) / n) * n;
        return xt(e) ? e.createDate(s) : new Date(s);
    }
    function an(e, t, n) {
        return t && e < t ? new Date(t) : n && e > n ? new Date(n) : e;
    }
    v && "undefined" == typeof Symbol && (window.Symbol = { toPrimitive: "toPrimitive" });
    var sn = { formatDate: Jt, parseDate: Gt },
        rn = v ? document : ie,
        on = v ? window : ie,
        ln = ["Webkit", "Moz"],
        cn = rn && rn.createElement("div").style,
        dn = rn && rn.createElement("canvas"),
        hn = dn && dn.getContext && dn.getContext("2d", { willReadFrequently: !0 }),
        un = on && on.CSS,
        mn = un && un.supports,
        _n = {},
        pn =
            (on && on.requestAnimationFrame) ||
            function (e) {
                return setTimeout(e, 20);
            },
        vn =
            (on && on.cancelAnimationFrame) ||
            function (e) {
                clearTimeout(e);
            },
        fn = cn && cn.animationName !== ie,
        gn = "ios" === h && !D,
        yn = gn && on && on.webkit && on.webkit.messageHandlers,
        bn = (cn && cn.touchAction === ie) || (gn && !yn),
        xn = (function () {
            if (!cn || cn.transform !== ie) return "";
            for (var e = 0, t = ln; e < t.length; e++) {
                var n = t[e];
                if (cn[n + "Transform"] !== ie) return n;
            }
            return "";
        })(),
        Dn = xn ? "-" + xn.toLowerCase() + "-" : "",
        Tn = mn && mn("(transform-style: preserve-3d)"),
        Sn = mn && (mn("position", "sticky") || mn("position", "-webkit-sticky"));
    function Cn(e, t, n, a) {
        e && e.addEventListener(t, n, a);
    }
    function wn(e, t, n, a) {
        e && e.removeEventListener(t, n, a);
    }
    function kn(e) {
        return v ? (e && e.ownerDocument ? e.ownerDocument : rn) : ie;
    }
    function Mn(e, t) {
        return parseFloat(getComputedStyle(e)[t] || "0");
    }
    function En(e) {
        return e.scrollLeft !== ie ? e.scrollLeft : e.pageXOffset;
    }
    function Nn(e) {
        return e.scrollTop !== ie ? e.scrollTop : e.pageYOffset;
    }
    function In(e) {
        return v ? (e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : on) : ie;
    }
    function Ln(e, t) {
        var n = getComputedStyle(e),
            a = (xn ? n[xn + "Transform"] : n.transform).split(")")[0].split(", ");
        return +(t ? a[13] || a[5] : a[12] || a[4]) || 0;
    }
    function Hn(e) {
        if (!hn || !e) return "#000";
        if (_n[e]) return _n[e];
        (hn.fillStyle = e), hn.fillRect(0, 0, 1, 1);
        var t = hn.getImageData(0, 0, 1, 1),
            n = t ? t.data : [0, 0, 0],
            a = 0.299 * +n[0] + 0.587 * +n[1] + 0.114 * +n[2] < 130 ? "#fff" : "#000";
        return (_n[e] = a), a;
    }
    function Yn(e, t, n, a, s, i, r) {
        var o,
            l,
            c = Math.min(1, (+new Date() - t) / 468),
            d = 0.5 * (1 - Math.cos(Math.PI * c));
        s !== ie && ((o = Te(n + (s - n) * d)), (e.scrollLeft = o)),
            i !== ie && ((l = Te(a + (i - a) * d)), (e.scrollTop = l)),
            o !== s || l !== i
                ? pn(function () {
                      Yn(e, t, n, a, s, i, r);
                  })
                : r && r();
    }
    function On(e, t, n, a, s, i) {
        t !== ie && (t = Math.max(0, Te(t))),
            n !== ie && (n = Math.max(0, Te(n))),
            s && t !== ie && (t = -t),
            a ? Yn(e, +new Date(), e.scrollLeft, e.scrollTop, t, n, i) : (t !== ie && (e.scrollLeft = t), n !== ie && (e.scrollTop = n), i && i());
    }
    function Pn(e) {
        var t = e.getBoundingClientRect(),
            n = { left: t.left, top: t.top },
            a = In(e);
        return a !== ie && ((n.top += Nn(a)), (n.left += En(a))), n;
    }
    function Fn(e, t) {
        var n = e && (e.matches || e.msMatchesSelector);
        return n && n.call(e, t);
    }
    function Rn(e, t, n) {
        for (; e && !Fn(e, t); ) {
            if (e === n || e.nodeType === e.DOCUMENT_NODE) return null;
            e = e.parentNode;
        }
        return e;
    }
    function zn(e, t, n) {
        var a;
        try {
            a = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: n });
        } catch (e) {
            (a = document.createEvent("Event")).initEvent(t, !0, !0), (a.detail = n);
        }
        e.dispatchEvent(a);
    }
    function Vn(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n], n);
    }
    var An = 0;
    function Wn(e, t, n) {
        "jsonp" === n
            ? (function (e, t) {
                  if (on) {
                      var n = rn.createElement("script"),
                          a = "mbscjsonp" + ++An;
                      (on[a] = function (e) {
                          n.parentNode.removeChild(n), delete on[a], e && t(e);
                      }),
                          (n.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + a),
                          rn.body.appendChild(n);
                  }
              })(e, t)
            : (function (e, t) {
                  var n = new XMLHttpRequest();
                  n.open("GET", e, !0),
                      (n.onload = function () {
                          n.status >= 200 && n.status < 400 && t(JSON.parse(n.response));
                      }),
                      (n.onerror = function () {}),
                      n.send();
              })(e, t);
    }
    var Un = { getJson: Wn },
        Bn = {},
        jn = [],
        Kn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function Xn(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function Jn(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    var qn = {
        _catchError: function (e, t) {
            for (var n, a, s; (t = t._parent); )
                if ((n = t._component) && !n._processingException)
                    try {
                        if (((a = n.constructor) && null != a.getDerivedStateFromError && (n.setState(a.getDerivedStateFromError(e)), (s = n._dirty)), null != n.componentDidCatch && (n.componentDidCatch(e), (s = n._dirty)), s))
                            return (n._pendingError = n);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
        _vnodeId: 0,
    };
    function Gn(e, t, n) {
        var a,
            s,
            i,
            r = {};
        for (i in t) "key" == i ? (a = t[i]) : "ref" == i ? (s = t[i]) : (r[i] = t[i]);
        if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(arguments[i]);
        if ((null != n && (r.children = n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === r[i] && (r[i] = e.defaultProps[i]);
        return Zn(e, r, a, s, null);
    }
    function Zn(e, t, n, a, s) {
        var i = { type: e, props: t, key: n, ref: a, _children: null, _parent: null, _depth: 0, _dom: null, _nextDom: void 0, _component: null, _hydrating: null, constructor: void 0, _original: null == s ? ++qn._vnodeId : s };
        return null != qn.vnode && qn.vnode(i), i;
    }
    function Qn(e) {
        return e.children;
    }
    function $n(e, t) {
        (this.props = e), (this.context = t);
    }
    function ea(e, t) {
        if (null == t) return e._parent ? ea(e._parent, e._parent._children.indexOf(e) + 1) : null;
        for (var n; t < e._children.length; t++) if (null != (n = e._children[t]) && null != n._dom) return n._dom;
        return "function" == typeof e.type ? ea(e) : null;
    }
    function ta(e) {
        var t = e._vnode,
            n = t._dom,
            a = e._parentDom;
        if (a) {
            var s = [],
                i = Xn({}, t);
            (i._original = t._original + 1), pa(a, t, i, e._globalContext, void 0 !== a.ownerSVGElement, null != t._hydrating ? [n] : null, s, null == n ? ea(t) : n, t._hydrating), va(s, t), t._dom != n && na(t);
        }
    }
    function na(e) {
        if (null != (e = e._parent) && null != e._component) {
            e._dom = e._component.base = null;
            for (var t = 0; t < e._children.length; t++) {
                var n = e._children[t];
                if (null != n && null != n._dom) {
                    e._dom = e._component.base = n._dom;
                    break;
                }
            }
            return na(e);
        }
    }
    ($n.prototype.setState = function (e, t) {
        var n;
        (n = null != this._nextState && this._nextState !== this.state ? this._nextState : (this._nextState = Xn({}, this.state))),
            "function" == typeof e && (e = e(Xn({}, n), this.props)),
            e && Xn(n, e),
            null != e && this._vnode && (t && this._renderCallbacks.push(t), ra(this));
    }),
        ($n.prototype.forceUpdate = function (e) {
            this._vnode && ((this._force = !0), e && this._renderCallbacks.push(e), ra(this));
        }),
        ($n.prototype.render = Qn);
    var aa,
        sa = [],
        ia = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
    function ra(e) {
        ((!e._dirty && (e._dirty = !0) && sa.push(e) && !oa._rerenderCount++) || aa !== qn.debounceRendering) && ((aa = qn.debounceRendering) || ia)(oa);
    }
    function oa() {
        for (var e; (oa._rerenderCount = sa.length); )
            (e = sa.sort(function (e, t) {
                return e._vnode._depth - t._vnode._depth;
            })),
                (sa = []),
                e.some(function (e) {
                    e._dirty && ta(e);
                });
    }
    function la(e, t, n, a, s, i, r, o, l, c) {
        var d,
            h,
            u,
            m,
            _,
            p,
            v,
            f = (a && a._children) || jn,
            g = f.length;
        for (n._children = [], d = 0; d < t.length; d++)
            if (
                null !=
                (m =
                    null == (m = t[d]) || "boolean" == typeof m
                        ? (n._children[d] = null)
                        : "string" == typeof m || "number" == typeof m || "bigint" == typeof m
                        ? (n._children[d] = Zn(null, m, null, null, m))
                        : Array.isArray(m)
                        ? (n._children[d] = Zn(Qn, { children: m }, null, null, null))
                        : m._depth > 0
                        ? (n._children[d] = Zn(m.type, m.props, m.key, null, m._original))
                        : (n._children[d] = m))
            ) {
                if (((m._parent = n), (m._depth = n._depth + 1), null === (u = f[d]) || (u && m.key == u.key && m.type === u.type))) f[d] = void 0;
                else
                    for (h = 0; h < g; h++) {
                        if ((u = f[h]) && m.key == u.key && m.type === u.type) {
                            f[h] = void 0;
                            break;
                        }
                        u = null;
                    }
                pa(e, m, (u = u || Bn), s, i, r, o, l, c),
                    (_ = m._dom),
                    (h = m.ref) && u.ref != h && (v || (v = []), u.ref && v.push(u.ref, null, m), v.push(h, m._component || _, m)),
                    null != _
                        ? (null == p && (p = _),
                          "function" == typeof m.type && null != m._children && m._children === u._children ? (m._nextDom = l = ca(m, l, e)) : (l = da(e, m, u, f, _, l)),
                          c || "option" !== n.type ? "function" == typeof n.type && (n._nextDom = l) : (e.value = ""))
                        : l && u._dom == l && l.parentNode != e && (l = ea(u));
            }
        for (n._dom = p, d = g; d--; ) null != f[d] && ("function" == typeof n.type && null != f[d]._dom && f[d]._dom == n._nextDom && (n._nextDom = ea(a, d + 1)), ga(f[d], f[d]));
        if (v) for (d = 0; d < v.length; d++) fa(v[d], v[++d], v[++d]);
    }
    function ca(e, t, n) {
        for (var a = 0; a < e._children.length; a++) {
            var s = e._children[a];
            s && ((s._parent = e), (t = "function" == typeof s.type ? ca(s, t, n) : da(n, s, s, e._children, s._dom, t)));
        }
        return t;
    }
    function da(e, t, n, a, s, i) {
        var r;
        if (void 0 !== t._nextDom) (r = t._nextDom), (t._nextDom = void 0);
        else if (null == n || s != i || null == s.parentNode)
            e: if (null == i || i.parentNode !== e) e.appendChild(s), (r = null);
            else {
                for (var o = i, l = 0; (o = o.nextSibling) && l < a.length; l += 2) if (o == s) break e;
                e.insertBefore(s, i), (r = i);
            }
        return (i = void 0 !== r ? r : s.nextSibling);
    }
    function ha(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : null == n ? (e[t] = "") : "number" != typeof n || Kn.test(t) ? (e[t] = n) : (e[t] = n + "px");
    }
    function ua(e, t, n, a, s) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if (("string" == typeof a && (e.style.cssText = a = ""), a)) for (t in a) (n && t in n) || ha(e.style, t, "");
                if (n) for (t in n) (a && n[t] === a[t]) || ha(e.style, t, n[t]);
            }
        else if ("o" === t[0] && "n" === t[1])
            if (((i = t !== (t = t.replace(/Capture$/, ""))), (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)), e._listeners || (e._listeners = {}), (e._listeners[t + i] = n), n)) {
                if (!a) {
                    var r = i ? _a : ma;
                    e.addEventListener(t, r, i);
                }
            } else {
                var o = i ? _a : ma;
                e.removeEventListener(t, o, i);
            }
        else if ("dangerouslySetInnerHTML" !== t) {
            if (s) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                try {
                    e[t] = null == n ? "" : n;
                    break e;
                } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1])) ? e.setAttribute(t, n) : e.removeAttribute(t));
        }
    }
    function ma(e) {
        this._listeners[e.type + !1](qn.event ? qn.event(e) : e);
    }
    function _a(e) {
        this._listeners[e.type + !0](qn.event ? qn.event(e) : e);
    }
    function pa(e, t, n, a, s, i, r, o, l) {
        var c,
            d = t.type;
        if (void 0 !== t.constructor) return null;
        null != n._hydrating && ((l = n._hydrating), (o = t._dom = n._dom), (t._hydrating = null), (i = [o])), (c = qn._diff) && c(t);
        try {
            e: if ("function" == typeof d) {
                var h,
                    u,
                    m,
                    _,
                    p,
                    v,
                    f = t.props,
                    g = (c = d.contextType) && a[c._id],
                    y = c ? (g ? g.props.value : c._defaultValue) : a;
                if (
                    (n._component
                        ? (v = (h = t._component = n._component)._processingException = h._pendingError)
                        : ("prototype" in d && d.prototype.render ? (t._component = h = new d(f, y)) : ((t._component = h = new $n(f, y)), (h.constructor = d), (h.render = ya)),
                          g && g.sub(h),
                          (h.props = f),
                          h.state || (h.state = {}),
                          (h.context = y),
                          (h._globalContext = a),
                          (u = h._dirty = !0),
                          (h._renderCallbacks = [])),
                    null == h._nextState && (h._nextState = h.state),
                    null != d.getDerivedStateFromProps && (h._nextState == h.state && (h._nextState = Xn({}, h._nextState)), Xn(h._nextState, d.getDerivedStateFromProps(f, h._nextState))),
                    (m = h.props),
                    (_ = h.state),
                    u)
                )
                    null == d.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h._renderCallbacks.push(h.componentDidMount);
                else {
                    if (
                        (null == d.getDerivedStateFromProps && f !== m && null != h.componentWillReceiveProps && h.componentWillReceiveProps(f, y),
                        (!h._force && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(f, h._nextState, y)) || t._original === n._original)
                    ) {
                        (h.props = f),
                            (h.state = h._nextState),
                            t._original !== n._original && (h._dirty = !1),
                            (h._vnode = t),
                            (t._dom = n._dom),
                            (t._children = n._children),
                            t._children.forEach(function (e) {
                                e && (e._parent = t);
                            }),
                            h._renderCallbacks.length && r.push(h);
                        break e;
                    }
                    null != h.componentWillUpdate && h.componentWillUpdate(f, h._nextState, y),
                        null != h.componentDidUpdate &&
                            h._renderCallbacks.push(function () {
                                h.componentDidUpdate(m, _, p);
                            });
                }
                (h.context = y),
                    (h.props = f),
                    (h.state = h._nextState),
                    (c = qn._render) && c(t),
                    (h._dirty = !1),
                    (h._vnode = t),
                    (h._parentDom = e),
                    (c = h.render(h.props, h.state, h.context)),
                    (h.state = h._nextState),
                    null != h.getChildContext && (a = Xn(Xn({}, a), h.getChildContext())),
                    u || null == h.getSnapshotBeforeUpdate || (p = h.getSnapshotBeforeUpdate(m, _));
                var b = null != c && c.type === Qn && null == c.key ? c.props.children : c;
                la(e, Array.isArray(b) ? b : [b], t, n, a, s, i, r, o, l), (h.base = t._dom), (t._hydrating = null), h._renderCallbacks.length && r.push(h), v && (h._pendingError = h._processingException = null), (h._force = !1);
            } else
                null == i && t._original === n._original
                    ? ((t._children = n._children), (t._dom = n._dom))
                    : (t._dom = (function (e, t, n, a, s, i, r, o) {
                          var l = n.props,
                              c = t.props,
                              d = t.type,
                              h = 0;
                          "svg" === d && (s = !0);
                          if (null != i)
                              for (; h < i.length; h++) {
                                  var u = i[h];
                                  if (u && (u === e || (d ? u.localName == d : 3 == u.nodeType))) {
                                      (e = u), (i[h] = null);
                                      break;
                                  }
                              }
                          if (null == e) {
                              if (null === d) return document.createTextNode(c);
                              (e = s ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, c.is && c)), (i = null), (o = !1);
                          }
                          if (null === d) l === c || (o && e.data === c) || (e.data = c);
                          else {
                              i = i && jn.slice.call(e.childNodes);
                              var m = (l = n.props || Bn).dangerouslySetInnerHTML,
                                  _ = c.dangerouslySetInnerHTML;
                              if (
                                  (o || (null != i && (l = {}), (_ || m) && ((_ && ((m && _.__html == m.__html) || _.__html === e.innerHTML)) || (e.innerHTML = (_ && _.__html) || ""))),
                                  (function (e, t, n, a, s) {
                                      var i;
                                      for (i in n) "children" === i || "key" === i || i in t || ua(e, i, null, n[i], a);
                                      for (i in t) (s && "function" != typeof t[i]) || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || ua(e, i, t[i], n[i], a);
                                  })(e, c, l, s, o),
                                  _)
                              )
                                  t._children = [];
                              else if (((h = t.props.children), la(e, Array.isArray(h) ? h : [h], t, n, a, s && "foreignObject" !== d, i, r, e.firstChild, o), null != i)) for (h = i.length; h--; ) null != i[h] && Jn(i[h]);
                              o ||
                                  ("value" in c && void 0 !== (h = c.value) && (h !== e.value || ("progress" === d && !h)) && ua(e, "value", h, l.value, !1),
                                  "checked" in c && void 0 !== (h = c.checked) && h !== e.checked && ua(e, "checked", h, l.checked, !1));
                          }
                          return e;
                      })(n._dom, t, n, a, s, i, r, l));
            (c = qn.diffed) && c(t);
        } catch (e) {
            (t._original = null), (l || null != i) && ((t._dom = o), (t._hydrating = !!l), (i[i.indexOf(o)] = null)), qn._catchError(e, t, n);
        }
    }
    function va(e, t) {
        qn._commit && qn._commit(t, e),
            e.some(function (t) {
                try {
                    (e = t._renderCallbacks),
                        (t._renderCallbacks = []),
                        e.some(function (e) {
                            e.call(t);
                        });
                } catch (e) {
                    qn._catchError(e, t._vnode);
                }
            });
    }
    function fa(e, t, n) {
        try {
            "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            qn._catchError(e, n);
        }
    }
    function ga(e, t, n) {
        var a, s;
        if ((qn.unmount && qn.unmount(e), (a = e.ref) && ((a.current && a.current !== e._dom) || fa(a, null, t)), n || "function" == typeof e.type || (n = null != (s = e._dom)), (e._dom = e._nextDom = void 0), null != (a = e._component))) {
            if (a.componentWillUnmount)
                try {
                    a.componentWillUnmount();
                } catch (e) {
                    qn._catchError(e, t);
                }
            a.base = a._parentDom = null;
        }
        if ((a = e._children)) for (var i = 0; i < a.length; i++) a[i] && ga(a[i], t, n);
        null != s && Jn(s);
    }
    function ya(e, t, n) {
        return this.constructor(e, n);
    }
    function ba(e, t, n) {
        qn._root && qn._root(e, t);
        var a = "function" == typeof n,
            s = a ? null : (n && n._children) || t._children,
            i = [];
        pa(t, (e = ((!a && n) || t)._children = Gn(Qn, null, [e])), s || Bn, Bn, void 0 !== t.ownerSVGElement, !a && n ? [n] : s ? null : t.firstChild ? jn.slice.call(t.childNodes) : null, i, !a && n ? n : s ? s._dom : t.firstChild, a),
            va(i, e);
    }
    oa._rerenderCount = 0;
    var xa = 0;
    function Da(e, t) {
        var n = {
            _id: (t = "__cC" + xa++),
            _defaultValue: e,
            Consumer: function (e, t) {
                return e.children(t);
            },
            Provider: function (e) {
                if (!this.getChildContext) {
                    var n = [],
                        a = {};
                    (a[t] = this),
                        (this.getChildContext = function () {
                            return a;
                        }),
                        (this.shouldComponentUpdate = function (e) {
                            this.props.value !== e.value && n.some(ra);
                        }),
                        (this.sub = function (e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                n.splice(n.indexOf(e), 1), t && t.call(e);
                            };
                        });
                }
                return e.children;
            },
        };
        return (n.Provider._contextRef = n.Consumer.contextType = n);
    }
    var Ta = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype.render = function () {}),
            (t.prototype.shouldComponentUpdate = function (e, t) {
                return Sa(e, this.props) || Sa(t, this.state);
            }),
            t
        );
    })($n);
    function Sa(e, t) {
        for (var n in e) if (e[n] !== t[n]) return !0;
        for (var n in t) if (!(n in e)) return !0;
        return !1;
    }
    qn.vnode = function (e) {
        var t = e.props,
            n = {};
        if (_e(e.type)) {
            for (var a in t) {
                var s = t[a];
                /^onAni/.test(a) ? (a = a.toLowerCase()) : /ondoubleclick/i.test(a) && (a = "ondblclick"), (n[a] = s);
            }
            e.props = n;
        }
    };
    var Ca = {},
        wa = 0;
    function ka(e, t, n, a, s) {
        Fn(e, t)
            ? e.__mbscFormInst || Ma(n, e, s, a, !0)
            : Vn(e.querySelectorAll(t), function (e) {
                  e.__mbscFormInst || Ma(n, e, s, a, !0);
              });
    }
    function Ma(e, t, n, a, s) {
        var i,
            r,
            o = [],
            l = [],
            d = {},
            h = a || {},
            u = h.renderToParent ? t.parentNode : t,
            m = u.parentNode,
            _ = h.useOwnChildren ? t : u,
            p = t.getAttribute("class"),
            v = t.value,
            f = c({ className: u.getAttribute("class") }, t.dataset, n, {
                ref: function (e) {
                    r = e;
                },
            });
        h.readProps &&
            h.readProps.forEach(function (e) {
                var n = t[e];
                n !== ie && (f[e] = n);
            }),
            h.readAttrs &&
                h.readAttrs.forEach(function (e) {
                    var n = t.getAttribute(e);
                    null !== n && (f[e] = n);
                });
        var g = h.slots;
        if (g)
            for (var y = 0, b = Object.keys(g); y < b.length; y++) {
                var x = b[y],
                    D = g[x],
                    T = u.querySelector("[mbsc-" + D + "]");
                T && ((d[x] = T), T.parentNode.removeChild(T), (f[x] = Gn("span", { className: "mbsc-slot-" + D })));
            }
        if (
            (h.hasChildren &&
                (Vn(_.childNodes, function (e) {
                    e !== t && 8 !== e.nodeType && (3 !== e.nodeType || (3 === e.nodeType && /\S/.test(e.nodeValue))) && o.push(e), l.push(e);
                }),
                Vn(o, function (e) {
                    _.removeChild(e);
                }),
                o.length && (f.hasChildren = !0)),
            t.id || (t.id = "mbsc-control-" + wa++),
            h.before && h.before(t, f, o),
            ba(Gn(e, f), m, u),
            p &&
                h.renderToParent &&
                (i = t.classList).add.apply(
                    i,
                    p
                        .replace(/^\s+|\s+$/g, "")
                        .replace(/\s+|^\s|\s$/g, " ")
                        .split(" ")
                ),
            h.hasChildren)
        ) {
            var S = "." + h.parentClass,
                C = Fn(u, S) ? u : u.querySelector(S);
            C &&
                Vn(o, function (e) {
                    C.appendChild(e);
                });
        }
        if ((h.hasValue && (t.value = v), g))
            for (
                var w = function (e) {
                        var t = g[e],
                            n = d[e];
                        Vn(u.querySelectorAll(".mbsc-slot-" + t), function (e, t) {
                            var a = t > 0 ? n.cloneNode(!0) : n;
                            e.appendChild(a);
                        });
                    },
                    k = 0,
                    M = Object.keys(d);
                k < M.length;
                k++
            ) {
                w((x = M[k]));
            }
        return (
            (r.destroy = function () {
                var e = u.parentNode,
                    n = rn.createComment("");
                e.insertBefore(n, u),
                    ba(null, u),
                    delete t.__mbscInst,
                    delete t.__mbscFormInst,
                    delete u._listeners,
                    (u.innerHTML = ""),
                    u.setAttribute("class", f.className),
                    e.replaceChild(u, n),
                    h.hasChildren &&
                        Vn(l, function (e) {
                            _.appendChild(e);
                        }),
                    h.renderToParent && t.setAttribute("class", p || "");
            }),
            s ? (t.__mbscInst || (t.__mbscInst = r), (t.__mbscFormInst = r)) : (t.__mbscInst = r),
            r
        );
    }
    function Ea(e) {
        Ca[e._name] = e;
    }
    function Na(e, t) {
        if (e)
            for (var n = 0, a = Object.keys(Ca); n < a.length; n++) {
                var s = a[n],
                    i = Ca[s];
                ka(e, i._selector, i, i._renderOpt, t);
            }
    }
    var Ia,
        La,
        Ha = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._newProps = {}),
                    (t._setEl = function (e) {
                        t._el = e ? e._el || e : null;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this.__value;
                    },
                    set: function (e) {
                        this.__value = e;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.componentDidMount = function () {
                    this.__init(), this._init(), this._mounted(), this._updated(), this._enhance();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this._updated(), this._enhance();
                }),
                (t.prototype.componentWillUnmount = function () {
                    this._destroy(), this.__destroy();
                }),
                (t.prototype.render = function () {
                    return this._willUpdate(), this._template(this.s, this.state);
                }),
                (t.prototype.getInst = function () {
                    return this;
                }),
                (t.prototype.setOptions = function (e) {
                    for (var t in e) this.props[t] = e[t];
                    this.forceUpdate();
                }),
                (t.prototype._safeHtml = function (e) {
                    return { __html: e };
                }),
                (t.prototype._init = function () {}),
                (t.prototype.__init = function () {}),
                (t.prototype._emit = function (e, t) {}),
                (t.prototype._template = function (e, t) {}),
                (t.prototype._mounted = function () {}),
                (t.prototype._updated = function () {}),
                (t.prototype._destroy = function () {}),
                (t.prototype.__destroy = function () {}),
                (t.prototype._willUpdate = function () {}),
                (t.prototype._enhance = function () {
                    var e = this._shouldEnhance;
                    e && (Na(!0 === e ? this._el : e), (this._shouldEnhance = !1));
                }),
                t
            );
        })(Ta),
        Ya = on,
        Oa = +new Date(),
        Pa = {},
        Fa = {};
    function Ra(e) {
        !e._logged &&
            "mbscdemo" !== t.apiKey &&
            rn &&
            ((e._logged = !0),
            (Pa.components = Pa.components || []),
            Pa.components.push(e.constructor._name.toLowerCase()),
            clearTimeout(La),
            (La = setTimeout(function () {
                if (!t.fwv) {
                    var n = void 0;
                    switch (t.fw) {
                        case "angular":
                            var a = rn.querySelector("[ng-version]");
                            n = a ? a.getAttribute("ng-version") : "N/A";
                            break;
                        case "jquery":
                            n = Ya.$.fn && Ya.$.fn.jquery;
                    }
                    t.fwv = n || "N/A";
                }
                (Pa.demo = !!Ya.isMbscDemo),
                    (Pa.fw = t.fw),
                    (Pa.fwv = t.fwv),
                    (Pa.theme = e.s.theme),
                    (Pa.trialCode = t.apiKey),
                    (Pa.v = e._v.version),
                    Va("log", null, Pa, function () {
                        Pa = {};
                    });
            }, 5e3)));
    }
    function za(e) {
        if (e && rn && !rn.getElementById("trial-message")) {
            var t = rn.createElement("div");
            t.setAttribute("id", "trial-message"), t.setAttribute("style", "position: absolute;width: 100%; bottom: 0;left: 0; padding: 10px;box-sizing: border-box;"), t.setAttribute("class", "mbsc-font");
            var n = rn.createElement("div");
            n.setAttribute("style", "padding: 15px 25px; max-width: 400px; margin: 0 auto 10px auto; border-radius: 16px; line-height: 25px; background: #cacaca59; font-size: 15px; color: #151515;"), (n.innerHTML = e.message + " ");
            var a = rn.createElement("a");
            (a.innerHTML = e.button.text),
                a.setAttribute("style", "color: #FF4080;font-weight: 600;"),
                a.setAttribute("href", "https://mobiscroll.com/pricing?ref=trialapp"),
                n.appendChild(a),
                t.appendChild(n),
                rn.body.appendChild(t),
                setTimeout(function () {
                    rn.body.removeChild(t);
                }, 6e3);
        }
    }
    function Va(e, n, a, s, i, r) {
        if (on && rn) {
            var o = rn.createElement("script"),
                l = "mbsc_jsonp_" + (i || ++Oa);
            l = on[l] ? "mbsc_jsonp_" + ++Oa : l;
            var c = r || 1;
            on[l] = function (t, a) {
                clearTimeout(d),
                    o.parentNode.removeChild(o),
                    delete on[l],
                    (t = t
                        ? JSON.parse(t, function (e, t) {
                              return "string" != typeof t ? t : "function_" === t.substring(0, 9) && n ? n[t.replace("function_", "")] : t.match(St) ? Kt(t) : t;
                          })
                        : {}),
                    "remote" === e && ((Fa.txt = t.__e), delete t.__e),
                    a || s(t);
            };
            var d = setTimeout(h, 6e3);
            (o.onerror = h), (o.src = t.apiUrl + t.apiKey + "/" + e + "?callback=" + l + "&data=" + encodeURIComponent(JSON.stringify(a))), rn.body.appendChild(o);
        } else s({});
        function h() {
            on && on[l] && on[l](null, !0), "remote" === e && (c < 4 ? Va(e, n, a, s, i, c + 1) : Ia || ((Ia = !0), Aa()));
        }
    }
    function Aa() {
        var e = rn.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*=\s*([^;]*).*$)|^.*$/, "$1");
        rn.cookie = "mobiscrollClientError=1; expires=" + new Date(new Date().getTime() + 864e5).toUTCString() + "; path=/; SameSite=Strict";
        try {
            on.name = (on.name || "") + ";mobiscrollClientError";
        } catch (e) {}
        Va("error", null, { sessionID: e, trialCode: t.apiKey }, function () {
            rn.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            try {
                on.name = (on.name || "").replace(/;mobiscrollClientError/g, "");
            } catch (e) {}
        });
    }
    rn &&
        (rn.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(on.name || "")) &&
        rn.addEventListener("DOMContentLoaded", function () {
            Aa();
        });
    var Wa,
        Ua = new Function(
            "textParam,p",
            (function () {
                for (
                    var e = (function (e, t) {
                            for (
                                var n = (function (e) {
                                        for (var t = e[0], n = 0; n < 16; ++n) if ((t * n) % 16 == 1) return [n, e[1]];
                                    })(t),
                                    a = (function (e, t, n, a) {
                                        for (var s = "0123456789abcdef", i = t.length, r = "", o = 0; o < i; ++o) r += e ? s[(n * s.indexOf(t[o]) + a) % 16] : s[(((n * s.indexOf(t[o]) - n * a) % 16) + 16) % 16];
                                        return r;
                                    })(0, e, n[0], n[1]),
                                    s = a.length,
                                    i = [],
                                    r = 0;
                                r < s;
                                r += 2
                            )
                                i.push(a[r] + a[r + 1]);
                            return i;
                        })(
                            "9a90939d9a4f9e9af64b904b470c944b42575b5d904f9a9f904c0ea74b9a4e0c904b4c4a41470e0352a74b9a4e0c474b9e0e560c565402960304040b9a4f9e9af64b904b470c9a9e9a5109524a439406959a93424f5700090d449f4c459a43414c0e4f039d944b90069a574f0c424f4c499a4e024c02905d994e43424f0e560b57579a039d9057a74b9a4e0c44424141900ea74b9a4e0c904b4c4a41470e03089a035d9a07575b5d4c574ffd9af75d4ffd9af7574ffd90f75d4ffd90f7574c97904f9a9f904c064f970efd099641434c9a4f90074f944f4c9a95584c414c4f0902094a439596424b9358404241454d0b43479641909a4b4c9a090209964195439a43414c584b409541429f9a4f0b43479641909a4b4c9a0902099a419658560b43479641909a4b4c9a090209424f449a58560b43479641909a4b4c9a09020940419a9a414758560b43479641909a4b4c9a0902099043494e9a58560b43479641909a4b4c9a090209474b9049434c58560b43479641909a4b4c9a090209964b4a4a434c4958560b43479641909a4b4c9a09020944414c9a079543984f585e969e0b43479641909a4b4c9a09020942434c4f074e4f43494e9a585b50969e0902099a4f9e9a074b4243494c58454f4c9a4f9009020941964b45439a9358090d0ea74b9a4e0c44424141900ea74b9a4e0c904b4c4a41470e0308505603015b56560d560c5e030d090b43479641909a4b4c9a09f7030c4841434c0e095d09030d09005cf29f56565f5af29f56565f50f29f56565a53f29f56565a5bf29f56565a4552014a43945c095809090397454b9a454e0e4f039d904f9a9f904c060909978",
                            [5, 6]
                        ),
                        t = e.length,
                        n = "",
                        a = 0;
                    a < t;
                    a++
                )
                    n += String.fromCharCode(parseInt(e[a], 16));
                return n;
            })()
        ),
        Ba = "5.29.1",
        ja = 0,
        Ka = { large: 992, medium: 768, small: 576, xlarge: 1200, xsmall: 0 };
    f &&
        ((Wa = f.matches),
        f.addListener(function (e) {
            (Wa = e.matches), E.next();
        }));
    var Xa = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.s = {}),
                    (t.state = {}),
                    (t._mbsc = !0),
                    (t._v = { version: "5.29.1" }),
                    (t._uid = ++ja),
                    (t._textParamMulti = {}),
                    (t.__getText = Ua),
                    (t._proxyHook = function (e) {
                        t._hook(e.type, e);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "nativeElement", {
                    get: function () {
                        return this._el;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "__getTextParam", {
                    get: function () {
                        return Fa.val;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "textParam", {
                    get: function () {
                        return void 0 === this._textParam && (this._textParam = this.__getText(Fa, 0.15)), this._safeHtml(this._textParam);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.textParamMulti = function (e) {
                    return void 0 === this._textParamMulti[e] && (this._textParamMulti[e] = this.__getText(Fa, 0.15)), this._safeHtml(this._textParamMulti[e]);
                }),
                (t.prototype.destroy = function () {}),
                (t.prototype._hook = function (e, t) {
                    var n = this.s;
                    if (((t.inst = this), (t.type = e), n[e])) return n[e](t, this);
                    this._emit(e, t);
                }),
                (t.prototype.__init = function () {
                    var e = this;
                    if (this.constructor.defaults) {
                        this._optChange = E.subscribe(function () {
                            e.forceUpdate();
                        });
                        var t = this.props.modules;
                        if (t)
                            for (var n = 0, a = t; n < a.length; n++) {
                                var s = a[n];
                                s.init && s.init(this);
                            }
                    }
                    this._hook("onInit", {});
                }),
                (t.prototype.__destroy = function () {
                    this._optChange !== ie && E.unsubscribe(this._optChange), this._hook("onDestroy", {});
                }),
                (t.prototype._render = function (e, t) {}),
                (t.prototype._willUpdate = function () {
                    this._merge(), this._render(this.s, this.state);
                }),
                (t.prototype._resp = function (e) {
                    var t,
                        n = e.responsive,
                        a = -1,
                        s = this.state.width;
                    if ((s === ie && (s = 375), n && s))
                        for (var i = 0, r = Object.keys(n); i < r.length; i++) {
                            var o = r[i],
                                l = n[o],
                                c = l.breakpoint || Ka[o];
                            s >= c && c > a && ((t = l), (a = c));
                        }
                    return t;
                }),
                (t.prototype._merge = function () {
                    var e,
                        t,
                        n = this.constructor,
                        a = n.defaults,
                        s = this._opt || {},
                        i = {};
                    if (((this._prevS = this.s || {}), a)) {
                        for (var r in this.props) this.props[r] !== ie && (i[r] = this.props[r]);
                        var o = i.locale || s.locale || C.locale || {},
                            l = i.calendarSystem || o.calendarSystem || s.calendarSystem || C.calendarSystem,
                            d = i.theme || s.theme || C.theme,
                            u = i.themeVariant || s.themeVariant || C.themeVariant;
                        ("auto" !== d && d) || (d = M.theme || ""), ("dark" !== u && (!Wa || ("auto" !== u && u))) || !k[d + "-dark"] || (d += "-dark"), (i.theme = d);
                        var m = (t = k[d]) && t[n._name];
                        e = c({}, a, m, o, C, s, l, i);
                        var _ = this._resp(e);
                        (this._respProps = _), _ && (e = c({}, e, _));
                    } else (e = c({}, this.props)), (t = k[e.theme]);
                    var v = t && t.baseTheme;
                    (e.baseTheme = v),
                        (this.s = e),
                        (this._className = e.cssClass || e.class || e.className || ""),
                        (this._rtl = " mbsc-" + (e.rtl ? "rtl" : "ltr")),
                        (this._theme = " mbsc-" + e.theme + (v ? " mbsc-" + v : "")),
                        (this._touchUi = "auto" === e.touchUi || e.touchUi === ie ? p : e.touchUi),
                        (this._hb = "ios" !== h || ("ios" !== e.theme && "ios" !== v) ? "" : " mbsc-hb");
                }),
                (t.defaults = ie),
                (t._name = ""),
                t
            );
        })(Ha),
        Ja = { 0: "SU", 1: "MO", 2: "TU", 3: "WE", 4: "TH", 5: "FR", 6: "SA" },
        qa = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 },
        Ga = { byday: "weekDays", bymonth: "month", bymonthday: "day", bysetpos: "pos", dtstart: "from", freq: "repeat", wkst: "weekStart" };
    function Za(e, t, n, a) {
        var s = Kt(t.start, t.allDay ? ie : n),
            i = Kt(t.end, t.allDay ? ie : n),
            r = i - s;
        for (a && ((t.start = s), (t.end = i)), s = Ht(s), i = n.exclusiveEndDates ? i : Ht($t(i, 1)); s < i || !r; ) Qa(e, s, t), (s = $t(s, 1)), (r = 1);
    }
    function Qa(e, t, n) {
        var a = Lt(t);
        e[a] || ((e[a] = []), (e[a].date = Ht(t, !0))), e[a].push(n);
    }
    function $a(e, t, n, a, s, i) {
        var r = {};
        if (s)
            for (var o = 0, l = os(s); o < l.length; o++) {
                r[Lt(Kt(l[o]))] = !0;
            }
        if (i)
            for (var c = 0, d = ls(i, e, e, t, n, a); c < d.length; c++) {
                r[Lt(d[c].d)] = !0;
            }
        return r;
    }
    function es(e) {
        return _e(e) || e.getTime || e.toDate ? e : e.start || e.date;
    }
    function ts(e, t, n) {
        var a = t.original ? t.original.start : t.start,
            s = t.allDay || !a,
            i = e.timezonePlugin,
            r = t.timezone || e.dataTimezone || e.displayTimezone;
        return i && !s ? { dataTimezone: r, displayTimezone: n ? r : e.displayTimezone, timezonePlugin: i } : ie;
    }
    function ns(e) {
        for (var t = {}, n = 0, a = e.split(";"); n < a.length; n++) {
            var s = a[n].split("="),
                i = s[0].trim().toLowerCase(),
                r = s[1].trim();
            t[Ga[i] || i] = r;
        }
        return t;
    }
    function as(e) {
        return _e(e) ? ns(e) : c({}, e);
    }
    function ss(e, t, n) {
        var a = as(e),
            s = Kt(t),
            i = Kt(n),
            r = Ot(i, s),
            o = (a.repeat || "").toLowerCase(),
            l = function (e, t, n) {
                var a = e.filter(function (e) {
                    return e !== t;
                });
                return -1 === a.indexOf(n) && a.push(n), a;
            },
            c = function (e, t, n) {
                var a = he(e)
                        ? e
                        : ((e || "") + "").split(",").map(function (e) {
                              return +e;
                          }),
                    s = l(a, t, n);
                return s.length > 1 ? s : s[0];
            },
            d = function () {
                if (a.weekDays) {
                    var e = a.weekDays.split(","),
                        t = Ja[i.getDay()],
                        n = Ja[s.getDay()],
                        r = l(e, t, n);
                    a.weekDays = r.join();
                }
            };
        return (
            "weekly" === o
                ? d()
                : "monthly" === o
                ? a.pos === ie
                    ? (a.day = c(a.day, i.getDate(), s.getDate()))
                    : d()
                : "yearly" === o && (a.pos === ie ? ((a.month = c(a.month, i.getMonth() + 1, s.getMonth() + 1)), (a.day = c(a.day, i.getDate(), s.getDate()))) : d()),
            a.from && (a.from = $t(Kt(a.from), r)),
            a.until && (a.until = $t(Kt(a.until), r)),
            a
        );
    }
    function is(e, t, n, a) {
        for (var s = null, i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = Kt(o.start || o.date),
                    c = ls(o.recurring, l, l, t, ie, n, o.reccurringException, o.recurringExceptionRule, "first");
                (!s || c < s) && (s = c);
            } else if (o.start && o.end) {
                var d = Kt(o.start, n, a);
                Kt(o.end, n, a) > t && (s = d <= t ? t : s && s < d ? s : d);
            } else {
                var h = Kt(es(o), n, a);
                h > t && (!s || h < s) && (s = h);
            }
        }
        return s;
    }
    function rs(e, t, n, a) {
        var s = t;
        e.sort(function (e, t) {
            return Kt(es(e), n, a) - Kt(es(t), n, a);
        });
        for (var i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = Kt(o.start || o.date),
                    c = ls(o.recurring, l, l, t, ie, n, o.reccurringException, o.recurringExceptionRule, "last");
                c > s && (s = c);
            } else if (o.start && o.end) {
                var d = Kt(o.start, n, a),
                    h = Kt(o.end, n, a);
                h > s && Ot(s, d) <= 1 && (s = h);
            } else {
                var u = Kt(es(o), n, a);
                u > s && Ot(s, u) <= 1 && (s = u);
            }
        }
        return s;
    }
    function os(e) {
        return e ? (he(e) ? e : _e(e) ? e.split(",") : [e]) : [];
    }
    function ls(e, t, n, a, s, i, r, o, l) {
        _e(e) && (e = ns(e));
        for (
            var c,
                d,
                h = i.getYear,
                u = i.getMonth,
                m = i.getDay,
                _ = i.getDate,
                p = i.getMaxDayOfMonth,
                v = (e.repeat || "").toLowerCase(),
                f = e.interval || 1,
                g = e.count,
                y = e.from ? Kt(e.from) : t || (1 !== f || g !== ie || "monthly" === v || "yearly" === v ? new Date() : a),
                b = Ht(y),
                x = h(y),
                D = u(y),
                T = m(y),
                S = n ? n.getHours() : 0,
                C = n ? n.getMinutes() : 0,
                w = n ? n.getSeconds() : 0,
                k = e.until ? Kt(e.until) : 1 / 0,
                M = y < a,
                E = M ? a : Ht(y),
                N = "first" === l,
                I = "last" === l,
                L = N || I || !s || k < s ? k : s,
                H = g === ie ? 1 / 0 : g,
                Y = (e.weekDays || Ja[y.getDay()]).split(","),
                O = qa[(e.weekStart || "MO").trim().toUpperCase()],
                P = e.day,
                F = e.month,
                R = he(P) ? (P.length ? P : [T]) : ((P || T) + "").split(","),
                z = he(F) ? (F.length ? F : [D]) : ((F || D + 1) + "").split(","),
                V = [],
                A = e.pos !== ie,
                W = A ? +e.pos : 1,
                U = [],
                B = s ? $a(t, a, s, i, r, o) : {},
                j = !0,
                K = 0,
                X = 0,
                J = null,
                q = a,
                G = 0,
                Z = Y;
            G < Z.length;
            G++
        ) {
            var Q = Z[G];
            U.push(qa[Q.trim().toUpperCase()]);
        }
        var $ = function () {
                if ((s || (B = $a(d, d, $t(d, 1), i, r, o)), !B[Lt(d)] && d >= E))
                    if (N) (J = !J || d < J ? d : J), (j = !1);
                    else if (I) {
                        var e = Ot(q, d);
                        (q = d > q && e <= 1 ? d : q), (j = e <= 1);
                    } else V.push({ d: d, i: X });
                X++;
            },
            ee = function (e, t) {
                for (var n = [], a = 0, s = U; a < s.length; a++) for (var i = Ft(e, { firstDay: s[a] }); i < t; i.setDate(i.getDate() + 7)) i.getMonth() === e.getMonth() && n.push(+i);
                n.sort();
                var r = n[W < 0 ? n.length + W : W - 1];
                (d = r ? new Date(r) : t), (d = _(h(d), u(d), m(d), S, C, w)) >= y && (d <= L && X < H ? r && $() : (j = !1));
            };
        switch (v) {
            case "daily":
                for (X = g && M ? Ce(Ot(y, a) / f) : 0; j; ) (d = _(x, D, T + X * f, S, C, w)) <= L && X < H ? $() : (j = !1);
                break;
            case "weekly":
                var te = U,
                    ne = Ft(y, { firstDay: O }),
                    ae = ne.getDay();
                for (
                    te.sort(function (e, t) {
                        return (e = (e -= ae) < 0 ? e + 7 : e) - (t = (t -= ae) < 0 ? t + 7 : t);
                    });
                    j;

                ) {
                    for (var se = 0, re = te; se < re.length; se++) {
                        (c = $t(ne, (Q = re[se]) < O ? Q - O + 7 : Q - O)), (d = _(h(c), u(c), m(c) + 7 * K * f, S, C, w)) <= L && X < H ? d >= b && $() : (j = !1);
                    }
                    K++;
                }
                break;
            case "monthly":
                for (; j; ) {
                    var oe = p(x, D + K * f);
                    if (A) ee(_(x, D + K * f, 1), _(x, D + K * f + 1, 1));
                    else
                        for (var le = 0, ce = R; le < ce.length; le++) {
                            var de = ce[le];
                            (d = _(x, D + K * f, (ge = +de) < 0 ? oe + ge + 1 : ge, S, C, w)) <= L && X < H ? oe >= ge && d >= b && $() : (j = !1);
                        }
                    K++;
                }
                break;
            case "yearly":
                for (; j; ) {
                    for (var ue = 0, me = z; ue < me.length; ue++) {
                        var pe = +me[ue];
                        oe = p(x + K * f, pe - 1);
                        if (A) ee(_(x + K * f, pe - 1, 1), _(x + K * f, pe, 1));
                        else
                            for (var ve = 0, fe = R; ve < fe.length; ve++) {
                                var ge;
                                de = fe[ve];
                                (d = _(x + K * f, pe - 1, (ge = +de) < 0 ? oe + ge + 1 : ge, S, C, w)) <= L && X < H ? oe >= ge && d >= b && $() : (j = !1);
                            }
                    }
                    K++;
                }
        }
        return N ? J : I ? q : V;
    }
    function cs(e, t, n, a, s) {
        var i = {};
        if (!e) return ie;
        for (var r = 0, o = e; r < o.length; r++) {
            var l = o[r],
                d = ts(a, l, !0),
                h = ts(a, l),
                u = es(l),
                m = Kt(u, h);
            if (l.recurring)
                for (
                    var _ = Ct.test(u) ? null : Kt(u),
                        p = jt(d, m),
                        v = l.end ? Kt(l.end, d) : p,
                        f = "00:00" === l.end ? $t(v, 1) : v,
                        g = +f - +p,
                        y = $t(t, -1),
                        b = $t(n, 1),
                        x = 0,
                        D = ls(l.recurring, _, p, y, b, a, l.recurringException, l.recurringExceptionRule);
                    x < D.length;
                    x++
                ) {
                    var T = D[x],
                        S = T.d,
                        C = c({}, l);
                    if ((l.start ? (C.start = jt(d, S.getFullYear(), S.getMonth(), S.getDate(), p.getHours(), p.getMinutes(), p.getSeconds())) : ((C.allDay = !0), (C.start = jt(ie, S.getFullYear(), S.getMonth(), S.getDate()))), l.end))
                        if (l.allDay) {
                            var w = $t(S, Ot(p, f));
                            C.end = new Date(w.getFullYear(), w.getMonth(), w.getDate(), f.getHours(), f.getMinutes(), f.getSeconds());
                        } else C.end = jt(d, +C.start + g);
                    (C.nr = T.i), (C.occurrenceId = C.id + "_" + Lt(C.start)), (C.original = l), C.start && C.end ? Za(i, C, a, s) : Qa(i, S, C);
                }
            else l.start && l.end ? Za(i, l, a, s) : m && Qa(i, m, l);
        }
        return i;
    }
    var ds = 1,
        hs = "multi-year",
        us = "year",
        ms = "month",
        _s = "page",
        ps = 296,
        vs = de(Tt, { dateText: "Date", eventText: "event", eventsText: "events", moreEventsText: "{count} more", nextPageText: "Next page", prevPageText: "Previous page", showEventTooltip: !0, showToday: !0, timeText: "Time" });
    function fs(e, t) {
        var n = t.refDate ? Kt(t.refDate) : ft,
            a = t.showCalendar ? t.calendarType : t.eventRange,
            s = (t.showCalendar ? ("year" === a ? 1 : "week" === a ? t.weeks : t.size) : t.eventRangeSize) || 1,
            i = t.getDate,
            r = "week" === a ? Ft(n, t) : n,
            o = t.getYear(r),
            l = t.getMonth(r),
            c = t.getDay(r);
        switch (a) {
            case "year":
                return i(o + e * s, 0, 1);
            case "week":
                return i(o, l, c + 7 * s * e);
            case "day":
                return i(o, l, c + s * e);
            default:
                return i(o, l + e * s, 1);
        }
    }
    function gs(e, t) {
        var n,
            a = t.refDate ? Kt(t.refDate) : ft,
            s = t.getYear,
            i = t.getMonth,
            r = t.showCalendar ? t.calendarType : t.eventRange,
            o = (t.showCalendar ? ("year" === r ? 1 : "week" === r ? t.weeks : t.size) : t.eventRangeSize) || 1;
        switch (r) {
            case "year":
                n = s(e) - s(a);
                break;
            case "week":
                n = Ot(Ft(a, t), Ft(e, t)) / 7;
                break;
            case "day":
                n = Ot(a, e);
                break;
            case "month":
                n = i(e) - i(a) + 12 * (s(e) - s(a));
                break;
            default:
                return ie;
        }
        return Ce(n / o);
    }
    function ys(e, t) {
        var n = t.refDate ? Kt(t.refDate) : ft;
        return Ce((t.getYear(e) - t.getYear(n)) / 12);
    }
    function bs(e, t) {
        var n = t.refDate ? Kt(t.refDate) : ft;
        return t.getYear(e) - t.getYear(n);
    }
    function xs(e, t) {
        var n = t.refDate ? Kt(t.refDate) : ft;
        return t.getMonth(e) - t.getMonth(n) + 12 * (t.getYear(e) - t.getYear(n));
    }
    function Ds(e, t) {
        var n = Kt(e.start || e.date),
            a = Kt(t.start || e.date),
            s = e.title || e.text,
            i = t.title || t.text,
            r = n ? +n * (e.allDay ? 1 : 10) : 0,
            o = a ? +a * (t.allDay ? 1 : 10) : 0;
        return r === o ? (s > i ? 1 : -1) : r - o;
    }
    function Ts(e, t) {
        return "auto" === e ? Math.max(1, Math.min(3, Math.floor(t ? t / ps : 1))) : e ? +e : 1;
    }
    function Ss(e, t, n, a, s, i, r, o, l, c, d, h, u, m) {
        t = t || {};
        for (var _ = {}, p = new Map(), v = {}, f = n, g = 0, y = s, b = a; f < a; ) {
            var x = Lt(f),
                D = f.getDay(),
                T = e.getDay(f),
                S = d && e.getDate(e.getYear(f), e.getMonth(f) + 1, 0),
                C = (l && (D === o || (1 === T && d))) || +f == +n,
                w = Ft(f, e),
                k = Cs(t[x] || [], c),
                M = void 0,
                E = void 0,
                N = void 0,
                I = 0,
                L = 0,
                H = 0;
            C && ((v = {}), (b = l ? $t(w, i) : a)),
                r &&
                    (k = k.filter(function (e) {
                        return e.allDay;
                    })),
                -1 === s && (y = k.length + 1);
            var Y = k.length,
                O = [];
            for (h && (O.push({ id: "count_" + +f, count: Y, placeholder: 0 === Y }), (I = y)); Y && I < y; ) {
                M = null;
                for (var P = 0; P < k.length; P++) v[I] === k[P] && ((M = k[P]), (N = P));
                if (((E = (M && p.get(M)) || []), I === y - 1 && (L < Y - 1 || (H === Y && !M)) && -1 !== s)) {
                    var F = Y - L,
                        R = u || "",
                        z = ((F > 1 && m) || R).replace(/{count}/, F);
                    if ((F && O.push({ id: "more_" + ++g, more: z, label: z }), M)) {
                        v[I] = null;
                        for (var V = 0, A = E; V < A.length; V++) {
                            var W = A[V],
                                U = R.replace(/{count}/, "1");
                            _[Lt(W)].data[I] = { id: "more_" + ++g, more: U, label: U };
                        }
                    }
                    L++, I++;
                } else if (M) N === H && H++, Rt(f, Kt(M.end, ts(e, M))) && (v[I] = null), O.push({ id: M.occurrenceId || M.id, event: M }), I++, L++, E.push(f);
                else if (H < Y) {
                    var B = k[H],
                        j = B.allDay,
                        K = ts(e, B),
                        X = B.start && Kt(B.start, K);
                    if (!X || Rt(f, X) || C) {
                        var J = It(e, j, X, B.end && Kt(B.end, K), !0),
                            q = J && !Rt(X, J),
                            G = S && S < J ? S : J,
                            Z = X ? ", " + e.fromText + ": " + qt("DDDD, MMMM D, YYYY", X, e) : "",
                            Q = J ? ", " + e.toText + ": " + qt("DDDD, MMMM D, YYYY", J, e) : "";
                        B.id === ie && (B.id = "mbsc_" + ds++),
                            q && (v[I] = B),
                            p.set(B, [f]),
                            O.push({ event: B, id: B.occurrenceId || B.id, label: (B.title || B.text || "") + Z + Q, lastDay: S ? $t(S, 1) : ie, multiDay: q, showText: !0, width: q ? 100 * Math.min(Ot(f, G) + 1, Ot(f, b)) : 100 }),
                            I++,
                            L++;
                    }
                    H++;
                } else L < Y && O.push({ id: "ph_" + ++g, placeholder: !0 }), I++;
            }
            (_[x] = { data: O, events: k }), (f = Ht($t(f, 1)));
        }
        return _;
    }
    function Cs(e, t) {
        return e && e.slice(0).sort(t || Ds);
    }
    function ws(e, t, n) {
        return !(!1 === e || !1 === n || !t);
    }
    function ks(e, t, n) {
        return !1 !== e && !1 !== t && !1 !== n;
    }
    function Ms(e, t, n) {
        return !1 !== e && !1 !== t && !1 !== n;
    }
    function Es(e, t, n, a) {
        return !1 !== e && !1 !== t && !1 !== n && !1 !== a;
    }
    var Ns,
        Is,
        Ls = "animationstart",
        Hs = "blur",
        Ys = "change",
        Os = "click",
        Ps = "contextmenu",
        Fs = "dblclick",
        Rs = "focus",
        zs = "focusin",
        Vs = "input",
        As = "keydown",
        Ws = "mousedown",
        Us = "mousemove",
        Bs = "mouseup",
        js = "mouseenter",
        Ks = "mouseleave",
        Xs = "mousewheel",
        Js = "resize",
        qs = "scroll",
        Gs = "touchstart",
        Zs = "touchmove",
        Qs = "touchend",
        $s = "touchcancel",
        ei = "wheel",
        ti = 13,
        ni = 32,
        ai = 33,
        si = 34,
        ii = 35,
        ri = 36,
        oi = 37,
        li = 38,
        ci = 39,
        di = 40,
        hi = 0;
    function ui(e, t, n) {
        var a,
            s,
            i,
            r,
            o,
            l,
            c,
            d = 0;
        function h() {
            (s.style.width = "100000px"), (s.style.height = "100000px"), (a.scrollLeft = 1e5), (a.scrollTop = 1e5), (l.scrollLeft = 1e5), (l.scrollTop = 1e5);
        }
        function u() {
            var e = +new Date();
            (r = 0), c || (e - d > 200 && !a.scrollTop && !a.scrollLeft && ((d = e), h()), r || (r = pn(u)));
        }
        function m() {
            o || (o = pn(_));
        }
        function _() {
            (o = 0), h(), t();
        }
        return (
            on && on.ResizeObserver
                ? (Ns ||
                      (Ns = new on.ResizeObserver(function (e) {
                          o ||
                              (o = pn(function () {
                                  for (var t = 0, n = e; t < n.length; t++) {
                                      var a = n[t];
                                      a.target.__mbscResize && a.target.__mbscResize();
                                  }
                                  o = 0;
                              }));
                      })),
                  hi++,
                  (e.__mbscResize = function () {
                      n ? n.run(t) : t();
                  }),
                  Ns.observe(e))
                : (i = rn && rn.createElement("div")),
            i &&
                ((i.innerHTML = '<div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-x"></div></div><div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-y"></div></div>'),
                (i.dir = "ltr"),
                (l = i.childNodes[1]),
                (a = i.childNodes[0]),
                (s = a.childNodes[0]),
                e.appendChild(i),
                Cn(a, "scroll", m),
                Cn(l, "scroll", m),
                n
                    ? n.runOutsideAngular(function () {
                          pn(u);
                      })
                    : pn(u)),
            {
                detach: function () {
                    Ns ? (hi--, delete e.__mbscResize, Ns.unobserve(e), hi || (Ns = ie)) : (i && (wn(a, "scroll", m), wn(l, "scroll", m), e.removeChild(i), vn(o), (i = ie)), (c = !0));
                },
            }
        );
    }
    var mi = "input,select,textarea,button",
        _i = 'textarea,button,input[type="button"],input[type="submit"]',
        pi = mi + ',[tabindex="0"]',
        vi = { enter: ti, esc: 27, space: ni },
        fi = v && /(iphone|ipod)/i.test(g) && T >= 7 && T < 15;
    function gi(e, t) {
        var n = e.s,
            a = [],
            s = {
                cancel: { cssClass: "mbsc-popup-button-close", name: "cancel", text: n.cancelText },
                close: { cssClass: "mbsc-popup-button-close", name: "close", text: n.closeText },
                ok: { cssClass: "mbsc-popup-button-primary", keyCode: ti, name: "ok", text: n.okText },
                set: { cssClass: "mbsc-popup-button-primary", keyCode: ti, name: "set", text: n.setText },
            };
        return t && t.length
            ? (t.forEach(function (t) {
                  var n = _e(t) ? s[t] || { text: t } : t;
                  (n.handler && !_e(n.handler)) ||
                      (_e(n.handler) && (n.name = n.handler),
                      (n.handler = function (t) {
                          e._onButtonClick({ domEvent: t, button: n });
                      })),
                      a.push(n);
              }),
              a)
            : ie;
    }
    function yi(e, t) {
        void 0 === t && (t = 0);
        var n = e._prevModal;
        return n && n !== e && t < 10 ? (n.isVisible() ? n : yi(n, t + 1)) : ie;
    }
    var bi = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._lastFocus = +new Date()),
                (t._setActive = function (e) {
                    t._active = e;
                }),
                (t._setContent = function (e) {
                    t._content = e;
                }),
                (t._setLimitator = function (e) {
                    t._limitator = e;
                }),
                (t._setPopup = function (e) {
                    t._popup = e;
                }),
                (t._setWrapper = function (e) {
                    t._wrapper = e;
                }),
                (t._onOverlayClick = function () {
                    t._isOpen && t.s.closeOnOverlayClick && !t._preventClose && t._close("overlay"), (t._preventClose = !1);
                }),
                (t._onDocClick = function (e) {
                    t.s.showOverlay || e.target === t.s.focusElm || Is !== t || t._onOverlayClick();
                }),
                (t._onMouseDown = function (e) {
                    t.s.showOverlay || (t._target = e.target);
                }),
                (t._onMouseUp = function (e) {
                    t._target && t._popup && t._popup.contains(t._target) && !t._popup.contains(e.target) && (t._preventClose = !0), (t._target = !1);
                }),
                (t._onPopupClick = function () {
                    t.s.showOverlay || (t._preventClose = !0);
                }),
                (t._onAnimationEnd = function (e) {
                    e.target === t._popup && (t._isClosing && (t._onClosed(), (t._isClosing = !1), t.state.isReady ? t.setState({ isReady: !1 }) : t.forceUpdate()), t._isOpening && (t._onOpened(), (t._isOpening = !1), t.forceUpdate()));
                }),
                (t._onButtonClick = function (e) {
                    var n = e.domEvent,
                        a = e.button;
                    t._hook("onButtonClick", { domEvent: n, button: a }), /cancel|close|ok|set/.test(a.name) && t._close(a.name);
                }),
                (t._onFocus = function (e) {
                    var n = +new Date();
                    Is === t && e.target.nodeType && t._ctx.contains(e.target) && t._popup && !t._popup.contains(e.target) && n - t._lastFocus > 100 && e.target !== t.s.focusElm && ((t._lastFocus = n), t._active.focus());
                }),
                (t._onKeyDown = function (e) {
                    var n = t.s,
                        a = e.keyCode,
                        s = n.focusElm && !n.focusOnOpen ? n.focusElm : ie;
                    if ((((a === ni && !Fn(e.target, mi)) || (t._lock && (a === li || a === di))) && e.preventDefault(), n.focusTrap && 9 === a)) {
                        var i = t._popup.querySelectorAll(pi),
                            r = [],
                            o = -1,
                            l = 0,
                            c = -1,
                            d = ie;
                        Vn(i, function (e) {
                            e.disabled || (!e.offsetHeight && !e.offsetWidth) || (r.push(e), o++, e === t._doc.activeElement && (c = o));
                        }),
                            e.shiftKey && ((l = o), (o = 0)),
                            c === o ? (d = s || r[l]) : e.target === s && (d = r[l]),
                            d && (d.focus(), e.preventDefault());
                    }
                }),
                (t._onContentScroll = function (e) {
                    !t._lock || (e.type === Zs && "stylus" === e.touches[0].touchType) || e.preventDefault();
                }),
                (t._onScroll = function (e) {
                    var n = t.s;
                    n.closeOnScroll ? t._close("scroll") : (t._hasContext || "anchored" === n.display) && t.position();
                }),
                (t._onWndKeyDown = function (e) {
                    var n = t.s,
                        a = e.keyCode;
                    if (Is === t && a !== ie) {
                        if ((t._hook("onKeyDown", { keyCode: a }), n.closeOnEsc && 27 === a && t._close("esc"), a === ti && Fn(e.target, _i) && !e.shiftKey)) return;
                        if (t._buttons)
                            for (var s = 0, i = t._buttons; s < i.length; s++)
                                for (var r = i[s], o = 0, l = he(r.keyCode) ? r.keyCode : [r.keyCode]; o < l.length; o++) {
                                    var c = l[o];
                                    if (!r.disabled && c !== ie && (c === a || vi[c] === a)) return void r.handler(e);
                                }
                    }
                }),
                (t._onResize = function () {
                    var e = t._wrapper,
                        n = t._hasContext;
                    if (e) {
                        (t._vpWidth = Math.min(e.clientWidth, n ? 1 / 0 : t._win.innerWidth)),
                            (t._vpHeight = Math.min(e.clientHeight, n ? 1 / 0 : t._win.innerHeight)),
                            (t._maxWidth = t._limitator.offsetWidth),
                            (t._maxHeight = t.s.maxHeight !== ie || t._vpWidth < 768 || t._vpHeight < 650 ? t._limitator.offsetHeight : 600),
                            (t._round = !1 === t.s.touchUi || (t._popup.offsetWidth < t._vpWidth && t._vpWidth > t._maxWidth));
                        var a = { isLarge: t._round, maxPopupHeight: t._maxHeight, maxPopupWidth: t._maxWidth, target: e, windowHeight: t._vpHeight, windowWidth: t._vpWidth };
                        !1 === t._hook("onResize", a) || a.cancel || t.position();
                    }
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype.open = function () {
                this._isOpen || this.setState({ isOpen: !0 });
            }),
            (t.prototype.close = function () {
                this._close();
            }),
            (t.prototype.isVisible = function () {
                return !!this._isOpen;
            }),
            (t.prototype.position = function () {
                if (this._isOpen) {
                    var e = this.s,
                        t = this.state,
                        n = this._wrapper,
                        a = this._popup,
                        s = this._hasContext,
                        i = e.anchor,
                        r = e.anchorAlign,
                        o = e.rtl,
                        l = Nn(this._scrollCont),
                        c = En(this._scrollCont),
                        d = this._vpWidth,
                        h = this._vpHeight,
                        u = this._maxWidth,
                        m = this._maxHeight,
                        _ = Math.min(a.offsetWidth, u),
                        p = Math.min(a.offsetHeight, m),
                        v = e.showArrow;
                    (this._lock = e.scrollLock && this._content.scrollHeight <= this._content.clientHeight), s && ((n.style.top = l + "px"), (n.style.left = c + "px"));
                    var f = !1 === this._hook("onPosition", { isLarge: this._round, maxPopupHeight: m, maxPopupWidth: u, target: this._wrapper, windowHeight: h, windowWidth: d });
                    if ("anchored" !== e.display || f) this.setState({ height: h, isReady: !0, showArrow: v, width: d });
                    else {
                        var g = 0,
                            y = 0,
                            b = ce(t.modalLeft || 0, 8, d - _ - 8),
                            x = t.modalTop || 8,
                            D = "bottom",
                            T = {},
                            S = v ? 16 : 4,
                            C = (n.offsetWidth - d) / 2,
                            w = (n.offsetHeight - h) / 2;
                        if (s) {
                            var k = this._ctx.getBoundingClientRect();
                            (y = k.top), (g = k.left);
                        }
                        if (i && this._ctx.contains(i)) {
                            var M = i.getBoundingClientRect(),
                                E = M.top - y,
                                N = M.left - g,
                                I = i.offsetWidth,
                                L = i.offsetHeight;
                            if (
                                ((b = ce((b = ("start" === r && !o) || ("end" === r && o) ? N : ("end" === r && !o) || ("start" === r && o) ? N + I - _ : N - (_ - I) / 2), 8, d - _ - 8)),
                                (x = E + L + S),
                                (T = { left: ce(N + I / 2 - b - C, 30, _ - 30) + "px" }),
                                x + p + S > h)
                            )
                                if (E - p - S > 0) (D = "top"), (x = E - p - S);
                                else if (!e.disableLeftRight) {
                                    var H = N - _ - 8 > 0;
                                    (H || N + I + _ + 8 <= d) &&
                                        ((x = ce(E - (p - L) / 2, 8, h - p - 8)) + p + 8 > h && (x = Math.max(h - p - 8, 0)), (T = { top: ce(E + L / 2 - x - w, 30, p - 30) + "px" }), (D = H ? "left" : "right"), (b = H ? N - _ : N + I));
                                }
                        }
                        ("top" !== D && "bottom" !== D) || (x + p + S > h && ((x = Math.max(h - p - S, 0)), (v = !1))), this.setState({ arrowPos: T, bubblePos: D, height: h, isReady: !0, modalLeft: b, modalTop: x, showArrow: v, width: d });
                    }
                }
            }),
            (t.prototype._render = function (e, t) {
                "bubble" === e.display && (e.display = "anchored");
                var n = e.animation,
                    a = e.display,
                    s = this._prevS,
                    i = "anchored" === a,
                    r = "inline" !== a,
                    o = e.fullScreen && r,
                    l = !!r && (e.isOpen === ie ? t.isOpen : e.isOpen);
                if (
                    (l && (e.windowWidth !== s.windowWidth || e.display !== s.display || e.showArrow !== s.showArrow || (e.anchor !== s.anchor && "anchored" === e.display)) && (this._shouldPosition = !0),
                    (this._limits = { maxHeight: be(e.maxHeight), maxWidth: be(e.maxWidth) }),
                    (this._style = {
                        height: o ? "100%" : be(e.height),
                        left: i && t.modalLeft ? t.modalLeft + "px" : "",
                        maxHeight: be(this._maxHeight || e.maxHeight),
                        maxWidth: be(this._maxWidth || e.maxWidth),
                        top: i && t.modalTop ? t.modalTop + "px" : "",
                        width: o ? "100%" : be(e.width),
                    }),
                    (this._hasContext = "body" !== e.context && e.context !== ie),
                    (this._needsLock = fi && !this._hasContext && "anchored" !== a && e.scrollLock),
                    (this._isModal = r),
                    (this._flexButtons = "center" === a || (!this._touchUi && !o && ("top" === a || "bottom" === a))),
                    n !== ie && !0 !== n)
                )
                    this._animation = _e(n) ? n : "";
                else
                    switch (a) {
                        case "bottom":
                            this._animation = "slide-up";
                            break;
                        case "top":
                            this._animation = "slide-down";
                            break;
                        default:
                            this._animation = "pop";
                    }
                e.buttons ? e.buttons !== s.buttons && (this._buttons = gi(this, e.buttons)) : (this._buttons = ie),
                    e.headerText !== s.headerText && (this._headerText = e.headerText ? this._safeHtml(e.headerText) : ie),
                    e.context !== s.context && (this._contextChanged = !0),
                    l && !this._isOpen && this._onOpen(),
                    !l && this._isOpen && this._onClose(),
                    (this._isOpen = l),
                    (this._isVisible = l || this._isClosing);
            }),
            (t.prototype._updated = function () {
                var e = this,
                    t = this.s,
                    n = this._wrapper;
                if (rn && (this._contextChanged || !this._ctx) && ((a = _e(t.context) ? rn.querySelector(t.context) : t.context) || (a = rn.body), (this._ctx = a), (this._contextChanged = !1), this._justOpened))
                    return void Ee(this, function () {
                        e.forceUpdate();
                    });
                if (n) {
                    if (this._justOpened) {
                        var a = this._ctx,
                            s = this._hasContext,
                            i = (this._doc = kn(n)),
                            r = (this._win = In(n)),
                            o = i.activeElement;
                        if (!this._hasWidth && t.responsive) {
                            var l = Math.min(n.clientWidth, s ? 1 / 0 : r.innerWidth),
                                c = Math.min(n.clientHeight, s ? 1 / 0 : r.innerHeight);
                            if (((this._hasWidth = !0), l !== this.state.width || c !== this.state.height))
                                return void Ee(this, function () {
                                    e.setState({ height: c, width: l });
                                });
                        }
                        if (((this._scrollCont = s ? a : r), (this._observer = ui(n, this._onResize, this._zone)), (this._prevFocus = t.focusElm || o), (a.__mbscModals = (a.__mbscModals || 0) + 1), this._needsLock)) {
                            if (!a.__mbscIOSLock) {
                                var d = Nn(this._scrollCont),
                                    h = En(this._scrollCont);
                                (a.style.left = -h + "px"), (a.style.top = -d + "px"), (a.__mbscScrollLeft = h), (a.__mbscScrollTop = d), a.classList.add("mbsc-popup-open-ios"), a.parentElement.classList.add("mbsc-popup-open-ios");
                            }
                            a.__mbscIOSLock = (a.__mbscIOSLock || 0) + 1;
                        }
                        s && a.classList.add("mbsc-popup-ctx"),
                            t.focusTrap && Cn(r, zs, this._onFocus),
                            t.focusElm && !t.focusOnOpen && Cn(t.focusElm, As, this._onKeyDown),
                            Cn(this._scrollCont, Zs, this._onContentScroll, { passive: !1 }),
                            Cn(this._scrollCont, ei, this._onContentScroll, { passive: !1 }),
                            Cn(this._scrollCont, Xs, this._onContentScroll, { passive: !1 }),
                            setTimeout(function () {
                                t.focusOnOpen && o && o.blur(), (fn && e._animation) || e._onOpened(), Cn(i, Ws, e._onMouseDown), Cn(i, Bs, e._onMouseUp), Cn(i, Os, e._onDocClick);
                            }),
                            this._hook("onOpen", { target: this._wrapper });
                    }
                    this._shouldPosition &&
                        Ee(this, function () {
                            e._onResize();
                        }),
                        (this._justOpened = !1),
                        (this._justClosed = !1),
                        (this._shouldPosition = !1);
                }
            }),
            (t.prototype._destroy = function () {
                this._isOpen && (this._onClosed(), this._unlisten(), Is === this && (Is = yi(this)));
            }),
            (t.prototype._onOpen = function () {
                var e = this;
                fn && this._animation && ((this._isOpening = !0), (this._isClosing = !1)),
                    (this._justOpened = !0),
                    (this._preventClose = !1),
                    this.s.setActive &&
                        Is !== this &&
                        setTimeout(function () {
                            (e._prevModal = Is), (Is = e);
                        });
            }),
            (t.prototype._onClose = function () {
                var e = this;
                fn && this._animation
                    ? ((this._isClosing = !0), (this._isOpening = !1))
                    : setTimeout(function () {
                          e._onClosed(), e.setState({ isReady: !1 });
                      }),
                    (this._hasWidth = !1),
                    this._unlisten();
            }),
            (t.prototype._onOpened = function () {
                var e = this.s;
                if (e.focusOnOpen) {
                    var t = e.activeElm,
                        n = t ? (_e(t) ? this._popup.querySelector(t) || this._active : t) : this._active;
                    n && n.focus && n.focus();
                }
                Cn(this._win, As, this._onWndKeyDown), Cn(this._scrollCont, qs, this._onScroll);
            }),
            (t.prototype._onClosed = function () {
                var e = this,
                    t = this._ctx,
                    n = this._prevFocus,
                    a = this.s.focusOnClose && n && n.focus && n !== this._doc.activeElement;
                t.__mbscModals && t.__mbscModals--,
                    (this._justClosed = !0),
                    this._needsLock &&
                        (t.__mbscIOSLock && t.__mbscIOSLock--,
                        t.__mbscIOSLock ||
                            (t.classList.remove("mbsc-popup-open-ios"),
                            t.parentElement.classList.remove("mbsc-popup-open-ios"),
                            (t.style.left = ""),
                            (t.style.top = ""),
                            (function (e, t) {
                                e.scrollTo ? e.scrollTo(t, e.scrollY) : (e.scrollLeft = t);
                            })(this._scrollCont, t.__mbscScrollLeft || 0),
                            (function (e, t) {
                                e.scrollTo ? e.scrollTo(e.scrollX, t) : (e.scrollTop = t);
                            })(this._scrollCont, t.__mbscScrollTop || 0))),
                    this._hasContext && !t.__mbscModals && t.classList.remove("mbsc-popup-ctx"),
                    this._hook("onClosed", { focus: a }),
                    a && n.focus(),
                    setTimeout(function () {
                        Is === e && (Is = yi(e));
                    });
            }),
            (t.prototype._unlisten = function () {
                wn(this._win, As, this._onWndKeyDown),
                    wn(this._scrollCont, qs, this._onScroll),
                    wn(this._scrollCont, Zs, this._onContentScroll, { passive: !1 }),
                    wn(this._scrollCont, ei, this._onContentScroll, { passive: !1 }),
                    wn(this._scrollCont, Xs, this._onContentScroll, { passive: !1 }),
                    wn(this._doc, Ws, this._onMouseDown),
                    wn(this._doc, Bs, this._onMouseUp),
                    wn(this._doc, Os, this._onDocClick),
                    this.s.focusTrap && wn(this._win, zs, this._onFocus),
                    this.s.focusElm && wn(this.s.focusElm, As, this._onKeyDown),
                    this._observer && (this._observer.detach(), (this._observer = null));
            }),
            (t.prototype._close = function (e) {
                this._isOpen && (this.s.isOpen === ie && this.setState({ isOpen: !1 }), this._hook("onClose", { source: e }));
            }),
            (t.defaults = {
                buttonVariant: "flat",
                cancelText: "Cancel",
                closeOnEsc: !0,
                closeOnOverlayClick: !0,
                closeText: "Close",
                contentPadding: !0,
                display: "center",
                focusOnClose: !0,
                focusOnOpen: !0,
                focusTrap: !0,
                maxWidth: 600,
                okText: "Ok",
                scrollLock: !0,
                setActive: !0,
                setText: "Set",
                showArrow: !0,
                showOverlay: !0,
            }),
            t
        );
    })(Xa);
    function xi(e, t, n) {
        void 0 === n && (n = 0),
            n > 10
                ? (delete e.__mbscTimer, t(e))
                : (clearTimeout(e.__mbscTimer),
                  (e.__mbscTimer = setTimeout(function () {
                      e.getInputElement
                          ? e.getInputElement().then(function (a) {
                                a ? (delete e.__mbscTimer, t(a)) : xi(e, t, n + 1);
                            })
                          : xi(e, t, n + 1);
                  }, 10)));
    }
    function Di(e, t) {
        if (e)
            if (
                (function (e) {
                    return e.getInputElement || (e.tagName && "ion-input" === e.tagName.toLowerCase());
                })(e)
            )
                xi(e, t);
            else if (e.vInput) t(e.vInput.nativeElement);
            else if (e._el) t(e._el);
            else if (e.instance && e.instance._el) t(e.instance._el);
            else if (1 === e.nodeType) t(e);
            else if (_e(e)) {
                var n = rn.querySelector(e);
                n && t(n);
            }
    }
    function Ti(e, t, n, a) {
        if (!e || 1 !== e.nodeType) return xe;
        var s,
            i = function () {
                (t.s.showOnClick || t.s.showOnFocus) && _ && !t._allowTyping && (p.readOnly = !0);
            },
            r = function (n) {
                var s = t.s;
                i(),
                    a && a(n),
                    !s.showOnClick ||
                        s.disabled ||
                        (t._popup._isVisible && e === t._popup._prevFocus) ||
                        setTimeout(function () {
                            (t._focusElm = e), (t._anchor = s.anchor || e), t.open();
                        });
            },
            o = function (e) {
                t.s.showOnClick && (t.s.showOnFocus && (t._preventShow = !0), t._allowTyping || e.preventDefault());
            },
            l = function (e) {
                t.s.showOnClick && (t._isOpen ? e.keyCode === ti && t._allowTyping && e.stopPropagation() : (e.keyCode === ni && e.preventDefault(), (e.keyCode !== ti && e.keyCode !== ni) || r(e)));
            },
            c = function (e) {
                i(), t.s.showOnFocus && (t._preventShow ? (t._preventShow = !1) : r(e));
            },
            d = function () {
                _ && (p.readOnly = s);
            },
            h = function (e) {
                n && n(e);
            },
            u = function () {
                m.document.activeElement === e && (i(), (t._preventShow = !0));
            },
            m = In(e),
            _ = Fn(e, "input,select"),
            p = e;
        return (
            _ && ((p.autocomplete = "off"), (s = p.readOnly)),
            Cn(e, Os, r),
            Cn(e, Ws, o),
            Cn(e, As, l),
            Cn(e, Rs, c),
            Cn(e, Hs, d),
            Cn(e, Ys, h),
            Cn(m, Rs, u),
            function () {
                _ && (p.readOnly = s), wn(e, Os, r), wn(e, Ws, o), wn(e, As, l), wn(e, Rs, c), wn(e, Hs, d), wn(e, Ys, h), wn(m, Rs, u);
            }
        );
    }
    var Si = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._nullSupport = !0),
                (t._onInputChange = function (e, n) {
                    var a = e.detail || (n !== ie ? n : e.target.value);
                    if (a !== t._tempValueText && !t._preventChange) {
                        t._readValue(a, !0), (t._valueTextChange = a !== t._tempValueText);
                        var s = pe(a) ? null : t._get(t._tempValueRep);
                        (t.value = s), t._valueChange(s);
                    }
                    t._preventChange = !1;
                }),
                (t._onResize = function (e) {
                    t._hook("onResize", e);
                }),
                (t._onWrapperResize = function () {
                    t._wrapper && t._onResize({ windowWidth: t._wrapper.offsetWidth });
                }),
                (t._onPopupClose = function (e) {
                    /cancel|esc|overlay|scroll/.test(e.source) && t._hook("onCancel", { value: t.value, valueText: t._valueText }), t.close();
                }),
                (t._onPopupClosed = function (e) {
                    e.focus && (t._preventShow = !0), t._hook("onClosed", e), t._onClosed();
                }),
                (t._onPopupKey = function (e) {
                    13 === e.keyCode && t._onEnterKey(e);
                }),
                (t._onPopupOpen = function (e) {
                    (e.value = t.value), (e.valueText = t._valueText), t._hook("onOpen", e);
                }),
                (t._onButtonClick = function (e) {
                    var n = e.domEvent,
                        a = e.button;
                    "set" === a.name && t.set(), t._popup && t._popup._onButtonClick({ domEvent: n, button: a });
                }),
                (t._setInput = function (e) {
                    t._el = e && e.nativeElement ? e.nativeElement : e;
                }),
                (t._setPopup = function (e) {
                    t._popup = e;
                }),
                (t._setWrapper = function (e) {
                    t._wrapper = e;
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype.open = function () {
                this._inst ? this._inst.open() : this.s.isOpen === ie && this.setState({ isOpen: !0 });
            }),
            (t.prototype.close = function () {
                if ("inline" !== this.s.display)
                    if (this._inst) this._inst.close();
                    else {
                        var e = { value: this.value, valueText: this._valueText };
                        this.s.isOpen === ie && this.setState({ isOpen: !1 }), this._hook("onClose", e);
                    }
            }),
            (t.prototype.set = function () {
                (this._valueRep = this._copy(this._tempValueRep)), (this._valueText = this._tempValueText), (this._value = this.value = this._get(this._valueRep)), this._valueChange(this.value);
            }),
            (t.prototype.position = function () {
                this._inst ? this._inst.position() : this._popup && this._popup.position();
            }),
            (t.prototype.isVisible = function () {
                return this._inst ? this._inst.isVisible() : !!this._popup && this._popup.isVisible();
            }),
            (t.prototype.getVal = function () {
                return this._nullSupport && pe(this._value) ? (this.s.selectMultiple ? [] : null) : this._get(this._valueRep);
            }),
            (t.prototype.setVal = function (e) {
                (this.value = e), this.setState({ value: e });
            }),
            (t.prototype.getTempVal = function () {
                return this._get(this._tempValueRep);
            }),
            (t.prototype.setTempVal = function (e) {
                (this._tempValueSet = !0), (this._tempValueRep = this._parse(e)), this._setOrUpdate(!0);
            }),
            (t.prototype._shouldValidate = function (e, t) {
                return !1;
            }),
            (t.prototype._valueEquals = function (e, t) {
                return e === t;
            }),
            (t.prototype._change = function (e) {}),
            (t.prototype._render = function (e, t) {
                var n = this,
                    a = this.props || {},
                    s = this._respProps || {},
                    i = this._prevS;
                this._touchUi || ((e.display = s.display || a.display || C.display || "anchored"), (e.showArrow = s.showArrow || a.showArrow || !1)), "bubble" === e.display && (e.display = "anchored"), (this._scrollLock = e.scrollLock);
                var r = e.isOpen !== ie ? e.isOpen : t.isOpen,
                    o = e.modelValue !== ie ? e.modelValue : e.value,
                    l = o !== ie ? o : t.value === ie ? e.defaultValue : t.value;
                if (
                    ((this._showInput = e.showInput !== ie ? e.showInput : "inline" !== e.display && e.element === ie),
                    (!this._buttons || e.buttons !== i.buttons || e.display !== i.display || e.setText !== i.setText || e.cancelText !== i.cancelText || e.closeText !== i.closeText || e.touchUi !== i.touchUi) &&
                        ((this._buttons = gi(this, e.buttons || ("inline" === e.display || ("anchored" === e.display && !this._touchUi) ? [] : ["cancel", "set"]))), (this._live = !0), this._buttons && this._buttons.length))
                )
                    for (var c = 0, d = this._buttons; c < d.length; c++) {
                        var h = d[c];
                        ("ok" !== h.name && "set" !== h.name) || (this._live = !1);
                    }
                if (!this._valueEquals(l, this._value) || this._tempValueRep === ie || this._shouldValidate(e, i) || e.defaultSelection !== i.defaultSelection || e.invalid !== i.invalid || e.valid !== i.valid) {
                    this._readValue(l);
                    var u = this._get(this._tempValueRep),
                        m = !(this._valueEquals(l, u) || (this._nullSupport && pe(l)));
                    this._setHeader(),
                        clearTimeout(this._handler),
                        (this._handler = setTimeout(function () {
                            (n.value = l), m && n._valueChange(u), n._valueEquals(n._tempValue, u) || n._inst !== ie || n._hook("onTempChange", { value: u });
                        }));
                }
                if ((e.headerText !== i.headerText && this._setHeader(), r && !this._isOpen)) {
                    if (!this._tempValueSet || this._live) {
                        var _ = this._get(this._tempValueRep),
                            v = this._get(this._valueRep);
                        (this._tempValueRep = this._copy(this._valueRep)),
                            (this._tempValueText = this._format(this._tempValueRep)),
                            (this._tempValue = _),
                            this._setHeader(),
                            this._valueEquals(_, v) ||
                                setTimeout(function () {
                                    n._hook("onTempChange", { value: v });
                                });
                    }
                    this._onOpen();
                }
                (this._allowTyping = e.inputTyping && !p && !this._touchUi),
                    (this._anchorAlign = e.anchorAlign || (this._touchUi ? "center" : "start")),
                    (this._cssClass = "mbsc-picker " + (e.cssClass || "")),
                    (this._isOpen = r),
                    (this._maxWidth = e.maxWidth),
                    (this._valueTextChange = this._valueTextChange || this._oldValueText !== this._valueText),
                    (this._oldValueText = this._valueText),
                    (this._value = l),
                    (this._shouldInitInput = this._shouldInitInput || i.display === ie || ("inline" === e.display && "inline" !== i.display) || ("inline" !== e.display && "inline" === i.display) || e.element !== i.element);
            }),
            (t.prototype._updated = function () {
                var e = this,
                    t = this.s,
                    n = this._input;
                this._shouldInitInput &&
                    !this._inst &&
                    (this._unlisten(),
                    this._wrapper && "inline" === t.display && (this._observer = ui(this._wrapper, this._onWrapperResize, this._zone)),
                    Di(t.element || this._el, function (n) {
                        (e._el = n), "inline" !== t.display && (e._resetEl = Ti(n, e, e._onInputChange)), Fn(n, "input,select") && ((e._input = n), e._write(n));
                    })),
                    this._valueTextChange && n && this._write(n),
                    setTimeout(function () {
                        t.responsive && "inline" !== t.display && on && e.state.width === ie && e._onResize({ windowWidth: on.innerWidth });
                    }),
                    (this._shouldInitInput = !1),
                    (this._valueTextChange = !1),
                    (this._anchor = t.anchor || this._focusElm || t.element || this._el);
            }),
            (t.prototype._writeValue = function (e, t, n) {
                var a = e.value;
                return (e.value = t), a !== t;
            }),
            (t.prototype._destroy = function () {
                this._unlisten(), (this._shouldInitInput = !0);
            }),
            (t.prototype._setHeader = function () {
                var e = this.s.headerText;
                this._headerText = e ? e.replace(/\{value\}/i, this._tempValueText || "&nbsp;") : ie;
            }),
            (t.prototype._setOrUpdate = function (e) {
                var t = this._get(this._tempValueRep);
                (this._tempValue = t), (this._tempValueText = this._format(this._tempValueRep)), this._setHeader(), e || this._hook("onTempChange", { value: t }), this._live ? this.set() : this.forceUpdate();
            }),
            (t.prototype._copy = function (e) {
                return e;
            }),
            (t.prototype._format = function (e) {
                return e;
            }),
            (t.prototype._get = function (e) {
                return e;
            }),
            (t.prototype._parse = function (e, t) {
                return e;
            }),
            (t.prototype._validate = function () {}),
            (t.prototype._onClosed = function () {}),
            (t.prototype._onOpen = function () {}),
            (t.prototype._onParse = function () {}),
            (t.prototype._onEnterKey = function (e) {
                this.set(), this.close();
            }),
            (t.prototype._valueChange = function (e) {
                this.s.value === ie && this.setState({ value: e }), this._change(e), this._hook("onChange", { value: e, valueText: this._tempValueText });
            }),
            (t.prototype._readValue = function (e, t) {
                (this._tempValueRep = this._parse(e, t)),
                    this._onParse(),
                    this._validate(),
                    (this._tempValueText = this._format(this._tempValueRep)),
                    (this._valueRep = this._copy(this._tempValueRep)),
                    (this._valueText = pe(e) ? "" : this._tempValueText);
            }),
            (t.prototype._unlisten = function () {
                this._resetEl && (this._resetEl(), (this._resetEl = ie)), this._observer && (this._observer.detach(), (this._observer = ie));
            }),
            (t.prototype._write = function (e) {
                var t = this,
                    n = this._value;
                this._writeValue(e, this._valueText || "", n) &&
                    setTimeout(function () {
                        (t._preventChange = !0), zn(e, Vs), zn(e, Ys);
                    });
                var a = e.__mbscFormInst;
                a && a.setOptions({ pickerMap: this.s.valueMap, pickerValue: n });
            }),
            (t.defaults = { cancelText: "Cancel", closeText: "Close", focusOnClose: "android" !== h, okText: "Ok", setText: "Set", showOnFocus: p }),
            t
        );
    })(Xa);
    function Ci(e, t, n, a, s, i) {
        var r = Lt(t);
        if ((s && +t < s) || (i && +t > i)) return !0;
        if (a && a[r]) return !1;
        var o = n && n[r];
        if (o)
            for (var l = 0, c = o; l < c.length; l++) {
                var d = c[l],
                    h = d.start,
                    u = d.end,
                    m = d.allDay;
                if (!h || !u || m) return d;
                var _ = It(e, m, h, u),
                    p = Et(e, t),
                    v = Nt(e, _);
                if (!Rt(h, u) && (+h == +p || +_ == +v || (!Rt(t, h) && !Rt(t, u) && t > h && t < u))) return d;
            }
        return !1;
    }
    function wi(e, t, n, a, s, i, r) {
        var o,
            l,
            c = !0,
            d = !0,
            h = 0,
            u = 0;
        +e < n && (e = jt(t, n)), +e > a && (e = jt(t, a));
        var m = t.getYear(e),
            _ = t.getMonth(e),
            p = t.getDate(m, _ - 1, 1),
            v = t.getDate(m, _ + 2, 1),
            f = +p > n ? +p : n,
            g = +v < a ? +v : a;
        if ((s || ((i = cs(t.valid, p, v, t, !0)), (s = cs(t.invalid, p, v, t, !0))), !Ci(t, e, s, i, n, a))) return e;
        for (o = e, l = e; c && +o < g && h < 100; ) (c = Ci(t, (o = $t(o, 1)), s, i, n, a)), h++;
        for (; d && +l > f && u < 100; ) (d = Ci(t, (l = $t(l, -1)), s, i, n, a)), u++;
        return c && d ? e : 1 !== r || c ? (-1 !== r || d ? (zt(e, o, t) && !c ? o : zt(e, l, t) && !d ? l : d || (u >= h && !c) ? o : l) : l) : o;
    }
    var ki = {},
        Mi = " - ",
        Ei = ["calendar"],
        Ni = [{ recurring: { repeat: "daily" } }];
    function Ii(e) {
        return "start" === e ? "end" : "start";
    }
    function Li(e, t) {
        var n = Ft(new Date(e), t, t.firstSelectDay !== ie ? t.firstSelectDay : t.firstDay),
            a = new Date(n.getFullYear(), n.getMonth(), n.getDate() + t.selectSize - 1);
        return { start: n, end: a };
    }
    var Hi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._iso = {}),
                    (t._remote = 0),
                    (t._onActiveChange = function (e) {
                        (t._active = e.date), t.forceUpdate();
                    }),
                    (t._onResize = function (e) {
                        var n = e.windowWidth;
                        (e.cancel = t.state.width !== n), t.setState({ isLarge: e.isLarge, maxPopupWidth: e.maxPopupWidth, width: n, widthType: n > 600 ? "md" : "sm" });
                    }),
                    (t._onDayHoverIn = function (e) {
                        var n = e.date,
                            a = e.hidden;
                        t.setState({ hoverDate: a ? ie : +n });
                    }),
                    (t._onDayHoverOut = function (e) {
                        var n = e.date;
                        t.state.hoverDate === +n && t.setState({ hoverDate: ie });
                    }),
                    (t._onCellClick = function (e) {
                        (t._lastSelected = Ut(t.s, e.date)), (e.active = t._activeSelect), t._hook("onCellClick", e);
                    }),
                    (t._onCalendarChange = function (e) {
                        t._tempValueSet = !1;
                        var n = t.s,
                            a = t._copy(t._tempValueRep),
                            s = He(e.value, function (e) {
                                return Ut(n, e);
                            }),
                            i = "preset-range" === n.select,
                            r = "range" === n.select,
                            o = r && t._newSelection,
                            l = (r || i) && n.exclusiveEndDates && !t._hasTime;
                        if ((l && a.end && (a.end = +Et(n, jt(n, a.end - 1))), t._hasTime && t._selectedTime && !r))
                            if (t.s.selectMultiple) {
                                var c = s[s.length - 1];
                                c && c.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                            } else s.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                        if (r || i) {
                            var d = t._getDate(a),
                                h = d.filter(function (e) {
                                    return null !== e;
                                }),
                                u = h.map(function (e) {
                                    return +e;
                                }),
                                m = h.map(function (e) {
                                    return +Ht(e);
                                }),
                                _ = s.filter(function (e) {
                                    return m.indexOf(+e) < 0;
                                })[0];
                            if (i) {
                                if (_) {
                                    var p = Li(+_, n),
                                        v = p.start,
                                        f = p.end;
                                    (a.start = +v), (a.end = +f);
                                }
                            } else {
                                var g = !t._hasTime,
                                    y = t._renderControls,
                                    b = t._activeSelect,
                                    x = Ii(b);
                                if (_) {
                                    switch ((t._hasTime && t._selectedTime && _.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), u.length)) {
                                        case 0:
                                            (a = {})[b] = +_;
                                            break;
                                        case 1:
                                            if (y) {
                                                a[b] = +_;
                                                break;
                                            }
                                            u[0] > +_ || "start" === t._activeSelect ? (t._hasTime ? (a[b] = +_) : ((a = { start: +_ }), (g = !1))) : (a.end = +_);
                                            break;
                                        case 2:
                                            if (y) {
                                                a[b] = +_;
                                                break;
                                            }
                                            u[0] > +_ || "start" === t._activeSelect ? (t._hasTime ? (a[b] = +_) : ((a = { start: +_ }), "end" === t._activeSelect && (g = !1))) : "end" === t._activeSelect && (a.end = +_);
                                    }
                                    y && a.start && a.end && a.start > a.end && ((a = { start: +_ }), t._setActiveSelect("end"));
                                } else {
                                    var D = void 0;
                                    (D = 1 === u.length ? jt(n, u[0]) : t._lastSelected),
                                        t._hasTime && t._selectedTime
                                            ? D.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds())
                                            : !n.exclusiveEndDates && !t._hasTime && "end" === t._activeSelect && d[0] && Rt(D, d[0]) && D.setHours(23, 59, 59, 999),
                                        y || t._hasTime ? (a[b] = +D) : "start" === t._activeSelect ? (a = { start: +D }) : (a.end = +D);
                                }
                                if (a.start && a.end) {
                                    if (a.start > a.end) {
                                        var T = jt(n, a.start),
                                            S = jt(n, a.end);
                                        Rt(T, S) ? (S.setHours(T.getHours(), T.getMinutes(), T.getSeconds(), T.getMilliseconds()), (a.end = +S)) : (a.end = ie);
                                    }
                                    if (n.minRange && a.end) {
                                        var C = t._hasTime ? a.start + n.minRange : +$t(jt(n, a.start), n.minRange - 1);
                                        a.end < C && (!t._hasTime || "start" === b) && (a.end = ie);
                                    }
                                    if (n.maxRange && a.end) {
                                        C = t._hasTime ? a.start + n.maxRange : +$t(jt(n, a.start), n.maxRange) - 1;
                                        a.end > C && (!t._hasTime || "start" === b) && (a.end = ie);
                                    }
                                    if (a.end && "start" === b && !n.inRangeInvalid) {
                                        var w = n.valid ? $t(rs(n.valid, jt(n, a.start), n), 1) : is(n.invalid || [], jt(n, a.start), n);
                                        null !== w && +w < a.end && (a.end = ie);
                                    }
                                }
                                g && (t._newSelection || !t._renderControls || (t._newSelection === ie && "inline" === t.s.display)) && (t._setActiveSelect(x), (t._newSelection = !1));
                            }
                        } else if (((a = { date: {} }), t.s.selectMultiple))
                            for (var k = 0, M = s; k < M.length; k++) {
                                var E = M[k];
                                a.date[+E] = E;
                            }
                        else {
                            if (t._hasTime) {
                                var N = t._selectedTime || new Date();
                                s.setHours(N.getHours(), N.getMinutes(), N.getSeconds(), N.getMilliseconds());
                            }
                            a.date[+s] = s;
                        }
                        (t._tempValueRep = a), l && a.end && (a.end = +Et(n, $t(jt(n, a.end), 1))), t._setOrUpdate(), !t._live || (t.s.selectMultiple && !r) || t._hasTime || (r && (!a.start || !a.end || o)) || t.close();
                    }),
                    (t._onDatetimeChange = function (e) {
                        var n = t.s,
                            a = "range" === n.select,
                            s = Ut(n, e.value),
                            i = t._hasTime ? s : Ht(s),
                            r = +i;
                        t._tempValueSet = !1;
                        var o = t._copy(t._tempValueRep),
                            l = a && n.exclusiveEndDates && !t._hasTime;
                        if ((l && o.end && (o.end = +Et(n, jt(n, o.end - 1))), a))
                            if ("start" === t._activeSelect) {
                                if ((t._hasTime && t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), (o.start = r), o.end)) {
                                    var c = n.minRange && !t._hasTime ? 24 * (n.minRange - 1) * 60 * 60 * 1e3 - 1 : n.minRange || 0;
                                    o.end - o.start < c && (o.end = ie);
                                }
                            } else
                                t._hasTime
                                    ? t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds())
                                    : o.start !== +Ht(i) || n.exclusiveEndDates || i.setHours(23, 59, 59, 999),
                                    (o.end = +i);
                        else {
                            if (t._hasTime && t._hasDate && n.controls.indexOf("datetime") < 0) {
                                var d = t._selectedTime || new Date();
                                i.setHours(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                            } else t._selectedTime = jt(n, i);
                            (o = { date: {} }).date[+i] = i;
                        }
                        (t._tempValueRep = o), l && o.end && (o.end = +Et(n, $t(jt(n, o.end), 1))), t._setOrUpdate();
                    }),
                    (t._onTimePartChange = function (e) {
                        t._tempValueSet = !1;
                        var n = t.s,
                            a = "range" === n.select,
                            s = Ut(n, e.value);
                        if (((t._selectedTime = s), a)) {
                            var i = t._getDate(t._tempValueRep),
                                r = "start" === t._activeSelect ? 0 : 1;
                            if (i[r]) (o = jt(n, i[r])).setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), (i[r] = o), "start" === t._activeSelect && +o > +i[1] && (i.length = 1), (t._tempValueRep = t._parse(i));
                            else t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds());
                        } else if (!n.selectMultiple) {
                            var o;
                            (o = t._getDate(t._tempValueRep))
                                ? (o.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), (t._tempValueRep = { date: {} }), (t._tempValueRep.date[+o] = o))
                                : (t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), t._live && t.forceUpdate());
                        }
                        t._setOrUpdate();
                    }),
                    (t._changeActiveTab = function (e) {
                        t.setState({ activeTab: e.target.value });
                    }),
                    (t._changeActiveSelect = function (e) {
                        var n = e.target.value;
                        t._setActiveSelect(n), t.setActiveDate(n);
                    }),
                    (t._clearEnd = function () {
                        (t._tempValueRep.end = ie), t._hasTimegrid && (t._selectedTime = ie), t._setOrUpdate();
                    }),
                    (t._clearStart = function () {
                        (t._tempValueRep = {}), (t._newSelection = !0), t._hasTimegrid && (t._selectedTime = ie), t._setOrUpdate();
                    }),
                    (t._onInputClickRange = function (e) {
                        var n = e.target === t._startInput || t._renderControls ? "start" : "end";
                        t._setActiveSelect(n);
                    }),
                    (t._onInputChangeRange = function (e) {
                        var n = t._startInput,
                            a = t._endInput,
                            s = (n ? n.value : "") + (a && a.value ? Mi + a.value : "");
                        t._onInputChange(e, s);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype.setActiveDate = function (e) {
                    var t = Ii(e);
                    this._activeSelect = e;
                    var n = this._tempValueRep[e],
                        a = this._tempValueRep[t];
                    (this._tempValueRep.start && this._tempValueRep.end) || (!n && a) ? (this._newSelection = !1) : n && !a && (this._newSelection = !0),
                        n && (this._active = n),
                        !n && this._hasTimegrid && (this._selectedTime = ie),
                        this.forceUpdate();
                }),
                (t.prototype.getTempVal = function () {
                    return e.prototype.getTempVal.call(this);
                }),
                (t.prototype.setTempVal = function (t) {
                    e.prototype.setTempVal.call(this, t);
                }),
                (t.prototype.navigate = function (e) {
                    (this._active = +Kt(e)), this.forceUpdate();
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return (
                        e.controls !== t.controls ||
                        e.dataTimezone !== t.dataTimezone ||
                        e.displayTimezone !== t.displayTimezone ||
                        e.dateFormat !== t.dateFormat ||
                        e.timeFormat !== t.timeFormat ||
                        e.locale !== t.locale ||
                        e.min !== t.min ||
                        e.max !== t.max
                    );
                }),
                (t.prototype._valueEquals = function (e, t) {
                    var n = (he(e) && 0 === e.length) || e === ie || null === e,
                        a = (he(t) && 0 === t.length) || t === ie || null === t;
                    return (n && n === a) || Zt(e, t, this.s);
                }),
                (t.prototype.setVal = function (t) {
                    if ("range" === this.s.select && t) {
                        var n = t[0],
                            a = t[1];
                        (this._savedStartValue = +Kt(n, this.s, this._valueFormat)), (this._savedEndValue = +Kt(a, this.s, this._valueFormat));
                    }
                    e.prototype.setVal.call(this, t);
                }),
                (t.prototype._render = function (t, n) {
                    var a = this;
                    t.inRangeInvalid && (t.rangeEndInvalid = !1), "preset-range" === t.select && (t.controls = Ei), t.exclusiveEndDates === ie && (t.exclusiveEndDates = !!t.displayTimezone);
                    var s = this._hasTime,
                        i = (this._hasDate = !!Ne(t.controls, function (e) {
                            return /date|calendar/.test(e);
                        })),
                        r = (this._hasTime = !!Ne(t.controls, function (e) {
                            return /time/.test(e);
                        }));
                    r || (t.timezonePlugin = t.dataTimezone = t.displayTimezone = ie), !t.valid || (t.invalid && !r) || (t.invalid = Ni);
                    var o = this._prevS;
                    t.buttons;
                    var l = t.calendarSize;
                    t.children, t.className;
                    var h = t.controls;
                    t.cssClass, t.element, t.modelValue, t.onDestroy, t.onInit, t.onTempChange, t.responsive;
                    var u = t.select,
                        m = t.selectMultiple,
                        _ = t.tabs,
                        p = d(t, ["buttons", "calendarSize", "children", "className", "controls", "cssClass", "element", "modelValue", "onDestroy", "onInit", "onTempChange", "responsive", "select", "selectMultiple", "tabs"]),
                        v = n.widthType || "sm",
                        f = "date" !== u;
                    if (((this._renderTabs = h.length > 1 && ("auto" === _ ? "sm" === v : _)), u !== o.select && this._tempValueRep))
                        if (f && this._tempValueRep.date) {
                            var g = Object.keys(this._tempValueRep.date)
                                    .map(function (e) {
                                        return +e;
                                    })
                                    .sort(),
                                y = g[0],
                                b = g[1];
                            (this._tempValueRep.start = y),
                                (this._tempValueRep.end = b),
                                (this._tempValueRep.date = ie),
                                (this._tempValueText = this._format(this._tempValueRep)),
                                setTimeout(function () {
                                    a.set();
                                });
                        } else if (!f && (this._tempValueRep.start || this._tempValueRep.end)) {
                            this._tempValueRep.date || (this._tempValueRep.date = {});
                            var x = this._tempValueRep.start || this._tempValueRep.end;
                            this._tempValueRep.date[x] = new Date(x);
                            var D = this._tempValueRep.end || this._tempValueRep.start;
                            D !== x && t.selectMultiple && (this._tempValueRep.date[D] = new Date(D)),
                                (this._tempValueRep.start = ie),
                                (this._tempValueRep.end = ie),
                                (this._tempValueText = this._format(this._tempValueRep)),
                                setTimeout(function () {
                                    a.set();
                                });
                        }
                    t.min !== o.min && (this._min = pe(t.min) ? ie : Kt(t.min, t, t.dateFormat)),
                        t.max !== o.max && (this._max = pe(t.max) ? ie : Kt(t.max, t, t.dateFormat)),
                        t.minTime !== o.minTime && (this._minTime = pe(t.minTime) ? ie : Kt(t.minTime, t, t.timeFormat)),
                        t.maxTime !== o.maxTime && (this._maxTime = pe(t.maxTime) ? ie : Kt(t.maxTime, t, t.timeFormat));
                    var T = this._tempValueRep && this._tempValueRep.end,
                        S = this._tempValueRep && this._tempValueRep.start,
                        C = (i ? t.dateFormat : "") + (r ? (i ? t.separator : "") + t.timeFormat : ""),
                        w = JSON.stringify(h) !== JSON.stringify(o.controls);
                    if (w) {
                        (this._controls = []), (this._controlsClass = "");
                        var k = { c: "datepicker", controls: h, dateFormat: t.dateFormat, dateText: t.dateText, separator: t.separator, timeFormat: t.timeFormat, timeText: t.timeText, v: Ba };
                        this._remote++,
                            Ra(this),
                            Va(
                                "remote",
                                this,
                                k,
                                function (e) {
                                    if ((a._remote--, !a._remote)) {
                                        for (var n = 0, i = Object.keys(e); n < i.length; n++) {
                                            var o = i[n];
                                            a[o] = e[o];
                                        }
                                        for (var l = 0, d = a._controls; l < d.length; l++) {
                                            var h = d[l];
                                            (h.Component = ki["calendar" === h.name ? "Calendar" : "timegrid" === h.name ? "Timegrid" : "Datetime"]), (a._controlsClass += " mbsc-datepicker-control-" + h.name);
                                        }
                                        if ((za(e.notification), r || (a._selectedTime = ie), w && f && t.exclusiveEndDates && r !== s && (T || S))) {
                                            var u = a._savedStartValue,
                                                m = a._savedEndValue;
                                            setTimeout(function () {
                                                if (r) (a._tempValueRep.start = u || S), (a._tempValueRep.end = m || T);
                                                else {
                                                    (a._savedStartValue = S), (a._savedEndValue = T), (a._clearSaved = !1);
                                                    var e = c({}, t, { dataTimezone: a.props.dataTimezone, displayTimezone: a.props.displayTimezone, timezonePlugin: a.props.timezonePlugin });
                                                    if ((S && (a._tempValueRep.start = +Bt(Et(e, jt(e, S)))), T)) {
                                                        var n = jt(e, T - 1);
                                                        a._tempValueRep.end = +Bt(jt(e, +Nt(e, n) + 1));
                                                    }
                                                }
                                                (a._valueText = a._tempValueText = a._format(a._tempValueRep)), (a._valueTextChange = !0), a.set();
                                            }),
                                                (a._valueTextChange = !1);
                                        }
                                        a.forceUpdate();
                                    }
                                },
                                "comp_" + this._uid
                            ),
                            (this._hasCalendar = -1 !== h.indexOf("calendar"));
                    }
                    (this._renderControls = f && "preset-range" !== u && (t.showRangeLabels === ie || t.showRangeLabels)),
                        (this._nullSupport = "inline" !== t.display || "date" !== u || !0 === t.selectMultiple),
                        (this._valueFormat = C),
                        (this._activeTab = n.activeTab || h[0]),
                        e.prototype._render.call(this, t, n);
                    var M,
                        E = t.value !== ie ? t.value !== o.value : n.value !== this._prevStateValue;
                    if (
                        (f && this._clearSaved && E && (this._savedEndValue = this._savedStartValue = ie),
                        (this._clearSaved = !0),
                        (t.headerText === o.headerText && t.selectCounter === o.selectCounter && t.selectMultiple === o.selectMultiple) || this._setHeader(),
                        (this._scrollLock = t.scrollLock !== ie ? t.scrollLock : !this._hasTimegrid),
                        (this._showInput = t.showInput !== ie ? t.showInput : this._showInput && (!f || (!t.startInput && !t.endInput))),
                        (this._shouldInitInputs = this._shouldInitInputs || u !== o.select || t.startInput !== o.startInput || t.endInput !== o.endInput),
                        (this._shouldInitInput = this._shouldInitInput || this._shouldInitInputs),
                        w || t.dateWheels !== o.dateWheels || t.timeWheels !== o.timeWheels || t.dateFormat !== o.dateFormat || t.timeFormat !== o.timeFormat)
                    ) {
                        var N = t.dateWheels || t.dateFormat,
                            I = t.timeWheels || t.timeFormat,
                            L = (this._iso = {});
                        i && (/y/i.test(N) && (L.y = 1), /M/.test(N) && ((L.y = 1), (L.m = 1)), /d/i.test(N) && ((L.y = 1), (L.m = 1), (L.d = 1))), r && (/h/i.test(I) && (L.h = 1), /m/.test(I) && (L.i = 1), /s/i.test(I) && (L.s = 1));
                    }
                    if ((f ? (this._activeSelect === ie && this._setActiveSelect("start", !0), (M = this._selectionNotReady())) : ((this._activeSelect = ie), (M = !1)), this._buttons)) {
                        var H = Ne(this._buttons, function (e) {
                            return "set" === e.name;
                        });
                        H && H.disabled !== M && ((H.disabled = M), (this._buttons = this._buttons.slice()));
                    }
                    var Y = this._activeSelect;
                    this._needsWidth = ("anchored" === t.display || "center" === t.display || ("inline" !== t.display && n.isLarge) || (h.length > 1 && !_)) && t.width === ie;
                    var O = t.max !== ie ? Kt(t.max, t, C) : ie,
                        P = t.min !== ie ? Kt(t.min, t, C) : ie;
                    (this._maxLimited = O), (this._minLimited = P);
                    var F = this._tempValueRep.start;
                    if (F && (this._prevStart !== F || o.valid !== t.valid || o.invalid !== t.invalid)) {
                        var R = jt(t, F);
                        this._nextInvalid = t.valid ? $t(rs(t.valid, R, t), 1) : is(t.invalid || [], R, t);
                    }
                    var z = "end" === Y && F;
                    if (z) {
                        if (!t.inRangeInvalid) {
                            var V = this._nextInvalid;
                            V && (t.rangeEndInvalid ? (this._maxLimited = jt(t, +$t(V, 1) - 1)) : (this._maxLimited = jt(t, +V - 1)));
                        }
                        (this._hasCalendar && !r) || ((!this._minLimited || Kt(this._minLimited, t, C) < jt(t, F)) && (this._minLimited = jt(t, this._tempValueRep.start)));
                    }
                    if (((this._minTimeLimited = this._minLimited), z)) {
                        if (t.minRange) {
                            var A = r ? this._tempValueRep.start + t.minRange : +$t(jt(t, this._tempValueRep.start), t.minRange) - 1;
                            (!this._minLimited || +Kt(this._minLimited, t, C) < A) && ((this._minLimited = jt(t, A)), (this._minTimeLimited = this._minLimited));
                        }
                        if ((this._minTimeLimited === ie && this._tempValueRep.start && this._tempValueRep.end && (this._minTimeLimited = jt(t, +this._tempValueRep.start)), t.maxRange !== ie)) {
                            var W = r ? this._tempValueRep.start + t.maxRange : +$t(jt(t, this._tempValueRep.start), t.maxRange) - 1;
                            (!this._maxLimited || +Kt(this._maxLimited, t, C) > W) && (this._maxLimited = jt(t, W));
                        }
                    }
                    for (var U = 0, B = this._controls; U < B.length; U++) {
                        var j = B[U],
                            K = c({}, p, { display: "inline", isOpen: t.isOpen || n.isOpen, max: this._maxLimited, min: this._minLimited });
                        if ((t.rangeEndInvalid && z && this._nextInvalid && (K.valid = (K.valid || []).concat([this._nextInvalid])), "calendar" === j.name)) {
                            (K.min = this._minLimited ? Ht(this._minLimited) : ie),
                                (K.max = this._maxLimited ? Ht(this._maxLimited) : ie),
                                (K.selectRange = f),
                                (K.width = this._needsWidth ? ps * Ts(t.pages, n.maxPopupWidth) : ie),
                                "week" === t.calendarType && l ? (K.weeks = l) : (K.size = l);
                            var X = "auto" === t.pages ? 3 : t.pages || 1;
                            if (((this._maxWidth = t.maxWidth || (X > 2 ? ps * X : ie)), f)) {
                                var J = this._getDate(this._tempValueRep),
                                    q = J[1];
                                q && t.exclusiveEndDates && !r && (J[1] = jt(t, +q - 1));
                                var G = J.filter(function (e) {
                                    return null !== e;
                                })
                                    .map(function (e) {
                                        return +Ht(e);
                                    })
                                    .filter(function (e, t, n) {
                                        return n.indexOf(e) === t;
                                    })
                                    .map(function (e) {
                                        return new Date(e);
                                    });
                                if (((K.value = G), t.rangeHighlight))
                                    if (((K.rangeStart = J[0] && +Ht(Bt(J[0]))), (K.rangeEnd = J[1] && +Ht(Bt(J[1]))), (K.onDayHoverIn = this._onDayHoverIn), (K.onDayHoverOut = this._onDayHoverOut), "preset-range" === u)) {
                                        if (n.hoverDate) {
                                            var Z = Li(n.hoverDate, t);
                                            (y = Z.start), (b = Z.end);
                                            (K.hoverStart = +y), (K.hoverEnd = +b);
                                        }
                                    } else
                                        "end" === Y && J[0] && ((K.hoverStart = K.rangeEnd || K.rangeStart), (K.hoverEnd = n.hoverDate)),
                                            "start" === Y && J[1] && this._renderControls && ((K.hoverStart = n.hoverDate), (K.hoverEnd = K.rangeStart || K.rangeEnd));
                            } else (K.selectMultiple = m), (K.value = this._getDate(this._tempValueRep));
                            for (var Q = he(K.value) ? K.value : [K.value], $ = K.min ? +K.min : -1 / 0, ee = K.max ? +K.max : 1 / 0, te = void 0, ne = 0, ae = Q; ne < ae.length; ne++) {
                                var se = ae[ne];
                                !te && se >= $ && se <= ee && (te = +se);
                            }
                            !te && f && Q.length && (te = +Q[0]),
                                (te === this._selectedDate && this._active !== ie && t.min === o.min && t.max === o.max) || ((this._selectedDate = te), (this._active = te ? +Ht(new Date(te)) : ce(this._active || +Ht(new Date()), $, ee)));
                            var re = t.dateWheels || t.dateFormat,
                                oe = /d/i.test(re) ? _s : /m/i.test(re) ? us : /y/i.test(re) ? hs : _s;
                            (K.active = this._active),
                                (K.onActiveChange = this._onActiveChange),
                                (K.onChange = this._onCalendarChange),
                                (K.onCellClick = this._onCellClick),
                                (K.onCellHoverIn = this._proxyHook),
                                (K.onCellHoverOut = this._proxyHook),
                                (K.onLabelClick = this._proxyHook),
                                (K.onPageChange = this._proxyHook),
                                (K.onPageLoaded = this._proxyHook),
                                (K.onPageLoading = this._proxyHook),
                                (K.selectView = oe);
                        } else {
                            var le = Object.keys(this._tempValueRep.date || {});
                            if (((K.displayStyle = ("bottom" !== t.display && "top" !== t.display) || (!this._hasCalendar && !this._renderTabs) ? t.display : "center"), (K.mode = j.name), ("time" !== j.name && "timegrid" !== j.name) || !i))
                                if (((K.onChange = this._onDatetimeChange), f)) {
                                    var de = this._tempValueRep[Y],
                                        ue = this._tempValueRep[Ii(Y)];
                                    (K.value = de ? jt(t, de) : ue ? jt(t, ue) : null), "end" === Y && t.exclusiveEndDates && !r && (K.value = jt(t, +K.value - 1));
                                } else {
                                    var me = this._tempValueRep.date && this._tempValueRep.date[le[0]],
                                        _e = me;
                                    me && (r || (_e = Ht(me))), (K.value = _e || null);
                                }
                            else {
                                if (((K.onChange = this._onTimePartChange), f)) {
                                    var ve = this._tempValueRep[Y],
                                        fe = void 0;
                                    this._selectedTime &&
                                        (!this._minTimeLimited || this._selectedTime > this._minTimeLimited
                                            ? (fe = this._selectedTime)
                                            : (fe = jt(t, this._minTimeLimited)).setHours(this._selectedTime.getHours(), this._selectedTime.getMinutes(), this._selectedTime.getSeconds(), this._selectedTime.getMilliseconds()));
                                    var ge = jt(t);
                                    ge.setSeconds(0, 0), (this._selectedTime = ve ? jt(t, ve) : fe || ("time" === j.name ? ge : ie)), (K.value = this._selectedTime);
                                } else if (!t.selectMultiple) {
                                    var ye = (this._tempValueRep.date && this._tempValueRep.date[le[0]]) || this._selectedTime;
                                    this._selectedTime = K.value = ye;
                                }
                                (K.min = this._minTimeLimited), (K.max = this._maxLimited);
                            }
                            if ("time" === j.name || "timegrid" === j.name) {
                                var be = K.value || an(new Date(), K.min, K.max);
                                if (this._minTime) {
                                    var xe = this._minTime;
                                    $ = new Date(be.getFullYear(), be.getMonth(), be.getDate(), xe.getHours(), xe.getMinutes(), xe.getSeconds(), xe.getMilliseconds());
                                    (!K.min || $ > K.min) && (K.min = $);
                                }
                                if (this._maxTime) {
                                    var De = this._maxTime;
                                    ee = new Date(be.getFullYear(), be.getMonth(), be.getDate(), De.getHours(), De.getMinutes(), De.getSeconds(), De.getMilliseconds());
                                    (!K.max || ee < K.max) && (K.max = ee);
                                }
                            }
                        }
                        j.options = K;
                    }
                    (this._prevStart = this._tempValueRep.start), (this._prevStateValue = n.value);
                }),
                (t.prototype._updated = function () {
                    var t = this,
                        n = this.s;
                    if (this._shouldInitInputs) {
                        if ((this._resetInputs(), "range" === n.select)) {
                            var a = n.startInput;
                            a && this._setupInput("start", a);
                            var s = n.endInput;
                            s && this._setupInput("end", s), !n.element || (this._startInput !== n.element && this._endInput !== n.element) || ((this._shouldInitInput = !1), clearTimeout(n.element.__mbscTimer));
                        }
                        this._shouldInitInputs = !1;
                    }
                    var i = this._valueTextChange;
                    if ((e.prototype._updated.call(this), "range" === n.select && i)) {
                        var r = function (e, n) {
                            (e.value = n),
                                setTimeout(function () {
                                    (t._preventChange = !0), zn(e, Vs), zn(e, Ys);
                                });
                        };
                        this._startInput && r(this._startInput, this._getValueText("start")), this._endInput && r(this._endInput, this._getValueText("end"));
                    }
                }),
                (t.prototype._onEnterKey = function (t) {
                    this._selectionNotReady() || e.prototype._onEnterKey.call(this, t);
                }),
                (t.prototype._setupInput = function (e, t) {
                    var n = this;
                    Di(t, function (t) {
                        var a = Ti(t, n, n._onInputChangeRange, n._onInputClickRange);
                        "start" === e ? ((n._startInput = t), (n._resetStartInput = a)) : ((n._endInput = t), (n._resetEndInput = a));
                        var s = n._getValueText(e),
                            i = s !== t.value;
                        (t.value = s),
                            i &&
                                setTimeout(function () {
                                    (n._preventChange = !0), zn(t, Vs), zn(t, Ys);
                                });
                    });
                }),
                (t.prototype._destroy = function () {
                    this._resetInputs(), e.prototype._destroy.call(this);
                }),
                (t.prototype._setHeader = function () {
                    var t = this.s;
                    if (t.selectCounter && t.selectMultiple) {
                        var n = Object.keys((this._tempValueRep && this._tempValueRep.date) || {}).length;
                        this._headerText = ((n > 1 && t.selectedPluralText) || t.selectedText).replace(/{count}/, "" + n);
                    } else e.prototype._setHeader.call(this);
                }),
                (t.prototype._validate = function () {
                    if (!(this._max <= this._min)) {
                        var e = this.s,
                            t = this._min ? +this._min : -1 / 0,
                            n = this._max ? +this._max : 1 / 0;
                        if ("date" === e.select) {
                            var a = this._tempValueRep.date;
                            if (!e.selectMultiple)
                                for (var s = 0, i = Object.keys(a); s < i.length; s++) {
                                    var r = i[s],
                                        o = a[r],
                                        l = wi(o, e, t, n);
                                    +l != +o && (delete a[r], (a[+Ht(l)] = l));
                                }
                        } else {
                            var c = this._getDate(this._tempValueRep),
                                d = c[0],
                                h = c[1];
                            d && ((d = wi(d, e, t, n)), e.inRangeInvalid || (this._prevStart && this._prevStart === +d) || (this._nextInvalid = e.valid ? $t(rs(e.valid, d, e), 1) : is(e.invalid || [], d, e))),
                                h && (h = !e.inRangeInvalid && this._nextInvalid && this._nextInvalid <= h ? (e.rangeEndInvalid ? this._nextInvalid : $t(this._nextInvalid, -1)) : wi(h, e, t, n)),
                                d && h && d > h && ("end" === this._activeSelect ? (d = h) : (h = d)),
                                d && (this._prevStart = this._tempValueRep.start = +d),
                                h && (this._tempValueRep.end = +h);
                        }
                    }
                }),
                (t.prototype._copy = function (e) {
                    var t = e.date ? c({}, e.date) : e.date;
                    return c({}, e, { date: t });
                }),
                (t.prototype._format = function (e) {
                    var t = this.s,
                        n = [];
                    if (!t) return "";
                    if ("date" === t.select) {
                        var a = e.date;
                        for (var s in a) a[s] !== ie && null !== a[s] && n.push(qt(this._valueFormat, a[s], t));
                        return t.selectMultiple ? n.join(", ") : n[0];
                    }
                    if ((e.start && n.push(qt(this._valueFormat, jt(t, e.start), t)), e.end)) {
                        n.length || n.push("");
                        var i = jt(t, e.end - (t.exclusiveEndDates && !this._hasTime ? 1 : 0));
                        n.push(qt(this._valueFormat, i, t));
                    }
                    return (this._tempStartText = n[0] || ""), (this._tempEndText = n[1] || ""), n.join(Mi);
                }),
                (t.prototype._parse = function (e, t) {
                    var n = this.s,
                        a = {},
                        s = "date" !== n.select,
                        i = n.selectMultiple,
                        r = [];
                    if (pe(e)) {
                        var o = n.defaultSelection;
                        e = i || s ? o : null === o || (this._live && "inline" !== n.display) ? null : o || new Date();
                    }
                    if ((_e(e) && (s || i) ? (r = e.split(s ? Mi : ",")) : he(e) ? (r = e) : e && !he(e) && (r = [e]), s)) {
                        var l = r[0],
                            c = r[1],
                            d = Kt(l, n, this._valueFormat, this._iso),
                            h = Kt(c, n, this._valueFormat, this._iso);
                        (a.start = d ? +d : ie), (a.end = h ? +h : ie);
                    } else {
                        a.date = {};
                        for (var u = 0, m = r; u < m.length; u++) {
                            var _ = m[u];
                            if (!pe(_)) {
                                var p = Kt(_, n, this._valueFormat, this._iso, t);
                                if (p) {
                                    t && (p = Ut(n, p));
                                    var v = +Ht(p);
                                    (a.date[v] = p), this._hasTime && (this._selectedTime = new Date(p));
                                }
                            }
                        }
                    }
                    return a;
                }),
                (t.prototype._getDate = function (e) {
                    var t = this.s;
                    if ("date" !== t.select) {
                        var n = e.start ? jt(t, e.start) : null,
                            a = e.end ? jt(t, e.end) : null;
                        return n || a ? [n, a] : [];
                    }
                    if (t.selectMultiple) {
                        var s = [],
                            i = e.date;
                        if (i)
                            for (var r = 0, o = Object.keys(i); r < o.length; r++) {
                                var l = o[r];
                                s.push(jt(t, +l));
                            }
                        return s;
                    }
                    var c = Object.keys(e.date || {});
                    return c.length ? jt(t, e.date[c[0]]) : null;
                }),
                (t.prototype._get = function (e) {
                    var t = this,
                        n = this.s,
                        a = this._valueFormat,
                        s = this._iso,
                        i = this._getDate(e);
                    return he(i)
                        ? i.map(function (e) {
                              return e ? Xt(e, n, a, s, t._hasTime) : null;
                          })
                        : null === i
                        ? null
                        : Xt(i, n, a, s, this._hasTime);
                }),
                (t.prototype._onClosed = function () {
                    (this._active = this._activeSelect = ie), this._hasTimegrid && (this._selectedTime = ie);
                }),
                (t.prototype._onOpen = function () {
                    this._newSelection = !0;
                }),
                (t.prototype._resetInputs = function () {
                    this._resetStartInput && (this._resetStartInput(), (this._resetStartInput = ie)), this._resetEndInput && (this._resetEndInput(), (this._resetEndInput = ie));
                }),
                (t.prototype._getValueText = function (e) {
                    return this._valueText.split(Mi)["start" === e ? 0 : 1] || "";
                }),
                (t.prototype._selectionNotReady = function () {
                    var e = !1;
                    if ("range" === this.s.select) {
                        var t = (this._get(this._tempValueRep || {}) || []).filter(function (e) {
                            return e;
                        });
                        (e = !t.length) || (e = (this._hasCalendar && !this._hasTime) || this._renderControls ? t.length < 2 : !this._tempValueRep[this._activeSelect]);
                    }
                    return e;
                }),
                (t.prototype._setActiveSelect = function (e, t) {
                    var n = this;
                    this._activeSelect !== e &&
                        (t
                            ? setTimeout(function () {
                                  return n._hook("onActiveDateChange", { active: e });
                              })
                            : this._hook("onActiveDateChange", { active: e })),
                        (this._activeSelect = e);
                }),
                (t.defaults = c({}, Tt, Si.defaults, {
                    activeElm: '.mbsc-calendar-cell[tabindex="0"]',
                    controls: Ei,
                    dateText: "Date",
                    inRangeInvalid: !1,
                    inputTyping: !0,
                    rangeEndHelp: "Please select",
                    rangeEndLabel: "End",
                    rangeHighlight: !0,
                    rangeStartHelp: "Please select",
                    rangeStartLabel: "Start",
                    select: "date",
                    selectSize: 7,
                    selectedText: "{count} selected",
                    showOnClick: !0,
                    timeText: "Time",
                })),
                (t._name = "Datepicker"),
                t
            );
        })(Si),
        Yi = (function () {
            function e() {
                (this.pageSize = 0), (this._prevS = {}), (this._s = {});
            }
            return (
                (e.prototype.options = function (e, t) {
                    var n = (this._s = c({}, this._s, e)),
                        a = this._prevS,
                        s = n.getDate,
                        i = n.getYear,
                        r = n.getMonth,
                        o = n.showCalendar,
                        l = n.calendarType,
                        d = n.startDay,
                        h = n.endDay,
                        u = n.firstDay,
                        m = "week" === l,
                        _ = o ? (m ? n.weeks : 6) : 0,
                        p = n.min === a.min && this.minDate ? this.minDate : pe(n.min) ? -1 / 0 : Kt(n.min),
                        v = n.max === a.max && this.maxDate ? this.maxDate : pe(n.max) ? 1 / 0 : Kt(n.max),
                        f = n.activeDate || +new Date(),
                        g = ce(f, +p, +v),
                        y = this.forcePageChange || g !== f,
                        b = new Date(g),
                        x = g !== a.activeDate,
                        D =
                            n.calendarType !== a.calendarType ||
                            n.eventRange !== a.eventRange ||
                            n.firstDay !== a.firstDay ||
                            n.eventRangeSize !== a.eventRangeSize ||
                            n.refDate !== a.refDate ||
                            o !== a.showCalendar ||
                            n.size !== a.size ||
                            n.weeks !== a.weeks,
                        T = y || this.pageIndex === ie || D || (!this.preventPageChange && x && (g < +this.firstDay || g >= +this.lastDay)) ? gs(b, n) : this.pageIndex,
                        S = "year" === l ? 12 : n.size || 1,
                        C = S > 1 && !m,
                        w = C ? 1 : Ts(n.pages, this.pageSize),
                        k = "vertical" === n.calendarScroll && "auto" !== n.pages && (n.pages === ie || 1 === n.pages),
                        M = n.showOuterDays !== ie ? n.showOuterDays : !k && w < 2 && (m || !S || S < 2),
                        E = C ? 0 : 1,
                        N = fs(T, n),
                        I = fs(T + w, n);
                    o || "week" !== n.eventRange || d === ie || h === ie || ((N = $t(N, d - u + (d < u ? 7 : 0))), (I = $t(N, 7 * n.eventRangeSize + h - d + 1 - (h < d ? 0 : 7))));
                    var L = o && M ? Ft(N, n) : N,
                        H = C ? s(i(I), r(I) - 1, 1) : fs(T + w - 1, n),
                        Y = o && M ? $t(Ft(H, n), 7 * _) : I,
                        O = o ? Ft(fs(T - E, n), n) : N,
                        P = o ? Ft(fs(T + w + E - 1, n), n) : I,
                        F = o ? $t(C ? Ft(H, n) : P, 7 * _) : I,
                        R = this.pageIndex === ie,
                        z = O,
                        V = F;
                    if (!o && "week" === n.resolution && ("year" === n.eventRange || "month" === n.eventRange)) {
                        var A = h - d + 1 + (h < d ? 7 : 0);
                        if (N.getDay() !== d) z = (U = $t((W = Ft(N, n, d)), A)) <= N ? $t(W, 7) : W;
                        if (I.getDay() !== d) {
                            var W,
                                U = $t((W = Ft(I, n, d)), A);
                            V = W > I ? $t(U, -7) : U;
                        }
                    }
                    var B = !1;
                    T !== ie && ((B = +z != +this.viewStart || +V != +this.viewEnd), (this.pageIndex = T)),
                        (this.firstDay = N),
                        (this.lastDay = I),
                        (this.firstPageDay = L),
                        (this.lastPageDay = Y),
                        (this.viewStart = z),
                        (this.viewEnd = V),
                        (this.forcePageChange = !1),
                        (this.preventPageChange = !1),
                        (this.minDate = p),
                        (this.maxDate = v),
                        (this._prevS = n),
                        T !== ie && (B || t) && (B && !R && this.pageChange(), this.pageLoading(B));
                }),
                (e.prototype.pageChange = function () {
                    this._s.onPageChange &&
                        this._s.onPageChange({ firstDay: this.firstPageDay, lastDay: this.lastPageDay, month: "month" === this._s.calendarType ? this.firstDay : ie, type: "onPageChange", viewEnd: this.viewEnd, viewStart: this.viewStart });
                }),
                (e.prototype.pageLoading = function (e) {
                    this._s.onPageLoading &&
                        this._s.onPageLoading({
                            firstDay: this.firstPageDay,
                            lastDay: this.lastPageDay,
                            month: "month" === this._s.calendarType ? this.firstDay : ie,
                            type: "onPageLoading",
                            viewChanged: e,
                            viewEnd: this.viewEnd,
                            viewStart: this.viewStart,
                        });
                }),
                e
            );
        })(),
        Oi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._navService = new Yi()),
                    (t._update = 0),
                    (t._onDayClick = function (e) {
                        var n = t.s,
                            a = Ut(n, e.date),
                            s = +a;
                        if (!e.disabled) {
                            if (n.selectMultiple) {
                                var i = t._tempValueRep;
                                i[s] ? delete i[s] : (n.selectMax === ie || Object.keys(i).length < n.selectMax) && (i[s] = a), (t._tempValueRep = c({}, i));
                            } else n.selectRange || (t._tempValueRep = {}), (t._tempValueRep[s] = a);
                            (t._navService.preventPageChange = n.selectRange), t._hook("onCellClick", e), t._setOrUpdate();
                        }
                    }),
                    (t._onTodayClick = function () {
                        var e = new Date(),
                            n = +Ht(e);
                        t.s.selectRange || t.s.selectMultiple || ((t._tempValueRep = {}), (t._tempValueRep[n] = e), t._setOrUpdate());
                    }),
                    (t._onActiveChange = function (e) {
                        (t._navService.forcePageChange = e.pageChange), t._update++, t._hook("onActiveChange", e);
                    }),
                    (t._setCal = function (e) {
                        t._calendarView = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._valueEquals = function (e, t) {
                    return Zt(e, t, this.s);
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone;
                }),
                (t.prototype._render = function (t, n) {
                    e.prototype._render.call(this, t, n),
                        this._navService.options({
                            activeDate: t.active,
                            calendarType: t.calendarType,
                            firstDay: t.firstDay,
                            getDate: t.getDate,
                            getDay: t.getDay,
                            getMonth: t.getMonth,
                            getYear: t.getYear,
                            max: t.max,
                            min: t.min,
                            onPageChange: t.onPageChange,
                            onPageLoading: t.onPageLoading,
                            pages: t.pages,
                            refDate: t.refDate,
                            showCalendar: !0,
                            showOuterDays: t.showOuterDays,
                            size: t.size,
                            weeks: t.weeks,
                        });
                }),
                (t.prototype._copy = function (e) {
                    return c({}, e);
                }),
                (t.prototype._format = function (e) {
                    var t = this.s,
                        n = [];
                    for (var a in e) e[a] !== ie && null !== e[a] && n.push(qt(t.dateFormat, new Date(+e[a]), t));
                    return t.selectMultiple || t.selectRange ? n.join(", ") : n[0];
                }),
                (t.prototype._parse = function (e) {
                    var t = this.s,
                        n = t.selectRange,
                        a = {},
                        s = [];
                    _e(e) ? (s = e.split(",")) : he(e) ? (s = e) : e && !he(e) && (s = [e]);
                    for (var i = 0, r = s; i < r.length; i++) {
                        var o = r[i];
                        if (null !== o) {
                            var l = Kt(o, t, t.dateFormat);
                            a[n ? +l : +Ht(l)] = l;
                        }
                    }
                    return a;
                }),
                (t.prototype._get = function (e) {
                    var t = this.s,
                        n = t.selectRange;
                    if (this.s.selectMultiple || n) {
                        for (var a = [], s = 0, i = Object.keys(e); s < i.length; s++) {
                            var r = i[s];
                            a.push(jt(t, +e[r]));
                        }
                        return a;
                    }
                    var o = Object.keys(e || {});
                    return o.length ? jt(t, e[o[0]]) : null;
                }),
                (t.defaults = c({}, vs, { calendarScroll: "horizontal", calendarType: "month", selectedText: "{count} selected", showControls: !0, showOnClick: !0, weeks: 1 })),
                (t._name = "Calendar"),
                t
            );
        })(Si),
        Pi = (function () {
            function e() {
                (this.onInstanceReady = new m()), (this.onComponentChange = new m());
            }
            return (
                Object.defineProperty(e.prototype, "instance", {
                    get: function () {
                        return this.inst;
                    },
                    set: function (e) {
                        (this.inst = e), this.onInstanceReady.next(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                e
            );
        })(),
        Fi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._render = function (e) {
                    (this._hasChildren = e.name !== ie && !_e(e.name)),
                        (this._cssClass = this._className + " mbsc-icon" + this._theme + (e.name && !this._hasChildren ? (-1 !== e.name.indexOf(" ") ? " " + e.name : " mbsc-font-icon mbsc-icon-" + e.name) : "")),
                        (this._svg = e.svg ? this._safeHtml(e.svg) : ie);
                }),
                t
            );
        })(Xa);
    var Ri,
        zi,
        Vi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return t._hasChildren ? Gn("span", { onClick: e.onClick, className: t._cssClass }, e.name) : Gn("span", { onClick: e.onClick, className: t._cssClass, dangerouslySetInnerHTML: t._svg, "v-html": ie });
                    })(e, this);
                }),
                t
            );
        })(Fi),
        Ai = 0;
    function Wi(e, t, n) {
        var a = (n ? "page" : "client") + t;
        return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0][a] : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0][a] : e[a];
    }
    function Ui(e, t) {
        if (!t.mbscClick) {
            var n = (e.originalEvent || e).changedTouches[0],
                a = document.createEvent("MouseEvents");
            a.initMouseEvent("click", !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                (a.isMbscTap = !0),
                (a.isIonicTap = !0),
                (Ri = !0),
                (t.mbscChange = !0),
                (t.mbscClick = !0),
                t.dispatchEvent(a),
                (Ri = !1),
                Ai++,
                setTimeout(function () {
                    Ai--;
                }, 500),
                setTimeout(function () {
                    delete t.mbscClick;
                });
        }
    }
    function Bi(e) {
        !Ai || Ri || e.isMbscTap || ("TEXTAREA" === e.target.nodeName && e.type === Ws) || (e.stopPropagation(), e.preventDefault());
    }
    function ji(e) {
        In(e.target).__mbscFocusVisible = !1;
    }
    function Ki(e) {
        In(e.target).__mbscFocusVisible = !0;
    }
    function Xi(e) {
        e &&
            setTimeout(function () {
                (e.style.opacity = "0"),
                    (e.style.transition = "opacity linear .4s"),
                    setTimeout(function () {
                        e && e.parentNode && e.parentNode.removeChild(e);
                    }, 400);
            }, 200);
    }
    function Ji(e, t) {
        var n,
            a,
            s,
            i,
            r,
            o,
            l,
            c,
            d,
            h,
            u,
            m,
            _,
            p,
            v,
            f = {},
            g = In(e),
            y = kn(e);
        function b(e) {
            if (e.type === Gs) zi = !0;
            else if (zi) return e.type === Ws && (zi = !1), !0;
            return !1;
        }
        function x() {
            l &&
                (Xi(i),
                (i = (function (e, t, n) {
                    var a = e.getBoundingClientRect(),
                        s = t - a.left,
                        i = n - a.top,
                        r = Math.max(s, e.offsetWidth - s),
                        o = Math.max(i, e.offsetHeight - i),
                        l = 2 * Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)),
                        c = rn.createElement("span");
                    c.classList.add("mbsc-ripple");
                    var d = c.style;
                    return (
                        (d.backgroundColor = getComputedStyle(e).color),
                        (d.width = l + "px"),
                        (d.height = l + "px"),
                        (d.top = n - a.top - l / 2 + "px"),
                        (d.left = t - a.left - l / 2 + "px"),
                        e.appendChild(c),
                        setTimeout(function () {
                            (d.opacity = ".2"), (d.transform = "scale(1)"), (d.transition = "opacity linear .1s, transform cubic-bezier(0, 0, 0.2, 1) .4s");
                        }, 30),
                        c
                    );
                })(e, u, m))),
                t.onPress(),
                (n = !0);
        }
        function D(e, i) {
            (a = !1),
                Xi(e),
                clearTimeout(s),
                (s = setTimeout(function () {
                    n && (t.onRelease(), (n = !1));
                }, i));
        }
        function T(e) {
            if (!b(e) && (e.type !== Ws || (0 === e.button && !e.ctrlKey))) {
                if (
                    ((d = Wi(e, "X")),
                    (h = Wi(e, "Y")),
                    (u = d),
                    (m = h),
                    (n = !1),
                    (a = !1),
                    (c = !1),
                    (v = !0),
                    (f.moved = c),
                    (f.startX = d),
                    (f.startY = h),
                    (f.endX = u),
                    (f.endY = m),
                    (f.deltaX = 0),
                    (f.deltaY = 0),
                    (f.domEvent = e),
                    (f.isTouch = zi),
                    Xi(i),
                    t.onStart)
                ) {
                    var r = t.onStart(f);
                    l = r && r.ripple;
                }
                t.onPress && ((a = !0), clearTimeout(s), (s = setTimeout(x, 50))), e.type === Ws && (Cn(y, Us, S), Cn(y, Bs, C)), Cn(y, Ps, Y);
            }
        }
        function S(e) {
            v &&
                ((u = Wi(e, "X")),
                (m = Wi(e, "Y")),
                (_ = u - d),
                (p = m - h),
                !c && (Math.abs(_) > 9 || Math.abs(p) > 9) && ((c = !0), D(i)),
                (f.moved = c),
                (f.endX = u),
                (f.endY = m),
                (f.deltaX = _),
                (f.deltaY = p),
                (f.domEvent = e),
                (f.isTouch = e.type === Zs),
                t.onMove && t.onMove(f));
        }
        function C(e) {
            v &&
                (a && !n && (clearTimeout(s), x()),
                (f.domEvent = e),
                (f.isTouch = e.type === Qs),
                t.onEnd && t.onEnd(f),
                D(i, 75),
                (v = !1),
                e.type === Qs && t.click && bn && !c && Ui(e, e.target),
                e.type === Bs && (wn(y, Us, S), wn(y, Bs, C)),
                wn(y, Ps, Y));
        }
        function w(e) {
            b(e) || ((o = !0), t.onHoverIn(e));
        }
        function k(e) {
            o && t.onHoverOut(e), (o = !1);
        }
        function M(e) {
            t.onKeyDown(e);
        }
        function E(e) {
            (t.keepFocus || g.__mbscFocusVisible) && ((r = !0), t.onFocus(e));
        }
        function N(e) {
            r && t.onBlur(e), (r = !1);
        }
        function I(e) {
            t.onChange(e);
        }
        function L(e) {
            t.onInput(e);
        }
        function H(e) {
            (f.domEvent = e), zi || t.onDoubleClick(f);
        }
        function Y(e) {
            zi && e.preventDefault();
        }
        if (
            (Cn(e, Ws, T),
            Cn(e, Gs, T, { passive: !0 }),
            Cn(e, Zs, S, { passive: !1 }),
            Cn(e, Qs, C),
            Cn(e, $s, C),
            t.onChange && Cn(e, Ys, I),
            t.onInput && Cn(e, Vs, L),
            t.onHoverIn && Cn(e, js, w),
            t.onHoverOut && Cn(e, Ks, k),
            t.onKeyDown && Cn(e, As, M),
            t.onFocus && g && (Cn(e, Rs, E), !t.keepFocus))
        ) {
            var O = g.__mbscFocusCount || 0;
            0 === O && (Cn(g, Ws, ji, !0), Cn(g, As, Ki, !0)), (g.__mbscFocusCount = ++O);
        }
        return (
            t.onBlur && Cn(e, Hs, N),
            t.onDoubleClick && Cn(e, Fs, H),
            function () {
                if ((clearTimeout(s), t.onFocus && g && !t.keepFocus)) {
                    var n = g.__mbscFocusCount || 0;
                    (g.__mbscFocusCount = --n), n <= 0 && (wn(g, Ws, ji), wn(g, As, Ki));
                }
                wn(e, Vs, L),
                    wn(e, Ws, T),
                    wn(e, Gs, T, { passive: !0 }),
                    wn(e, Zs, S, { passive: !1 }),
                    wn(e, Qs, C),
                    wn(e, $s, C),
                    wn(y, Us, S),
                    wn(y, Bs, C),
                    wn(y, Ps, Y),
                    wn(e, Ys, I),
                    wn(e, js, w),
                    wn(e, Ks, k),
                    wn(e, As, M),
                    wn(e, Rs, E),
                    wn(e, Hs, N),
                    wn(e, Fs, H);
            }
        );
    }
    v &&
        (["mousedown", js, Ws, Bs, Os].forEach(function (e) {
            rn.addEventListener(e, Bi, !0);
        }),
        "android" === h &&
            T < 5 &&
            rn.addEventListener(
                Ys,
                function (e) {
                    var t = e.target;
                    Ai && "checkbox" === t.type && !t.mbscChange && (e.stopPropagation(), e.preventDefault()), delete t.mbscChange;
                },
                !0
            ));
    var qi = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._mounted = function () {
                var e = this;
                this._unlisten = Ji(this._el, {
                    click: !0,
                    onBlur: function () {
                        e.setState({ hasFocus: !1 });
                    },
                    onFocus: function () {
                        e.setState({ hasFocus: !0 });
                    },
                    onHoverIn: function () {
                        e.s.disabled || e.setState({ hasHover: !0 });
                    },
                    onHoverOut: function () {
                        e.setState({ hasHover: !1 });
                    },
                    onKeyDown: function (t) {
                        switch (t.keyCode) {
                            case ti:
                            case ni:
                                e._el.click(), t.preventDefault();
                        }
                    },
                    onPress: function () {
                        e.setState({ isActive: !0 });
                    },
                    onRelease: function () {
                        e.setState({ isActive: !1 });
                    },
                    onStart: function () {
                        return { ripple: e.s.ripple && !e.s.disabled };
                    },
                });
            }),
            (t.prototype._render = function (e, t) {
                var n = this,
                    a = e.disabled;
                (this._isIconOnly = !(!e.icon && !e.iconSvg)),
                    (this._hasStartIcon = !(!e.startIcon && !e.startIconSvg)),
                    (this._hasEndIcon = !(!e.endIcon && !e.endIconSvg)),
                    (this._tabIndex = a ? ie : e.tabIndex || 0),
                    (this._cssClass =
                        this._className +
                        " mbsc-reset mbsc-font mbsc-button" +
                        this._theme +
                        this._rtl +
                        " mbsc-button-" +
                        e.variant +
                        (this._isIconOnly ? " mbsc-icon-button" : "") +
                        (a ? " mbsc-disabled" : "") +
                        (e.color ? " mbsc-button-" + e.color : "") +
                        (t.hasFocus && !a ? " mbsc-focus" : "") +
                        (t.isActive && !a ? " mbsc-active" : "") +
                        (t.hasHover && !a ? " mbsc-hover" : "")),
                    (this._iconClass = "mbsc-button-icon" + this._rtl),
                    (this._startIconClass = this._iconClass + " mbsc-button-icon-start"),
                    (this._endIconClass = this._iconClass + " mbsc-button-icon-end"),
                    e.disabled &&
                        t.hasHover &&
                        setTimeout(function () {
                            n.setState({ hasHover: !1 });
                        });
            }),
            (t.prototype._destroy = function () {
                this._unlisten && this._unlisten();
            }),
            (t.defaults = { ripple: !1, role: "button", tag: "button", variant: "standard" }),
            (t._name = "Button"),
            t
        );
    })(Xa);
    var Gi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a = t.props,
                            s = a.ariaLabel;
                        a.children, a.className, a.color;
                        var i = a.endIcon;
                        a.endIconSrc;
                        var r = a.endIconSvg;
                        a.hasChildren;
                        var o = a.icon;
                        a.iconSrc;
                        var l = a.iconSvg;
                        a.ripple, a.rtl;
                        var h = a.role,
                            u = a.startIcon;
                        a.startIconSrc;
                        var m = a.startIconSvg;
                        a.tag, a.tabIndex, a.theme, a.themeVariant, a.variant;
                        var _ = d(a, [
                                "ariaLabel",
                                "children",
                                "className",
                                "color",
                                "endIcon",
                                "endIconSrc",
                                "endIconSvg",
                                "hasChildren",
                                "icon",
                                "iconSrc",
                                "iconSvg",
                                "ripple",
                                "rtl",
                                "role",
                                "startIcon",
                                "startIconSrc",
                                "startIconSvg",
                                "tag",
                                "tabIndex",
                                "theme",
                                "themeVariant",
                                "variant",
                            ]),
                            p = c({ "aria-label": s, className: t._cssClass, ref: t._setEl }, _),
                            v = Gn(
                                Qn,
                                null,
                                t._isIconOnly && Gn(Vi, { className: t._iconClass, name: o, svg: l, theme: e.theme }),
                                t._hasStartIcon && Gn(Vi, { className: t._startIconClass, name: u, svg: m, theme: e.theme }),
                                n,
                                t._hasEndIcon && Gn(Vi, { className: t._endIconClass, name: i, svg: r, theme: e.theme })
                            );
                        return "span" === e.tag
                            ? Gn("span", c({ role: h, "aria-disabled": e.disabled, tabIndex: t._tabIndex }, p), v)
                            : "a" === e.tag
                            ? Gn("a", c({ "aria-disabled": e.disabled, tabIndex: t._tabIndex }, p), v)
                            : Gn("button", c({ role: h, tabIndex: t._tabIndex }, p), v);
                    })(e, this, e.children);
                }),
                t
            );
        })(qi),
        Zi = {
            before: function (e, t) {
                t.tag = e.nodeName.toLowerCase();
            },
            hasChildren: !0,
            parentClass: "mbsc-button",
            readProps: ["disabled"],
            slots: { endIcon: "end-icon", icon: "icon", startIcon: "start-icon" },
        },
        Qi = Da({}),
        $i = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype.componentWillUnmount = function () {
                    this._changes && this._changes.unsubscribe(this._handler);
                }),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = t.host,
                        a = t.component,
                        s = t.view,
                        i = d(t, ["host", "component", "view"]),
                        r = s || (n && n._calendarView);
                    return (
                        r &&
                            !this._changes &&
                            ((this._changes = r.s.instanceService.onComponentChange),
                            (this._handler = this._changes.subscribe(function () {
                                e.forceUpdate();
                            }))),
                        Gn(Qi.Consumer, null, function (e) {
                            var t = e.instance || s || (n && n._calendarView);
                            return t && Gn(a, c({ inst: t }, i));
                        })
                    );
                }),
                t
            );
        })(Ta),
        er = function (e) {
            var t = e.inst,
                n = e.className;
            return Gn(Gi, {
                ariaLabel: t.s.prevPageText,
                className: "mbsc-calendar-button " + (n || ""),
                disabled: t._isPrevDisabled(),
                iconSvg: t._prevIcon,
                onClick: t.prevPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat",
            });
        },
        tr = function (e) {
            var t = e.inst,
                n = e.className;
            return Gn(Gi, {
                ariaLabel: t.s.nextPageText,
                disabled: t._isNextDisabled(),
                className: "mbsc-calendar-button " + (n || ""),
                iconSvg: t._nextIcon,
                onClick: t.nextPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat",
            });
        },
        nr = function (e) {
            var t = e.inst,
                n = e.className;
            return Gn(Gi, { className: "mbsc-calendar-button mbsc-calendar-button-today " + (n || ""), onClick: t._onTodayClick, theme: t.s.theme, themeVariant: t.s.themeVariant, type: "button", variant: "flat" }, t.s.todayText);
        },
        ar = function (e) {
            var t = e.inst,
                n = e.className,
                a = t.s,
                s = t._theme,
                i = t._view;
            return Gn(
                "div",
                { "aria-live": "polite", className: (n || "") + s },
                t._title.map(function (e, n) {
                    return (
                        (1 === t._pageNr || 0 === n || t._hasPicker || i === _s) &&
                        Gn(
                            Gi,
                            {
                                className: "mbsc-calendar-button" + (t._pageNr > 1 ? " mbsc-flex-1-1" : ""),
                                "data-index": n,
                                onClick: t._onPickerBtnClick,
                                key: n,
                                theme: a.theme,
                                themeVariant: a.themeVariant,
                                type: "button",
                                variant: "flat",
                            },
                            (t._hasPicker || i === _s) &&
                                (e.title
                                    ? Gn("span", { className: "mbsc-calendar-title" + s }, e.title)
                                    : Gn(
                                          Qn,
                                          null,
                                          t._yearFirst && Gn("span", { className: "mbsc-calendar-title mbsc-calendar-year" + s }, e.yearTitle),
                                          Gn("span", { className: "mbsc-calendar-title mbsc-calendar-month" + s }, e.monthTitle),
                                          !t._yearFirst && Gn("span", { className: "mbsc-calendar-title mbsc-calendar-year" + s }, e.yearTitle)
                                      )),
                            !t._hasPicker && i !== _s && Gn("span", { className: "mbsc-calendar-title" + s }, t._viewTitle),
                            a.downIcon && 1 === t._pageNr ? Gn(Vi, { svg: i === _s ? a.downIcon : a.upIcon, theme: a.theme }) : null
                        )
                    );
                })
            );
        },
        sr = function (e) {
            var t = e.calendar,
                n = e.view,
                a = d(e, ["calendar", "view"]);
            return Gn($i, c({ component: er, host: t, view: n }, a));
        };
    sr._name = "CalendarPrev";
    var ir = function (e) {
        var t = e.calendar,
            n = e.view,
            a = d(e, ["calendar", "view"]);
        return Gn($i, c({ component: tr, host: t, view: n }, a));
    };
    ir._name = "CalendarNext";
    var rr = function (e) {
        var t = e.calendar,
            n = e.view,
            a = d(e, ["calendar", "view"]);
        return Gn($i, c({ component: nr, host: t, view: n }, a));
    };
    rr._name = "CalendarToday";
    var or = function (e) {
        var t = e.calendar,
            n = e.view,
            a = d(e, ["calendar", "view"]);
        return Gn($i, c({ component: ar, host: t, view: n }, a));
    };
    or._name = "CalendarNav";
    var lr = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.state = { height: "sm", pageSize: 0, pickerSize: 0, width: "sm" }),
                (t._dim = {}),
                (t._months = [1, 2, 3]),
                (t._title = []),
                (t.PAGE_VIEW = _s),
                (t.MONTH_VIEW = ms),
                (t.YEAR_VIEW = us),
                (t.MULTI_YEAR_VIEW = hs),
                (t.nextPage = function () {
                    switch ((t._prevDocClick(), t._view)) {
                        case ms:
                            t._activeMonthChange(1);
                            break;
                        case hs:
                            t._activeYearsChange(1);
                            break;
                        case us:
                            t._activeYearChange(1);
                            break;
                        default:
                            t._activeChange(1);
                    }
                }),
                (t.prevPage = function () {
                    switch ((t._prevDocClick(), t._view)) {
                        case ms:
                            t._activeMonthChange(-1);
                            break;
                        case hs:
                            t._activeYearsChange(-1);
                            break;
                        case us:
                            t._activeYearChange(-1);
                            break;
                        default:
                            t._activeChange(-1);
                    }
                }),
                (t._changeView = function (e) {
                    var n = t.s,
                        a = t._view,
                        s = t._hasPicker,
                        i = n.selectView,
                        r = n.navView,
                        o = n.showCalendar && "year" === n.calendarType;
                    if (!e) {
                        switch (a) {
                            case _s:
                                e = r || (o ? hs : us);
                                break;
                            case ms:
                                e = us;
                                break;
                            case hs:
                                e = o || r === hs ? _s : us;
                                break;
                            default:
                                e = (s && r === us) || i === us || t._prevView !== hs ? hs : r === ms ? ms : _s;
                        }
                        (i !== hs && r !== hs) || (e = hs);
                    }
                    a === _s && (t._activeMonth = t._active);
                    var l = s && e === i;
                    (t._prevView = a), t.setState({ view: e, viewClosing: l ? ie : a, viewOpening: l ? ie : e });
                }),
                (t._onDayHoverIn = function (e) {
                    t._disableHover ||
                        (t._hook("onDayHoverIn", e),
                        (t._hoverTimer = setTimeout(function () {
                            var n = Lt(e.date);
                            t._labels && (e.labels = t._labels[n]), t._marked && (e.marked = t._marked[n]), (t._isHover = !0), t._hook("onCellHoverIn", e);
                        }, 150)));
                }),
                (t._onDayHoverOut = function (e) {
                    if (!t._disableHover && (t._hook("onDayHoverOut", e), clearTimeout(t._hoverTimer), t._isHover)) {
                        var n = Lt(e.date);
                        t._labels && (e.labels = t._labels[n]), t._marked && (e.marked = t._marked[n]), (t._isHover = !1), t._hook("onCellHoverOut", e);
                    }
                }),
                (t._onLabelClick = function (e) {
                    (t._isLabelClick = !0), t._hook("onLabelClick", e);
                }),
                (t._onDayClick = function (e) {
                    (t._shouldFocus = !t._isLabelClick), (t._prevAnim = !1), (t._isLabelClick = !1), t._hook("onDayClick", e);
                }),
                (t._onTodayClick = function (e) {
                    (t._prevAnim = !1), t._hook("onActiveChange", { date: +Bt(jt(t.s)), today: !0 }), t._hook("onTodayClick", {});
                }),
                (t._onNavDayClick = function (e) {
                    if (!e.disabled) {
                        var n = e.date,
                            a = gs(n, t.s);
                        t._prevDocClick(), t._changeView(_s), (t._shouldFocus = !0), (t._prevAnim = !t._hasPicker), t._hook("onActiveChange", { date: +n, nav: !0, pageChange: a !== t._pageIndex, today: !0 });
                    }
                }),
                (t._onMonthClick = function (e) {
                    if (!e.disabled) {
                        var n = t.s,
                            a = new Date(e.date);
                        if (n.selectView === us) t._hook("onDayClick", e);
                        else if ((t._prevDocClick(), (t._shouldFocus = !0), (t._prevAnim = !t._hasPicker), (t._activeMonth = +a), n.navView === us || n.navView === ie)) {
                            var s = gs(a, n);
                            t._changeView(_s), t._hook("onActiveChange", { date: +a, nav: !0, pageChange: s !== t._pageIndex, today: !0 });
                        } else t._changeView(ms);
                    }
                }),
                (t._onYearClick = function (e) {
                    if (!e.disabled) {
                        var n = e.date,
                            a = t.s,
                            s = a.selectView;
                        if (s === hs) t._hook("onDayClick", e);
                        else if (((t._shouldFocus = !0), (t._prevAnim = s === us), (t._activeMonth = +n), t._prevDocClick(), a.navView === hs || "year" === a.calendarType)) {
                            var i = gs(n, a);
                            t._changeView(_s), t._hook("onActiveChange", { date: +n, pageChange: i !== t._pageIndex, today: !0 });
                        } else t._changeView(us);
                    }
                }),
                (t._onPageChange = function (e) {
                    (t._isSwipeChange = !0), t._activeChange(e.diff);
                }),
                (t._onMonthPageChange = function (e) {
                    t._activeMonthChange(e.diff);
                }),
                (t._onYearPageChange = function (e) {
                    t._activeYearChange(e.diff);
                }),
                (t._onYearsPageChange = function (e) {
                    t._activeYearsChange(e.diff);
                }),
                (t._onAnimationEnd = function (e) {
                    (t._disableHover = !1), t._isIndexChange && (t._pageLoaded(), (t._isIndexChange = !1));
                }),
                (t._onStart = function () {
                    clearTimeout(t._hoverTimer);
                }),
                (t._onGestureStart = function (e) {
                    (t._disableHover = !0), t._hook("onGestureStart", e);
                }),
                (t._onGestureEnd = function (e) {
                    t._prevDocClick();
                }),
                (t._onPickerClose = function () {
                    t.setState({ view: _s });
                }),
                (t._onPickerOpen = function () {
                    var e = t._pickerCont.clientHeight,
                        n = t._pickerCont.clientWidth;
                    t.setState({ pickerSize: t._isVertical ? e : n });
                }),
                (t._onPickerBtnClick = function (e) {
                    t._view === _s && (t._pickerBtn = e.currentTarget), t._prevDocClick(), t._changeView();
                }),
                (t._onDocClick = function () {
                    var e = t.s.selectView;
                    t._prevClick || t._hasPicker || t._view === e || t._changeView(e);
                }),
                (t._onViewAnimationEnd = function () {
                    t.state.viewClosing && t.setState({ viewClosing: ie }), t.state.viewOpening && t.setState({ viewOpening: ie });
                }),
                (t._onResize = function () {
                    if (t._body && v) {
                        var e = t.s,
                            n = t.state,
                            a = e.showCalendar,
                            s = a && t.__getTextParam ? t._body.querySelector(".mbsc-calendar-body-inner") : t._body,
                            i = t._el.offsetWidth,
                            r = t._el.offsetHeight,
                            o = s.clientHeight,
                            l = s.clientWidth,
                            c = t._isVertical ? o : l,
                            d = t._hasPicker ? n.pickerSize : c,
                            h = a !== ie,
                            u = "sm",
                            m = "sm",
                            _ = ie,
                            p = !1,
                            f = 0,
                            g = 0;
                        if ((e.responsiveStyle && !t._isGrid && (o > 300 && (m = "md"), l > 767 && (u = "md")), u !== n.width || m !== n.height)) (t._shouldCheckSize = !0), t.setState({ width: u, height: m });
                        else {
                            if (t._labels && a && t.__getTextParam) {
                                var y = s.querySelector(".mbsc-calendar-text"),
                                    b = s.querySelector(".mbsc-calendar-day-inner"),
                                    x = b.querySelector(".mbsc-calendar-labels"),
                                    D = y ? Mn(y, "marginBottom") : 2,
                                    T = y ? y.offsetHeight : 18;
                                (f = x.offsetTop), (p = s.scrollHeight > s.clientHeight), (g = T + D), (_ = Math.max(1, Ce((b.clientHeight - f) / g)));
                            }
                            t._hook("onResize", { height: r, target: t._el, width: i }), (e.navService.pageSize = c);
                            var S = t._shouldPageLoad ? (n.update || 0) + 1 : n.update;
                            t.setState({ cellTextHeight: f, hasScrollY: p, labelHeight: g, maxLabels: _, pageSize: c, pickerSize: d, ready: h, update: S });
                        }
                    }
                }),
                (t._onKeyDown = function (e) {
                    var n,
                        a = t.s,
                        s = t._view,
                        i = s === _s ? t._active : t._activeMonth,
                        r = new Date(i),
                        o = a.getYear(r),
                        l = a.getMonth(r),
                        c = a.getDay(r),
                        d = a.getDate,
                        h = a.weeks,
                        u = "month" === a.calendarType;
                    if (s === hs) {
                        var m = void 0;
                        switch (e.keyCode) {
                            case oi:
                                m = o - 1 * t._rtlNr;
                                break;
                            case ci:
                                m = o + 1 * t._rtlNr;
                                break;
                            case li:
                                m = o - 3;
                                break;
                            case di:
                                m = o + 3;
                                break;
                            case ri:
                                m = t._getPageYears(t._yearsIndex);
                                break;
                            case ii:
                                m = t._getPageYears(t._yearsIndex) + 11;
                                break;
                            case ai:
                                m = o - 12;
                                break;
                            case si:
                                m = o + 12;
                        }
                        m && t._minYears <= m && t._maxYears >= m && (e.preventDefault(), (t._shouldFocus = !0), (t._prevAnim = !1), (t._activeMonth = +d(m, 0, 1)), t.forceUpdate());
                    } else if (s === us) {
                        switch (e.keyCode) {
                            case oi:
                                n = d(o, l - 1 * t._rtlNr, 1);
                                break;
                            case ci:
                                n = d(o, l + 1 * t._rtlNr, 1);
                                break;
                            case li:
                                n = d(o, l - 3, 1);
                                break;
                            case di:
                                n = d(o, l + 3, 1);
                                break;
                            case ri:
                                n = d(o, 0, 1);
                                break;
                            case ii:
                                n = d(o, 11, 1);
                                break;
                            case ai:
                                n = d(o - 1, l, 1);
                                break;
                            case si:
                                n = d(o + 1, l, 1);
                        }
                        n && t._minYear <= n && t._maxYear >= n && (e.preventDefault(), (t._shouldFocus = !0), (t._prevAnim = !1), (t._activeMonth = +n), t.forceUpdate());
                    } else {
                        switch (e.keyCode) {
                            case oi:
                                n = d(o, l, c - 1 * t._rtlNr);
                                break;
                            case ci:
                                n = d(o, l, c + 1 * t._rtlNr);
                                break;
                            case li:
                                n = d(o, l, c - 7);
                                break;
                            case di:
                                n = d(o, l, c + 7);
                                break;
                            case ri:
                                n = d(o, l, 1);
                                break;
                            case ii:
                                n = d(o, l + 1, 0);
                                break;
                            case ai:
                                n = e.altKey ? d(o - 1, l, c) : u ? d(o, l - 1, c) : d(o, l, c - 7 * h);
                                break;
                            case si:
                                n = e.altKey ? d(o + 1, l, c) : u ? d(o, l + 1, c) : d(o, l, c + 7 * h);
                        }
                        if (n && t._minDate <= n && t._maxDate >= n) {
                            e.preventDefault();
                            var _ = gs(n, a);
                            (t._shouldFocus = !0),
                                (t._prevAnim = !1),
                                s === ms ? ((t._activeMonth = +n), t.forceUpdate()) : ((t._pageChange = a.noOuterChange && _ !== t._pageIndex), t._hook("onActiveChange", { date: +n, pageChange: t._pageChange }));
                        }
                    }
                }),
                (t._setHeader = function (e) {
                    t._headerElement = e;
                }),
                (t._setBody = function (e) {
                    t._body = e;
                }),
                (t._setPickerCont = function (e) {
                    t._pickerCont = e;
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._getPageDay = function (e) {
                return +fs(e, this.s);
            }),
            (t.prototype._getPageStyle = function (e, t, n, a) {
                var s;
                return ((s = {})[(xn ? xn + "T" : "t") + "ransform"] = "translate" + this._axis + "(" + 100 * (e - t) * this._rtlNr + "%)"), (s.position = e === n ? "relative" : ""), (s.width = 100 / (a || 1) + "%"), s;
            }),
            (t.prototype._getPageMonth = function (e) {
                var t = this.s,
                    n = t.refDate ? Kt(t.refDate) : ft,
                    a = t.getYear(n),
                    s = t.getMonth(n);
                return +t.getDate(a, s + e, 1);
            }),
            (t.prototype._getPageYear = function (e) {
                var t = this.s,
                    n = t.refDate ? Kt(t.refDate) : ft;
                return t.getYear(n) + e;
            }),
            (t.prototype._getPageYears = function (e) {
                var t = this.s,
                    n = t.refDate ? Kt(t.refDate) : ft;
                return t.getYear(n) + 12 * e;
            }),
            (t.prototype._getPickerClass = function (e) {
                var t,
                    n = e === this.s.selectView ? " mbsc-calendar-picker-main" : "",
                    a = "mbsc-calendar-picker",
                    s = this._hasPicker,
                    i = this.state,
                    r = i.viewClosing,
                    o = i.viewOpening;
                switch (e) {
                    case _s:
                        t = s ? "" : (o === _s ? "in-down" : "") + (r === _s ? "out-down" : "");
                        break;
                    case ms:
                        t = s && r === _s ? "" : (o === ms ? "in-down" : "") + (r === ms ? "out-down" : "");
                        break;
                    case hs:
                        t = s && r === _s ? "" : (o === hs ? "in-up" : "") + (r === hs ? "out-up" : "");
                        break;
                    default:
                        t = !s || (o !== _s && r !== _s) ? (o === us ? (r === hs ? "in-down" : "in-up") : "") + (r === us ? (o === hs ? "out-down" : "out-up") : "") : "";
                }
                return a + n + (fn && t ? " " + a + "-" + t : "");
            }),
            (t.prototype._isNextDisabled = function (e) {
                if (!this._hasPicker || e) {
                    var t = this._view;
                    if (t === hs) return this._yearsIndex + 1 > this._maxYearsIndex;
                    if (t === us) return this._yearIndex + 1 > this._maxYearIndex;
                    if (t === ms) return this._monthIndex + 1 > this._maxMonthIndex;
                }
                return this._pageIndex + 1 > this._maxIndex;
            }),
            (t.prototype._isPrevDisabled = function (e) {
                if (!this._hasPicker || e) {
                    var t = this._view;
                    if (t === hs) return this._yearsIndex - 1 < this._minYearsIndex;
                    if (t === us) return this._yearIndex - 1 < this._minYearIndex;
                    if (t === ms) return this._monthIndex - 1 < this._minMonthIndex;
                }
                return this._pageIndex - 1 < this._minIndex;
            }),
            (t.prototype._render = function (e, t) {
                var n = e.getDate,
                    a = e.getYear,
                    s = e.getMonth,
                    i = e.showCalendar,
                    r = e.calendarType,
                    o = e.eventRange,
                    l = e.eventRangeSize || 1,
                    c = e.firstDay,
                    d = "week" === r,
                    h = "month" === r,
                    u = "year" === r ? 12 : +(e.size || 1),
                    m = u > 1 && !d,
                    _ = i ? (d ? e.weeks : 6) : 0,
                    p = e.activeDate || this._active || +new Date(),
                    v = p !== this._active,
                    f = new Date(p),
                    g = this._prevS,
                    y = e.dateFormat,
                    b = e.monthNames,
                    x = e.yearSuffix,
                    D = ue(e.labelList) ? +e.labelList + 1 : "all" === e.labelList ? -1 : 0,
                    T = e.labelList !== g.labelList,
                    S = e.navService,
                    C = S.pageIndex,
                    w = S.firstDay,
                    k = S.lastDay,
                    M = S.viewStart,
                    E = S.viewEnd;
                if (((this._minDate = S.minDate), (this._maxDate = S.maxDate), pe(e.min)))
                    (this._minIndex = -1 / 0), (this._minYears = -1 / 0), (this._minYearsIndex = -1 / 0), (this._minYear = -1 / 0), (this._minYearIndex = -1 / 0), (this._minMonthIndex = -1 / 0);
                else {
                    var N = Ht(this._minDate);
                    (this._minDate = Ht(N)), (this._minYear = n(a(N), s(N), 1)), (this._minYears = a(N)), (this._minIndex = gs(N, e)), (this._minYearIndex = bs(N, e)), (this._minYearsIndex = ys(N, e)), (this._minMonthIndex = xs(N, e));
                }
                if (pe(e.max)) (this._maxIndex = 1 / 0), (this._maxYears = 1 / 0), (this._maxYearsIndex = 1 / 0), (this._maxYear = 1 / 0), (this._maxYearIndex = 1 / 0), (this._maxMonthIndex = 1 / 0);
                else {
                    var I = this._maxDate;
                    (this._maxYear = n(a(I), s(I) + 1, 1)), (this._maxYears = a(I)), (this._maxIndex = gs(I, e)), (this._maxYearIndex = bs(I, e)), (this._maxYearsIndex = ys(I, e)), (this._maxMonthIndex = xs(I, e));
                }
                var L = r !== g.calendarType || o !== g.eventRange || c !== g.firstDay || e.eventRangeSize !== g.eventRangeSize || e.refDate !== g.refDate || e.showCalendar !== g.showCalendar || e.weeks !== g.weeks;
                L && this._pageIndex !== ie && (this._prevAnim = !0),
                    v && (this._activeMonth = p),
                    (this._view = t.view || e.selectView),
                    (this._yearsIndex = ys(new Date(this._activeMonth), e)),
                    (this._yearIndex = bs(new Date(this._activeMonth), e)),
                    (this._monthIndex = xs(new Date(this._activeMonth), e));
                var H = m ? 1 : Ts(e.pages, t.pageSize),
                    Y = "vertical" === e.calendarScroll && "auto" !== e.pages && (e.pages === ie || 1 === e.pages),
                    O = e.showOuterDays !== ie ? e.showOuterDays : !Y && H < 2 && (d || !u || u < 2),
                    P = y.search(/m/i),
                    F = y.search(/y/i);
                if (this._view === ms) {
                    var R = new Date(this._getPageMonth(this._monthIndex)),
                        z = b[s(R)],
                        V = a(R) + x;
                    this._viewTitle = F < P ? V + " " + z : z + " " + V;
                } else if (this._view === us) this._viewTitle = this._getPageYear(this._yearIndex) + "";
                else if (this._view === hs) {
                    var A = this._getPageYears(this._yearsIndex);
                    this._viewTitle = A + " - " + (A + 11);
                }
                if (m && ((this._monthsMulti = []), C !== ie)) {
                    for (var W = Ce((0.96 * t.pageSize) / 325.6) || 1; u % W; ) W--;
                    for (var U = 0; U < u / W; ++U) {
                        for (var B = [], j = 0; j < W; ++j) B.push(+n(a(w), s(w) + U * W + j, 1));
                        this._monthsMulti.push(B);
                    }
                }
                (r !== g.calendarType ||
                    e.theme !== g.theme ||
                    e.calendarScroll !== g.calendarScroll ||
                    e.hasContent !== g.hasContent ||
                    e.showCalendar !== g.showCalendar ||
                    e.showSchedule !== g.showSchedule ||
                    e.showWeekNumbers !== g.showWeekNumbers ||
                    e.weeks !== g.weeks ||
                    T) &&
                    (this._shouldCheckSize = !0),
                    (g.width === e.width && g.height === e.height) || (this._dim = { height: be(e.height), width: be(e.width) }),
                    (this._cssClass =
                        "mbsc-calendar mbsc-font mbsc-flex-col" +
                        this._theme +
                        this._rtl +
                        (t.ready ? "" : " mbsc-hidden") +
                        (m ? " mbsc-calendar-grid-view" : " mbsc-calendar-height-" + t.height + " mbsc-calendar-width-" + t.width) +
                        " " +
                        e.cssClass),
                    (this._dayNames = "sm" === t.width || m ? e.dayNamesMin : e.dayNamesShort),
                    (this._isSwipeChange = !1),
                    (this._yearFirst = F < P),
                    (this._pageNr = H),
                    (this._variableRow = D);
                var K = e.pageLoad !== g.pageLoad,
                    X = +M != +this._viewStart || +E != +this._viewEnd;
                if (
                    (this._pageIndex !== ie && X && (this._isIndexChange = !this._isSwipeChange && !L),
                    C !== ie && (this._pageIndex = C),
                    C !== ie && (e.marked !== g.marked || e.colors !== g.colors || e.labels !== g.labels || e.invalid !== g.invalid || e.valid !== g.valid || t.maxLabels !== this._maxLabels || X || T || K))
                ) {
                    (this._maxLabels = t.maxLabels), (this._viewStart = M), (this._viewEnd = E);
                    var J = e.labelsMap || cs(e.labels, M, E, e),
                        q = J && Ss(e, J, M, E, this._variableRow || this._maxLabels || 1, 7, !1, c, !0, e.eventOrder, !O, e.showLabelCount, e.moreEventsText, e.moreEventsPluralText);
                    q && !this._labels && (this._shouldCheckSize = !0),
                        ((q && t.maxLabels) || !q) && (this._shouldPageLoad = !this._isIndexChange || this._prevAnim || !i || K),
                        (this._labelsLayout = q),
                        (this._labels = J),
                        (this._marked = J ? ie : e.marksMap || cs(e.marked, M, E, e)),
                        (this._colors = cs(e.colors, M, E, e)),
                        (this._valid = cs(e.valid, M, E, e, !0)),
                        (this._invalid = cs(e.invalid, M, E, e, !0));
                }
                if (X || v || o !== g.eventRange || l !== g.eventRangeSize || e.monthNames !== g.monthNames) {
                    this._title = [];
                    var G = $t(k, -1),
                        Z = C === ie ? f : w;
                    if (d) {
                        Z = f;
                        for (var Q = 0, $ = Object.keys(e.selectedDates); Q < $.length; Q++) {
                            var ee = $[Q];
                            if (+ee >= +w && +ee < +k) {
                                Z = new Date(+ee);
                                break;
                            }
                        }
                    }
                    if (this._pageNr > 1)
                        for (U = 0; U < H; U++) {
                            var te = n(a(w), s(w) + U, 1),
                                ne = a(te) + x,
                                ae = b[s(te)];
                            this._title.push({ yearTitle: ne, monthTitle: ae });
                        }
                    else {
                        var se = { yearTitle: a(Z) + x, monthTitle: b[s(Z)] },
                            re = e.showSchedule && 1 === l ? o : i ? r : o,
                            oe = o && !i && (!e.showSchedule || l > 1);
                        switch (re) {
                            case "year":
                                (se.title = a(w) + x), l > 1 && (se.title += " - " + (a(G) + x));
                                break;
                            case "month":
                                if (l > 1 && !i) {
                                    var le = b[s(w)],
                                        ce = a(w) + x,
                                        de = this._yearFirst ? ce + " " + le : le + " " + ce,
                                        he = b[s(G)],
                                        me = a(G) + x,
                                        _e = this._yearFirst ? me + " " + he : he + " " + me;
                                    se.title = de + " - " + _e;
                                } else m && (se.title = a(w) + x);
                                break;
                            case "day":
                            case "week":
                                if (oe) {
                                    var ve = y.search(/d/i) < P ? "D MMM, YYYY" : "MMM D, YYYY";
                                    (se.title = qt(ve, w, e)), ("week" === re || l > 1) && (se.title += " - " + qt(ve, G, e));
                                }
                        }
                        this._title.push(se);
                    }
                }
                (this._active = p),
                    (this._hasPicker = e.hasPicker || m || !h || !i || ("md" === t.width && !1 !== e.hasPicker)),
                    (this._axis = Y ? "Y" : "X"),
                    (this._rtlNr = !Y && e.rtl ? -1 : 1),
                    (this._weeks = _),
                    (this._nextIcon = Y ? e.nextIconV : e.rtl ? e.prevIconH : e.nextIconH),
                    (this._prevIcon = Y ? e.prevIconV : e.rtl ? e.nextIconH : e.prevIconH),
                    (this._mousewheel = e.mousewheel === ie ? Y : e.mousewheel),
                    (this._isGrid = m),
                    (this._isVertical = Y),
                    (this._showOuter = O),
                    (this._showDaysTop = Y || (!!D && 1 === u));
            }),
            (t.prototype._mounted = function () {
                (this._observer = ui(this._el, this._onResize, this._zone)), (this._doc = kn(this._el)), Cn(this._doc, Os, this._onDocClick);
            }),
            (t.prototype._updated = function () {
                var e = this;
                if (
                    (this._shouldCheckSize
                        ? (setTimeout(function () {
                              e._onResize();
                          }),
                          (this._shouldCheckSize = !1))
                        : this._shouldPageLoad && (this._pageLoaded(), (this._shouldPageLoad = !1)),
                    this._shouldFocus &&
                        setTimeout(function () {
                            e._focusActive(), (e._shouldFocus = !1);
                        }),
                    this.s.instanceService && this.s.instanceService.onComponentChange.next({}),
                    (this._pageChange = !1),
                    this._variableRow && this.s.showCalendar)
                ) {
                    var t = this._body.querySelector(".mbsc-calendar-body-inner"),
                        n = t.scrollHeight > t.clientHeight;
                    n !== this.state.hasScrollY && ((this._shouldCheckSize = !0), this.setState({ hasScrollY: n }));
                }
            }),
            (t.prototype._destroy = function () {
                this._observer && this._observer.detach(), wn(this._doc, Os, this._onDocClick), clearTimeout(this._hoverTimer);
            }),
            (t.prototype._getActiveCell = function () {
                var e = this._view,
                    t = e === _s ? this._body : this._pickerCont,
                    n = e === hs ? "year" : e === us ? "month" : "cell";
                return t && t.querySelector(".mbsc-calendar-" + n + '[tabindex="0"]');
            }),
            (t.prototype._focusActive = function () {
                var e = this._getActiveCell();
                e && e.focus();
            }),
            (t.prototype._pageLoaded = function () {
                var e = this.s.navService;
                this._hook("onPageLoaded", { activeElm: this._getActiveCell(), firstDay: e.firstPageDay, lastDay: e.lastPageDay, month: "month" === this.s.calendarType ? e.firstDay : ie, viewEnd: e.viewEnd, viewStart: e.viewStart });
            }),
            (t.prototype._activeChange = function (e) {
                var t = this._pageIndex + e;
                this._minIndex <= t && this._maxIndex >= t && this.__getTextParam && ((this._prevAnim = !1), (this._pageChange = !0), this._hook("onActiveChange", { date: this._getPageDay(t), dir: e, pageChange: !0 }));
            }),
            (t.prototype._activeMonthChange = function (e) {
                var t = this._monthIndex + e;
                this._minMonthIndex <= t && this._maxMonthIndex >= t && ((this._prevAnim = !1), (this._activeMonth = this._getPageMonth(t)), this.forceUpdate());
            }),
            (t.prototype._activeYearsChange = function (e) {
                var t = this._yearsIndex + e;
                if (this._minYearsIndex <= t && this._maxYearsIndex >= t) {
                    var n = this._getPageYears(t);
                    (this._prevAnim = !1), (this._activeMonth = +this.s.getDate(n, 0, 1)), this.forceUpdate();
                }
            }),
            (t.prototype._activeYearChange = function (e) {
                var t = this._yearIndex + e;
                if (this._minYearIndex <= t && this._maxYearIndex >= t) {
                    var n = this._getPageYear(t);
                    (this._prevAnim = !1), (this._activeMonth = +this.s.getDate(n, 0, 1)), this.forceUpdate();
                }
            }),
            (t.prototype._prevDocClick = function () {
                var e = this;
                (this._prevClick = !0),
                    setTimeout(function () {
                        e._prevClick = !1;
                    });
            }),
            t
        );
    })(Xa);
    function cr(e) {
        return (
            (this.getChildContext = function () {
                return e.context;
            }),
            e.children
        );
    }
    function dr(e) {
        var t = this,
            n = e._container;
        (t.componentWillUnmount = function () {
            ba(null, t._temp), (t._temp = null), (t._container = null);
        }),
            t._container && t._container !== n && t.componentWillUnmount(),
            e._vnode
                ? (t._temp ||
                      ((t._container = n),
                      (t._temp = {
                          nodeType: 1,
                          parentNode: n,
                          childNodes: [],
                          appendChild: function (e) {
                              this.childNodes.push(e), t._container.appendChild(e);
                          },
                          insertBefore: function (e, n) {
                              this.childNodes.push(e), t._container.appendChild(e);
                          },
                          removeChild: function (e) {
                              this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t._container.removeChild(e);
                          },
                      })),
                  ba(Gn(cr, { context: t.context }, e._vnode), t._temp))
                : t._temp && t.componentWillUnmount();
    }
    function hr(e, t) {
        return Gn(dr, { _vnode: e, _container: t });
    }
    var ur = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype.render = function () {
                    var e = this.props.context;
                    return e ? hr(this.props.children, e) : null;
                }),
                t
            );
        })($n),
        mr = ur;
    var _r = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n, a) {
                        var s,
                            i,
                            r = n._hb,
                            o = n._rtl,
                            l = n._theme,
                            d = e.display,
                            h = (((s = {}).onKeyDown = n._onKeyDown), s),
                            u = (((i = {}).onAnimationEnd = n._onAnimationEnd), i);
                        return n._isModal
                            ? n._isVisible
                                ? Gn(
                                      mr,
                                      { context: n._ctx },
                                      Gn(
                                          "div",
                                          c(
                                              {
                                                  className:
                                                      "mbsc-font mbsc-flex mbsc-popup-wrapper mbsc-popup-wrapper-" +
                                                      d +
                                                      l +
                                                      o +
                                                      " " +
                                                      n._className +
                                                      (e.fullScreen ? " mbsc-popup-wrapper-" + d + "-full" : "") +
                                                      (n._touchUi ? "" : " mbsc-popup-pointer") +
                                                      (n._round ? " mbsc-popup-round" : "") +
                                                      (n._hasContext ? " mbsc-popup-wrapper-ctx" : "") +
                                                      (t.isReady ? "" : " mbsc-popup-hidden"),
                                                  ref: n._setWrapper,
                                              },
                                              h
                                          ),
                                          e.showOverlay &&
                                              Gn("div", {
                                                  className: "mbsc-popup-overlay mbsc-popup-overlay-" + d + l + (n._isClosing ? " mbsc-popup-overlay-out" : "") + (n._isOpening && t.isReady ? " mbsc-popup-overlay-in" : ""),
                                                  onClick: n._onOverlayClick,
                                              }),
                                          Gn("div", { className: "mbsc-popup-limits mbsc-popup-limits-" + d, ref: n._setLimitator, style: n._limits }),
                                          Gn(
                                              "div",
                                              c(
                                                  {
                                                      className:
                                                          "mbsc-flex-col mbsc-popup mbsc-popup-" +
                                                          d +
                                                          l +
                                                          r +
                                                          (e.fullScreen ? "-full" : "") +
                                                          (t.bubblePos && t.showArrow && "anchored" === d ? " mbsc-popup-anchored-" + t.bubblePos : "") +
                                                          (n._isClosing ? " mbsc-popup-" + n._animation + "-out" : "") +
                                                          (n._isOpening && t.isReady ? " mbsc-popup-" + n._animation + "-in" : ""),
                                                      role: "dialog",
                                                      "aria-modal": "true",
                                                      ref: n._setPopup,
                                                      style: n._style,
                                                      onClick: n._onPopupClick,
                                                  },
                                                  u
                                              ),
                                              "anchored" === d &&
                                                  t.showArrow &&
                                                  Gn(
                                                      "div",
                                                      { className: "mbsc-popup-arrow-wrapper mbsc-popup-arrow-wrapper-" + t.bubblePos + l },
                                                      Gn("div", { className: "mbsc-popup-arrow mbsc-popup-arrow-" + t.bubblePos + l, style: t.arrowPos })
                                                  ),
                                              Gn("div", { className: "mbsc-popup-focus", tabIndex: -1, ref: n._setActive }),
                                              Gn(
                                                  "div",
                                                  {
                                                      className:
                                                          "mbsc-flex-col mbsc-flex-1-1 mbsc-popup-body mbsc-popup-body-" + d + l + r + (e.fullScreen ? " mbsc-popup-body-" + d + "-full" : "") + (n._round ? " mbsc-popup-body-round" : ""),
                                                  },
                                                  n._headerText &&
                                                      Gn("div", {
                                                          className: "mbsc-flex-none mbsc-popup-header mbsc-popup-header-" + d + l + r + (n._buttons ? "" : " mbsc-popup-header-no-buttons"),
                                                          dangerouslySetInnerHTML: n._headerText,
                                                          "v-html": ie,
                                                      }),
                                                  Gn("div", { className: "mbsc-flex-1-1 mbsc-popup-content" + (e.contentPadding ? " mbsc-popup-padding" : ""), ref: n._setContent }, a),
                                                  n._buttons &&
                                                      Gn(
                                                          "div",
                                                          {
                                                              className:
                                                                  "mbsc-flex-none mbsc-popup-buttons mbsc-popup-buttons-" + d + l + o + r + (n._flexButtons ? " mbsc-flex" : "") + (e.fullScreen ? " mbsc-popup-buttons-" + d + "-full" : ""),
                                                          },
                                                          n._buttons.map(function (t, a) {
                                                              return Gn(
                                                                  Gi,
                                                                  {
                                                                      color: t.color,
                                                                      className: "mbsc-popup-button mbsc-popup-button-" + d + o + r + (n._flexButtons ? " mbsc-popup-button-flex" : "") + " " + (t.cssClass || ""),
                                                                      icon: t.icon,
                                                                      disabled: t.disabled,
                                                                      key: a,
                                                                      theme: e.theme,
                                                                      themeVariant: e.themeVariant,
                                                                      variant: t.variant || e.buttonVariant,
                                                                      onClick: t.handler,
                                                                  },
                                                                  t.text
                                                              );
                                                          })
                                                      )
                                              )
                                          )
                                      )
                                  )
                                : null
                            : Gn(Qn, null, a);
                    })(e, t, this, e.children);
                }),
                t
            );
        })(bi),
        pr = {
            before: function (e, t) {
                var n,
                    a,
                    s = this;
                t.onOpen && (n = t.onOpen), t.onClosed && (a = t.onClosed);
                var i = kn(e),
                    r = i && i.createComment("popup");
                r && e.parentNode && e.parentNode.insertBefore(r, e),
                    (e.style.display = "none"),
                    (t.onOpen = function (t, a) {
                        (e.style.display = ""), t.target.querySelector(".mbsc-popup-content").appendChild(e), n && n.call(s, t, a);
                    }),
                    (t.onClosed = function (t, n) {
                        (e.style.display = "none"), r && r.parentNode && r.parentNode.insertBefore(e, r), a && a.call(s, t, n);
                    });
            },
        },
        vr = {},
        fr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        if (t._isDrag) e.stopPropagation();
                        else {
                            t._triggerEvent("onClick", e);
                            var n = t.s,
                                a = vr[n.id];
                            a && n.selected && a.next({ hasFocus: !1 });
                        }
                    }),
                    (t._onRightClick = function (e) {
                        t._triggerEvent("onRightClick", e);
                    }),
                    (t._onDocTouch = function (e) {
                        wn(t._doc, Gs, t._onDocTouch), wn(t._doc, Ws, t._onDocTouch), (t._isDrag = !1), t._hook("onDragModeOff", { domEvent: e, event: t.s.event });
                    }),
                    (t._updateState = function (e) {
                        t.s.showText && t.setState(e);
                    }),
                    (t._triggerEvent = function (e, n) {
                        t._hook(e, { domEvent: n, label: t.s.event, target: t._el });
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t = this,
                        n = this.s,
                        a = this._el,
                        s = n.id,
                        i = n.isPicker,
                        r = vr[s];
                    r || ((r = new m()), (vr[s] = r)),
                        (this._unsubscribe = r.subscribe(this._updateState)),
                        (this._doc = kn(a)),
                        (this._unlisten = Ji(a, {
                            keepFocus: !0,
                            onBlur: function () {
                                i || r.next({ hasFocus: !1 });
                            },
                            onDoubleClick: function (e) {
                                e.domEvent.stopPropagation(), t._hook("onDoubleClick", { domEvent: e.domEvent, label: t.s.event, target: a });
                            },
                            onEnd: function (n) {
                                if (t._isDrag) {
                                    var s = t.s,
                                        i = c({}, n);
                                    i.domEvent.preventDefault(),
                                        (i.event = s.event),
                                        s.resize && e ? ((i.resize = !0), (i.direction = e)) : s.drag && (i.drag = !0),
                                        t._hook("onDragEnd", i),
                                        s.isUpdate || (t._isDrag = !1),
                                        a && i.moved && a.blur();
                                }
                                clearTimeout(t._touchTimer), (e = ie);
                            },
                            onFocus: function () {
                                i || r.next({ hasFocus: !0 });
                            },
                            onHoverIn: function (e) {
                                t._isDrag || i || (r.next({ hasHover: !0 }), t._triggerEvent("onHoverIn", e));
                            },
                            onHoverOut: function (e) {
                                r.next({ hasHover: !1 }), t._triggerEvent("onHoverOut", e);
                            },
                            onKeyDown: function (e) {
                                var n = t.s.event;
                                switch (e.keyCode) {
                                    case ti:
                                    case ni:
                                        a.click(), e.preventDefault();
                                        break;
                                    case 8:
                                    case 46:
                                        n && !1 !== n.editable && t._hook("onDelete", { domEvent: e, event: n, source: "calendar" });
                                }
                            },
                            onMove: function (n) {
                                var a = t.s,
                                    s = c({}, n);
                                if (((s.event = a.event), e)) (s.resize = !0), (s.direction = e);
                                else {
                                    if (!a.drag) return;
                                    s.drag = !0;
                                }
                                a.event &&
                                    !1 !== a.event.editable &&
                                    (t._isDrag
                                        ? (s.domEvent.preventDefault(), t._hook("onDragMove", s))
                                        : (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7) && (clearTimeout(t._touchTimer), s.isTouch || ((t._isDrag = !0), t._hook("onDragStart", s))));
                            },
                            onStart: function (n) {
                                var a = t.s,
                                    s = c({}, n),
                                    i = s.domEvent.target;
                                if (((s.event = a.event), a.resize && i.classList.contains("mbsc-calendar-label-resize"))) (e = i.classList.contains("mbsc-calendar-label-resize-start") ? "start" : "end"), (s.resize = !0), (s.direction = e);
                                else {
                                    if (!a.drag) return;
                                    s.drag = !0;
                                }
                                a.event &&
                                    !1 !== a.event.editable &&
                                    ((!t._isDrag && s.isTouch) || s.domEvent.stopPropagation(),
                                    t._isDrag
                                        ? t._hook("onDragStart", s)
                                        : s.isTouch &&
                                          (t._touchTimer = setTimeout(function () {
                                              t._hook("onDragModeOn", s), t._hook("onDragStart", s), (t._isDrag = !0);
                                          }, 350)));
                            },
                        })),
                        this._isDrag && (Cn(this._doc, Gs, this._onDocTouch), Cn(this._doc, Ws, this._onDocTouch));
                }),
                (t.prototype._destroy = function () {
                    if ((this._el && this._el.blur(), this._unsubscribe)) {
                        var e = this.s.id,
                            t = vr[e];
                        t && (t.unsubscribe(this._unsubscribe), t.nr || delete vr[e]);
                    }
                    this._unlisten && this._unlisten(), wn(this._doc, Gs, this._onDocTouch), wn(this._doc, Ws, this._onDocTouch);
                }),
                (t.prototype._render = function (e, t) {
                    var n,
                        a,
                        s,
                        i,
                        r,
                        o,
                        l = e.event,
                        c = new Date(e.date),
                        d = e.render || e.renderContent,
                        h = !1;
                    if (
                        ((this._isDrag = this._isDrag || e.isUpdate),
                        (this._content = ie),
                        (this._title =
                            e.more || e.count || !e.showEventTooltip
                                ? ie
                                : (function (e) {
                                      if (rn && e) {
                                          var t = rn.createElement("div");
                                          return (t.innerHTML = e), t.textContent.trim();
                                      }
                                      return e || "";
                                  })(l.tooltip || l.title || l.text)),
                        (this._tabIndex = e.isActiveMonth && e.showText && !e.count && !e.isPicker ? 0 : -1),
                        l)
                    ) {
                        var u = l.allDay,
                            m = u ? ie : e;
                        (n = l.start ? Kt(l.start, m) : null), (a = l.end ? Kt(l.end, m) : null);
                        var _ = n && a && It(e, u, n, a, !0),
                            p = $t(Ft(c, e), 7),
                            v = e.lastDay && e.lastDay < p ? e.lastDay : p;
                        (s = !(h = n && _ && !Rt(n, _)) || (n && Rt(n, c))), (i = !h || (_ && Rt(_, c))), (r = !h || (e.showText ? _ < v : i)), (this._hasResizeStart = e.resize && s), (this._hasResizeEnd = e.resize && r);
                        var f = l.color;
                        if (!f && l.resource && e.resourcesMap) {
                            var g = e.resourcesMap[he(l.resource) ? l.resource[0] : l.resource];
                            f = g && g.color;
                        }
                        e.showText && (this._textColor = f ? Hn(f) : ie), (this._color = e.render || e.template ? ie : l.textColor && !f ? "transparent" : f);
                    }
                    if (l && e.showText && (d || e.contentTemplate || e.template)) {
                        var y = l.allDay || !n || (h && !s && !i);
                        if (((this._data = { end: !y && i && a ? qt(e.timeFormat, a, e) : "", id: l.id, isMultiDay: h, original: l, start: !y && s && n ? qt(e.timeFormat, n, e) : "", title: this._title }), d)) {
                            var b = d(this._data);
                            _e(b) ? (o = b) : (this._content = b);
                        }
                    } else o = e.more || e.count || (e.showText && (l.title || l.text)) || "";
                    o !== this._text && ((this._text = o), (this._html = o ? this._safeHtml(o) : ie), (this._shouldEnhance = o && l && e.showText && !!d)),
                        (this._cssClass =
                            "mbsc-calendar-text" +
                            this._theme +
                            this._rtl +
                            ((t.hasFocus && !e.inactive && !e.selected) || (e.selected && e.showText) ? " mbsc-calendar-label-active " : "") +
                            (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-calendar-label-hover") +
                            (e.more ? " mbsc-calendar-text-more" : e.render || e.template ? " mbsc-calendar-custom-label" : " mbsc-calendar-label") +
                            (e.inactive ? " mbsc-calendar-label-inactive" : "") +
                            (e.isUpdate ? " mbsc-calendar-label-dragging" : "") +
                            (e.hidden ? " mbsc-calendar-label-hidden" : "") +
                            (s ? " mbsc-calendar-label-start" : "") +
                            (r ? " mbsc-calendar-label-end" : "") +
                            (l && !1 === l.editable ? " mbsc-readonly-event" : "") +
                            (l && l.cssClass ? " " + l.cssClass : ""));
                }),
                t
            );
        })(Xa);
    var gr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n,
                            a = e.event && !1 !== e.event.editable,
                            s = (((n = {}).onContextMenu = t._onRightClick), n);
                        return Gn(
                            "div",
                            c(
                                {
                                    "aria-hidden": e.showText ? ie : "true",
                                    className: t._cssClass,
                                    "data-id": e.showText && e.event ? e.event.id : null,
                                    onClick: t._onClick,
                                    ref: t._setEl,
                                    role: e.showText ? "button" : ie,
                                    style: { color: t._color },
                                    tabIndex: t._tabIndex,
                                    title: t._title,
                                },
                                s
                            ),
                            t._hasResizeStart && a && Gn("div", { className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-start" + t._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-start-touch" : "") }),
                            t._hasResizeEnd && a && Gn("div", { className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-end" + t._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-end-touch" : "") }),
                            e.showText && !e.more && !e.render && Gn("div", { className: "mbsc-calendar-label-background" + t._theme }),
                            e.showText && !e.more && e.render
                                ? t._html
                                    ? Gn("div", { dangerouslySetInnerHTML: t._html }, ie)
                                    : t._content
                                : Gn(
                                      "div",
                                      { className: "mbsc-calendar-label-inner" + t._theme, style: { color: t._textColor } },
                                      Gn("div", { "aria-hidden": "true", className: "mbsc-calendar-label-text" + t._theme, dangerouslySetInnerHTML: t._html, style: { color: e.event && e.event.textColor } }, t._content),
                                      e.label && Gn("div", { className: "mbsc-hidden-content" }, e.label)
                                  )
                        );
                    })(e, this);
                }),
                t
            );
        })(fr),
        yr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._cellClick("onDayClick", e);
                    }),
                    (t._onRightClick = function (e) {
                        t._cellClick("onDayRightClick", e);
                    }),
                    (t._onLabelClick = function (e) {
                        t._labelClick("onLabelClick", e);
                    }),
                    (t._onLabelDoubleClick = function (e) {
                        t._labelClick("onLabelDoubleClick", e);
                    }),
                    (t._onLabelRightClick = function (e) {
                        t._labelClick("onLabelRightClick", e);
                    }),
                    (t._onLabelHoverIn = function (e) {
                        t._labelClick("onLabelHoverIn", e);
                    }),
                    (t._onLabelHoverOut = function (e) {
                        t._labelClick("onLabelHoverOut", e);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n,
                        a = this;
                    this._unlisten = Ji(this._el, {
                        click: !0,
                        onBlur: function () {
                            a.setState({ hasFocus: !1 });
                        },
                        onDoubleClick: function (e) {
                            var t = a.s;
                            t.clickToCreate && "single" !== t.clickToCreate && t.labels && !t.disabled && t.display && (a._hook("onLabelUpdateStart", e), a._hook("onLabelUpdateEnd", e)), a._cellClick("onDayDoubleClick", e.domEvent);
                        },
                        onEnd: function (s) {
                            e && (s.domEvent.preventDefault(), a._hook("onLabelUpdateEnd", s), (e = !1)), clearTimeout(n), (e = !1), (t = !1);
                        },
                        onFocus: function () {
                            a.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function (e) {
                            var t = a.s;
                            t.disabled || a.setState({ hasHover: !0 }), a._hook("onHoverIn", { date: new Date(t.date), domEvent: e, hidden: !t.display, outer: t.outer, target: a._el });
                        },
                        onHoverOut: function (e) {
                            var t = a.s;
                            a.setState({ hasHover: !1 }), a._hook("onHoverOut", { date: new Date(t.date), domEvent: e, hidden: !t.display, outer: t.outer, target: a._el });
                        },
                        onKeyDown: function (e) {
                            switch (e.keyCode) {
                                case ti:
                                case ni:
                                    e.preventDefault(), a._onClick(e);
                            }
                        },
                        onMove: function (s) {
                            e && a.s.dragToCreate
                                ? (s.domEvent.preventDefault(), a._hook("onLabelUpdateMove", s))
                                : t && a.s.dragToCreate && (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7)
                                ? ((e = !s.isTouch), a._hook("onLabelUpdateStart", s))
                                : clearTimeout(n);
                        },
                        onStart: function (s) {
                            var i = a.s;
                            ((s.create = !0), i.disabled || (!i.dragToCreate && !i.clickToCreate) || !i.labels || e) ||
                                Rn(s.domEvent.target, ".mbsc-calendar-text", a._el) ||
                                (s.isTouch && i.dragToCreate
                                    ? (n = setTimeout(function () {
                                          a._hook("onLabelUpdateStart", s), a._hook("onLabelUpdateModeOn", s), (e = !0);
                                      }, 350))
                                    : "single" === i.clickToCreate
                                    ? (a._hook("onLabelUpdateStart", s), (e = !0))
                                    : (t = !s.isTouch));
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    var n = jt(e),
                        a = e.date,
                        s = e.colors,
                        i = e.display,
                        r = e.dragData,
                        o = e.hoverEnd,
                        l = e.hoverStart,
                        c = e.labels,
                        d = e.rangeEnd,
                        h = e.rangeStart,
                        u = new Date(a),
                        m = Lt(u),
                        _ = Rt(n, u),
                        p = c && c.events,
                        v = s && s[0],
                        f = v && v.background,
                        g = v && v.highlight,
                        y = "",
                        b = "";
                    (this._draggedLabel = r && r.draggedDates && r.draggedDates[m]),
                        (this._draggedLabelOrig = r && r.originDates && r.originDates[m]),
                        (this._todayClass = _ ? " mbsc-calendar-today" : ""),
                        (this._cellStyles = f && i ? { backgroundColor: f, color: Hn(f) } : ie),
                        (this._circleStyles = g ? { backgroundColor: g, color: Hn(v.highlight) } : ie),
                        (this._ariaLabel = "day" === e.type ? (_ ? e.todayText + ", " : "") + e.day + ", " + e.month + " " + e.text + ", " + e.year : "month" === e.type ? e.month : ""),
                        i &&
                            (((h && a >= h && a <= (d || h)) || (d && a <= d && a >= (h || d))) && (b = " mbsc-range-day" + (a === (h || d) ? " mbsc-range-day-start" : "") + (a === (d || h) ? " mbsc-range-day-end" : "")),
                            l && o && a >= l && a <= o && (b += " mbsc-range-hover" + (a === l ? " mbsc-range-hover-start mbsc-hover" : "") + (a === o ? " mbsc-range-hover-end mbsc-hover" : ""))),
                        e.marks &&
                            e.marks.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        s &&
                            s.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        p &&
                            p.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        (this._cssClass =
                            "mbsc-calendar-cell mbsc-flex-1-0-0 mbsc-calendar-" +
                            e.type +
                            this._theme +
                            this._rtl +
                            this._hb +
                            y +
                            (c ? " mbsc-calendar-day-labels" : "") +
                            (s ? " mbsc-calendar-day-colors" : "") +
                            (e.outer ? " mbsc-calendar-day-outer" : "") +
                            (e.hasMarks ? " mbsc-calendar-day-marked" : "") +
                            (e.disabled ? " mbsc-disabled" : "") +
                            (i ? "" : " mbsc-calendar-day-empty") +
                            (e.selected ? " mbsc-selected" : "") +
                            (t.hasFocus ? " mbsc-focus" : "") +
                            (!t.hasHover || (a !== l && a !== o && (l || o)) ? "" : " mbsc-hover") +
                            (this._draggedLabel ? " mbsc-calendar-day-highlight" : "") +
                            b),
                        (this._data = { date: u, events: e.events || [], selected: e.selected });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                (t.prototype._cellClick = function (e, t) {
                    var n = this.s;
                    n.display && this._hook(e, { date: new Date(n.date), disabled: n.disabled, domEvent: t, outer: n.outer, selected: n.selected, source: "calendar", target: this._el });
                }),
                (t.prototype._labelClick = function (e, t) {
                    var n = this.s;
                    (t.date = new Date(n.date)), (t.labels = n.labels.events), this._hook(e, t);
                }),
                t
            );
        })(Xa);
    function br(e, t, n, a, s, i, r) {
        return Gn(gr, {
            key: r,
            amText: t.amText,
            count: n.count ? n.count + " " + (n.count > 1 ? t.eventsText : t.eventText) : ie,
            date: t.date,
            dataTimezone: t.dataTimezone,
            displayTimezone: t.displayTimezone,
            drag: t.dragToMove,
            resize: ws(n.event && n.event.resize, t.dragToResize),
            event: n.event,
            exclusiveEndDates: t.exclusiveEndDates,
            firstDay: t.firstDay,
            hidden: s,
            id: n.id,
            inactive: !i && n.event && t.dragData && t.dragData.draggedEvent && n.event.id === t.dragData.draggedEvent.id,
            isActiveMonth: t.isActiveMonth,
            isPicker: t.isPicker,
            isUpdate: i,
            label: n.label,
            lastDay: n.lastDay,
            more: n.more,
            pmText: t.pmText,
            resourcesMap: t.resourcesMap,
            rtl: t.rtl,
            selected: n.event && t.selectedEventsMap && !(!t.selectedEventsMap[n.id] && !t.selectedEventsMap[n.event.id]),
            showEventTooltip: t.showEventTooltip,
            showText: a,
            theme: t.theme,
            timeFormat: t.timeFormat,
            timezonePlugin: t.timezonePlugin,
            render: t.renderLabel,
            renderContent: t.renderLabelContent,
            onClick: e._onLabelClick,
            onDoubleClick: e._onLabelDoubleClick,
            onRightClick: e._onLabelRightClick,
            onHoverIn: e._onLabelHoverIn,
            onHoverOut: e._onLabelHoverOut,
            onDelete: t.onLabelDelete,
            onDragStart: t.onLabelUpdateStart,
            onDragMove: t.onLabelUpdateMove,
            onDragEnd: t.onLabelUpdateEnd,
            onDragModeOn: t.onLabelUpdateModeOn,
            onDragModeOff: t.onLabelUpdateModeOff,
        });
    }
    function xr(e, t) {
        var n,
            a,
            s = t._draggedLabel,
            i = t._draggedLabelOrig,
            r = t._theme,
            o = (((n = {}).onContextMenu = t._onRightClick), n);
        return (
            e.renderDay && (a = e.renderDay(t._data)),
            e.renderDayContent && (a = e.renderDayContent(t._data)),
            _e(a) && ((a = Gn("div", { dangerouslySetInnerHTML: t._safeHtml(a) })), (t._shouldEnhance = !0)),
            Gn(
                "div",
                c({ ref: t._setEl, className: t._cssClass, onClick: t._onClick, style: t._cellStyles, tabIndex: e.disabled ? ie : e.active ? 0 : -1 }, o),
                Gn("div", { dangerouslySetInnerHTML: t.textParam }),
                Gn(
                    "div",
                    { className: "mbsc-calendar-cell-inner mbsc-calendar-" + e.type + "-inner" + r + ("day" === e.type ? "" : t._hb) + (e.display ? "" : " mbsc-calendar-day-hidden") },
                    e.renderDay
                        ? a
                        : Gn(
                              Qn,
                              null,
                              1 === e.text && Gn("div", { "aria-hidden": "true", className: "mbsc-calendar-month-name" + r + t._rtl }, e.monthShort),
                              Gn("div", { "aria-label": t._ariaLabel, role: "button", "aria-pressed": e.selected, className: "mbsc-calendar-cell-text mbsc-calendar-" + e.type + "-text" + r + t._todayClass, style: t._circleStyles }, e.text),
                              e.marks &&
                                  Gn(
                                      "div",
                                      null,
                                      Gn(
                                          "div",
                                          { className: "mbsc-calendar-marks" + r + t._rtl },
                                          e.marks.map(function (e, t) {
                                              return Gn("div", { className: "mbsc-calendar-mark " + (e.markCssClass || "") + r, key: t, style: { background: e.color } });
                                          })
                                      )
                                  ),
                              e.renderDayContent && a
                          ),
                    e.labels &&
                        Gn(
                            "div",
                            null,
                            i &&
                                i.event &&
                                Gn(
                                    "div",
                                    { className: "mbsc-calendar-labels mbsc-calendar-labels-dragging" },
                                    Gn("div", { style: { width: i.width + "%" || "100%" } }, br(t, e, { id: 0, event: i.event }, !0, !!e.dragData.draggedDates, !0))
                                ),
                            s &&
                                s.event &&
                                Gn(
                                    "div",
                                    { className: "mbsc-calendar-labels mbsc-calendar-labels-dragging" },
                                    Gn("div", { className: "mbsc-calendar-label-wrapper", style: { width: s.width + "%" || "100%" } }, br(t, e, { id: 0, event: s.event }, !0, !1, !0))
                                ),
                            Gn(
                                "div",
                                { className: "mbsc-calendar-labels" },
                                e.labels.data.map(function (n) {
                                    return (function (e, t, n) {
                                        var a = n.id;
                                        return n.placeholder
                                            ? Gn("div", { className: "mbsc-calendar-text mbsc-calendar-text-placeholder", key: a })
                                            : n.more || n.count
                                            ? br(e, t, n, !0, !1, !1, a)
                                            : n.multiDay
                                            ? [Gn("div", { className: "mbsc-calendar-label-wrapper", style: { width: n.width + "%" }, key: a }, br(e, t, n, !0)), br(e, t, n, !1, !1, !1, "-" + a)]
                                            : br(e, t, n, n.showText, !1, !1, a);
                                    })(t, e, n);
                                })
                            ),
                            Gn("div", { className: "mbsc-calendar-text mbsc-calendar-text-placeholder" })
                        )
                )
            )
        );
    }
    var Dr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return xr(e, this);
                }),
                t
            );
        })(yr),
        Tr = function (e) {
            var t = e.firstDay,
                n = e.hidden,
                a = e.rtl,
                s = e.theme,
                i = e.dayNamesShort,
                r = e.showWeekNumbers,
                o = e.hasScroll;
            return Gn(
                "div",
                { "aria-hidden": "true", className: "mbsc-calendar-week-days mbsc-flex" + (n ? " mbsc-hidden" : "") },
                r && Gn("div", { className: "mbsc-calendar-week-day mbsc-flex-none mbsc-calendar-week-nr" + s + a }),
                le.map(function (e, n) {
                    return Gn("div", { className: "mbsc-calendar-week-day mbsc-flex-1-0-0" + s + a, key: n }, i[(n + t) % 7]);
                }),
                o && Gn("div", { className: "mbsc-schedule-fake-scroll-y" })
            );
        },
        Sr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._isActive = function (e) {
                    return this.s.isActive && e === this.s.activeDate;
                }),
                (t.prototype._isInvalid = function (e) {
                    var t = this.s;
                    return Ci(t, Ut(t, new Date(e)), t.invalid, t.valid, +t.min, +t.max);
                }),
                (t.prototype._isSelected = function (e) {
                    var t = new Date(e),
                        n = Ut(this.s, t);
                    return !!this.s.selectedDates[+n];
                }),
                (t.prototype._getWeekNr = function (e, t) {
                    var n = new Date(t);
                    return "" + e.getWeekNumber(e.getDate(n.getFullYear(), n.getMonth(), n.getDate() + ((7 - e.firstDay + 1) % 7)));
                }),
                (t.prototype._render = function (e) {
                    var t = e.weeks || 6,
                        n = e.firstDay,
                        a = new Date(e.firstPageDay),
                        s = e.getYear(a),
                        i = e.getMonth(a),
                        r = e.getDay(a),
                        o = e.getDate(s, i, r).getDay(),
                        l = n - o > 0 ? 7 : 0,
                        c = [],
                        d = 0;
                    (this._rowHeights = []), (this._rows = []), (this._days = le);
                    for (var h = 0; h < 7 * t; h++) {
                        var u = e.getDate(s, i, h + n - l - o + r),
                            m = Lt(u),
                            _ = e.getMonth(u),
                            p = _ !== i && "week" !== e.calendarType,
                            v = e.marked && e.marked[m],
                            f = v ? (e.showSingleMark ? [{}] : v) : null,
                            g = e.labels && e.labels[m],
                            y = g ? g.data.length : 0,
                            b = h % 7 == 0;
                        if (e.variableRow) {
                            if (b && p && h) break;
                            y > d && (d = y), h % 7 == 6 && (this._rowHeights.push(d * (e.labelHeight || 20) + (e.cellTextHeight || 0) + 3), (d = 0));
                        }
                        b && ((c = []), this._rows.push(c)),
                            c.push({
                                colors: e.colors && e.colors[m],
                                date: +u,
                                day: e.dayNames[u.getDay()],
                                display: !p || e.showOuter,
                                events: e.events && e.events[m],
                                labels: g,
                                marks: f,
                                month: e.monthNames[_],
                                monthShort: e.monthNamesShort[_],
                                outer: p,
                                text: e.getDay(u),
                                year: e.getYear(u),
                            });
                    }
                }),
                t
            );
        })(Xa);
    var Cr = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e) {
                return (function (e, t) {
                    var n = e.showWeekNumbers,
                        a = e.showWeekDays ? Gn(Tr, { dayNamesShort: e.dayNamesShort, firstDay: e.firstDay, rtl: t._rtl, showWeekNumbers: n, theme: t._theme }) : null;
                    return Gn(
                        "div",
                        { "aria-hidden": e.isActive ? ie : "true", className: "mbsc-calendar-table mbsc-flex-col mbsc-flex-1-1" + (e.isActive ? " mbsc-calendar-table-active" : "") },
                        a,
                        t._rows.map(function (a, s) {
                            var i = n ? t._getWeekNr(e, a[0].date) : "";
                            return Gn(
                                "div",
                                { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: s, style: { minHeight: t._rowHeights[s] } },
                                n &&
                                    Gn(
                                        "div",
                                        { className: "mbsc-calendar-cell mbsc-flex-none mbsc-calendar-day mbsc-calendar-week-nr" + t._theme },
                                        Gn("div", { "aria-hidden": "true" }, i),
                                        Gn("div", { className: "mbsc-hidden-content" }, e.weekText.replace("{count}", i))
                                    ),
                                a.map(function (n, a) {
                                    return Gn(Dr, {
                                        active: n.display && t._isActive(n.date),
                                        amText: e.amText,
                                        clickToCreate: e.clickToCreate,
                                        colors: n.colors,
                                        date: n.date,
                                        day: n.day,
                                        disabled: t._isInvalid(n.date),
                                        display: n.display,
                                        dataTimezone: e.dataTimezone,
                                        displayTimezone: e.displayTimezone,
                                        dragData: e.dragData,
                                        dragToCreate: e.dragToCreate,
                                        dragToResize: e.dragToResize,
                                        dragToMove: e.dragToMove,
                                        eventText: e.eventText,
                                        events: n.events,
                                        eventsText: e.eventsText,
                                        exclusiveEndDates: e.exclusiveEndDates,
                                        firstDay: e.firstDay,
                                        hasMarks: e.hasMarks,
                                        hoverEnd: e.hoverEnd,
                                        hoverStart: e.hoverStart,
                                        isActiveMonth: e.isActive,
                                        isPicker: e.isPicker,
                                        key: n.date,
                                        labels: n.labels,
                                        pmText: e.pmText,
                                        marks: n.marks,
                                        month: n.month,
                                        monthShort: n.monthShort,
                                        onDayClick: e.onDayClick,
                                        onDayDoubleClick: e.onDayDoubleClick,
                                        onDayRightClick: e.onDayRightClick,
                                        onLabelClick: e.onLabelClick,
                                        onLabelDoubleClick: e.onLabelDoubleClick,
                                        onLabelRightClick: e.onLabelRightClick,
                                        onLabelHoverIn: e.onLabelHoverIn,
                                        onLabelHoverOut: e.onLabelHoverOut,
                                        onLabelDelete: e.onLabelDelete,
                                        onLabelUpdateStart: e.onLabelUpdateStart,
                                        onLabelUpdateMove: e.onLabelUpdateMove,
                                        onLabelUpdateEnd: e.onLabelUpdateEnd,
                                        onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                        onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                        outer: n.outer,
                                        renderDay: e.renderDay,
                                        renderDayContent: e.renderDayContent,
                                        renderLabel: e.renderLabel,
                                        renderLabelContent: e.renderLabelContent,
                                        rangeEnd: e.rangeEnd,
                                        rangeStart: e.rangeStart,
                                        resourcesMap: e.resourcesMap,
                                        selectedEventsMap: e.selectedEventsMap,
                                        rtl: e.rtl,
                                        showEventTooltip: e.showEventTooltip,
                                        selected: t._isSelected(n.date),
                                        text: n.text,
                                        theme: e.theme,
                                        timeFormat: e.timeFormat,
                                        timezonePlugin: e.timezonePlugin,
                                        todayText: e.todayText,
                                        type: "day",
                                        year: n.year,
                                        onHoverIn: e.onDayHoverIn,
                                        onHoverOut: e.onDayHoverOut,
                                    });
                                })
                            );
                        })
                    );
                })(e, this);
            }),
            t
        );
    })(Sr);
    function wr(e, t, n, a) {
        var s;
        if (!(t < n || t > a)) {
            if (he(e)) {
                var i = e.length,
                    r = t % i;
                s = e[r >= 0 ? r : r + i];
            } else s = e(t);
            return s;
        }
    }
    var kr = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._currPos = 0),
                (t._delta = 0),
                (t._endPos = 0),
                (t._lastRaf = 0),
                (t._maxSnapScroll = 0),
                (t._margin = 0),
                (t._scrollEnd = ke(function () {
                    vn(t._raf), (t._raf = !1), t._onEnd(), (t._hasScrolled = !1);
                }, 200)),
                (t._setInnerEl = function (e) {
                    t._innerEl = e;
                }),
                (t._setScrollEl = function (e) {
                    t._scrollEl = e;
                }),
                (t._setScrollEl3d = function (e) {
                    t._scrollEl3d = e;
                }),
                (t._setScrollbarEl = function (e) {
                    t._scrollbarEl = e;
                }),
                (t._setScrollbarContEl = function (e) {
                    t._scrollbarContEl = e;
                }),
                (t._onStart = function (e) {
                    var n = t.s;
                    t._hook("onStart", {}),
                        (n.changeOnEnd && t._isScrolling) ||
                            (!n.mouseSwipe && !e.isTouch) ||
                            !n.swipe ||
                            ((t._started = !0),
                            (t._hasScrolled = t._isScrolling),
                            (t._currX = e.startX),
                            (t._currY = e.startY),
                            (t._delta = 0),
                            (t._velocityX = 0),
                            (t._velocityY = 0),
                            (t._startPos = Ln(t._scrollEl, t._isVertical)),
                            (t._timestamp = +new Date()),
                            t._isScrolling && (vn(t._raf), (t._raf = !1), t._scroll(t._startPos)));
                }),
                (t._onMove = function (e) {
                    var n = e.domEvent,
                        a = t.s;
                    t._isVertical || a.scrollLock || t._hasScrolled ? n.cancelable && n.preventDefault() : n.type === Zs && (Math.abs(e.deltaY) > 7 || !a.swipe) && (t._started = !1),
                        t._started &&
                            ((t._delta = t._isVertical ? e.deltaY : e.deltaX),
                            (t._hasScrolled || Math.abs(t._delta) > t._threshold) &&
                                (t._hasScrolled || t._hook("onGestureStart", {}),
                                (t._hasScrolled = !0),
                                (t._isScrolling = !0),
                                t._raf ||
                                    (t._raf = pn(function () {
                                        return t._move(e);
                                    }))));
                }),
                (t._onEnd = function () {
                    if (((t._started = !1), t._hasScrolled)) {
                        var e,
                            n = t.s,
                            a = 17 * (t._isVertical ? t._velocityY : t._velocityX),
                            s = t._maxSnapScroll,
                            i = t._delta;
                        (i += a * a * 0.5 * (a < 0 ? -1 : 1)), s && (i = ce(i, -t._round * s, t._round * s));
                        var r = ce(Te((t._startPos + i) / t._round) * t._round, t._min, t._max),
                            o = Te((-r * t._rtlNr) / n.itemSize) + t._offset,
                            l = i > 0 ? (t._isVertical ? 270 : 360) : t._isVertical ? 90 : 180,
                            c = o - n.selectedIndex;
                        (e = n.time || Math.max(1e3, 3 * Math.abs(r - t._currPos))),
                            t._hook("onGestureEnd", { direction: l, index: o }),
                            (t._delta = 0),
                            t._scroll(r, e),
                            c && !n.changeOnEnd && (t._hook("onIndexChange", { index: o, diff: c }), n.selectedIndex === t._prevIndex && n.selectedIndex !== o && t.forceUpdate());
                    }
                }),
                (t._onClick = function (e) {
                    t._hasScrolled && ((t._hasScrolled = !1), e.stopPropagation(), e.preventDefault());
                }),
                (t._onScroll = function (e) {
                    (e.target.scrollTop = 0), (e.target.scrollLeft = 0);
                }),
                (t._onMouseWheel = function (e) {
                    var n = t._isVertical ? (e.deltaY === ie ? e.wheelDelta || e.detail : e.deltaY) : e.deltaX;
                    if (n && t.s.mousewheel) {
                        if (
                            (e.preventDefault(),
                            t._hook("onStart", {}),
                            t._started || ((t._delta = 0), (t._velocityX = 0), (t._velocityY = 0), (t._startPos = t._currPos), t._hook("onGestureStart", {})),
                            e.deltaMode && 1 === e.deltaMode && (n *= 15),
                            (n = ce(-n, -t._scrollSnap, t._scrollSnap)),
                            (t._delta += n),
                            t._maxSnapScroll && Math.abs(t._delta) > t._round * t._maxSnapScroll && (n = 0),
                            t._startPos + t._delta < t._min && ((t._startPos = t._min), (t._delta = 0), (n = 0)),
                            t._startPos + t._delta > t._max && ((t._startPos = t._max), (t._delta = 0), (n = 0)),
                            t._raf ||
                                (t._raf = pn(function () {
                                    return t._move();
                                })),
                            !n && t._started)
                        )
                            return;
                        (t._hasScrolled = !0), (t._isScrolling = !0), (t._started = !0), t._scrollEnd();
                    }
                }),
                (t._onTrackStart = function (e) {
                    e.stopPropagation();
                    var n = { domEvent: e, startX: Wi(e, "X", !0), startY: Wi(e, "Y", !0) };
                    if ((t._onStart(n), (t._trackStartX = n.startX), (t._trackStartY = n.startY), e.target === t._scrollbarEl)) Cn(t._doc, Bs, t._onTrackEnd), Cn(t._doc, Us, t._onTrackMove);
                    else {
                        var a = Pn(t._scrollbarContEl).top,
                            s = (n.startY - a) / t._barContSize;
                        (t._startPos = t._currPos = t._max + (t._min - t._max) * s), (t._hasScrolled = !0), t._onEnd();
                    }
                }),
                (t._onTrackMove = function (e) {
                    var n = t._barContSize,
                        a = Wi(e, "X", !0),
                        s = Wi(e, "Y", !0),
                        i = (t._isVertical ? s - t._trackStartY : a - t._trackStartX) / n;
                    t._isInfinite ? (t._delta = -(t._maxSnapScroll * t._round * 2 + n) * i) : (t._delta = (t._min - t._max - n) * i),
                        (t._hasScrolled || Math.abs(t._delta) > t._threshold) &&
                            (t._hasScrolled || t._hook("onGestureStart", {}),
                            (t._hasScrolled = !0),
                            (t._isScrolling = !0),
                            t._raf ||
                                (t._raf = pn(function () {
                                    return t._move({ endX: a, endY: s }, !t._isInfinite);
                                })));
                }),
                (t._onTrackEnd = function () {
                    (t._delta = 0), (t._startPos = t._currPos), t._onEnd(), wn(t._doc, Bs, t._onTrackEnd), wn(t._doc, Us, t._onTrackMove);
                }),
                (t._onTrackClick = function (e) {
                    e.stopPropagation();
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._render = function (e, t) {
                var n = this._prevS,
                    a = e.batchSize,
                    s = e.batchSize3d,
                    i = e.itemNr || 1,
                    r = e.itemSize,
                    o = e.selectedIndex,
                    l = n.selectedIndex,
                    c = t.index === ie ? o : t.index,
                    d = [],
                    h = [],
                    u = o - l,
                    m = c - this._currIndex,
                    _ = e.minIndex,
                    p = e.maxIndex,
                    v = e.items,
                    f = e.offset;
                (this._currIndex = c), (this._isVertical = "Y" === e.axis), (this._threshold = this._isVertical ? e.thresholdY : e.thresholdX), (this._rtlNr = !this._isVertical && e.rtl ? -1 : 1), (this._round = e.snap ? r : 1);
                for (var g = this._round; g > 44; ) g /= 2;
                if (((this._scrollSnap = Te(44 / g) * g), v)) {
                    for (var y = c - a; y < c + i + a; y++) d.push({ key: y, data: wr(v, y, _, p) });
                    if (e.scroll3d) for (y = c - s; y < c + i + s; y++) h.push({ key: y, data: wr(v, y, _, p) });
                    (this.visibleItems = d), (this.visible3dItems = h), (this._maxSnapScroll = a), (this._isInfinite = "function" == typeof v);
                }
                this._offset === ie && (this._offset = o);
                var b = -(o - this._offset) * r * this._rtlNr;
                if (Math.abs(u) > a && b !== this._endPos) {
                    var x = u + a * (u > 0 ? -1 : 1);
                    (this._offset += x), (this._margin -= x);
                }
                if (
                    (f && f !== n.offset && ((this._offset += f), (this._margin -= f)),
                    m && (this._margin += m),
                    (this._max = _ !== ie ? -(_ - this._offset) * r * this._rtlNr : 1 / 0),
                    (this._min = p !== ie ? -(p - this._offset - (e.spaceAround ? 0 : i - 1)) * r * this._rtlNr : -1 / 0),
                    -1 === this._rtlNr)
                ) {
                    var D = this._min;
                    (this._min = this._max), (this._max = D);
                }
                this._min > this._max && (this._min = this._max);
                var T = e.visibleSize * r;
                (this._barContSize = T), (this._barSize = Math.max(20, (T * T) / (this._max - this._min + T))), (this._cssClass = this._className + " mbsc-ltr");
            }),
            (t.prototype._mounted = function () {
                var e = this._el,
                    t = this._scrollbarContEl;
                (this._doc = kn(e)),
                    Cn(this.s.scroll3d ? this._innerEl : e, qs, this._onScroll),
                    Cn(e, Os, this._onClick, !0),
                    Cn(e, Xs, this._onMouseWheel, { passive: !1 }),
                    Cn(e, ei, this._onMouseWheel, { passive: !1 }),
                    Cn(t, Ws, this._onTrackStart),
                    Cn(t, Os, this._onTrackClick),
                    (this._unlisten = Ji(e, {
                        onEnd: this._onEnd,
                        onHoverIn: function () {
                            t.classList.add("mbsc-scroller-bar-hover");
                        },
                        onHoverOut: function () {
                            t.classList.remove("mbsc-scroller-bar-hover");
                        },
                        onMove: this._onMove,
                        onStart: this._onStart,
                        prevDef: !0,
                    }));
            }),
            (t.prototype._updated = function () {
                var e = this.s,
                    t = e.batchSize,
                    n = e.itemSize,
                    a = e.selectedIndex,
                    s = this._prevIndex,
                    i = !e.prevAnim && ((s !== ie && s !== a) || this._isAnimating),
                    r = -(a - this._offset) * n * this._rtlNr;
                e.margin && (this._scrollEl.style.marginTop = this._isVertical ? (this._margin - t) * n + "px" : ""), this._started || this._scroll(r, i ? this._isAnimating || e.time || 1e3 : 0), (this._prevIndex = a);
            }),
            (t.prototype._destroy = function () {
                wn(this.s.scroll3d ? this._innerEl : this._el, qs, this._onScroll),
                    wn(this._el, Os, this._onClick, !0),
                    wn(this._el, Xs, this._onMouseWheel, { passive: !1 }),
                    wn(this._el, ei, this._onMouseWheel, { passive: !1 }),
                    wn(this._scrollbarContEl, Ws, this._onTrackStart),
                    wn(this._scrollbarContEl, Os, this._onTrackClick),
                    vn(this._raf),
                    (this._raf = !1),
                    this._scroll(0),
                    this._unlisten();
            }),
            (t.prototype._anim = function (e) {
                var t = this;
                return (this._raf = pn(function () {
                    var n = t.s,
                        a = +new Date();
                    if (t._raf) {
                        if ((t._currPos - t._endPos) * -e < 4)
                            return (
                                (t._currPos = t._endPos),
                                (t._raf = !1),
                                (t._isAnimating = 0),
                                (t._isScrolling = !1),
                                t._infinite(t._currPos),
                                t._hook("onAnimationEnd", {}),
                                void t._scrollbarContEl.classList.remove("mbsc-scroller-bar-started")
                            );
                        a - t._lastRaf > 100 && ((t._lastRaf = a), (t._currPos = Ln(t._scrollEl, t._isVertical)), n.changeOnEnd || t._infinite(t._currPos)), (t._raf = t._anim(e));
                    }
                }));
            }),
            (t.prototype._infinite = function (e) {
                var t = this.s;
                if (t.itemSize) {
                    var n = Te((-e * this._rtlNr) / t.itemSize) + this._offset,
                        a = n - this._currIndex;
                    a && (t.changeOnEnd ? this._hook("onIndexChange", { index: n, diff: a }) : this.setState({ index: n }));
                }
            }),
            (t.prototype._scroll = function (e, t) {
                var n = this.s,
                    a = n.itemSize,
                    s = this._isVertical,
                    i = this._scrollEl.style,
                    r = xn ? xn + "T" : "t",
                    o = t ? Dn + "transform " + Te(t) + "ms " + n.easing : "";
                if (((i[r + "ransform"] = "translate3d(" + (s ? "0," + e + "px," : e + "px,0,") + "0)"), (i[r + "ransition"] = o), (this._endPos = e), n.scroll3d)) {
                    var l = this._scrollEl3d.style,
                        c = 360 / (2 * n.batchSize3d);
                    (l[r + "ransform"] = "translateY(-50%) rotateX(" + (-e / a) * c + "deg)"), (l[r + "ransition"] = o);
                }
                if (this._scrollbarEl) {
                    var d = this._scrollbarEl.style,
                        h = this._isInfinite ? (this._maxSnapScroll * this._round - this._delta) / (this._maxSnapScroll * this._round * 2) : (e - this._max) / (this._min - this._max),
                        u = ce((this._barContSize - this._barSize) * h, 0, this._barContSize - this._barSize);
                    (d[r + "ransform"] = "translate3d(" + (s ? "0," + u + "px," : u + "px,0,") + "0)"), (d[r + "ransition"] = o);
                }
                t
                    ? (vn(this._raf), (this._isAnimating = t), this._scrollbarContEl.classList.add("mbsc-scroller-bar-started"), (this._raf = this._anim(e > this._currPos ? 1 : -1)))
                    : ((this._currPos = e), n.changeOnEnd || this._infinite(e));
            }),
            (t.prototype._move = function (e, t) {
                var n = this._currX,
                    a = this._currY,
                    s = this._timestamp,
                    i = this._maxSnapScroll;
                if (e) {
                    (this._currX = e.endX), (this._currY = e.endY), (this._timestamp = +new Date());
                    var r = this._timestamp - s;
                    if (r > 0 && r < 100) {
                        var o = (this._currX - n) / r,
                            l = (this._currY - a) / r;
                        (this._velocityX = 0.7 * o + 0.3 * this._velocityX), (this._velocityY = 0.7 * l + 0.3 * this._velocityY);
                    }
                }
                i && !t && (this._delta = ce(this._delta, -this._round * i, this._round * i)), this._scroll(ce(this._startPos + this._delta, this._min - this.s.itemSize, this._max + this.s.itemSize)), (this._raf = !1);
            }),
            (t.defaults = {
                axis: "Y",
                batchSize: 40,
                easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                mouseSwipe: !0,
                mousewheel: !0,
                prevDef: !0,
                selectedIndex: 0,
                spaceAround: !0,
                stopProp: !0,
                swipe: !0,
                thresholdX: 10,
                thresholdY: 5,
            }),
            t
        );
    })(Xa);
    var Mr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a;
                        return (
                            e.itemRenderer &&
                                ((n = t.visibleItems.map(function (n) {
                                    return e.itemRenderer(n, t._offset);
                                })),
                                e.scroll3d &&
                                    (a = t.visible3dItems.map(function (n) {
                                        return e.itemRenderer(n, t._offset, !0);
                                    }))),
                            Gn(
                                "div",
                                { ref: t._setEl, className: t._cssClass, style: e.styles },
                                Gn("div", { ref: t._setInnerEl, className: e.innerClass, style: e.innerStyles }, Gn("div", { ref: t._setScrollEl, className: "mbsc-scrollview-scroll" + t._rtl }, n)),
                                e.scroll3d && Gn("div", { ref: t._setScrollEl3d, style: { height: e.itemSize + "px" }, className: "mbsc-scroller-items-3d" }, a),
                                Gn(
                                    "div",
                                    {
                                        ref: t._setScrollbarContEl,
                                        className: "mbsc-scroller-bar-cont " + t._rtl + (e.scrollBar && t._barSize !== t._barContSize ? "" : " mbsc-scroller-bar-hidden") + (t._started ? " mbsc-scroller-bar-started" : ""),
                                    },
                                    Gn("div", { className: "mbsc-scroller-bar" + t._theme, ref: t._setScrollbarEl, style: { height: t._barSize + "px" } })
                                )
                            )
                        );
                    })(e, this, e.children);
                }),
                t
            );
        })(kr),
        Er = 0;
    var Nr = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e, t) {
                return (function (e, t, n, a) {
                    var s, i;
                    Er++;
                    var r = n._variableRow,
                        o = n._view !== _s,
                        l = (((s = {}).onAnimationEnd = n._onViewAnimationEnd), s),
                        d = (((i = {}).onKeyDown = n._onKeyDown), i),
                        h = function (a, s) {
                            return Gn(
                                Cr,
                                c({}, s, {
                                    activeDate: n._active,
                                    amText: e.amText,
                                    calendarType: e.calendarType,
                                    cellTextHeight: t.cellTextHeight,
                                    clickToCreate: e.clickToCreate,
                                    colors: n._colors,
                                    dayNames: e.dayNames,
                                    dayNamesShort: n._dayNames,
                                    dataTimezone: e.dataTimezone,
                                    displayTimezone: e.displayTimezone,
                                    eventText: e.eventText,
                                    events: e.eventMap,
                                    eventsText: e.eventsText,
                                    exclusiveEndDates: e.exclusiveEndDates,
                                    firstDay: e.firstDay,
                                    firstPageDay: a,
                                    getDate: e.getDate,
                                    getDay: e.getDay,
                                    getMonth: e.getMonth,
                                    getWeekNumber: e.getWeekNumber,
                                    getYear: e.getYear,
                                    hasMarks: !!n._marked,
                                    hoverEnd: e.hoverEnd,
                                    hoverStart: e.hoverStart,
                                    isPicker: e.isPicker,
                                    invalid: n._invalid,
                                    labels: n._labelsLayout,
                                    labelHeight: t.labelHeight,
                                    marked: n._marked,
                                    max: n._maxDate,
                                    min: n._minDate,
                                    monthNames: e.monthNames,
                                    monthNamesShort: e.monthNamesShort,
                                    onDayClick: n._onDayClick,
                                    onDayDoubleClick: e.onDayDoubleClick,
                                    onDayRightClick: e.onDayRightClick,
                                    onDayHoverIn: n._onDayHoverIn,
                                    onDayHoverOut: n._onDayHoverOut,
                                    onLabelClick: n._onLabelClick,
                                    onLabelDoubleClick: e.onLabelDoubleClick,
                                    onLabelRightClick: e.onLabelRightClick,
                                    onLabelHoverIn: e.onLabelHoverIn,
                                    onLabelHoverOut: e.onLabelHoverOut,
                                    onLabelDelete: e.onLabelDelete,
                                    pmText: e.pmText,
                                    rangeEnd: e.rangeEnd,
                                    rangeStart: e.rangeStart,
                                    resourcesMap: e.resourcesMap,
                                    rtl: e.rtl,
                                    selectedDates: e.selectedDates,
                                    selectedEventsMap: e.selectedEventsMap,
                                    showEventTooltip: e.showEventTooltip,
                                    showOuter: n._showOuter,
                                    showWeekDays: !n._showDaysTop,
                                    showWeekNumbers: e.showWeekNumbers,
                                    showSingleMark: !!e.marksMap,
                                    todayText: e.todayText,
                                    theme: e.theme,
                                    timeFormat: e.timeFormat,
                                    timezonePlugin: e.timezonePlugin,
                                    valid: n._valid,
                                    weeks: n._weeks,
                                    weekText: e.weekText,
                                    renderDay: e.renderDay,
                                    renderDayContent: e.renderDayContent,
                                    renderLabel: e.renderLabel,
                                    renderLabelContent: e.renderLabelContent,
                                    variableRow: n._variableRow,
                                })
                            );
                        },
                        u =
                            n._showDaysTop && e.showCalendar
                                ? Gn(Tr, { dayNamesShort: n._dayNames, rtl: n._rtl, theme: n._theme, firstDay: e.firstDay, hasScroll: t.hasScrollY, hidden: n._view !== _s && !n._hasPicker, showWeekNumbers: e.showWeekNumbers })
                                : null,
                        m = {
                            axis: n._axis,
                            batchSize: 1,
                            changeOnEnd: !0,
                            className: "mbsc-calendar-scroll-wrapper" + n._theme,
                            data: Er,
                            easing: "ease-out",
                            itemSize: t.pickerSize,
                            items: n._months,
                            mousewheel: n._mousewheel,
                            prevAnim: n._prevAnim,
                            rtl: e.rtl,
                            snap: !0,
                            time: 200,
                        },
                        _ = Gn(
                            "div",
                            { ref: n._setPickerCont, className: n._hasPicker ? "mbsc-calendar-picker-wrapper" : "" },
                            (t.view === hs || t.viewClosing === hs || e.selectView === hs) &&
                                Gn(
                                    "div",
                                    c({ className: n._getPickerClass(hs) }, l),
                                    Gn(
                                        Mr,
                                        c(
                                            {
                                                key: "years",
                                                itemRenderer: function (t, a) {
                                                    var s = t.key,
                                                        i = n._getPageYears(s),
                                                        r = e.getYear(new Date(n._active)),
                                                        o = e.getYear(new Date(n._activeMonth));
                                                    return Gn(
                                                        "div",
                                                        {
                                                            "aria-hidden": n._yearsIndex === s ? ie : "true",
                                                            className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + n._theme + n._rtl,
                                                            key: s,
                                                            style: n._getPageStyle(s, a, n._yearsIndex),
                                                        },
                                                        Gn(
                                                            "div",
                                                            { className: "mbsc-calendar-table mbsc-flex-col" },
                                                            oe.map(function (t, a) {
                                                                return Gn(
                                                                    "div",
                                                                    { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: a },
                                                                    re.map(function (t, s) {
                                                                        var l = i + 3 * a + s,
                                                                            c = +e.getDate(l, 0, 1);
                                                                        return Gn(Dr, {
                                                                            active: l === o,
                                                                            date: c,
                                                                            display: !0,
                                                                            selected: l === r,
                                                                            disabled: l < n._minYears || l > n._maxYears,
                                                                            rtl: e.rtl,
                                                                            text: l + e.yearSuffix,
                                                                            theme: e.theme,
                                                                            type: "year",
                                                                            onDayClick: n._onYearClick,
                                                                            key: l,
                                                                        });
                                                                    })
                                                                );
                                                            })
                                                        )
                                                    );
                                                },
                                                maxIndex: n._maxYearsIndex,
                                                minIndex: n._minYearsIndex,
                                                onGestureEnd: n._onGestureEnd,
                                                onIndexChange: n._onYearsPageChange,
                                                selectedIndex: n._yearsIndex,
                                            },
                                            m
                                        )
                                    )
                                ),
                            (t.view === us || t.viewClosing === us || e.selectView === us) &&
                                Gn(
                                    "div",
                                    c({ className: n._getPickerClass(us) }, l),
                                    Gn(
                                        Mr,
                                        c(
                                            {
                                                key: "year",
                                                itemRenderer: function (t, a) {
                                                    var s = t.key,
                                                        i = n._getPageYear(s),
                                                        r = new Date(n._activeMonth),
                                                        o = e.getYear(r),
                                                        l = e.getMonth(r),
                                                        c = new Date(n._active),
                                                        d = e.getYear(c),
                                                        h = e.getMonth(c);
                                                    return Gn(
                                                        "div",
                                                        {
                                                            "aria-hidden": n._yearIndex === s ? ie : "true",
                                                            className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + n._theme + n._rtl,
                                                            key: s,
                                                            style: n._getPageStyle(s, a, n._yearIndex),
                                                        },
                                                        Gn(
                                                            "div",
                                                            { className: "mbsc-calendar-table mbsc-flex-col" },
                                                            oe.map(function (t, a) {
                                                                return Gn(
                                                                    "div",
                                                                    { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: a },
                                                                    re.map(function (t, s) {
                                                                        var r = e.getDate(i, 3 * a + s, 1),
                                                                            c = e.getYear(r),
                                                                            u = e.getMonth(r);
                                                                        return Gn(Dr, {
                                                                            active: c === o && u === l,
                                                                            date: +r,
                                                                            display: !0,
                                                                            selected: c === d && u === h,
                                                                            disabled: r < n._minYear || r >= n._maxYear,
                                                                            month: e.monthNames[u],
                                                                            rtl: e.rtl,
                                                                            text: e.monthNamesShort[u],
                                                                            theme: e.theme,
                                                                            type: "month",
                                                                            onDayClick: n._onMonthClick,
                                                                            key: +r,
                                                                        });
                                                                    })
                                                                );
                                                            })
                                                        )
                                                    );
                                                },
                                                maxIndex: n._maxYearIndex,
                                                minIndex: n._minYearIndex,
                                                onGestureEnd: n._onGestureEnd,
                                                onIndexChange: n._onYearPageChange,
                                                selectedIndex: n._yearIndex,
                                            },
                                            m
                                        )
                                    )
                                ),
                            n._hasPicker &&
                                (t.view === ms || t.viewClosing === ms) &&
                                Gn(
                                    "div",
                                    c({ className: n._getPickerClass(ms) }, l),
                                    Gn(
                                        Mr,
                                        c(
                                            {
                                                key: "month",
                                                itemRenderer: function (t, a) {
                                                    var s = t.key;
                                                    return Gn(
                                                        "div",
                                                        { className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + n._theme + n._rtl, key: s, style: n._getPageStyle(s, a, 1) },
                                                        Gn(Cr, {
                                                            activeDate: n._activeMonth,
                                                            dataTimezone: e.dataTimezone,
                                                            dayNames: e.dayNames,
                                                            dayNamesShort: e.dayNamesMin,
                                                            displayTimezone: e.displayTimezone,
                                                            firstDay: e.firstDay,
                                                            firstPageDay: n._getPageMonth(s),
                                                            getDate: e.getDate,
                                                            getDay: e.getDay,
                                                            getMonth: e.getMonth,
                                                            getYear: e.getYear,
                                                            isActive: s >= n._monthIndex && s < n._monthIndex + 1,
                                                            max: n._maxDate,
                                                            min: n._minDate,
                                                            monthNames: e.monthNames,
                                                            monthNamesShort: e.monthNamesShort,
                                                            onDayClick: n._onNavDayClick,
                                                            rtl: e.rtl,
                                                            selectedDates: e.selectedDates,
                                                            showOuter: !0,
                                                            showWeekDays: !n._showDaysTop,
                                                            theme: e.theme,
                                                            timezonePlugin: e.timezonePlugin,
                                                            todayText: e.todayText,
                                                        })
                                                    );
                                                },
                                                maxIndex: n._maxMonthIndex,
                                                minIndex: n._minMonthIndex,
                                                onGestureEnd: n._onGestureEnd,
                                                onIndexChange: n._onMonthPageChange,
                                                selectedIndex: n._monthIndex,
                                            },
                                            m
                                        )
                                    )
                                )
                        );
                    return Gn(
                        "div",
                        { className: n._cssClass, ref: n._setEl, style: n._dim, onClick: xe },
                        Gn(
                            "div",
                            { className: "mbsc-calendar-wrapper mbsc-flex-col" + n._theme + n._hb + (e.hasContent || !e.showCalendar ? " mbsc-calendar-wrapper-fixed mbsc-flex-none" : " mbsc-flex-1-1") },
                            Gn(
                                "div",
                                { className: "mbsc-calendar-header" + n._theme + n._hb + (n._showDaysTop ? " mbsc-calendar-header-vertical" : ""), ref: n._setHeader },
                                e.showControls &&
                                    (function () {
                                        var t, a;
                                        if (e.renderHeader) _e((t = e.renderHeader())) && (t !== n._headerHTML && ((n._headerHTML = t), (n._shouldEnhanceHeader = !0)), (a = n._safeHtml(t)));
                                        else {
                                            var s = n._pageNr > 1;
                                            t = Gn(
                                                Qn,
                                                null,
                                                Gn(or, { className: "mbsc-flex mbsc-flex-1-1 mbsc-calendar-title-wrapper" }),
                                                Gn(sr, { className: "mbsc-calendar-button-prev" + (s ? " mbsc-calendar-button-prev-multi" : "") }),
                                                e.showToday && Gn(rr, { className: "mbsc-calendar-header-today" }),
                                                Gn(ir, { className: "mbsc-calendar-button-next" + (s ? " mbsc-calendar-button-next-multi" : "") })
                                            );
                                        }
                                        var i = Gn("div", { className: "mbsc-calendar-controls mbsc-flex" + n._theme, dangerouslySetInnerHTML: a }, t);
                                        return Gn(Qi.Provider, { children: i, value: { instance: n } });
                                    })(),
                                u
                            ),
                            Gn(
                                "div",
                                c({ className: "mbsc-calendar-body mbsc-flex-col mbsc-flex-1-1" + n._theme, ref: n._setBody }, d),
                                e.showCalendar &&
                                    Gn(
                                        "div",
                                        { className: "mbsc-calendar-body-inner mbsc-flex-col mbsc-flex-1-1" + (r ? " mbsc-calendar-body-inner-variable" : "") },
                                        n._isGrid
                                            ? Gn(
                                                  "div",
                                                  { "aria-hidden": o ? "true" : ie, className: "mbsc-calendar-grid mbsc-flex-1-1 mbsc-flex-col" + n._theme + n._hb },
                                                  n._monthsMulti.map(function (t, a) {
                                                      return Gn(
                                                          "div",
                                                          { key: a, className: "mbsc-calendar-grid-row mbsc-flex mbsc-flex-1-1" },
                                                          t.map(function (t, a) {
                                                              return Gn(
                                                                  "div",
                                                                  { key: a, className: "mbsc-calendar-grid-item mbsc-flex-col mbsc-flex-1-1" + n._theme },
                                                                  Gn("div", { className: "mbsc-calendar-month-title" + n._theme }, e.monthNames[new Date(t).getMonth()]),
                                                                  h(t, { isActive: !0 })
                                                              );
                                                          })
                                                      );
                                                  })
                                              )
                                            : r
                                            ? Gn(
                                                  "div",
                                                  { "aria-hidden": o ? "true" : ie, className: "mbsc-calendar-slide mbsc-calendar-slide-active " + n._getPickerClass(_s) },
                                                  h(+e.navService.firstDay, {
                                                      dragData: e.dragData,
                                                      dragToCreate: e.dragToCreate,
                                                      dragToMove: e.dragToMove,
                                                      dragToResize: e.dragToResize,
                                                      isActive: !0,
                                                      onLabelUpdateEnd: e.onLabelUpdateEnd,
                                                      onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                                      onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                                      onLabelUpdateMove: e.onLabelUpdateMove,
                                                      onLabelUpdateStart: e.onLabelUpdateStart,
                                                  })
                                              )
                                            : e.selectView === _s &&
                                              Gn(
                                                  "div",
                                                  c({ "aria-hidden": o ? "true" : ie, className: n._getPickerClass(_s) }, l),
                                                  Gn(
                                                      Mr,
                                                      c({}, m, {
                                                          itemNr: n._pageNr,
                                                          itemSize: t.pageSize / n._pageNr,
                                                          itemRenderer: function (t, a) {
                                                              var s = t.key,
                                                                  i = s >= n._pageIndex && s < n._pageIndex + n._pageNr && n._view === _s,
                                                                  r = {
                                                                      dragData: e.dragData,
                                                                      dragToCreate: e.dragToCreate,
                                                                      dragToMove: e.dragToMove,
                                                                      dragToResize: e.dragToResize,
                                                                      isActive: i,
                                                                      onLabelUpdateEnd: e.onLabelUpdateEnd,
                                                                      onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                                                      onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                                                      onLabelUpdateMove: e.onLabelUpdateMove,
                                                                      onLabelUpdateStart: e.onLabelUpdateStart,
                                                                  };
                                                              return Gn(
                                                                  "div",
                                                                  { className: "mbsc-calendar-slide" + (i ? " mbsc-calendar-slide-active" : "") + n._theme + n._rtl, key: s, style: n._getPageStyle(s, a, n._pageIndex, n._pageNr) },
                                                                  h(n._getPageDay(s), r)
                                                              );
                                                          },
                                                          maxIndex: n._maxIndex,
                                                          minIndex: n._minIndex,
                                                          mouseSwipe: e.mouseSwipe,
                                                          onAnimationEnd: n._onAnimationEnd,
                                                          onGestureStart: n._onGestureStart,
                                                          onIndexChange: n._onPageChange,
                                                          onStart: n._onStart,
                                                          selectedIndex: n._pageIndex,
                                                          swipe: e.swipe,
                                                      })
                                                  )
                                              ),
                                        !n._hasPicker && _
                                    )
                            )
                        ),
                        a,
                        n._hasPicker &&
                            Gn(
                                _r,
                                {
                                    anchor: n._pickerBtn,
                                    closeOnScroll: !0,
                                    contentPadding: !1,
                                    context: e.context,
                                    cssClass: "mbsc-calendar-popup",
                                    display: "anchored",
                                    isOpen: n._view !== _s,
                                    locale: e.locale,
                                    onClose: n._onPickerClose,
                                    onOpen: n._onPickerOpen,
                                    rtl: e.rtl,
                                    scrollLock: !1,
                                    showOverlay: !1,
                                    theme: e.theme,
                                    themeVariant: e.themeVariant,
                                },
                                Gn(
                                    "div",
                                    c({}, d),
                                    Gn(
                                        "div",
                                        { className: "mbsc-calendar-controls mbsc-flex" + n._theme },
                                        Gn(
                                            "div",
                                            { "aria-live": "polite", className: "mbsc-calendar-picker-button-wrapper mbsc-calendar-title-wrapper mbsc-flex mbsc-flex-1-1" + n._theme },
                                            Gn(Gi, { className: "mbsc-calendar-button", onClick: n._onPickerBtnClick, theme: e.theme, themeVariant: e.themeVariant, type: "button", variant: "flat" }, n._viewTitle)
                                        ),
                                        Gn(Gi, {
                                            className: "mbsc-calendar-button",
                                            ariaLabel: e.prevPageText,
                                            disabled: n._isPrevDisabled(!0),
                                            iconSvg: n._prevIcon,
                                            onClick: n.prevPage,
                                            theme: e.theme,
                                            themeVariant: e.themeVariant,
                                            type: "button",
                                            variant: "flat",
                                        }),
                                        Gn(Gi, {
                                            className: "mbsc-calendar-button",
                                            ariaLabel: e.nextPageText,
                                            disabled: n._isNextDisabled(!0),
                                            iconSvg: n._nextIcon,
                                            onClick: n.nextPage,
                                            theme: e.theme,
                                            themeVariant: e.themeVariant,
                                            type: "button",
                                            variant: "flat",
                                        })
                                    ),
                                    _
                                )
                            )
                    );
                })(e, t, this, e.children);
            }),
            (t.prototype._updated = function () {
                e.prototype._updated.call(this), this._shouldEnhanceHeader && (Na(this._headerElement, { view: this }), (this._shouldEnhanceHeader = !1));
            }),
            t
        );
    })(lr);
    var Ir = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._instanceService = new Pi()), t;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e) {
                return (function (e, t) {
                    return Gn(Nr, {
                        ref: t._setCal,
                        refDate: e.refDate,
                        activeDate: e.active,
                        amText: e.amText,
                        cssClass: t._className + " mbsc-flex-1-1 mbsc-calendar-" + e.display,
                        calendarScroll: e.calendarScroll,
                        calendarType: e.calendarType,
                        colors: e.colors,
                        context: e.context,
                        dataTimezone: e.dataTimezone,
                        displayTimezone: e.displayTimezone,
                        timezonePlugin: e.timezonePlugin,
                        downIcon: e.downIcon,
                        exclusiveEndDates: e.exclusiveEndDates,
                        hoverEnd: e.hoverEnd,
                        hoverStart: e.hoverStart,
                        invalid: e.invalid,
                        instanceService: t._instanceService,
                        isPicker: !0,
                        labels: e.labels,
                        marked: e.marked,
                        max: e.max,
                        min: e.min,
                        mousewheel: e.mousewheel,
                        navService: t._navService,
                        nextIconH: e.nextIconH,
                        nextIconV: e.nextIconV,
                        nextPageText: e.nextPageText,
                        noOuterChange: e.selectRange,
                        onActiveChange: t._onActiveChange,
                        onCellHoverIn: e.onCellHoverIn,
                        onCellHoverOut: e.onCellHoverOut,
                        onDayClick: t._onDayClick,
                        onDayHoverIn: e.onDayHoverIn,
                        onDayHoverOut: e.onDayHoverOut,
                        onLabelClick: e.onLabelClick,
                        onPageChange: e.onPageChange,
                        onPageLoaded: e.onPageLoaded,
                        onPageLoading: e.onPageLoading,
                        onTodayClick: t._onTodayClick,
                        pages: e.pages,
                        pmText: e.pmText,
                        prevIconH: e.prevIconH,
                        prevIconV: e.prevIconV,
                        prevPageText: e.prevPageText,
                        renderDay: e.renderDay,
                        renderDayContent: e.renderDayContent,
                        renderHeader: e.renderCalendarHeader,
                        rangeEnd: e.rangeEnd,
                        rangeStart: e.rangeStart,
                        rtl: e.rtl,
                        selectedDates: t._tempValueRep,
                        selectView: e.selectView,
                        showCalendar: !0,
                        showControls: e.showControls,
                        showOuterDays: e.showOuterDays,
                        showToday: !1,
                        showWeekNumbers: e.showWeekNumbers,
                        size: e.size,
                        theme: e.theme,
                        themeVariant: e.themeVariant,
                        update: t._update,
                        upIcon: e.upIcon,
                        valid: e.valid,
                        weeks: e.weeks,
                        width: e.width,
                        getDate: e.getDate,
                        getDay: e.getDay,
                        getMaxDayOfMonth: e.getMaxDayOfMonth,
                        getMonth: e.getMonth,
                        getWeekNumber: e.getWeekNumber,
                        getYear: e.getYear,
                        dateFormat: e.dateFormat,
                        dayNames: e.dayNames,
                        dayNamesMin: e.dayNamesMin,
                        dayNamesShort: e.dayNamesShort,
                        eventText: e.eventText,
                        eventsText: e.eventsText,
                        firstDay: e.firstDay,
                        fromText: e.fromText,
                        monthNames: e.monthNames,
                        monthNamesShort: e.monthNamesShort,
                        moreEventsPluralText: e.moreEventsPluralText,
                        moreEventsText: e.moreEventsText,
                        todayText: e.todayText,
                        toText: e.toText,
                        weekText: e.weekText,
                        yearSuffix: e.yearSuffix,
                    });
                })(e, this);
            }),
            t
        );
    })(Oi);
    function Lr(e, t, n, a) {
        var s = e.min === ie ? -1 / 0 : e.min,
            i = e.max === ie ? 1 / 0 : e.max,
            r = Or(e, t),
            o = Pr(e, r),
            l = o,
            c = o,
            d = 0,
            h = 0;
        if (n && n.get(o)) {
            for (; r - d >= s && n.get(l) && d < 100; ) l = Pr(e, r - ++d);
            for (; r + h < i && n.get(c) && h < 100; ) c = Pr(e, r + ++h);
            if (n.get(l) && n.get(c)) return o;
            o = ((h < d && h && -1 !== a) || !d || r - d < 0 || 1 === a) && !n.get(c) ? c : l;
        }
        return o;
    }
    function Hr(e) {
        return e !== ie ? (e.value !== ie ? e.value : e.display !== ie ? e.display : e) : e;
    }
    function Yr(e, t) {
        if (e.getItem) return e.getItem(t);
        var n = e.data || [],
            a = n.length,
            s = t % a;
        return e._circular ? n[s >= 0 ? s : s + a] : n[ce(t, 0, a - 1)];
    }
    function Or(e, t) {
        var n = e.multiple ? (t && t.length && t[0]) || ie : t;
        return (e.getIndex ? +e.getIndex(t) : e._map.get(n)) || 0;
    }
    function Pr(e, t) {
        return Hr(Yr(e, t));
    }
    var Fr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._indexes = []),
                    (t._activeIndexes = []),
                    (t._wheels = []),
                    (t._batches = []),
                    (t._lastIndexes = []),
                    (t._onSet = function () {
                        t._setOrUpdate();
                    }),
                    (t._onActiveChange = function (e) {
                        var n = e.wheel,
                            a = e.index,
                            s = n._key;
                        t._activeIndexes[s] = a;
                        var i = t._indexes,
                            r = i[s];
                        t._scroll3d ? (r = a) : a - r >= t._rows ? r++ : a < r && r--, (i[s] = r), t.forceUpdate();
                    }),
                    (t._onWheelIndexChange = function (e) {
                        var n = t.s,
                            a = e.wheel,
                            s = a._key,
                            i = a.multiple,
                            r = Pr(a, e.index),
                            o = t._disabled && t._disabled[s] && t._disabled[s].get(r),
                            l = [],
                            c = n.selectOnScroll;
                        (c || !e.click) &&
                            ((t._lastIndexes[s] = t._indexes[s] = e.index),
                            t._indexes.forEach(function (e, n) {
                                var a = t._wheelMap[n],
                                    s = a.data ? a.data.length : 0;
                                (t._batches[n] = s ? Ce(e / s) : 0), (l[n] = s);
                            })),
                            (t._activeIndexes[s] = e.index);
                        var d = t._get(t._tempValueRep),
                            h = !!e.click && !o,
                            u = c || h;
                        if (i) {
                            if (h) {
                                var m = (t._tempValueRep[s] || []).slice();
                                !1 === e.selected ? m.push(r) : !0 === e.selected && m.splice(m.indexOf(r), 1), (t._tempValueRep[s] = m);
                            }
                        } else u && (t._tempValueRep[s] = r);
                        if (n.onWheelMove && e.index !== ie) {
                            var _ = n.onWheelMove({ dataItem: Yr(a, e.index), selection: u, wheelIndex: s });
                            _ &&
                                _.forEach(function (e, n) {
                                    if ((e !== ie && (t._tempValueRep[n] = e), !u)) {
                                        var a = t._wheelMap[n],
                                            s = Or(a, e);
                                        t._constrainIndex(s, a);
                                    }
                                });
                        }
                        u && t._validate(s, e.diff > 0 ? 1 : -1),
                            c &&
                                t._tempValueRep.forEach(function (e, n) {
                                    var a = t._wheelMap[n],
                                        s = a.data ? a.data.length : 0,
                                        i = t._indexes[n],
                                        r = Or(a, e) + t._batches[n] * s;
                                    (t._activeIndexes[n] = t._lastIndexes[n] = t._indexes[n] = r), (a._offset = s !== l[n] ? r - i : 0);
                                });
                        var p = t._get(t._tempValueRep),
                            v = !t._valueEquals(d, p);
                        v || (e.click && t._live && !t._valueEquals(t.value, p)) ? t._setOrUpdate(!v) : t.forceUpdate(), t._live && h && a.closeOnTap && t.close();
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._initWheels = function () {
                    var e = this,
                        t = 0,
                        n = this.s.wheels || [];
                    (this._wheelMap = []),
                        n.forEach(function (n) {
                            n.forEach(function (n) {
                                e._initWheel(n, t), (e._wheelMap[t] = n), t++;
                            });
                        }),
                        (this._wheels = n);
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return !!e.shouldValidate && e.shouldValidate(e, t);
                }),
                (t.prototype._valueEquals = function (e, t) {
                    return this.s.valueEquality ? this.s.valueEquality(e, t) : e === t;
                }),
                (t.prototype._render = function (t, n) {
                    var a = this,
                        s = this.props || {},
                        i = this._respProps || {},
                        r = this._prevS,
                        o = !!this._touchUi && t.circular,
                        l = this._touchUi ? t.rows : i.rows || s.rows || 7;
                    if (
                        ((this._displayStyle = t.displayStyle || t.display),
                        (this._scroll3d = t.scroll3d && this._touchUi && Tn),
                        (t.itemHeight !== r.itemHeight || l !== this._rows) && ((this._rows = l), (this._lineStyle = { height: t.itemHeight + "px" }), this._scroll3d))
                    ) {
                        var c = "translateZ(" + ((t.itemHeight * l) / 2 + 3) + "px";
                        (this._overlayStyle = {}), (this._overlayStyle[Dn + "transform"] = c), (this._lineStyle[Dn + "transform"] = "translateY(-50%) " + c);
                    }
                    (t.wheels === r.wheels && o === this._circular) || ((this._batches = []), (this._shouldSetIndex = !0), (this._circular = o), this._initWheels()),
                        e.prototype._render.call(this, t, n),
                        this._shouldSetIndex && (this._setIndexes(), (this._shouldSetIndex = this._indexFromValue = !1)),
                        t.wheels !== r.wheels &&
                            r.wheels !== ie &&
                            setTimeout(function () {
                                for (var e = 0, t = a._wheelMap; e < t.length; e++) {
                                    var n = t[e];
                                    a._onWheelIndexChange({ diff: 0, index: a._indexes[n._key], wheel: n });
                                }
                            });
                }),
                (t.prototype._writeValue = function (t, n, a) {
                    return this.s.writeValue ? this.s.writeValue(t, n, a) : e.prototype._writeValue.call(this, t, n, a);
                }),
                (t.prototype._copy = function (e) {
                    return e.slice(0);
                }),
                (t.prototype._format = function (e) {
                    return this.s.formatValue ? this.s.formatValue(e) : e.join(" ");
                }),
                (t.prototype._get = function (e) {
                    return this.s.getValue ? this.s.getValue(e) : e;
                }),
                (t.prototype._parse = function (e) {
                    if (this.s.parseValue) return this.s.parseValue(e);
                    var t = [],
                        n = [],
                        a = 0;
                    return (
                        null !== e && e !== ie && (n = (e + "").split(" ")),
                        this._wheels.forEach(function (e) {
                            e.forEach(function (e) {
                                for (var s = e.data || [], i = s.length, r = Hr(s[0]), o = 0; r != n[a] && o < i; ) (r = Hr(s[o])), o++;
                                t.push(r), a++;
                            });
                        }),
                        t
                    );
                }),
                (t.prototype._validate = function (e, t) {
                    var n = this;
                    if (this.s.validate) {
                        var a = this.s.validate.call(this._el, { direction: t, index: e, values: this._tempValueRep.slice(0), wheels: this._wheelMap });
                        (this._disabled = a.disabled),
                            a.init && this._initWheels(),
                            a.indexes &&
                                a.indexes.forEach(function (e, t) {
                                    if (e !== ie) {
                                        var a = n._wheelMap[t],
                                            s = Or(a, e);
                                        n._constrainIndex(s, a);
                                    }
                                }),
                            a.valid
                                ? (this._tempValueRep = a.valid.slice(0))
                                : this._wheelMap.forEach(function (e, a) {
                                      n._tempValueRep[a] = Lr(e, n._tempValueRep[a], n._disabled && n._disabled[a], t);
                                  });
                    }
                }),
                (t.prototype._onOpen = function () {
                    (this._batches = []), (this._shouldSetIndex = !0), (this._indexFromValue = !0);
                }),
                (t.prototype._onParse = function () {
                    this._shouldSetIndex = !0;
                }),
                (t.prototype._initWheel = function (e, t) {
                    var n = this._circular;
                    (e._key = t),
                        (e._map = new Map()),
                        (e._circular = n === ie ? (e.circular === ie ? e.data && e.data.length > this._rows : e.circular) : he(n) ? n[t] : n),
                        e.data &&
                            ((e.min = e._circular ? ie : 0),
                            (e.max = e._circular ? ie : e.data.length - 1),
                            e.data.forEach(function (t, n) {
                                e._map.set(Hr(t), n);
                            }));
                }),
                (t.prototype._setIndexes = function () {
                    var e = this,
                        t = this._indexes || [];
                    (this._indexes = []),
                        (this._activeIndexes = []),
                        this._tempValueRep.forEach(function (n, a) {
                            var s = e._wheelMap[a],
                                i = s.data ? s.data.length : 0,
                                r = Or(s, n);
                            if (e.s.selectOnScroll) e._activeIndexes[a] = e._indexes[a] = r + (e._batches[a] || 0) * i;
                            else {
                                var o = r;
                                e._indexFromValue ||
                                    ((o = e._prevS.wheels !== e.s.wheels ? 0 : t[a]) !== ie &&
                                        (o =
                                            (function (e, t) {
                                                if (e.getItem && e.getIndex) return e.getIndex(Hr(e.getItem(t)));
                                                var n = (e.data || []).length,
                                                    a = t % n;
                                                return n ? (a >= 0 ? a : a + n) : 0;
                                            })(s, o) +
                                            (e._batches[a] || 0) * i)),
                                    e._constrainIndex(o, s);
                            }
                        });
                }),
                (t.prototype._constrainIndex = function (e, t) {
                    var n = t._key;
                    e !== ie && t.data ? (t.spaceAround || (e = ce(e, 0, Math.max(t.data.length - this._rows, 0))), (this._activeIndexes[n] = this._indexes[n] = e)) : (this._activeIndexes[n] = this._indexes[n] = this._lastIndexes[n] || 0);
                }),
                (t.defaults = { itemHeight: 40, rows: 5, selectOnScroll: !0, showOnClick: !0 }),
                (t._name = "Scroller"),
                t
            );
        })(Si),
        Rr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function () {
                        var e = t.s;
                        e.text === ie || e.isGroup || t._hook("onClick", { index: e.index, selected: e.selected, disabled: e.disabled });
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ji(this._el, {
                        click: !0,
                        keepFocus: !1,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function () {
                            e.s.text !== ie && e.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            e.s.text !== ie && e.setState({ hasHover: !1 });
                        },
                        onKeyDown: function (t) {
                            (t.keyCode === ni || (!e.s.multiple && t.keyCode === ti)) && e._onClick();
                        },
                        onPress: function () {
                            e.s.text !== ie && e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.s.text !== ie && e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten();
                }),
                (t.prototype._render = function (e, t) {
                    var n = e.height;
                    (this._cssClass =
                        "mbsc-scroller-wheel-" +
                        (e.isGroup ? "header" : "item") +
                        this._theme +
                        this._rtl +
                        (e.checkmark && !e.isGroup ? " mbsc-wheel-item-checkmark" : "") +
                        (e.is3d ? " mbsc-scroller-wheel-item-3d" : "") +
                        (e.scroll3d && !e.is3d ? " mbsc-scroller-wheel-item-2d" : "") +
                        (e.selected && !e.is3d ? " mbsc-selected" : "") +
                        (e.selected && e.is3d ? " mbsc-selected-3d" : "") +
                        (e.disabled ? " mbsc-disabled" : "") +
                        (e.multiple && !e.isGroup ? " mbsc-wheel-item-multi" : "") +
                        (t.hasHover ? " mbsc-hover" : "") +
                        (t.hasFocus ? " mbsc-focus" : "") +
                        (t.isActive ? " mbsc-active" : "")),
                        (this._style = { height: n + "px", lineHeight: n + "px" }),
                        (this._checkmarkClass = this._theme + this._rtl + " mbsc-wheel-checkmark" + (e.selected ? " mbsc-selected" : "")),
                        e.is3d && ((this._transform = "rotateX(" + (((e.offset - e.index) * e.angle3d) % 360) + "deg) translateZ(" + (n * e.rows) / 2 + "px)"), (this._style[Dn + "transform"] = this._transform));
                }),
                t
            );
        })(Xa);
    var zr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n;
                        if (e.renderItem && e.data !== ie) {
                            var a = e.renderItem(e.data),
                                s = _e(a) ? { __html: a } : ie;
                            n = s ? Gn("div", { dangerouslySetInnerHTML: s }) : Gn("div", null, a);
                        } else n = e.text;
                        return Gn(
                            "div",
                            {
                                "aria-disabled": e.disabled ? "true" : ie,
                                "aria-hidden": n === ie || e.is3d ? "true" : ie,
                                "aria-selected": e.selected ? "true" : ie,
                                ref: t._setEl,
                                tabIndex: e.active ? 0 : ie,
                                className: t._cssClass,
                                role: "option",
                                style: t._style,
                                onClick: t._onClick,
                            },
                            Gn("div", { dangerouslySetInnerHTML: t.textParam }),
                            e.checkmark && Gn("span", { className: t._checkmarkClass }),
                            n
                        );
                    })(e, this);
                }),
                t
            );
        })(Rr),
        Vr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onIndexChange = function (e) {
                        (e.wheel = t.s.wheel), t._hook("onIndexChange", e);
                    }),
                    (t._onItemClick = function (e) {
                        t._hook("onIndexChange", { click: !0, index: e.index, wheel: t.s.wheel, selected: e.selected });
                    }),
                    (t._onKeyDown = function (e) {
                        var n = 0;
                        e.keyCode === li ? (n = -1) : e.keyCode === di && (n = 1);
                        var a = t.s,
                            s = a.activeIndex + n,
                            i = !(s < a.minIndex || s > a.maxIndex);
                        if ((n && e.preventDefault(), n && i)) {
                            var r = a.selectOnScroll ? "onIndexChange" : "onActiveChange";
                            (t._shouldFocus = !0), t._hook(r, { diff: n, index: s, wheel: a.wheel });
                        } else e.keyCode === ti && a.multiple && t._hook("onSet", {});
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._getText = function (e) {
                    return e !== ie ? (e.display !== ie ? e.display : e) : ie;
                }),
                (t.prototype._getValue = function (e) {
                    return e ? (e.value !== ie ? e.value : e.display !== ie ? e.display : e) : e;
                }),
                (t.prototype._isActive = function (e, t, n) {
                    var a = this.s,
                        s = a.scroll3d && a.multiple ? n : !n;
                    return a.activeIndex === e.key && t && s;
                }),
                (t.prototype._isSelected = function (e) {
                    var t = this.s,
                        n = t.selectedValues,
                        a = this._getValue(e.data);
                    return t.multiple ? !(!n || !n.indexOf) && n.indexOf(a) >= 0 : t.selectOnScroll ? e.key === t.selectedIndex : a !== ie && a === n;
                }),
                (t.prototype._isDisabled = function (e) {
                    var t = this.s.disabled,
                        n = e && e.disabled,
                        a = this._getValue(e);
                    return !!(n || (t && t.get(a)));
                }),
                (t.prototype._render = function (e) {
                    var t = e.rows,
                        n = e.itemHeight,
                        a = e.wheel._key,
                        s = 2 * Te((n - 0.03 * ((n * t) / 2 + 3)) / 2);
                    (this._items = e.wheel.getItem || e.wheel.data || []),
                        (this._batchSize3d = Te(1.8 * t)),
                        (this._angle3d = 360 / (2 * this._batchSize3d)),
                        (this._style = { height: 2 * Te((t * n * (e.scroll3d ? 1.1 : 1)) / 2) + "px" }),
                        (this._itemNr = e.wheel.spaceAround ? 1 : t),
                        (this._innerStyle = { height: (e.scroll3d ? s : e.wheel.spaceAround ? n : n * t) + "px" }),
                        (this._wheelStyle = e.wheelWidth
                            ? { width: (he(e.wheelWidth) ? e.wheelWidth[a] : e.wheelWidth) + "px" }
                            : { maxWidth: (he(e.maxWheelWidth) ? e.maxWheelWidth[a] : e.maxWheelWidth) + "px", minWidth: (he(e.minWheelWidth) ? e.minWheelWidth[a] : e.minWheelWidth) + "px" }),
                        e.scroll3d && (this._innerStyle[Dn + "transform"] = "translateY(-50%) translateZ(" + ((n * t) / 2 + 3) + "px");
                }),
                (t.prototype._updated = function () {
                    if (this._shouldFocus) {
                        var e = this._el.querySelector('[tabindex="0"]');
                        e &&
                            setTimeout(function () {
                                e.focus();
                            }),
                            (this._shouldFocus = !1);
                    }
                }),
                t
            );
        })(Xa);
    var Ar,
        Wr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n,
                            a = (((n = {}).onKeyDown = t._onKeyDown), n);
                        return Gn(
                            "div",
                            c(
                                {
                                    "aria-multiselectable": e.multiple ? "true" : ie,
                                    className: "mbsc-scroller-wheel-wrapper mbsc-scroller-wheel-wrapper-" + e.wheel._key + " " + (e.wheel.cssClass || "") + (e.scroll3d ? " mbsc-scroller-wheel-wrapper-3d" : "") + t._theme + t._rtl,
                                    ref: t._setEl,
                                    role: "listbox",
                                    style: t._wheelStyle,
                                },
                                a
                            ),
                            Gn(Mr, {
                                batchSize3d: t._batchSize3d,
                                className: "mbsc-scroller-wheel" + (e.scroll3d ? " mbsc-scroller-wheel-3d" : "") + t._theme,
                                innerClass: "mbsc-scroller-wheel-cont mbsc-scroller-wheel-cont-" + e.display + (e.scroll3d ? " mbsc-scroller-wheel-cont-3d" : "") + (e.multiple ? " mbsc-scroller-wheel-multi" : "") + t._theme,
                                innerStyles: t._innerStyle,
                                items: t._items,
                                itemSize: e.itemHeight,
                                itemRenderer: function (n, a, s) {
                                    if (n !== ie) {
                                        var i = t._getText(n.data);
                                        return Gn(zr, {
                                            active: t._isActive(n, i, s),
                                            angle3d: t._angle3d,
                                            data: n.data,
                                            disabled: t._isDisabled(n.data),
                                            height: e.itemHeight,
                                            index: n.key,
                                            is3d: s,
                                            isGroup: n.data && n.data.isGroup,
                                            key: n.key,
                                            multiple: e.multiple,
                                            onClick: t._onItemClick,
                                            offset: a,
                                            checkmark: e.wheel.checkmark,
                                            renderItem: e.renderItem,
                                            rows: e.rows,
                                            rtl: e.rtl,
                                            scroll3d: e.scroll3d,
                                            selected: t._isSelected(n),
                                            text: i,
                                            theme: e.theme,
                                        });
                                    }
                                    return null;
                                },
                                itemNr: t._itemNr,
                                margin: !0,
                                maxIndex: e.maxIndex,
                                minIndex: e.minIndex,
                                onIndexChange: t._onIndexChange,
                                offset: e.wheel._offset,
                                rtl: e.rtl,
                                scroll3d: e.scroll3d,
                                scrollBar: !t._touchUi,
                                selectedIndex: e.selectedIndex,
                                snap: !0,
                                spaceAround: e.wheel.spaceAround,
                                styles: t._style,
                                visibleSize: e.rows,
                            })
                        );
                    })(e, this);
                }),
                t
            );
        })(Vr),
        Ur = new m(),
        Br = 0;
    function jr() {
        clearTimeout(Ar),
            (Ar = setTimeout(function () {
                Ur.next();
            }, 100));
    }
    function Kr(e) {
        try {
            return Fn(e, "*:-webkit-autofill");
        } catch (e) {
            return !1;
        }
    }
    var Xr = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._tag = "input"),
                (t._onClick = function () {
                    t._hidePass = !t._hidePass;
                }),
                (t._onMouseDown = function (e) {
                    t.s.tags && (t._preventFocus = !0);
                }),
                (t._onTagClear = function (e, n) {
                    if ((e.stopPropagation(), e.preventDefault(), !t.s.disabled)) {
                        var a = t.s.pickerValue.slice();
                        a.splice(n, 1), zn(t._el, Ys, a);
                    }
                }),
                (t._sizeTextArea = function () {
                    var e,
                        n,
                        a,
                        s = t._el,
                        i = t.s.rows;
                    s.offsetHeight &&
                        ((s.style.height = ""),
                        (a = s.scrollHeight - s.offsetHeight),
                        (e = s.offsetHeight + (a > 0 ? a : 0)),
                        (n = Math.round(e / 24)) > i ? ((e = 24 * i + (e - 24 * n)), (s.style.overflow = "auto")) : (s.style.overflow = ""),
                        e && (s.style.height = e + "px"));
                }),
                (t._onAutoFill = function () {
                    "floating" === t.s.labelStyle && Kr(t._el) && t.setState({ isFloatingActive: !0 });
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._change = function (e) {}),
            (t.prototype._checkFloating = function () {
                var e = this,
                    t = this._el,
                    n = this.s,
                    a = Kr(t),
                    s = this.state.hasFocus || a || !pe(this.value);
                if (t && "floating" === n.labelStyle) {
                    if ("select" === this._tag) {
                        var i = t,
                            r = i.options[0];
                        s = !!(s || i.multiple || i.value || (i.selectedIndex > -1 && r && r.label));
                    } else if (this.value === ie) {
                        s = !(!s && !t.value);
                    }
                    (this._valueChecked = !0),
                        Ee(this, function () {
                            e.setState({ isFloatingActive: s });
                        });
                }
            }),
            (t.prototype._mounted = function () {
                var e,
                    t = this,
                    n = this.s,
                    a = this._el;
                Cn(a, Ls, this._onAutoFill),
                    "textarea" === this._tag && (Cn(a, Vs, this._sizeTextArea), (this._unsubscribe = ((e = this._sizeTextArea), Br || Cn(on, Js, jr), Br++, Ur.subscribe(e)))),
                    (this._unlisten = Ji(a, {
                        keepFocus: !0,
                        onBlur: function () {
                            t.setState({ hasFocus: !1, isFloatingActive: !!a.value });
                        },
                        onChange: function (e) {
                            if ("file" === n.type) {
                                for (var a = [], s = 0, i = e.target.files; s < i.length; s++) {
                                    var r = i[s];
                                    a.push(r.name);
                                }
                                t.setState({ files: a.join(", ") });
                            }
                            n.tags && n.value === ie && n.defaultValue === ie && t.setState({ value: e.target.value }), t._checkFloating(), t._change(e.target.value), t._emit("onChange", e);
                        },
                        onFocus: function () {
                            t._preventFocus || t.setState({ hasFocus: !0, isFloatingActive: !0 }), (t._preventFocus = !1);
                        },
                        onHoverIn: function () {
                            t._disabled || t.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            t.setState({ hasHover: !1 });
                        },
                        onInput: function (e) {
                            t._change(e.target.value);
                        },
                    }));
            }),
            (t.prototype._render = function (e, t) {
                var n = !(!e.endIconSvg && !e.endIcon),
                    a = e.pickerValue,
                    s = !(!e.startIconSvg && !e.startIcon),
                    i = e.label !== ie || e.hasChildren,
                    r = e.error,
                    o = e.rtl ? "right" : "left",
                    l = e.rtl ? "left" : "right",
                    c = e.inputStyle,
                    d = e.labelStyle,
                    h = "floating" === d,
                    u = !(!h || !i || (!t.isFloatingActive && pe(e.value))),
                    m = e.disabled === ie ? t.disabled : e.disabled,
                    _ = this._prevS,
                    p = e.modelValue !== ie ? e.modelValue : e.value,
                    v = p !== ie ? p : t.value !== ie ? t.value : e.defaultValue,
                    f = this._theme + this._rtl + (r ? " mbsc-error" : "") + (m ? " mbsc-disabled" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.hasFocus && !m ? " mbsc-focus" : "");
                "file" !== e.type ||
                    n ||
                    ((e.endIconSvg =
                        '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>'),
                    (n = !0)),
                    e.tags &&
                        (pe(a) && (a = []),
                        he(a) || (a = [a]),
                        (this._tagsArray = e.pickerMap
                            ? a.map(function (t) {
                                  return e.pickerMap.get(t);
                              })
                            : pe(v)
                            ? []
                            : v.split(", "))),
                    e.passwordToggle &&
                        ((n = !0),
                        (this._passIconClass = f + " mbsc-toggle-icon mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + d : "")),
                        (this._hidePass = this._hidePass === ie ? "password" === e.type : this._hidePass)),
                    (this._hasStartIcon = s),
                    (this._hasEndIcon = n),
                    (this._hasError = r),
                    (this._disabled = m),
                    (this._value = v),
                    (this._cssClass =
                        this._className +
                        this._hb +
                        f +
                        " mbsc-form-control-wrapper mbsc-textfield-wrapper mbsc-font mbsc-textfield-wrapper-" +
                        c +
                        (m ? " mbsc-disabled" : "") +
                        (i ? " mbsc-textfield-wrapper-" + d : "") +
                        (s ? " mbsc-textfield-wrapper-has-icon-" + o + " " : "") +
                        (n ? " mbsc-textfield-wrapper-has-icon-" + l + " " : "")),
                    i &&
                        (this._labelClass =
                            f +
                            " mbsc-label mbsc-label-" +
                            d +
                            " mbsc-label-" +
                            c +
                            "-" +
                            d +
                            (s ? " mbsc-label-" + c + "-" + d + "-has-icon-" + o + " " : "") +
                            (n ? " mbsc-label-" + c + "-" + d + "-has-icon-" + l + " " : "") +
                            (h && this._animateFloating ? " mbsc-label-floating-animate" : "") +
                            (u ? " mbsc-label-floating-active" : "")),
                    (this._innerClass = f + " mbsc-textfield-inner mbsc-textfield-inner-" + c + (i ? " mbsc-textfield-inner-" + d : "")),
                    s && (this._startIconClass = f + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + o + " mbsc-textfield-icon-" + c + "-" + o + (i ? " mbsc-textfield-icon-" + d : "")),
                    n && (this._endIconClass = f + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + d : "")),
                    (this._nativeElmClass =
                        f +
                        " " +
                        (e.inputClass || "") +
                        " mbsc-textfield mbsc-textfield-" +
                        c +
                        (e.dropdown ? " mbsc-select" : "") +
                        (i ? " mbsc-textfield-" + d + " mbsc-textfield-" + c + "-" + d : "") +
                        (u ? " mbsc-textfield-floating-active" : "") +
                        (s ? " mbsc-textfield-has-icon-" + o + " mbsc-textfield-" + c + "-has-icon-" + o + (i ? " mbsc-textfield-" + c + "-" + d + "-has-icon-" + o : "") : "") +
                        (n ? " mbsc-textfield-has-icon-" + l + " mbsc-textfield-" + c + "-has-icon-" + l + (i ? " mbsc-textfield-" + c + "-" + d + "-has-icon-" + l : "") : "")),
                    ("select" === this._tag || e.dropdown) &&
                        (this._selectIconClass = "mbsc-select-icon mbsc-select-icon-" + c + this._rtl + this._theme + (i ? " mbsc-select-icon-" + d : "") + (s ? " mbsc-select-icon-" + o : "") + (n ? " mbsc-select-icon-" + l : "")),
                    ("textarea" === this._tag || e.tags) &&
                        ((this._cssClass += " mbsc-textarea-wrapper"),
                        (this._innerClass += " mbsc-textarea-inner"),
                        (this._nativeElmClass += " mbsc-textarea"),
                        "textarea" !== this._tag || (v === this._prevValue && e.inputStyle === _.inputStyle && e.labelStyle === _.labelStyle && e.rows === _.rows && e.theme === _.theme) || (this._shouldSize = !0),
                        (this._prevValue = v)),
                    e.tags && (this._innerClass += " mbsc-textfield-tags-inner"),
                    "file" === e.type && ((this._dummyElmClass = this._nativeElmClass), (this._nativeElmClass += " mbsc-textfield-file")),
                    (this._errorClass =
                        this._theme + this._rtl + " mbsc-error-message mbsc-error-message-" + c + (i ? " mbsc-error-message-" + d : "") + (s ? " mbsc-error-message-has-icon-" + o : "") + (n ? " mbsc-error-message-has-icon-" + l : "")),
                    e.notch &&
                        "outline" === c &&
                        ((this._fieldSetClass = "mbsc-textfield-fieldset" + f + (s ? " mbsc-textfield-fieldset-has-icon-" + o : "") + (n ? " mbsc-textfield-fieldset-has-icon-" + l : "")),
                        (this._legendClass = "mbsc-textfield-legend" + this._theme + (u || (i && "stacked" === d) ? " mbsc-textfield-legend-active" : ""))),
                    e.ripple && "outline" !== e.inputStyle && (this._rippleClass = "mbsc-textfield-ripple" + this._theme + (r ? " mbsc-error" : "") + (t.hasFocus ? " mbsc-textfield-ripple-active" : "")),
                    this._valueChecked && (this._animateFloating = !0);
            }),
            (t.prototype._updated = function () {
                var e = this;
                this._shouldSize &&
                    ((this._shouldSize = !1),
                    Ee(this, function () {
                        e._sizeTextArea();
                    })),
                    this._checkFloating();
            }),
            (t.prototype._destroy = function () {
                wn(this._el, Ls, this._onAutoFill),
                    wn(this._el, Vs, this._sizeTextArea),
                    this._unsubscribe &&
                        (function (e) {
                            Br--, Ur.unsubscribe(e), Br || wn(on, Js, jr);
                        })(this._unsubscribe),
                    this._unlisten && this._unlisten();
            }),
            (t.defaults = { dropdown: !1, dropdownIcon: a, hideIcon: "eye-blocked", inputStyle: "underline", labelStyle: "stacked", placeholder: "", ripple: !1, rows: 6, showIcon: "eye", type: "text" }),
            (t._name = "Input"),
            t
        );
    })(Xa);
    var Jr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._el && this._el.value;
                    },
                    set: function (e) {
                        (this._el.value = e), this._checkFloating(), "textarea" === this._tag && this._sizeTextArea();
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n, a, s) {
                        var i,
                            r = n.props;
                        r.children;
                        var o = r.dropdown;
                        r.dropdownIcon, r.endIcon, r.endIconSrc, r.endIconSvg, r.error;
                        var l = r.errorMessage,
                            h = r.hasChildren;
                        r.hideIcon,
                            r.hideIconSvg,
                            r.inputClass,
                            r.inputStyle,
                            r.label,
                            r.labelStyle,
                            r.modelValue,
                            r.notch,
                            r.passwordToggle,
                            r.pickerMap,
                            r.pickerValue,
                            r.ripple,
                            r.rows,
                            r.rtl,
                            r.showIcon,
                            r.showIconSvg,
                            r.startIcon,
                            r.startIconSrc,
                            r.startIconSvg;
                        var u = r.tags;
                        r.theme, r.themeVariant;
                        var m = r.type,
                            _ = d(r, [
                                "children",
                                "dropdown",
                                "dropdownIcon",
                                "endIcon",
                                "endIconSrc",
                                "endIconSvg",
                                "error",
                                "errorMessage",
                                "hasChildren",
                                "hideIcon",
                                "hideIconSvg",
                                "inputClass",
                                "inputStyle",
                                "label",
                                "labelStyle",
                                "modelValue",
                                "notch",
                                "passwordToggle",
                                "pickerMap",
                                "pickerValue",
                                "ripple",
                                "rows",
                                "rtl",
                                "showIcon",
                                "showIconSvg",
                                "startIcon",
                                "startIconSrc",
                                "startIconSvg",
                                "tags",
                                "theme",
                                "themeVariant",
                                "type",
                            ]),
                            p = e.label,
                            v = (((i = {}).onMouseDown = n._onMouseDown), i),
                            f = _;
                        return Gn(
                            "label",
                            c({ className: n._cssClass }, v),
                            (p || h) && Gn("span", { className: n._labelClass }, h ? "" : p),
                            Gn(
                                "span",
                                { className: n._innerClass },
                                "input" === n._tag &&
                                    Gn("input", c({}, f, { ref: n._setEl, className: n._nativeElmClass + (e.tags ? " mbsc-textfield-hidden" : ""), disabled: n._disabled, type: e.passwordToggle ? (n._hidePass ? "password" : "text") : m })),
                                "file" === m && Gn("input", { className: n._dummyElmClass, disabled: n._disabled, placeholder: e.placeholder, readOnly: !0, type: "text", value: t.files || "" }),
                                "select" === n._tag && Gn("select", c({}, f, { ref: n._setEl, className: "mbsc-select" + n._nativeElmClass, disabled: n._disabled }), a),
                                "textarea" === n._tag && Gn("textarea", c({}, f, { ref: n._setEl, className: n._nativeElmClass, disabled: n._disabled })),
                                u &&
                                    Gn(
                                        "span",
                                        { className: "mbsc-textfield-tags" + n._nativeElmClass },
                                        n._tagsArray.length
                                            ? n._tagsArray.map(function (t, a) {
                                                  return (
                                                      t &&
                                                      Gn(
                                                          "span",
                                                          { key: a, className: "mbsc-textfield-tag" + n._theme + n._rtl },
                                                          Gn("span", { className: "mbsc-textfield-tag-text" + n._theme }, t),
                                                          Gn(Vi, {
                                                              className: "mbsc-textfield-tag-clear",
                                                              onClick: function (e) {
                                                                  return n._onTagClear(e, a);
                                                              },
                                                              svg: e.clearIcon,
                                                              theme: e.theme,
                                                          })
                                                      )
                                                  );
                                              })
                                            : Gn("span", { className: "mbsc-textfield-tags-placeholder" + n._theme }, e.placeholder)
                                    ),
                                ("select" === n._tag || o) && Gn(Vi, { className: n._selectIconClass, svg: e.dropdownIcon, theme: e.theme }),
                                n._hasStartIcon && Gn(Vi, { className: n._startIconClass, name: e.startIcon, svg: e.startIconSvg, theme: e.theme }),
                                n._hasEndIcon && !e.passwordToggle && Gn(Vi, { className: n._endIconClass, name: e.endIcon, svg: e.endIconSvg, theme: e.theme }),
                                e.passwordToggle && Gn(Vi, { onClick: n._onClick, className: n._passIconClass, name: n._hidePass ? e.showIcon : e.hideIcon, svg: n._hidePass ? e.showIconSvg : e.hideIconSvg, theme: e.theme }),
                                n._hasError && Gn("span", { className: n._errorClass }, l),
                                e.notch && "outline" === e.inputStyle && Gn("fieldset", { "aria-hidden": "true", className: n._fieldSetClass }, Gn("legend", { className: n._legendClass }, p && "inline" !== e.labelStyle ? p : "&nbsp;")),
                                e.ripple && "outline" !== e.inputStyle && Gn("span", { className: n._rippleClass })
                            )
                        );
                    })(e, t, this, e.children);
                }),
                t
            );
        })(Xr),
        qr = {
            hasChildren: !0,
            parentClass: "mbsc-label",
            readAttrs: ["placeholder", "rows"],
            readProps: ["disabled", "type"],
            renderToParent: !0,
            slots: { endIcon: "end-icon", label: "label", startIcon: "start-icon" },
            before: function (e, t, n) {
                var a = e.parentNode,
                    s = rn.createElement("span");
                if ((a.insertBefore(s, e), s.appendChild(e), (t.inputClass = e.getAttribute("class") || ""), "SELECT" === e.nodeName && delete t.hasChildren, !t.label && t.hasChildren && (t.label = n[0].textContent), t.label)) {
                    var i = rn.createElement("span");
                    a.insertBefore(i, s);
                }
            },
        },
        Gr = c({}, qr, { hasValue: !0, parentClass: "mbsc-select", useOwnChildren: !0 }),
        Zr = c({}, qr, { hasValue: !0 });
    function Qr(e, t, n) {
        var a = t.inputComponent,
            s = c({ defaultValue: (e._value && e._valueText) || "", placeholder: t.placeholder, ref: e._setInput }, t.inputProps);
        t.inputComponent ||
            ((a = Jr),
            (s = c(
                {
                    "aria-expanded": !!e._isOpen,
                    "aria-haspopup": "dialog",
                    "aria-label": t.ariaLabel,
                    disabled: t.disabled,
                    dropdown: t.dropdown,
                    endIcon: t.endIcon,
                    endIconSrc: t.endIconSrc,
                    endIconSvg: t.endIconSvg,
                    error: t.error,
                    errorMessage: t.errorMessage,
                    inputStyle: t.inputStyle,
                    label: t.label,
                    labelStyle: t.labelStyle,
                    name: t.name,
                    pickerMap: t.valueMap,
                    pickerValue: e._value,
                    placeholder: t.placeholder,
                    role: "combobox",
                    rtl: t.rtl,
                    startIcon: t.startIcon,
                    startIconSrc: t.startIconSrc,
                    startIconSvg: t.startIconSvg,
                    tags: t.tagInput === ie ? t.selectMultiple : t.tagInput,
                    theme: t.theme,
                    themeVariant: t.themeVariant,
                },
                s
            )));
        var i = Gn(a, s);
        return Gn(
            Qn,
            null,
            e._showInput && i,
            Gn(
                _r,
                {
                    activeElm: t.activeElm,
                    anchor: e._anchor,
                    anchorAlign: e._anchorAlign,
                    animation: t.animation,
                    buttons: e._buttons,
                    cancelText: t.cancelText,
                    closeOnEsc: t.closeOnEsc,
                    closeOnOverlayClick: t.closeOnOverlayClick,
                    closeOnScroll: t.closeOnScroll,
                    closeText: t.closeText,
                    contentPadding: !1,
                    context: t.context,
                    cssClass: e._cssClass,
                    disableLeftRight: !0,
                    display: t.display,
                    focusElm: e._focusElm,
                    focusOnClose: t.focusOnClose,
                    focusOnOpen: !e._allowTyping,
                    focusTrap: t.focusTrap,
                    fullScreen: t.fullScreen,
                    headerText: e._headerText,
                    height: t.height,
                    isOpen: e._isOpen,
                    maxHeight: t.maxHeight,
                    maxWidth: e._maxWidth,
                    onClose: e._onPopupClose,
                    onClosed: e._onPopupClosed,
                    onKeyDown: e._onPopupKey,
                    onOpen: e._onPopupOpen,
                    onResize: e._onResize,
                    setText: t.setText,
                    showArrow: t.showArrow,
                    showOverlay: !e._allowTyping && t.showOverlay,
                    ref: e._setPopup,
                    rtl: t.rtl,
                    scrollLock: e._scrollLock,
                    theme: t.theme,
                    themeVariant: t.themeVariant,
                    touchUi: e._touchUi,
                    windowWidth: e.state.width,
                    width: t.width,
                },
                n
            )
        );
    }
    var $r = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return Qr(
                        this,
                        e,
                        (function (e, t) {
                            var n = e.renderPreContent ? e.renderPreContent(e.preContentData) : "",
                                a = e.renderInContent ? e.renderInContent(e.preContentData) : "";
                            return Gn(
                                Qn,
                                null,
                                n,
                                Gn(
                                    "div",
                                    {
                                        className:
                                            "mbsc-scroller mbsc-scroller-" +
                                            t._displayStyle +
                                            t._theme +
                                            t._rtl +
                                            (t._touchUi ? " mbsc-scroller-touch" : " mbsc-scroller-pointer") +
                                            ("inline" === e.display ? " mbsc-font " : " ") +
                                            t._className,
                                    },
                                    a,
                                    t._wheels.map(function (n, a) {
                                        return Gn(
                                            "div",
                                            { key: a, className: "mbsc-scroller-wheel-group-cont" + (e.scroll3d ? " mbsc-scroller-wheel-group-cont-3d" : "") + t._theme },
                                            e.selectOnScroll && Gn("div", { className: "mbsc-scroller-wheel-line" + t._theme, style: t._lineStyle }),
                                            Gn(
                                                "div",
                                                { className: "mbsc-flex mbsc-scroller-wheel-group" + (e.scroll3d ? " mbsc-scroller-wheel-group-3d" : "") + t._theme },
                                                Gn("div", { className: "mbsc-scroller-wheel-overlay mbsc-scroller-wheel-overlay-" + t._displayStyle + t._theme, style: t._overlayStyle }),
                                                n.map(function (n, a) {
                                                    return Gn(Wr, {
                                                        activeIndex: t._activeIndexes[n._key],
                                                        disabled: t._disabled && t._disabled[n._key],
                                                        display: t._displayStyle,
                                                        key: a,
                                                        itemHeight: e.itemHeight,
                                                        onActiveChange: t._onActiveChange,
                                                        onIndexChange: t._onWheelIndexChange,
                                                        onSet: t._onSet,
                                                        maxIndex: n.max,
                                                        maxWheelWidth: e.maxWheelWidth,
                                                        minIndex: n.min,
                                                        minWheelWidth: e.minWheelWidth,
                                                        multiple: n.multiple,
                                                        renderItem: e.renderItem,
                                                        rows: t._rows,
                                                        scroll3d: t._scroll3d,
                                                        selectedIndex: t._indexes[n._key],
                                                        selectedValues: t._tempValueRep[n._key],
                                                        selectOnScroll: e.selectOnScroll,
                                                        theme: e.theme,
                                                        touchUi: e.touchUi,
                                                        rtl: e.rtl,
                                                        wheel: n,
                                                        wheelWidth: e.wheelWidth,
                                                    });
                                                })
                                            )
                                        );
                                    })
                                )
                            );
                        })(e, this)
                    );
                }),
                t
            );
        })(Fr),
        eo = { ios: 50, material: 46, windows: 50 },
        to = ["a", "h", "i", "s", "tt"];
    function no(e, t, n, a, s, i, r, o, l, c, d, h, u, m, _, p) {
        for (var v = Rt(u, m), f = v || !Rt(h, m) ? u : Et(e, u), g = v || !Rt(h, u) ? m : Nt(e, m), y = i.a(f), b = i.a(g), x = !0, D = !0, T = !1, S = 0, C = 0, w = 0; w < n; w++) {
            var k = a[s[(N = to[w])]];
            if (k !== ie) {
                var M = x ? i[N](f) : 0,
                    E = D ? i[N](g) : r[N];
                t && 1 === w && ((M += y ? 12 : 0), (E += b ? 12 : 0), (k += a[s.a] ? 12 : 0)), (x || D) && M < k && k < E && (T = !0), k !== M && (x = !1), k !== E && (D = !1);
            }
        }
        if (!_) {
            for (w = n + 1; w < 4; w++) {
                var N;
                s[(N = to[w])] !== ie && (i[N](f) > 0 && x && (S = o[l]), i[N](g) < r[N] && D && (C = o[l]));
            }
            D && p && !C && (C = 999 !== g.getMilliseconds() ? o[l] : 0);
        }
        if (x || D || T) for (M = x && !T ? i[l](f) + S : 0, E = D && !T ? i[l](g) - C : r[l], w = M; w <= E; w += o[l]) c[d].set(w, !_);
    }
    function ao(e, t) {
        var n = new Date(e);
        return t ? Ce(+n / 864e5) : n.getMonth() + 12 * (n.getFullYear() - 1970);
    }
    function so(e) {
        return e.getFullYear() + "-" + De(e.getMonth() + 1) + "-" + De(e.getDate());
    }
    function io(e) {
        return e.getMilliseconds();
    }
    function ro(e) {
        return e.getHours() > 11 ? 1 : 0;
    }
    var oo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._preset = "date"),
                (t._innerValues = {}),
                (t._onChange = function (e) {
                    t.s.value === ie && t.setState({ value: e.value }), t._hook("onChange", e);
                }),
                (t._parseDate = function (e) {
                    var n = t.s;
                    return e || (t._innerValues = {}), t._getArray(Kt(e || n.defaultSelection || new Date(), n, t._format), !!e);
                }),
                (t._formatDate = function (e) {
                    var n = t._getDate(e);
                    return n ? qt(t._format, n, t.s) : "";
                }),
                (t._getDate = function (e) {
                    var n,
                        a,
                        s = t.s,
                        i = t._getArrayPart,
                        r = t._wheelOrder,
                        o = new Date(new Date().setHours(0, 0, 0, 0));
                    if (null === e || e === ie) return null;
                    if (r.dd !== ie) {
                        var l = e[r.dd].split("-");
                        n = new Date(l[0], l[1] - 1, l[2]);
                    }
                    r.tt !== ie && ((a = n || o), (a = new Date(a.getTime() + (e[r.tt] % 86400) * 1e3)));
                    var c = i(e, "y", n, o),
                        d = i(e, "m", n, o),
                        h = Math.min(i(e, "d", n, o), s.getMaxDayOfMonth(c, d)),
                        u = i(e, "h", a, o);
                    return s.getDate(c, d, h, t._hasAmPm && i(e, "a", a, o) ? u + 12 : u, i(e, "i", a, o), i(e, "s", a, o), i(e, "u", a, o));
                }),
                (t._validate = function (e) {
                    var n = e.direction,
                        a = e.index,
                        s = e.values,
                        i = e.wheels,
                        r = [],
                        o = t.s,
                        l = o.stepHour,
                        c = o.stepMinute,
                        d = o.stepSecond,
                        h = o.mode || t._preset,
                        u = t._wheelOrder,
                        m = t._getDatePart,
                        _ = t._max,
                        p = t._min,
                        v = Ut(o, t._getDate(s)),
                        f = o.getYear(v),
                        g = o.getMonth(v),
                        y = o.getDate(f, g - 1, 1),
                        b = o.getDate(f, g + 2, 1);
                    (a !== u.y && a !== u.m && a !== u.d && a !== u.dd && a !== ie) || ((t._valids = cs(o.valid, y, b, o, !0)), (t._invalids = cs(o.invalid, y, b, o, !0)));
                    var x = t._valids,
                        D = t._invalids,
                        T = wi(v, o, p ? +p : -1 / 0, _ ? +_ : 1 / 0, D, x, n),
                        S = t._getArray(T),
                        C = t._wheels && t._wheels[0][u.d],
                        w = m.y(T),
                        k = m.m(T),
                        M = o.getMaxDayOfMonth(w, k),
                        E = { y: p ? p.getFullYear() : -1 / 0, m: 0, d: 1, h: 0, i: 0, s: 0, a: 0, tt: 0 },
                        N = { y: _ ? _.getFullYear() : 1 / 0, m: 11, d: 31, h: Se(t._hasAmPm ? 11 : 23, l), i: Se(59, c), s: Se(59, d), a: 1, tt: 86400 },
                        I = { y: 1, m: 1, d: 1, h: l, i: c, s: d, a: 1, tt: t._timeStep },
                        L = !1,
                        H = !0,
                        Y = !0;
                    if (
                        (["dd", "y", "m", "d", "tt", "a", "h", "i", "s"].forEach(function (e) {
                            var t = E[e],
                                n = N[e],
                                a = m[e](T),
                                s = u[e];
                            if ((H && p && (t = m[e](p)), Y && _ && (n = m[e](_)), a < t && (a = t), a > n && (a = n), "dd" === e || "tt" === e || ("a" === e && s === ie) || (H && (H = a === t), Y && (Y = a === n)), s !== ie)) {
                                if (((r[s] = new Map()), "y" !== e && "dd" !== e)) for (var i = E[e]; i <= N[e]; i += I[e]) (i < t || i > n) && r[s].set(i, !0);
                                if ("d" === e && D)
                                    for (var l in D)
                                        if (!x || !x[l]) {
                                            var c = Kt(l, o),
                                                d = o.getYear(c),
                                                h = o.getMonth(c);
                                            d === w && h === k && Ci(o, c, D, x) && r[s].set(o.getDay(c), !0);
                                        }
                            }
                        }),
                        /time/i.test(h))
                    ) {
                        var O = D && D[Lt(T)],
                            P = x && x[Lt(T)];
                        to.forEach(function (e, a) {
                            var s = u[e];
                            if (s !== ie) {
                                var l = o.valid ? P : O;
                                if (l) {
                                    if (o.valid) for (var c = 0; c <= N[e]; c++) r[s].set(c, !0);
                                    for (var d = 0, h = l; d < h.length; d++) {
                                        var _ = h[d],
                                            p = _.start,
                                            v = _.end;
                                        p && v && no(o, t._hasAmPm, a, S, u, m, N, I, e, r, s, T, p, v, !!o.valid, o.exclusiveEndDates);
                                    }
                                }
                                S[s] = Lr(i[s], m[e](T), r[s], n);
                            }
                        });
                    }
                    var F = t._dateDisplay;
                    if (C && (C.data.length !== M || /DDD/.test(F))) {
                        for (var R = [], z = F.replace(/[my|]/gi, "").replace(/DDDD/, "{dddd}").replace(/DDD/, "{ddd}").replace(/DD/, "{dd}").replace(/D/, "{d}"), V = 1; V <= M; V++) {
                            var A = o.getDate(w, k, V).getDay(),
                                W = z
                                    .replace(/{dddd}/, o.dayNames[A])
                                    .replace(/{ddd}/, o.dayNamesShort[A])
                                    .replace(/{dd}/, De(V) + o.daySuffix)
                                    .replace(/{d}/, V + o.daySuffix);
                            R.push({ display: W, value: V });
                        }
                        (C.data = R), (L = !0);
                    }
                    return { disabled: r, init: L, valid: S };
                }),
                (t._shouldValidate = function (e, t) {
                    return !!((e.min && +e.min != +t.min) || (e.max && +e.max != +t.max)) || e.wheels !== t.wheels || e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone;
                }),
                (t._setScroller = function (e) {
                    t._scroller = e;
                }),
                (t._getYearValue = function (e) {
                    return { display: (/yy/i.test(t._dateDisplay) ? e : (e + "").substr(2, 2)) + t.s.yearSuffix, value: e };
                }),
                (t._getYearIndex = function (e) {
                    return +e;
                }),
                (t._getDateIndex = function (e) {
                    return ao(e, t._hasDay);
                }),
                (t._getDateItem = function (e) {
                    var n = t.s,
                        a = t._hasDay,
                        s = new Date(new Date().setHours(0, 0, 0, 0)),
                        i = a ? new Date(864e5 * e) : new Date(1970, e, 1);
                    return (
                        a && (i = new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())),
                        { disabled: a && Ci(n, i, t._invalids, t._valids), display: s.getTime() === i.getTime() ? n.todayText : qt(t._dateTemplate, i, n), value: so(i) }
                    );
                }),
                (t._getArrayPart = function (e, n, a, s) {
                    var i;
                    return t._wheelOrder[n] === ie || ((i = +e[t._wheelOrder[n]]), isNaN(i)) ? (a ? t._getDatePart[n](a) : t._innerValues[n] !== ie ? t._innerValues[n] : t._getDatePart[n](s)) : i;
                }),
                (t._getHours = function (e) {
                    var n = e.getHours();
                    return Se((n = t._hasAmPm && n >= 12 ? n - 12 : n), t.s.stepHour);
                }),
                (t._getMinutes = function (e) {
                    return Se(e.getMinutes(), t.s.stepMinute);
                }),
                (t._getSeconds = function (e) {
                    return Se(e.getSeconds(), t.s.stepSecond);
                }),
                (t._getFullTime = function (e) {
                    return Se(Te((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), t._timeStep || 1);
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype.getVal = function () {
                return this._value;
            }),
            (t.prototype.setVal = function (e) {
                (this._value = e), this.setState({ value: e });
            }),
            (t.prototype.position = function () {
                this._scroller && this._scroller.position();
            }),
            (t.prototype.isVisible = function () {
                return this._scroller && this._scroller.isVisible();
            }),
            (t.prototype._valueEquals = function (e, t) {
                return Zt(e, t, this.s);
            }),
            (t.prototype._render = function (e, t) {
                var n = !1,
                    a = this._prevS,
                    s = e.dateFormat,
                    i = e.timeFormat,
                    r = e.mode || this._preset,
                    o = "datetime" === r ? s + e.separator + i : "time" === r ? i : s;
                (this._value = e.value === ie ? t.value : e.value),
                    (this._minWheelWidth = e.minWheelWidth || ("datetime" === r ? eo[e.baseTheme || e.theme] : ie)),
                    (this._dateWheels = e.dateWheels || ("datetime" === r ? e.dateWheelFormat : s)),
                    (this._dateDisplay = e.dateWheels || e.dateDisplay),
                    (this._timeWheels = e.timeWheels || i),
                    (this._timeDisplay = this._timeWheels),
                    (this._format = o),
                    (this._hasAmPm = /h/.test(this._timeDisplay)),
                    (this._getDatePart = { y: e.getYear, m: e.getMonth, d: e.getDay, h: this._getHours, i: this._getMinutes, s: this._getSeconds, u: io, a: ro, dd: so, tt: this._getFullTime }),
                    +Kt(a.min) != +Kt(e.min) && ((n = !0), (this._min = pe(e.min) ? ie : Kt(e.min, e, o))),
                    +Kt(a.max) != +Kt(e.max) && ((n = !0), (this._max = pe(e.max) ? ie : Kt(e.max, e, o))),
                    (e.theme !== a.theme || e.mode !== a.mode || e.locale !== a.locale || e.dateWheels !== a.dateWheels || e.timeWheels !== a.timeWheels || n) && (this._wheels = this._getWheels());
            }),
            (t.prototype._getWheels = function () {
                this._wheelOrder = {};
                var e,
                    t = this.s,
                    n = t.mode || this._preset,
                    a = this._hasAmPm,
                    s = this._dateDisplay,
                    i = this._timeDisplay,
                    r = this._wheelOrder,
                    o = [],
                    l = [],
                    c = [],
                    d = 0;
                if (/date/i.test(n)) {
                    for (var h = 0, u = this._dateWheels.split(/\|/.test(this._dateWheels) ? "|" : ""); h < u.length; h++) {
                        var m = 0;
                        if ((y = u[h]).length)
                            if ((/y/i.test(y) && m++, /m/i.test(y) && m++, /d/i.test(y) && m++, m > 1 && r.dd === ie)) (r.dd = d), d++, l.push(this._getDateWheel(y)), (c = l);
                            else if (/y/i.test(y) && r.y === ie)
                                (r.y = d),
                                    d++,
                                    l.push({
                                        cssClass: "mbsc-datetime-year-wheel",
                                        getIndex: this._getYearIndex,
                                        getItem: this._getYearValue,
                                        max: this._max ? t.getYear(this._max) : ie,
                                        min: this._min ? t.getYear(this._min) : ie,
                                        spaceAround: !0,
                                    });
                            else if (/m/i.test(y) && r.m === ie) {
                                (r.m = d), (e = []), d++;
                                for (var _ = s.replace(/[dy|]/gi, "").replace(/MMMM/, "{mmmm}").replace(/MMM/, "{mmm}").replace(/MM/, "{mm}").replace(/M/, "{m}"), p = 0; p < 12; p++) {
                                    var v = _.replace(/{mmmm}/, t.monthNames[p])
                                        .replace(/{mmm}/, t.monthNamesShort[p])
                                        .replace(/{mm}/, De(p + 1) + (t.monthSuffix || ""))
                                        .replace(/{m}/, p + 1 + (t.monthSuffix || ""));
                                    e.push({ display: v, value: p });
                                }
                                l.push({ cssClass: "mbsc-datetime-month-wheel", data: e, spaceAround: !0 });
                            } else if (/d/i.test(y) && r.d === ie) {
                                (r.d = d), (e = []), d++;
                                for (p = 1; p < 32; p++) e.push({ display: (/dd/i.test(s) ? De(p) : p) + t.daySuffix, value: p });
                                l.push({ cssClass: "mbsc-datetime-day-wheel", data: e, spaceAround: !0 });
                            }
                    }
                    o.push(l);
                }
                if (/time/i.test(n)) {
                    for (var f = 0, g = this._timeWheels.split(/\|/.test(this._timeWheels) ? "|" : ""); f < g.length; f++) {
                        var y;
                        m = 0;
                        if (((y = g[f]).length && (/h/i.test(y) && m++, /m/i.test(y) && m++, /s/i.test(y) && m++, /a/i.test(y) && m++), m > 1 && r.tt === ie)) (r.tt = d), d++, c.push(this._getTimeWheel(y));
                        else if (/h/i.test(y) && r.h === ie) {
                            (e = []), (r.h = d), d++;
                            for (p = 0; p < (a ? 12 : 24); p += t.stepHour) e.push({ display: a && 0 === p ? 12 : /hh/i.test(i) ? De(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-hour-wheel", data: e, spaceAround: !0 });
                        } else if (/m/i.test(y) && r.i === ie) {
                            (e = []), (r.i = d), d++;
                            for (p = 0; p < 60; p += t.stepMinute) e.push({ display: /mm/i.test(i) ? De(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-minute-wheel", data: e, spaceAround: !0 });
                        } else if (/s/i.test(y) && r.s === ie) {
                            (e = []), (r.s = d), d++;
                            for (p = 0; p < 60; p += t.stepSecond) e.push({ display: /ss/i.test(i) ? De(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-second-wheel", data: e, spaceAround: !0 });
                        } else
                            /a/i.test(y) &&
                                r.a === ie &&
                                ((r.a = d),
                                d++,
                                c.push({
                                    cssClass: "mbsc-dt-whl-a",
                                    data: /A/.test(y)
                                        ? [
                                              { display: t.amText.toUpperCase(), value: 0 },
                                              { display: t.pmText.toUpperCase(), value: 1 },
                                          ]
                                        : [
                                              { display: t.amText, value: 0 },
                                              { display: t.pmText, value: 1 },
                                          ],
                                    spaceAround: !0,
                                }));
                    }
                    c !== l && o.push(c);
                }
                return o;
            }),
            (t.prototype._getDateWheel = function (e) {
                var t = /d/i.test(e);
                return (
                    (this._hasDay = t),
                    (this._dateTemplate = e),
                    { cssClass: "mbsc-datetime-date-wheel", getIndex: this._getDateIndex, getItem: this._getDateItem, label: "", max: this._max ? ao(so(this._max), t) : ie, min: this._min ? ao(so(this._min), t) : ie, spaceAround: !0 }
                );
            }),
            (t.prototype._getTimeWheel = function (e) {
                var t = this.s,
                    n = [],
                    a = 1;
                /s/i.test(e) ? (a = t.stepSecond) : /m/i.test(e) ? (a = 60 * t.stepMinute) : /h/i.test(e) && (a = 3600 * t.stepHour), (this._timeStep = a);
                for (var s = 0; s < 86400; s += a) {
                    var i = new Date(new Date().setHours(0, 0, 0, 0) + 1e3 * s);
                    n.push({ display: qt(e, i, t), value: s });
                }
                return { data: n, label: "", spaceAround: !0 };
            }),
            (t.prototype._getArray = function (e, t) {
                var n = [],
                    a = this._wheelOrder;
                if (null === e || e === ie) return n;
                for (var s = 0, i = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"]; s < i.length; s++) {
                    var r = i[s],
                        o = this._getDatePart[r](e);
                    a[r] !== ie && (n[a[r]] = o), t && (this._innerValues[r] = o);
                }
                return n;
            }),
            (t.defaults = c({}, Tt, { dateDisplay: "MMMMDDYYYY", dateWheelFormat: "|DDD MMM D|", stepHour: 1, stepMinute: 1, stepSecond: 1 })),
            (t._name = "Datetime"),
            t
        );
    })(Xa);
    var lo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return Gn(
                            $r,
                            {
                                disabled: e.disabled,
                                endIcon: e.endIcon,
                                endIconSrc: e.endIconSrc,
                                endIconSvg: e.endIconSvg,
                                error: e.error,
                                errorMessage: e.errorMessage,
                                inputStyle: e.inputStyle,
                                label: e.label,
                                labelStyle: e.labelStyle,
                                placeholder: e.placeholder,
                                name: e.name,
                                startIcon: e.startIcon,
                                startIconSrc: e.startIconSrc,
                                startIconSvg: e.startIconSvg,
                                anchor: e.anchor,
                                animation: e.animation,
                                buttons: e.buttons,
                                cancelText: e.cancelText,
                                clearText: e.clearText,
                                closeOnOverlayClick: e.closeOnOverlayClick,
                                context: e.context,
                                display: e.display,
                                focusOnClose: e.focusOnClose,
                                focusTrap: e.focusTrap,
                                headerText: e.headerText,
                                height: e.height,
                                setText: e.setText,
                                showArrow: e.showArrow,
                                showOverlay: e.showOverlay,
                                width: e.width,
                                circular: e.circular,
                                displayStyle: e.displayStyle,
                                formatValue: t._formatDate,
                                getValue: t._getDate,
                                itemHeight: e.itemHeight,
                                maxWheelWidth: e.maxWheelWidth,
                                minWheelWidth: t._minWheelWidth,
                                parseValue: t._parseDate,
                                ref: t._setScroller,
                                rows: e.rows,
                                rtl: e.rtl,
                                shouldValidate: t._shouldValidate,
                                showOnClick: e.showOnClick,
                                showOnFocus: e.showOnFocus,
                                theme: e.theme,
                                themeVariant: e.themeVariant,
                                touchUi: t._touchUi,
                                validate: t._validate,
                                value: t._value,
                                valueEquality: t._valueEquals,
                                wheels: t._wheels,
                                wheelWidth: e.wheelWidth,
                                onChange: t._onChange,
                            },
                            e.children
                        );
                    })(e, this);
                }),
                t
            );
        })(oo),
        co = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._preset = "datetime"), t;
            }
            return l(t, e), t;
        })(lo),
        ho = Da({}),
        uo = {};
    function mo(e, t) {
        return uo[e] || (uo[e] = { change: new m(), selectedIndex: -1 }), uo[e].change.subscribe(t);
    }
    function _o(e, t) {
        var n = uo[e];
        n && (n.change.unsubscribe(t), n.change.nr || delete uo[e]);
    }
    function po(e, t, n) {
        var a = uo[e];
        a && (n !== ie && (a.selectedIndex = n), t !== ie && (a.value = t), a.change.next(a.value));
    }
    function vo(e) {
        return uo[e] && uo[e].selectedIndex;
    }
    var fo = 1,
        go = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._id = "mbsc-segmented-group" + fo++),
                    (t._onChange = function (e, n) {
                        var a = t.s,
                            s = a.modelValue !== ie ? a.modelValue : t.value;
                        if ("multiple" === a.select) {
                            if (s !== ie) {
                                var i = (s = s || []).indexOf(n);
                                -1 !== i ? s.splice(i, 1) : s.push(n), (t.value = s.slice());
                            }
                        } else t.value = n;
                        t._change(t.value), a.onChange && a.onChange(e);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._render = function (e) {
                    (this._name = e.name === ie ? this._id : e.name),
                        (this._groupClass = "mbsc-segmented mbsc-flex " + this._className + this._theme + this._rtl + (e.color ? " mbsc-segmented-" + e.color : "") + (this.state.dragging ? " mbsc-segmented-dragging" : "")),
                        (this._groupOpt = { color: e.color, disabled: e.disabled, name: this._name, onChange: this._onChange, select: e.select, value: e.modelValue !== ie ? e.modelValue : e.value });
                }),
                (t.prototype._updated = function () {
                    this.s.drag && "multiple" !== this.s.select ? this._unlisten || this._setupDrag() : this._cleanupDrag();
                }),
                (t.prototype._destroy = function () {
                    this._cleanupDrag();
                }),
                (t.prototype._setupDrag = function () {
                    var e,
                        t,
                        n,
                        a,
                        s,
                        i,
                        r = this,
                        o = [],
                        l = [];
                    this._unlisten = Ji(this._el, {
                        onEnd: function () {
                            n && a !== s && !o[a] && r._el.querySelectorAll(".mbsc-segmented-input")[a].click();
                            (n = !1), r.setState({ dragging: !1 });
                        },
                        onMove: function (s) {
                            if (n) {
                                for (var c = Math.min(Math.max(s.endX - t, 0), e), d = 0, h = l[0]; c > h && l.length > d + 1; ) d++, (h += l[d]);
                                (d = r.s.rtl ? l.length - 1 - d : d) === a || o[d] || po(i, ie, (a = d));
                            }
                        },
                        onStart: function (c) {
                            var d = Rn(c.domEvent.target, ".mbsc-segmented-item", r._el);
                            if (d) {
                                var h = d.querySelector(".mbsc-segmented-input");
                                if (h.classList.contains("mbsc-selected")) {
                                    (o = []),
                                        Vn(r._el.querySelectorAll(".mbsc-segmented-button"), function (e) {
                                            o.push(e.classList.contains("mbsc-disabled"));
                                        }),
                                        (l = []),
                                        Vn(r._el.querySelectorAll(".mbsc-segmented-item"), function (e) {
                                            l.push(e.clientWidth);
                                        });
                                    (e = r._el.clientWidth - 30), (t = Pn(r._el).left + 15), (i = h.name), (a = vo(i)), (s = a), l.length && "radio" === h.type && ((n = !0), r.setState({ dragging: !0 }));
                                }
                            }
                        },
                    });
                }),
                (t.prototype._cleanupDrag = function () {
                    this._unlisten && (this._unlisten(), (this._unlisten = null));
                }),
                (t.defaults = { select: "single" }),
                (t._name = "SegmentedGroup"),
                t
            );
        })(Xa);
    var yo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return Gn(ho.Provider, { children: ((t = this), (n = e.children), Gn("div", { className: t._groupClass, ref: t._setEl }, n)), value: this._groupOpt });
                    var t, n;
                }),
                t
            );
        })(go),
        bo = 1,
        xo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = e.target.checked;
                        a !== t._checked && (t._change(a), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(a), n.onChange && n.onChange(e));
                    }),
                    (t._onValueChange = function (e) {
                        var n = t.s,
                            a = t._isMultiple ? he(e) && -1 !== e.indexOf(t._value) : e === t._value;
                        n.checked === ie && a !== t.state.selected ? t.setState({ selected: a }) : t.forceUpdate(), t._change(a);
                    }),
                    (t._setBox = function (e) {
                        t._box = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._groupOptions = function (e) {
                    var t = this,
                        n = e.color,
                        a = e.disabled,
                        s = e.name,
                        i = e.onChange,
                        r = e.select,
                        o = e.value,
                        l = this.s,
                        c = this.state,
                        d = this._checked,
                        h = l.modelValue !== ie ? l.modelValue === l.value : l.checked,
                        u = h !== ie ? ge(h) : c.selected === ie ? ge(l.defaultChecked) : c.selected;
                    (this._id = l.id === ie ? this._id || "mbsc-segmented-" + bo++ : l.id),
                        (this._value = l.value === ie ? this._id : l.value),
                        (this._onGroupChange = i),
                        (this._isMultiple = "multiple" === (r || l.select)),
                        (this._name = s === ie ? l.name : s),
                        (this._disabled = a === ie ? (l.disabled === ie ? c.disabled : ge(l.disabled)) : ge(a)),
                        (this._color = n === ie ? l.color : n),
                        (this._checked = o === ie ? u : this._isMultiple ? o && -1 !== o.indexOf(this._value) : o === this._value),
                        this._isMultiple ||
                            d ||
                            !this._checked ||
                            setTimeout(function () {
                                t._checked && po(t._name, t._value, t._index);
                            }),
                        (this._selectedIndex = vo(this._name)),
                        (this._cssClass =
                            "mbsc-segmented-item " +
                            this._className +
                            this._theme +
                            this._rtl +
                            (this._checked ? " mbsc-segmented-item-checked" : "") +
                            (c.hasFocus ? " mbsc-focus" : "") +
                            (this._index === this._selectedIndex || (this._index === ie && this._checked) || (this._isMultiple && this._checked) ? " mbsc-segmented-item-selected" : ""));
                }),
                (t.prototype._toggle = function (e) {
                    this.s.checked === ie && this.setState({ selected: e });
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    Cn(this._el, Os, this._onChange),
                        (this._unlisten = Ji(this._el, {
                            onBlur: function () {
                                e.setState({ hasFocus: !1 });
                            },
                            onFocus: function () {
                                e.setState({ hasFocus: !0 });
                            },
                        }));
                }),
                (t.prototype._updated = function () {
                    if ((this._name && !this._unsubscribe && (this._unsubscribe = mo(this._name, this._onValueChange)), !this._isMultiple)) {
                        var e = Rn(this._el, ".mbsc-segmented"),
                            t = -1,
                            n = -1;
                        if (e) for (var a = e.querySelectorAll('.mbsc-segmented-input[name="' + this._name + '"]'), s = 0; s < a.length; s++) a[s] === this._el && (t = s), a[s].checked && (n = s);
                        this._index !== t &&
                            -1 !== n &&
                            (function (e, t) {
                                uo[e] && (uo[e].selectedIndex = t);
                            })(this._name, n),
                            -1 !== this._selectedIndex && ((this._box.style.transform = "translateX(" + (this.s.rtl ? -1 : 1) * (this._selectedIndex - t) * 100 + "%)"), (this._animate = !0)),
                            -1 !== t && (this._index = t);
                    }
                }),
                (t.prototype._destroy = function () {
                    wn(this._el, Os, this._onChange), this._unsubscribe && (_o(this._name, this._unsubscribe), (this._unsubscribe = ie)), this._unlisten && this._unlisten();
                }),
                (t.defaults = { select: "single" }),
                (t._name = "Segmented"),
                t
            );
        })(Xa);
    var Do = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        this._toggle(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    var n = this;
                    return Gn(ho.Consumer, null, function (a) {
                        return (function (e, t, n, a, s) {
                            return (
                                n._groupOptions(s),
                                Gn(
                                    "label",
                                    { className: n._cssClass },
                                    Gn("input", {
                                        ref: n._setEl,
                                        "aria-labelledby": n._id,
                                        checked: n._checked,
                                        className: "mbsc-segmented-input mbsc-reset " + (e.inputClass || "") + n._theme + (n._checked ? " mbsc-selected" : ""),
                                        disabled: n._disabled,
                                        name: n._isMultiple ? e.name : n._name,
                                        onChange: xe,
                                        type: n._isMultiple ? "checkbox" : "radio",
                                        value: n._value,
                                    }),
                                    Gn(
                                        "div",
                                        { ref: n._setBox, className: "mbsc-segmented-selectbox" + n._theme + (n._animate ? " mbsc-segmented-selectbox-animate" : "") + (n._checked ? " mbsc-selected" : "") },
                                        Gn("div", {
                                            className: "mbsc-segmented-selectbox-inner" + n._theme + (n._index === n._selectedIndex || n._checked ? " mbsc-segmented-selectbox-inner-visible" : "") + (n._checked ? " mbsc-selected" : ""),
                                        })
                                    ),
                                    Gn(
                                        Gi,
                                        {
                                            "aria-hidden": !0,
                                            ariaLabel: e.ariaLabel,
                                            className: "mbsc-segmented-button" + (n._checked ? " mbsc-selected" : "") + (t.hasFocus ? " mbsc-focus" : ""),
                                            color: n._color,
                                            disabled: n._disabled,
                                            endIcon: e.endIcon,
                                            endIconSrc: e.endIconSrc,
                                            endIconSvg: e.endIconSvg,
                                            icon: e.icon,
                                            iconSrc: e.iconSrc,
                                            iconSvg: e.iconSvg,
                                            id: n._id,
                                            ripple: e.ripple,
                                            rtl: e.rtl,
                                            startIcon: e.startIcon,
                                            startIconSrc: e.startIconSrc,
                                            startIconSvg: e.startIconSvg,
                                            tag: "span",
                                            tabIndex: -1,
                                            theme: e.theme,
                                            themeVariant: e.themeVariant,
                                        },
                                        a
                                    )
                                )
                            );
                        })(e, t, n, e.children, a);
                    });
                }),
                t
            );
        })(xo),
        To = {
            hasChildren: !0,
            parentClass: "mbsc-segmented-button",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function (e, t) {
                (t.select = "checkbox" === e.type ? "multiple" : "single"), (t.defaultChecked = e.checked), (t.inputClass = e.getAttribute("class") || "");
                var n = e.parentNode,
                    a = n.parentNode;
                if (null === a.getAttribute("mbsc-segmented-group")) {
                    var s = rn.createElement("div");
                    s.setAttribute("mbsc-segmented-group", ""),
                        a.insertBefore(s, n),
                        s.appendChild(n),
                        Vn(a.querySelectorAll('input[name="' + e.name + '"]'), function (e) {
                            s.appendChild(e.parentNode);
                        });
                }
            },
        },
        So = { hasChildren: !0, parentClass: "mbsc-segmented" };
    var Co = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._setTime = function (e) {
                    t._hook("onChange", { value: jt(t.s, e.value) });
                }),
                (t._isDisabled = function (e) {
                    if (e) {
                        var n = Lt(jt(t.s, e)),
                            a = t._invalids && t._invalids[n],
                            s = t._valids && t._valids[n],
                            i = t.s.exclusiveEndDates;
                        if (s) {
                            for (var r = 0, o = s; r < o.length; r++) {
                                var l = o[r],
                                    c = l.end && (i ? e < +l.end : e <= +l.end);
                                if ((l.start && e >= +l.start && c) || l.allDay) return !1;
                            }
                            return !0;
                        }
                        if (a) {
                            for (var d = 0, h = a; d < h.length; d++) {
                                var u = h[d];
                                c = u.end && (i ? e < +u.end : e <= +u.end);
                                if ((u.start && e >= +u.start && c) || u.allDay) return !0;
                            }
                            return !1;
                        }
                    }
                    return !1;
                }),
                (t._onKeyDown = function (e) {
                    if (e.keyCode === ni) e.target.click(), e.preventDefault();
                }),
                (t._setCont = function (e) {
                    t._gridContEl = e && e.parentElement;
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._render = function (e, t) {
                var n = this,
                    a = this._prevS;
                this._cssClass = "mbsc-timegrid-container mbsc-font" + this._theme + this._rtl;
                var s = e.min !== a.min,
                    i = e.max !== a.max,
                    r = e.timeFormat,
                    o = (a.value && !e.value) || (e.value && +e.value !== this._value);
                s && (this._min = pe(e.min) ? ie : Kt(e.min, e, r)), i && (this._max = pe(e.max) ? ie : Kt(e.max, e, r));
                var l = Ht(e.value || jt(e)),
                    c = $t(l, 1),
                    d = this._selectedDate !== +l,
                    h = e.invalid !== a.invalid,
                    u = e.valid !== a.valid;
                (h || d) && (this._invalids = cs(e.invalid, l, c, e, !0)), (u || d) && (this._valids = cs(e.valid, l, c, e, !0)), o && (this._value = e.value && +e.value);
                var m = d || h || s || i || r !== a.timeFormat;
                if (m) {
                    this._selectedDate = +l;
                    var _ = Math.max(+l, +(this._min || -1 / 0)),
                        p = Math.min(+c, +(this._max || 1 / 0) + 1),
                        v = 36e5 * e.stepHour + 6e4 * e.stepMinute;
                    (this._timeSlots = []), (this._validTimes = []);
                    for (var f = [], g = 0, y = +l; y < +c; y += v)
                        if (p >= _ ? y >= _ && y < p : y >= _ || y < p) {
                            var b = { formattedValue: qt(r, jt(e, y), e), value: y };
                            f.push(b), 2 === g && (this._timeSlots.push(f), (f = []), (g = -1)), this._isDisabled(y) || this._validTimes.push(b), g++;
                        }
                    f.length && this._timeSlots.push(f);
                }
                if (
                    this._isDisabled(this._value) ||
                    ((o || m) &&
                        -1 ===
                            Ie(this._validTimes, function (e) {
                                return e.value === n._value;
                            }))
                ) {
                    var x = (function (e, t) {
                        if (null == t || !e.length) return null;
                        for (var n = 0; n < e.length && t >= e[n]; ) n++;
                        if (n === e.length) return e[n - 1];
                        if (0 === n) return e[0];
                        var a = e[n - 1],
                            s = e[n];
                        return t - a < s - t ? a : s;
                    })(
                        this._validTimes.map(function (e) {
                            return e.value;
                        }),
                        this._value
                    );
                    x &&
                        (clearTimeout(this._validationHandle),
                        (this._validationHandle = setTimeout(function () {
                            var e = Ne(n._validTimes, function (e) {
                                return e.value === x;
                            });
                            n._setTime(e);
                        })));
                } else m && clearTimeout(this._validationHandle);
                this._valueChanged = this._valueChanged || o;
            }),
            (t.prototype._updated = function () {
                var e = this.s.isOpen;
                if (v && this._value !== ie && (this._valueChanged || (this._isOpen !== e && e))) {
                    var t = this._lastValue !== ie,
                        n = this._gridContEl,
                        a = n.querySelector('[data-timeslot="' + this._value + '"]');
                    a &&
                        setTimeout(function () {
                            var e = a.getBoundingClientRect(),
                                s = e.top,
                                i = e.height,
                                r = n.getBoundingClientRect(),
                                o = r.top,
                                l = r.height,
                                c = Nn(n);
                            (s + i > o + l || s < o) && On(n, ie, s - o + c - 5, t);
                        }),
                        (this._valueChanged = !1),
                        (this._lastValue = this._value);
                }
                this._isOpen = e;
            }),
            (t.defaults = c({}, Tt, { stepHour: 0, stepMinute: 30 })),
            (t._name = "Timegrid"),
            t
        );
    })(Xa);
    var wo = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e) {
                return (
                    ((n = {}).onKeyDown = (t = this)._onKeyDown),
                    (a = n),
                    Gn(
                        "div",
                        { className: t._cssClass, ref: t._setCont },
                        t._timeSlots.map(function (e, n) {
                            return Gn(
                                "div",
                                { className: "mbsc-timegrid-row", key: n },
                                e.map(function (e, s) {
                                    var i = t._isDisabled(e.value);
                                    return Gn(
                                        "div",
                                        { className: "mbsc-timegrid-cell" + (i ? " mbsc-disabled" : ""), key: s },
                                        Gn("div", { dangerouslySetInnerHTML: t.textParamMulti(3 * n + s) }),
                                        Gn(
                                            "div",
                                            c(
                                                {
                                                    className: "mbsc-timegrid-item" + (t._value === e.value ? " mbsc-selected" : "") + (i ? " mbsc-disabled" : "") + t._theme,
                                                    onClick: function () {
                                                        return t._setTime(e);
                                                    },
                                                    tabIndex: i ? ie : 0,
                                                    "data-timeslot": e.value,
                                                },
                                                a
                                            ),
                                            e.formattedValue
                                        )
                                    );
                                })
                            );
                        })
                    )
                );
                var t, n, a;
            }),
            t
        );
    })(Co);
    var ko = (function (e) {
        function t(t) {
            return (ki[co._name] = co), (ki[Ir._name] = Ir), (ki[wo._name] = wo), e.call(this, t) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e) {
                return Qr(
                    this,
                    e,
                    (function (e, t, n, a) {
                        var s = t._renderTabs,
                            i = t._controls,
                            r = t._activeSelect,
                            o = t._rtl,
                            l = t._theme;
                        return Gn(
                            Qn,
                            null,
                            Gn(
                                "div",
                                { className: "mbsc-datepicker mbsc-flex-col mbsc-datepicker-" + e.display + l + ("inline" === e.display ? " " + t._className + t._hb : "") + t._controlsClass },
                                t._headerText && "inline" === e.display && Gn("div", { className: "mbsc-picker-header" + l + t._hb }, t._headerText),
                                s &&
                                    Gn(
                                        yo,
                                        { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: t._activeTab, onChange: t._changeActiveTab },
                                        i.map(function (t, n) {
                                            return Gn(Do, { key: n, rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: t.name }, t.title);
                                        })
                                    ),
                                t._renderControls &&
                                    Gn(
                                        "div",
                                        { className: "mbsc-range-control-wrapper" + l },
                                        Gn(
                                            yo,
                                            { theme: e.theme, themeVariant: e.themeVariant, rtl: e.rtl, value: r, onChange: t._changeActiveSelect },
                                            Gn(
                                                Do,
                                                { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: "start", className: "mbsc-range-start" + (t._tempStartText ? " mbsc-range-value-nonempty" : "") },
                                                Gn("div", { className: "mbsc-range-control-label" + l + o + ("start" === r ? " active" : "") }, e.rangeStartLabel),
                                                Gn(
                                                    "div",
                                                    { className: "mbsc-range-control-value" + l + o + ("start" === r ? " active" : "") + (t._tempStartText ? "" : " mbsc-range-control-text-empty") },
                                                    t._tempStartText || e.rangeStartHelp
                                                ),
                                                "start" === r && t._tempStartText && Gn(Vi, { className: "mbsc-range-label-clear" + o, onClick: t._clearStart, svg: e.clearIcon, theme: e.theme })
                                            ),
                                            Gn(
                                                Do,
                                                { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: "end", className: "mbsc-range-end" + (t._tempEndText ? " mbsc-range-value-nonempty" : "") },
                                                Gn("div", { className: "mbsc-range-control-label" + l + o + ("end" === r ? " active" : "") }, e.rangeEndLabel),
                                                Gn("div", { className: "mbsc-range-control-value" + l + o + ("end" === r ? " active" : "") + (t._tempEndText ? "" : " mbsc-range-control-text-empty") }, t._tempEndText || e.rangeEndHelp),
                                                "end" === r && t._tempEndText && Gn(Vi, { className: "mbsc-range-label-clear" + o, onClick: t._clearEnd, svg: e.clearIcon, theme: e.theme })
                                            )
                                        )
                                    ),
                                Gn(
                                    "div",
                                    { className: "mbsc-datepicker-tab-wrapper mbsc-flex mbsc-flex-1-1" + l, ref: t._setWrapper },
                                    i.map(function (e, n) {
                                        var r = e.options;
                                        return (
                                            a && ((r.renderCalendarHeader = a.header), (r.renderDay = a.day), (r.renderDayContent = a.dayContent)),
                                            Gn(
                                                "div",
                                                {
                                                    key: n,
                                                    className:
                                                        "mbsc-flex mbsc-datepicker-tab mbsc-datepicker-tab-" +
                                                        e.name +
                                                        l +
                                                        ((s && e.name === t._activeTab) || !s ? " mbsc-datepicker-tab-active" : "") +
                                                        (s && "time" === e.name ? " mbsc-datepicker-time-modal" : "") +
                                                        (s || 1 === i.length ? " mbsc-datepicker-tab-expand mbsc-flex-1-1" : ""),
                                                },
                                                Gn(e.Component, c({}, r))
                                            )
                                        );
                                    })
                                )
                            ),
                            n
                        );
                    })(e, this, e.children)
                );
            }),
            t
        );
    })(Hi);
    function Mo(e) {
        return _e(e) ? rn.querySelector(e) : e;
    }
    var Eo,
        No = {
            before: function (e, t) {
                var n = t.select,
                    a = t.startInput,
                    s = t.endInput;
                if ("range" === n && a && s) {
                    var i = Mo(a),
                        r = Mo(s),
                        o = i && i.value,
                        l = r && r.value;
                    o && l && (t.defaultValue = o + Mi + l);
                } else t.defaultValue = e.value;
                t.element = e;
            },
        };
    function Io(e, t) {
        return function (n, a) {
            var s = {};
            if (_e(n)) {
                var i,
                    r = rn.querySelectorAll(n);
                return (
                    Vn(r, function (n) {
                        var r = Ma(e, n, a, t);
                        (s[n.id] = r), i || (i = r);
                    }),
                    1 === r.length ? i : s
                );
            }
            return Ma(e, n, a, t);
        };
    }
    function Lo(e) {
        return Eo || (Eo = Yo.luxon.DateTime.local().zoneName), e && "local" !== e ? e : Eo;
    }
    v &&
        (rn.addEventListener("DOMContentLoaded", function () {
            Na(rn);
        }),
        rn.addEventListener("mbsc-enhance", function (e) {
            Na(e.target);
        }));
    var Ho = (function () {
            function e(e, t) {
                void 0 === t && (t = "utc"), (this._mbsc = !0), (t = Lo(t));
                var n = Yo.luxon.DateTime,
                    a = { zone: t };
                if (((this.zone = t), ve(e))) this.dt = n.utc().setZone(t);
                else if (At(e) || me(e)) this.dt = n.fromMillis(+e, a);
                else if (_e(e)) this.dt = n.fromISO(e, a);
                else if (he(e)) {
                    for (var s = ["year", "month", "day", "hour", "minute", "second", "millisecond"], i = {}, r = 0; r < e.length && r < 7; r++) i[s[r]] = e[r] + (1 === r ? 1 : 0);
                    (Yo.version =
                        Yo.version ||
                        (function (e) {
                            var t = e.fromObject.toString().trim();
                            return /^(function )?\w*\(\w+\)/.test(t) ? 1 : 2;
                        })(n)),
                        1 === Yo.version ? (this.dt = n.fromObject(c({}, i, a))) : (this.dt = n.fromObject(i, a));
                }
            }
            return (
                (e.prototype.clone = function () {
                    return new e(this, this.zone);
                }),
                (e.prototype.createDate = function (e, t, n, a, s, i, r) {
                    return Yo.createDate({ displayTimezone: this.zone }, e, t, n, a, s, i, r);
                }),
                (e.prototype[Symbol.toPrimitive] = function (e) {
                    return this.dt.toJSDate()[Symbol.toPrimitive](e);
                }),
                (e.prototype.toDateString = function () {
                    return this.dt.toFormat("ccc MMM dd yyyy");
                }),
                (e.prototype.toISOString = function () {
                    return this.dt.toISO();
                }),
                (e.prototype.toJSON = function () {
                    return this.dt.toISO();
                }),
                (e.prototype.valueOf = function () {
                    return this.dt.valueOf();
                }),
                (e.prototype.getDate = function () {
                    return this.dt.day;
                }),
                (e.prototype.getDay = function () {
                    return this.dt.weekday % 7;
                }),
                (e.prototype.getFullYear = function () {
                    return this.dt.year;
                }),
                (e.prototype.getHours = function () {
                    return this.dt.hour;
                }),
                (e.prototype.getMilliseconds = function () {
                    return this.dt.millisecond;
                }),
                (e.prototype.getMinutes = function () {
                    return this.dt.minute;
                }),
                (e.prototype.getMonth = function () {
                    return this.dt.month - 1;
                }),
                (e.prototype.getSeconds = function () {
                    return this.dt.second;
                }),
                (e.prototype.getTime = function () {
                    return this.valueOf();
                }),
                (e.prototype.getTimezoneOffset = function () {
                    return -this.dt.offset;
                }),
                (e.prototype.getUTCDate = function () {
                    return this.dt.toUTC().day;
                }),
                (e.prototype.getUTCDay = function () {
                    return this.dt.toUTC().weekday % 7;
                }),
                (e.prototype.getUTCFullYear = function () {
                    return this.dt.toUTC().year;
                }),
                (e.prototype.getUTCHours = function () {
                    return this.dt.toUTC().hour;
                }),
                (e.prototype.getUTCMilliseconds = function () {
                    return this.dt.toUTC().millisecond;
                }),
                (e.prototype.getUTCMinutes = function () {
                    return this.dt.toUTC().minute;
                }),
                (e.prototype.getUTCMonth = function () {
                    return this.dt.toUTC().month - 1;
                }),
                (e.prototype.getUTCSeconds = function () {
                    return this.dt.toUTC().second;
                }),
                (e.prototype.setMilliseconds = function (e) {
                    return this.setter({ millisecond: e });
                }),
                (e.prototype.setSeconds = function (e, t) {
                    return this.setter({ second: e, millisecond: t });
                }),
                (e.prototype.setMinutes = function (e, t, n) {
                    return this.setter({ minute: e, second: t, millisecond: n });
                }),
                (e.prototype.setHours = function (e, t, n, a) {
                    return this.setter({ hour: e, minute: t, second: n, millisecond: a });
                }),
                (e.prototype.setDate = function (e) {
                    return this.setter({ day: e });
                }),
                (e.prototype.setMonth = function (e, t) {
                    return e++, this.setter({ month: e, day: t });
                }),
                (e.prototype.setFullYear = function (e, t, n) {
                    return this.setter({ year: e, month: t, day: n });
                }),
                (e.prototype.setTime = function (e) {
                    return (this.dt = Yo.luxon.DateTime.fromMillis(e)), this.dt.valueOf();
                }),
                (e.prototype.setTimezone = function (e) {
                    (e = Lo(e)), (this.zone = e), (this.dt = this.dt.setZone(e));
                }),
                (e.prototype.setUTCMilliseconds = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCSeconds = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCMinutes = function (e, t, n) {
                    return 0;
                }),
                (e.prototype.setUTCHours = function (e, t, n, a) {
                    return 0;
                }),
                (e.prototype.setUTCDate = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCMonth = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCFullYear = function (e, t, n) {
                    return 0;
                }),
                (e.prototype.toUTCString = function () {
                    return "";
                }),
                (e.prototype.toTimeString = function () {
                    return "";
                }),
                (e.prototype.toLocaleDateString = function () {
                    return "";
                }),
                (e.prototype.toLocaleTimeString = function () {
                    return "";
                }),
                (e.prototype.setter = function (e) {
                    return (this.dt = this.dt.set(e)), this.dt.valueOf();
                }),
                e
            );
        })(),
        Yo = {
            luxon: ie,
            version: ie,
            parse: function (e, t) {
                return new Ho(e, t.dataTimezone || t.displayTimezone);
            },
            createDate: function (e, t, n, a, s, i, r, o) {
                var l = e.displayTimezone;
                return fe(t) || _e(t) || ve(n) ? new Ho(t, l) : new Ho([t || 1970, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0], l);
            },
        };
    function Oo(e) {
        return e && "local" !== e ? e : Fo.moment.tz.guess();
    }
    var Po = (function () {
            function e(e, t) {
                (this._mbsc = !0), (this.timezone = Oo(t)), this.init(e);
            }
            return (
                (e.prototype.clone = function () {
                    return new e(this, this.timezone);
                }),
                (e.prototype.createDate = function (e, t, n, a, s, i, r) {
                    return Fo.createDate({ displayTimezone: this.timezone }, e, t, n, a, s, i, r);
                }),
                (e.prototype[Symbol.toPrimitive] = function (e) {
                    return this.m.toDate()[Symbol.toPrimitive](e);
                }),
                (e.prototype.toDateString = function () {
                    return this.m.format("ddd MMM DD YYYY");
                }),
                (e.prototype.toISOString = function () {
                    return this.m.toISOString(!0);
                }),
                (e.prototype.toJSON = function () {
                    return this.m.toISOString();
                }),
                (e.prototype.valueOf = function () {
                    return this.m.valueOf();
                }),
                (e.prototype.getDate = function () {
                    return this.m.date();
                }),
                (e.prototype.getDay = function () {
                    return this.m.day();
                }),
                (e.prototype.getFullYear = function () {
                    return this.m.year();
                }),
                (e.prototype.getHours = function () {
                    return this.m.hours();
                }),
                (e.prototype.getMilliseconds = function () {
                    return this.m.milliseconds();
                }),
                (e.prototype.getMinutes = function () {
                    return this.m.minutes();
                }),
                (e.prototype.getMonth = function () {
                    return this.m.month();
                }),
                (e.prototype.getSeconds = function () {
                    return this.m.seconds();
                }),
                (e.prototype.getTime = function () {
                    return this.m.valueOf();
                }),
                (e.prototype.getTimezoneOffset = function () {
                    return -this.m.utcOffset();
                }),
                (e.prototype.getUTCDate = function () {
                    return this.utc().date();
                }),
                (e.prototype.getUTCDay = function () {
                    return this.utc().day();
                }),
                (e.prototype.getUTCFullYear = function () {
                    return this.utc().year();
                }),
                (e.prototype.getUTCHours = function () {
                    return this.utc().hours();
                }),
                (e.prototype.getUTCMilliseconds = function () {
                    return this.utc().milliseconds();
                }),
                (e.prototype.getUTCMinutes = function () {
                    return this.utc().minutes();
                }),
                (e.prototype.getUTCMonth = function () {
                    return this.utc().month();
                }),
                (e.prototype.getUTCSeconds = function () {
                    return this.utc().seconds();
                }),
                (e.prototype.setMilliseconds = function (e) {
                    return +this.m.set({ millisecond: e });
                }),
                (e.prototype.setSeconds = function (e, t) {
                    return +this.m.set({ seconds: e, milliseconds: t });
                }),
                (e.prototype.setMinutes = function (e, t, n) {
                    return +this.m.set({ minutes: e, seconds: t, milliseconds: n });
                }),
                (e.prototype.setHours = function (e, t, n, a) {
                    return +this.m.set({ hours: e, minutes: t, seconds: n, milliseconds: a });
                }),
                (e.prototype.setDate = function (e) {
                    return +this.m.set({ date: e });
                }),
                (e.prototype.setMonth = function (e, t) {
                    return +this.m.set({ month: e, date: t });
                }),
                (e.prototype.setFullYear = function (e, t, n) {
                    return +this.m.set({ year: e, month: t, date: n });
                }),
                (e.prototype.setTime = function (e) {
                    return this.init(e), this.m.valueOf();
                }),
                (e.prototype.setTimezone = function (e) {
                    (this.timezone = Oo(e)), this.m.tz(this.timezone);
                }),
                (e.prototype.setUTCMilliseconds = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCSeconds = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCMinutes = function (e, t, n) {
                    return 0;
                }),
                (e.prototype.setUTCHours = function (e, t, n, a) {
                    return 0;
                }),
                (e.prototype.setUTCDate = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCMonth = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCFullYear = function (e, t, n) {
                    return 0;
                }),
                (e.prototype.toUTCString = function () {
                    return "";
                }),
                (e.prototype.toTimeString = function () {
                    return "";
                }),
                (e.prototype.toLocaleDateString = function () {
                    return "";
                }),
                (e.prototype.toLocaleTimeString = function () {
                    return "";
                }),
                (e.prototype.init = function (e) {
                    var t = Fo.moment.tz,
                        n = ve(e) || _e(e) || me(e) || he(e) ? e : +e,
                        a = _e(e) && Ct.test(e);
                    this.m = a ? t(n, "HH:mm:ss", this.timezone) : t(n, this.timezone);
                }),
                (e.prototype.utc = function () {
                    return this.m.clone().utc();
                }),
                e
            );
        })(),
        Fo = {
            moment: ie,
            parse: function (e, t) {
                return new Po(e, t.dataTimezone || t.displayTimezone);
            },
            createDate: function (e, t, n, a, s, i, r, o) {
                var l = e.displayTimezone;
                return fe(t) || _e(t) || ve(n) ? new Po(t, l) : new Po([t || 1970, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0], l);
            },
        },
        Ro = ((ir._selector = "[mbsc-calendar-next]"), or),
        zo = ((sr._selector = "[mbsc-calendar-prev]"), ir),
        Vo = ((rr._selector = "[mbsc-calendar-today]"), sr),
        Ao = ((or._selector = "[mbsc-calendar-nav]"), rr),
        Wo = Io(zo),
        Uo = Io(Vo),
        Bo = Io(Ao),
        jo = Io(Ro),
        Ko = Io(ko, No),
        Xo = ", ",
        Jo = "group_0";
    var qo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._options = []),
                (t._selectMap = new Map()),
                (t._onFilterChange = function (e) {
                    var n = e.target.value;
                    clearTimeout(t._debounce),
                        (t._filterInput.value = n),
                        (t._debounce = setTimeout(function () {
                            t._filter(n);
                        }, 300));
                }),
                (t._onFilterClear = function () {
                    var e = t._filterInput;
                    e && (e.value = ""), t._filter("");
                }),
                (t._onResize = function (e) {
                    t.setState({ width: e.windowWidth });
                }),
                (t._onChange = function (e) {
                    var n = e.value;
                    (t._parsedValue = n), t._saveSelected(n), t._change(n), t._hook("onChange", e);
                }),
                (t._onClose = function (e) {
                    t._hook("onClose", e),
                        t._filterText &&
                            setTimeout(function () {
                                return t._onFilterClear();
                            }, 100);
                }),
                (t._onWheelMove = function (e) {
                    var n = e.wheelIndex,
                        a = e.selection,
                        s = e.dataItem;
                    if (!t._selectOnScroll && !a && 1 === n) {
                        var i = Ne(t._options, function (e) {
                            return e.value === s.value;
                        });
                        return [s.isGroup ? s.value : i.group];
                    }
                    return ie;
                }),
                (t._shouldValidate = function (e, n) {
                    var a = e.selectMultiple !== n.selectMultiple || (!e.filter && e.data !== n.data) || t._groupChanged;
                    return (t._groupChanged = !1), a;
                }),
                (t._writeValue = function (e, n, a) {
                    var s = e.value;
                    if (((e.value = n), t._isSelect)) {
                        he(a) || (a = [a]);
                        for (var i = t.s.selectElement, r = i.options, o = !1, l = 0; l < r.length; l++) {
                            var c = r[l],
                                d = c.selected;
                            (c.selected = a.indexOf(c.value) > -1), d !== c.selected && (o = !0);
                        }
                        return o && zn(i, Ys), o;
                    }
                    return s !== n;
                }),
                (t._format = function (e) {
                    var n = e[t.s.showGroupWheel ? 1 : 0],
                        a = t.s.selectMultiple ? n : [n];
                    return (
                        (a.map &&
                            a.map(function (e) {
                                return t._map ? t._map.get(e) : ie;
                            })) ||
                        []
                    ).join(Xo);
                }),
                (t._parse = function (e) {
                    var n,
                        a = t._map,
                        s = t._reMap,
                        i = t.s.selectMultiple,
                        r = t.s.defaultSelection,
                        o = i ? (r ? (r.length !== ie ? r : r.slice()) : []) : r !== ie ? r : null;
                    if (((t._parsedValue = e), a))
                        if (i && !pe(e)) {
                            var l = [];
                            if (e.length === ie) l.push(e);
                            else if (_e(e))
                                for (var c = 0, d = e.split(Xo); c < d.length; c++) {
                                    var h = d[c],
                                        u = s.get(h);
                                    u !== ie && l.push(u);
                                }
                            else
                                for (var m = 0, _ = e; m < _.length; m++) {
                                    var p = _[m];
                                    a.has(p) && l.push(p);
                                }
                            n = l;
                        } else a.has(e) ? (n = e) : _e(e) && s.has(e) && (n = s.get(e));
                    if ((n === ie && (n = o), t.s.showGroupWheel)) {
                        var v = i ? n[0] : n,
                            f = Ne(t._options, function (e) {
                                return e.value === v;
                            });
                        return [f && f.group, n];
                    }
                    return [n];
                }),
                (t._get = function (e) {
                    var n = e[t.s.showGroupWheel ? 1 : 0];
                    return t.s.selectMultiple ? n || [] : n;
                }),
                (t._valueEquals = function (e, n) {
                    return t.s.selectMultiple ? Me(e || [], n || []) : e === n;
                }),
                (t._validate = function (e) {
                    var n = e.values,
                        a = e.direction,
                        s = e.wheels,
                        i = e.index,
                        r = t._disabled,
                        o = t._selectOnScroll,
                        l = t.s.selectMultiple,
                        c = t.s.showGroupWheel,
                        d = c ? [t._disabledGroups, r] : [r],
                        h = c ? 1 : 0,
                        u = t._get(n),
                        m = { disabled: d };
                    if (i === h || i === ie)
                        if (l) {
                            var _ = [];
                            u.forEach(function (e) {
                                r.get(e) || _.push(e);
                            }),
                                (m.valid = t._parse(_)),
                                i !== ie && (m.valid[0] = n[0]);
                        } else {
                            if (pe(u) && !o) return (m.valid = c ? [null, null] : [null]), m;
                            var p = Lr(s[h], n[h], r, a);
                            if (c) {
                                var v = Ne(t._options, function (e) {
                                    return e.value === p;
                                });
                                m.valid = [v.group, p];
                            } else m.valid = [p];
                        }
                    else {
                        var f = Lr(s[0], n[0], d[0], a),
                            g = Ne(t._options, function (e) {
                                return !(e.group !== f || (o && r.get(e.value)));
                            }),
                            y = t._touchUi || g.group === ie ? g.value : g.group;
                        if (o) m.valid = [f, y];
                        else {
                            m.valid = [f, n[1]];
                            var b = l ? [y] : y,
                                x = t._touchUi ? f : ie;
                            m.indexes = [x, b];
                        }
                    }
                    return m;
                }),
                (t._setScroller = function (e) {
                    t._scroller = e;
                }),
                (t._setInput = function (e) {
                    t._filterInput = e && e.nativeElement;
                }),
                (t._saveSelected = function (e) {
                    if (t.s.selectMultiple) {
                        var n = new Map();
                        Vn(e, function (e) {
                            var a = t._map.get(e);
                            n.set(e, a);
                        }),
                            (t._selectMap = n);
                    }
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._change = function (e) {}),
            (t.prototype.reloadOptionElements = function () {
                var e = this;
                (this._optionsReloaded = !0),
                    this._setOptionsFromElm(),
                    setTimeout(function () {
                        e.forceUpdate();
                    });
            }),
            (t.prototype.setVal = function (e) {
                this._proxy("setVal", [e]);
            }),
            (t.prototype.getVal = function () {
                return pe(this._parsedValue) ? this._parsedValue : this._proxy("getVal");
            }),
            (t.prototype.setTempVal = function (e) {
                this._proxy("setTempVal", [e]);
            }),
            (t.prototype.getTempVal = function () {
                return this._proxy("getTempVal");
            }),
            (t.prototype.open = function () {
                this._proxy("open");
            }),
            (t.prototype.close = function () {
                this._proxy("close");
            }),
            (t.prototype._render = function (e) {
                var t = this._prevS,
                    n = this._touchUi && (!e.selectMultiple || "ios" === (e.baseTheme || e.theme)),
                    a = this._touchUi && !e.selectMultiple,
                    s = e.element !== t.element || e.selectElement !== t.selectElement,
                    i = e.data !== t.data,
                    r = i || this._optionsReloaded,
                    o = e.placeholder,
                    l = e.display !== t.display || o !== t.placeholder || a !== this._selectOnScroll,
                    c = r || s || e.invalid !== t.invalid || this._selectOnScroll !== a;
                if (
                    ((this._selectOnScroll = a),
                    e.showGroupWheel !== t.showGroupWheel && (this._groupChanged = !0),
                    (s || l) && ((this._isSelect = e.selectElement !== ie), this._isSelect ? this._setOptionsFromElm() : e.element || (this._options = [])),
                    (i || l) && e.data && this._createOptionList(e.data),
                    c &&
                        ((this._disabled = (function (e, t) {
                            var n = new Map();
                            return (
                                e &&
                                    e.forEach(function (e) {
                                        e.disabled && n.set(e.value, !0);
                                    }),
                                t &&
                                    t.forEach(function (e) {
                                        n.set(e, !0);
                                    }),
                                n
                            );
                        })(this._options, e.invalid)),
                        (this._disabledGroups = (function (e, t) {
                            var n = new Map();
                            return (
                                t &&
                                    t.forEach(function (t) {
                                        var a = t.group,
                                            s = t.value;
                                        a && (n.has(a) || n.set(a, !0), e.get(s) || n.set(a, !1));
                                    }),
                                n
                            );
                        })(this._disabled, a ? this._options : ie))),
                    (c || n !== this._spaceAround || this._groupChanged || e.filter !== t.filter || e.selectMultiple !== t.selectMultiple) && this._createWheels(this._filterText, n),
                    r || e.filter !== t.filter || e.touchUi !== t.touchUi || e.rows !== t.rows)
                ) {
                    var d = e.filter ? 1 / 0 : this._wheels[0][e.showGroupWheel ? 1 : 0].data.length,
                        h = (this._respProps || {}).rows,
                        u = this.props.rows,
                        m = this._touchUi ? e.rows : Math.min(h || u || 7, d);
                    this._rows = u || m;
                }
                (this._groupChanged || e.wheelWidth !== t.wheelWidth || e.filter !== t.filter) && (this._wheelWidth = e.wheelWidth || (e.filter ? (e.showGroupWheel ? [150, 250] : 400) : ie)),
                    (this._spaceAround = n),
                    (this._optionsReloaded = !1);
            }),
            (t.prototype._createOptionList = function (e) {
                var t = this.s,
                    n = t.placeholder,
                    a = [],
                    s = new Map(),
                    i = new Map();
                this._selectMap.forEach(function (e, t) {
                    s.set(t, e);
                });
                var r = !1,
                    o = function (e, n) {
                        (e && e.value !== ie) || (e = { text: e, value: e }), pe(e.value) && (r = !0), t.showGroupWheel && e.group === ie && (e.group = Jo), s.set(e.value, e.text), i.set(e.text, e.value), a.splice(n, 0, e);
                    };
                e.forEach(o), "inline" === t.display && this._selectOnScroll && n && !r && o({ value: "", text: n }, 0), (this._map = s), (this._reMap = i), (this._options = a);
            }),
            (t.prototype._proxy = function (e, t) {
                var n = this._inst || this._scroller;
                if (n) return n[e].apply(n, t);
            }),
            (t.prototype._createWheels = function (e, t) {
                var n = this,
                    a = this.s,
                    s = a.selectMultiple,
                    i =
                        a.filter && e
                            ? (function (e, t) {
                                  if (!t) return e;
                                  var n = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                                      a = new RegExp(n, "i");
                                  return e.filter(function (e) {
                                      return a.test(e.text);
                                  });
                              })(this._options, e)
                            : this._options,
                    r = [],
                    o = [],
                    l = new Map();
                i.forEach(function (e) {
                    var t = e.group,
                        a = t && t !== Jo ? t : "",
                        s = l.get(a),
                        i = { display: e.text, value: e.value, data: e, disabled: n._disabled.get(e.value) };
                    s ? s.push(i) : l.set(a, [i]);
                });
                var c = l.get("");
                c && (r.push.apply(r, c), this._selectOnScroll && o.push({ display: "", value: Jo })),
                    l.forEach(function (e, t) {
                        t && (r.push({ display: t, isGroup: !0, value: t }), r.push.apply(r, e), o.push({ display: t, value: t }), n._disabled.set(t, !0));
                    });
                var d = { checkmark: !0, circular: !1, closeOnTap: !s, data: r, multiple: s, spaceAround: t },
                    h = { checkmark: !1, circular: !1, cssClass: "mbsc-select-group-wheel" + (s ? " mbsc-select-group-wheel-multi" : ""), data: o, multiple: !1, spaceAround: t };
                (this._noResults = a.filter && !i.length), (this._wheels = a.showGroupWheel ? [[h, d]] : [[d]]);
            }),
            (t.prototype._setOptionsFromElm = function () {
                for (var e = this.s.selectElement, t = kn(e), n = e.options, a = [], s = !1, i = !1, r = 0; r < n.length; r++) {
                    var o = n[r],
                        l = o.parentElement,
                        c = "optgroup" === l.nodeName.toLowerCase() ? l.label : ie;
                    "" !== o.value ? a.push({ disabled: o.disabled, group: c, text: o.text, value: o.value }) : (s = !0), o.defaultSelected && (i = !0);
                }
                !s && t && (e.insertBefore(t.createElement("option"), e.childNodes[0] || null), i || (e.value = "")), this._createOptionList(a);
            }),
            (t.prototype._filter = function (e) {
                !1 !== this._hook("onFilter", { filterText: e }) && ((this._filterText = e), this._createWheels(e, this._spaceAround)), this.forceUpdate();
            }),
            (t.defaults = c({}, Si.defaults, { dropdown: !0, filterEmptyText: "No results", filterPlaceholderText: "Search", rows: 5 })),
            (t._name = "Select"),
            t
        );
    })(Xa);
    function Go(e) {
        var t = e.s;
        return Gn(
            "div",
            { className: "mbsc-select-filter-cont" + e._theme + e._rtl },
            Gn(Jr, {
                ref: e._setInput,
                autoComplete: "off",
                className: "mbsc-select-filter",
                inputClass: "mbsc-select-filter-input",
                placeholder: t.filterPlaceholderText,
                onInput: e._onFilterChange,
                theme: t.theme,
                themeVariant: t.themeVariant,
                rtl: t.rtl,
                inputStyle: "box",
            }),
            e._filterText ? Gn(Vi, { className: "mbsc-select-filter-clear" + e._rtl, onClick: e._onFilterClear, svg: t.clearIcon, theme: t.theme }) : null
        );
    }
    function Zo(e) {
        return e._noResults ? Gn("div", { className: "mbsc-select-empty-text mbsc-flex" + e._theme }, e.s.filterEmptyText) : null;
    }
    var Qo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._filterRenderer = function () {
                        return Go(t);
                    }),
                    (t._filterEmptyRenderer = function () {
                        return Zo(t);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n, a) {
                        return Gn(
                            $r,
                            {
                                ariaLabel: e.ariaLabel,
                                activeElm: e.filter ? ".mbsc-select-filter-input" : ie,
                                anchor: e.anchor,
                                animation: e.animation,
                                buttons: e.buttons,
                                cancelText: e.cancelText,
                                circular: e.circular,
                                className: (e.cssClass || "") + (t._noResults ? " mbsc-select-empty" : "") + " mbsc-select-scroller mbsc-select-scroller-" + e.display,
                                clearText: e.clearText,
                                closeOnEsc: e.closeOnEsc,
                                closeOnOverlayClick: e.closeOnOverlayClick,
                                closeText: e.closeText,
                                context: e.context,
                                defaultValue: e.defaultValue,
                                disabled: e.disabled,
                                display: e.display,
                                dropdown: e.dropdown,
                                element: e.element,
                                endIcon: e.endIcon,
                                endIconSrc: e.endIconSrc,
                                endIconSvg: e.endIconSvg,
                                error: e.error,
                                errorMessage: e.errorMessage,
                                focusOnClose: e.focusOnClose,
                                focusOnOpen: e.focusOnOpen,
                                focusTrap: e.focusTrap,
                                formatValue: t._format,
                                getValue: t._get,
                                headerText: e.headerText,
                                height: e.height,
                                inputComponent: e.inputComponent,
                                inputProps: e.inputProps,
                                inputStyle: e.inputStyle,
                                invalid: e.invalid,
                                itemHeight: e.itemHeight,
                                isOpen: e.isOpen,
                                label: e.label,
                                labelStyle: e.labelStyle,
                                maxHeight: e.maxHeight,
                                maxWheelWidth: e.maxWheelWidth,
                                maxWidth: e.maxWidth,
                                minWheelWidth: e.minWheelWidth,
                                modelValue: e.modelValue,
                                name: e.name,
                                onCancel: t._proxyHook,
                                onChange: t._onChange,
                                onClose: t._onClose,
                                onOpen: t._proxyHook,
                                onResize: t._onResize,
                                onTempChange: t._proxyHook,
                                onWheelMove: t._onWheelMove,
                                parseValue: t._parse,
                                placeholder: e.placeholder,
                                ref: t._setScroller,
                                renderInContent: t._filterEmptyRenderer,
                                renderItem: a ? a.item : e.renderItem,
                                renderPreContent: e.filter ? t._filterRenderer : ie,
                                rows: t._rows,
                                rtl: e.rtl,
                                selectMultiple: e.selectMultiple,
                                selectOnScroll: t._selectOnScroll,
                                setText: e.setText,
                                shouldValidate: t._shouldValidate,
                                showArrow: e.showArrow,
                                showInput: e.showInput,
                                showOnClick: e.showOnClick,
                                showOnFocus: e.showOnFocus,
                                showOverlay: e.showOverlay,
                                startIcon: e.startIcon,
                                startIconSrc: e.startIconSrc,
                                startIconSvg: e.startIconSvg,
                                tagInput: e.tagInput,
                                theme: e.theme,
                                themeVariant: e.themeVariant,
                                touchUi: t._touchUi,
                                validate: t._validate,
                                value: e.value,
                                valueEquality: t._valueEquals,
                                valueMap: t._map,
                                wheelWidth: t._wheelWidth,
                                wheels: t._wheels,
                                width: e.width,
                                writeValue: t._writeValue,
                            },
                            n
                        );
                    })(e, this, e.children);
                }),
                t
            );
        })(qo),
        $o = {
            before: function (e, t) {
                if ("select" === e.nodeName.toLowerCase()) {
                    var n = e;
                    (e.style.display = "none"),
                        t.inputElement || "inline" === t.display ? (t.element = t.inputElement || e) : ((t.inputComponent = "input"), (t.showInput = !0)),
                        (t.selectElement = n),
                        t.selectMultiple !== ie ? (n.multiple = t.selectMultiple) : (t.selectMultiple = n.multiple);
                    for (var a = [], s = n.options, i = 0; i < s.length; i++) {
                        var r = s[i];
                        r.defaultSelected && a.push(r.value);
                    }
                    a.length && (t.defaultValue = t.selectMultiple ? a : a[0]);
                } else (t.element = e), (t.defaultValue = e.value);
            },
        },
        el = Io(Qo, $o),
        tl = new m();
    function nl(e) {
        return tl.subscribe(e);
    }
    function al(e) {
        tl.unsubscribe(e);
    }
    function sl(e, t) {
        (t.style.left = e.endX + "px"), (t.style.top = e.endY + "px");
    }
    var il = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._render = function (e) {
                    e.dragData !== this._prevS.dragData && (this._dragData = _e(e.dragData) ? JSON.parse(e.dragData.toString()) : e.dragData);
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s.element || this._el,
                        n = kn(t);
                    if (this._unlisten === ie && t && n) {
                        var a, s, i;
                        t.classList.add("mbsc-draggable");
                        var r = n.body;
                        this._unlisten = Ji(t, {
                            onEnd: function (t) {
                                if (s) {
                                    var n = c({}, t);
                                    n.domEvent.preventDefault(), (n.action = "externalDrop"), (n.dragData = e._dragData), (n.create = !0), (n.external = !0), (n.eventName = "onDragEnd"), tl.next(n), (s = !1), r.removeChild(a);
                                }
                                clearTimeout(i);
                            },
                            onMove: function (t) {
                                var n = c({}, t);
                                (n.dragData = e._dragData),
                                    (n.clone = a),
                                    (n.create = !0),
                                    (n.external = !0),
                                    (!s && n.isTouch) || n.domEvent.preventDefault(),
                                    s
                                        ? (sl(t, a), (n.eventName = "onDragMove"), tl.next(n))
                                        : (Math.abs(n.deltaX) > 7 || Math.abs(n.deltaY) > 7) && (clearTimeout(i), n.isTouch || (sl(t, a), r.appendChild(a), (n.eventName = "onDragStart"), tl.next(n), (s = !0)));
                            },
                            onStart: function (n) {
                                var o = c({}, n);
                                s ||
                                    ((a = t.cloneNode(!0)).classList.add("mbsc-drag-clone"),
                                    (o.dragData = e._dragData),
                                    (o.create = !0),
                                    (o.external = !0),
                                    o.isTouch &&
                                        (i = setTimeout(function () {
                                            sl(n, a), r.appendChild(a), (o.clone = a), (o.eventName = "onDragModeOn"), tl.next(o), (o.eventName = "onDragStart"), tl.next(o), (s = !0);
                                        }, 350)));
                            },
                        });
                    }
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && (this._unlisten(), (this._unlisten = ie));
                }),
                (t._name = "Draggable"),
                t
            );
        })(Xa),
        rl = 1;
    function ol(e, t, n, a, s, i) {
        var r = n,
            o = a,
            l = new Map(),
            d = [];
        s && (r = Kt(s, t)), i ? (o = Kt(i, t)) : s && (o = $t(r, 1));
        var h = cs(e, r, o, t);
        for (var u in h)
            if (u)
                for (var m = 0, _ = h[u]; m < _.length; m++) {
                    var p = _[m];
                    if (p.start) {
                        if (!l.has(p)) {
                            var v = Kt(p.start, t),
                                f = Kt(p.end, t) || v;
                            if ((p.allDay && ((v = jt(t, v.getFullYear(), v.getMonth(), v.getDate())), (f = jt(t, (f = It(t, !0, v, f)).getFullYear(), f.getMonth(), f.getDate(), 23, 59, 59, 999))), Mt(r, o, v, f))) {
                                var g = c({}, p);
                                (t.dataTimezone || t.displayTimezone) && ((g.start = v.toISOString()), (g.end = f.toISOString())), l.set(p, !0), d.push(g);
                            }
                        }
                    } else d.push(p);
                }
        return d;
    }
    function ll() {
        return "mbsc_" + rl++;
    }
    function cl(e, t, n, a, s, i, r, o, l, c) {
        var d = t.color || (s && s.color),
            h = t.start || t.date,
            u = t.recurring ? t.original.start : t.start,
            m = t.allDay || !u,
            _ = ts(e, t),
            p = h ? Kt(h, _) : null,
            v = t.end ? Kt(t.end, _) : null,
            f = It(e, t.allDay, p, v, i),
            g = t.bufferBefore ? Kt(+p - 6e4 * t.bufferBefore, _) : null,
            y = t.bufferAfter ? Kt(+f + 6e4 * t.bufferAfter, _) : null,
            b = p && f && !Rt(p, f),
            x = !b || Rt(p, n),
            D = !b || Rt(f, n),
            T = !c && (m || (r && b && !x && !D)),
            S = "",
            C = "";
        if (!l)
            if (c) {
                var w = e.dateFormat + (m ? "" : e.separator + e.timeFormat);
                (S = p ? qt(w, p, e) : ""), (C = v ? qt(w, m ? f : v, e) : "");
            } else r || o ? m || ((S = p ? qt(e.timeFormat, p, e) : ""), (C = v ? qt(e.timeFormat, v, e) : "")) : ((S = p ? qt(e.dateFormat, p, e) : ""), (C = v ? qt(e.dateFormat, f, e) : ""));
        var k = T || (!x && r && !c) ? "" : S,
            M = T || (!D && r && !c) ? "" : C,
            E = t.title || t.text || "",
            N = E,
            I = N + (T ? "" : ", " + k + " - " + M),
            L = e.dateFormatFull,
            H = !l && p ? ", " + e.fromText + ": " + qt(L, p, e) + (m ? "" : ", " + S) : "",
            Y = !l && v ? ", " + e.toText + ": " + qt(L, v, e) + (m ? "" : ", " + C) : "",
            O = s && s.name ? ", " + s.name : "";
        return {
            allDay: m,
            allDayText: T ? e.allDayText : "",
            ariaLabel: N + O + H + Y,
            bufferEnd: y,
            bufferStart: g,
            color: d,
            currentResource: s,
            date: +n,
            end: M,
            endDate: v || (p ? new Date(p) : null),
            html: E,
            id: t.id,
            isMultiDay: b,
            lastDay: !T && b && D ? e.toText : "",
            original: t,
            position: {},
            resource: t.resource,
            slot: t.slot,
            start: k,
            startDate: p,
            style: { background: d, color: a && d ? Hn(d) : "" },
            title: N,
            tooltip: e.showEventTooltip ? t.tooltip || I : ie,
            uid: t.occurrenceId ? t.occurrenceId : t.id,
        };
    }
    function dl(e) {
        var t = [];
        if (e)
            for (var n = 0, a = e; n < a.length; n++) {
                var s = a[n];
                s.id === ie && (s.id = ll()), t.push(s);
            }
        return t;
    }
    function hl(e, t, n, a, s, i, r, o, l) {
        if ("start-end" === o) {
            var c = Ci(e, a, t, n, i, r),
                d = Ci(e, s, t, n, i, r);
            if (c) return c;
            if (d) return d;
        } else
            for (var h = l ? s : Ht($t(s, 1)), u = Ht(a); u < h; u.setDate(u.getDate() + 1)) {
                var m = Ci(e, u, t, n, i, r);
                if (m) return m;
            }
        return !1;
    }
    function ul(e, t, n, a, s) {
        for (var i = s.exclusiveEndDates ? n : Ht($t(n, 1)), r = Ht(t); r < i; r.setDate(r.getDate() + 1)) {
            var o = (a[Lt(r)] || []).filter(function (t) {
                return t.id !== e.id;
            });
            if (o.length) {
                if (!1 === s.eventOverlap || !1 === e.overlap) return o[0];
                for (var l = 0, c = o; l < c.length; l++) {
                    var d = c[l];
                    if (!1 === d.overlap) return d;
                }
            }
        }
        return !1;
    }
    var ml = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.print = xe),
                    (t._checkSize = 0),
                    (t._navService = new Yi()),
                    (t._pageLoad = 0),
                    (t._selectedDates = {}),
                    (t._shouldScrollSchedule = 0),
                    (t._update = 0),
                    (t._onScroll = we(function () {
                        if (!t._isListScrolling && !t._viewChanged)
                            for (var e in t._listDays)
                                if (t._listDays[e]) {
                                    var n = t._listDays[e];
                                    if (n.offsetTop + n.offsetHeight - t._list.scrollTop > 0) {
                                        +e !== t._selected && ((t._shouldSkipScroll = !0), t._selectedChange(+e));
                                        break;
                                    }
                                }
                    })),
                    (t._isListScrolling = 0),
                    (t._remote = 0),
                    (t._tempViewChanged = !1),
                    (t._onWeekDayClick = function (e) {
                        e !== t._selected && ((t._skipScheduleScroll = !0), t._selectedChange(e));
                    }),
                    (t._onDayClick = function (e) {
                        var n = e.date,
                            a = +n,
                            s = Lt(n),
                            i = Cs(t._eventMap[s], t.s.eventOrder),
                            r = t._showEventPopover,
                            o = r === ie ? !t._showEventLabels && !t._showEventList && !t._showSchedule : r,
                            l = !1 !== r && t._moreLabelClicked,
                            c = (o || l) && i && i.length > 0;
                        (e.events = i),
                            t._isEventClick || t._resetSelection(),
                            t._hook("onCellClick", e),
                            (t._moreLabelClicked = !1),
                            e.disabled || a === t._selected || ((t._navService.preventPageChange = !t._showEventList), (t._skipScheduleScroll = !0), t._selectedChange(a)),
                            c &&
                                t._showPopover(
                                    a,
                                    a,
                                    i.map(function (e) {
                                        return t._getEventData(e, n);
                                    }),
                                    e.target
                                ),
                            (t._isEventClick = !1);
                    }),
                    (t._onActiveChange = function (e) {
                        if (e.scroll) t._viewDate = +e.date;
                        else {
                            var n = t._getValidDay(e.date, e.dir),
                                a = { activeDate: n };
                            (t._active = n),
                                (t._viewDate = n),
                                t._update++,
                                (t._skipScheduleScroll = e.pageChange && !e.nav),
                                (e.pageChange || e.today) && ((a.selectedDate = n), t._selectedChange(n, !0), (t._navService.forcePageChange = !0)),
                                t.setState(a);
                        }
                    }),
                    (t._onGestureStart = function (e) {
                        t._hidePopover();
                    }),
                    (t._onDayDoubleClick = function (e) {
                        t._dayClick("onCellDoubleClick", e);
                    }),
                    (t._onDayRightClick = function (e) {
                        t._dayClick("onCellRightClick", e);
                    }),
                    (t._onCellHoverIn = function (e) {
                        (e.events = t._eventMap[Lt(e.date)]), t._hook("onCellHoverIn", e);
                    }),
                    (t._onCellHoverOut = function (e) {
                        (e.events = t._eventMap[Lt(e.date)]), t._hook("onCellHoverOut", e);
                    }),
                    (t._onEventHoverIn = function (e) {
                        t._hoverTimer = setTimeout(function () {
                            (t._isHover = !0), t._eventClick("onEventHoverIn", e);
                        }, 150);
                    }),
                    (t._onEventHoverOut = function (e) {
                        clearTimeout(t._hoverTimer), t._isHover && ((t._isHover = !1), t._eventClick("onEventHoverOut", e));
                    }),
                    (t._onEventClick = function (e) {
                        var n = t.s;
                        t._handleMultipleSelect(e), !1 === t._eventClick("onEventClick", e) || n.selectMultipleEvents || n.eventDelete || ((n.dragToCreate || n.clickToCreate) && !1 !== n.eventDelete) || t._hidePopover();
                    }),
                    (t._onEventDoubleClick = function (e) {
                        t._eventClick("onEventDoubleClick", e);
                    }),
                    (t._onEventRightClick = function (e) {
                        t._eventClick("onEventRightClick", e);
                    }),
                    (t._onEventDragEnd = function (e) {
                        t._hook("onEventDragEnd", e);
                    }),
                    (t._onEventDragStart = function (e) {
                        t._hook("onEventDragStart", e);
                    }),
                    (t._onEventDragEnter = function (e) {
                        t._hook("onEventDragEnter", e);
                    }),
                    (t._onEventDragLeave = function (e) {
                        t._hook("onEventDragLeave", e);
                    }),
                    (t._onLabelHoverIn = function (e) {
                        t._hoverTimer = setTimeout(function () {
                            (t._isHover = !0), t._labelClick("onEventHoverIn", e);
                        }, 150);
                    }),
                    (t._onLabelHoverOut = function (e) {
                        clearTimeout(t._hoverTimer), t._isHover && ((t._isHover = !1), t._labelClick("onEventHoverOut", e));
                    }),
                    (t._onLabelClick = function (e) {
                        t._handleMultipleSelect(e), t._hook("onLabelClick", e), t._labelClick("onEventClick", e), (t._isEventClick = !0), e.label || (t._moreLabelClicked = !0);
                    }),
                    (t._onLabelDoubleClick = function (e) {
                        t._labelClick("onEventDoubleClick", e);
                    }),
                    (t._onLabelRightClick = function (e) {
                        t._labelClick("onEventRightClick", e);
                    }),
                    (t._onCellClick = function (e) {
                        t._resetSelection(), t._cellClick("onCellClick", e);
                    }),
                    (t._onCellDoubleClick = function (e) {
                        t._cellClick("onCellDoubleClick", e);
                    }),
                    (t._onCellRightClick = function (e) {
                        t._cellClick("onCellRightClick", e);
                    }),
                    (t._proxy = function (e) {
                        t._hook(e.type, e);
                    }),
                    (t._onPageChange = function (e) {
                        setTimeout(function () {
                            t._hidePopover();
                        }),
                            (t._isPageChange = !0),
                            t._hook("onPageChange", e);
                    }),
                    (t._onPageLoading = function (e) {
                        var n = t.s,
                            a = cs(t._events, e.viewStart, e.viewEnd, n);
                        (t._colorsMap = cs(n.colors, e.viewStart, e.viewEnd, n)),
                            (t._invalidsMap = cs(n.invalid, e.viewStart, e.viewEnd, n, !0)),
                            (t._validsMap = cs(n.valid, e.viewStart, e.viewEnd, n, !0)),
                            (t._eventMap = a),
                            (t._firstDay = Ft(e.firstDay, n, t._firstWeekDay)),
                            (t._lastDay = e.lastDay),
                            (t._labelsMap = t._marksMap = ie),
                            n.labels || (!t._showEventLabels && !t._showEventCount) ? n.marked || (t._marksMap = a) : (t._labelsMap = a),
                            e.viewChanged && t._hook("onPageLoading", e);
                    }),
                    (t._onPageLoaded = function (e) {
                        (t._shouldAnimateScroll = t._isPageChange), (t._isPageChange = !1);
                        var n = t._eventListType;
                        if (t._showEventList && (!t._showCalendar || "day" !== n)) {
                            var a = t.s,
                                s = e.month,
                                i = t._showEventList && s && "month" === n,
                                r = i ? s : e.firstDay,
                                o = i ? a.getDate(a.getYear(s), a.getMonth(s) + t._eventListSize, 1) : e.lastDay;
                            t._setEventList(r, o);
                        }
                        t._hook("onPageLoaded", e);
                    }),
                    (t._onMoreClick = function (e) {
                        t._showPopover(
                            e.key,
                            +e.date,
                            e.list.map(function (n) {
                                return t._getEventData(n.original, new Date(e.date), n.currentResource, !0);
                            }),
                            e.target,
                            e.context,
                            e.inst
                        );
                    }),
                    (t._onPopoverClose = function (e) {
                        var n = t.state;
                        n.popoverHost && "dragStart" === e.source ? t.setState({ popoverDrag: !0, popoverHidden: !0 }) : (n.popoverHost && "scroll" === e.source && n.popoverDrag) || t._hidePopover();
                    }),
                    (t._onResize = function (e) {
                        var n;
                        if (t._showEventList && v) {
                            var a = e.target,
                                s = a.offsetHeight,
                                i = a.getBoundingClientRect().top;
                            n = s - t._list.getBoundingClientRect().top + i > 170;
                        }
                        t.setState({ height: e.height, isListScrollable: n, width: e.width });
                    }),
                    (t._onSelectedEventsChange = function (e) {
                        t._emit("selectedEventsChange", e), t._hook("onSelectedEventsChange", { events: e });
                    }),
                    (t._getDragDates = function (e, n, a) {
                        for (var s = {}, i = t._firstWeekDay, r = It(t.s, a.allDay, e, n, !0), o = Ht($t(r, 1)), l = Ht(e); l < o; l.setDate(l.getDate() + 1)) {
                            var c = l.getDay(),
                                d = i - c > 0 ? 7 : 0;
                            Rt(e, l) || c === i ? (s[Lt(l)] = { event: a, width: 100 * Math.min(Ot(l, r) + 1, 7 + i - c - d) }) : (s[Lt(l)] = {});
                        }
                        return s;
                    }),
                    (t._onLabelUpdateModeOn = function (e) {
                        var n = e.create ? t._tempEvent : e.event,
                            a = Kt(n.start),
                            s = Kt(n.end || a);
                        t.setState({ isTouchDrag: !0, labelDragData: { draggedEvent: n, originDates: e.external ? ie : t._getDragDates(a, s, n) } });
                    }),
                    (t._onLabelUpdateModeOff = function (e) {
                        t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.create ? t._tempEvent : e.event, source: "calendar" }), t.setState({ isTouchDrag: !1, labelDragData: ie });
                    }),
                    (t._onLabelUpdateStart = function (e) {
                        var n = t.s,
                            a = t._el;
                        if (n.externalDrag && e.drag && !e.create) {
                            var s = a.querySelector(".mbsc-calendar-label[data-id='" + e.event.id + "']") || Rn(e.domEvent.target, ".mbsc-list-item");
                            if (s) {
                                var i = s.cloneNode(!0),
                                    r = i.classList;
                                (i.style.display = "none"),
                                    r.add("mbsc-drag-clone", "mbsc-schedule-drag-clone", "mbsc-font"),
                                    r.remove("mbsc-calendar-label-hover", "mbsc-hover", "mbsc-focus", "mbsc-active"),
                                    (t._clone = i),
                                    (t._body = kn(a).body),
                                    t._body.appendChild(i),
                                    (t._eventDropped = !1),
                                    tl.next(c({}, e, { create: !0, dragData: e.event, eventName: "onDragStart", external: !0, from: t }));
                            }
                        }
                        var o = t._showWeekNumbers ? a.querySelector(".mbsc-calendar-week-nr").getBoundingClientRect().width : 0,
                            l = a.querySelectorAll(".mbsc-calendar-slide-active")[0],
                            d = l.getBoundingClientRect(),
                            h = a.querySelector(".mbsc-calendar-week-days"),
                            u = l.querySelectorAll(".mbsc-calendar-row"),
                            m = /click/.test(e.domEvent.type);
                        if (((t._areaTop = 0), h)) {
                            var _ = h.getBoundingClientRect();
                            t._areaTop = _.top + _.height;
                        }
                        (t._areaLeft = d.left + (n.rtl ? 0 : o)), (t._areaBottom = d.top + d.height), (t._areaRight = t._areaLeft + d.width - (n.rtl ? o : 0)), (t._calCellWidth = (t._areaRight - t._areaLeft) / 7);
                        var p = 0;
                        if (
                            ((t._rowTops = []),
                            u.forEach(function (n, a) {
                                var s = n.getBoundingClientRect().top - t._areaTop;
                                t._rowTops.push(s), e.endY - t._areaTop > s && (p = a);
                            }),
                            e.create)
                        ) {
                            var v = Ce((n.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                                f = $t(t._firstDay, 7 * p + v),
                                g = new Date(f.getFullYear(), f.getMonth(), f.getDate()),
                                y = $t(g, 1),
                                b = n.exclusiveEndDates ? y : new Date(+y - 1),
                                x = n.extendDefaultEvent ? n.extendDefaultEvent({ start: g }) : ie;
                            t._tempEvent = c({ allDay: !0, end: b, id: ll(), start: g, title: n.newEventText }, e.dragData, x);
                        }
                        m || t._hook("onEventDragStart", { action: e.create ? "create" : e.resize ? "resize" : "move", domEvent: e.domEvent, event: e.create ? t._tempEvent : e.event, source: "calendar" });
                    }),
                    (t._onLabelUpdateMove = function (e) {
                        var n = t.s,
                            a = e.create ? t._tempEvent : e.event,
                            s = c({}, a),
                            i = t.state.labelDragData,
                            r = a.allDay ? ie : n;
                        if (n.externalDrag && e.drag && !e.create && t._clone && (tl.next(c({}, e, { clone: t._clone, create: !0, dragData: e.event, eventName: "onDragMove", external: !0, from: t })), !t._onCalendar))
                            return sl(e, t._clone), void ((i && i.draggedEvent) || t.setState({ labelDragData: { draggedEvent: s } }));
                        if (e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight) {
                            var o = Ce((n.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                                l = Ce((n.rtl ? t._areaRight - e.startX : e.startX - t._areaLeft) / t._calCellWidth),
                                d = 0,
                                h = 0;
                            t._rowTops.forEach(function (n, a) {
                                e.startY - t._areaTop > n && (h = a), e.endY - t._areaTop > n && (d = a);
                            });
                            var u = 7 * (d - h) + (o - l);
                            if (o !== t._tempDay || d !== t._tempWeek) {
                                var m = Kt(a.start, r),
                                    _ = Kt(a.end, r) || m,
                                    p = ks(a.dragInTime, ie, n.dragInTime),
                                    v = m,
                                    f = _;
                                if (e.external) {
                                    var g = kt(m),
                                        y = +_ - +m;
                                    p && ((v = jt(n, +$t(t._firstDay, 7 * d + o) + g)), (f = jt(n, +v + y)));
                                } else if (e.drag) {
                                    if (!p) return;
                                    (v = $t(m, u)), (f = $t(_, u));
                                } else {
                                    var b = n.rtl ? -1 : 1,
                                        x = e.create ? (d === h ? e.deltaX * b > 0 : u > 0) : "end" === e.direction,
                                        D = Ot(m, _);
                                    x ? (f = $t(_, Math.max(-D, u))) : (v = $t(m, Math.min(D, u))), f < v && (x ? (f = jt(r, v)) : (v = jt(r, f)));
                                }
                                (s.start = v), (s.end = f), t.setState({ labelDragData: { draggedDates: t._getDragDates(v, f, s), draggedEvent: s, originDates: i && i.originDates }, popoverHidden: !0 }), (t._tempDay = o), (t._tempWeek = d);
                            }
                        }
                    }),
                    (t._onLabelUpdateEnd = function (e) {
                        var n = t.s,
                            a = t.state,
                            s = e.create,
                            i = a.labelDragData || {},
                            r = s ? t._tempEvent : e.event,
                            o = i.draggedEvent || r,
                            l = Kt(r.start),
                            d = Kt(r.end),
                            h = Kt(o.start),
                            u = Kt(o.end),
                            m = s || +l != +h || +d != +u,
                            _ = { allDay: r.allDay, endDate: u, original: r, startDate: h },
                            p = !1;
                        n.externalDrag &&
                            e.drag &&
                            !e.create &&
                            t._clone &&
                            (tl.next(c({}, e, { action: "externalDrop", create: !0, dragData: e.event, eventName: "onDragEnd", external: !0, from: t })),
                            t._body.removeChild(t._clone),
                            (t._clone = ie),
                            t._onCalendar || ((p = !0), t._eventDropped && t._onEventDelete(e)));
                        var v = e.action || (i.draggedEvent ? "drag" : "click"),
                            f =
                                !p &&
                                (!m ||
                                    t._onEventDragStop({
                                        action: v,
                                        collision: hl(n, t._invalidsMap, t._validsMap, h, u, t._minDate, t._maxDate, n.invalidateEvent, n.exclusiveEndDates),
                                        create: s,
                                        domEvent: e.domEvent,
                                        event: _,
                                        external: e.external,
                                        from: e.from,
                                        overlap: ul(r, h, u, t._eventMap, n),
                                        source: "calendar",
                                    })),
                            g = a.isTouchDrag && !p && (!s || f);
                        g || "click" === v || t._hook("onEventDragEnd", { domEvent: e.domEvent, event: r, source: "calendar" }),
                            t.setState({ isTouchDrag: g, labelDragData: g ? { draggedEvent: f ? o : c({}, r), originDates: f ? t._getDragDates(h, u, _.original) : i.originDates } : {} }),
                            e.drag && t._hidePopover(),
                            (t._tempWeek = -1),
                            (t._tempDay = -1);
                    }),
                    (t._onEventDragStop = function (e) {
                        var n = t.s,
                            a = e.action,
                            s = e.resource,
                            i = e.slot,
                            r = e.collision,
                            o = e.overlap,
                            l = e.create,
                            d = e.source,
                            h = e.event,
                            u = h.original,
                            m = u.recurring ? u.original : u,
                            _ = n.immutableData ? c({}, m) : m,
                            p = c({}, _),
                            v = c({}, _),
                            f = u.timezone,
                            g = Dt(u.start, n, f),
                            y = Dt(h.startDate, n, f),
                            b = Dt(h.endDate, n, f),
                            x = h.allDay,
                            D = v.recurring;
                        D ? (v.recurringException = os(v.recurringException).concat([g])) : ((v.allDay = x), (v.start = y), (v.end = b), s !== ie && (v.resource = s), i !== ie && (v.slot = i));
                        var T = !1,
                            S = D ? c({}, _) : _;
                        return (
                            (l || D) &&
                                (D && delete S.recurring,
                                (D || S.id === ie) && (S.id = ll()),
                                s !== ie && (S.resource = s),
                                i !== ie && (S.slot = i),
                                (S.start = y),
                                (S.end = b),
                                (S.allDay = x),
                                (T = !1 !== t._hook("onEventCreate", c({ action: a, domEvent: e.domEvent, event: S, source: d }, D && { originEvent: u }))),
                                (!1 === r && !1 === o) || ((T = !1), t._hook("onEventCreateFailed", c({ action: a, event: S, invalid: r, overlap: o, source: d }, D && { originEvent: u })))),
                            (l && !D) ||
                                e.external ||
                                ((T =
                                    !1 !==
                                    t._hook(
                                        "onEventUpdate",
                                        c({ domEvent: e.domEvent, event: v, oldEvent: p, oldResource: e.oldResource, oldSlot: e.oldSlot, resource: e.newResource, slot: e.newSlot, source: d }, D && { newEvent: S, oldEventOccurrence: u })
                                    )),
                                (!1 === r && !1 === o) || ((T = !1), t._hook("onEventUpdateFailed", c({ event: v, invalid: r, oldEvent: p, overlap: o, source: d }, D && { newEvent: S, oldEventOccurrence: u })))),
                            T
                                ? (e.from && (e.from._eventDropped = !0),
                                  (l || D) && (t._events.push(S), (t._triggerCreated = { action: a, event: S, source: d })),
                                  (l && !D) ||
                                      (D ? ((h.id = S.id), (h.original = S), (_.recurringException = v.recurringException)) : ((_.start = y), (_.end = b), (_.allDay = x), s !== ie && (_.resource = s), i !== ie && (_.slot = i)),
                                      (t._triggerUpdated = { event: _, oldEvent: p, source: d })),
                                  (t._refresh = !0),
                                  "calendar" !== d && t.forceUpdate())
                                : t._hidePopover(),
                            T
                        );
                    }),
                    (t._onExternalDrag = function (e) {
                        var n = t.s,
                            a = e.clone,
                            s = e.from === t,
                            i = !s && n.externalDrop,
                            r = s && n.externalDrag && !n.dragToMove,
                            o = t.state.labelDragData;
                        if (t._showCalendar && (i || n.externalDrag)) {
                            var l = !r && e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight;
                            switch (e.eventName) {
                                case "onDragModeOff":
                                    i && t._onLabelUpdateModeOff(e);
                                    break;
                                case "onDragModeOn":
                                    i && t._onLabelUpdateModeOn(e);
                                    break;
                                case "onDragStart":
                                    i ? t._onLabelUpdateStart(e) : s && (t._onCalendar = !0);
                                    break;
                                case "onDragMove":
                                    if (!s && !i) return;
                                    l
                                        ? (t._onCalendar || t._hook("onEventDragEnter", { domEvent: e.domEvent, event: e.dragData, source: "calendar" }),
                                          (s || i) && (a.style.display = "none"),
                                          i && t._onLabelUpdateMove(e),
                                          (t._onCalendar = !0))
                                        : t._onCalendar &&
                                          (t._hook("onEventDragLeave", { domEvent: e.domEvent, event: e.dragData, source: "calendar" }),
                                          (a.style.display = "table"),
                                          (!s || (o && o.draggedEvent)) && t.setState({ labelDragData: { draggedDates: {}, draggedEvent: s ? o && o.draggedEvent : ie, originDates: s ? o && o.originDates : ie } }),
                                          (t._tempWeek = -1),
                                          (t._tempDay = -1),
                                          (t._onCalendar = !1));
                                    break;
                                case "onDragEnd":
                                    i && (l ? t._onLabelUpdateEnd(e) : (t.setState({ labelDragData: ie }), t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.dragData, source: "calendar" })));
                            }
                        }
                    }),
                    (t._onEventDelete = function (e) {
                        var n,
                            a = t.s;
                        if ((a.eventDelete !== ie || a.dragToCreate || a.clickToCreate) && !1 !== a.eventDelete) {
                            for (
                                var s, i, r, o = !1, l = !1, d = !1, h = e.event, u = h, m = a.selectMultipleEvents, _ = m ? t._selectedEventsMap : (((n = {})[h.id] = h), n), p = [], v = [], f = [], g = {}, y = [], b = 0, x = Ye(_);
                                b < x.length;
                                b++
                            ) {
                                var D = x[b];
                                if (D.recurring) {
                                    (u = D), (l = !0);
                                    var T = (s = D.original).id;
                                    g[T] ? (r = g[T]) : ((i = c({}, s)), (r = c({}, s)), v.push(s), p.push(i), f.push(r), (g[T] = r));
                                    var S = Dt(D.start, a);
                                    r.recurringException = os(r.recurringException).concat([S]);
                                } else (d = !0), (h = D), y.push(D);
                            }
                            if (l)
                                if (
                                    !1 !==
                                    t._hook("onEventUpdate", {
                                        domEvent: e.domEvent,
                                        event: r,
                                        events: m ? f : ie,
                                        isDelete: !0,
                                        oldEvent: m ? ie : i,
                                        oldEventOccurrence: u,
                                        oldEvents: m ? p : ie,
                                        oldResource: e.resource,
                                        oldSlot: e.slot,
                                        resource: e.resource,
                                        slot: e.slot,
                                        source: e.source,
                                    })
                                ) {
                                    o = !0;
                                    for (var C = 0, w = v; C < w.length; C++) {
                                        var k = w[C],
                                            M = g[k.id];
                                        k.recurringException = M.recurringException;
                                    }
                                    t._triggerUpdated = { event: s, events: m ? v : ie, oldEvent: m ? ie : i, oldEvents: m ? p : ie, source: e.source };
                                }
                            if (d)
                                !1 !== t._hook("onEventDelete", { domEvent: e.domEvent, event: h, events: m ? y : ie, source: e.source }) &&
                                    ((o = !0),
                                    (t._events = t._events.filter(function (e) {
                                        return !_[e.id];
                                    })),
                                    (t._selectedEventsMap = {}),
                                    (t._triggerDeleted = { event: h, events: m ? y : ie, source: e.source }));
                            o && (t._hidePopover(), t.refresh());
                        }
                    }),
                    (t._setEl = function (e) {
                        (t._el = e ? e._el || e : null), (t._calendarView = e);
                    }),
                    (t._setList = function (e) {
                        t._list = e;
                    }),
                    (t._setPopoverList = function (e) {
                        t._popoverList = e && e._el;
                    }),
                    (t._onKeyDown = function (e) {
                        9 === e.keyCode && t._resetSelection();
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype.addEvent = function (e) {
                    for (var t = [], n = 0, a = dl(he(e) ? e : [e]); n < a.length; n++) {
                        var s = a[n];
                        t.push("" + s.id), this._events.push(s);
                    }
                    return this.refresh(), t;
                }),
                (t.prototype.getEvents = function (e, t) {
                    return ol(this._events, this.s, this._firstDay, this._lastDay, e, t);
                }),
                (t.prototype.getInvalids = function (e, t) {
                    return ol(this.s.invalid, this.s, this._firstDay, this._lastDay, e, t);
                }),
                (t.prototype.getSelectedEvents = function () {
                    return Ye(this._selectedEventsMap);
                }),
                (t.prototype.setEvents = function (e) {
                    for (var t = [], n = dl(e), a = 0, s = n; a < s.length; a++) {
                        var i = s[a];
                        t.push("" + i.id);
                    }
                    return (this._events = n), this.refresh(), t;
                }),
                (t.prototype.setSelectedEvents = function (e) {
                    (this._selectedEventsMap = (e || []).reduce(function (e, t) {
                        return t.occurrenceId ? (e[t.occurrenceId] = t) : (e[t.id] = t), e;
                    }, {})),
                        this.forceUpdate();
                }),
                (t.prototype.removeEvent = function (e) {
                    for (var t = he(e) ? e : [e], n = this._events, a = n.length, s = 0, i = t; s < i.length; s++)
                        for (var r = i[s], o = !1, l = 0; !o && l < a; ) {
                            var c = n[l];
                            (c.id !== r && c.id !== r.id) || ((o = !0), n.splice(l, 1)), l++;
                        }
                    this.refresh();
                }),
                (t.prototype.navigateToEvent = function (e) {
                    (this._navigateToEvent = e), this._shouldScrollSchedule++, this.navigate(e.start, !0);
                }),
                (t.prototype.navigate = function (e, t) {
                    var n = +Kt(e),
                        a = this._navigateToEvent !== ie,
                        s = n !== this._selectedDateTime;
                    (s || a) && (this._shouldAnimateScroll = !!t),
                        this.s.selectedDate === ie ? ((!this._showSchedule && !this._showTimeline) || s ? this.setState({ selectedDate: n }) : (this._shouldScrollSchedule++, this.forceUpdate())) : (s || a) && this._selectedChange(n);
                }),
                (t.prototype.updateEvent = function (e) {
                    for (var t = he(e) ? e : [e], n = this._events, a = n.length, s = 0, i = t; s < i.length; s++)
                        for (var r = i[s], o = !1, l = 0; !o && l < a; ) {
                            n[l].id === r.id && ((o = !0), n.splice(l, 1, c({}, r))), l++;
                        }
                    this.refresh();
                }),
                (t.prototype.refresh = function () {
                    (this._refresh = !0), this.forceUpdate();
                }),
                (t.prototype._render = function (e, t) {
                    var n,
                        a = this,
                        s = this._prevS,
                        i = this._showDate,
                        r = e.displayTimezone !== s.displayTimezone || e.dataTimezone !== s.dataTimezone,
                        o = !1,
                        l = !1,
                        c = this._tempViewChanged;
                    if (
                        ((this._tempViewChanged = !1),
                        (this._colorEventList = e.eventTemplate === ie && e.renderEvent === ie && e.colorEventList),
                        e.exclusiveEndDates === ie && (e.exclusiveEndDates = !!e.displayTimezone),
                        pe(e.min) ? (this._minDate = -1 / 0) : s.min !== e.min && (this._minDate = +Kt(e.min)),
                        pe(e.max) ? (this._maxDate = 1 / 0) : s.max !== e.max && (this._maxDate = +Kt(e.max)),
                        e.selectedDate !== ie
                            ? (n = +Kt(e.selectedDate))
                            : (this._defaultDate || (this._defaultDate = +(e.defaultSelectedDate !== ie ? Kt(e.defaultSelectedDate) : Bt(jt(e)))), (n = t.selectedDate || this._selectedDateTime || this._defaultDate)),
                        (this.eventList = t.eventList || []),
                        e.data !== s.data && ((this._events = e.immutableData ? (e.data || []).slice() : dl(e.data)), (this._refresh = !0)),
                        (e.invalid !== s.invalid || e.colors !== s.colors || r) && (this._refresh = !0),
                        JSON.stringify(e.view) !== JSON.stringify(s.view) || e.firstDay !== s.firstDay || e.dragTimeStep !== s.dragTimeStep)
                    ) {
                        var d = {
                            c: "eventcalendar",
                            dragTimeStep: e.dragTimeStep,
                            eventListSize: this._eventListSize,
                            eventListType: this._eventListType,
                            firstDay: e.firstDay,
                            resourcesLength: e.resources ? e.resources.length : 0,
                            scheduleEndDay: this._scheduleEndDay,
                            scheduleEndTime: this._scheduleEndTime,
                            scheduleMaxEventStack: this._scheduleMaxEventStack,
                            scheduleMinEventWidth: this._scheduleMinEventWidth,
                            scheduleSize: this._scheduleSize,
                            scheduleStartDay: this._scheduleStartDay,
                            scheduleStartTime: this._scheduleStartTime,
                            scheduleTimeCellStep: this._scheduleTimeCellStep,
                            scheduleTimeLabelStep: this._scheduleTimeLabelStep,
                            scheduleTimezones: this._scheduleTimezones,
                            scheduleType: this._scheduleType,
                            showCalendar: this._showCalendar,
                            showEventCount: this._showEventCount,
                            showEventLabels: this._showEventLabels,
                            showEventList: this._showEventList,
                            showMarked: !!e.marked,
                            showSchedule: this._showSchedule,
                            showScheduleDays: this._showScheduleDays,
                            showTimeline: this._showTimeline,
                            slotsLength: e.slots ? e.slots.length : 0,
                            timelineEndDay: this._timelineEndDay,
                            timelineEndTime: this._timelineEndTime,
                            timelineListing: this._timelineListing,
                            timelineResolution: this._timelineResolution,
                            timelineResolutionVertical: this._timelineResolutionVertical,
                            timelineSize: this._timelineSize,
                            timelineStartDay: this._timelineStartDay,
                            timelineStartTime: this._timelineStartTime,
                            timelineTimeCellStep: this._timelineTimeCellStep,
                            timelineTimeLabelStep: this._timelineTimeLabelStep,
                            timelineType: this._timelineType,
                            v: Ba,
                            view: e.view,
                        };
                        this._remote++,
                            Ra(this),
                            Va(
                                "remote",
                                this,
                                d,
                                function (e) {
                                    if ((a._remote--, !a._remote)) {
                                        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                                            var s = n[t];
                                            a[s] = e[s];
                                        }
                                        za(e.notification), (a._tempViewChanged = e._viewChanged), a.forceUpdate();
                                    }
                                },
                                "comp_" + this._uid
                            );
                    }
                    this._showDate = !this._showScheduleDays && ((this._showSchedule && "day" === this._scheduleType) || (this._showEventList && "day" === this._eventListType && this._eventListSize < 2));
                    var h = this._pageLoad;
                    if (
                        ((this._refresh || e.locale !== s.locale || e.theme !== s.theme) && ((o = !0), this._pageLoad++),
                        e.resources !== s.resources &&
                            (this._resourcesMap = (e.resources || []).reduce(function (e, t) {
                                return (e[t.id] = t), e;
                            }, {})),
                        e.selectMultipleEvents &&
                            e.selectedEvents !== s.selectedEvents &&
                            (this._selectedEventsMap = (e.selectedEvents || []).reduce(function (e, t) {
                                return t.occurrenceId ? (e[t.occurrenceId] = t) : (e[t.id] = t), e;
                            }, {})),
                        this._selectedEventsMap === ie && (this._selectedEventsMap = {}),
                        e.refDate !== s.refDate && (this._refDate = Kt(e.refDate)),
                        this._refDate || this._showCalendar || (!this._showSchedule && !this._showTimeline) || (this._refDate = Ht(new Date())),
                        n !== this._selectedDateTime && (this._viewDate = n),
                        (e.cssClass === s.cssClass && e.className === s.className && e.class === s.class) || (this._checkSize++, (this._viewChanged = c = !0)),
                        c && this._viewDate && n !== this._viewDate && ((l = !0), (n = this._viewDate)),
                        n !== this._selectedDateTime || c)
                    ) {
                        var u = this._showCalendar && (this._showSchedule || this._showTimeline || this._showEventList) ? +wi(new Date(n), e, this._minDate, this._maxDate, ie, ie, 1) : ce(n, this._minDate, this._maxDate);
                        (u = this._getValidDay(u)),
                            (n !== u || l) &&
                                ((n = u),
                                setTimeout(function () {
                                    a._selectedChange(n);
                                })),
                            this._skipScheduleScroll || this._shouldScrollSchedule++,
                            (this._selectedDateTime = n);
                    }
                    var m = Ht(new Date(n)),
                        _ = +m;
                    (_ === this._selected && i === this._showDate && e.locale === s.locale && s.dateFormatLong === e.dateFormatLong) || (this._selectedDateHeader = this._showDate ? qt(e.dateFormatLong, m, e) : ""),
                        (_ === this._selected && e.dataTimezone === s.dataTimezone && e.displayTimezone === s.displayTimezone) ||
                            ((this._shouldAnimateScroll = this._shouldAnimateScroll !== ie ? this._shouldAnimateScroll : this._selected !== ie),
                            (this._selected = _),
                            (this._selectedDates = {}),
                            (this._selectedDates[+Ut(e, new Date(_))] = !0),
                            (this._active = _),
                            (o = !0),
                            (l = !0)),
                        o && this._showCalendar && ("day" === this._eventListType || "day" === this._scheduleType || "day" === this._timelineType) && this._setEventList(m, $t(m, 1)),
                        this._refresh &&
                            t.showPopover &&
                            setTimeout(function () {
                                a._hidePopover();
                            }),
                        (this._refresh = !1),
                        (this._cssClass =
                            this._className +
                            " mbsc-eventcalendar" +
                            (this._showEventList ? " mbsc-eventcalendar-agenda" : "") +
                            (this._showSchedule ? " mbsc-eventcalendar-schedule" : "") +
                            (this._showTimeline ? " mbsc-eventcalendar-timeline" : "")),
                        this._navService.options(
                            {
                                activeDate: this._active,
                                calendarType: this._calendarType,
                                endDay: this._showSchedule ? this._scheduleEndDay : this._showTimeline ? this._timelineEndDay : this._rangeEndDay,
                                eventRange: this._rangeType,
                                eventRangeSize: this._showSchedule ? this._scheduleSize : this._showTimeline ? this._timelineSize : this._eventListSize,
                                firstDay: e.firstDay,
                                getDate: e.getDate,
                                getDay: e.getDay,
                                getMonth: e.getMonth,
                                getYear: e.getYear,
                                max: e.max,
                                min: e.min,
                                onPageChange: this._onPageChange,
                                onPageLoading: this._onPageLoading,
                                refDate: this._refDate,
                                resolution: this._timelineResolution,
                                showCalendar: this._showCalendar,
                                showOuterDays: this._showOuterDays,
                                size: this._calendarSize,
                                startDay: this._rangeStartDay,
                                weeks: this._calendarSize,
                            },
                            this._pageLoad !== h
                        ),
                        l && (this._shouldScroll = !this._isPageChange && !this._shouldSkipScroll);
                }),
                (t.prototype._mounted = function () {
                    (this._unsubscribe = nl(this._onExternalDrag)), Cn(this._el, As, this._onKeyDown);
                }),
                (t.prototype._updated = function () {
                    var e = this;
                    if (
                        (this._shouldScroll &&
                            this.state.eventList &&
                            this.state.isListScrollable &&
                            (Ee(this, function () {
                                e._scrollToDay(), (e._shouldAnimateScroll = ie);
                            }),
                            (this._shouldScroll = !1)),
                        this._shouldLoadDays &&
                            ((this._shouldLoadDays = !1),
                            Vn(this._list.querySelectorAll("[mbsc-timestamp]"), function (t) {
                                e._listDays[t.getAttribute("mbsc-timestamp")] = t;
                            })),
                        this._shouldEnhance && (this._shouldEnhance = "popover" === this._shouldEnhance ? this._popoverList : this._list),
                        this._triggerCreated)
                    ) {
                        var t = this._triggerCreated,
                            n =
                                "calendar" === t.source
                                    ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + t.event.id + '"]')
                                    : this._el.querySelector('.mbsc-schedule-event[data-id="' + t.event.id + '"]');
                        this._hook("onEventCreated", c({}, this._triggerCreated, { target: n })), (this._triggerCreated = null);
                    }
                    if (this._triggerUpdated) {
                        var a = this._triggerUpdated;
                        n =
                            "calendar" === a.source
                                ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + a.event.id + '"]')
                                : this._el.querySelector('.mbsc-schedule-event[data-id="' + a.event.id + '"]');
                        this._hook("onEventUpdated", c({}, this._triggerUpdated, { target: n })), (this._triggerUpdated = null);
                    }
                    this._triggerDeleted && (this._hook("onEventDeleted", c({}, this._triggerDeleted)), (this._triggerDeleted = null)),
                        this._viewChanged &&
                            setTimeout(function () {
                                e._viewChanged = !1;
                            }, 10),
                        this._shouldSkipScroll &&
                            setTimeout(function () {
                                e._shouldSkipScroll = !1;
                            }),
                        this._navigateToEvent &&
                            setTimeout(function () {
                                e._navigateToEvent = ie;
                            }),
                        (this._skipScheduleScroll = !1);
                }),
                (t.prototype._destroy = function () {
                    this._unsubscribe && al(this._unsubscribe), wn(this._el, As, this._onKeyDown);
                }),
                (t.prototype._resetSelection = function () {
                    this.s.selectMultipleEvents && Object.keys(this._selectedEventsMap).length > 0 && ((this._selectedEventsMap = {}), this._onSelectedEventsChange([]), this.forceUpdate());
                }),
                (t.prototype._getAgendaEvents = function (e, t, n) {
                    var a = this,
                        s = [],
                        i = this.s;
                    if (n && this._showEventList)
                        for (
                            var r = function (e) {
                                    var t = n[Lt(e)];
                                    if (t && t.length) {
                                        var r = Cs(t, i.eventOrder);
                                        s.push({
                                            date: qt(i.dateFormatLong, e, i),
                                            events: r.map(function (t) {
                                                return a._getEventData(t, e);
                                            }),
                                            timestamp: +e,
                                        });
                                    }
                                },
                                o = Ht(e);
                            o < t;
                            o.setDate(o.getDate() + 1)
                        )
                            r(o);
                    return s;
                }),
                (t.prototype._getEventData = function (e, t, n, a) {
                    var s = this.s;
                    return !e.color && e.resource && n === ie && (n = (this._resourcesMap || {})[he(e.resource) ? e.resource[0] : e.resource]), cl(s, e, t, this._colorEventList, n, !0, !0, !1, !1, a);
                }),
                (t.prototype._getValidDay = function (e, t) {
                    void 0 === t && (t = 1);
                    var n = this._rangeStartDay,
                        a = this._rangeEndDay;
                    if (!this._showCalendar && "day" === this._rangeType && n !== ie && a !== ie) {
                        var s = new Date(e),
                            i = s.getDay(),
                            r = 0;
                        if (((a < n ? i > a && i < n : i > a || i < n) && (r = t < 0 ? a - i : n - i), r)) return +$t(s, (r += t < 0 ? (r > 0 ? -7 : 0) : r < 0 ? 7 : 0));
                    }
                    return e;
                }),
                (t.prototype._setEventList = function (e, t) {
                    var n = this;
                    setTimeout(function () {
                        (n._eventListHTML = ie), (n._shouldScroll = !0), (n._listDays = null), n._scrollToDay(0), n.setState({ eventList: n._getAgendaEvents(e, t, n._eventMap) });
                    });
                }),
                (t.prototype._showPopover = function (e, t, n, a, s, i) {
                    var r = this;
                    (this.state.showPopover && e === this.state.popoverKey) ||
                        setTimeout(function () {
                            (r._anchor = a), r.setState({ popoverContext: s, popoverDate: t, popoverHidden: !1, popoverHost: i, popoverKey: e, popoverList: n, showPopover: !0 });
                        });
                }),
                (t.prototype._hidePopover = function () {
                    this.state.showPopover && this.setState({ popoverDrag: !1, showPopover: !1 });
                }),
                (t.prototype._scrollToDay = function (e) {
                    var t = this;
                    if (this._list) {
                        var n = e,
                            a = void 0;
                        if (e === ie && this._listDays) {
                            var s = this._listDays[this._selected],
                                i = this._navigateToEvent && this._navigateToEvent.id;
                            if (s && ((n = s.offsetTop), i !== ie)) {
                                var r = s.querySelector('.mbsc-event[data-id="' + i + '"]'),
                                    o = s.querySelector(".mbsc-event-day");
                                r && (n = r.offsetTop - (o ? o.offsetHeight : 0) + 1);
                            }
                            n !== ie && (a = this._shouldAnimateScroll);
                        }
                        n !== ie &&
                            (this._isListScrolling++,
                            On(this._list, ie, n, a, !1, function () {
                                setTimeout(function () {
                                    t._isListScrolling--;
                                }, 150);
                            }));
                    }
                }),
                (t.prototype._selectedChange = function (e, t) {
                    var n = new Date(e);
                    this.s.selectedDate !== ie || t || this.setState({ selectedDate: +e }), this._emit("selectedDateChange", n), this._hook("onSelectedDateChange", { date: n });
                }),
                (t.prototype._cellClick = function (e, t) {
                    this._hook(e, c({ target: t.domEvent.currentTarget }, t));
                }),
                (t.prototype._dayClick = function (e, t) {
                    var n = Lt(t.date),
                        a = Cs(this._eventMap[n], this.s.eventOrder);
                    (t.events = a), this._hook(e, t);
                }),
                (t.prototype._labelClick = function (e, t) {
                    t.label && this._hook(e, { date: t.date, domEvent: t.domEvent, event: t.label, source: "calendar" });
                }),
                (t.prototype._eventClick = function (e, t) {
                    return (t.date = new Date(t.date)), this._hook(e, t);
                }),
                (t.prototype._handleMultipleSelect = function (e) {
                    var t = e.label || e.event;
                    if (t && this.s.selectMultipleEvents) {
                        var n = e.domEvent,
                            a = n.shiftKey || n.ctrlKey || n.metaKey ? this._selectedEventsMap : {},
                            s = t.occurrenceId || t.id;
                        a[s] ? delete a[s] : (a[s] = t), (this._selectedEventsMap = c({}, a)), this._onSelectedEventsChange(Ye(a)), this.s.selectedEvents === ie && this.forceUpdate();
                    }
                }),
                (t.defaults = c({}, vs, { actionableEvents: !0, allDayText: "All-day", data: [], newEventText: "New event", noEventsText: "No events", showControls: !0, showEventTooltip: !0, view: { calendar: { type: "month" } } })),
                (t._name = "Eventcalendar"),
                t
            );
        })(Xa),
        _l = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._render = function (e) {
                    this._cssClass = this._className + this._rtl + " mbsc-font mbsc-list" + this._theme;
                }),
                t
            );
        })(Xa);
    var pl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (t = this), (n = e.children), Gn("div", { ref: t._setEl, className: t._cssClass }, n);
                    var t, n;
                }),
                t
            );
        })(_l),
        vl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._render = function (e) {
                    this._cssClass = this._className + " mbsc-list-header" + this._theme + this._hb;
                }),
                t
            );
        })(Xa);
    var fl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (t = this), (n = e.children), Gn("div", { ref: t._setEl, className: t._cssClass }, n);
                    var t, n;
                }),
                t
            );
        })(vl),
        gl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._hook("onClick", { domEvent: e }), t.s.selected && t.setState({ hasFocus: !1 });
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n = this;
                    this._unlisten = Ji(this._el, {
                        click: !0,
                        keepFocus: !0,
                        onBlur: function () {
                            n.setState({ hasFocus: !1 });
                        },
                        onEnd: function (a) {
                            if (e) {
                                var s = n.s,
                                    i = c({}, a),
                                    r = s.eventData;
                                i.domEvent.preventDefault(), (i.drag = !0), (i.event = s.event), (i.eventData = r), (i.resource = r && r.currentResource && r.currentResource.id), n._hook("onDragEnd", i), (e = !1);
                            }
                            clearTimeout(t);
                        },
                        onFocus: function () {
                            n.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function (e) {
                            n.s.actionable && n.setState({ hasHover: !0 }), n._hook("onHoverIn", { domEvent: e });
                        },
                        onHoverOut: function (e) {
                            n.setState({ hasHover: !1 }), n._hook("onHoverOut", { domEvent: e });
                        },
                        onKeyDown: function (e) {
                            var t = n.s.event;
                            switch (e.keyCode) {
                                case ti:
                                case ni:
                                    n._el.click(), e.preventDefault();
                                    break;
                                case 8:
                                case 46:
                                    t && !1 !== t.editable && n._hook("onDelete", { domEvent: e, event: t, source: "agenda" });
                            }
                        },
                        onMove: function (a) {
                            var s = n.s,
                                i = c({}, a),
                                r = s.eventData;
                            (i.drag = !0),
                                (i.event = s.event),
                                (i.eventData = r),
                                (i.external = !0),
                                (i.resource = r && r.currentResource && r.currentResource.id),
                                (!e && i.isTouch) || i.domEvent.preventDefault(),
                                e ? n._hook("onDragMove", i) : (Math.abs(i.deltaX) > 7 || Math.abs(i.deltaY) > 7) && (clearTimeout(t), !i.isTouch && s.drag && !1 !== s.event.editable && ((e = !0), n._hook("onDragStart", i)));
                        },
                        onPress: function () {
                            n.s.actionable && n.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            n.setState({ isActive: !1 });
                        },
                        onStart: function (a) {
                            var s = n.s;
                            return (
                                a.isTouch &&
                                    s.drag &&
                                    !1 !== s.event.editable &&
                                    !e &&
                                    (t = setTimeout(function () {
                                        var t = c({}, a),
                                            i = s.eventData;
                                        (t.drag = !0), (t.event = s.event), (t.eventData = i), (t.resource = i && i.currentResource && i.currentResource.id), n._hook("onDragModeOn", t), n._hook("onDragStart", t), (e = !0);
                                    }, 350)),
                                { ripple: s.actionable && s.ripple }
                            );
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    this._cssClass =
                        this._className +
                        " mbsc-list-item" +
                        this._theme +
                        this._hb +
                        this._rtl +
                        (e.actionable ? " mbsc-list-item-actionable" : "") +
                        (t.hasFocus ? " mbsc-focus" : "") +
                        (t.hasHover ? " mbsc-hover" : "") +
                        (t.isActive ? " mbsc-active" : "") +
                        (e.selected ? " mbsc-selected" : "");
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                (t.defaults = { actionable: !0, ripple: !1 }),
                (t._name = "ListItem"),
                t
            );
        })(Xa);
    var yl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a = t.props;
                        a.actionable, a.children, a.className, a.drag, a.event, a.eventData, a.ripple, a.rtl;
                        var s = a.theme;
                        a.themeVariant, a.onHoverIn, a.onHoverOut, a.onDragEnd, a.onDragMove, a.onDragStart, a.onDragModeOn, a.onDragModeOff, a.onDelete, a.onClick;
                        var i = d(a, [
                            "actionable",
                            "children",
                            "className",
                            "drag",
                            "event",
                            "eventData",
                            "ripple",
                            "rtl",
                            "theme",
                            "themeVariant",
                            "onHoverIn",
                            "onHoverOut",
                            "onDragEnd",
                            "onDragMove",
                            "onDragStart",
                            "onDragModeOn",
                            "onDragModeOff",
                            "onDelete",
                            "onClick",
                        ]);
                        return Gn(
                            "div",
                            c({ tabIndex: 0, ref: t._setEl, onClick: t._onClick, className: t._cssClass }, i),
                            Gn("div", { dangerouslySetInnerHTML: t.textParam }),
                            n,
                            Gn("div", { className: "mbsc-list-item-background mbsc-" + s })
                        );
                    })(0, this, e.children);
                }),
                t
            );
        })(gl),
        bl = "mbsc-def";
    function xl(e, t, n, a, s, i, r) {
        for (var o = !1 !== r.showEventBuffer, l = "start-end" === i, c = r.exclusiveEndDates ? n : Ht($t(n, 1)), d = 0, h = Object.keys(e); d < h.length; d++)
            for (var u = e[h[d]], m = Ht(t); m < c; m.setDate(m.getDate() + 1)) {
                var _ = u[Lt(m)];
                if (_) {
                    if ((a || s) && _.allDay[0] && (!l || Rt(m, t) || Rt(m, n))) return _.allDay[0].original;
                    if (!a)
                        for (var p = 0, v = _.data; p < v.length; p++) {
                            var f = v[p],
                                g = f.original,
                                y = o && f.bufferStart ? f.bufferStart : f.startDate,
                                b = o && f.bufferEnd ? f.bufferEnd : f.endDate;
                            if (l) {
                                if (Mt(y, b, t, t, !0)) return g;
                                if (Mt(y, b, n, n)) return g;
                            } else if (Mt(y, b, t, n)) return g;
                        }
                }
            }
        return !1;
    }
    function Dl(e, t, n, a, s, i, r, o, l) {
        var c = e.allDay || n,
            d = l && e.bufferStart ? e.bufferStart : e.startDate;
        if (a && n && !s) {
            var h = o[Lt(d)];
            return d < i ? i : r[h + (tn(d.getDay(), t.startDay, t.endDay) ? 0 : 1)].date;
        }
        return c ? jt(t, d.getFullYear(), d.getMonth(), d.getDate()) : d;
    }
    function Tl(e, t, n, a, s, i, r, o, l) {
        var c = e.allDay || n,
            d = l && e.bufferEnd ? e.bufferEnd : e.endDate;
        if (a && n && !s) {
            var h = o[Lt(It(t, e.allDay, e.startDate, d))],
                u = d >= i || h >= r.length - 1 ? i : r[h + 1].date;
            return It(t, !1, e.startDate, u);
        }
        var m = c ? It(t, e.allDay, e.startDate, d) : d;
        return c ? jt(t, m.getFullYear(), m.getMonth(), m.getDate(), 23, 59, 59, 999) : m;
    }
    function Sl(e, t, n, a, s, i, r, o, l, c, d, h, u, m) {
        for (var _ = !1 !== e.showEventBuffer, p = n.allDay ? l : c, v = n.allDay ? d : h, f = Dl(n, e, i, r, o, p, u, m, _), g = Tl(n, e, i, r, o, v, u, m, _), y = !1, b = 0, x = t; b < x.length; b++) {
            for (var D = x[b], T = 0, S = !1, C = void 0, w = 0, k = D.stacks; w < k.length; w++) {
                for (var M = k[w], E = !1, N = 0, I = M; N < I.length; N++) {
                    var L = I[N],
                        H = L.allDay ? l : c,
                        Y = L.allDay ? d : h;
                    Mt(Dl(L, e, i, r, o, H, u, m, _), Tl(L, e, i, r, o, Y, u, m, _), f, g, !0) && ((E = !0), (S = !0), C ? (a[n.uid] = a[n.uid] || T) : (a[L.uid] = T + 1));
                }
                E || C || (C = M), T++;
            }
            S && (C ? C.push(n) : "all" === s || D.stacks.length < +s ? D.stacks.push([n]) : ((n.position = ie), D.more.push(n)), (y = !0));
        }
        y || ((a[n.uid] = 0), t.push({ stacks: [[n]], more: [] }));
    }
    function Cl(e) {
        return (e = Math.abs(Te(e))) > 60
            ? 60 * Te(e / 60)
            : 60 % e == 0
            ? e
            : [6, 10, 12, 15, 20, 30].reduce(function (t, n) {
                  return Math.abs(n - e) < Math.abs(t - e) ? n : t;
              });
    }
    function wl(e, t, n, a) {
        var s = kt(e),
            i = kt(t);
        return n > s && (s = n), a < i && (i = a), i - s;
    }
    function kl(e, t, n, a, s, i, r, o, l) {
        var c = i - s + 1,
            d = e,
            h = t,
            u = $t(Ht(h), 1);
        d < n && (d = n), h > a && (h = u = a);
        var m = kt(d),
            _ = kt(h);
        s > m && (m = s), i < _ && (_ = i), Rt(d, h) || (m > i && (m = i), _ < s && (_ = s));
        var p = 0;
        if (Rt(d, h)) p = l ? c : _ - m;
        else for (var v = Ht(d); v < u; v.setDate(v.getDate() + 1)) tn(v.getDay(), r, o) && (!l && Rt(v, d) ? (p += c - m + s) : !l && Rt(v, h) ? (p += _ - s) : (p += c));
        return p;
    }
    function Ml(e, t, n, a, s, i) {
        a && a > e && (e = a);
        var r = kt(e);
        return (t > r || (s !== ie && i !== ie && !tn(e.getDay(), s, i))) && (r = t), (100 * (r - t)) / n;
    }
    function El(e, t, n, a, s) {
        e = e || {};
        var i = Object.keys(e),
            r = {},
            o = t.map(function (e) {
                return e.id;
            }),
            l = n.map(function (e) {
                return e.id;
            });
        o.forEach(function (e) {
            (r[e] = {}),
                l.forEach(function (t) {
                    r[e][t] = {};
                });
        });
        for (
            var c = function (t) {
                    for (
                        var n = function (e) {
                                var n = e.resource,
                                    i = e.slot,
                                    c = n !== ie && a ? (he(n) ? n : [n]) : o,
                                    d = i !== ie && s ? [i] : l;
                                c.forEach(function (n) {
                                    var a = r[n];
                                    a &&
                                        d.forEach(function (n) {
                                            var s = a[n];
                                            s && (s[t] || (s[t] = []), s[t].push(e));
                                        });
                                });
                            },
                            i = 0,
                            c = e[t];
                        i < c.length;
                        i++
                    ) {
                        n(c[i]);
                    }
                },
                d = 0,
                h = i;
            d < h.length;
            d++
        ) {
            c(h[d]);
        }
        return r;
    }
    function Nl(e, t) {
        var n = new Date(e),
            a = new Date(+ft + t);
        return new Date(n.getFullYear(), n.getMonth(), n.getDate(), a.getHours(), a.getMinutes());
    }
    var Il = {},
        Ll = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._triggerClick("onClick", e);
                        var n = t.s,
                            a = Il[n.event.uid];
                        a && n.selected && a.next({ hasFocus: !1 });
                    }),
                    (t._onRightClick = function (e) {
                        t._triggerClick("onRightClick", e);
                    }),
                    (t._onDocTouch = function (e) {
                        wn(t._doc, Gs, t._onDocTouch), wn(t._doc, Ws, t._onDocTouch), (t._isDrag = !1), t._hook("onDragModeOff", { domEvent: e, event: t.s.event.original });
                    }),
                    (t._updateState = function (e) {
                        t.setState(e);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._render = function (e, t) {
                    var n = e.event,
                        a = new Date(n.date),
                        s = n.position,
                        i = n.startDate,
                        r = It(e, n.allDay, i, n.endDate),
                        o = e.isTimeline,
                        l = e.isListing,
                        d = n.original.more,
                        h = (d && o) || l || n.allDay,
                        u = !Rt(i, r),
                        m = u && Rt(i, a),
                        _ = u && Rt(r, a),
                        p = h && (!o || l || d),
                        v = o ? "timeline" : "schedule",
                        f = e.gridStartTime,
                        g = e.gridEndTime,
                        y = kt(i),
                        b = kt(r),
                        x = o && e.slot !== bl,
                        D = tn(r.getDay(), e.startDay, e.endDay),
                        T = e.singleDay ? $t(a, 1) : new Date(e.lastDay);
                    n.allDay || (T = Ut(e, T)),
                        (this._isStart = x || !u || m),
                        (this._isEnd = x || !u || (h || (o && !e.hasResY) ? r < T && D : _)),
                        x || h || !(f > y || g < y) || (this._isStart = !1),
                        x || h || !(g < b || f > b) || (this._isEnd = !1),
                        (this._isMore = d),
                        (this._isDrag = this._isDrag || e.isDrag),
                        (this._content = ie),
                        (this._rangeText = n.start + " - " + n.end),
                        (this._isAllDay = p),
                        (this._host = v),
                        (!n.allDay && ((o && !e.hasResY) || !u || m || _)) || (this._rangeText = n.allDayText || " "),
                        n.bufferBefore && (this._bufferStyleStart = o ? { width: n.bufferBefore } : { height: n.bufferBefore }),
                        n.bufferAfter && (this._bufferStyleEnd = o ? { width: n.bufferAfter } : { height: n.bufferAfter }),
                        (this._cssClass =
                            "mbsc-schedule-event" +
                            this._theme +
                            this._rtl +
                            (e.render || e.template ? " mbsc-schedule-event-custom" : "") +
                            (o ? " mbsc-timeline-event" : "") +
                            (l || d ? " mbsc-timeline-event-listing" : "") +
                            (this._isStart ? " mbsc-" + v + "-event-start" : "") +
                            (this._isEnd ? " mbsc-" + v + "-event-end" : "") +
                            (p ? " mbsc-schedule-event-all-day" : "") +
                            (x ? " mbsc-timeline-event-slot" : "") +
                            ((t.hasFocus && !e.inactive && !e.selected) || e.selected ? " mbsc-schedule-event-active" : "") +
                            (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-schedule-event-hover") +
                            (e.isDrag ? " mbsc-schedule-event-dragging" + (o ? " mbsc-timeline-event-dragging" : "") : "") +
                            (e.hidden ? " mbsc-schedule-event-hidden" : "") +
                            (e.inactive ? " mbsc-schedule-event-inactive" : "") +
                            (!1 === n.original.editable ? " mbsc-readonly-event" : "") +
                            (n.original.cssClass ? " " + n.original.cssClass : "")),
                        (this._style = c({}, s, { color: n.color, top: e.eventHeight && s.top !== ie ? s.top * e.eventHeight + "px" : s.top }));
                    var S,
                        C = e.render || e.renderContent;
                    if (C && !d) {
                        var w = C(n);
                        _e(w) ? (S = w) : (this._content = w);
                    } else (e.contentTemplate && !d) || (S = n.html);
                    S !== this._text && ((this._text = S), (this._html = S ? this._safeHtml(S) : ie), (this._shouldEnhance = S && !!C));
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n,
                        a = this,
                        s = this.s.event.uid,
                        i = this._el,
                        r = Il[s];
                    r || ((r = new m()), (Il[s] = r)),
                        (this._unsubscribe = r.subscribe(this._updateState)),
                        (this._doc = kn(i)),
                        (this._unlisten = Ji(i, {
                            keepFocus: !0,
                            onBlur: function () {
                                r.next({ hasFocus: !1 });
                            },
                            onDoubleClick: function (e) {
                                e.domEvent.stopPropagation(), a._triggerClick("onDoubleClick", e.domEvent);
                            },
                            onEnd: function (t) {
                                if (a._isDrag) {
                                    var s = a.s,
                                        r = c({}, t);
                                    r.domEvent.preventDefault(),
                                        (r.eventData = s.event),
                                        (r.resource = s.resource),
                                        (r.slot = s.slot),
                                        s.resize && e ? ((r.resize = !0), (r.direction = e)) : s.drag && (r.drag = !0),
                                        a._hook("onDragEnd", r),
                                        s.isDrag || (a._isDrag = !1),
                                        i && r.moved && i.blur();
                                }
                                clearTimeout(n), (e = ie);
                            },
                            onFocus: function () {
                                r.next({ hasFocus: !0 });
                            },
                            onHoverIn: function (e) {
                                r.next({ hasHover: !0 }), a._triggerClick("onHoverIn", e);
                            },
                            onHoverOut: function (e) {
                                r.next({ hasHover: !1 }), a._triggerClick("onHoverOut", e);
                            },
                            onKeyDown: function (e) {
                                var t = a.s.event.original;
                                switch (e.keyCode) {
                                    case ti:
                                    case ni:
                                        i.click(), e.preventDefault();
                                        break;
                                    case 8:
                                    case 46:
                                        !1 !== t.editable && a._hook("onDelete", { domEvent: e, event: t, resource: a.s.resource, slot: a.s.slot, source: a._host });
                                }
                            },
                            onMove: function (s) {
                                var i = a.s,
                                    r = c({}, s);
                                if (((r.eventData = i.event), (r.resource = i.resource), (r.slot = i.slot), e)) (r.resize = !0), (r.direction = e);
                                else {
                                    if (!i.drag) return;
                                    r.drag = !0;
                                }
                                !1 !== i.event.original.editable &&
                                    ((!a._isDrag && r.isTouch) || r.domEvent.preventDefault(),
                                    a._isDrag ? a._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(n), r.isTouch || ((r.domEvent = t), (a._isDrag = !0), a._hook("onDragStart", r))));
                            },
                            onStart: function (s) {
                                t = s.domEvent;
                                var i = a.s,
                                    r = c({}, s),
                                    o = t.target;
                                if (((r.eventData = i.event), (r.resource = i.resource), (r.slot = i.slot), i.resize && o.classList.contains("mbsc-schedule-event-resize")))
                                    (e = o.classList.contains("mbsc-schedule-event-resize-start") ? "start" : "end"), (r.resize = !0), (r.direction = e);
                                else {
                                    if (!i.drag) return;
                                    r.drag = !0;
                                }
                                !1 !== i.event.original.editable &&
                                    (a._isDrag
                                        ? (t.stopPropagation(), a._hook("onDragStart", r))
                                        : r.isTouch &&
                                          (n = setTimeout(function () {
                                              a._hook("onDragModeOn", r), a._hook("onDragStart", r), (a._isDrag = !0);
                                          }, 350)));
                            },
                        })),
                        this._isDrag && (Cn(this._doc, Gs, this._onDocTouch), Cn(this._doc, Ws, this._onDocTouch));
                }),
                (t.prototype._destroy = function () {
                    if ((this._el && this._el.blur(), this._unsubscribe)) {
                        var e = this.s.event.uid,
                            t = Il[e];
                        t && (t.unsubscribe(this._unsubscribe), t.nr || delete Il[e]);
                    }
                    this._unlisten && this._unlisten(), wn(this._doc, Gs, this._onDocTouch), wn(this._doc, Ws, this._onDocTouch);
                }),
                (t.prototype._triggerClick = function (e, t) {
                    var n = this.s;
                    this._hook(e, { date: n.event.date, domEvent: t, event: n.event.original, resource: n.resource, slot: n.slot, source: this._host });
                }),
                t
            );
        })(Xa);
    var Hl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n,
                            a,
                            s,
                            i = e.event,
                            r = t._isAllDay,
                            o = e.isTimeline,
                            l = t._rtl,
                            d = t._theme,
                            h = e.resize && !1 !== i.original.editable,
                            u = (((n = {}).onContextMenu = t._onRightClick), n);
                        return Gn(
                            "div",
                            c({ tabIndex: 0, className: t._cssClass, "data-id": i.id, style: t._style, ref: t._setEl, title: i.tooltip, onClick: t._onClick }, u),
                            t._isStart &&
                                i.bufferBefore &&
                                (e.renderBufferBefore && _e((a = e.renderBufferBefore(i))) && ((s = t._safeHtml(a)), (t._shouldEnhance = !0)),
                                Gn(
                                    "div",
                                    {
                                        className: "mbsc-" + t._host + "-event-buffer mbsc-" + t._host + "-event-buffer-before" + (a ? "" : " mbsc-schedule-event-buffer-background") + d + l,
                                        style: t._bufferStyleStart,
                                        dangerouslySetInnerHTML: s,
                                    },
                                    a
                                )),
                            t._isEnd &&
                                i.bufferAfter &&
                                (function () {
                                    var n, a;
                                    return (
                                        e.renderBufferAfter && _e((n = e.renderBufferAfter(i))) && ((a = t._safeHtml(n)), (t._shouldEnhance = !0)),
                                        Gn(
                                            "div",
                                            {
                                                className: "mbsc-" + t._host + "-event-buffer mbsc-" + t._host + "-event-buffer-after" + (n ? "" : " mbsc-schedule-event-buffer-background") + d + l,
                                                style: t._bufferStyleEnd,
                                                dangerouslySetInnerHTML: a,
                                            },
                                            n
                                        )
                                    );
                                })(),
                            t._isStart &&
                                h &&
                                Gn("div", { className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-start" + (o ? " mbsc-timeline-event-resize" : "") + (e.isDrag ? " mbsc-schedule-event-resize-start-touch" : "") + l }),
                            t._isEnd && h && Gn("div", { className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-end" + (o ? " mbsc-timeline-event-resize" : "") + (e.isDrag ? " mbsc-schedule-event-resize-end-touch" : "") + l }),
                            e.render && !t._isMore
                                ? t._html
                                    ? Gn("div", { style: { height: "100%" }, dangerouslySetInnerHTML: t._html })
                                    : t._content
                                : Gn(
                                      Qn,
                                      null,
                                      !r && !o && !t._isMore && Gn("div", { className: "mbsc-schedule-event-bar" + d + l }),
                                      Gn("div", {
                                          className: "mbsc-schedule-event-background" + (o ? " mbsc-timeline-event-background" : "") + (r ? " mbsc-schedule-event-all-day-background" : "") + d,
                                          style: { background: i.style.background },
                                      }),
                                      Gn(
                                          "div",
                                          { "aria-hidden": "true", className: "mbsc-schedule-event-inner" + d + (r ? " mbsc-schedule-event-all-day-inner" : "") + (i.cssClass || ""), style: { color: i.style.color } },
                                          Gn("div", { className: "mbsc-schedule-event-title" + (r ? " mbsc-schedule-event-all-day-title" : "") + d, dangerouslySetInnerHTML: t._html }, t._content),
                                          !r && !t._isMore && Gn("div", { className: "mbsc-schedule-event-range" + d }, t._rangeText)
                                      ),
                                      i.ariaLabel && Gn("div", { className: "mbsc-hidden-content" }, i.ariaLabel)
                                  ),
                            Gn("div", { dangerouslySetInnerHTML: t.textParam })
                        );
                    })(e, this);
                }),
                t
            );
        })(Ll),
        Yl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e = this;
                    clearInterval(this._timer),
                        (this._timer = setInterval(function () {
                            e._zone
                                ? e._zone.runOutsideAngular(function () {
                                      e.forceUpdate();
                                  })
                                : e.forceUpdate();
                        }, 1e4));
                }),
                (t.prototype._destroy = function () {
                    clearInterval(this._timer);
                }),
                (t.prototype._render = function (e) {
                    var t = jt(e),
                        n = e.rtl,
                        a = e.displayedDays,
                        s = e.displayedTime,
                        i = e.startTime,
                        r = Ce(kt(t) / gt) * gt,
                        o = e.timezones,
                        l = { amText: e.amText, pmText: e.pmText };
                    if (o && xt(t)) {
                        this._times = [];
                        for (var c = 0, d = o; c < d.length; c++) {
                            var h = d[c],
                                u = t.clone();
                            u.setTimezone(h.timezone), this._times.push(qt(e.timeFormat, u, l));
                        }
                    } else this._time = qt(e.timeFormat, t, l);
                    this._cssClass = "mbsc-schedule-time-indicator mbsc-schedule-time-indicator-" + e.orientation + this._theme + this._rtl + " " + (r < i || r > i + s || !tn(t.getDay(), e.startDay, e.endDay) ? " mbsc-hidden" : "");
                    var m = e.hasResY ? 0 : Pt(e.firstDay, t, e.startDay, e.endDay);
                    if ("x" === e.orientation) {
                        var _ = (100 * m) / a + "%",
                            p = o && 4.25 * o.length + "em";
                        (this._pos = { left: o && !n ? p : ie, right: o && n ? p : ie, top: (100 * (r - i)) / s + "%" }), (this._dayPos = { left: n ? "" : _, right: n ? _ : "", width: 100 / a + "%" });
                    } else {
                        var v = (100 * (m * s + r - i)) / (a * s) + "%";
                        this._pos = { left: n ? "" : v, right: n ? v : "" };
                    }
                }),
                t
            );
        })(Xa);
    var Ol = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n = e.timezones;
                        return Gn(
                            "div",
                            { "aria-hidden": "true", className: t._cssClass, style: t._pos },
                            Gn(
                                "div",
                                { className: (n ? "mbsc-flex " : "") + "mbsc-schedule-time-indicator-time mbsc-schedule-time-indicator-time-" + e.orientation + t._theme + t._rtl },
                                n
                                    ? n.map(function (e, n) {
                                          return Gn("div", { key: n, className: "mbsc-schedule-time-indicator-tz" + t._theme + t._rtl }, t._times[n]);
                                      })
                                    : t._time
                            ),
                            e.showDayIndicator && Gn("div", { className: "mbsc-schedule-time-indicator-day" + t._theme + t._rtl, style: t._dayPos })
                        );
                    })(e, this);
                }),
                t
            );
        })(Yl),
        Pl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function () {
                        var e = t.s;
                        e.selectable && e.onClick(e.timestamp);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._render = function (e, t) {
                    var n = new Date(e.timestamp);
                    (this._cssClass =
                        "mbsc-schedule-header-item " +
                        this._className +
                        this._theme +
                        this._rtl +
                        this._hb +
                        (e.largeNames ? " mbsc-schedule-header-item-large" : "") +
                        (e.selected ? " mbsc-selected" : "") +
                        (t.hasHover ? " mbsc-hover" : "")),
                        (this._data = { date: n, events: e.events || [], resource: e.resource, selected: e.selected }),
                        (this._day = n.getDay());
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ji(this._el, {
                        onHoverIn: function () {
                            e.s.selectable && e.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            e.s.selectable && e.setState({ hasHover: !1 });
                        },
                    });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                t
            );
        })(Xa);
    var Fl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n) {
                        var a;
                        return (
                            e.renderDay && (a = e.renderDay(n._data)),
                            e.renderDayContent && (a = e.renderDayContent(n._data)),
                            _e(a) && ((a = Gn("div", { dangerouslySetInnerHTML: n._safeHtml(a) })), (n._shouldEnhance = !0)),
                            Gn(
                                "div",
                                { ref: n._setEl, className: n._cssClass, onClick: n._onClick, style: { background: e.background } },
                                e.renderDay
                                    ? a
                                    : Gn(
                                          Qn,
                                          null,
                                          Gn(
                                              "div",
                                              { "aria-hidden": "true", className: "mbsc-schedule-header-dayname" + n._theme + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-dayname-curr" : "") },
                                              e.dayNames[n._day]
                                          ),
                                          Gn(
                                              "div",
                                              {
                                                  "aria-hidden": "true",
                                                  className: "mbsc-schedule-header-day" + n._theme + n._rtl + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-day-today" : "") + (t.hasHover ? " mbsc-hover" : ""),
                                              },
                                              e.day
                                          ),
                                          e.label && Gn("div", { className: "mbsc-hidden-content", "aria-pressed": e.selectable ? (e.selected ? "true" : "false") : ie, role: e.selectable ? "button" : ie }, e.label),
                                          e.renderDayContent && a
                                      )
                            )
                        );
                    })(e, t, this);
                }),
                t
            );
        })(Pl),
        Rl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._isScrolling = 0),
                    (t._onScroll = function () {}),
                    (t._onMouseLeave = function (e, n) {
                        !t._cursorTimeCont || (t.state.dragData && !n) || ((t._cursorTimeCont.style.visibility = "hidden"), (t._isCursorTimeVisible = !1));
                    }),
                    (t._onMouseMove = function (e) {
                        if (t._showCursorTime) {
                            var n = t.s,
                                a = n.rtl,
                                s = t._isTimeline,
                                i = t._cursorTimeCont;
                            if (
                                (!t._isTouch || t._tempStart ? !t._isCursorTimeVisible && e && ((i.style.visibility = "visible"), (t._isCursorTimeVisible = !0)) : ((i.style.visibility = "hidden"), (t._isCursorTimeVisible = !1)),
                                t._isCursorTimeVisible && t._colWidth)
                            ) {
                                var r = t._gridCont.getBoundingClientRect(),
                                    o = e ? e.clientX : t._cursorX || 0,
                                    l = e ? e.clientY : t._cursorY || 0,
                                    c = a ? r.right - o : o - r.left,
                                    d = ce(l - r.top, 8, t._colHeight),
                                    h = void 0,
                                    u = void 0,
                                    m = void 0;
                                if (t._dragDelta !== ie) (u = jt(n, t._dragDelta < 0 ? t._tempStart : t._tempEnd)), (h = s && !t._hasResY ? t._dayIndexMap[Lt(u)] : 0), (m = 0 === (m = kt(u)) ? (t._dragDelta < 0 ? m : bt) : m);
                                else {
                                    (h = s && !t._hasResY ? ce(Ce(c / t._colWidth), 0, t._daysNr - 1) : 0),
                                        (m = t._startTime + Se(Ce(s ? (t._time * (c - h * t._colWidth)) / t._colWidth : (t._time * (d - 8)) / (t._colHeight - 16)), n.dragTimeStep * gt));
                                    var _ = t._days[h].date,
                                        p = new Date(+ft + m);
                                    u = jt(n, _.getFullYear(), _.getMonth(), _.getDate(), p.getHours(), p.getMinutes());
                                }
                                var v = t._time * (s ? t._daysNr : 1),
                                    f = s ? (a ? "right" : "left") : "top",
                                    g = i.style;
                                (g[f] = (100 * (h * t._time + m - t._startTime)) / v + "%"), (g[a ? "left" : "right"] = ""), (i.textContent = qt(n.timeFormat, u, n)), (t._cursorX = o), (t._cursorY = l);
                            }
                        }
                    }),
                    (t._onEventClick = function (e) {
                        var n = e.event.more;
                        n ? t._hook("onMoreClick", { context: t._scrollCont, date: e.date, key: e.event.id, list: n, target: e.domEvent.target }) : t._hook("onEventClick", e);
                    }),
                    (t._onEventDragModeOn = function (e) {
                        t.s.externalDrag && e.drag && !e.create && tl.next(c({}, e, { create: !0, eventName: "onDragModeOn", external: !0, from: t }));
                        var n = e.create ? t._tempEvent : e.eventData,
                            a = e.create ? t._tempResource : e.resource,
                            s = e.create ? t._tempSlot : e.slot;
                        t.setState({ dragData: { draggedEvent: n, originDates: e.external ? ie : t._getDragDates(n, a, s), resource: a }, isTouchDrag: !0 });
                    }),
                    (t._onEventDragModeOff = function (e) {
                        t._hook("onEventDragEnd", {
                            domEvent: e.domEvent,
                            event: e.create ? t._tempEvent.original : e.event,
                            resource: t._tempResource !== bl ? t._tempResource : ie,
                            slot: t._tempSlot !== bl ? t._tempSlot : ie,
                            source: t._isTimeline ? "timeline" : "schedule",
                        }),
                            t.setState({ dragData: ie, isTouchDrag: !1 });
                    }),
                    (t._onEventDragStart = function (e) {
                        var n = t.s,
                            a = e.click,
                            s = n.eventList,
                            i = t._isTimeline,
                            r = t._visibleResources,
                            o = t._slots,
                            l = n.dragTimeStep,
                            d = e.startX,
                            h = e.startY;
                        (t._isTouch = e.isTouch), (t._scrollY = 0), (t._scrollX = 0), t._calcGridSizes();
                        var u = n.rtl ? t._gridRight - d : d - t._gridLeft,
                            m = ce(h - t._gridTop, 8, t._colHeight - 9),
                            _ = s ? t._cols : t._days,
                            p = _.length,
                            v = t._colWidth,
                            f = v ? Ce(u / v) : 1,
                            g = t._resourceTops,
                            y = t._scrollCont.scrollTop,
                            b = 0,
                            x = f,
                            D = 0;
                        if (n.externalDrag && e.drag && !e.create) {
                            var T = Rn(e.domEvent.target, ".mbsc-schedule-event", t._el).cloneNode(!0),
                                S = T.classList;
                            (T.style.display = "none"),
                                S.add("mbsc-drag-clone", "mbsc-schedule-drag-clone", "mbsc-font"),
                                S.remove("mbsc-schedule-event-hover"),
                                (t._clone = T),
                                (t._body = kn(t._el).body),
                                t._body.appendChild(T),
                                (t._eventDropped = !1),
                                tl.next(c({}, e, { create: !0, dragData: e.eventData.original, eventName: "onDragStart", external: !0, from: t }));
                        }
                        if (i) {
                            if (((D = v ? Ce(u / (v / o.length)) % o.length : 0), t._hasResY))
                                _.forEach(function (e, t) {
                                    r.forEach(function (n, a) {
                                        m > g[e.dateKey + "-" + n.id] && ((x = t), (b = a));
                                    });
                                });
                            else {
                                r.forEach(function (e, t) {
                                    m > g[e.id] && (b = t);
                                });
                                var C = m - y + t.state.headerHeight;
                                if (y && C < t._fixedHeight && m - y > 0)
                                    for (var w = 0, k = t._fixedResources; w < k.length; w++) {
                                        var M = k[w];
                                        C > t._fixedResourceTops[M.key] && (b = M.index);
                                    }
                            }
                            t._startSlotIndex = D;
                        } else {
                            var E = t._groupByResource,
                                N = E ? p : t._hasSlots ? t._slots.length : r.length;
                            (b = E ? Ce(f / N) : f % N), (x = E ? f % N : Ce(f / N));
                        }
                        var I = e.external ? ie : r[b],
                            L = I ? I.id : ie,
                            H = e.external ? ie : o[D],
                            Y = H ? H.id : ie;
                        if (I && !1 === I.eventCreation) return !1;
                        if (e.create) {
                            x = ce(x, 0, p - 1);
                            var O = !i && n.showAllDay && e.endY < t._gridContTop,
                                P = "day" === n.type && 1 === n.size ? t._firstDay : _[x].date,
                                F = s || (!e.external && !a) ? l * gt : t._stepCell,
                                R = t._getGridTime(P, u, m, x, a ? t._stepCell / gt : l),
                                z = !t._isDailyResolution || O || s ? (O ? P : Ut(n, P)) : R,
                                V =
                                    "year" === n.resolution
                                        ? en(z, 12, n)
                                        : "quarter" === n.resolution
                                        ? en(z, 3, n)
                                        : "month" === n.resolution
                                        ? en(z, 1, n)
                                        : "week" === n.resolution
                                        ? $t(z, n.endDay - n.startDay + 1 + (n.endDay < n.startDay ? 7 : 0))
                                        : $t(z, 1),
                                A = n.exclusiveEndDates ? V : new Date(+V - 1),
                                W = O || s ? A : nn(jt(n, +z + F), a ? 1 : l),
                                U = n.extendDefaultEvent ? n.extendDefaultEvent({ resource: L, slot: Y, start: z }) : ie,
                                B = c({ allDay: O, end: W, id: ll(), resource: I && L !== bl ? L : ie, slot: H && Y !== bl ? Y : ie, start: z, title: n.newEventText }, U, e.dragData),
                                j = t._getEventData(B, P, I);
                            if ((i && L !== ie && t._setRowHeight && (j.position.top = ce(Ce((m - (t._fixedResourceTops[L] ? y : 0) - g[L]) / t._eventHeight), 0, t._eventRows[L] - 1)), e.dragData)) {
                                var K = +j.endDate - +j.startDate;
                                ks(e.dragData.dragInTime, ie, n.dragInTime) && ((j.startDate = P), (j.endDate = new Date(+P + K)));
                            }
                            (t._tempEvent = j), (t._tempResource = L), (t._tempSlot = Y);
                        }
                        return (
                            t._hook("onPopoverClose", { source: "dragStart" }),
                            a ||
                                t._hook("onEventDragStart", {
                                    action: e.create ? "create" : e.resize ? "resize" : "move",
                                    domEvent: e.domEvent,
                                    event: (e.create ? t._tempEvent : e.eventData).original,
                                    resource: L !== bl ? L : ie,
                                    slot: Y !== bl ? Y : ie,
                                    source: i ? "timeline" : "schedule",
                                }),
                            !0
                        );
                    }),
                    (t._onEventDragMove = function (e) {
                        clearTimeout(t._scrollTimer);
                        var n = t.s,
                            a = n.rtl,
                            s = a ? -1 : 1,
                            i = t._isTimeline,
                            r = n.eventList,
                            o = "month" === n.resolution || "year" === n.resolution,
                            l = r ? t._cols : t._days,
                            d = t._colWidth,
                            h = l.length,
                            u = t._slots,
                            m = t._groupByResource,
                            _ = t._visibleResources,
                            p = t.state.dragData,
                            v = n.dragTimeStep,
                            f = n.timeFormat,
                            g = e.startX,
                            y = ce(e.endX, t._gridContLeft, t._gridContRight - 1),
                            b = ce(e.endY, t._gridContTop, t._gridContBottom - 1),
                            x = b - e.startY + t._scrollY,
                            D = a ? g - y + t._scrollX : y - g + t._scrollX,
                            T = i ? D : x,
                            S = i ? d : t._colHeight - 16,
                            C = t._gridRight - t._gridLeft - 1,
                            w = ce(e.startY - t._gridTop, 8, t._colHeight - 9),
                            k = ce(a ? t._gridRight + t._scrollX - y : y - t._gridLeft + t._scrollX, 0, C),
                            M = ce(b - t._gridTop + t._scrollY, 8, t._colHeight - 9),
                            E = Ce((a ? t._gridRight - g : g - t._gridLeft) / d),
                            N = Ce(k / d),
                            I = n.showAllDay && e.endY < t._gridContTop,
                            L = t._resourceTops,
                            H = t._hasResY,
                            Y = t._scrollCont,
                            O = Y.scrollTop,
                            P = e.create ? t._tempEvent : e.eventData,
                            F = P.original,
                            R = c({}, P),
                            z = E,
                            V = N,
                            A = 0,
                            W = 0,
                            U = !1,
                            B = t._gridContBottom - e.endY,
                            j = e.endY - t._gridContTop,
                            K = e.endX - t._gridContLeft,
                            X = t._gridContRight - e.endX,
                            J = (Y.scrollWidth - Y.clientWidth) * s,
                            q = a ? 0 : J,
                            G = a ? J : 0;
                        if (n.externalDrag && e.drag && !e.create && (tl.next(c({}, e, { clone: t._clone, create: !0, dragData: F, eventName: "onDragMove", external: !0, from: t })), !t._onCalendar))
                            return sl(e, t._clone), void (p || t.setState({ dragData: { draggedEvent: R } }));
                        if (
                            (B < 30 && O < Y.scrollHeight - Y.clientHeight && ((Y.scrollTop += 5), (t._scrollY += 5), (U = !0)),
                            j < 30 && !I && O > 0 && ((Y.scrollTop -= 5), (t._scrollY -= 5), (U = !0)),
                            K < 30 && Y.scrollLeft > G && ((Y.scrollLeft -= 5), (t._scrollX -= 5 * s), (U = !0)),
                            X < 30 && Y.scrollLeft < q && ((Y.scrollLeft += 5), (t._scrollX += 5 * s), (U = !0)),
                            U &&
                                (t._scrollTimer = setTimeout(function () {
                                    t._onEventDragMove(e);
                                }, 20)),
                            i)
                        )
                            if (((W = Ce(k / (d / u.length)) % u.length), H))
                                l.forEach(function (e, t) {
                                    _.forEach(function (n, a) {
                                        w > L[e.dateKey + "-" + n.id] && (z = t), M > L[e.dateKey + "-" + n.id] && ((V = t), (A = a));
                                    });
                                });
                            else {
                                _.forEach(function (e, t) {
                                    M > L[e.id] && (A = t);
                                });
                                var Z = M - O + t.state.headerHeight;
                                if (O && Z < t._fixedHeight && M - O > 0)
                                    for (var Q = 0, $ = t._fixedResources; Q < $.length; Q++) {
                                        var ee = $[Q];
                                        Z > t._fixedResourceTops[ee.key] && (A = ee.index);
                                    }
                            }
                        else {
                            var te = m ? h : t._resources.length;
                            (z = m ? E % te : Ce(E / te)), (V = m ? N % te : Ce(N / te)), (A = m ? Ce(N / te) : N % te);
                        }
                        (z = ce(z, 0, h - 1)), (V = ce(V, 0, h - 1));
                        var ne = P.startDate,
                            ae = P.endDate,
                            se = +ae - +ne,
                            re = t._time,
                            oe = Ce((re * T) / S),
                            le = _[A],
                            de = e.create ? t._tempResource : e.resource,
                            he = e.create ? t._tempSlot : e.slot;
                        if (!1 === le.eventCreation && t._tempResource === ie) return !1;
                        var ue,
                            me = u[W].id,
                            _e = !1 !== le.eventCreation ? le.id : t._tempResource,
                            pe = P.allDay,
                            ve = pe ? ie : n,
                            fe = pe || r,
                            ge = ne,
                            ye = ae,
                            be = !0,
                            xe = !0,
                            De = !0,
                            Te = l[z].date,
                            Se = l[V].date,
                            we = "day" === n.type && 1 === n.size ? 0 : Ot(Te, Se),
                            ke = V - z,
                            Me = "year" === n.resolution ? 12 : 1,
                            Ee = we - ke;
                        if (
                            (((e.drag && !e.create) || e.external) &&
                                (e.external ||
                                    ((be = Ms(F.dragBetweenResources, t._resourcesMap[de].eventDragBetweenResources, n.dragBetweenResources)),
                                    (xe = Es(F.dragBetweenSlots, t._resourcesMap[de].eventDragBetweenSlots, u[t._startSlotIndex || 0].eventDragBetweenSlots, n.dragBetweenSlots))),
                                (De = ks(F.dragInTime, e.external || t._resourcesMap[de].eventDragInTime, n.dragInTime))),
                            e.drag || e.external)
                        )
                            if ((i || be || de === _e || (we = t._dragDayDelta), i && r && o)) (ge = en(ne, ke * Me, n)), (ye = en(ae, ke * Me, n));
                            else {
                                if (((fe = (pe = I || (i && P.allDay)) || r), (ve = pe ? ie : n), (!i && !I && (P.allDay || e.external)) || (i && e.external && !P.allDay && !r))) {
                                    var Ne = Ht($t(ne, we));
                                    ge = t._getGridTime(Ne, k, M, V, v);
                                } else !i || fe || H ? ((ue = $t(ne, we)), (ge = fe ? ue : nn(jt(ve, +ue + oe), v))) : (ge = nn(jt(n, +ne + oe + (bt - re) * we + re * Ee), v));
                                !1 !== le.eventCreation || i || (ge = jt(n, t._tempStart)), (ye = jt(ve, +ge + se));
                            }
                        else {
                            var Ie = i ? ke : N - E,
                                Le = e.create ? (Ie ? Ie > 0 : T > 0) : "end" === e.direction,
                                He = Ot(ne, ae);
                            !i && m && de !== _e && (we = t._dragDayDelta),
                                Le
                                    ? i && r && o
                                        ? (ye = en(ae, ke * Me, n))
                                        : !i || fe || H
                                        ? ((ue = $t(ae, Math.max(-He, we))), (ye = fe ? ue : nn(jt(ve, +ue + oe), v)), !fe && (kt(ye) > t._endTime + 1 || ye >= $t(Ht(ue), 1)) && (ye = jt(n, +Ht(ue) + t._endTime + 1)))
                                        : (ye = nn(jt(n, +ae + oe + we * (bt - re) + re * Ee), v))
                                    : i && r && o
                                    ? (ge = en(ne, ke * Me, n))
                                    : !i || fe || H
                                    ? ((ue = $t(ne, Math.min(He, we))), (ge = fe ? ue : nn(jt(ve, +ue + oe), v)), !fe && (kt(ge) < t._startTime || ge < Ht(ue)) && (ge = jt(n, +Ht(ue) + t._startTime)))
                                    : (ge = nn(jt(n, +ne + oe + we * (bt - re) + re * Ee), v)),
                                (_e = de),
                                fe && ye < ge && (Le ? (ye = jt(n, ge)) : (ge = jt(n, ye))),
                                !fe && (ye < ge || Math.abs(+ye - +ge) < v * gt) && (Le ? (ye = jt(n, +ge + v * gt)) : (ge = jt(n, +ye - v * gt)));
                        }
                        if (
                            ((e.drag || e.external) && (De || ((ge = ne), (ye = ae), (pe = t._tempAllDay)), be || (_e = de), xe || (me = he)),
                            t._tempStart !== +ge || t._tempEnd !== +ye || t._tempAllDay !== pe || t._tempResource !== _e || t._tempSlot !== me)
                        ) {
                            var Ye = void 0,
                                Oe = void 0;
                            t._isDailyResolution ? ((Ye = qt(f, ge, n)), (Oe = qt(f, ye, n))) : ((Ye = qt(n.dateFormat, ge, n)), (Oe = qt(n.dateFormat, It(n, pe, ge, ye), n))),
                                (R.startDate = ge),
                                (R.endDate = ye),
                                (R.start = Ye),
                                (R.end = Oe),
                                (R.allDay = pe),
                                (R.date = +Se),
                                F.bufferAfter && (R.bufferEnd = Kt(+ye + 6e4 * F.bufferAfter, ve)),
                                F.bufferBefore && (R.bufferStart = Kt(+ge - 6e4 * F.bufferBefore, ve)),
                                (t._tempStart = +ge),
                                (t._tempEnd = +ye),
                                (t._tempAllDay = pe),
                                (t._tempResource = _e),
                                (t._tempSlot = me),
                                (t._dragDelta = e.drag || e.external ? -1 : e.direction ? ("end" === e.direction ? 1 : -1) : T),
                                (t._dragDayDelta = we),
                                pe || t._onMouseMove(e.domEvent),
                                t.setState({ dragData: { draggedDates: t._getDragDates(R, _e, me), draggedEvent: R, originDate: P.date, originDates: p && p.originDates, originResource: e.external ? ie : de, resource: _e, slot: me } });
                        }
                        return !0;
                    }),
                    (t._onEventDragEnd = function (e) {
                        clearTimeout(t._scrollTimer);
                        var n = t.s,
                            a = e.create,
                            s = t.state,
                            i = s.dragData,
                            r = !1;
                        if (
                            (n.externalDrag &&
                                e.drag &&
                                !e.create &&
                                (tl.next(c({}, e, { action: "externalDrop", create: !0, dragData: e.eventData.original, eventName: "onDragEnd", external: !0, from: t })),
                                t._body.removeChild(t._clone),
                                t._onCalendar || ((r = !0), t._eventDropped && ((e.event = e.eventData.original), n.onEventDelete(e)))),
                            a && !i && ((i = {}).draggedEvent = t._tempEvent),
                            i && i.draggedEvent)
                        ) {
                            var o = !1 !== n.showEventBuffer,
                                l = e.eventData,
                                d = i.draggedEvent,
                                h = d.original,
                                u = d.startDate,
                                m = d.endDate,
                                _ = (o && d.bufferStart) || u,
                                p = (o && d.bufferEnd) || m,
                                v = d.allDay,
                                f = a && !e.external ? t._tempResource : e.resource,
                                g = i.resource === ie ? f : i.resource,
                                y = h.resource === ie ? g : h.resource,
                                b = a ? t._tempSlot : e.slot,
                                x = i.slot === ie ? b : i.slot,
                                D = {},
                                T = {},
                                S = t._isTimeline,
                                C = S ? "timeline" : "schedule",
                                w = a || +u != +l.startDate || +m != +l.endDate || v !== l.allDay || f !== g || b !== x,
                                k = y,
                                M = void 0;
                            if (f !== g && (!a || e.external) && !t._isSingleResource)
                                if (he(y) && y.length && g !== ie) {
                                    var E = y.indexOf(f);
                                    -1 === y.indexOf(g) && (k = y.slice()).splice(E, 1, g);
                                } else k = g;
                            M =
                                k && n.resources
                                    ? he(k)
                                        ? k
                                        : [k]
                                    : t._resources.map(function (e) {
                                          return e.id;
                                      });
                            for (var N = t._resourcesMap[g], I = !1 !== h.overlap && !1 !== N.eventOverlap && !1 !== n.eventOverlap, L = 0, H = M; L < H.length; L++) {
                                var Y = H[L];
                                if ((t._invalids[Y] && (D[Y] = t._invalids[Y][x]), t._events[Y])) {
                                    for (var O = {}, P = t._events[Y][x], F = 0, R = Object.keys(P); F < R.length; F++) {
                                        var z = R[F],
                                            V = P[z];
                                        O[z] = {
                                            allDay: V.allDay.filter(function (e) {
                                                return e.id !== d.id && (!I || !1 === e.original.overlap);
                                            }),
                                            data: V.data.filter(function (e) {
                                                return e.id !== d.id && (!I || !1 === e.original.overlap);
                                            }),
                                        };
                                    }
                                    T[Y] = O;
                                }
                            }
                            var A = e.action || (s.dragData ? "drag" : "click"),
                                W =
                                    !r &&
                                    (!w ||
                                        n.eventDragEnd({
                                            action: A,
                                            collision: xl(D, _, p, v, S, n.invalidateEvent, n),
                                            create: a,
                                            domEvent: e.domEvent,
                                            event: d,
                                            external: e.external,
                                            from: e.from,
                                            newResource: g,
                                            newSlot: x,
                                            oldResource: f,
                                            oldSlot: b,
                                            overlap: xl(T, _, p, v, S, "strict", n),
                                            resource: k !== bl ? k : ie,
                                            slot: x !== bl ? x : ie,
                                            source: C,
                                        })),
                                U = s.isTouchDrag && !r && (!a || W);
                            if (W && U && f !== g && !h.color) {
                                var B = N && N.color;
                                B ? ((d.color = B), (d.style.background = B), (d.style.color = Hn(B))) : ((d.color = ie), (d.style = {}));
                            }
                            U || "click" === A || t._hook("onEventDragEnd", { domEvent: e.domEvent, event: (a ? t._tempEvent : l).original, resource: g !== bl ? g : ie, slot: x !== bl ? x : ie, source: C }),
                                t.setState({
                                    dragData: U ? { draggedEvent: W ? d : c({}, l), originDate: W ? d.date : l.date, originDates: W ? t._getDragDates(d, g, x) : i.originDates, originResource: W ? g : i.originResource } : ie,
                                    isTouchDrag: U,
                                }),
                                (t._tempStart = 0),
                                (t._tempEnd = 0),
                                (t._tempAllDay = ie),
                                (t._dragDelta = ie),
                                t._onMouseMove(e.domEvent),
                                (t._isTouch = !1);
                        }
                    }),
                    (t._onExternalDrag = function (e) {
                        var n = t.s,
                            a = e.clone,
                            s = e.from === t,
                            i = !s && n.externalDrop,
                            r = s && n.externalDrag && !n.dragToMove,
                            o = t.state.dragData;
                        if (i || n.externalDrag) {
                            var l = !r && e.endY < t._gridContBottom && e.endY > t._allDayTop && e.endX > t._gridContLeft && e.endX < t._gridContRight;
                            switch (e.eventName) {
                                case "onDragModeOff":
                                    i && t._onEventDragModeOff(e);
                                    break;
                                case "onDragModeOn":
                                    i && t._onEventDragModeOn(e);
                                    break;
                                case "onDragStart":
                                    i ? t._onEventDragStart(e) : s && (t._onCalendar = !0);
                                    break;
                                case "onDragMove":
                                    if (!s && !i) return;
                                    l
                                        ? (t._onCalendar || t._hook("onEventDragEnter", { domEvent: e.domEvent, event: e.dragData, source: t._isTimeline ? "timeline" : "schedule" }),
                                          (s || (i && !1 !== t._onEventDragMove(e))) && (a.style.display = "none"),
                                          (t._onCalendar = !0))
                                        : t._onCalendar &&
                                          (t._hook("onEventDragLeave", { domEvent: e.domEvent, event: e.dragData, source: t._isTimeline ? "timeline" : "schedule" }),
                                          clearTimeout(t._scrollTimer),
                                          (a.style.display = "table"),
                                          (s && !o) || t.setState({ dragData: { draggedDates: {}, draggedEvent: s ? o && o.draggedEvent : ie, originDates: s ? o && o.originDates : ie } }),
                                          (t._tempStart = 0),
                                          (t._tempEnd = 0),
                                          (t._tempAllDay = ie),
                                          (t._tempResource = ie),
                                          (t._dragDelta = ie),
                                          (t._onCalendar = !1),
                                          t._onMouseLeave(ie, !0));
                                    break;
                                case "onDragEnd":
                                    i &&
                                        (l && t._tempResource !== ie
                                            ? t._onEventDragEnd(e)
                                            : (t.setState({ dragData: ie, isTouchDrag: !1 }), t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.dragData, resource: e.resource, slot: e.slot, source: e.source })));
                            }
                        }
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._isToday = function (e) {
                    return Rt(new Date(e), jt(this.s));
                }),
                (t.prototype._formatTime = function (e, t) {
                    var n = this.s,
                        a = n.timeFormat,
                        s = /a/i.test(a) && this._stepLabel === yt && e % yt == 0 ? a.replace(/.[m]+/i, "") : a,
                        i = new Date(+ft + e),
                        r = jt(n, i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes());
                    return xt(r) && t && r.setTimezone(t), qt(s, r, n);
                }),
                (t.prototype._getEventPos = function (e, t, n, a) {
                    var s = this.s,
                        i = e.allDay ? ie : s,
                        r = jt(i, t.getFullYear(), t.getMonth(), t.getDate()),
                        o = Ht($t(r, 1)),
                        l = i ? this._firstDayTz : this._firstDay,
                        c = i ? this._lastDayTz : this._lastDay,
                        d = this._isTimeline,
                        h = !d && !this._groupByResource,
                        u = e.allDay,
                        m = e.original,
                        _ = this._startTime,
                        p = this._endTime + 1,
                        v = this._time,
                        f = this._hasSlots,
                        g = this._hasResY,
                        y = this._isDailyResolution,
                        b = s.eventList,
                        x = "",
                        D = "",
                        T = e.bufferStart,
                        S = e.bufferEnd,
                        C = g ? 0 : this._dayIndexMap[n],
                        w = e.start,
                        k = e.end,
                        M = Dl(e, s, b, d, y, l, this._cols, this._colIndexMap),
                        E = Tl(e, s, b, d, y, c, this._cols, this._colIndexMap),
                        N = +M == +E ? 1 : 0,
                        I = !1 !== s.showEventBuffer && !b && !u;
                    if ((((!u && !d) || (g && !f)) && (M < r && ((w = ""), (M = jt(s, r))), E >= o && ((k = ""), (E = jt(s, +o - 1))), E >= o && (E = jt(s, +o - 1))), u || d)) {
                        if (!a.get(m) || f || g || h) {
                            var L = s.startDay,
                                H = s.endDay,
                                Y = u || b,
                                O = !Rt(M, E),
                                P = this._daysNr;
                            d && O && kt(M) >= p && (M = jt(s, +Ht(M) + p));
                            var F = kl(M, E, l, c, _, p, L, H, Y),
                                R = Ml(M, _, v, l, L, H),
                                z = (100 * F) / v;
                            if (I && T) {
                                var V = kl(T, M, l, c, _, p, L, H, Y);
                                D = Math.max(0, (100 * V) / F) + "%";
                            }
                            if (I && S) {
                                V = kl(E, S, l, c, _, p, L, H, Y);
                                x = Math.max(0, (100 * V) / F) + "%";
                            }
                            if (d) {
                                var A = 0;
                                if ((b && !y && (C = this._dayIndexMap[Lt(M)]), "month" === s.resolution || "quarter" === s.resolution)) {
                                    var W = this._days[C].dayDiff,
                                        U = Lt(E >= c ? $t(c, -1) : E),
                                        B = this._dayIndexMap[U];
                                    A = this._days[B].dayDiff - W;
                                }
                                (z = (z + 100 * A) / P), (R = (R + 100 * C) / P);
                            }
                            var j = d
                                    ? Y
                                        ? { left: s.rtl ? "" : (f ? "" : (100 * C) / P) + "%", right: s.rtl ? (f ? "" : (100 * C) / P) + "%" : "", width: (f ? "" : z) + "%" }
                                        : { height: this._setRowHeight ? "" : "100%", left: s.rtl ? "" : R + "%", right: s.rtl ? R + "%" : "", top: "0", width: z + "%" }
                                    : { width: (O && !h ? z : 100) + "%" },
                                K = kt(M) < p && E > l,
                                X = kt(E) + N > _;
                            if (Y || (O && z > 0) || (K && X)) return a.set(m, !0), { bufferAfter: x, bufferBefore: D, end: k, endDate: E, position: j, start: w, startDate: M };
                        }
                    } else if (kt(M) < p && kt(E) + N > _ && E >= M) {
                        var J = (100 * (F = wl(M, E, _, p))) / v;
                        if (I && T) Rt(T, M) || (T = jt(s, +Ht(M) + _)), (D = (100 * wl(T, M, _, p)) / F + "%");
                        if (I && S) Rt(S, M) || (S = jt(s, +Ht(M) + p - 1)), (x = (100 * wl(E, S, _, p)) / F + "%");
                        return {
                            bufferAfter: x,
                            bufferBefore: D,
                            cssClass: J < 2 ? " mbsc-schedule-event-small-height" : "",
                            end: k,
                            endDate: E,
                            position: { height: J + "%", top: Ml(M, _, v) + "%", width: "100%" },
                            start: w,
                            startDate: M,
                        };
                    }
                    return ie;
                }),
                (t.prototype._getEventData = function (e, t, n, a) {
                    var s = this.s,
                        i = cl(s, e, t, !0, n, !1, !this._isTimeline || this._hasResY, this._isDailyResolution, a);
                    return e.allDay && s.exclusiveEndDates && +i.endDate == +i.startDate && (i.endDate = Ht($t(i.startDate, 1))), i;
                }),
                (t.prototype._getEvents = function (e) {
                    var t = this,
                        n = this.s,
                        a = this._resources,
                        s = this._slots,
                        i = this._hasSlots,
                        r = this._hasResY,
                        o = this._isTimeline,
                        l = !o,
                        c = {},
                        d = El(e, a, s, !!n.resources, !!n.slots),
                        h = {},
                        u = this._firstDay,
                        m = this._lastDay,
                        _ = this._setRowHeight,
                        p = {},
                        v = this._cols,
                        f =
                            this._createEventMaps ||
                            n.renderHour ||
                            n.renderHourFooter ||
                            n.renderDay ||
                            n.renderDayFooter ||
                            n.renderWeek ||
                            n.renderWeekFooter ||
                            n.renderMonth ||
                            n.renderMonthFooter ||
                            n.renderQuarter ||
                            n.renderQuarterFooter ||
                            n.renderYear ||
                            n.renderYearFooter;
                    if (
                        (f &&
                            v.forEach(function (e) {
                                return (e.eventMap = { all: [] });
                            }),
                        n.connections)
                    )
                        for (var g = 0, y = n.connections; g < y.length; g++) {
                            var b = y[g];
                            (p[b.from] = !0), (p[b.to] = !0);
                        }
                    for (
                        var x = function (a) {
                                var g = a.id,
                                    y = new Map(),
                                    b = 0,
                                    x = [],
                                    T = {},
                                    S = function (e, s) {
                                        for (var d = 0; d < x.length; d++) {
                                            var h = x[d],
                                                u = h.stacks.length,
                                                m = h.more.length;
                                            if ((_ && u > b && (b = u), !i))
                                                for (var p = 0; p < u; p++)
                                                    for (var v = 0, f = h.stacks[p]; v < f.length; v++) {
                                                        var D = f[v],
                                                            S = o && m && !_ ? 1 : 0,
                                                            C = (((T[D.uid] || u + S) - p) / (u + S)) * 100;
                                                        l
                                                            ? ((D.position.width = C + "%"), (D.position[n.rtl ? "right" : "left"] = (100 * p) / u + "%"), (D.position[n.rtl ? "left" : "right"] = "auto"))
                                                            : ((D.position.height = _ ? "" : C + "%"), (D.position.top = _ ? p : (100 * p) / (u + S) + "%"));
                                                    }
                                            if (m) {
                                                for (var w = void 0, k = void 0, M = 0, E = h.more; M < E.length; M++) {
                                                    var N = E[M];
                                                    (!w || N.startDate < w) && (w = N.startDate), (!k || N.endDate > k) && (k = N.endDate);
                                                }
                                                var I = s || new Date(h.more[0].date),
                                                    L = Lt(I),
                                                    H = "more-" + (l || r ? L + "-" : "") + g,
                                                    Y = n.moreEventsText || "",
                                                    O = ((m > 1 && n.moreEventsPluralText) || Y).replace(/{count}/, m),
                                                    P = t._getEventData(
                                                        {
                                                            color: "#ddd",
                                                            cssClass: "mbsc-schedule-event-more",
                                                            editable: !1,
                                                            end: k,
                                                            id: H + (i ? (r ? "" : "-" + L) + "-" + e : "") + "-" + d,
                                                            more: h.more,
                                                            start: w,
                                                            text: (l ? "+" : "") + (o ? O : m),
                                                        },
                                                        I,
                                                        a
                                                    ),
                                                    F = t._getEventPos(P, I, L, y);
                                                F &&
                                                    ((P.position = F.position),
                                                    o
                                                        ? ((P.position.height = _ ? "" : 100 / (u + 1) + "%"), (P.position.top = i ? "" : _ ? u : (100 * u) / (u + 1) + "%"), c[g][e][r || i ? L : "all"].data.push(P))
                                                        : ((P.showText = !0),
                                                          (P.position.width = "24px"),
                                                          (P.position[n.rtl ? "right" : "left"] = "auto"),
                                                          (P.position[n.rtl ? "left" : "right"] = "-24px"),
                                                          (c[g][e][L].hasMore = !0),
                                                          c[g][e][L].data.push(P))),
                                                    (t._eventRows[H] = 1);
                                            }
                                        }
                                    };
                                c[g] = {};
                                for (
                                    var C = function (s) {
                                            var _ = s.id,
                                                C = d[g][_],
                                                w = Object.keys(C).sort();
                                            (c[g][_] = { all: { allDay: [], data: [] } }), l && (h[_] = Ss(n, C, u, m, -1, D._daysNr, !0, n.startDay, !1, n.eventOrder));
                                            for (
                                                var k = function (s) {
                                                        var d = e[s].date;
                                                        if (D._dayIndexMap[s] !== ie && tn(d.getDay(), n.startDay, n.endDay)) {
                                                            var w = Cs(C[s]) || [];
                                                            (l || r || i) && ((x = []), (T = {})), (c[g][_][s] = { allDay: [], data: [] }), r && (b = D._eventRows[s + "-" + g] || 0);
                                                            for (var k = 0, M = w; k < M.length; k++) {
                                                                var E = M[k];
                                                                if (!E.allDay || o) {
                                                                    var N = D._getEventData(E, d, a),
                                                                        I = D._getEventPos(N, d, s, y);
                                                                    if (
                                                                        ((N.position = ie),
                                                                        I &&
                                                                            ((N.cssClass = I.cssClass),
                                                                            (N.position = I.position),
                                                                            (N.bufferAfter = I.bufferAfter),
                                                                            (N.bufferBefore = I.bufferBefore),
                                                                            (l || r) && (N.showText = !0),
                                                                            Sl(n, x, N, T, D._maxEventStack || 1, n.eventList, o, D._isDailyResolution, u, D._firstDayTz, m, D._lastDayTz, D._cols, D._colIndexMap),
                                                                            c[g][_].all.data.push(N),
                                                                            (D._eventMap[N.id] = N),
                                                                            f))
                                                                    )
                                                                        for (
                                                                            var L = D._stepCell, H = D._isDailyResolution && L < 864e5, Y = E.allDay ? u : Ut(n, u), O = N.startDate > Y ? N.startDate : Y, P = D._colIndexMap[Lt(O)], F = !0;
                                                                            F && P < v.length;

                                                                        ) {
                                                                            for (var R = v[P], z = R.date, V = P < v.length - 1 ? v[P + 1].date : m, A = z, W = !1; A < V; ) {
                                                                                var U = +A,
                                                                                    B = H ? new Date(U + L) : V,
                                                                                    j = E.allDay ? z : Ut(n, A),
                                                                                    K = E.allDay ? V : Ut(n, B);
                                                                                Mt(N.startDate, N.endDate, j, K, !0)
                                                                                    ? (R.eventMap[U] || (R.eventMap[U] = []), W || (R.eventMap.all.push(N.original), (W = !0)), R.eventMap[U].push(N.original), (F = !0))
                                                                                    : (F = !1),
                                                                                    (A = B);
                                                                            }
                                                                            P++;
                                                                        }
                                                                    c[g][_][s].data.push(N), o && E.allDay && c[g][_][s].allDay.push(N);
                                                                }
                                                            }
                                                            l &&
                                                                h[_][s] &&
                                                                h[_][s].data.forEach(function (e) {
                                                                    var n = e.event,
                                                                        i = e.width;
                                                                    if (n) {
                                                                        var r = t._getEventData(n, d, a),
                                                                            o = t._getEventPos(r, d, s, y);
                                                                        o && ((r.bufferAfter = o.bufferAfter), (r.bufferBefore = o.bufferBefore)),
                                                                            (r.position = { width: o ? o.position.width : i }),
                                                                            (r.showText = !!o),
                                                                            c[g][_][s].allDay.push(r);
                                                                    }
                                                                }),
                                                                (l || r || i) && S(_, d),
                                                                r && (D._eventRows[s + "-" + g] = b || 1);
                                                        } else if (n.connections)
                                                            for (var X = 0, J = (w = C[s] || []); X < J.length; X++) {
                                                                var q = J[X],
                                                                    G = q.id;
                                                                !D._eventMap[G] && p[G] && (D._eventMap[G] = D._getEventData(q, d, a));
                                                            }
                                                    },
                                                    M = 0,
                                                    E = w;
                                                M < E.length;
                                                M++
                                            ) {
                                                k(E[M]);
                                            }
                                        },
                                        w = 0,
                                        k = s;
                                    w < k.length;
                                    w++
                                ) {
                                    C(k[w]);
                                }
                                !o || i || r || S(bl), r || (D._eventRows[g] = b || 1);
                            },
                            D = this,
                            T = 0,
                            S = a;
                        T < S.length;
                        T++
                    ) {
                        x(S[T]);
                    }
                    return c;
                }),
                (t.prototype._getInvalids = function (e) {
                    var t,
                        n = this.s,
                        a = n.eventList,
                        s = e || {},
                        i = {},
                        r = a ? Ht(new Date(n.minDate)) : new Date(n.minDate),
                        o = a ? Ht($t(new Date(n.maxDate), 1)) : new Date(n.maxDate),
                        l = this._isTimeline;
                    if (n.minDate)
                        for (var c = Ht(this._firstDay); c < r; c.setDate(c.getDate() + 1)) {
                            (S = s[(T = Lt(c))] || []).push({ end: r, start: new Date(c) }), (s[T] = S);
                        }
                    if (n.maxDate)
                        for (c = Ht(o); c < this._lastDay; c.setDate(c.getDate() + 1)) {
                            (S = s[(T = Lt(c))] || []).push({ end: new Date(this._lastDay), start: o }), (s[T] = S);
                        }
                    for (var d = El(s, this._resources, this._slots, !!n.resources, !!n.slots), h = Object.keys(s).sort(), u = 0, m = this._resources; u < m.length; u++) {
                        var _ = m[u],
                            p = _.id,
                            v = new Map();
                        i[p] = {};
                        for (var f = 0, g = this._slots; f < g.length; f++) {
                            var y = g[f].id,
                                b = { allDay: [], data: [] };
                            i[p][y] = { all: b };
                            for (var x = 0, D = h; x < D.length; x++) {
                                var T;
                                c = Kt((T = D[x]));
                                if (this._dayIndexMap[T] !== ie && tn(c.getDay(), n.startDay, n.endDay)) {
                                    var S = d[p][y][T] || [],
                                        C = { allDay: [], data: [] },
                                        w = [];
                                    i[p][y][T] = C;
                                    for (var k = 0, M = S; k < M.length; k++) {
                                        var E = M[k];
                                        if (_e(E) || At(E)) {
                                            var N = Kt(E);
                                            E = { allDay: !0, end: new Date(N), start: N };
                                        }
                                        var I = this._getEventData(E, c, _, !0);
                                        (I.cssClass = E.cssClass ? " " + E.cssClass : ""), (I.position = ie);
                                        var L = this._getEventPos(I, c, T, v);
                                        if (
                                            (L &&
                                                (!l && 0 === kt(L.startDate) && new Date(+L.endDate + 1) >= $t(c, 1)
                                                    ? (I.allDay = !0)
                                                    : ((I.position = L.position),
                                                      kt(L.startDate) <= this._startTime && (I.cssClass += " mbsc-schedule-invalid-start"),
                                                      kt(L.endDate) >= this._endTime && (I.cssClass += " mbsc-schedule-invalid-end")),
                                                w.push(I)),
                                            C.data.push(I),
                                            I.allDay)
                                        ) {
                                            l || ((I.position = {}), L && +I.startDate == +I.endDate && (I.endDate = L.endDate)), (C.allDay = [I]), (C.data = [I]), (w = [I]);
                                            break;
                                        }
                                    }
                                    (t = b.data).push.apply(t, w);
                                }
                            }
                        }
                    }
                    return i;
                }),
                (t.prototype._getColors = function (e) {
                    for (
                        var t = this.s, n = {}, a = El(e, this._resources, this._slots, !!t.resources, !!t.slots), s = Object.keys(e || {}).sort(), i = this._hasSlots, r = this._isTimeline, o = this._hasResY, l = 0, c = this._resources;
                        l < c.length;
                        l++
                    ) {
                        var d = c[l],
                            h = d.id,
                            u = new Map();
                        n[h] = {};
                        for (var m = 0, _ = this._slots; m < _.length; m++) {
                            var p = _[m].id;
                            n[h][p] = { all: { allDay: [], data: [] } };
                            for (var v = 0, f = s; v < f.length; v++) {
                                var g = f[v],
                                    y = Kt(g);
                                if (this._dayIndexMap[g] !== ie && tn(y.getDay(), t.startDay, t.endDay)) {
                                    var b = a[h][p][g] || [],
                                        x = o || i || !r ? g : "all";
                                    (!r || i || o) && (n[h][p][x] = { allDay: [], data: [] });
                                    for (var D = n[h][p][x], T = 0, S = b; T < S.length; T++) {
                                        var C = S[T],
                                            w = this._getEventData(C, y, d, !0);
                                        if (((w.cssClass = C.cssClass ? " " + C.cssClass : ""), w.allDay && !r)) D.allDay = [w];
                                        else {
                                            var k = this._getEventPos(w, y, g, u);
                                            k &&
                                                ((w.position = k.position),
                                                kt(k.startDate) <= this._startTime && (w.cssClass += " mbsc-schedule-color-start"),
                                                kt(k.endDate) >= this._endTime && (w.cssClass += " mbsc-schedule-color-end"),
                                                D.data.push(w));
                                        }
                                        (w.position.background = C.background), (w.position.color = C.textColor ? C.textColor : Hn(C.background));
                                    }
                                }
                            }
                        }
                    }
                    return n;
                }),
                (t.prototype._flattenResources = function (e, t, n, a, s) {
                    for (var i = e && e.length ? e : [{ id: bl }], r = this.s.immutableData, o = 0, l = i; o < l.length; o++) {
                        var d = l[o],
                            h = a && r ? c({}, d) : d,
                            u = h.children;
                        r && (h.original = d),
                            (h.depth = n),
                            (h.isParent = !(!u || !u.length)),
                            (h.fixed = h.fixed || s),
                            t.push(h),
                            (this._resourcesMap[h.id] = h),
                            !a || (!r && n) || a.push(h),
                            h.isParent && ((this._hasHierarchy = !0), (h.collapsed && !a) || (a && r && (h.children = []), this._flattenResources(u, t, n + 1, a && h.children, h.fixed)));
                    }
                    return t;
                }),
                (t.prototype._render = function (e, t) {
                    var n = this,
                        a = this._prevS,
                        s = this._isTimeline,
                        i = new Date(e.selected),
                        r = +e.size,
                        o = Cl(e.timeLabelStep),
                        l = Cl(e.timeCellStep),
                        c = e.firstDay,
                        d = e.startDay,
                        h = e.endDay,
                        u = e.resources,
                        m = e.slots,
                        _ = !1 === e.virtualScroll,
                        p = e.resolution,
                        f = "day" === p || "hour" === p || !s,
                        g = "day" === e.resolutionVertical,
                        y = !1,
                        b = !1,
                        x = this._startTime,
                        D = this._endTime;
                    if (
                        ((d === a.startDay &&
                            h === a.endDay &&
                            e.checkSize === a.checkSize &&
                            e.eventList === a.eventList &&
                            e.refDate === a.refDate &&
                            e.size === a.size &&
                            e.type === a.type &&
                            e.resolution === a.resolution &&
                            e.resolutionVertical === a.resolutionVertical &&
                            e.displayTimezone === a.displayTimezone &&
                            e.weekNumbers === a.weekNumbers) ||
                            ((y = !0), (this._viewChanged = !0)),
                        (y || e.rtl !== a.rtl || e.dateFormat !== a.dateFormat || e.getDay !== a.getDay || e.rowHeight !== a.rowHeight || e.maxEventStack !== a.maxEventStack) && (b = !0),
                        e.startTime !== a.startTime || e.endTime !== a.endTime || e.timeLabelStep !== a.timeLabelStep || e.timeCellStep !== a.timeCellStep || e.timeFormat !== a.timeFormat || this._startTime === ie || this._endTime === ie)
                    ) {
                        var T = Kt(e.startTime || "00:00"),
                            S = new Date(+Kt(e.endTime || "00:00") - 1);
                        (this._startTime = x = kt(T)), (this._endTime = D = kt(S)), (this._time = D - x + 1), (this._timesBetween = ye(Ce(l / o) - 1)), (this._times = []), (this._timeLabels = {}), (this._viewChanged = !0);
                        for (
                            var C = l * gt,
                                w = Ce(x / C) * C,
                                k = function (e) {
                                    if ((M._times.push(e), s)) {
                                        var t = e === w;
                                        (M._timeLabels[e] = t || e % (o * gt) == 0 ? M._formatTime(t ? x : e) : ""),
                                            M._timesBetween.forEach(function (t, a) {
                                                var s = e + (a + 1) * o * gt;
                                                n._timeLabels[s] = n._formatTime(s);
                                            });
                                    }
                                },
                                M = this,
                                E = w;
                            E <= D;
                            E += C
                        )
                            k(E);
                        b = !0;
                    }
                    if (
                        ((e.slots === a.slots && this._slots !== ie) || ((this._hasSlots = s && !!m && m.length > 0), (this._slots = m && m.length ? m : [{ id: bl }]), (b = !0)),
                        (u === a.resources && this._resources !== ie) ||
                            ((this._hasResources = !!u && u.length > 0),
                            (this._hasHierarchy = !1),
                            (this._resourcesMap = {}),
                            (this._resourcesCopy = []),
                            (this._resources = this._flattenResources(u, [], 0, this._resourcesCopy)),
                            (this._visibleResources = this._flattenResources(this._resourcesCopy, [], 0)),
                            (this._isSingleResource = 1 === this._resources.length),
                            (b = !0)),
                        y || e.selected !== a.selected || e.getDay !== a.getDay || e.monthNames !== a.monthNames || e.dateFormat !== a.dateFormat || e.currentTimeIndicator !== a.currentTimeIndicator)
                    ) {
                        var N = Bt(jt(e)),
                            I = "day" === e.type,
                            L = "month" === e.type,
                            H = "year" === e.type,
                            Y = I && r < 2,
                            O = e.navService,
                            P = e.dateFormat.search(/m/i),
                            F = e.dateFormat.search(/y/i) < P,
                            R = e.dateFormat.search(/d/i) < P,
                            z = void 0,
                            V = void 0,
                            A = void 0,
                            W = void 0;
                        if (r > 1 || H || L) (A = z = O.firstDay), (W = V = O.lastDay);
                        else (A = $t(Ft(i, e), d - c + (d < c ? 7 : 0))), I && (i < A && (A = $t(A, -7)), i >= $t(A, 7) && (A = $t(A, 7))), (W = $t(A, h - d + 1 + (h < d ? 7 : 0))), (z = I ? Ht(i) : A), (V = I ? $t(z, 1) : W);
                        if (
                            (s && "week" === p && (H || L) && ((z = O.viewStart), (V = O.viewEnd)),
                            e.selected !== a.selected && I && r < 2 && (b = !0),
                            (this._isMulti = r > 1 || H),
                            (this._isDailyResolution = f),
                            (this._hasResY = g),
                            (this._firstDayTz = jt(e, z.getFullYear(), z.getMonth(), z.getDate())),
                            (this._lastDayTz = jt(e, V.getFullYear(), V.getMonth(), V.getDate())),
                            (this._selectedDay = +Ht(i)),
                            (this._shouldAnimateScroll = a.selected !== ie && e.selected !== a.selected && !this._viewChanged),
                            (this._showTimeIndicator = !e.eventList && (e.currentTimeIndicator === ie ? !s || (f && l < 1440) : e.currentTimeIndicator) && (I && r < 2 ? Rt(N, i) : z <= N && V >= N)),
                            b || +z != +this._firstDay || +V != +this._lastDay)
                        ) {
                            (this._firstDay = z), (this._lastDay = V), (this._colIndexMap = {}), (this._cols = []), (this._dayIndexMap = {}), (this._days = []), (this._headerDays = []);
                            var U = 0,
                                B = -1,
                                j = 0,
                                K = 0,
                                X = -1,
                                J = "",
                                q = -1,
                                G = -1,
                                Z = "",
                                Q = -1,
                                $ = -1,
                                ee = "",
                                te = z,
                                ne = V,
                                ae = 0,
                                se = ie,
                                re = 0;
                            !s && Y && ((te = A), (ne = W));
                            for (E = Ht(te); E < Ht(ne); E.setDate(E.getDate() + 1)) {
                                var oe = Lt(E),
                                    le = E.getDay();
                                if (((this._dayIndexMap[oe] = U), tn(le, d, h))) {
                                    var de = void 0,
                                        he = "",
                                        ue = "",
                                        me = f;
                                    if (s && !g) {
                                        re = e.getWeekNumber($t(E, (7 - c + 1) % 7));
                                        var _e = e.getDay(E),
                                            pe = e.getMonth(E),
                                            ve = e.getYear(E),
                                            fe = e.monthNames[pe];
                                        if ((X !== ve && ((X = ve), "year" === p && ((me = !0), (J = "" + X))), q !== pe)) {
                                            if ("month" === p) (J = H && r < 2 ? fe : F ? ve + " " + fe : fe + " " + ve), (me = !0);
                                            else if ("quarter" === p && pe % 3 == 0) {
                                                var ge = pe / 3 + 1,
                                                    be = e.quarterText.replace("{count}", "" + ge);
                                                (J = H && r < 2 ? be : F ? ve + " " + be : be + " " + ve), (me = !0);
                                            } else f && (he = Z = F ? ve + " " + fe : fe + " " + ve);
                                            (G = U), (q = pe), (K = e.getMaxDayOfMonth(X, q));
                                        }
                                        if ((Q !== re && (($ = U), (Q = re), (ue = ee = e.weekText.replace(/{count}/, Q)), U > 0 && (this._days[U - 1].lastOfWeek = !0)), (le === d || !U) && "week" === p)) {
                                            var xe = R ? "D MMM" : "MMM D";
                                            (se = $t(E, h - d + (h < d ? 7 : 0))), (J = qt(xe, E, e) + " - " + qt(xe, se, e)), (me = !0);
                                        }
                                        !(de = _e === K || (le === h && (d - h - 1 + 7) % 7 >= K - _e)) || ("month" !== p && "quarter" !== p) || (j += 31 - K);
                                    }
                                    var De = {
                                        columnTitle: J,
                                        date: new Date(E),
                                        dateIndex: U,
                                        dateKey: oe,
                                        dateText: qt(g ? (L && !this._isMulti ? "D DDD" : u ? e.dateFormatLong : e.dateFormat) : L || this._isMulti ? "D DDD" : e.dateFormatLong, E, e),
                                        day: e.getDay(E),
                                        dayDiff: j,
                                        endDate: se,
                                        eventMap: { all: [] },
                                        label: qt("DDDD, MMMM D, YYYY", E, e),
                                        lastOfMonth: de,
                                        monthIndex: G,
                                        monthText: Z,
                                        monthTitle: he,
                                        timestamp: +Ht(E),
                                        weekIndex: $,
                                        weekNr: re,
                                        weekText: ee,
                                        weekTitle: ue,
                                    };
                                    if (
                                        (me && ((De.isActive = E <= N && N < ne), ae && (this._cols[B].isActive = ae <= +N && N < E), (ae = +E), this._cols.push(De), B++),
                                        Y && this._headerDays.push(De),
                                        (Y && this._selectedDay !== +E) || this._days.push(De),
                                        de && ("month" === p || "quarter" === p))
                                    )
                                        for (var Se = K; Se < 31; Se++) this._days.push(De), U++;
                                    U++;
                                }
                                this._colIndexMap[oe] = B < 0 ? 0 : B;
                            }
                            (this._colsNr = g ? 1 : B + 1), (this._daysNr = g || Y ? 1 : U);
                        }
                    }
                    (this._groupByResource = ("date" !== e.groupBy && !("day" === e.type && r < 2)) || this._isSingleResource),
                        (this._stepCell = l * gt),
                        (this._stepLabel = o * gt),
                        (this._dayNames = t.dayNameWidth > 49 ? e.dayNamesShort : e.dayNamesMin),
                        (this._displayTime = o < 1440 && f),
                        (this._eventHeight = t.eventHeight || (e.eventList ? 24 : 46)),
                        (this._showCursorTime = this._displayTime && !!(e.dragToCreate || e.dragToMove || e.dragToResize)),
                        (this._setRowHeight = e.eventList || "equal" !== e.rowHeight),
                        "auto" !== e.maxEventStack && (this._maxEventStack = e.maxEventStack || "all"),
                        (e.colorsMap !== a.colorsMap || b) && (this._colors = this._getColors(e.colorsMap)),
                        (e.eventMap !== a.eventMap || e.showEventBuffer !== a.showEventBuffer || b || !this._events || this._reloadEvents) &&
                            ((this._eventMap = {}), (this._eventRows = {}), (this._events = this._getEvents(e.eventMap)), (this._reloadEvents = !1)),
                        (e.invalidsMap !== a.invalidsMap || b) && (this._invalids = this._getInvalids(e.invalidsMap));
                    var we = s && e.eventMap !== a.eventMap;
                    if (
                        ((e.height !== a.height || e.width !== a.width || we || b) && (this._shouldCheckSize = v && !!e.height && !!e.width),
                        e.scroll !== a.scroll && (this._shouldScroll = !0),
                        e.height !== ie && ((this._hasSideSticky = Sn && !e.rtl), (this._hasSticky = Sn)),
                        s)
                    ) {
                        var ke = this._cols,
                            Me = this._colsNr,
                            Ee = [],
                            Ne = this._daysBatchNr === ie ? ce(Ce(this._stepCell / (this._time / 30)), 1, 30) : this._daysBatchNr,
                            Ie = this._dayIndexMap[Lt(i)] || 0,
                            Le = t.batchIndexX !== ie ? t.batchIndexX : Te(Ie / Ne),
                            He = Math.min(Le * Ne, Me - 1),
                            Ye = _ ? 0 : Math.max(0, He - Ce((3 * Ne) / 2)),
                            Oe = _ ? Me : Math.min(Ye + 3 * Ne, Me),
                            Pe = ke[Ye].date,
                            Fe = Oe < Me ? ke[Oe].date : this._lastDay,
                            Re = {};
                        for (U = Ye; U < Oe; U++) (Re[ke[U].dateKey] = !0), Ee.push(ke[U]);
                        (this._batchStart = jt(e, Pe.getFullYear(), Pe.getMonth(), Pe.getDate())),
                            (this._batchEnd = jt(e, Fe.getFullYear(), Fe.getMonth(), Fe.getDate())),
                            (this._daysBatch = Ee),
                            (this._daysBatchNr = Ne),
                            (this._placeholderSizeX = _ ? 0 : t.dayWidth * Te(Math.max(0, He - (3 * Ne) / 2)) || 0),
                            (this._rowHeights = {}),
                            (this._dragCol = ""),
                            (this._dragRow = ""),
                            (this._fixedResources = []),
                            (this._fixedResourceTops = {}),
                            (this._fixedHeight = t.headerHeight || 0);
                        var ze = (t.scrollContHeight || 0) - (t.headerHeight || 0) - (t.footerHeight || 0),
                            Ve = t.rowHeight || 52,
                            Ae = t.parentRowHeight || 52,
                            We = t.gutterHeight !== ie ? t.gutterHeight : 16,
                            Ue = t.batchIndexY || 0,
                            Be = this._visibleResources,
                            je = g ? this._days : [{}],
                            Ke = Be.length * je.length,
                            Xe = [],
                            Je = [],
                            qe = {},
                            Ge = {},
                            Ze = {},
                            Qe = [],
                            $e = 0,
                            et = 0;
                        t.hasScrollY && (this._resourceTops = {}),
                            je.forEach(function (e, a) {
                                Be.forEach(function (s, i) {
                                    var r = (g ? e.dateKey + "-" : "") + s.id;
                                    if (((Ze[r] = s), ze)) {
                                        var o = s.children ? Ae : Ve,
                                            l = n._eventRows["more-" + r] ? 24 : 0,
                                            c = n._setRowHeight ? (!1 === s.eventCreation ? o : Math.max((n._eventRows[r] || 1) * n._eventHeight + We + l, o)) : o;
                                        (n._rowHeights[r] = n._setRowHeight ? c + "px" : ie),
                                            !g && s.fixed && ((n._fixedResourceTops[r] = n._fixedHeight), (n._fixedHeight += c), n._fixedResources.push({ height: c, index: i, key: r, resource: s })),
                                            t.hasScrollY && (n._resourceTops[r] = $e),
                                            et || Qe.push({ startIndex: a * Be.length + i, top: $e }),
                                            ($e += c),
                                            (et += c) > ze && (et = 0);
                                    }
                                    Xe.push({ dayIndex: a, key: r, resource: s });
                                });
                            });
                        var tt = Qe[Ue - 1],
                            nt = Qe[Ue + 2],
                            at = tt ? tt.startIndex : 0,
                            st = nt ? nt.startIndex : $e ? Ke : 30;
                        (_ || ($e && $e <= ze)) && ((at = 0), (st = Ke));
                        var it = [],
                            rt = -1;
                        for (U = at; U < st; U++) {
                            var ot = Xe[U];
                            if (ot) {
                                var lt = ot.dayIndex;
                                rt !== lt && ((it = []), Je.push({ day: g ? this._days[lt] : ie, rows: it }), (rt = lt), (qe[lt] = Je[Je.length - 1])), (Ge[ot.key] = !0), it.push(ot.resource);
                            }
                        }
                        for (var ct = 0, dt = 0, ht = this._fixedResources; dt < ht.length; dt++) {
                            var ut = ht[dt];
                            Ge[ut.key] || (it.unshift(ut.resource), (Ge[ut.key] = !0), (ct += ut.height));
                        }
                        if (t.dragData && t.dragData.originResource !== ie) {
                            var mt = t.dragData.originResource,
                                _t = ((oe = Lt(new Date(t.dragData.originDate))), (g ? oe + "-" : "") + mt),
                                pt = g ? this._dayIndexMap[oe] : 0,
                                vt = g ? this._colIndexMap[oe] : 0,
                                ft = ke[vt].dateKey;
                            if (!Ge[_t]) {
                                var yt = qe[pt];
                                yt || ((yt = { day: g ? this._days[pt] : ie, hidden: !0, rows: [] }), Je.push(yt)), yt.rows.push(Ze[_t]), (this._dragRow = _t);
                            }
                            g || Re[ft] || ((this._dragCol = ft), Ee.push(ke[vt]));
                        }
                        (this._gridHeight = $e),
                            (this._virtualPagesY = Qe),
                            (this._colClass = u || !g ? "mbsc-timeline-resource-col" : "mbsc-timeline-date-col"),
                            (this._hasRows = this._hasResources || g),
                            (this._rows = Xe),
                            (this._rowBatch = Je),
                            (this._placeholderSizeY = tt && !_ ? tt.top - ct : 0);
                    }
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n,
                        a = this;
                    (this._unlisten = Ji(this._el, {
                        onDoubleClick: function (e) {
                            var t = a.s;
                            n && t.clickToCreate && "single" !== t.clickToCreate && ((e.click = !0), a._onEventDragStart(e) && a._onEventDragEnd(e));
                        },
                        onEnd: function (n) {
                            !e && t && "single" === a.s.clickToCreate && ((n.click = !0), a._onEventDragStart(n) && (e = !0)), e && (n.domEvent.preventDefault(), a._onEventDragEnd(n)), clearTimeout(a._touchTimer), (e = !1), (t = !1);
                        },
                        onMove: function (n) {
                            var s = a.s;
                            e && s.dragToCreate
                                ? (n.domEvent.preventDefault(), a._onEventDragMove(n))
                                : t && s.dragToCreate && (Math.abs(n.deltaX) > 7 || Math.abs(n.deltaY) > 7)
                                ? a._onEventDragStart(n)
                                    ? (e = !0)
                                    : (t = !1)
                                : clearTimeout(a._touchTimer);
                        },
                        onStart: function (s) {
                            var i = a.s;
                            if (((s.create = !0), (s.click = !1), (a._isTouch = s.isTouch), !e && (i.dragToCreate || i.clickToCreate))) {
                                var r = s.domEvent.target && s.domEvent.target.classList;
                                (n = r && (r.contains("mbsc-schedule-item") || r.contains("mbsc-schedule-all-day-item") || r.contains("mbsc-timeline-column"))) &&
                                    (s.isTouch && i.dragToCreate
                                        ? (a._touchTimer = setTimeout(function () {
                                              a._onEventDragStart(s) && (a._onEventDragModeOn(s), (e = !0));
                                          }, 350))
                                        : (t = !s.isTouch));
                            }
                        },
                    })),
                        (this._unsubscribe = nl(this._onExternalDrag));
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s,
                        n = this.state;
                    this._scrollAfterResize && (this._onScroll(), (this._scrollAfterResize = !1)),
                        this._shouldCheckSize &&
                            Ee(this, function () {
                                var a,
                                    s,
                                    i,
                                    r,
                                    o,
                                    l,
                                    c,
                                    d,
                                    h = e._resCont,
                                    u = e._headerCont,
                                    m = e._footerCont,
                                    _ = e._sidebarCont,
                                    p = e._stickyFooter,
                                    v = u.offsetHeight,
                                    f = h ? h.offsetWidth : 0,
                                    g = _ ? _.offsetWidth : 0,
                                    y = m ? m.offsetHeight : 0,
                                    b = e._scrollCont,
                                    x = b.offsetWidth,
                                    D = b.offsetHeight,
                                    T = b.clientWidth,
                                    S = b.clientHeight,
                                    C = T - f - g,
                                    w = S - v - y,
                                    k = e._gridHeight,
                                    M = x - T,
                                    E = D - S,
                                    N = b.scrollHeight > S,
                                    I = b.scrollWidth > T,
                                    L = n.eventHeight;
                                if (e._isTimeline) {
                                    var H = b.querySelector(".mbsc-timeline-day"),
                                        Y = b.querySelector(".mbsc-timeline-empty-row"),
                                        O = b.querySelector(".mbsc-timeline-empty-parent"),
                                        P = b.querySelector(".mbsc-timeline-row-gutter"),
                                        F = e._colsNr;
                                    if (
                                        ((i = H ? H.offsetWidth : 64),
                                        (l = Y ? Y.offsetHeight : 52),
                                        (c = O ? O.offsetHeight : 52),
                                        (d = P ? P.offsetHeight : 16),
                                        i * F < C && ((I = !1), (E = 0)),
                                        k && k < w && ((N = !1), (M = 0)),
                                        (i = I ? i : Te(C / F)),
                                        (o = I ? i * F : C),
                                        (s = (e._stepCell * i) / e._time),
                                        (e._gridWidth = o),
                                        (e._daysBatchNr = Math.max(1, Math.ceil(C / (i || 1)))),
                                        e._hasSticky || ((u.style[t.rtl ? "left" : "right"] = M + "px"), m && ((m.style[t.rtl ? "left" : "right"] = M + "px"), (m.style.bottom = E + "px"))),
                                        e._hasSideSticky || (h && (h.style.bottom = E + "px"), _ && (_.style[t.rtl ? "left" : "right"] = M + "px")),
                                        p && (p.style.bottom = E + "px"),
                                        e._setRowHeight)
                                    ) {
                                        var R = b.querySelector(".mbsc-schedule-event");
                                        L = R ? R.clientHeight : L || (t.eventList ? 24 : 46);
                                    }
                                    if (!N && n.rowHeight) {
                                        e._resourceTops = {};
                                        var z = e._gridCont,
                                            V = z.getBoundingClientRect();
                                        z.querySelectorAll(".mbsc-timeline-row").forEach(function (t, n) {
                                            e._resourceTops[e._rows[n].key] = t.getBoundingClientRect().top - V.top;
                                        });
                                    }
                                } else {
                                    var A = e._el.querySelector(".mbsc-schedule-column-inner"),
                                        W = e._el.querySelector(".mbsc-schedule-header-item");
                                    if (((a = A ? (e._stepCell * A.offsetHeight) / e._time : 0), (r = W ? W.offsetWidth : 0), "auto" === t.maxEventStack)) {
                                        var U = Ce(A.offsetWidth / (t.minEventWidth || 50));
                                        (e._reloadEvents = e._maxEventStack !== U), (e._maxEventStack = U);
                                    }
                                }
                                b.scrollTop > k - w ? (b.scrollTop = k - w) : e._onScroll(),
                                    (e._calcConnections = !!t.connections && (e._isParentClick || e._calcConnections || !N)),
                                    (e._shouldCheckSize = l !== n.rowHeight || L !== n.eventHeight || N !== n.hasScrollY),
                                    (e._scrollAfterResize = t.virtualScroll && !e._shouldCheckSize),
                                    (e._isCursorTimeVisible = !1),
                                    e._calcGridSizes(),
                                    e.setState({
                                        cellHeight: a,
                                        cellWidth: s,
                                        dayNameWidth: r,
                                        dayWidth: i,
                                        eventHeight: L,
                                        footerHeight: y,
                                        gridContWidth: C,
                                        gridWidth: o,
                                        gutterHeight: d,
                                        hasScrollX: I,
                                        hasScrollY: N,
                                        headerHeight: v,
                                        parentRowHeight: c,
                                        rowHeight: l,
                                        scrollContHeight: I ? S : D,
                                        update: e._calcConnections || e._reloadEvents ? (n.update || 0) + 1 : n.update,
                                    });
                            }),
                        !this._shouldScroll ||
                            (!n.dayWidth && this._isTimeline) ||
                            (setTimeout(function () {
                                e._scrollToTime(e._shouldAnimateScroll), (e._shouldAnimateScroll = !1);
                            }),
                            (this._shouldScroll = !1)),
                        this._viewChanged &&
                            setTimeout(function () {
                                e._viewChanged = !1;
                            }, 10);
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten(), this._unsubscribe && al(this._unsubscribe);
                }),
                (t.prototype._calcGridSizes = function () {
                    var e = this.s,
                        t = this._resources,
                        n = this._isTimeline,
                        a = this._daysNr * (n ? 1 : t.length),
                        s = this._gridCont,
                        i = this._scrollCont,
                        r = !n && this._el.querySelector(".mbsc-schedule-all-day-wrapper"),
                        o = r && r.getBoundingClientRect(),
                        l = s.getBoundingClientRect(),
                        c = i.getBoundingClientRect(),
                        d = n ? this._gridWidth : s.scrollWidth,
                        h = this._resCont ? this._resCont.offsetWidth : 0;
                    (this._gridLeft = e.rtl ? l.right - d : l.left),
                        (this._gridRight = e.rtl ? l.right : l.left + d),
                        (this._gridTop = l.top),
                        (this._gridContTop = c.top),
                        (this._gridContBottom = c.bottom),
                        (this._gridContLeft = c.left + (e.rtl ? 0 : h)),
                        (this._gridContRight = c.right - (e.rtl ? h : 0)),
                        (this._allDayTop = o ? o.top : this._gridContTop),
                        (this._colWidth = d / (e.eventList ? this._colsNr : a)),
                        (this._colHeight = l.height);
                }),
                (t.prototype._getDragDates = function (e, t, n) {
                    var a = this.s,
                        s = {},
                        i = new Map(),
                        r = e.allDay ? this._firstDay : this._firstDayTz,
                        o = e.startDate,
                        l = e.endDate;
                    for (o = (o = Ht(o)) < r ? r : o, l = It(a, e.allDay || a.eventList, o, l); o <= l; ) {
                        var d = c({}, e),
                            h = Lt(o),
                            u = tn(o.getDay(), a.startDay, a.endDay) && this._getEventPos(e, o, h, i);
                        if (u) {
                            var m = d.resource;
                            this._isTimeline && this._setRowHeight && -1 !== (he(m) ? m : [m]).indexOf(this._tempResource) && (u.position.top = d.position.top);
                            var _ = !this._isTimeline || this._hasSlots || this._hasResY ? h : "all";
                            (d.date = +Ht(o, !0)),
                                (d.cssClass = u.cssClass),
                                (d.start = u.start),
                                (d.end = u.end),
                                (d.position = u.position),
                                (d.bufferAfter = u.bufferAfter),
                                (d.bufferBefore = u.bufferBefore),
                                (s[t + "__" + (this._isTimeline ? n + "__" : "") + _] = d);
                        }
                        o = $t(o, 1);
                    }
                    return s;
                }),
                (t.prototype._getGridTime = function (e, t, n, a, s) {
                    var i = this._hasResY ? 0 : a,
                        r = Se(this._isTimeline ? Ce((this._time * (t - i * this._colWidth)) / this._colWidth) : Ce((this._time * (n - 8)) / (this._colHeight - 16)), s * gt),
                        o = new Date(+ft + this._startTime + r);
                    return jt(this.s, e.getFullYear(), e.getMonth(), e.getDate(), o.getHours(), o.getMinutes());
                }),
                (t.prototype._scrollToTime = function (e) {
                    var t = this,
                        n = this._scrollCont,
                        a = this._gridCont,
                        s = this._isTimeline;
                    if (n) {
                        var i = this.s,
                            r = this._hasResY,
                            o = i.navigateToEvent,
                            l = o && o.start ? nn(new Date(+Kt(o.start, i) - this._stepCell), this._stepCell / gt) : new Date(i.selected),
                            c = this._colIndexMap[Lt(l)];
                        c === ie || !s || r || ("hour" === i.resolution && this._stepCell !== bt && !i.eventList) ? l.setHours(i.eventList ? 0 : l.getHours(), 0) : (l = this._cols[c].date);
                        var d = Ml(l, this._startTime, this._time * (s ? this._daysNr : 1)),
                            h = r ? 0 : Pt(this._firstDay, l, i.startDay, i.endDay),
                            u = ((s ? a.offsetWidth : a.scrollWidth) * ((100 * h) / this._daysNr + (s ? d : 0))) / 100 + 1,
                            m = void 0;
                        if (o || r) {
                            var _ = this._visibleResources,
                                p = o ? o.resource : _[0].id,
                                v = he(p) ? p[0] : p;
                            if (v)
                                if (s) {
                                    var f = (r ? Lt(l) + "-" : "") + v;
                                    m = this._resourceTops && this._resourceTops[f];
                                } else {
                                    var g = this._colWidth,
                                        y =
                                            Ie(_, function (e) {
                                                return e.id === v;
                                            }) || 0;
                                    u = this._groupByResource && !this._isSingleResource ? this._daysNr * g * y + g * h : _.length * h * g + y * g;
                                }
                        }
                        if (!s) {
                            var b = n.querySelector(".mbsc-schedule-column-inner");
                            (m = b ? (b.offsetHeight * d) / 100 : 0), !this._groupByResource || this._isSingleResource || o || (u = ie);
                        }
                        this._isScrolling++,
                            On(n, u, m, e, i.rtl, function () {
                                setTimeout(function () {
                                    t._isScrolling--;
                                }, 150);
                            });
                    }
                }),
                t
            );
        })(Xa),
        zl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onScroll = function () {
                        var e = t._scrollCont;
                        if (e) {
                            var n = e.scrollTop,
                                a = "translateX(" + -e.scrollLeft + "px)",
                                s = t._timeCont,
                                i = t._allDayCont,
                                r = t._headerCont,
                                o = (xn ? xn + "T" : "t") + "ransform";
                            i && (i.style[o] = a), s && (s.style.marginTop = -n + "px"), r && (r.style[o] = a), 0 === n ? t.setState({ showShadow: !1 }) : t.state.showShadow || t.setState({ showShadow: !0 }), t._onMouseMove();
                        }
                    }),
                    (t._setCont = function (e) {
                        t._scrollCont = e;
                    }),
                    (t._setTimeCont = function (e) {
                        t._timeCont = e;
                    }),
                    (t._setAllDayCont = function (e) {
                        t._allDayCont = e;
                    }),
                    (t._setGridCont = function (e) {
                        t._gridCont = e;
                    }),
                    (t._setHeaderCont = function (e) {
                        t._headerCont = e;
                    }),
                    (t._setCursorTimeCont = function (e) {
                        t._cursorTimeCont = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._render = function (t, n) {
                    e.prototype._render.call(this, t, n);
                    var a = this._prevS,
                        s = t.timezones,
                        i = this._stepCell / gt,
                        r = Ce(this._startTime / gt) % i,
                        o = (Ce(this._endTime / gt) % i) + 1;
                    if (s !== a.timezones && ((this._timeWidth = s ? { width: 4.25 * s.length + "em" } : ie), (this._timezones = ie), s)) {
                        for (var l = [], c = 0, d = s; c < d.length; c++) {
                            var h = d[c],
                                u = void 0;
                            if (_e(h)) {
                                var m = jt(t, 1970, 0, 1);
                                xt(m) && m.setTimezone(h);
                                var _ = (m.getTimezoneOffset() / 60) * -1;
                                u = { label: "UTC" + (_ > 0 ? "+" : "") + _, timezone: h };
                            } else u = h;
                            l.push(u);
                        }
                        this._timezones = l;
                    }
                    (this._largeDayNames = n.dayNameWidth > 99),
                        (this._startCellStyle = r % i != 0 ? { height: (n.cellHeight || 50) * (((i - r) % i) / i) + "px" } : ie),
                        (this._endCellStyle = o % i != 0 ? { height: ((n.cellHeight || 50) * (o % i)) / i + "px" } : ie);
                }),
                t
            );
        })(Rl);
    var Vl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n) {
                        var a,
                            s = n._colors,
                            i = t.dragData,
                            r = i && i.draggedEvent && i.draggedEvent.id,
                            o = n._events,
                            l = n._invalids,
                            d = n._hb,
                            h = n._rtl,
                            u = n._times,
                            m = n._startTime,
                            _ = n._endTime,
                            p = n._startCellStyle,
                            v = n._endCellStyle,
                            f = n._stepLabel,
                            g = n._theme,
                            y = n._isSingleResource,
                            b = e.eventMap || {},
                            x = "schedule",
                            D = " mbsc-flex-1-0 mbsc-schedule-resource-group" + g + h,
                            T = n._timezones,
                            S = n._groupByResource,
                            C = n._days,
                            w = n._resources,
                            k = (((a = {}).onMouseMove = n._onMouseMove), (a.onMouseLeave = n._onMouseLeave), a),
                            M = { dayNames: n._dayNames, largeNames: n._largeDayNames, onClick: e.onWeekDayClick, renderDay: e.renderDay, renderDayContent: e.renderDayContent, rtl: e.rtl, theme: e.theme },
                            E = function (t) {
                                var a,
                                    s = t.name;
                                return (
                                    e.renderResource && _e((s = e.renderResource(t))) && ((a = n._safeHtml(s)), (n._shouldEnhance = !0)),
                                    s &&
                                        Gn(
                                            "div",
                                            {
                                                key: t.id,
                                                className: "mbsc-schedule-resource " + (t.cssClass || "") + g + h + d + (!S || ("day" === e.type && 1 === e.size) ? " mbsc-flex-1-0 mbsc-schedule-col-width" : ""),
                                                style: { background: t.background },
                                            },
                                            Gn("div", { dangerouslySetInnerHTML: a, className: "mbsc-schedule-resource-title" }, s)
                                        )
                                );
                            },
                            N = function (t, a, s, o) {
                                var l = n._resourcesMap[s].eventResize,
                                    d = s + "__" + a,
                                    h = ws(i && i.draggedEvent && i.draggedEvent.original.resize, e.dragToResize, l),
                                    u = {
                                        displayTimezone: e.displayTimezone,
                                        drag: e.dragToMove || e.externalDrag,
                                        endDay: e.endDay,
                                        exclusiveEndDates: e.exclusiveEndDates,
                                        gridEndTime: _,
                                        gridStartTime: m,
                                        lastDay: +n._lastDay,
                                        render: e.renderEvent,
                                        renderBufferAfter: e.renderBufferAfter,
                                        renderBufferBefore: e.renderBufferBefore,
                                        renderContent: e.renderEventContent,
                                        resource: s,
                                        rtl: e.rtl,
                                        singleDay: !S,
                                        slot: bl,
                                        startDay: e.startDay,
                                        theme: e.theme,
                                        timezonePlugin: e.timezonePlugin,
                                    };
                                return Gn(
                                    Qn,
                                    null,
                                    t.map(function (t) {
                                        return t.showText
                                            ? t.position &&
                                                  Gn(
                                                      Hl,
                                                      c({}, u, {
                                                          event: t,
                                                          key: t.uid,
                                                          inactive: r === t.id,
                                                          resize: ws(t.original.resize, e.dragToResize, l),
                                                          selected: !(!e.selectedEventsMap[t.uid] && !e.selectedEventsMap[t.id]),
                                                          onClick: n._onEventClick,
                                                          onDoubleClick: e.onEventDoubleClick,
                                                          onRightClick: e.onEventRightClick,
                                                          onDelete: e.onEventDelete,
                                                          onHoverIn: e.onEventHoverIn,
                                                          onHoverOut: e.onEventHoverOut,
                                                          onDragStart: n._onEventDragStart,
                                                          onDragMove: n._onEventDragMove,
                                                          onDragEnd: n._onEventDragEnd,
                                                          onDragModeOn: n._onEventDragModeOn,
                                                          onDragModeOff: n._onEventDragModeOff,
                                                      })
                                                  )
                                            : Gn(
                                                  "div",
                                                  { key: t.uid, className: "mbsc-schedule-event mbsc-schedule-event-all-day mbsc-schedule-event-all-day-placeholder" },
                                                  Gn("div", { className: "mbsc-schedule-event-all-day-inner" + g })
                                              );
                                    }),
                                    i &&
                                        i.originDates &&
                                        i.originDates[d] &&
                                        !!i.originDates[d].allDay == !!o &&
                                        Gn(
                                            Hl,
                                            c({}, u, {
                                                event: i.originDates[d],
                                                hidden: i && !!i.draggedDates,
                                                isDrag: !0,
                                                resize: h,
                                                onDragStart: n._onEventDragStart,
                                                onDragMove: n._onEventDragMove,
                                                onDragEnd: n._onEventDragEnd,
                                                onDragModeOff: n._onEventDragModeOff,
                                            })
                                        ),
                                    i && i.draggedDates && i.draggedDates[d] && !!i.draggedDates[d].allDay == !!o && Gn(Hl, c({}, u, { event: i.draggedDates[d], isDrag: !0, resize: h }))
                                );
                            },
                            I = function (e) {
                                return u.map(function (t, a) {
                                    var s = !a,
                                        i = a === u.length - 1;
                                    return Gn(
                                        "div",
                                        {
                                            key: a,
                                            className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-time-wrapper" + g + h + (i ? " mbsc-schedule-time-wrapper-end" : "") + ((s && !i && p) || (i && !s && v) ? " mbsc-flex-none" : ""),
                                            style: s && !i ? p : i && !s ? v : ie,
                                        },
                                        Gn("div", { className: "mbsc-flex-1-1 mbsc-schedule-time" + g + h }, s || t % f == 0 ? n._formatTime(s ? m : t, e) : ""),
                                        n._timesBetween.map(function (a, s) {
                                            var i = t + (s + 1) * f;
                                            return i > m && i < _ && Gn("div", { key: s, className: "mbsc-flex-1-1 mbsc-schedule-time" + g + h }, n._formatTime(i, e));
                                        }),
                                        i && Gn("div", { className: "mbsc-schedule-time mbsc-schedule-time-end" + g + h }, n._formatTime(_ + 1, e))
                                    );
                                });
                            },
                            L = function (e, t, n, a) {
                                var i = e.id,
                                    r = l[i][bl][t] && l[i][bl][t].allDay[0],
                                    c = s[i][bl][t] && s[i][bl][t].allDay[0],
                                    u = o[i][bl][t] && o[i][bl][t].allDay;
                                return Gn(
                                    "div",
                                    { key: n + "-" + a, className: "mbsc-schedule-all-day-item mbsc-schedule-col-width mbsc-flex-1-0 " + (e.cssClass || "") + g + h + d, style: { background: e.background } },
                                    N(u || [], t, i, !0),
                                    r && Gn("div", { className: "mbsc-schedule-invalid mbsc-schedule-invalid-all-day" + r.cssClass + g }, Gn("div", { className: "mbsc-schedule-invalid-text" }, r.title)),
                                    c && Gn("div", { className: "mbsc-schedule-color mbsc-schedule-color-all-day" + c.cssClass + g, style: c.position }, Gn("div", { className: "mbsc-schedule-color-text" }, c.title))
                                );
                            },
                            H = function (t, n, a, i) {
                                var r = t.id,
                                    m = l[r][bl][n] && l[r][bl][n].data,
                                    _ = s[r][bl][n] && s[r][bl][n].data,
                                    f = o[r][bl][n],
                                    y = f && f.data;
                                return Gn(
                                    "div",
                                    { key: a + "-" + i, className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-column mbsc-schedule-col-width " + (t.cssClass || "") + g + h + d, style: { background: t.background } },
                                    Gn(
                                        "div",
                                        { className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-column-inner" + g + h + d },
                                        Gn("div", { className: "mbsc-schedule-events" + (f && f.hasMore ? " mbsc-schedule-events-more" : "") + h }, N(y || [], n, r)),
                                        m &&
                                            m.map(function (e, t) {
                                                return (
                                                    e.position &&
                                                    Gn("div", { key: t, className: "mbsc-schedule-invalid" + e.cssClass + g, style: e.position }, Gn("div", { className: "mbsc-schedule-invalid-text" }, e.allDay ? "" : e.title || ""))
                                                );
                                            }),
                                        _ &&
                                            _.map(function (e, t) {
                                                return Gn("div", { key: t, className: "mbsc-schedule-color" + e.cssClass + g, style: e.position }, Gn("div", { className: "mbsc-schedule-color-text" }, e.title));
                                            }),
                                        u.map(function (t, n) {
                                            var a,
                                                s = Nl(i, t),
                                                o = !n,
                                                l = n === u.length - 1,
                                                h =
                                                    (((a = {}).onDoubleClick = function (t) {
                                                        return e.onCellDoubleClick({ date: s, domEvent: t, resource: r, source: x });
                                                    }),
                                                    (a.onContextMenu = function (t) {
                                                        return e.onCellRightClick({ date: s, domEvent: t, resource: r, source: x });
                                                    }),
                                                    a);
                                            return Gn(
                                                "div",
                                                c(
                                                    {
                                                        key: n,
                                                        className: "mbsc-schedule-item mbsc-flex-1-0" + g + d + (l ? " mbsc-schedule-item-last" : "") + ((o && !l && p) || (l && !o && v) ? " mbsc-flex-none" : ""),
                                                        onClick: function (t) {
                                                            return e.onCellClick({ date: s, domEvent: t, resource: r, source: x });
                                                        },
                                                        style: o && !l ? p : l && !o ? v : ie,
                                                    },
                                                    h
                                                )
                                            );
                                        })
                                    )
                                );
                            };
                        return Gn(
                            "div",
                            { ref: n._setEl, className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-wrapper" + g + (n._daysNr > 7 ? " mbsc-schedule-wrapper-multi" : "") },
                            Gn(
                                "div",
                                { className: "mbsc-schedule-header mbsc-flex mbsc-flex-none" + g + d },
                                Gn("div", { className: "mbsc-schedule-time-col mbsc-schedule-time-col-empty" + g + h + d, style: n._timeWidth }),
                                Gn(
                                    "div",
                                    { className: "mbsc-flex-1-1 mbsc-schedule-header-wrapper" },
                                    Gn(
                                        "div",
                                        { ref: n._setHeaderCont, className: "mbsc-flex" },
                                        "day" === e.type && 1 === e.size
                                            ? Gn(
                                                  "div",
                                                  { className: D },
                                                  Gn(
                                                      "div",
                                                      { className: "mbsc-flex" },
                                                      e.showDays &&
                                                          n._headerDays.map(function (e) {
                                                              var t = e.timestamp;
                                                              return Gn(
                                                                  Fl,
                                                                  c({}, M, {
                                                                      key: t,
                                                                      cssClass: "mbsc-flex-1-1",
                                                                      day: e.day,
                                                                      events: b[e.dateKey],
                                                                      isToday: n._isToday(t),
                                                                      label: e.label,
                                                                      selectable: !0,
                                                                      selected: n._selectedDay === t,
                                                                      timestamp: t,
                                                                  })
                                                              );
                                                          })
                                                  ),
                                                  e.resources && Gn("div", { className: "mbsc-flex" }, w.map(E))
                                              )
                                            : S
                                            ? w.map(function (t, a) {
                                                  return Gn(
                                                      "div",
                                                      { key: a, className: D },
                                                      E(t),
                                                      Gn(
                                                          "div",
                                                          { className: "mbsc-flex" },
                                                          e.showDays &&
                                                              C.map(function (e) {
                                                                  var a = e.timestamp;
                                                                  return Gn(
                                                                      Fl,
                                                                      c({}, M, {
                                                                          background: t.background,
                                                                          key: a,
                                                                          cssClass: "mbsc-flex-1-0 mbsc-schedule-col-width " + (t.cssClass || ""),
                                                                          day: e.day,
                                                                          events: b[e.dateKey],
                                                                          isToday: y && n._isToday(a),
                                                                          label: e.label,
                                                                          resource: t.id,
                                                                          selectable: !1,
                                                                          selected: y && n._isToday(a),
                                                                          timestamp: a,
                                                                      })
                                                                  );
                                                              })
                                                      )
                                                  );
                                              })
                                            : C.map(function (t, a) {
                                                  var s = t.timestamp;
                                                  return Gn(
                                                      "div",
                                                      { key: a, className: D },
                                                      e.showDays && Gn(Fl, c({}, M, { key: s, day: t.day, events: b[t.dateKey], isToday: y && n._isToday(s), label: t.label, selectable: !1, selected: n._isToday(s), timestamp: s })),
                                                      e.resources && Gn("div", { className: "mbsc-flex" }, w.map(E))
                                                  );
                                              })
                                    )
                                ),
                                Gn("div", { className: "mbsc-schedule-fake-scroll-y" })
                            ),
                            Gn(
                                "div",
                                { className: "mbsc-schedule-all-day-cont" + (t.showShadow ? " mbsc-schedule-all-day-wrapper-shadow" : "") + g },
                                T &&
                                    Gn(
                                        "div",
                                        { className: "mbsc-flex mbsc-schedule-timezone-labels", style: n._timeWidth },
                                        T.map(function (e, t) {
                                            return Gn("div", { key: t, className: "mbsc-flex-1-0-0 mbsc-schedule-timezone-label" + g + h }, e.label);
                                        })
                                    ),
                                e.showAllDay &&
                                    Gn(
                                        "div",
                                        { className: "mbsc-schedule-all-day-wrapper mbsc-flex-none" + g + d },
                                        Gn(
                                            "div",
                                            { className: "mbsc-flex mbsc-schedule-all-day" + g },
                                            Gn("div", { className: "mbsc-schedule-time-col" + g + h, style: n._timeWidth }, !T && Gn("div", { className: "mbsc-schedule-all-day-text" + g + h }, e.allDayText)),
                                            Gn(
                                                "div",
                                                { className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-all-day-group-wrapper" },
                                                Gn(
                                                    "div",
                                                    { ref: n._setAllDayCont, className: "mbsc-flex mbsc-flex-1-1" },
                                                    S
                                                        ? w.map(function (e, t) {
                                                              return Gn(
                                                                  "div",
                                                                  { key: t, className: "mbsc-flex" + D },
                                                                  C.map(function (t, n) {
                                                                      return L(e, t.dateKey, n, t.timestamp);
                                                                  })
                                                              );
                                                          })
                                                        : C.map(function (e, t) {
                                                              return Gn(
                                                                  "div",
                                                                  { key: t, className: "mbsc-flex" + D },
                                                                  w.map(function (t, n) {
                                                                      return L(t, e.dateKey, n, e.timestamp);
                                                                  })
                                                              );
                                                          })
                                                )
                                            )
                                        )
                                    )
                            ),
                            Gn(
                                "div",
                                { className: "mbsc-flex mbsc-flex-1-1 mbsc-schedule-grid-wrapper" + g },
                                Gn("div", { dangerouslySetInnerHTML: n.textParam }),
                                Gn(
                                    "div",
                                    { "aria-hidden": "true", className: "mbsc-flex-col mbsc-schedule-time-col mbsc-schedule-time-cont" + g + h, style: n._timeWidth, ref: n._setTimeCont },
                                    Gn(
                                        "div",
                                        { className: "mbsc-flex mbsc-schedule-time-cont-inner" },
                                        Gn(
                                            "div",
                                            { className: "mbsc-flex-col mbsc-flex-1-1" },
                                            Gn(
                                                "div",
                                                { className: "mbsc-flex-1-1 mbsc-schedule-time-cont-pos" + g + (T ? " mbsc-flex" : " mbsc-flex-col mbsc-schedule-time-col-last") },
                                                T
                                                    ? T.map(function (e, t) {
                                                          return Gn("div", { key: t, className: "mbsc-flex-col" + g + (t === T.length - 1 ? " mbsc-schedule-time-col-last" : "") }, I(e.timezone));
                                                      })
                                                    : I(),
                                                n._showTimeIndicator &&
                                                    Gn(Ol, {
                                                        amText: e.amText,
                                                        displayedTime: n._time,
                                                        displayedDays: n._daysNr,
                                                        displayTimezone: e.displayTimezone,
                                                        endDay: e.endDay,
                                                        firstDay: n._firstDayTz,
                                                        orientation: "x",
                                                        pmText: e.pmText,
                                                        rtl: e.rtl,
                                                        showDayIndicator: y && !n._isMulti && "week" === e.type,
                                                        startDay: e.startDay,
                                                        startTime: m,
                                                        theme: e.theme,
                                                        timeFormat: e.timeFormat,
                                                        timezones: T,
                                                        timezonePlugin: e.timezonePlugin,
                                                    }),
                                                n._showCursorTime && Gn("div", { ref: n._setCursorTimeCont, className: "mbsc-schedule-cursor-time mbsc-schedule-cursor-time-x" + g + h })
                                            ),
                                            t.hasScrollX && Gn("div", { className: "mbsc-schedule-fake-scroll-x" })
                                        ),
                                        Gn("div", { className: "mbsc-schedule-fake-scroll-y" })
                                    )
                                ),
                                Gn(
                                    "div",
                                    { ref: n._setCont, className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-grid-scroll" + g, onScroll: n._onScroll },
                                    Gn(
                                        "div",
                                        { className: "mbsc-flex mbsc-flex-1-1" },
                                        Gn(
                                            "div",
                                            c({ className: "mbsc-flex mbsc-flex-1-0 mbsc-schedule-grid", ref: n._setGridCont }, k),
                                            S
                                                ? w.map(function (e, t) {
                                                      return Gn(
                                                          "div",
                                                          { key: t, className: "mbsc-flex" + D },
                                                          C.map(function (t, n) {
                                                              return H(e, t.dateKey, n, t.timestamp);
                                                          })
                                                      );
                                                  })
                                                : C.map(function (e, t) {
                                                      return Gn(
                                                          "div",
                                                          { key: t, className: "mbsc-flex" + D },
                                                          w.map(function (t, n) {
                                                              return H(t, e.dateKey, n, e.timestamp);
                                                          })
                                                      );
                                                  })
                                        )
                                    )
                                )
                            ),
                            i && !t.isTouchDrag && Gn("div", { className: "mbsc-calendar-dragging" })
                        );
                    })(e, t, this);
                }),
                t
            );
        })(zl),
        Al = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._isTimeline = !0),
                    (t._onScroll = function () {
                        for (
                            var e = t.s.rtl,
                                n = t.state,
                                a = t._gridWidth,
                                s = t._scrollCont,
                                i = s.scrollTop,
                                r = s.scrollLeft,
                                o = t._resCont,
                                l = t._sidebarCont,
                                c = t._footerCont,
                                d = t._headerCont,
                                h = t._stickyHeader,
                                u = t._stickyFooter,
                                m = t._days,
                                _ = t._daysNr,
                                p = t._cols.length,
                                v = e ? -1 : 1,
                                f = e ? "marginRight" : "marginLeft",
                                g = Te((r * v * (p / t._daysBatchNr)) / a),
                                y = a / _,
                                b = y ? ce(Ce((r * v) / y), 0, _ - 1) : 0,
                                x = t._virtualPagesY || [],
                                D = 0,
                                T = 0;
                            T < x.length && x[T].top - n.scrollContHeight / 2 <= i;

                        )
                            (D = T), T++;
                        if (((Sn && !e) || (o && (o.scrollTop = i), l && (l.scrollTop = i)), h && Sn)) {
                            var S = h.style;
                            (S.marginTop = i < 0 ? -i + "px" : ""), (S[f] = r * v < 0 ? -r * v + "px" : "");
                        }
                        if (u && Sn) {
                            var C = u.style;
                            (C.marginTop = i < 0 ? -i + "px" : ""), (C[f] = r * v < 0 ? -r * v + "px" : "");
                        }
                        if (a) {
                            if ((d || c) && t._isDailyResolution) {
                                var w = function (e, t) {
                                    if (e && y) {
                                        var n = e.offsetWidth,
                                            a = e.style,
                                            s = ce(Ce((r * v + n) / y), 0, _ - 1);
                                        m[b][t + "Index"] !== m[s][t + "Index"] ? (a[f] = -(r * v + n - m[s][t + "Index"] * y + 1) + "px") : (a[f] = "");
                                    }
                                };
                                w(t._stickyDate, "date"), w(t._stickyMonth, "month"), w(t._stickyWeek, "week"), Sn || (c && (c.scrollLeft = r), d && (d.scrollLeft = r));
                            }
                            (g !== n.batchIndexX || D !== n.batchIndexY || ((t._stickyDate || t._stickyMonth || t._stickyWeek) && b !== n.dayIndex)) && t.setState({ batchIndexX: g, batchIndexY: D, dayIndex: b }),
                                clearTimeout(t._scrollDebounce),
                                (t._scrollDebounce = setTimeout(function () {
                                    if (!t._isScrolling && !t._viewChanged && !t._hasResY) {
                                        var e = m[b].date,
                                            n = (t._time * (r * v - b * y)) / y;
                                        t._hook("onActiveChange", { date: new Date(+e + t._startTime + n), scroll: !0 });
                                    }
                                }, 100)),
                                t._onMouseMove();
                        }
                    }),
                    (t._setStickyHeader = function (e) {
                        t._stickyHeader = e;
                    }),
                    (t._setStickyFooter = function (e) {
                        t._stickyFooter = e;
                    }),
                    (t._setStickyDay = function (e) {
                        t._stickyDate = e;
                    }),
                    (t._setStickyMonth = function (e) {
                        t._stickyMonth = e;
                    }),
                    (t._setStickyWeek = function (e) {
                        t._stickyWeek = e;
                    }),
                    (t._setCont = function (e) {
                        t._scrollCont = e;
                    }),
                    (t._setResCont = function (e) {
                        t._resCont = e;
                    }),
                    (t._setSidebarCont = function (e) {
                        t._sidebarCont = e;
                    }),
                    (t._setGridCont = function (e) {
                        t._gridCont = e;
                    }),
                    (t._setHeaderCont = function (e) {
                        t._headerCont = e;
                    }),
                    (t._setFooterCont = function (e) {
                        t._footerCont = e;
                    }),
                    (t._setCursorTimeCont = function (e) {
                        t._cursorTimeCont = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._onParentClick = function (e, t) {
                    (t.collapsed = !t.collapsed),
                        this._hook(t.collapsed ? "onResourceCollapse" : "onResourceExpand", { domEvent: e, resource: t.id }),
                        (this._visibleResources = this._flattenResources(this._resourcesCopy, [], 0)),
                        (this._shouldCheckSize = !0),
                        (this._isParentClick = !0),
                        this.forceUpdate();
                }),
                (t.prototype._render = function (t, n) {
                    e.prototype._render.call(this, t, n), clearTimeout(this._scrollDebounce);
                    var a = this._prevS,
                        s = this._eventMap,
                        i = this._resourceTops,
                        r = this._stepCell / gt,
                        o = Ce(this._startTime / gt) % r,
                        l = (Ce(this._endTime / gt) % r) + 1;
                    if (
                        ((this._stickyDay = this._days[n.dayIndex || 0] || this._days[0]),
                        (this._startCellStyle = o % r != 0 ? { width: (n.cellWidth || 64) * (((r - o) % r) / r) + "px" } : ie),
                        (this._endCellStyle = l % r != 0 ? { width: ((n.cellWidth || 64) * (l % r)) / r + "px" } : ie),
                        (t.connections === a.connections && t.eventMap === a.eventMap && t.theme === a.theme && t.rtl === a.rtl) || (this._calcConnections = !0),
                        this._hasSlots && (this._connections = ie),
                        this._calcConnections && !this._hasSlots && !this._shouldCheckSize && i)
                    ) {
                        for (
                            var c = [],
                                d = this._eventHeight,
                                h = this._gridWidth,
                                u = n.hasScrollY ? this._gridHeight : n.scrollContHeight - n.headerHeight,
                                m = 1500 / h,
                                _ = !0 === t.rtl,
                                p = _ ? -1 : 1,
                                v = (750 / h) * p,
                                f = (400 / u) * p,
                                g = (100 * d) / u,
                                y = 0,
                                b = t.connections || [];
                            y < b.length;
                            y++
                        ) {
                            var x = b[y],
                                D = s[x.from],
                                T = s[x.to],
                                S = x.arrow,
                                C = x.color,
                                w = x.cssClass || "",
                                k = x.from + "__" + x.to,
                                M = x.type || "fs";
                            if (D && T) {
                                var E = D.position,
                                    N = T.position,
                                    I = E.width !== ie,
                                    L = N.width !== ie,
                                    H = D.resource,
                                    Y = T.resource;
                                if ((I || L) && i[H] >= 0 && i[Y] >= 0) {
                                    var O = "fs" === M || "ff" === M,
                                        P = "fs" === M || "ss" === M,
                                        F = O ? D.endDate : D.startDate,
                                        R = P ? T.startDate : T.endDate,
                                        z = R < F,
                                        V = z ? R : F,
                                        A = z ? F : R,
                                        W = E.top || 0,
                                        U = N.top || 0,
                                        B = _ ? "right" : "left",
                                        j = I ? +E[B].replace("%", "") : z ? 100 : 0,
                                        K = L ? +N[B].replace("%", "") : z ? 0 : 100,
                                        X = I ? +E.width.replace("%", "") : 0,
                                        J = I ? +N.width.replace("%", "") : 0,
                                        q = i[Y] - i[H],
                                        G = !q && (("fs" === M && z) || ("sf" === M && !z) || "ff" === M || "ss" === M) && U === W,
                                        Z = O && P ? K - j - X - 2 * m : O && !P ? K - j + (J - X) : !O && P ? K - j : K - j + J + 2 * m,
                                        Q = q < 0 || (!q && U < W) ? -1 : 1,
                                        $ = (100 * (q - W * d + U * d + (G ? d : 0))) / u,
                                        ee = ("fs" === M && Z < 0) || (("ff" === M || "ss" === M) && G) || "sf" === M,
                                        te = ("ss" === M && z && !ee) || ("ff" === M && !z && !ee) || ("sf" === M && Z < 0),
                                        ne = (_ ? 100 - j : j) + (O ? X * p : 0),
                                        ae = (100 * (i[H] + W * d + 3 + d / 2)) / u;
                                    if (I && ("from" === S || "bidirectional" === S)) {
                                        var se = O ? v : -1 * v;
                                        c.push({
                                            color: C,
                                            cssClass: "mbsc-connection-arrow " + w,
                                            endDate: A,
                                            fill: C,
                                            id: k + "__start",
                                            pathD: "M " + ne + ", " + ae + " L " + (ne + se) + " " + (ae - f) + " L " + (ne + se) + " " + (ae + f) + " Z",
                                            startDate: V,
                                        });
                                    }
                                    var re = "M " + ne + ", " + ae;
                                    if (
                                        ((ne += O ? m * p : -m * p),
                                        te && (ne += Z * p),
                                        $ && ((re += " H " + ne), te || (re += " V " + (ae += $ - (ee ? g / 2 : 0) * Q))),
                                        te || (ne += Z * p),
                                        $ && ((re += " H " + ne), te && (re += " V " + (ae += $ - (ee ? g / 2 : 0) * Q))),
                                        $ && ee && (re += " V " + (ae += (g / 2) * Q * (G ? -1 : 1))),
                                        (re += " H " + (ne += P ? m * p : -m * p)),
                                        c.push({ color: C, cssClass: w, id: k, pathD: re, startDate: V, endDate: A }),
                                        L && ("to" === S || "bidirectional" === S || !0 === S))
                                    ) {
                                        se = P ? -1 * v : v;
                                        c.push({
                                            color: C,
                                            cssClass: "mbsc-connection-arrow " + w,
                                            endDate: A,
                                            fill: C,
                                            id: k + "__end",
                                            pathD: "M " + ne + ", " + ae + " L " + (ne + se) + " " + (ae - f) + " L " + (ne + se) + " " + (ae + f) + " Z",
                                            startDate: V,
                                        });
                                    }
                                }
                            }
                        }
                        (this._connections = c), (this._calcConnections = !1);
                    }
                }),
                t
            );
        })(Rl);
    function Wl(e, t, n) {
        var a,
            s,
            i,
            r,
            o = t.dragData,
            l = o && o.draggedEvent && o.draggedEvent.id,
            d = n._hasSlots,
            h = n._hb,
            u = n._rtl,
            m = n._times,
            _ = n._theme,
            p = n._startTime,
            v = n._endTime,
            f = n._stepLabel,
            g = n._slots,
            y = "timeline",
            b = e.eventList,
            x = "month" === e.type,
            D = n._stepCell < bt,
            T = n._startCellStyle,
            S = n._endCellStyle,
            C = n._daysBatch,
            w = { height: t.headerHeight + "px" },
            k = { height: t.footerHeight + "px" },
            M = n._days,
            E = n._daysNr,
            N = t.dayIndex || 0,
            I = n._isDailyResolution,
            L = n._hasResY,
            H = n._hasResources,
            Y = e.renderHourFooter || e.renderDayFooter || e.renderQuarterFooter || e.renderWeekFooter || e.renderMonthFooter || e.renderYearFooter,
            O = n._hasRows,
            P = n._colClass,
            F = n._dragCol,
            R = (((a = {}).className = "mbsc-connections" + _), a),
            z = (((s = {}).onMouseMove = n._onMouseMove), (s.onMouseLeave = n._onMouseLeave), s),
            V = function (t, a) {
                var s, i;
                if (n._displayTime && n._timeLabels[a])
                    if (e.renderHour) {
                        var r = +t.date + a;
                        _e((s = e.renderHour({ date: new Date(r), events: t.eventMap[r] || [], isActive: t.isActive }))) && ((i = n._safeHtml(s)), (n._shouldEnhance = !0));
                    } else s = n._timeLabels[a];
                return Gn("div", { key: a, "aria-hidden": "true", className: "mbsc-timeline-header-time mbsc-flex-1-1" + _, dangerouslySetInnerHTML: i }, s);
            },
            A = function (t, a) {
                var s, i;
                if (e.renderHourFooter && n._displayTime && n._timeLabels[a]) {
                    var r = +t.date + a;
                    _e((s = e.renderHourFooter({ date: new Date(r), events: t.eventMap[r] || [], isActive: t.isActive }))) && ((i = n._safeHtml(s)), (n._shouldEnhance = !0));
                }
                return Gn("div", { key: a, className: "mbsc-timeline-footer-time mbsc-flex-1-1 " + _, dangerouslySetInnerHTML: i }, s);
            },
            W = function (t, a) {
                var s, i;
                return (
                    e.renderDay ? _e((s = e.renderDay({ date: t.date, events: t.eventMap.all, isActive: t.isActive }))) && ((i = n._safeHtml(s)), (n._shouldEnhance = !0)) : (s = t.dateText),
                    Gn(
                        "div",
                        {
                            ref: a ? n._setStickyDay : ie,
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: i,
                            className: (a ? "mbsc-timeline-header-text" : "") + (t.isActive && !e.renderDay ? " mbsc-timeline-header-active" : "") + (e.renderDay ? " mbsc-timeline-header-date-cont" : " mbsc-timeline-header-date-text") + _,
                        },
                        s
                    )
                );
            },
            U = function (t, a) {
                var s, i;
                return (
                    e.renderWeek
                        ? _e((s = e.renderWeek({ date: t.date, endDate: t.endDate, events: t.eventMap[t.timestamp] || [], isActive: t.isActive, startDate: t.date, weekNr: t.weekNr }))) && ((i = n._safeHtml(s)), (n._shouldEnhance = !0))
                        : (s = t.weekText),
                    Gn(
                        "div",
                        {
                            ref: a ? n._setStickyWeek : ie,
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: i,
                            className: (a ? "mbsc-timeline-header-text" : "") + (e.renderWeek ? " mbsc-timeline-header-week-cont" : " mbsc-timeline-header-week-text") + (t.lastOfWeek ? "  mbsc-timeline-header-week-text-last" : "") + _,
                        },
                        s
                    )
                );
            },
            B = function (t) {
                var a, s;
                return (
                    e.renderWeekFooter &&
                        _e((a = e.renderWeekFooter({ date: t.date, endDate: t.endDate, events: t.eventMap[t.timestamp] || [], isActive: t.isActive, startDate: t.date, weekNr: t.weekNr }))) &&
                        ((s = n._safeHtml(a)), (n._shouldEnhance = !0)),
                    Gn("div", { dangerouslySetInnerHTML: s, className: "mbsc-timeline-footer-week-cont" }, a)
                );
            },
            j = function (t, a) {
                var s, i;
                return (
                    e.renderMonth ? _e((s = e.renderMonth({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((i = n._safeHtml(s)), (n._shouldEnhance = !0)) : (s = t.monthText),
                    Gn(
                        "div",
                        {
                            ref: a ? n._setStickyMonth : ie,
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: i,
                            className: (a ? "mbsc-timeline-header-text" : "") + (e.renderMonth ? " mbsc-timeline-header-month-cont" : " mbsc-timeline-header-month-text") + (t.lastOfMonth ? " mbsc-timeline-header-month-text-last" : "") + _,
                        },
                        s
                    )
                );
            },
            K = function (t) {
                var a, s;
                return (
                    e.renderMonthFooter && _e((a = e.renderMonthFooter({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = n._safeHtml(a)), (n._shouldEnhance = !0)),
                    Gn("div", { dangerouslySetInnerHTML: s, className: "mbsc-timeline-footer-month-cont" }, a)
                );
            },
            X = function (t) {
                var a, s;
                return (
                    e.renderQuarter && _e((a = e.renderQuarter({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = n._safeHtml(a)), (n._shouldEnhance = !0)),
                    Gn("div", { "aria-hidden": "true", dangerouslySetInnerHTML: s, className: (e.renderQuarter ? " mbsc-timeline-header-month-cont" : " mbsc-timeline-header-month-text") + _ }, a)
                );
            },
            J = function (t) {
                var a, s;
                return (
                    e.renderQuarterFooter && _e((a = e.renderQuarterFooter({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = n._safeHtml(a)), (n._shouldEnhance = !0)),
                    Gn("div", { dangerouslySetInnerHTML: s, className: "mbsc-timeline-footer-month-cont" }, a)
                );
            },
            q = function (t) {
                var a, s;
                return (
                    e.renderYear ? _e((a = e.renderYear({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = n._safeHtml(a)), (n._shouldEnhance = !0)) : (a = t.columnTitle),
                    Gn(
                        "div",
                        {
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: s,
                            className: (t.isActive && !e.renderYear ? " mbsc-timeline-header-active" : "") + (e.renderYear ? " mbsc-timeline-header-year-cont" : " mbsc-timeline-header-year-text") + _,
                        },
                        a
                    )
                );
            },
            G = function (t) {
                var a, s;
                return (
                    e.renderYearFooter && _e((a = e.renderYearFooter({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = n._safeHtml(a)), (n._shouldEnhance = !0)),
                    Gn("div", { dangerouslySetInnerHTML: s, className: "mbsc-timeline-footer-year-cont" }, a)
                );
            },
            Z = function (t, a) {
                var s,
                    i,
                    r = t.isParent,
                    o = (a ? a + "-" : "") + t.id,
                    l = t.fixed && !L,
                    c = { background: t.background, minHeight: n._rowHeights[o], top: l ? n._fixedResourceTops[o] : ie };
                return (
                    e.renderSidebar && _e((s = e.renderSidebar(t))) && ((i = n._safeHtml(s)), (n._shouldEnhance = !0)),
                    o !== n._dragRow &&
                        Gn(
                            "div",
                            {
                                key: o,
                                className:
                                    "mbsc-timeline-sidebar-resource mbsc-timeline-row mbsc-flex-1-0" + (r ? " mbsc-timeline-parent mbsc-flex" : "") + (l ? "  mbsc-timeline-row-fixed" : "") + (t.cssClass ? " " + t.cssClass : "") + _ + u + h,
                                style: c,
                            },
                            Gn("div", { className: "mbsc-timeline-sidebar-resource-title", dangerouslySetInnerHTML: i }, s)
                        )
                );
            },
            Q = function (t, a) {
                var s,
                    i = t.isParent,
                    r = n._hasHierarchy ? 1.75 * t.depth + "em" : ie,
                    o = (a ? a + "-" : "") + t.id,
                    l = t.fixed && !L,
                    c = { background: t.background, minHeight: n._rowHeights[o], paddingLeft: e.rtl ? ie : r, paddingRight: e.rtl ? r : ie, top: l ? n._fixedResourceTops[o] + "px" : ie },
                    d = t.name;
                return (
                    e.renderResource && _e((d = e.renderResource(t))) && ((s = n._safeHtml(d)), (n._shouldEnhance = !0)),
                    o !== n._dragRow &&
                        Gn(
                            "div",
                            {
                                key: o,
                                className: "mbsc-timeline-resource mbsc-timeline-row mbsc-flex-1-0" + (i ? " mbsc-timeline-parent mbsc-flex" : "") + (l ? " mbsc-timeline-row-fixed" : "") + (t.cssClass ? " " + t.cssClass : "") + _ + u + h,
                                style: c,
                            },
                            i &&
                                Gn(Vi, {
                                    className: "mbsc-timeline-resource-icon" + u + h,
                                    svg: t.collapsed ? (e.rtl ? e.nextIconRtl : e.nextIcon) : e.downIcon,
                                    theme: e.theme,
                                    onClick: function (e) {
                                        return n._onParentClick(e, t);
                                    },
                                }),
                            Gn("div", { className: "mbsc-timeline-resource-title" + (i ? " mbsc-flex-1-1" : ""), dangerouslySetInnerHTML: s }, d)
                        )
                );
            },
            $ = function (e, t, a, s, i) {
                var r = e[t][bl][i || "all"],
                    o = [];
                if (r)
                    for (var c = 0, d = r.data; c < d.length; c++) {
                        var h = d[c];
                        ((s && l === h.id) || (n._batchStart <= h.endDate && n._batchEnd > h.startDate)) && o.push(h);
                    }
                return a(o, i || "all", t, bl);
            },
            ee = function (e) {
                return e.map(function (e, t) {
                    return Gn("div", { key: t, className: "mbsc-schedule-color mbsc-timeline-color" + e.cssClass + _, style: e.position }, Gn("div", { className: "mbsc-schedule-color-text" }, e.title));
                });
            },
            te = function (e) {
                return e.map(function (e, t) {
                    return e.position && Gn("div", { key: t, className: "mbsc-schedule-invalid mbsc-timeline-invalid" + e.cssClass + _, style: e.position }, Gn("div", { className: "mbsc-schedule-invalid-text" }, e.title));
                });
            },
            ne = function (t, a, s, i) {
                var r = n._resourcesMap[s].eventResize,
                    d = s + "__" + i + "__" + a,
                    h = ws(o && o.draggedEvent && o.draggedEvent.original.resize, e.dragToResize, r),
                    u = {
                        displayTimezone: e.displayTimezone,
                        drag: e.dragToMove || e.externalDrag,
                        endDay: e.endDay,
                        eventHeight: n._setRowHeight ? n._eventHeight : ie,
                        exclusiveEndDates: e.exclusiveEndDates,
                        gridEndTime: v,
                        gridStartTime: p,
                        hasResY: L,
                        isListing: b,
                        isTimeline: !0,
                        lastDay: +n._lastDay,
                        render: e.renderEvent,
                        renderBufferAfter: e.renderBufferAfter,
                        renderBufferBefore: e.renderBufferBefore,
                        renderContent: e.renderEventContent,
                        resource: s,
                        rtl: e.rtl,
                        slot: i,
                        startDay: e.startDay,
                        theme: e.theme,
                        timezonePlugin: e.timezonePlugin,
                    };
                return Gn(
                    Qn,
                    null,
                    t.map(function (t) {
                        return (
                            t.position &&
                            Gn(
                                Hl,
                                c({}, u, {
                                    event: t,
                                    inactive: l === t.id,
                                    key: t.uid,
                                    resize: ws(t.original.resize, e.dragToResize, r),
                                    selected: !(!e.selectedEventsMap[t.uid] && !e.selectedEventsMap[t.id]),
                                    onClick: n._onEventClick,
                                    onDoubleClick: e.onEventDoubleClick,
                                    onRightClick: e.onEventRightClick,
                                    onHoverIn: e.onEventHoverIn,
                                    onHoverOut: e.onEventHoverOut,
                                    onDelete: e.onEventDelete,
                                    onDragStart: n._onEventDragStart,
                                    onDragMove: n._onEventDragMove,
                                    onDragEnd: n._onEventDragEnd,
                                    onDragModeOn: n._onEventDragModeOn,
                                    onDragModeOff: n._onEventDragModeOff,
                                })
                            )
                        );
                    }),
                    o &&
                        o.originDates &&
                        o.originDates[d] &&
                        Gn(
                            Hl,
                            c({}, u, {
                                event: o.originDates[d],
                                hidden: o && !!o.draggedDates,
                                isDrag: !0,
                                resize: h,
                                onDragStart: n._onEventDragStart,
                                onDragMove: n._onEventDragMove,
                                onDragEnd: n._onEventDragEnd,
                                onDragModeOff: n._onEventDragModeOff,
                            })
                        ),
                    o && o.draggedDates && o.draggedDates[d] && Gn(Hl, c({}, u, { event: o.draggedDates[d], isDrag: !0, resize: h }))
                );
            },
            ae = function (a, s) {
                var i = a.id,
                    r = (s ? s + "-" : "") + i,
                    o = a.fixed && !L;
                return Gn(
                    "div",
                    {
                        key: r,
                        className:
                            "mbsc-timeline-row mbsc-flex mbsc-flex-1-0" +
                            (a.isParent ? " mbsc-timeline-parent" : "") +
                            (o ? " mbsc-timeline-row-fixed" : "") +
                            (r === n._dragRow ? " mbsc-timeline-hidden" : "") +
                            (a.cssClass ? " " + a.cssClass : "") +
                            _ +
                            h,
                        style: { background: a.background, minHeight: n._rowHeights[r], top: o ? n._fixedResourceTops[r] + "px" : ie },
                    },
                    !d && Gn(Qn, null, Gn("div", { className: "mbsc-timeline-events" }, $(n._events, i, ne, !0, s)), $(n._invalids, i, te, void 0, s), $(n._colors, i, ee, void 0, s)),
                    Gn("div", { style: { width: n._placeholderSizeX + "px" }, className: "mbsc-flex-none" }),
                    C.map(function (a) {
                        var r,
                            o = a.timestamp,
                            l = s || a.dateKey;
                        if (I)
                            return Gn(
                                "div",
                                {
                                    key: o,
                                    className:
                                        "mbsc-timeline-day mbsc-flex" +
                                        _ +
                                        u +
                                        h +
                                        (l === F ? " mbsc-timeline-hidden" : "") +
                                        (a.dateIndex < E - 1 && (D || a.lastOfMonth) ? " mbsc-timeline-day-border" : "") +
                                        (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-0-0") +
                                        (x || n._isMulti ? " mbsc-timeline-day-month" : ""),
                                },
                                g.map(function (t) {
                                    var a = t.id,
                                        s = n._events[i][a][l],
                                        r = n._colors[i][a][l],
                                        p = n._invalids[i][a][l];
                                    return Gn(
                                        "div",
                                        { key: a, className: "mbsc-flex mbsc-flex-1-1" + (d ? " mbsc-timeline-slot" : "") },
                                        d && Gn(Qn, null, Gn("div", { className: "mbsc-timeline-events" }, ne(s ? s.data : [], l, i, a)), p && te(p.data), r && ee(r.data)),
                                        m.map(function (t, n) {
                                            var s,
                                                r = Nl(o, t),
                                                l = !n,
                                                d = n === m.length - 1,
                                                p =
                                                    (((s = {}).onDoubleClick = function (t) {
                                                        return e.onCellDoubleClick({ date: r, domEvent: t, resource: i, slot: a, source: y });
                                                    }),
                                                    (s.onContextMenu = function (t) {
                                                        return e.onCellRightClick({ date: r, domEvent: t, resource: i, slot: a, source: y });
                                                    }),
                                                    s);
                                            return Gn(
                                                "div",
                                                c(
                                                    {
                                                        key: n,
                                                        className: "mbsc-timeline-column mbsc-flex-1-1" + _ + u + h + ((l && !d && T) || (d && !l && S) ? " mbsc-flex-none" : ""),
                                                        onClick: function (t) {
                                                            return e.onCellClick({ date: r, domEvent: t, resource: i, slot: a, source: y });
                                                        },
                                                        style: l && !d ? T : d && !l ? S : ie,
                                                    },
                                                    p
                                                )
                                            );
                                        })
                                    );
                                })
                            );
                        var p = a.date,
                            v =
                                (((r = {}).onDoubleClick = function (t) {
                                    return e.onCellDoubleClick({ date: p, domEvent: t, resource: i, source: y });
                                }),
                                (r.onContextMenu = function (t) {
                                    return e.onCellRightClick({ date: p, domEvent: t, resource: i, source: y });
                                }),
                                r);
                        return Gn(
                            "div",
                            c(
                                {
                                    key: o,
                                    className: "mbsc-timeline-day mbsc-timeline-column" + _ + u + h + (l === F ? " mbsc-timeline-hidden" : "") + (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-0-0"),
                                    onClick: function (t) {
                                        return e.onCellClick({ date: p, domEvent: t, resource: i, source: y });
                                    },
                                },
                                v
                            )
                        );
                    })
                );
            };
        return Gn(
            "div",
            {
                ref: n._setEl,
                className: "mbsc-timeline mbsc-flex-1-1 mbsc-flex-col" + (t.cellWidth ? "" : " mbsc-hidden") + (n._hasSticky ? " mbsc-has-sticky" : "") + (O ? "" : " mbsc-timeline-no-rows") + (H ? "" : " mbsc-timeline-no-resource") + _ + u,
            },
            Gn("div", { dangerouslySetInnerHTML: n.textParam }),
            Gn(
                "div",
                { ref: n._setStickyHeader, className: "mbsc-timeline-header-sticky mbsc-flex" + _ },
                O &&
                    Gn(
                        "div",
                        { className: "mbsc-timeline-resource-header-cont " + P + _ + u + h, style: w },
                        (e.renderResourceHeader && _e((i = e.renderResourceHeader())) && ((r = n._safeHtml(i)), (n._shouldEnhance = !0)), Gn("div", { className: "mbsc-timeline-resource-header", dangerouslySetInnerHTML: r }, i))
                    ),
                I &&
                    Gn(
                        "div",
                        { className: "mbsc-flex-1-1" },
                        !L &&
                            Gn(
                                Qn,
                                null,
                                n._isMulti && Gn("div", { className: "mbsc-timeline-header-month mbsc-flex" + _ + u + h }, j(M[N] || M[0], !0)),
                                e.weekNumbers && Gn("div", { className: "mbsc-timeline-header-week mbsc-flex" + _ + u + h }, U(M[N] || M[0], !0)),
                                (d || D) && Gn("div", { className: "mbsc-timeline-header-date mbsc-flex" + _ + u + h }, W(M[N] || M[0], !0))
                            )
                    ),
                O &&
                    e.renderSidebar &&
                    Gn(
                        "div",
                        { className: "mbsc-timeline-sidebar-header-cont mbsc-timeline-sidebar-col" + _ + u + h, style: w },
                        (function () {
                            var t, a;
                            return e.renderSidebarHeader && _e((t = e.renderSidebarHeader())) && ((a = n._safeHtml(t)), (n._shouldEnhance = !0)), Gn("div", { className: "mbsc-timeline-sidebar-header", dangerouslySetInnerHTML: a }, t);
                        })()
                    ),
                t.hasScrollY && Gn("div", { className: "mbsc-schedule-fake-scroll-y" })
            ),
            Y &&
                Gn(
                    "div",
                    { ref: n._setStickyFooter, className: "mbsc-timeline-footer-sticky mbsc-flex" + _ },
                    O &&
                        Gn(
                            "div",
                            { className: "mbsc-timeline-resource-footer-cont " + P + _ + u + h, style: k },
                            (function () {
                                var t, a;
                                return (
                                    e.renderResourceFooter && _e((t = e.renderResourceFooter())) && ((a = n._safeHtml(t)), (n._shouldEnhance = !0)), Gn("div", { className: "mbsc-timeline-resource-footer", dangerouslySetInnerHTML: a }, t)
                                );
                            })()
                        ),
                    I && Gn("div", { className: "mbsc-flex-1-1" }),
                    O &&
                        e.renderSidebar &&
                        Gn(
                            "div",
                            { className: "mbsc-timeline-sidebar-footer-cont mbsc-timeline-sidebar-col" + _ + u + h, style: k },
                            (function () {
                                var t, a;
                                return e.renderSidebarFooter && _e((t = e.renderSidebarFooter())) && ((a = n._safeHtml(t)), (n._shouldEnhance = !0)), Gn("div", { className: "mbsc-timeline-sidebar-footer", dangerouslySetInnerHTML: a }, t);
                            })()
                        ),
                    t.hasScrollY && Gn("div", { className: "mbsc-schedule-fake-scroll-y" })
                ),
            Gn(
                "div",
                { ref: n._setCont, className: "mbsc-timeline-grid-scroll mbsc-flex-col mbsc-flex-1-1" + _ + u + h, onScroll: n._onScroll },
                Gn("div", { className: "mbsc-flex-none", style: n._hasSticky ? ie : w }),
                Gn(
                    "div",
                    { className: "mbsc-timeline-header mbsc-flex" + _ + u + h, ref: n._setHeaderCont },
                    O && Gn("div", { className: "mbsc-timeline-resource-header-cont " + P + _ + u + h }),
                    Gn(
                        "div",
                        { className: "mbsc-timeline-header-bg mbsc-flex-1-0 mbsc-flex" + _ },
                        Gn(
                            "div",
                            { className: "mbsc-timeline-time-indicator-cont", style: { height: (t.scrollContHeight || 0) - (t.headerHeight || 0) + "px", width: t.hasScrollX ? n._gridWidth + "px" : ie } },
                            n._showTimeIndicator &&
                                Gn(Ol, {
                                    amText: e.amText,
                                    displayedTime: n._time,
                                    displayedDays: E,
                                    displayTimezone: e.displayTimezone,
                                    endDay: e.endDay,
                                    firstDay: n._firstDayTz,
                                    orientation: "y",
                                    pmText: e.pmText,
                                    rtl: e.rtl,
                                    startDay: e.startDay,
                                    startTime: p,
                                    theme: e.theme,
                                    timeFormat: e.timeFormat,
                                    timezonePlugin: e.timezonePlugin,
                                    hasResY: L,
                                }),
                            n._showCursorTime && Gn("div", { ref: n._setCursorTimeCont, className: "mbsc-schedule-cursor-time mbsc-schedule-cursor-time-y" + _ })
                        ),
                        Gn("div", { className: "mbsc-flex-none", style: { width: n._placeholderSizeX + "px" } }),
                        Gn(
                            "div",
                            { className: t.hasScrollX ? "mbsc-flex-none" : "mbsc-flex-1-1" },
                            I
                                ? Gn(
                                      Qn,
                                      null,
                                      n._isMulti &&
                                          !L &&
                                          Gn(
                                              "div",
                                              { className: "mbsc-flex" },
                                              C.map(function (e) {
                                                  var t = e.lastOfMonth;
                                                  return e.dateKey === F
                                                      ? ie
                                                      : Gn(
                                                            "div",
                                                            { key: e.timestamp, className: "mbsc-timeline-month mbsc-flex-1-0-0" + _ + u + h + (e.dateIndex < E - 1 && t ? " mbsc-timeline-day mbsc-timeline-day-border" : "") },
                                                            Gn("div", { className: "mbsc-timeline-header-month" + _ + u + h + (t ? " mbsc-timeline-header-month-last" : "") }, e.monthTitle && j(e, !1))
                                                        );
                                              })
                                          ),
                                      e.weekNumbers &&
                                          Gn(
                                              "div",
                                              { className: "mbsc-flex" },
                                              C.map(function (e) {
                                                  var t = e.lastOfWeek;
                                                  return e.dateKey === F
                                                      ? ie
                                                      : Gn(
                                                            "div",
                                                            {
                                                                key: e.timestamp,
                                                                className: "mbsc-timeline-month mbsc-flex-1-0-0" + _ + u + h + (e.dateIndex < E - 1 && t && (D || e.lastOfMonth) ? " mbsc-timeline-day mbsc-timeline-day-border" : ""),
                                                            },
                                                            Gn("div", { className: "mbsc-timeline-header-week" + _ + u + h + (t ? " mbsc-timeline-header-week-last" : "") }, e.weekTitle && U(e, !1))
                                                        );
                                              })
                                          ),
                                      Gn(
                                          "div",
                                          { className: "mbsc-flex" },
                                          C.map(function (t) {
                                              return t.dateKey === F
                                                  ? ie
                                                  : Gn(
                                                        "div",
                                                        {
                                                            key: t.timestamp,
                                                            className:
                                                                "mbsc-timeline-day mbsc-flex-1-0-0" +
                                                                _ +
                                                                u +
                                                                h +
                                                                (t.dateIndex < E - 1 && (D || t.lastOfMonth) ? " mbsc-timeline-day-border" : "") +
                                                                (x || n._isMulti ? " mbsc-timeline-day-month" : ""),
                                                        },
                                                        !L && Gn("div", { className: "mbsc-timeline-header-date" + _ + u + h }, W(t), t.label && Gn("div", { className: "mbsc-hidden-content" }, t.label)),
                                                        d &&
                                                            Gn(
                                                                "div",
                                                                { className: "mbsc-flex mbsc-timeline-slots" + _ },
                                                                g.map(function (a) {
                                                                    return Gn(
                                                                        "div",
                                                                        { key: a.id, className: "mbsc-timeline-slot mbsc-timeline-slot-header mbsc-flex-1-1" + u + _ },
                                                                        a.name &&
                                                                            (function (t) {
                                                                                var a,
                                                                                    s = t.slot,
                                                                                    i = s.name;
                                                                                return (
                                                                                    e.renderSlot && _e((i = e.renderSlot(t))) && ((a = n._safeHtml(i)), (n._shouldEnhance = !0)),
                                                                                    Gn("div", { key: s.id, className: "mbsc-timeline-slot-title", dangerouslySetInnerHTML: a }, i)
                                                                                );
                                                                            })({ slot: a, date: t.date })
                                                                    );
                                                                })
                                                            ),
                                                        Gn(
                                                            "div",
                                                            { "aria-hidden": "true", className: "mbsc-flex" },
                                                            m.map(function (e, a) {
                                                                var s = !a,
                                                                    i = a === m.length - 1;
                                                                return Gn(
                                                                    "div",
                                                                    {
                                                                        key: a,
                                                                        style: s && !i ? T : i && !s ? S : ie,
                                                                        className:
                                                                            "mbsc-flex mbsc-flex-1-1 mbsc-timeline-header-column" +
                                                                            _ +
                                                                            u +
                                                                            h +
                                                                            (!n._displayTime || d ? " mbsc-timeline-no-height" : "") +
                                                                            (f > n._stepCell && m[a + 1] % f ? " mbsc-timeline-no-border" : "") +
                                                                            ((s && T) || (i && S) ? " mbsc-flex-none" : ""),
                                                                    },
                                                                    V(t, e),
                                                                    n._timesBetween.map(function (n, a) {
                                                                        var s = e + (a + 1) * f;
                                                                        return s > p && s < v && V(t, s);
                                                                    })
                                                                );
                                                            })
                                                        )
                                                    );
                                          })
                                      )
                                  )
                                : Gn(
                                      "div",
                                      { className: "mbsc-flex" },
                                      C.map(function (t) {
                                          return t.dateKey === F
                                              ? ie
                                              : Gn(
                                                    "div",
                                                    { key: t.timestamp, className: "mbsc-timeline-day mbsc-flex-1-0-0" + _ + u + h },
                                                    Gn(
                                                        "div",
                                                        { className: "mbsc-timeline-header-week mbsc-timeline-header-week-last" + _ + u + h },
                                                        Gn(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mbsc-timeline-header-week-text mbsc-timeline-header-week-text-last" +
                                                                    (t.isActive && !(e.renderWeek || e.renderMonth || e.renderQuarter || e.renderYear) ? " mbsc-timeline-header-active" : "") +
                                                                    _,
                                                            },
                                                            (function (t) {
                                                                switch (e.resolution) {
                                                                    case "week":
                                                                        if (e.renderWeek) return U(t, !1);
                                                                        break;
                                                                    case "month":
                                                                        if (e.renderMonth) return j(t, !1);
                                                                        break;
                                                                    case "quarter":
                                                                        if (e.renderQuarter) return X(t);
                                                                        break;
                                                                    case "year":
                                                                        if (e.renderYear) return q(t);
                                                                }
                                                                return t.columnTitle;
                                                            })(t)
                                                        )
                                                    )
                                                );
                                      })
                                  )
                        )
                    ),
                    O && e.renderSidebar && Gn("div", { className: "mbsc-timeline-sidebar-header-cont mbsc-timeline-sidebar-col" + _ + u + h })
                ),
                Gn(
                    "div",
                    { className: "mbsc-flex mbsc-flex-1-1" },
                    Gn(
                        "div",
                        { className: "mbsc-flex mbsc-flex-1-1" },
                        O &&
                            Gn(
                                "div",
                                { className: "mbsc-timeline-resources mbsc-flex-col " + P + _ + u, ref: n._setResCont },
                                Gn("div", { className: "mbsc-flex-none", style: n._hasSideSticky ? ie : w }),
                                Gn(
                                    "div",
                                    { className: "mbsc-timeline-resource-bg mbsc-flex-1-1" + (n._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col") + _ },
                                    Gn("div", { style: { height: n._placeholderSizeY + "px" }, className: "mbsc-flex-none" }),
                                    n._rowBatch.map(function (e) {
                                        var t = e.day,
                                            a = t ? t.dateKey : "";
                                        return !e.hidden && t
                                            ? H
                                                ? Gn(
                                                      "div",
                                                      { key: a, className: "mbsc-timeline-row-group mbsc-flex mbsc-flex-1-0" + _ + h },
                                                      Gn("div", { className: "mbsc-timeline-row-date mbsc-timeline-row-date-col mbsc-flex-none" + u + _ + h }, W(t)),
                                                      Gn(
                                                          "div",
                                                          { className: "mbsc-timeline-row-resource-col mbsc-flex-1-1 mbsc-flex-col" },
                                                          e.rows.map(function (e) {
                                                              return Q(e, a);
                                                          })
                                                      )
                                                  )
                                                : Gn("div", { key: a, className: "mbsc-timeline-row-date mbsc-flex-1-0" + u + _ + h, style: { minHeight: n._rowHeights[a + "-" + bl] } }, W(t))
                                            : e.rows.map(function (e) {
                                                  return Q(e, a);
                                              });
                                    })
                                ),
                                Gn("div", { className: "mbsc-flex-none", style: n._hasSideSticky ? ie : k })
                            ),
                        O && Gn("div", { className: n._hasSideSticky ? "" : P }),
                        Gn(
                            "div",
                            { className: "mbsc-timeline-hidden" },
                            Gn("div", { className: "mbsc-timeline-row mbsc-timeline-empty-row" + _ }),
                            Gn("div", { className: "mbsc-timeline-row mbsc-timeline-parent mbsc-timeline-empty-parent" + _ }),
                            Gn("div", { className: "mbsc-timeline-row-gutter" + _ })
                        ),
                        Gn(
                            "div",
                            c(
                                {
                                    className: "mbsc-timeline-grid mbsc-flex-1-0" + (n._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col"),
                                    ref: n._setGridCont,
                                    style: { height: t.hasScrollY ? n._gridHeight + "px" : ie, width: t.hasScrollX ? n._gridWidth + "px" : ie },
                                },
                                z
                            ),
                            Gn("div", { style: { height: n._placeholderSizeY + "px" }, className: "mbsc-flex-none" }),
                            n._rowBatch.map(function (e) {
                                var t = e.day,
                                    n = t ? t.dateKey : "";
                                return t && H
                                    ? Gn(
                                          "div",
                                          { key: n, className: "mbsc-timeline-row-group mbsc-flex-col mbsc-flex-1-0" + _ + h },
                                          e.rows.map(function (e) {
                                              return ae(e, n);
                                          })
                                      )
                                    : Gn(
                                          Qn,
                                          { key: n },
                                          e.rows.map(function (e) {
                                              return ae(e, n);
                                          })
                                      );
                            }),
                            n._connections &&
                                Gn(
                                    "svg",
                                    c({ viewBox: "0 0 100 100", preserveAspectRatio: "none" }, R),
                                    n._connections.map(function (e) {
                                        var t,
                                            a = (((t = {}).className = "mbsc-connection " + e.cssClass + _), (t.d = e.pathD), (t.style = { stroke: e.color, fill: e.fill }), (t["vector-effect"] = "non-scaling-stroke"), t);
                                        return Mt(n._batchStart, n._batchEnd, e.startDate, e.endDate, !0) && Gn("path", c({ key: e.id }, a));
                                    })
                                )
                        ),
                        O &&
                            e.renderSidebar &&
                            Gn(
                                "div",
                                { className: "mbsc-timeline-sidebar mbsc-timeline-sidebar-col mbsc-flex-col" + _ + u, ref: n._setSidebarCont },
                                Gn("div", { className: "mbsc-flex-none", style: n._hasSideSticky ? ie : w }),
                                Gn(
                                    "div",
                                    { className: "mbsc-timeline-resource-bg mbsc-flex-1-1" + (n._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col") + _ },
                                    Gn("div", { style: { height: n._placeholderSizeY + "px" }, className: "mbsc-flex-none" }),
                                    n._rowBatch.map(function (e) {
                                        var t = e.day,
                                            n = t ? t.dateKey : "";
                                        return t && H
                                            ? Gn(
                                                  "div",
                                                  { key: n, className: "mbsc-timeline-row-group mbsc-flex-col mbsc-flex-1-0" + _ + h },
                                                  e.rows.map(function (e) {
                                                      return Z(e, n);
                                                  })
                                              )
                                            : e.rows.map(function (e) {
                                                  return Z(e, n);
                                              });
                                    })
                                ),
                                Gn("div", { className: "mbsc-flex-none", style: n._hasSideSticky ? ie : k })
                            ),
                        O && e.renderSidebar && Gn("div", { className: n._hasSideSticky ? "" : "mbsc-timeline-sidebar-col" })
                    )
                ),
                Y &&
                    Gn(
                        Qn,
                        null,
                        Gn("div", { className: "mbsc-flex-none", style: n._hasSticky ? ie : k }),
                        Gn(
                            "div",
                            { className: "mbsc-timeline-footer mbsc-flex" + _ + u + h, ref: n._setFooterCont },
                            O && Gn("div", { className: "mbsc-timeline-resource-footer-cont " + P + _ + u + h }),
                            Gn(
                                "div",
                                { className: "mbsc-timeline-footer-bg mbsc-flex-1-0 mbsc-flex" + _ },
                                Gn("div", { className: "mbsc-flex-none", style: { width: n._placeholderSizeX + "px" } }),
                                Gn(
                                    "div",
                                    { className: t.hasScrollX ? "mbsc-flex-none" : "mbsc-flex-1-1" },
                                    Gn(
                                        "div",
                                        { className: "mbsc-flex" },
                                        C.map(function (t) {
                                            return t.dateKey === F
                                                ? ie
                                                : I
                                                ? Gn(
                                                      "div",
                                                      {
                                                          key: t.timestamp,
                                                          className:
                                                              "mbsc-timeline-day mbsc-flex-1-0-0" +
                                                              _ +
                                                              u +
                                                              h +
                                                              (t.dateIndex < E - 1 && (D || t.lastOfMonth) ? " mbsc-timeline-day-border" : "") +
                                                              (x || n._isMulti ? " mbsc-timeline-day-month" : ""),
                                                      },
                                                      Gn(
                                                          "div",
                                                          { className: "mbsc-flex" },
                                                          m.map(function (e, a) {
                                                              var s = !a,
                                                                  i = a === m.length - 1;
                                                              return Gn(
                                                                  "div",
                                                                  {
                                                                      key: a,
                                                                      style: s && !i ? T : i && !s ? S : ie,
                                                                      className:
                                                                          "mbsc-flex mbsc-flex-1-1 mbsc-timeline-column mbsc-timeline-footer-column" +
                                                                          _ +
                                                                          u +
                                                                          h +
                                                                          (!n._displayTime || d ? " mbsc-timeline-no-height" : "") +
                                                                          (f > n._stepCell && m[a + 1] % f ? "mbsc-timeline-no-border" : "") +
                                                                          ((s && !i && T) || (i && !s && S) ? " mbsc-flex-none" : ""),
                                                                  },
                                                                  A(t, e),
                                                                  n._timesBetween.map(function (n, a) {
                                                                      var s = e + (a + 1) * f;
                                                                      return s > p && s < v && A(t, s);
                                                                  })
                                                              );
                                                          })
                                                      ),
                                                      e.renderDayFooter &&
                                                          Gn(
                                                              "div",
                                                              { className: "mbsc-timeline-footer-date" + _ + u + h },
                                                              (function (t) {
                                                                  var a, s;
                                                                  return (
                                                                      e.renderDayFooter && _e((a = e.renderDayFooter({ date: t.date, events: t.eventMap.all }))) && ((s = n._safeHtml(a)), (n._shouldEnhance = !0)),
                                                                      Gn("div", { className: "mbsc-timeline-footer-date-cont", dangerouslySetInnerHTML: s }, a)
                                                                  );
                                                              })(t)
                                                          ),
                                                      d &&
                                                          Gn(
                                                              "div",
                                                              { className: "mbsc-flex" },
                                                              g.map(function (e) {
                                                                  return Gn("div", { key: e.id, className: "mbsc-timeline-slot mbsc-flex-1-1" + u + _ });
                                                              })
                                                          )
                                                  )
                                                : Gn(
                                                      "div",
                                                      { key: t.timestamp, className: "mbsc-timeline-day mbsc-flex-1-0-0" + _ + u + h },
                                                      Gn(
                                                          "div",
                                                          { className: "mbsc-timeline-footer-week mbsc-timeline-footer-week-last" + _ + u + h },
                                                          Gn(
                                                              "div",
                                                              { className: "mbsc-timeline-footer-week-text" + _ },
                                                              (function (t) {
                                                                  switch (e.resolution) {
                                                                      case "week":
                                                                          if (e.renderWeekFooter) return B(t);
                                                                          break;
                                                                      case "month":
                                                                          if (e.renderMonthFooter) return K(t);
                                                                          break;
                                                                      case "quarter":
                                                                          if (e.renderQuarterFooter) return J(t);
                                                                          break;
                                                                      case "year":
                                                                          if (e.renderYearFooter) return G(t);
                                                                  }
                                                              })(t)
                                                          )
                                                      )
                                                  );
                                        })
                                    )
                                )
                            ),
                            O && e.renderSidebar && Gn("div", { className: "mbsc-timeline-sidebar-footer-cont mbsc-timeline-sidebar-col" + _ + u + h })
                        )
                    )
            ),
            o && !t.isTouchDrag && Gn("div", { className: "mbsc-calendar-dragging" })
        );
    }
    var Ul = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e, t) {
                return Wl(e, t, this);
            }),
            t
        );
    })(Al);
    function Bl(e, t, n, a, s, i, r) {
        var o,
            l = !e._colorEventList,
            c = i ? "popover" : "agenda",
            d = !i || e.state.showPopover,
            h = e._theme,
            u = r ? r.eventContent : s.renderEventContent,
            m = r ? r.event : s.renderEvent,
            _ = i ? e.state.popoverHost : ie,
            p = t.original,
            v = { __html: t.html },
            f = u ? u(t) : Gn("div", { className: "mbsc-event-text " + h, title: t.tooltip, dangerouslySetInnerHTML: v }, ie);
        _e(f) ? ((f = Gn("div", { className: "mbsc-event-content mbsc-flex-1-1 " + h, dangerouslySetInnerHTML: { __html: f } })), (e._shouldEnhance = d && c)) : (f = Gn("div", { className: "mbsc-event-content mbsc-flex-1-1 " + h }, f));
        var g = m
            ? m(t)
            : Gn(
                  Qn,
                  null,
                  Gn("div", { className: "mbsc-event-color" + h + e._rtl, style: t.style }),
                  f,
                  Gn(
                      "div",
                      { className: "mbsc-event-time" + (_ ? " mbsc-event-date" : "") + h + e._rtl },
                      t.allDayText && Gn("div", { className: "mbsc-event-all-day" + h }, t.allDayText),
                      t.lastDay && Gn("div", { className: "mbsc-event-until" + h }, t.lastDay),
                      t.start && Gn("div", { className: "mbsc-event-start" + h }, t.start),
                      t.start && t.end && Gn("div", { className: "mbsc-event-sep" + h }, "-"),
                      t.end && Gn("div", { className: "mbsc-event-end" + h }, t.end)
                  )
              );
        return (
            _e(g) && ((o = { __html: g }), (g = ie), (e._shouldEnhance = d && c)),
            Gn(
                yl,
                {
                    className: "mbsc-event" + (l ? "" : " mbsc-colored-event") + (p.cssClass ? " " + p.cssClass : ""),
                    "data-id": p.id,
                    key: n,
                    actionable: s.actionableEvents,
                    dangerouslySetInnerHTML: o,
                    drag: i && (e._showEventLabels || _) && (s.dragToMove || s.externalDrag),
                    event: p,
                    eventData: t,
                    rtl: s.rtl,
                    selected: !(!e._selectedEventsMap[t.uid] && !e._selectedEventsMap[t.id]),
                    style: l ? ie : t.style,
                    theme: s.theme,
                    themeVariant: s.themeVariant,
                    onClick: function (t) {
                        return e._onEventClick({ date: a, domEvent: t.domEvent, event: p, source: c });
                    },
                    onDoubleClick: function (t) {
                        return e._onEventDoubleClick({ date: a, domEvent: t, event: p, source: c });
                    },
                    onContextMenu: function (t) {
                        return e._onEventRightClick({ date: a, domEvent: t, event: p, source: c });
                    },
                    onHoverIn: function (t) {
                        var n = t.domEvent;
                        return e._onEventHoverIn({ date: a, domEvent: n, event: p, source: c });
                    },
                    onHoverOut: function (t) {
                        var n = t.domEvent;
                        return e._onEventHoverOut({ date: a, domEvent: n, event: p, source: c });
                    },
                    onDelete: e._onEventDelete,
                    onDragEnd: _ ? _._onEventDragEnd : e._onLabelUpdateEnd,
                    onDragModeOff: _ ? _._onEventDragModeOff : e._onLabelUpdateModeOff,
                    onDragModeOn: _ ? _._onEventDragModeOn : e._onLabelUpdateModeOn,
                    onDragMove: _ ? _._onEventDragMove : e._onLabelUpdateMove,
                    onDragStart: _ ? _._onEventDragStart : e._onLabelUpdateStart,
                },
                g
            )
        );
    }
    function jl(e, t, n, a) {
        var s;
        n._listDays || (n._listDays = {}),
            n._showEventList &&
                ((s = (function (e, t, n) {
                    var a,
                        s = e.theme,
                        i = t._listDays,
                        r = t.state.eventList || [],
                        o = n ? n.agenda : e.renderAgenda,
                        l = n ? n.agendaEmpty : e.renderAgendaEmpty;
                    if (o && t._eventListHTML === ie) return o(r, e, i);
                    if (!r.length) {
                        var c = l && l(),
                            d = _e(c) && { __html: c };
                        d ? ((a = Gn("div", { dangerouslySetInnerHTML: d })), (t._shouldEnhance = t._list)) : (a = Gn("div", { className: c ? "" : "mbsc-event-list-empty" + t._theme }, c || e.noEventsText));
                    }
                    return Gn(
                        pl,
                        { theme: s, themeVariant: e.themeVariant, rtl: e.rtl },
                        !r.length && a,
                        r.map(function (a, r) {
                            return Gn(
                                "div",
                                {
                                    className: "mbsc-event-group" + t._theme,
                                    key: r,
                                    ref: function (e) {
                                        return (i[a.timestamp] = e);
                                    },
                                },
                                ("day" !== t._eventListType || t._eventListSize > 1) && Gn(fl, { theme: s, themeVariant: e.themeVariant, className: "mbsc-event-day" }, a.date),
                                a.events.map(function (s, i) {
                                    return Bl(t, s, i, a.timestamp, e, ie, n);
                                })
                            );
                        })
                    );
                })(e, n, a)),
                _e(s) && ((n._eventListHTML = { __html: s }), (n._shouldLoadDays = !0), (n._shouldEnhance = !0), (s = ie)));
        var i = {
                amText: e.amText,
                clickToCreate: e.clickToCreate,
                dataTimezone: e.dataTimezone,
                dateFormat: e.dateFormat,
                dayNames: e.dayNames,
                dayNamesMin: e.dayNamesMin,
                dayNamesShort: e.dayNamesShort,
                displayTimezone: e.displayTimezone,
                dragBetweenResources: e.dragBetweenResources,
                dragInTime: e.dragInTime,
                dragToCreate: e.dragToCreate,
                dragToResize: e.dragToResize,
                eventMap: n._eventMap,
                eventOrder: e.eventOrder,
                exclusiveEndDates: e.exclusiveEndDates,
                firstDay: e.firstDay,
                fromText: e.fromText,
                getDate: e.getDate,
                getDay: e.getDay,
                getMaxDayOfMonth: e.getMaxDayOfMonth,
                getMonth: e.getMonth,
                getWeekNumber: e.getWeekNumber,
                getYear: e.getYear,
                monthNames: e.monthNames,
                monthNamesShort: e.monthNamesShort,
                onActiveChange: n._onActiveChange,
                onEventDragEnter: n._onEventDragEnter,
                onEventDragLeave: n._onEventDragLeave,
                pmText: e.pmText,
                refDate: n._refDate,
                renderDay: a ? a.day : e.renderDay,
                rtl: e.rtl,
                selectedEventsMap: n._selectedEventsMap,
                showEventTooltip: e.showEventTooltip,
                theme: e.theme,
                themeVariant: e.themeVariant,
                timeFormat: e.timeFormat,
                timezonePlugin: e.timezonePlugin,
                toText: e.toText,
            },
            r = c({}, i, {
                allDayText: e.allDayText,
                checkSize: n._checkSize,
                colorsMap: n._colorsMap,
                currentTimeIndicator: n._currentTimeIndicator,
                dateFormatFull: e.dateFormatFull,
                dateFormatLong: e.dateFormatLong,
                dragTimeStep: n._dragTimeStep,
                dragToMove: e.dragToMove,
                eventDragEnd: n._onEventDragStop,
                eventOverlap: e.eventOverlap,
                extendDefaultEvent: e.extendDefaultEvent,
                externalDrag: e.externalDrag,
                externalDrop: e.externalDrop,
                groupBy: e.groupBy,
                height: t.height,
                immutableData: e.immutableData,
                invalidateEvent: e.invalidateEvent,
                invalidsMap: n._invalidsMap,
                maxDate: n._maxDate,
                minDate: n._minDate,
                moreEventsPluralText: e.moreEventsPluralText,
                moreEventsText: e.moreEventsText,
                navService: n._navService,
                navigateToEvent: n._navigateToEvent,
                newEventText: e.newEventText,
                onCellClick: n._onCellClick,
                onCellDoubleClick: n._onCellDoubleClick,
                onCellRightClick: n._onCellRightClick,
                onEventClick: n._onEventClick,
                onEventDelete: n._onEventDelete,
                onEventDoubleClick: n._onEventDoubleClick,
                onEventDragEnd: n._onEventDragEnd,
                onEventDragStart: n._onEventDragStart,
                onEventHoverIn: n._onEventHoverIn,
                onEventHoverOut: n._onEventHoverOut,
                onEventRightClick: n._onEventRightClick,
                onMoreClick: n._onMoreClick,
                onPopoverClose: n._onPopoverClose,
                renderBufferAfter: a ? a.bufferAfter : e.renderBufferAfter,
                renderBufferBefore: a ? a.bufferBefore : e.renderBufferBefore,
                renderEvent: a ? a.scheduleEvent : e.renderScheduleEvent,
                renderEventContent: a ? a.scheduleEventContent : e.renderScheduleEventContent,
                renderResource: a ? a.resource : e.renderResource,
                resources: e.resources,
                scroll: n._shouldScrollSchedule,
                selected: n._selectedDateTime,
                showEventBuffer: e.showEventBuffer,
                width: t.width,
            });
        return Gn(
            Nr,
            c({ ref: n._setEl }, i, {
                activeDate: n._active,
                calendarScroll: n._calendarScroll,
                calendarType: n._calendarType,
                colors: e.colors,
                context: e.context,
                cssClass: n._cssClass,
                downIcon: e.downIcon,
                dragData: t.labelDragData,
                dragToMove: e.dragToMove || e.externalDrag,
                endDay: n._rangeEndDay,
                eventRange: n._rangeType,
                eventRangeSize: n._showSchedule ? n._scheduleSize : n._showTimeline ? n._timelineSize : n._eventListSize,
                hasContent: n._showEventList || n._showSchedule || n._showTimeline,
                hasPicker: !0,
                height: e.height,
                invalid: e.invalid,
                instanceService: n._instanceService,
                labels: e.labels,
                labelList: n._calendarLabelList,
                labelsMap: n._labelsMap,
                marked: e.marked,
                marksMap: n._marksMap,
                max: e.max,
                min: e.min,
                mouseSwipe: (!e.dragToCreate && "single" !== e.clickToCreate) || (!n._showEventLabels && !n._showEventCount),
                mousewheel: e.mousewheel,
                navService: n._navService,
                navView: n._navView,
                nextIconH: e.nextIconH,
                nextIconV: e.nextIconV,
                nextPageText: e.nextPageText,
                noOuterChange: !n._showEventList,
                onCellHoverIn: n._onCellHoverIn,
                onCellHoverOut: n._onCellHoverOut,
                onDayClick: n._onDayClick,
                onDayDoubleClick: n._onDayDoubleClick,
                onDayRightClick: n._onDayRightClick,
                onGestureStart: n._onGestureStart,
                onLabelClick: n._onLabelClick,
                onLabelDoubleClick: n._onLabelDoubleClick,
                onLabelRightClick: n._onLabelRightClick,
                onLabelHoverIn: n._onLabelHoverIn,
                onLabelHoverOut: n._onLabelHoverOut,
                onLabelDelete: n._onEventDelete,
                onLabelUpdateStart: n._onLabelUpdateStart,
                onLabelUpdateMove: n._onLabelUpdateMove,
                onLabelUpdateEnd: n._onLabelUpdateEnd,
                onLabelUpdateModeOn: n._onLabelUpdateModeOn,
                onLabelUpdateModeOff: n._onLabelUpdateModeOff,
                onPageChange: n._onPageChange,
                onPageLoaded: n._onPageLoaded,
                onPageLoading: n._onPageLoading,
                onResize: n._onResize,
                pageLoad: n._pageLoad,
                prevIconH: e.prevIconH,
                prevIconV: e.prevIconV,
                prevPageText: e.prevPageText,
                resourcesMap: n._resourcesMap,
                responsiveStyle: !0,
                renderHeader: a ? a.header : e.renderHeader,
                renderDayContent: a ? a.dayContent : e.renderDayContent,
                renderLabel: a ? a.label : e.renderLabel,
                renderLabelContent: a ? a.labelContent : e.renderLabelContent,
                selectedDates: n._selectedDates,
                selectView: _s,
                showCalendar: n._showCalendar,
                showControls: e.showControls,
                showLabelCount: n._showEventCount,
                showOuterDays: n._showOuterDays,
                showSchedule: n._showSchedule || n._showTimeline,
                showToday: e.showToday,
                showWeekNumbers: n._showWeekNumbers,
                size: n._calendarSize,
                startDay: n._rangeStartDay,
                swipe: !t.isTouchDrag,
                upIcon: e.upIcon,
                valid: e.valid,
                weeks: n._calendarSize,
                width: e.width,
                eventText: e.eventText,
                eventsText: e.eventsText,
                fromText: e.fromText,
                moreEventsPluralText: e.moreEventsPluralText,
                moreEventsText: e.moreEventsText,
                todayText: e.todayText,
                toText: e.toText,
                weekText: e.weekText,
                yearSuffix: e.yearSuffix,
            }),
            n._showDate &&
                Gn(
                    "div",
                    { className: "mbsc-schedule-date-header mbsc-flex" + n._theme + n._hb },
                    n._showSchedule && !n._showCalendar && e.resources && Gn("div", { className: "mbsc-schedule-time-col" }),
                    Gn("div", { className: "mbsc-schedule-date-header-text mbsc-flex-1-1" + n._theme }, n._selectedDateHeader),
                    n._showSchedule && !n._showCalendar && e.resources && Gn("div", { className: "mbsc-schedule-fake-scroll-y" })
                ),
            n._showEventList && Gn("div", { className: "mbsc-flex-1-1 mbsc-event-list" + (t.isListScrollable ? " mbsc-event-list-scroll" : ""), dangerouslySetInnerHTML: n._eventListHTML, onScroll: n._onScroll, ref: n._setList }, s),
            n._showSchedule &&
                Gn(
                    Vl,
                    c({}, r, {
                        endDay: n._scheduleEndDay,
                        endTime: n._scheduleEndTime,
                        maxEventStack: n._scheduleMaxEventStack,
                        minEventWidth: n._scheduleMinEventWidth,
                        renderDayContent: a ? a.dayContent : e.renderDayContent,
                        showAllDay: n._showScheduleAllDay,
                        showDays: n._showScheduleDays,
                        size: n._scheduleSize,
                        startDay: n._scheduleStartDay,
                        startTime: n._scheduleStartTime,
                        timeCellStep: n._scheduleTimeCellStep,
                        timeLabelStep: n._scheduleTimeLabelStep,
                        timezones: n._scheduleTimezones,
                        type: n._scheduleType,
                        onWeekDayClick: n._onWeekDayClick,
                    })
                ),
            n._showTimeline &&
                Gn(
                    Ul,
                    c({}, r, {
                        connections: e.connections,
                        downIcon: e.chevronIconDown,
                        dragBetweenSlots: e.dragBetweenSlots,
                        dragToCreate: !e.slots && e.dragToCreate,
                        dragToResize: !e.slots && e.dragToResize,
                        endDay: n._timelineEndDay,
                        endTime: n._timelineEndTime,
                        eventList: n._timelineListing,
                        maxEventStack: n._timelineMaxEventStack,
                        nextIcon: e.nextIconH,
                        nextIconRtl: e.prevIconH,
                        onResourceCollapse: n._proxy,
                        onResourceExpand: n._proxy,
                        quarterText: e.quarterText,
                        renderDayFooter: a ? a.dayFooter : e.renderDayFooter,
                        renderHour: a ? a.hour : e.renderHour,
                        renderHourFooter: a ? a.hourFooter : e.renderHourFooter,
                        renderMonth: a ? a.month : e.renderMonth,
                        renderMonthFooter: a ? a.monthFooter : e.renderMonthFooter,
                        renderQuarter: a ? a.quarter : e.renderQuarter,
                        renderQuarterFooter: a ? a.quarterFooter : e.renderQuarterFooter,
                        renderWeek: a ? a.week : e.renderWeek,
                        renderWeekFooter: a ? a.weekFooter : e.renderWeekFooter,
                        renderYear: a ? a.year : e.renderYear,
                        renderYearFooter: a ? a.yearFooter : e.renderYearFooter,
                        renderResourceFooter: a ? a.resourceFooter : e.renderResourceFooter,
                        renderResourceHeader: a ? a.resourceHeader : e.renderResourceHeader,
                        renderSidebar: a ? a.sidebar : e.renderSidebar,
                        renderSidebarFooter: a ? a.sidebarFooter : e.renderSidebarFooter,
                        renderSidebarHeader: a ? a.sidebarHeader : e.renderSidebarHeader,
                        renderSlot: a ? a.slot : e.renderSlot,
                        resolution: n._timelineResolution,
                        resolutionVertical: n._timelineResolutionVertical,
                        rowHeight: n._timelineRowHeight,
                        weekNumbers: n._showTimelineWeekNumbers,
                        weekText: e.weekText,
                        size: n._timelineSize,
                        slots: e.slots,
                        startDay: n._timelineStartDay,
                        startTime: n._timelineStartTime,
                        timeCellStep: n._timelineTimeCellStep,
                        timeLabelStep: n._timelineTimeLabelStep,
                        type: n._timelineType,
                        virtualScroll: !n._print && n._timelineVirtualScroll,
                    })
                ),
            Gn(
                _r,
                {
                    anchor: n._anchor,
                    closeOnScroll: !0,
                    contentPadding: !1,
                    context: t.popoverContext || e.context,
                    cssClass: "mbsc-calendar-popup " + (t.popoverHidden ? "mbsc-popover-hidden " : "") + n._popoverClass,
                    display: "anchored",
                    isOpen: t.showPopover,
                    locale: e.locale,
                    maxHeight: "24em",
                    onClose: n._onPopoverClose,
                    rtl: e.rtl,
                    scrollLock: !1,
                    showOverlay: !1,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                },
                t.popoverList &&
                    Gn(
                        pl,
                        { ref: n._setPopoverList, theme: e.theme, themeVariant: e.themeVariant, rtl: e.rtl, className: "mbsc-popover-list" },
                        t.popoverList.map(function (s, i) {
                            return Bl(n, s, i, t.popoverDate, e, !0, a);
                        })
                    )
            ),
            t.labelDragData && t.labelDragData.draggedEvent && !t.isTouchDrag && Gn("div", { className: "mbsc-calendar-dragging" })
        );
    }
    var Kl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._instanceService = new Pi()), t;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e, t) {
                    return jl(e, t, this);
                }),
                t
            );
        })(ml),
        Xl = {
            before: function (e, t) {
                t.selectedDate && ((t.defaultSelectedDate = t.selectedDate), delete t.selectedDate);
            },
        };
    var Jl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return e.children || "";
                }),
                t
            );
        })(il),
        ql = {
            before: function (e, t) {
                t.element = e;
            },
        },
        Gl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-draggable]"), (t._renderOpt = ql), t;
        })(Jl),
        Zl = Io(Gl, ql),
        Ql = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onExternalDrag = function (e) {
                        var n,
                            a = t.s.element || t._el,
                            s = function () {
                                return e.endY < t._elBottom && e.endY > t._elTop && e.endX > t._elLeft && e.endX < t._elRight;
                            };
                        switch (e.eventName) {
                            case "onDragStart":
                                if (a) {
                                    var i = a.getBoundingClientRect();
                                    (t._elTop = i.top), (t._elBottom = i.bottom), (t._elLeft = i.left), (t._elRight = i.right), (t._isItemIn = t._isOwner = s());
                                }
                                break;
                            case "onDragMove":
                                (n = s()) && !t._isItemIn
                                    ? t._hook("onItemDragEnter", { clone: e.clone, data: e.dragData, domEvent: e.domEvent })
                                    : !n && t._isItemIn && t._hook("onItemDragLeave", { clone: e.clone, data: e.dragData, domEvent: e.domEvent }),
                                    (t._isItemIn = n);
                                break;
                            case "onDragEnd":
                                t._isItemIn && !t._isOwner && (e.from && (e.from._eventDropped = !0), t._hook("onItemDrop", { clone: e.clone, data: e.dragData, domEvent: e.domEvent })), (t._isItemIn = !1);
                        }
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    this._unsubscribe = nl(this._onExternalDrag);
                }),
                (t.prototype._destroy = function () {
                    this._unsubscribe && al(this._unsubscribe);
                }),
                (t._name = "Dropcontainer"),
                t
            );
        })(Xa);
    var $l = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return e.children || "";
                }),
                t
            );
        })(Ql),
        ec = {
            before: function (e, t) {
                t.element = e;
            },
        },
        tc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-dropcontainer]"), (t._renderOpt = ec), t;
        })($l),
        nc = Io(tc, ec),
        ac = Io(Kl, Xl),
        sc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-button]"), (t._renderOpt = Zi), t;
        })(Gi),
        ic = Io(sc, Zi),
        rc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = e.target.checked;
                        n.checked === ie && t.setState({ checked: a }), t._change(a), n.onChange && n.onChange(e);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ji(this._input, {
                        click: !0,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onPress: function () {
                            e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    var n = e.disabled === ie ? t.disabled : ge(e.disabled),
                        a = "start" === e.position ? (e.rtl ? "right" : "left") : e.rtl ? "left" : "right",
                        s = e.modelValue !== ie ? e.modelValue : e.checked;
                    (this._disabled = n),
                        (this._checked = s !== ie ? ge(s) : t.checked === ie ? ge(e.defaultChecked) : t.checked),
                        (this._cssClass = "mbsc-checkbox mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-checkbox-" + a + (n ? " mbsc-disabled" : "")),
                        (this._boxClass =
                            "mbsc-checkbox-box" +
                            this._theme +
                            " mbsc-checkbox-box-" +
                            a +
                            (t.hasFocus && !n ? " mbsc-focus" : "") +
                            (t.isActive && !n ? " mbsc-active" : "") +
                            (e.color ? " mbsc-checkbox-box-" + e.color : "") +
                            (n ? " mbsc-disabled" : "") +
                            (this._checked ? " mbsc-checked" : ""));
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                (t.defaults = { position: "start" }),
                (t._name = "Checkbox"),
                t
            );
        })(Xa);
    var oc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this.setState({ checked: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a = t.props;
                        a.children, a.className, a.color, a.defaultChecked;
                        var s = a.description,
                            i = a.hasChildren;
                        a.inputStyle;
                        var r = a.label;
                        a.modelValue, a.onChange, a.position, a.rtl, a.theme, a.themeVariant;
                        var o = d(a, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return Gn(
                            "label",
                            { className: t._cssClass },
                            Gn("input", c({ type: "checkbox", className: "mbsc-form-control-input mbsc-reset", onChange: t._onChange, disabled: t._disabled, checked: t._checked, ref: t._setInput }, o)),
                            Gn("span", { className: t._boxClass }),
                            (r || i) && Gn("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, r),
                            s && Gn("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, s),
                            n
                        );
                    })(0, this, e.children);
                }),
                t
            );
        })(rc),
        lc = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        cc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-checkbox]"), (t._renderOpt = lc), t;
        })(oc),
        dc = Io(cc, lc),
        hc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._tag = "select"), t;
            }
            return l(t, e), (t._name = "Dropdown"), t;
        })(Jr),
        uc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._tag = "textarea"), t;
            }
            return l(t, e), (t._name = "Textarea"), t;
        })(Jr),
        mc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-input]"), (t._renderOpt = qr), t;
        })(Jr),
        _c = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-dropdown]"), (t._renderOpt = Gr), t;
        })(hc),
        pc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-textarea]"), (t._renderOpt = Zr), t;
        })(uc),
        vc = Io(mc, qr),
        fc = Io(_c, Gr),
        gc = Io(pc, qr),
        yc = [],
        bc = [],
        xc = v && !!on.Promise;
    function Dc(e, t, n, a, s) {
        return c(
            {
                closeOnOverlayClick: !1,
                context: t.context,
                cssClass: "mbsc-alert",
                display: t.display || "center",
                onClose: function () {
                    e.shift();
                },
                onClosed: function () {
                    Sc(t, a, s);
                },
                theme: t.theme,
                themeVariant: t.themeVariant,
            },
            n
        );
    }
    function Tc(e, t, n, a) {
        return Dc(
            bc,
            e,
            {
                animation: e.animation || (a ? "pop" : ie),
                buttons: [],
                closeOnOverlayClick: !1,
                contentPadding: a,
                cssClass: "mbsc-" + (a ? "toast" : "snackbar") + " mbsc-" + (e.color ? e.color : "color-none") + " " + (e.cssClass || ""),
                display: e.display || "bottom",
                focusOnClose: !1,
                focusOnOpen: !1,
                focusTrap: !1,
                onOpen: function (t, n) {
                    !(function (e, t) {
                        !1 !== e.duration &&
                            setTimeout(function () {
                                t.close();
                            }, e.duration || 3e3);
                    })(e, n);
                },
                scrollLock: !1,
                setActive: !1,
                showOverlay: !1,
                touchUi: !0,
            },
            t,
            n
        );
    }
    function Sc(e, t, n, a) {
        n && n(a), e.callback && e.callback(a), e.onClose && e.onClose(a), yc.length ? yc[0].open() : bc.length && bc[0].open(), t && t();
    }
    function Cc(e, t, n) {
        return Tc(e, t, n, !0);
    }
    function wc(e, t, n) {
        return Tc(e, t, n, !1);
    }
    function kc(e, t, n) {
        return Dc(yc, e, { buttons: ["ok"], cssClass: "mbsc-alert " + (e.cssClass || ""), okText: e.okText || "OK" }, t, n);
    }
    function Mc(e, t, n) {
        var a = !1;
        return Dc(
            yc,
            e,
            {
                buttons: ["cancel", "ok"],
                cancelText: e.cancelText || "Cancel",
                cssClass: "mbsc-confirm " + (e.cssClass || ""),
                okText: e.okText || "OK",
                onButtonClick: function (e) {
                    "ok" === e.button.name && (a = !0);
                },
                onClosed: function () {
                    Sc(e, t, n, a);
                },
            },
            t,
            n
        );
    }
    function Ec(e, t, n, a) {
        var s;
        return Dc(
            yc,
            e,
            {
                activeElm: "input",
                buttons: ["cancel", "ok"],
                cancelText: e.cancelText || "Cancel",
                cssClass: "mbsc-prompt " + (e.cssClass || ""),
                okText: e.okText || "OK",
                onButtonClick: function (e) {
                    "ok" === e.button.name && (s = !0);
                },
                onClosed: function () {
                    Sc(e, t, n, s && a ? a() : null);
                },
            },
            t,
            n
        );
    }
    function Nc(e) {
        yc.length || e.open(), yc.push(e);
    }
    function Ic(e) {
        var t = bc[0];
        bc.push(e), yc.length || (t ? t.close() : e.open());
    }
    function Lc(e, t) {
        var n;
        return (
            xc
                ? (n = new Promise(function (n) {
                      e(t, n);
                  }))
                : e(t, xe),
            n
        );
    }
    function Hc(e) {
        return Gn("div", { className: "mbsc-alert-content" }, e.title && Gn("h2", { className: "mbsc-alert-title" }, e.title), Gn("p", { className: "mbsc-alert-message" }, " ", e.message || "", " "));
    }
    function Yc(e, t, n, a, s, i, r) {
        if (rn) {
            var o = rn.createElement("div"),
                l = n(
                    t,
                    function () {
                        setTimeout(function () {
                            var e;
                            (e = o)._children && ba(null, e);
                        });
                    },
                    s,
                    r
                );
            ba(
                Gn(
                    _r,
                    c(
                        {
                            onInit: function (e, t) {
                                i && i(t), a(t);
                            },
                        },
                        l
                    ),
                    e
                ),
                o
            );
        }
    }
    function Oc(e, t) {
        Yc(
            (function (e) {
                return Gn("div", { className: "mbsc-toast-background mbsc-toast-message" }, e.message || "");
            })(e),
            e,
            Cc,
            Ic,
            t
        );
    }
    function Pc(e, t) {
        var n,
            a = (function (e, t) {
                return Gn(
                    "div",
                    { className: "mbsc-toast-background mbsc-snackbar-cont mbsc-flex" },
                    Gn("div", { className: "mbsc-snackbar-message mbsc-flex-1-1" }, e.message || ""),
                    e.button && Gn(Gi, { className: "mbsc-snackbar-button", icon: e.button.icon, onClick: t, theme: e.theme, themeVariant: e.themeVariant, variant: "flat" }, e.button.text)
                );
            })(e, function () {
                n && (n.close(), e.button && e.button.action && e.button.action());
            });
        Yc(a, e, wc, Ic, t, function (e) {
            n = e;
        });
    }
    function Fc(e, t) {
        Yc(Hc(e), e, kc, Nc, t);
    }
    function Rc(e, t) {
        Yc(Hc(e), e, Mc, Nc, t);
    }
    function zc(e, t) {
        var n = e.value || "",
            a = function () {
                return n;
            };
        Yc(
            (function (e, t, n) {
                return Gn(
                    "div",
                    { className: "mbsc-alert-content" },
                    e.title && Gn("h2", { className: "mbsc-alert-title" }, e.title),
                    Gn("p", { className: "mbsc-alert-message" }, " ", e.message || ""),
                    Gn(Jr, { className: "mbsc-prompt-input", label: e.label, onInput: t, placeholder: e.placeholder || "", type: e.inputType, theme: e.theme, themeVariant: e.themeVariant, defaultValue: n() })
                );
            })(
                e,
                function (e) {
                    n = e.target.value;
                },
                a
            ),
            e,
            Ec,
            Nc,
            t,
            ie,
            a
        );
    }
    var Vc = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._render = function (e) {
                this._cssClass = "mbsc-page mbsc-font " + this._className + this._theme + this._rtl;
            }),
            (t.defaults = {}),
            (t._name = "Page"),
            t
        );
    })(Xa);
    var Ac = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        return Gn(e.tag || "div", { className: t._cssClass, ref: t._setEl }, n);
                    })(e, this, e.children);
                }),
                t
            );
        })(Vc),
        Wc = {
            hasChildren: !0,
            parentClass: "mbsc-page",
            before: function (e, t) {
                t.tag = e.nodeName.toLowerCase();
            },
        },
        Uc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-page]"), (t._renderOpt = Wc), t;
        })(Ac),
        Bc = Io(Uc, Wc),
        jc = 1,
        Kc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = e.target.checked;
                        t._change(a), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(a), n.onChange && n.onChange(e);
                    }),
                    (t._onValueChange = function (e) {
                        var n = t.s,
                            a = e === t._value;
                        n.checked === ie && t.setState({ checked: a }), t._change(a);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._groupOptions = function (e) {
                    var t = e.color,
                        n = e.disabled,
                        a = e.name,
                        s = e.onChange,
                        i = e.position,
                        r = e.rtl,
                        o = e.value,
                        l = this.s,
                        c = this.state,
                        d = r === ie ? l.rtl : r,
                        h = t === ie ? l.color : t,
                        u = "start" === (i === ie ? l.position : i) ? (l.rtl ? "right" : "left") : l.rtl ? "left" : "right",
                        m = n === ie ? (l.disabled === ie ? c.disabled : ge(l.disabled)) : ge(n),
                        _ = l.modelValue !== ie ? l.modelValue === l.value : l.checked,
                        p = _ !== ie ? ge(_) : c.checked === ie ? ge(l.defaultChecked) : c.checked;
                    (this._id = l.id === ie ? this._id || "mbsc-radio-" + jc++ : l.id),
                        (this._value = l.value === ie ? this._id : l.value),
                        (this._onGroupChange = s),
                        (this._name = a === ie ? l.name : a),
                        (this._rtl = d ? " mbsc-rtl" : " mbsc-ltr"),
                        (this._checked = o === ie ? p : o === this._value),
                        (this._disabled = m),
                        (this._cssClass = "mbsc-radio mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-radio-" + u + (m ? " mbsc-disabled" : "")),
                        (this._boxClass =
                            "mbsc-radio-box" +
                            this._theme +
                            " mbsc-radio-box-" +
                            u +
                            (c.hasFocus && !m ? " mbsc-focus" : "") +
                            (c.isActive && !m ? " mbsc-active" : "") +
                            (h ? " mbsc-radio-box-" + h : "") +
                            (m ? " mbsc-disabled" : "") +
                            (this._checked ? " mbsc-checked" : ""));
                }),
                (t.prototype._toggle = function (e) {
                    this.s.checked === ie && this.setState({ checked: e }), e && po(this._name, this._value);
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ji(this._input, {
                        click: !0,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onPress: function () {
                            e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._updated = function () {
                    this._name && !this._unsubscribe && (this._unsubscribe = mo(this._name, this._onValueChange));
                }),
                (t.prototype._destroy = function () {
                    this._unsubscribe && (_o(this._name, this._unsubscribe), (this._unsubscribe = ie)), this._unlisten && this._unlisten();
                }),
                (t.defaults = { position: "start" }),
                (t._name = "Radio"),
                t
            );
        })(Xa);
    var Xc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this._toggle(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    var n = this;
                    return Gn(ho.Consumer, null, function (t) {
                        return (function (e, t, n, a) {
                            var s = t.props;
                            s.children, s.className, s.color, s.defaultChecked;
                            var i = s.description,
                                r = s.hasChildren,
                                o = s.label;
                            s.modelValue, s.onChange, s.position, s.rtl, s.theme, s.themeVariant;
                            var l = d(s, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                            return (
                                t._groupOptions(a),
                                Gn(
                                    "label",
                                    { className: t._cssClass },
                                    Gn("input", c({ checked: t._checked, className: "mbsc-form-control-input mbsc-reset", disabled: t._disabled, name: t._name, onChange: t._onChange, type: "radio", value: t._value, ref: t._setInput }, l)),
                                    Gn("span", { className: t._boxClass }),
                                    (o || r) && Gn("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, o),
                                    i && Gn("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, i),
                                    n
                                )
                            );
                        })(0, n, e.children, t);
                    });
                }),
                t
            );
        })(Kc),
        Jc = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        qc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-radio]"), (t._renderOpt = Jc), t;
        })(Xc),
        Gc = Io(qc, Jc),
        Zc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-segmented]"), (t._renderOpt = To), t;
        })(Do),
        Qc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-segmented-group]"), (t._renderOpt = So), t;
        })(yo),
        $c = Io(Zc, To),
        ed = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = t._round(+e.target.value);
                        (e.target.value = a + ""), n.value === ie && t.setState({ value: a }), t._change(a), n.onChange && n.onChange(e);
                    }),
                    (t._onMinusClick = function () {
                        t._setValue(t._value - t._step);
                    }),
                    (t._onPlusClick = function () {
                        t._setValue(t._value + t._step);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._onLabelClick = function (e) {
                        e.preventDefault();
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._mounted = function () {
                    Cn(this._input, Ys, this._onChange);
                }),
                (t.prototype._render = function (e, t) {
                    (this._max = pe(e.max) ? 100 : +e.max), (this._min = pe(e.min) ? 0 : +e.min), (this._step = pe(e.step) ? 1 : +e.step);
                    var n = e.disabled === ie ? t.disabled : ge(e.disabled),
                        a = e.defaultValue !== ie ? e.defaultValue : this._min || 0,
                        s = e.modelValue !== ie ? e.modelValue : e.value,
                        i = s !== ie ? s : t.value !== ie ? t.value : a;
                    (this._value = this._round(i)),
                        (this._changed = this._value !== +i),
                        (this._disabled = n),
                        (this._disabledMinus = this._value === this._min || n),
                        (this._disabledPlus = this._value === this._max || n),
                        (this._cssClass = "mbsc-stepper mbsc-form-control-wrapper mbsc-font mbsc-" + (e.color || "color-none") + this._theme + this._rtl + this._hb + " mbsc-stepper-" + e.inputPosition + (n ? " mbsc-disabled" : ""));
                }),
                (t.prototype._updated = function () {
                    (this._input.value = this._value + ""), this._changed && (zn(this._input, Ys), (this._changed = !1));
                }),
                (t.prototype._destroy = function () {
                    wn(this._input, Ys, this._onChange);
                }),
                (t.prototype._round = function (e) {
                    var t = this._step,
                        n = Math.abs(t) < 1 ? (t + "").split(".")[1].length : 0;
                    return +Math.min(this._max, Math.max(Math.round(e / t) * t, this._min)).toFixed(n);
                }),
                (t.prototype._setValue = function (e) {
                    var t = +this._input.value,
                        n = this._round(e);
                    t !== n && ((this._input.value = n + ""), zn(this._input, Ys));
                }),
                (t.defaults = { inputPosition: "center" }),
                (t._name = "Stepper"),
                t
            );
        })(Xa);
    var td = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (e) {
                        (this._value = e), this.setState({ value: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n = t.props;
                        n.children, n.className, n.color, n.defaultValue;
                        var a = n.description;
                        n.inputClass, n.inputPosition;
                        var s = n.label;
                        n.onChange, n.rtl, n.theme, n.themeVariant, n.value;
                        var i = d(n, ["children", "className", "color", "defaultValue", "description", "inputClass", "inputPosition", "label", "onChange", "rtl", "theme", "themeVariant", "value"]),
                            r = t._theme;
                        return Gn(
                            "label",
                            { className: t._cssClass, onClick: t._onLabelClick },
                            Gn(
                                "div",
                                { className: "mbsc-stepper-content" },
                                s && Gn("span", { className: "mbsc-stepper-label" + r + (t._disabled ? " mbsc-disabled" : "") }, s),
                                a && Gn("span", { className: "mbsc-description" + r + (t._disabled ? " mbsc-disabled" : "") }, a)
                            ),
                            Gn(
                                "div",
                                { className: "mbsc-stepper-control mbsc-flex" + r + t._rtl },
                                Gn(
                                    Gi,
                                    { className: "mbsc-stepper-minus mbsc-stepper-button", disabled: t._disabledMinus, onClick: t._onMinusClick, theme: e.theme, themeVariant: e.themeVariant },
                                    Gn("span", { className: "mbsc-stepper-inner" + r }, "–")
                                ),
                                Gn(
                                    "input",
                                    c(
                                        {
                                            className: "mbsc-stepper-input" + (t._disabled ? " mbsc-disabled" : "") + " " + (e.inputClass || "") + r,
                                            disabled: t._disabled,
                                            max: t._max,
                                            min: t._min,
                                            ref: t._setInput,
                                            step: t._step,
                                            type: "number",
                                        },
                                        i
                                    )
                                ),
                                Gn(
                                    Gi,
                                    { className: "mbsc-stepper-plus mbsc-stepper-button", disabled: t._disabledPlus, onClick: t._onPlusClick, theme: e.theme, themeVariant: e.themeVariant },
                                    Gn("span", { className: "mbsc-stepper-inner" + r }, "+")
                                )
                            )
                        );
                    })(e, this);
                }),
                t
            );
        })(ed),
        nd = {
            readProps: ["disabled", "type", "min", "max", "step"],
            renderToParent: !0,
            before: function (e, t) {
                var n = e.parentNode,
                    a = rn.createElement("div");
                n.insertBefore(a, e), a.appendChild(e), (t.defaultValue = +e.value), (t.inputClass = e.getAttribute("class") || "");
                var s = rn.createElement("div");
                n.insertBefore(s, a);
            },
        },
        ad = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-stepper]"), (t._renderOpt = nd), t;
        })(td),
        sd = Io(ad, nd),
        id = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = e.target.checked;
                        e.stopPropagation(), n.checked === ie && t.setState({ checked: a }), t._change(a), n.onChange && n.onChange(e);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._setHandleCont = function (e) {
                        t._handleCont = e;
                    }),
                    (t._setHandle = function (e) {
                        t._handle = e;
                    }),
                    (t._onLabelClick = function (e) {
                        e.preventDefault();
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._setHandleLeft = function (e) {
                    this._handle.style.left = e + "%";
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n,
                        a,
                        s,
                        i = this;
                    Cn(this._input, Os, this._onChange),
                        (this._inputUnlisten = Ji(this._input, {
                            onBlur: function () {
                                i.setState({ hasFocus: !1 });
                            },
                            onFocus: function () {
                                i._disabled || i.setState({ hasFocus: !0 });
                            },
                        })),
                        (this._unlisten = Ji(this._el, {
                            click: !1,
                            onEnd: function (e) {
                                if (!i._disabled && !s) {
                                    if (a) {
                                        var t = Math.abs(e.deltaX) < 3 && Math.abs(e.deltaY) < 3,
                                            r = +new Date() - n > 300,
                                            o = t && !r ? !i._checked : i._handleLeft >= 50;
                                        o !== i._checked && (i._input.click(), i._change(o)), (a = !1);
                                    }
                                    i.setState({ dragging: !1, isActive: !1 });
                                }
                            },
                            onMove: function (n) {
                                var r = n.domEvent,
                                    o = i.state.dragging;
                                if (!i._disabled && !s && a && e && (Math.abs(n.deltaX) > 5 && ((o = !0), i.setState({ dragging: !0 })), o)) {
                                    r.cancelable && r.preventDefault();
                                    var l = ((n.startX - t) / e) * 100,
                                        c = Math.max(Math.min(l, 100), 0) + (n.deltaX / e) * 100,
                                        d = Math.max(Math.min(c, 100), 0);
                                    (i._handleLeft = d), i._setHandleLeft(d);
                                }
                                !o && !s && Math.abs(n.deltaY) > 7 && r.type === Zs && ((s = !0), i.setState({ isActive: !1 }));
                            },
                            onStart: function (r) {
                                i._disabled ||
                                    ((s = !1),
                                    (e = i._handleCont.clientWidth),
                                    (t = Pn(i._handleCont).left),
                                    (n = +new Date()),
                                    (r.domEvent.target === i._handleCont || i._handleCont.contains(r.domEvent.target)) && (a = !0),
                                    i.setState({ isActive: !0 }));
                            },
                        })),
                        this._setHandleLeft(this._handleLeft);
                }),
                (t.prototype._render = function (e, t) {
                    var n = e.disabled === ie ? t.disabled : ge(e.disabled),
                        a = "start" === e.position ? (e.rtl ? "right" : "left") : e.rtl ? "left" : "right",
                        s = e.color !== ie ? " mbsc-switch-" + e.color : "",
                        i = e.modelValue !== ie ? e.modelValue : e.checked;
                    if (
                        ((this._disabled = n),
                        (this._checked = i !== ie ? ge(i) : t.checked === ie ? ge(e.defaultChecked) : t.checked),
                        (this._cssClass = "mbsc-switch mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-switch-" + a + (n ? " mbsc-disabled" : "")),
                        !t.dragging)
                    ) {
                        var r = this._checked ? 100 : 0;
                        r !== this._handleLeft && this._handle && this._setHandleLeft(r), (this._handleLeft = r);
                    }
                    (this._handleContClass =
                        "mbsc-switch-track mbsc-switch-track-" + a + this._theme + s + (this._checked ? " mbsc-checked" : "") + (n ? " mbsc-disabled" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.isActive ? " mbsc-active" : "")),
                        (this._handleClass =
                            "mbsc-switch-handle" +
                            this._theme +
                            s +
                            (t.dragging ? "" : " mbsc-switch-handle-animate") +
                            (this._checked ? " mbsc-checked" : "") +
                            (this.state.isActive ? " mbsc-active" : "") +
                            (n ? " mbsc-disabled" : "") +
                            (this.state.hasFocus ? " mbsc-focus" : ""));
                }),
                (t.prototype._destroy = function () {
                    wn(this._input, Os, this._onChange), this._unlisten && this._unlisten(), this._inputUnlisten && this._inputUnlisten();
                }),
                (t.defaults = { position: "end" }),
                (t._name = "Switch"),
                t
            );
        })(Xa);
    var rd = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this.setState({ checked: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a = t.props;
                        a.children, a.className, a.color, a.defaultChecked;
                        var s = a.description,
                            i = a.hasChildren;
                        a.inputStyle;
                        var r = a.label;
                        a.modelValue, a.onChange, a.position, a.rtl, a.theme, a.themeVariant;
                        var o = d(a, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return Gn(
                            "label",
                            { className: t._cssClass, ref: t._setEl, onClick: t._onLabelClick },
                            Gn("input", c({ type: "checkbox", className: "mbsc-form-control-input mbsc-reset", onChange: xe, disabled: t._disabled, checked: t._checked, ref: t._setInput }, o)),
                            Gn("span", { className: t._handleContClass, ref: t._setHandleCont }, Gn("span", { className: t._handleClass, ref: t._setHandle })),
                            (r || i) && Gn("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, r),
                            s && Gn("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, s),
                            n
                        );
                    })(0, this, e.children);
                }),
                t
            );
        })(id),
        od = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        ld = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-switch]"), (t._renderOpt = od), t;
        })(rd),
        cd = Io(ld, od),
        dd = Io(_r, pr);
    Ea(sc),
        Ea(cc),
        Ea(mc),
        Ea(tc),
        Ea(_c),
        Ea(Gl),
        Ea(pc),
        Ea(Uc),
        Ea(qc),
        Ea(Zc),
        Ea(Qc),
        Ea(ad),
        Ea(ld),
        Ea(zo),
        Ea(Vo),
        Ea(Ao),
        Ea(Ro),
        (t.fw = "javascript"),
        (w.datetime = sn),
        (w.http = Un),
        (e.Button = sc),
        (e.CalendarNav = Ro),
        (e.CalendarNext = zo),
        (e.CalendarPrev = Vo),
        (e.CalendarToday = Ao),
        (e.Checkbox = cc),
        (e.Datepicker = ko),
        (e.Draggable = Gl),
        (e.Dropcontainer = tc),
        (e.Dropdown = _c),
        (e.Eventcalendar = Kl),
        (e.Input = mc),
        (e.Page = Uc),
        (e.Popup = _r),
        (e.Radio = qc),
        (e.Segmented = Zc),
        (e.SegmentedGroup = Qc),
        (e.Select = Qo),
        (e.Stepper = ad),
        (e.Switch = ld),
        (e.Textarea = pc),
        (e.alert = function (e) {
            return Lc(Fc, e);
        }),
        (e.autoDetect = M),
        (e.button = ic),
        (e.calendarNav = jo),
        (e.calendarNext = Wo),
        (e.calendarPrev = Uo),
        (e.calendarToday = Bo),
        (e.checkbox = dc),
        (e.confirm = function (e) {
            return Lc(Rc, e);
        }),
        (e.createCustomTheme = I),
        (e.datepicker = Ko),
        (e.datetime = sn),
        (e.draggable = Zl),
        (e.dropcontainer = nc),
        (e.dropdown = fc),
        (e.enhance = Na),
        (e.eventcalendar = ac),
        (e.formSwitch = cd),
        (e.formatDate = Jt),
        (e.getAutoTheme = N),
        (e.getInst = function (e, t) {
            return t ? e.__mbscFormInst : e.__mbscInst;
        }),
        (e.getJson = Wn),
        (e.globalChanges = E),
        (e.hijriCalendar = _t),
        (e.http = Un),
        (e.input = vc),
        (e.jalaliCalendar = Re),
        (e.locale = vt),
        (e.localeAr = G),
        (e.localeBg = Z),
        (e.localeCa = Q),
        (e.localeCs = $),
        (e.localeDa = ee),
        (e.localeDe = te),
        (e.localeEl = ne),
        (e.localeEn = pt),
        (e.localeEnGB = ae),
        (e.localeEs = se),
        (e.localeFa = ze),
        (e.localeFi = Ve),
        (e.localeFr = Ae),
        (e.localeHe = We),
        (e.localeHi = Ue),
        (e.localeHr = Be),
        (e.localeHu = je),
        (e.localeIt = Ke),
        (e.localeJa = Xe),
        (e.localeKo = Je),
        (e.localeLt = qe),
        (e.localeNl = Ge),
        (e.localeNo = Ze),
        (e.localePl = Qe),
        (e.localePtBR = et),
        (e.localePtPT = $e),
        (e.localeRo = tt),
        (e.localeRu = nt),
        (e.localeRuUA = at),
        (e.localeSk = st),
        (e.localeSr = it),
        (e.localeSv = rt),
        (e.localeTh = ot),
        (e.localeTr = lt),
        (e.localeUa = ct),
        (e.localeVi = dt),
        (e.localeZh = ht),
        (e.luxonTimezone = Yo),
        (e.momentTimezone = Fo),
        (e.options = C),
        (e.page = Bc),
        (e.parseDate = Gt),
        (e.platform = L),
        (e.popup = dd),
        (e.prompt = function (e) {
            return Lc(zc, e);
        }),
        (e.radio = Gc),
        (e.registerComponent = Ea),
        (e.remote = t),
        (e.segmented = $c),
        (e.select = el),
        (e.setOptions = function (e) {
            for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                var a = n[t];
                C[a] = e[a];
            }
            v && E.next(C);
        }),
        (e.snackbar = function (e) {
            return Lc(Pc, e);
        }),
        (e.stepper = sd),
        (e.textarea = gc),
        (e.themes = k),
        (e.toast = function (e) {
            return Lc(Oc, e);
        }),
        (e.updateRecurringEvent = function (e, t, n, a, s, i, r) {
            var o,
                l = c({}, e),
                d = null,
                h = n && n.start,
                u = n && n.end,
                m = t && t.start,
                _ = as(e.recurring);
            switch (s) {
                case "following":
                    if ((a ? (a.recurring && (o = as(a.recurring)), delete (d = c({}, a)).id) : h && m && ((o = ss(_, h, m)), (d = c({}, n))), (_.until = Lt(Kt(m))), _.count)) {
                        var p = (t && t.nr) || 0;
                        o && (o.count = _.count - p), (_.count = p);
                    }
                    h && o && (o.from = h), d && o && (d.recurring = o), (l.recurring = _);
                    break;
                case "all":
                    if ((a ? ((h = a.start), (u = a.end), (l = c({}, a))) : n && h && u && m && ((l.allDay = n.allDay), (l.recurring = ss(_, h, m))), h && u)) {
                        var v = i && r ? { displayTimezone: i, timezonePlugin: r } : ie,
                            f = l.allDay ? ie : v,
                            g = e.allDay ? ie : v,
                            y = Kt(h, f),
                            b = Kt(u, f),
                            x = e.start,
                            D = e.end,
                            T = e.allDay && !l.allDay,
                            S = x && Kt(x, g),
                            C = m && Kt(m, g),
                            w = b - y,
                            k = S && C ? jt(f, +S + (C ? y - C : 0)) : y,
                            M = jt(f, +k + w);
                        Wt(x) || (!x && T) ? (l.start = Jt("HH:mm", y)) : x && (l.start = f ? k.toISOString() : k), Wt(D) || (!D && T) ? (l.end = Jt("HH:mm", b)) : D && (l.end = f ? M.toISOString() : M);
                    }
                    break;
                default:
                    var E = e.recurringException,
                        N = he(E) ? E.slice() : E ? [E] : [];
                    m && N.push(m), (l.recurringException = N), (d = a || n);
            }
            return { updatedEvent: l, newEvent: d };
        }),
        (e.util = w),
        Object.defineProperty(e, "__esModule", { value: !0 });
});
