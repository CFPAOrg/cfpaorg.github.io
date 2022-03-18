
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1356885, "total_words": 6453423, "last_change": "2022-03-06T03:55:42.575597Z", "recent_changes": 5447, "translated": 1189982, "translated_words": 5642854, "translated_percent": 87.6, "translated_words_percent": 87.4, "translated_chars": 34849481, "translated_chars_percent": 87.5, "total_chars": 39791650, "fuzzy": 1812, "fuzzy_percent": 0.1, "failing": 22840, "failing_percent": 1.6, "approved": 3047, "approved_percent": 0.2, "readonly": 677336, "readonly_percent": 49.9, "suggestions": 2947, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
