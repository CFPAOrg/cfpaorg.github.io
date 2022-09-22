
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1480167, "total_words": 6990862, "last_change": "2022-08-27T14:22:48.835375Z", "recent_changes": 5431, "translated": 1280299, "translated_words": 5994996, "translated_percent": 86.4, "translated_words_percent": 85.7, "translated_chars": 36992750, "translated_chars_percent": 85.9, "total_chars": 43056477, "fuzzy": 1971, "fuzzy_percent": 0.1, "failing": 24172, "failing_percent": 1.6, "approved": 3066, "approved_percent": 0.2, "readonly": 738752, "readonly_percent": 49.9, "suggestions": 2851, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
