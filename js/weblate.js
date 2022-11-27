
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1499689, "total_words": 7073764, "last_change": "2022-11-12T07:32:01.132689Z", "recent_changes": 5302, "translated": 1306035, "translated_words": 6105956, "translated_percent": 87.0, "translated_words_percent": 86.3, "translated_chars": 37676332, "translated_chars_percent": 86.4, "total_chars": 43569771, "fuzzy": 1871, "fuzzy_percent": 0.1, "failing": 24324, "failing_percent": 1.6, "approved": 3056, "approved_percent": 0.2, "readonly": 748513, "readonly_percent": 49.9, "suggestions": 2791, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
