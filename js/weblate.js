
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1365135, "total_words": 6494373, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5447, "translated": 1199137, "translated_words": 5681534, "translated_percent": 87.8, "translated_words_percent": 87.4, "translated_chars": 35080457, "translated_chars_percent": 87.6, "total_chars": 40037918, "fuzzy": 1828, "fuzzy_percent": 0.1, "failing": 22949, "failing_percent": 1.6, "approved": 3047, "approved_percent": 0.2, "readonly": 681461, "readonly_percent": 49.9, "suggestions": 2945, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
