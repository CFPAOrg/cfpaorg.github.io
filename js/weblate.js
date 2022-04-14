
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1297977, "total_words": 6257454, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5207, "translated": 1105961, "translated_words": 5290559, "translated_percent": 85.2, "translated_words_percent": 84.5, "translated_chars": 32561284, "translated_chars_percent": 84.6, "total_chars": 38459796, "fuzzy": 1910, "fuzzy_percent": 0.1, "failing": 19536, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 648117, "readonly_percent": 49.9, "suggestions": 2896, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
