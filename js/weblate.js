
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1490065, "total_words": 7025366, "last_change": "2022-11-12T07:32:01.132689Z", "recent_changes": 5312, "translated": 1294343, "translated_words": 6046747, "translated_percent": 86.8, "translated_words_percent": 86.0, "translated_chars": 37315975, "translated_chars_percent": 86.2, "total_chars": 43277045, "fuzzy": 1961, "fuzzy_percent": 0.1, "failing": 24260, "failing_percent": 1.6, "approved": 3057, "approved_percent": 0.2, "readonly": 743701, "readonly_percent": 49.9, "suggestions": 2791, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
