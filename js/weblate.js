
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1499137, "total_words": 7072318, "last_change": "2022-11-12T07:32:01.132689Z", "recent_changes": 5302, "translated": 1305483, "translated_words": 6104510, "translated_percent": 87.0, "translated_words_percent": 86.3, "translated_chars": 37667812, "translated_chars_percent": 86.4, "total_chars": 43561251, "fuzzy": 1871, "fuzzy_percent": 0.1, "failing": 24321, "failing_percent": 1.6, "approved": 3056, "approved_percent": 0.2, "readonly": 748237, "readonly_percent": 49.9, "suggestions": 2791, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
