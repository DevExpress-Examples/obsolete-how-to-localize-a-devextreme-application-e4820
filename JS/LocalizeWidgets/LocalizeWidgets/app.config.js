var localizedStrings = {
    'en/US': {
        name: 'English',
        viewTitles: {
            'home': 'Home',
            'about': 'About'
        },
        labelTitle: 'Language'
    },
    'fr/FR': {
        name: 'Français',
        viewTitles: {
            'home': 'Maison',
            'about': 'Sur'
        },
        labelTitle: 'Langue'
    }
}
window.LocalizeWidgets = window.LocalizeWidgets || {};
window.LocalizeWidgets.localization = 'en/US';
db.load().done(function (data) {
    if (data.length)
        window.LocalizeWidgets.localization = data[0].value;
});
window.LocalizeWidgets = $.extend(true, window.LocalizeWidgets, {
    "config": {
        "defaultLayout": "navbar",
        "navigation": [
            {
                title: localizedStrings[window.LocalizeWidgets.localization].viewTitles['home'],
                action: "#home",
                icon: "home"
            },
            {
                title: localizedStrings[window.LocalizeWidgets.localization].viewTitles['about'],
                action: "#about",
                icon: "info"
            }
        ]
    }
});