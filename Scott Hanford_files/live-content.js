(function () {
  var contentFile = "content.txt";
  var pollIntervalMs = 1500;
  var lastValue = null;

  function normalizeAssetPaths() {
    var attrs = ["src", "href"];
    attrs.forEach(function (attr) {
      var selector = "[" + attr + '^="./"][' + attr + '*="_files/"]';
      document.querySelectorAll(selector).forEach(function (el) {
        var value = el.getAttribute(attr);
        if (value) {
          el.setAttribute(attr, value.replace(/^\.\/[^/]*_files\//, "./"));
        }
      });
    });
  }

  function parseSectionEntries(raw, sectionName) {
    var regex = new RegExp("\\[" + sectionName + "\\]([\\s\\S]*?)(?=\\n\\[[A-Z_]+\\]|$)");
    var match = raw.match(regex);
    if (!match) {
      return [];
    }

    return match[1]
      .split("\n")
      .map(function (line) {
        return line.trim();
      })
      .filter(function (line) {
        return line && !line.startsWith("#");
      })
      .map(function (line) {
        var parts = line.split("|");
        return parts.length > 1 ? parts.slice(1).join("|").trim() : "";
      })
      .filter(Boolean);
  }

  function applyTextList(selector, values) {
    var nodes = document.querySelectorAll(selector);
    var max = Math.min(nodes.length, values.length);
    for (var i = 0; i < max; i += 1) {
      nodes[i].textContent = values[i];
    }
  }

  function applyContent(raw) {
    var headings = parseSectionEntries(raw, "HEADINGS");
    var paragraphs = parseSectionEntries(raw, "PARAGRAPHS");
    var bullets = parseSectionEntries(raw, "BULLET_POINTS");
    var otherText = parseSectionEntries(raw, "OTHER_TEXT");

    applyTextList("h1, h2, h3, h4, h5, h6", headings);
    applyTextList("p", paragraphs);
    applyTextList("li", bullets);
    applyTextList(
      ".text-block-11, .text-block-10, .text-block-5, .timeline-text-header, .timeline-text-subheader",
      otherText
    );
  }

  function refresh() {
    fetch(contentFile + "?t=" + Date.now())
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Could not load " + contentFile + " (" + response.status + ")");
        }
        return response.text();
      })
      .then(function (text) {
        if (text !== lastValue) {
          lastValue = text;
          applyContent(text);
        }
      })
      .catch(function (error) {
        console.error("Live content unavailable:", error.message);
      });
  }

  function start() {
    normalizeAssetPaths();
    refresh();
    setInterval(refresh, pollIntervalMs);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
