
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1482025, "total_words": 6999630, "last_change": "2022-08-27T14:22:48.835375Z", "recent_changes": 5431, "translated": 1282458, "translated_words": 6006837, "translated_percent": 86.5, "translated_words_percent": 85.8, "translated_chars": 37066043, "translated_chars_percent": 85.9, "total_chars": 43110373, "fuzzy": 1999, "fuzzy_percent": 0.1, "failing": 24208, "failing_percent": 1.6, "approved": 3066, "approved_percent": 0.2, "readonly": 739681, "readonly_percent": 49.9, "suggestions": 2851, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
