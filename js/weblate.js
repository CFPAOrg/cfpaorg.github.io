
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1502595, "total_words": 7081774, "last_change": "2022-11-12T07:32:01.132689Z", "recent_changes": 5302, "translated": 1309070, "translated_words": 6115353, "translated_percent": 87.1, "translated_words_percent": 86.3, "translated_chars": 37737660, "translated_chars_percent": 86.5, "total_chars": 43622009, "fuzzy": 1878, "fuzzy_percent": 0.1, "failing": 24368, "failing_percent": 1.6, "approved": 3056, "approved_percent": 0.2, "readonly": 749966, "readonly_percent": 49.9, "suggestions": 2791, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
