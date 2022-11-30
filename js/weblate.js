
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1499419, "total_words": 7065254, "last_change": "2022-11-12T07:32:01.132689Z", "recent_changes": 5302, "translated": 1307580, "translated_words": 6107609, "translated_percent": 87.2, "translated_words_percent": 86.4, "translated_chars": 37693184, "translated_chars_percent": 86.5, "total_chars": 43527159, "fuzzy": 1878, "fuzzy_percent": 0.1, "failing": 24384, "failing_percent": 1.6, "approved": 3056, "approved_percent": 0.2, "readonly": 748378, "readonly_percent": 49.9, "suggestions": 2791, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
