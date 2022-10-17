
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1487287, "total_words": 7016536, "last_change": "2022-08-27T14:22:48.835375Z", "recent_changes": 5431, "translated": 1289776, "translated_words": 6030300, "translated_percent": 86.7, "translated_words_percent": 85.9, "translated_chars": 37206319, "translated_chars_percent": 86.0, "total_chars": 43214733, "fuzzy": 2019, "fuzzy_percent": 0.1, "failing": 24304, "failing_percent": 1.6, "approved": 3066, "approved_percent": 0.2, "readonly": 742312, "readonly_percent": 49.9, "suggestions": 2853, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
