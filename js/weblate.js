
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1295761, "total_words": 6251162, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5265, "translated": 1103543, "translated_words": 5283995, "translated_percent": 85.1, "translated_words_percent": 84.5, "translated_chars": 32523713, "translated_chars_percent": 84.6, "total_chars": 38423740, "fuzzy": 1847, "fuzzy_percent": 0.1, "failing": 19519, "failing_percent": 1.5, "approved": 3047, "approved_percent": 0.2, "readonly": 647009, "readonly_percent": 49.9, "suggestions": 2896, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
