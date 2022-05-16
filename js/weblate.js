
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1470029, "total_words": 6931580, "last_change": "2022-05-14T14:11:50.279008Z", "recent_changes": 5210, "translated": 1266075, "translated_words": 5919472, "translated_percent": 86.1, "translated_words_percent": 85.3, "translated_chars": 36495948, "translated_chars_percent": 85.5, "total_chars": 42674361, "fuzzy": 1931, "fuzzy_percent": 0.1, "failing": 23377, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 733683, "readonly_percent": 49.9, "suggestions": 2920, "comments": 2, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
