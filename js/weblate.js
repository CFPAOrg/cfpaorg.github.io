
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1485807, "total_words": 7012354, "last_change": "2022-08-27T14:22:48.835375Z", "recent_changes": 5431, "translated": 1288149, "translated_words": 6025690, "translated_percent": 86.6, "translated_words_percent": 85.9, "translated_chars": 37177946, "translated_chars_percent": 86.0, "total_chars": 43189113, "fuzzy": 2004, "fuzzy_percent": 0.1, "failing": 24289, "failing_percent": 1.6, "approved": 3066, "approved_percent": 0.2, "readonly": 741572, "readonly_percent": 49.9, "suggestions": 2851, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
