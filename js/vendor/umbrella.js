/* Umbrella JS 2.8.0 umbrellajs.com */
function ajax(a, b, c, d) {
  (c = c || function() {}),
    (b = b || {}),
    (b.body = b.body || {}),
    (b.method = (b.method || "GET").toUpperCase()),
    (b.headers = b.headers || {}),
    (b.headers["X-Requested-With"] =
      b.headers["X-Requested-With"] || "XMLHttpRequest"),
    ("undefined" != typeof window.FormData &&
      b.body instanceof window.FormData) ||
      (b.headers["Content-Type"] =
        b.headers["Content-Type"] || "application/x-www-form-urlencoded"),
    /json/.test(b.headers["Content-Type"]) && (b.body = JSON.stringify(b.body)),
    "object" != typeof b.body ||
      b.body instanceof window.FormData ||
      (b.body = u().param(b.body));
  var e = new window.XMLHttpRequest();
  u(e)
    .on("error timeout abort", function() {
      c(new Error(), null, e);
    })
    .on("load", function() {
      var a = /^(4|5)/.test(e.status) ? new Error(e.status) : null,
        b = parseJson(e.response) || e.response;
      return c(a, b, e);
    }),
    e.open(b.method, a),
    (e.withCredentials = !0);
  for (var f in b.headers) e.setRequestHeader(f, b.headers[f]);
  return d && d(e), e.send(b.body), e;
}
function parseJson(a) {
  try {
    var b = JSON.parse(a);
    if (b && "object" == typeof b) return b;
  } catch (c) {}
  return !1;
}
var u = function(a, b) {
  return this instanceof u
    ? a instanceof u
      ? a
      : ("string" == typeof a && (a = this.select(a, b)),
        a && a.nodeName && (a = [a]),
        void (this.nodes = this.slice(a)))
    : new u(a, b);
};
(u.prototype = {
  get length() {
    return this.nodes.length;
  }
}),
  (u.prototype.nodes = []),
  (u.prototype.addClass = function() {
    return this.eacharg(arguments, function(a, b) {
      a.classList.add(b);
    });
  }),
  (u.prototype.adjacent = function(a, b, c) {
    return (
      "number" == typeof b &&
        (b =
          0 === b
            ? []
            : new Array(b)
                .join()
                .split(",")
                .map(Number.call, Number)),
      this.each(function(d, e) {
        var f = document.createDocumentFragment();
        u(b || {})
          .map(function(b, c) {
            var f = "function" == typeof a ? a.call(this, b, c, d, e) : a;
            return "string" == typeof f ? this.generate(f) : u(f);
          })
          .each(function(a) {
            this.isInPage(a)
              ? f.appendChild(
                  u(a)
                    .clone()
                    .first()
                )
              : f.appendChild(a);
          }),
          c.call(this, d, f);
      })
    );
  }),
  (u.prototype.after = function(a, b) {
    return this.adjacent(a, b, function(a, b) {
      a.parentNode.insertBefore(b, a.nextSibling);
    });
  }),
  (u.prototype.ajax = function(a, b) {
    return this.handle("submit", function(c) {
      ajax(
        u(this).attr("action"),
        { body: u(this).serialize(), method: u(this).attr("method") },
        a && a.bind(this),
        b && b.bind(this)
      );
    });
  }),
  (u.prototype.append = function(a, b) {
    return this.adjacent(a, b, function(a, b) {
      a.appendChild(b);
    });
  }),
  (u.prototype.args = function(a, b, c) {
    return (
      "function" == typeof a && (a = a(b, c)),
      "string" != typeof a && (a = this.slice(a).map(this.str(b, c))),
      a
        .toString()
        .split(/[\s,]+/)
        .filter(function(a) {
          return a.length;
        })
    );
  }),
  (u.prototype.array = function(a) {
    a = a;
    var b = this;
    return this.nodes.reduce(function(c, d, e) {
      var f;
      return (
        a
          ? ((f = a.call(b, d, e)),
            f || (f = !1),
            "string" == typeof f && (f = u(f)),
            f instanceof u && (f = f.nodes))
          : (f = d.innerHTML),
        c.concat(f !== !1 ? f : [])
      );
    }, []);
  }),
  (u.prototype.attr = function(a, b, c) {
    if (((c = c ? "data-" : ""), void 0 !== b)) {
      var d = a;
      (a = {}), (a[d] = b);
    }
    return "object" == typeof a
      ? this.each(function(b) {
          for (var d in a) b.setAttribute(c + d, a[d]);
        })
      : this.length
      ? this.first().getAttribute(c + a)
      : "";
  }),
  (u.prototype.before = function(a, b) {
    return this.adjacent(a, b, function(a, b) {
      a.parentNode.insertBefore(b, a);
    });
  }),
  (u.prototype.children = function(a) {
    return this.map(function(a) {
      return this.slice(a.children);
    }).filter(a);
  }),
  (u.prototype.clone = function() {
    return this.map(function(a, b) {
      var c = a.cloneNode(!0),
        d = this.getAll(c);
      return (
        this.getAll(a).each(function(a, b) {
          for (var c in this.mirror) this.mirror[c](a, d.nodes[b]);
        }),
        c
      );
    });
  }),
  (u.prototype.getAll = function(a) {
    return u([a].concat(u("*", a).nodes));
  }),
  (u.prototype.mirror = {}),
  (u.prototype.mirror.events = function(a, b) {
    if (a._e)
      for (var c in a._e)
        a._e[c].forEach(function(a) {
          u(b).on(c, a);
        });
  }),
  (u.prototype.mirror.select = function(a, b) {
    u(a).is("select") && (b.value = a.value);
  }),
  (u.prototype.mirror.textarea = function(a, b) {
    u(a).is("textarea") && (b.value = a.value);
  }),
  (u.prototype.closest = function(a) {
    return this.map(function(b) {
      do if (u(b).is(a)) return b;
      while ((b = b.parentNode) && b !== document);
    });
  }),
  (u.prototype.data = function(a, b) {
    return this.attr(a, b, !0);
  }),
  (u.prototype.each = function(a) {
    return this.nodes.forEach(a.bind(this)), this;
  }),
  (u.prototype.eacharg = function(a, b) {
    return this.each(function(c, d) {
      this.args(a, c, d).forEach(function(a) {
        b.call(this, c, a);
      }, this);
    });
  }),
  (u.prototype.empty = function() {
    return this.each(function(a) {
      for (; a.firstChild; ) a.removeChild(a.firstChild);
    });
  }),
  (u.prototype.filter = function(a) {
    var b = function(b) {
      return (
        (b.matches =
          b.matches || b.msMatchesSelector || b.webkitMatchesSelector),
        b.matches(a || "*")
      );
    };
    return (
      "function" == typeof a && (b = a),
      a instanceof u &&
        (b = function(b) {
          return a.nodes.indexOf(b) !== -1;
        }),
      u(this.nodes.filter(b))
    );
  }),
  (u.prototype.find = function(a) {
    return this.map(function(b) {
      return u(a || "*", b);
    });
  }),
  (u.prototype.first = function() {
    return this.nodes[0] || !1;
  }),
  (u.prototype.generate = function(a) {
    return /^\s*<t(h|r|d)/.test(a)
      ? u(document.createElement("table"))
          .html(a)
          .children().nodes
      : /^\s*</.test(a)
      ? u(document.createElement("div"))
          .html(a)
          .children().nodes
      : document.createTextNode(a);
  }),
  (u.prototype.handle = function() {
    var a = this.slice(arguments).map(function(a) {
      return "function" == typeof a
        ? function(b) {
            b.preventDefault(), a.apply(this, arguments);
          }
        : a;
    }, this);
    return this.on.apply(this, a);
  }),
  (u.prototype.hasClass = function() {
    return this.is("." + this.args(arguments).join("."));
  }),
  (u.prototype.html = function(a) {
    return void 0 === a
      ? this.first().innerHTML || ""
      : this.each(function(b) {
          b.innerHTML = a;
        });
  }),
  (u.prototype.is = function(a) {
    return this.filter(a).length > 0;
  }),
  (u.prototype.isInPage = function(a) {
    return a !== document.body && document.body.contains(a);
  }),
  (u.prototype.last = function() {
    return this.nodes[this.length - 1] || !1;
  }),
  (u.prototype.map = function(a) {
    return a ? u(this.array(a)).unique() : this;
  }),
  (u.prototype.not = function(a) {
    return this.filter(function(b) {
      return !u(b).is(a || !0);
    });
  }),
  (u.prototype.off = function(a) {
    return this.eacharg(a, function(a, b) {
      u(a._e ? a._e[b] : []).each(function(c) {
        a.removeEventListener(b, c);
      });
    });
  }),
  (u.prototype.on = function(a, b, c) {
    if ("string" == typeof b) {
      var d = b;
      b = function(a) {
        var b = arguments;
        u(a.currentTarget)
          .find(d)
          .each(function(d) {
            if (d === a.target || d.contains(a.target)) {
              try {
                Object.defineProperty(a, "currentTarget", {
                  get: function() {
                    return d;
                  }
                });
              } catch (e) {}
              c.apply(d, b);
            }
          });
      };
    }
    var e = function(a) {
      return b.apply(this, [a].concat(a.detail || []));
    };
    return this.eacharg(a, function(a, b) {
      a.addEventListener(b, e),
        (a._e = a._e || {}),
        (a._e[b] = a._e[b] || []),
        a._e[b].push(e);
    });
  }),
  (u.prototype.param = function(a) {
    return Object.keys(a)
      .map(
        function(b) {
          return this.uri(b) + "=" + this.uri(a[b]);
        }.bind(this)
      )
      .join("&");
  }),
  (u.prototype.parent = function(a) {
    return this.map(function(a) {
      return a.parentNode;
    }).filter(a);
  }),
  (u.prototype.prepend = function(a, b) {
    return this.adjacent(a, b, function(a, b) {
      a.insertBefore(b, a.firstChild);
    });
  }),
  (u.prototype.remove = function() {
    return this.each(function(a) {
      a.parentNode.removeChild(a);
    });
  }),
  (u.prototype.removeClass = function() {
    return this.eacharg(arguments, function(a, b) {
      a.classList.remove(b);
    });
  }),
  (u.prototype.replace = function(a, b) {
    var c = [];
    return (
      this.adjacent(a, b, function(a, b) {
        (c = c.concat(this.slice(b.children))), a.parentNode.replaceChild(b, a);
      }),
      u(c)
    );
  }),
  (u.prototype.scroll = function() {
    return this.first().scrollIntoView({ behavior: "smooth" }), this;
  }),
  (u.prototype.select = function(a, b) {
    if (((a = a.replace(/^\s*/, "").replace(/\s*$/, "")), b))
      return this.select.byCss(a, b);
    for (var c in this.selectors)
      if (((b = c.split("/")), new RegExp(b[1], b[2]).test(a)))
        return this.selectors[c](a);
    return this.select.byCss(a);
  }),
  (u.prototype.select.byCss = function(a, b) {
    return (b || document).querySelectorAll(a);
  }),
  (u.prototype.selectors = {}),
  (u.prototype.selectors[/^\.[\w\-]+$/] = function(a) {
    return document.getElementsByClassName(a.substring(1));
  }),
  (u.prototype.selectors[/^\w+$/] = function(a) {
    return document.getElementsByTagName(a);
  }),
  (u.prototype.selectors[/^\#[\w\-]+$/] = function(a) {
    return document.getElementById(a.substring(1));
  }),
  (u.prototype.selectors[/^</] = function(a) {
    return u().generate(a);
  }),
  (u.prototype.serialize = function() {
    var a = this;
    return this.slice(this.first().elements)
      .reduce(function(b, c) {
        return !c.name || c.disabled || "file" === c.type
          ? b
          : /(checkbox|radio)/.test(c.type) && !c.checked
          ? b
          : "select-multiple" === c.type
          ? (u(c.options).each(function(d) {
              d.selected && (b += "&" + a.uri(c.name) + "=" + a.uri(d.value));
            }),
            b)
          : b + "&" + a.uri(c.name) + "=" + a.uri(c.value);
      }, "")
      .slice(1);
  }),
  (u.prototype.siblings = function(a) {
    return this.parent()
      .children(a)
      .not(this);
  }),
  (u.prototype.size = function() {
    return this.first().getBoundingClientRect();
  }),
  (u.prototype.slice = function(a) {
    return a &&
      0 !== a.length &&
      "string" != typeof a &&
      "[object Function]" !== a.toString()
      ? a.length
        ? [].slice.call(a.nodes || a)
        : [a]
      : [];
  }),
  (u.prototype.str = function(a, b) {
    return function(c) {
      return "function" == typeof c ? c.call(this, a, b) : c.toString();
    };
  }),
  (u.prototype.text = function(a) {
    return void 0 === a
      ? this.first().textContent || ""
      : this.each(function(b) {
          b.textContent = a;
        });
  }),
  (u.prototype.toggleClass = function(a, b) {
    return !!b === b
      ? this[b ? "addClass" : "removeClass"](a)
      : this.eacharg(a, function(a, b) {
          a.classList.toggle(b);
        });
  }),
  (u.prototype.trigger = function(a) {
    var b = this.slice(arguments).slice(1);
    return this.eacharg(a, function(a, c) {
      var d,
        e = { bubbles: !0, cancelable: !0, detail: b };
      try {
        d = new window.CustomEvent(c, e);
      } catch (f) {
        (d = document.createEvent("CustomEvent")),
          d.initCustomEvent(c, !0, !0, b);
      }
      a.dispatchEvent(d);
    });
  }),
  (u.prototype.unique = function() {
    return u(
      this.nodes.reduce(function(a, b) {
        var c = null !== b && void 0 !== b && b !== !1;
        return c && a.indexOf(b) === -1 ? a.concat(b) : a;
      }, [])
    );
  }),
  (u.prototype.uri = function(a) {
    return encodeURIComponent(a)
      .replace(/!/g, "%21")
      .replace(/'/g, "%27")
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/\*/g, "%2A")
      .replace(/%20/g, "+");
  }),
  (u.prototype.wrap = function(a) {
    function b(a) {
      for (; a.firstElementChild; ) a = a.firstElementChild;
      return u(a);
    }
    return this.map(function(c) {
      return u(a).each(function(a) {
        b(a).append(c.cloneNode(!0)), c.parentNode.replaceChild(a, c);
      });
    });
  }),
  "object" == typeof module &&
    module.exports &&
    (module.exports = { u: u, ajax: ajax });
