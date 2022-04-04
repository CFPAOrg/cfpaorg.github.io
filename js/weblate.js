
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1238711, "total_words": 6010489, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5270, "translated": 1088069, "translated_words": 5241310, "translated_percent": 87.8, "translated_words_percent": 87.2, "translated_chars": 32312209, "translated_chars_percent": 87.3, "total_chars": 36998581, "fuzzy": 1808, "fuzzy_percent": 0.1, "failing": 19755, "failing_percent": 1.5, "approved": 3047, "approved_percent": 0.2, "readonly": 618709, "readonly_percent": 49.9, "suggestions": 2902, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
