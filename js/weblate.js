
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1471753, "total_words": 6937246, "last_change": "2022-05-14T14:11:50.279008Z", "recent_changes": 5210, "translated": 1269979, "translated_words": 5931863, "translated_percent": 86.2, "translated_words_percent": 85.5, "translated_chars": 36572139, "translated_chars_percent": 85.6, "total_chars": 42708779, "fuzzy": 1931, "fuzzy_percent": 0.1, "failing": 23427, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 734545, "readonly_percent": 49.9, "suggestions": 2914, "comments": 2, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
