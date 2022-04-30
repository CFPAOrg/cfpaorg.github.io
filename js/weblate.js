
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1471425, "total_words": 6933272, "last_change": "2022-04-17T04:11:02.786859Z", "recent_changes": 5211, "translated": 1265300, "translated_words": 5914030, "translated_percent": 85.9, "translated_words_percent": 85.2, "translated_chars": 36461493, "translated_chars_percent": 85.4, "total_chars": 42680925, "fuzzy": 1930, "fuzzy_percent": 0.1, "failing": 23349, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 734381, "readonly_percent": 49.9, "suggestions": 2897, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})
