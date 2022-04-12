
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1297753, "total_words": 6256224, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5207, "translated": 1105534, "translated_words": 5289044, "translated_percent": 85.1, "translated_words_percent": 84.5, "translated_chars": 32552824, "translated_chars_percent": 84.6, "total_chars": 38452930, "fuzzy": 1848, "fuzzy_percent": 0.1, "failing": 19532, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 648005, "readonly_percent": 49.9, "suggestions": 2896, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
