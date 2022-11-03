
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1491247, "total_words": 7033864, "last_change": "2022-08-27T14:22:48.835375Z", "recent_changes": 5415, "translated": 1294805, "translated_words": 6052258, "translated_percent": 86.8, "translated_words_percent": 86.0, "translated_chars": 37344512, "translated_chars_percent": 86.1, "total_chars": 43324277, "fuzzy": 1943, "fuzzy_percent": 0.1, "failing": 24402, "failing_percent": 1.6, "approved": 3057, "approved_percent": 0.2, "readonly": 744292, "readonly_percent": 49.9, "suggestions": 2791, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
