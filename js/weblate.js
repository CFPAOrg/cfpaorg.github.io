
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1479435, "total_words": 6988662, "last_change": "2022-08-27T14:22:48.835375Z", "recent_changes": 5431, "translated": 1279053, "translated_words": 5990883, "translated_percent": 86.4, "translated_words_percent": 85.7, "translated_chars": 36964807, "translated_chars_percent": 85.8, "total_chars": 43042227, "fuzzy": 1942, "fuzzy_percent": 0.1, "failing": 24144, "failing_percent": 1.6, "approved": 3066, "approved_percent": 0.2, "readonly": 738386, "readonly_percent": 49.9, "suggestions": 2851, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
