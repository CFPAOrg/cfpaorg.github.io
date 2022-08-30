
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1479437, "total_words": 6988668, "last_change": "2022-08-27T14:22:48.835375Z", "recent_changes": 5431, "translated": 1279055, "translated_words": 5990889, "translated_percent": 86.4, "translated_words_percent": 85.7, "translated_chars": 36964843, "translated_chars_percent": 85.8, "total_chars": 43042263, "fuzzy": 1942, "fuzzy_percent": 0.1, "failing": 24144, "failing_percent": 1.6, "approved": 3066, "approved_percent": 0.2, "readonly": 738387, "readonly_percent": 49.9, "suggestions": 2851, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
