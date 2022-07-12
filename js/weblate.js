
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1474723, "total_words": 6946974, "last_change": "2022-07-08T03:20:11.512708Z", "recent_changes": 5350, "translated": 1273691, "translated_words": 5947219, "translated_percent": 86.3, "translated_words_percent": 85.6, "translated_chars": 36683471, "translated_chars_percent": 85.7, "total_chars": 42774331, "fuzzy": 1933, "fuzzy_percent": 0.1, "failing": 23519, "failing_percent": 1.5, "approved": 3066, "approved_percent": 0.2, "readonly": 736030, "readonly_percent": 49.9, "suggestions": 2802, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
