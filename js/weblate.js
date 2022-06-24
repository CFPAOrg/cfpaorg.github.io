
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1472719, "total_words": 6938606, "last_change": "2022-05-14T14:11:50.279008Z", "recent_changes": 5210, "translated": 1271125, "translated_words": 5935952, "translated_percent": 86.3, "translated_words_percent": 85.5, "translated_chars": 36613636, "translated_chars_percent": 85.7, "total_chars": 42722237, "fuzzy": 1931, "fuzzy_percent": 0.1, "failing": 23473, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 735028, "readonly_percent": 49.9, "suggestions": 2914, "comments": 2, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
