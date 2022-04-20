
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1459105, "total_words": 6900196, "last_change": "2022-04-17T04:11:02.786859Z", "recent_changes": 5211, "translated": 1251613, "translated_words": 5874614, "translated_percent": 85.7, "translated_words_percent": 85.1, "translated_chars": 36201767, "translated_chars_percent": 85.2, "total_chars": 42459223, "fuzzy": 1930, "fuzzy_percent": 0.1, "failing": 23342, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 728221, "readonly_percent": 49.9, "suggestions": 2896, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
