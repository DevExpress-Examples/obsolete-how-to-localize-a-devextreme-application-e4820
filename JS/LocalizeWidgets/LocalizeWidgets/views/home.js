LocalizeWidgets.home = function (params) {
    var GetItems = function () {
        var items = [];
        for (var prop in localizedStrings)
            items.push({
                value: prop,
                text: localizedStrings[prop].name
            });
        return items;
    }
    var viewModel = {
        dataSource: GetItems(),
        valueChanged: function (e) {
            db.load().done(function (data) {
                if (data.length)
                    db.update(data[0].id, {value: e.selectedItem.value});
                else
                    db.insert({ value: e.selectedItem.value });
            });
            window.location.reload()
        },
        labelTitle: localizedStrings[LocalizeWidgets.localization].labelTitle
    };

    return viewModel;
};