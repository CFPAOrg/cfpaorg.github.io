
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1476643, "total_words": 6955866, "last_change": "2022-07-08T03:20:11.512708Z", "recent_changes": 5326, "translated": 1276273, "translated_words": 5957893, "translated_percent": 86.4, "translated_words_percent": 85.6, "translated_chars": 36748296, "translated_chars_percent": 85.8, "total_chars": 42827091, "fuzzy": 1936, "fuzzy_percent": 0.1, "failing": 24061, "failing_percent": 1.6, "approved": 3066, "approved_percent": 0.2, "readonly": 736990, "readonly_percent": 49.9, "suggestions": 2851, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
