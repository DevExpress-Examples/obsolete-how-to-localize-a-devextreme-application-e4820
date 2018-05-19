$(function () {
    LocalizeWidgets.app = new DevExpress.framework.html.HtmlApplication({
        namespace: LocalizeWidgets,
        defaultLayout: LocalizeWidgets.config.defaultLayout,
        navigation: LocalizeWidgets.config.navigation
    });
    LocalizeWidgets.app.router.register(":view/:id", { view: "home", id: undefined });
    LocalizeWidgets.app.navigate();
});
