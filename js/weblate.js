
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1472011, "total_words": 6935226, "last_change": "2022-04-17T04:11:02.786859Z", "recent_changes": 5211, "translated": 1265874, "translated_words": 5915991, "translated_percent": 85.9, "translated_words_percent": 85.3, "translated_chars": 36472933, "translated_chars_percent": 85.4, "total_chars": 42692323, "fuzzy": 1931, "fuzzy_percent": 0.1, "failing": 23363, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 734674, "readonly_percent": 49.9, "suggestions": 2897, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
