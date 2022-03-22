
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1357579, "total_words": 6456249, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5447, "translated": 1191034, "translated_words": 5647613, "translated_percent": 87.7, "translated_words_percent": 87.4, "translated_chars": 34878932, "translated_chars_percent": 87.6, "total_chars": 39809920, "fuzzy": 1826, "fuzzy_percent": 0.1, "failing": 22921, "failing_percent": 1.6, "approved": 3047, "approved_percent": 0.2, "readonly": 677683, "readonly_percent": 49.9, "suggestions": 2948, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
