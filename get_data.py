import requests
import json

github_url = "https://api.github.com/repos/CFPAOrg/Minecraft-Mod-Language-Package/contributors"
weblate_url = "https://weblate-t.exz.me/api/projects/langpack/statistics/?format=json"
data_js = """
var contri = new Vue({{
  el: "#contributor",
  data: {{
    contributor: {}
  }}
}});
"""
weblate_js = """
var transData = new Vue({{
    el: "#weblate",
    data: {{
        result: {}
    }},
    computed: {{
        precent: function() {{
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }}
    }}
}})
"""

data = []
weblate = {}

i = 1
github_result = requests.get('{}?page={}'.format(github_url, i))
data.extend(github_result.json())
while len(github_result.json()) > 0:
    i = i+1
    github_result = requests.get('{}?page={}'.format(github_url, i))
    data.extend(github_result.json())
with open("./js/data.js", "w", encoding="utf-8") as f:
    data_text = json.dumps(data, ensure_ascii=False)
    f.write(data_js.format(data_text))

weblate_result = requests.get(weblate_url)
weblate = weblate_result.json()[0]
with open("./js/weblate.js", "w", encoding="utf-8") as f:
    weblate_text = json.dumps(weblate, ensure_ascii=False)
    f.write(weblate_js.format(weblate_text))
