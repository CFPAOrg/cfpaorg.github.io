
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1476279, "total_words": 6953982, "last_change": "2022-07-08T03:20:11.512708Z", "recent_changes": 5326, "translated": 1275767, "translated_words": 5955621, "translated_percent": 86.4, "translated_words_percent": 85.6, "translated_chars": 36734577, "translated_chars_percent": 85.7, "total_chars": 42815823, "fuzzy": 1936, "fuzzy_percent": 0.1, "failing": 24059, "failing_percent": 1.6, "approved": 3066, "approved_percent": 0.2, "readonly": 736808, "readonly_percent": 49.9, "suggestions": 2851, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
