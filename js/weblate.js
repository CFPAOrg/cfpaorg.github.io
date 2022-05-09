
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1470003, "total_words": 6931508, "last_change": "2022-04-17T04:11:02.786859Z", "recent_changes": 5211, "translated": 1266019, "translated_words": 5918491, "translated_percent": 86.1, "translated_words_percent": 85.3, "translated_chars": 36490043, "translated_chars_percent": 85.5, "total_chars": 42673869, "fuzzy": 1931, "fuzzy_percent": 0.1, "failing": 23377, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 733670, "readonly_percent": 49.9, "suggestions": 2897, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
