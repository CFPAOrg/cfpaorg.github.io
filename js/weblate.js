
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1492425, "total_words": 7037898, "last_change": "2022-08-27T14:22:48.835375Z", "recent_changes": 5415, "translated": 1296097, "translated_words": 6056660, "translated_percent": 86.8, "translated_words_percent": 86.0, "translated_chars": 37372164, "translated_chars_percent": 86.2, "total_chars": 43349435, "fuzzy": 1943, "fuzzy_percent": 0.1, "failing": 24402, "failing_percent": 1.6, "approved": 3057, "approved_percent": 0.2, "readonly": 744881, "readonly_percent": 49.9, "suggestions": 2791, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
