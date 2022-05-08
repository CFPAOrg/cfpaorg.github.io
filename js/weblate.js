
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1471971, "total_words": 6934200, "last_change": "2022-04-17T04:11:02.786859Z", "recent_changes": 5211, "translated": 1266004, "translated_words": 5916483, "translated_percent": 86.0, "translated_words_percent": 85.3, "translated_chars": 36475963, "translated_chars_percent": 85.4, "total_chars": 42686775, "fuzzy": 1931, "fuzzy_percent": 0.1, "failing": 23368, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 734654, "readonly_percent": 49.9, "suggestions": 2897, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
