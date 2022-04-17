
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1299545, "total_words": 6266106, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5207, "translated": 1106367, "translated_words": 5294015, "translated_percent": 85.1, "translated_words_percent": 84.4, "translated_chars": 32582317, "translated_chars_percent": 84.6, "total_chars": 38513104, "fuzzy": 1913, "fuzzy_percent": 0.1, "failing": 19552, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 648901, "readonly_percent": 49.9, "suggestions": 2896, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
