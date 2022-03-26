
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1360233, "total_words": 6464927, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5447, "translated": 1194328, "translated_words": 5658121, "translated_percent": 87.8, "translated_words_percent": 87.5, "translated_chars": 34936498, "translated_chars_percent": 87.6, "total_chars": 39856288, "fuzzy": 1826, "fuzzy_percent": 0.1, "failing": 22938, "failing_percent": 1.6, "approved": 3047, "approved_percent": 0.2, "readonly": 679010, "readonly_percent": 49.9, "suggestions": 2945, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
