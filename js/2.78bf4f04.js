(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
  "10d0": function (t, e, a) {
    "use strict";
    a.r(e);
    var s = function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("q-page", [a("div", {staticClass: "q-pa-md absolute full-height full-width column"}, [t.tasksDownloaded ? [a("div", {staticClass: "row q-mb-lg"}, [a("Search"), a("Sort")], 1), !t.search || Object.keys(t.tasksTodo).length || Object.keys(t.tasksCompleted).length ? t._e() : a("p", [t._v("\n        No search results\n      ")]), a("q-scroll-area", {staticClass: "q-scroll-area-tasks"}, [Object.keys(t.tasksTodo).length || t.search || t.settings.showTasksInOneList ? t._e() : a("NoTasks"), Object.keys(t.tasksTodo).length ? a("TasksTodo", {attrs: {tasksTodo: t.tasksTodo}}) : t._e(), Object.keys(t.tasksCompleted).length ? a("TasksCompleted", {
          staticClass: "q-mb-xl",
          attrs: {tasksCompleted: t.tasksCompleted}
        }) : t._e()], 1), a("div", {staticClass: "absolute-bottom text-center q-mb-lg no-pointer-events"}, [a("q-btn", {
          staticClass: "all-pointer-events",
          attrs: {round: "", color: "primary", size: "24px", icon: "add"},
          on: {
            click: function (e) {
              t.showAddTask = !0
            }
          }
        })], 1)] : [a("span", {staticClass: "absolute-center"}, [a("q-spinner", {
          attrs: {
            color: "primary",
            size: "5em"
          }
        })], 1)]], 2), a("q-dialog", {
          attrs: {"transition-show": "fade", "transition-hide": "fade"},
          model: {
            value: t.showAddTask, callback: function (e) {
              t.showAddTask = e
            }, expression: "showAddTask"
          }
        }, [a("AddTask", {
          on: {
            close: function (e) {
              t.showAddTask = !1
            }
          }
        })], 1)], 1)
      }, o = [], n = a("ded3"), i = a.n(n), r = a("2f62"), l = function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("q-item", {
          directives: [{
            name: "touch-hold",
            rawName: "v-touch-hold:1000.mouse",
            value: t.showEditTaskModal,
            expression: "showEditTaskModal",
            arg: "1000",
            modifiers: {mouse: !0}
          }],
          staticClass: "text-grey-7",
          class: t.task.completed ? "bg-grey-2  text-grey-5" : "bg-white",
          attrs: {clickable: ""},
          on: {
            click: function (e) {
              return t.updateTask({id: t.id, updates: {completed: !t.task.completed}})
            }
          }
        }, [a("q-item-section", {
          attrs: {
            side: "",
            top: ""
          }
        }, [a("q-checkbox", {
          staticClass: "no-pointer-events rounded-checkbox ",
          attrs: {"keep-color": "", color: "grey-7", size: "xs"},
          model: {
            value: t.task.completed, callback: function (e) {
              t.$set(t.task, "completed", e)
            }, expression: "task.completed"
          }
        })], 1), a("q-item-section", [a("q-item-label", {
          class: {"text-strike": t.task.completed},
          domProps: {innerHTML: t._s(t.$options.filters.searchHighlight(t.task.name, t.search))}
        })], 1), t.task.dueDate ? a("q-item-section", {attrs: {side: ""}}, [a("div", {staticClass: "row"}, [a("div", {staticClass: "column justify-center"}, [a("q-icon", {
          staticClass: "q-mr-xs",
          attrs: {size: "18px", name: "event"}
        })], 1), a("div", {staticClass: "column"}, [a("q-item-label", {
          staticClass: "row justify-end",
          attrs: {caption: ""}
        }, [t._v("\n          " + t._s(t._f("niceDate")(t.task.dueDate)) + "\n        ")]), a("q-item-label", {
          staticClass: "row justify-end",
          attrs: {caption: ""}
        }, [t._v("\n          " + t._s(t.taskDueTime) + "\n        ")])], 1)])]) : t._e(), a("q-item-section", {attrs: {side: ""}}, [a("div", {staticClass: "row"}, [a("q-btn", {
          attrs: {
            flat: "",
            round: "",
            dense: "",
            icon: "edit"
          }, on: {
            click: function (e) {
              return e.stopPropagation(), t.showEditTaskModal(e)
            }
          }
        }), a("q-btn", {
          attrs: {flat: "", round: "", dense: "", icon: "delete"}, on: {
            click: function (e) {
              return e.stopPropagation(), t.promptToDelete(t.id)
            }
          }
        })], 1)]), a("q-dialog", {
          attrs: {"transition-show": "fade", "transition-hide": "fade"},
          model: {
            value: t.showEditTask, callback: function (e) {
              t.showEditTask = e
            }, expression: "showEditTask"
          }
        }, [a("EditTask", {
          attrs: {task: t.task, id: t.id}, on: {
            close: function (e) {
              t.showEditTask = !1
            }
          }
        })], 1)], 1)
      }, c = [], u = (a("5319"), a("bd4c")), d = function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("q-card", [a("ModalHeader", [t._v("Edit Task")]), a("form", {on: {submit: t.submitForm}}, [a("q-card-section", [a("ModalTaskName", {
          ref: "modalTaskName",
          attrs: {name: t.taskToSubmit.name},
          on: {
            "update:name": function (e) {
              return t.$set(t.taskToSubmit, "name", e)
            }
          }
        }), a("ModalDueDate", {
          attrs: {dueDate: t.taskToSubmit.dueDate}, on: {
            "update:dueDate": function (e) {
              return t.$set(t.taskToSubmit, "dueDate", e)
            }, "update:due-date": function (e) {
              return t.$set(t.taskToSubmit, "dueDate", e)
            }, clear: t.clearDueDate
          }
        }), t.taskToSubmit.dueDate ? a("ModalDueTime", {
          attrs: {dueTime: t.taskToSubmit.dueTime},
          on: {
            "update:dueTime": function (e) {
              return t.$set(t.taskToSubmit, "dueTime", e)
            }, "update:due-time": function (e) {
              return t.$set(t.taskToSubmit, "dueTime", e)
            }
          }
        }) : t._e(), a("ModalButtons")], 1)], 1)], 1)
      }, m = [], p = function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("q-card-section", {staticClass: "row"}, [a("div", {staticClass: "text-h6"}, [t._t("default")], 2), a("q-space"), a("q-btn", {
          directives: [{
            name: "close-popup",
            rawName: "v-close-popup"
          }], attrs: {dense: "", flat: "", icon: "close", round: ""}
        })], 1)
      }, k = [], b = {}, f = b, h = a("2877"), T = a("a370"), v = a("2c91"), _ = a("9c40"), q = a("7f67"), C = a("eebe"),
      g = a.n(C), w = Object(h["a"])(f, p, k, !1, null, null, null), y = w.exports;
    g()(w, "components", {
      QCardSection: T["a"],
      QSpace: v["a"],
      QBtn: _["a"]
    }), g()(w, "directives", {ClosePopup: q["a"]});
    var D = function () {
      var t = this, e = t.$createElement, a = t._self._c || e;
      return a("div", {staticClass: "row q-mb-sm"}, [a("q-input", {
        directives: [{
          name: "autofocus",
          rawName: "v-autofocus",
          value: {delayCordova: 700},
          expression: "{ delayCordova: 700 }"
        }, {name: "select-all", rawName: "v-select-all"}],
        ref: "name",
        staticClass: "col",
        attrs: {
          outlined: "", value: t.name, label: "Task name", rules: [function (t) {
            return !!t || "Field is required"
          }]
        },
        on: {
          input: function (e) {
            return t.$emit("update:name", e)
          }
        },
        scopedSlots: t._u([{
          key: "append", fn: function () {
            return [t.name ? a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {name: "close"},
              on: {
                click: function (e) {
                  return t.$emit("update:name", "")
                }
              }
            }) : t._e()]
          }, proxy: !0
        }])
      })], 1)
    }, x = [];
    const S = {
      bind(t) {
        let e = t.querySelector(".q-field__native");
        e.addEventListener("focus", (() => {
          e.value.length && e.select()
        }))
      }
    };
    var $ = a("0967");
    const O = {
      bind(t, e) {
        console.log("binding:", e.value);
        let a = t.querySelector(".q-field__native"), s = 0;
        $["b"].is.cordova && (s = 700, e.value && (s = e.value.delayCordova)), setTimeout((() => {
          a.focus()
        }), s)
      }
    };
    var Q = {directives: {selectAll: S, autofocus: O}, props: ["name"]}, j = Q, E = a("27f9"), M = a("0016"),
      I = Object(h["a"])(j, D, x, !1, null, null, null), N = I.exports;
    g()(I, "components", {QInput: E["a"], QIcon: M["a"]});
    var A = function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("div", {staticClass: "row q-mb-sm"}, [a("q-input", {
          attrs: {
            outlined: "",
            label: "Due date",
            value: t.dueDate
          }, on: {
            input: function (e) {
              return t.$emit("update:dueDate", e)
            }
          }, scopedSlots: t._u([{
            key: "append", fn: function () {
              return [t.dueDate ? a("q-icon", {
                staticClass: "cursor-pointer",
                attrs: {name: "close"},
                on: {
                  click: function (e) {
                    return t.$emit("clear")
                  }
                }
              }) : t._e(), a("q-icon", {
                staticClass: "cursor-pointer",
                attrs: {name: "event"}
              }, [a("q-popup-proxy", {
                ref: "qDateProxy",
                attrs: {"transition-show": "scale", "transition-hide": "scale"}
              }, [a("q-date", {
                attrs: {value: t.dueDate}, on: {
                  input: function (e) {
                    return t.$emit("update:dueDate", e)
                  }
                }
              }, [a("div", {staticClass: "row items-center justify-end"}, [a("q-btn", {
                directives: [{
                  name: "close-popup",
                  rawName: "v-close-popup"
                }], attrs: {label: "Close", color: "primary", flat: ""}
              })], 1)])], 1)], 1)]
            }, proxy: !0
          }])
        })], 1)
      }, B = [], H = {props: ["dueDate"]}, L = H, F = a("7cbe"), P = a("52ee"),
      z = Object(h["a"])(L, A, B, !1, null, null, null), Y = z.exports;
    g()(z, "components", {
      QInput: E["a"],
      QIcon: M["a"],
      QPopupProxy: F["a"],
      QDate: P["a"],
      QBtn: _["a"]
    }), g()(z, "directives", {ClosePopup: q["a"]});
    var J = function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("div", {staticClass: "row q-mb-sm"}, [a("q-input", {
          staticClass: "col",
          attrs: {outlined: "", label: "Due time", value: t.dueTime},
          on: {
            input: function (e) {
              return t.$emit("update:dueTime", e)
            }
          },
          scopedSlots: t._u([{
            key: "append", fn: function () {
              return [t.dueTime ? a("q-icon", {
                staticClass: "cursor-pointer",
                attrs: {name: "close"},
                on: {
                  click: function (e) {
                    return t.$emit("update:dueTime", "")
                  }
                }
              }) : t._e(), a("q-icon", {
                staticClass: "cursor-pointer",
                attrs: {name: "access_time"}
              }, [a("q-popup-proxy", {
                attrs: {
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }
              }, [a("q-time", {
                attrs: {value: t.dueTime, format24h: ""}, on: {
                  input: function (e) {
                    return t.$emit("update:dueTime", e)
                  }
                }
              }, [a("div", {staticClass: "row items-center justify-end"}, [a("q-btn", {
                directives: [{
                  name: "close-popup",
                  rawName: "v-close-popup"
                }], attrs: {label: "Close", color: "primary", flat: ""}
              })], 1)])], 1)], 1)]
            }, proxy: !0
          }])
        })], 1)
      }, R = [], K = {props: ["dueTime"]}, G = K, U = a("ca78"), V = Object(h["a"])(G, J, R, !1, null, null, null),
      W = V.exports;
    g()(V, "components", {
      QInput: E["a"],
      QIcon: M["a"],
      QPopupProxy: F["a"],
      QTime: U["a"],
      QBtn: _["a"]
    }), g()(V, "directives", {ClosePopup: q["a"]});
    var X = function () {
      var t = this, e = t.$createElement, a = t._self._c || e;
      return a("q-card-actions", {attrs: {align: "right"}}, [a("q-btn", {
        attrs: {
          color: "primary",
          type: "submit",
          label: "Save"
        }
      })], 1)
    }, Z = [], tt = {}, et = tt, at = a("4b7e"), st = Object(h["a"])(et, X, Z, !1, null, null, null), ot = st.exports;
    g()(st, "components", {QCardActions: at["a"], QBtn: _["a"]});
    var nt = {
      components: {ModalHeader: y, ModalTaskName: N, ModalDueDate: Y, ModalDueTime: W, ModalButtons: ot},
      methods: {
        submitForm() {
          this.$refs.modalTaskName.$refs.name.validate(), this.$refs.modalTaskName.$refs.name.hasError || this.submitTask()
        }, clearDueDate() {
          this.taskToSubmit.dueDate = "", this.taskToSubmit.dueTime = ""
        }
      }
    }, it = {
      props: ["task", "id"], data() {
        return {taskToSubmit: {}}
      }, methods: i()(i()({}, Object(r["b"])("tasks", ["updateTask"])), {}, {
        submitTask() {
          this.updateTask({id: this.id, updates: this.taskToSubmit}), this.$emit("close")
        }
      }), created() {
        this.taskToSubmit = Object.assign({}, this.task)
      }, mixins: [nt]
    }, rt = it, lt = a("f09f"), ct = Object(h["a"])(rt, d, m, !1, null, null, null), ut = ct.exports;
    g()(ct, "components", {QCard: lt["a"], QCardSection: T["a"]});
    const {formatDate: dt} = u["b"];
    var mt = {
        props: ["task", "id"],
        components: {EditTask: ut},
        computed: i()(i()(i()({}, Object(r["d"])("tasks", ["search"])), Object(r["c"])("settings", ["settings"])), {}, {
          taskDueTime() {
            return this.settings.show12HourTimeFormat ? u["b"].formatDate(this.task.dueDate + " " + this.task.dueTime, "h-mm A") : this.task.dueTime
          }
        }),
        data() {
          return {showEditTask: !1}
        },
        methods: i()(i()({}, Object(r["b"])("tasks", ["updateTask", "deleteTask"])), {}, {
          showEditTaskModal() {
            this.showEditTask = !0
          }, promptToDelete(t) {
            this.$q.dialog({
              title: "Confirm",
              message: "Really delete?",
              cancel: !0,
              persistent: !0,
              transitionShow: "fade",
              transitionHide: "fade"
            }).onOk((() => {
              console.log(" OK"), this.deleteTask(t)
            }))
          }
        }),
        filters: {
          niceDate(t) {
            return u["b"].formatDate(t, "D. MMM YYYY")
          }, searchHighlight(t, e) {
            if (e) {
              let a = new RegExp(e, "ig");
              return t.replace(a, (t => '<span class="bg-yellow-6">' + t + "</span>"))
            }
            return t
          }
        }
      }, pt = mt, kt = (a("2e34"), a("66e5")), bt = a("4074"), ft = a("8f8e"), ht = a("0170"), Tt = a("24e8"),
      vt = a("f449"), _t = Object(h["a"])(pt, l, c, !1, null, null, null), qt = _t.exports;
    g()(_t, "components", {
      QItem: kt["a"],
      QItemSection: bt["a"],
      QCheckbox: ft["a"],
      QItemLabel: ht["a"],
      QIcon: M["a"],
      QBtn: _["a"],
      QDialog: Tt["a"]
    }), g()(_t, "directives", {TouchHold: vt["a"]});
    var Ct = function () {
      var t = this, e = t.$createElement, a = t._self._c || e;
      return a("q-card", [a("ModalHeader", [t._v("Add Task")]), a("form", {on: {submit: t.submitForm}}, [a("q-card-section", [a("ModalTaskName", {
        ref: "modalTaskName",
        attrs: {name: t.taskToSubmit.name},
        on: {
          "update:name": function (e) {
            return t.$set(t.taskToSubmit, "name", e)
          }
        }
      }), a("ModalDueDate", {
        attrs: {dueDate: t.taskToSubmit.dueDate}, on: {
          "update:dueDate": function (e) {
            return t.$set(t.taskToSubmit, "dueDate", e)
          }, "update:due-date": function (e) {
            return t.$set(t.taskToSubmit, "dueDate", e)
          }, clear: t.clearDueDate
        }
      }), t.taskToSubmit.dueDate ? a("ModalDueTime", {
        attrs: {dueTime: t.taskToSubmit.dueTime},
        on: {
          "update:dueTime": function (e) {
            return t.$set(t.taskToSubmit, "dueTime", e)
          }, "update:due-time": function (e) {
            return t.$set(t.taskToSubmit, "dueTime", e)
          }
        }
      }) : t._e(), a("ModalButtons")], 1)], 1)], 1)
    }, gt = [], wt = {
      data() {
        return {taskToSubmit: {name: "", dueDate: "", dueTime: "", completed: !1}}
      }, methods: i()(i()({}, Object(r["b"])("tasks", ["addTask"])), {}, {
        submitTask() {
          this.addTask(this.taskToSubmit), this.$emit("close")
        }
      }), mixins: [nt]
    }, yt = wt, Dt = Object(h["a"])(yt, Ct, gt, !1, null, null, null), xt = Dt.exports;
    g()(Dt, "components", {QCard: lt["a"], QCardSection: T["a"]});
    var St = function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("transition", {
          attrs: {
            appear: "",
            "enter-active-class": "animated zoomIn",
            "leave-active-class": "animated zoomOut absolute-top"
          }
        }, [a("div", [t.settings.showTasksInOneList ? t._e() : a("ListHeader", {attrs: {bgColor: "bg-orange-4"}}, [t._v("Todo")]), a("q-list", {
          attrs: {
            bordered: "",
            separator: ""
          }
        }, t._l(t.tasksTodo, (function (t, e) {
          return a("Task", {key: e, attrs: {task: t, id: e}})
        })), 1)], 1)])
      }, $t = [], Ot = function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("q-banner", {
          staticClass: "list-header text-white  text-center",
          class: t.bgColor,
          attrs: {dense: "", "inline-actions": ""}
        }, [a("span", {staticClass: "text-subtitle1 text-bold"}, [t._t("default")], 2)])
      }, Qt = [], jt = {props: ["bgColor"]}, Et = jt, Mt = (a("c5d0"), a("54e1")),
      It = Object(h["a"])(Et, Ot, Qt, !1, null, "68e0d064", null), Nt = It.exports;
    g()(It, "components", {QBanner: Mt["a"]});
    var At = {
      components: {Task: qt, ListHeader: Nt},
      props: ["tasksTodo"],
      computed: i()({}, Object(r["c"])("settings", ["settings"]))
    }, Bt = At, Ht = a("1c1c"), Lt = Object(h["a"])(Bt, St, $t, !1, null, null, null), Ft = Lt.exports;
    g()(Lt, "components", {QList: Ht["a"]});
    var Pt = function () {
      var t = this, e = t.$createElement, a = t._self._c || e;
      return a("transition", {
        attrs: {
          appear: "",
          "enter-active-class": "animated zoomIn",
          "leave-active-class": "animated zoomOut"
        }
      }, [a("div", {class: {"q-mt-lg": !t.settings.showTasksInOneList}}, [t.settings.showTasksInOneList ? t._e() : a("ListHeader", {attrs: {bgColor: "bg-green-4"}}, [t._v("Completed")]), a("q-list", {
        attrs: {
          bordered: "",
          separator: ""
        }
      }, t._l(t.tasksCompleted, (function (t, e) {
        return a("Task", {key: e, attrs: {task: t, id: e}})
      })), 1)], 1)])
    }, zt = [], Yt = {
      components: {Task: qt, ListHeader: Nt},
      props: ["tasksCompleted"],
      computed: i()({}, Object(r["c"])("settings", ["settings"]))
    }, Jt = Yt, Rt = Object(h["a"])(Jt, Pt, zt, !1, null, null, null), Kt = Rt.exports;
    g()(Rt, "components", {QList: Ht["a"]});
    var Gt = function () {
      var t = this, e = t.$createElement, a = t._self._c || e;
      return a("transition", {
        attrs: {
          appear: "",
          "enter-active-class": "animated zoomIn",
          "leave-active-class": "animated zoomOut absolute-top"
        }
      }, [a("q-banner", {
        staticClass: "bg-grey-3", scopedSlots: t._u([{
          key: "avatar", fn: function () {
            return [a("q-icon", {attrs: {name: "done", color: "primary"}})]
          }, proxy: !0
        }, {
          key: "action", fn: function () {
            return [a("q-btn", {
              attrs: {flat: "", color: "primary", label: "Add Task"}, on: {
                click: function (e) {
                  return t.$root.$emit("showAddTask")
                }
              }
            })]
          }, proxy: !0
        }])
      }, [t._v("\n    No tasks to do today\n    ")])], 1)
    }, Ut = [], Vt = {}, Wt = Vt, Xt = Object(h["a"])(Wt, Gt, Ut, !1, null, null, null), Zt = Xt.exports;
    g()(Xt, "components", {QBanner: Mt["a"], QIcon: M["a"], QBtn: _["a"]});
    var te = function () {
      var t = this, e = t.$createElement, a = t._self._c || e;
      return a("q-input", {
        directives: [{name: "select-all", rawName: "v-select-all"}],
        staticClass: "col",
        attrs: {outlined: "", label: "Search"},
        on: {
          keyup: function (e) {
            if (!e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])) return null;
            t.searchField = ""
          }
        },
        scopedSlots: t._u([{
          key: "append", fn: function () {
            return ["" !== t.searchField ? a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {name: "close"},
              on: {
                click: function (e) {
                  t.searchField = ""
                }
              }
            }) : t._e(), a("q-icon", {attrs: {name: "search"}})]
          }, proxy: !0
        }]),
        model: {
          value: t.searchField, callback: function (e) {
            t.searchField = e
          }, expression: "searchField"
        }
      })
    }, ee = [], ae = {
      computed: i()(i()({}, Object(r["d"])("tasks", ["search"])), {}, {
        searchField: {
          get() {
            return this.search
          }, set(t) {
            this.setSearch(t)
          }
        }
      }), methods: i()({}, Object(r["b"])("tasks", ["setSearch"])), directives: {selectAll: S}
    }, se = ae, oe = Object(h["a"])(se, te, ee, !1, null, null, null), ne = oe.exports;
    g()(oe, "components", {QInput: E["a"], QIcon: M["a"]});
    var ie = function () {
      var t = this, e = t.$createElement, a = t._self._c || e;
      return a("q-select", {
        staticClass: "col q-ml-sm",
        attrs: {
          "emit-value": "",
          "map-options": "",
          filled: "",
          options: t.options,
          label: "Sort by",
          "stack-label": ""
        },
        model: {
          value: t.sortBy, callback: function (e) {
            t.sortBy = e
          }, expression: "sortBy"
        }
      })
    }, re = [], le = (a("4e82"), {
      data() {
        return {options: [{label: "Name", value: "name"}, {label: "Date", value: "dueDate"}]}
      }, computed: i()(i()({}, Object(r["d"])("tasks", ["sort"])), {}, {
        sortBy: {
          get() {
            return this.sort
          }, set(t) {
            this.setSort(t)
          }
        }
      }), methods: i()({}, Object(r["b"])("tasks", ["setSort"]))
    }), ce = le, ue = (a("4f0b"), a("ddd8")), de = Object(h["a"])(ce, ie, re, !1, null, null, null), me = de.exports;
    g()(de, "components", {QSelect: ue["a"]});
    var pe = {
        components: {Task: qt, AddTask: xt, TasksTodo: Ft, TasksCompleted: Kt, NoTasks: Zt, Search: ne, Sort: me},
        data() {
          return {showAddTask: !1}
        },
        computed: i()(i()(i()({}, Object(r["c"])("tasks", ["tasksTodo", "tasksCompleted"])), Object(r["c"])("settings", ["settings"])), Object(r["d"])("tasks", ["search", "tasksDownloaded"])),
        mounted() {
          this.$root.$on("showAddTask", (() => {
            this.showAddTask = !0
          }))
        }
      }, ke = pe, be = (a("9592"), a("9989")), fe = a("4983"), he = a("0d59"),
      Te = Object(h["a"])(ke, s, o, !1, null, null, null);
    e["default"] = Te.exports;
    g()(Te, "components", {QPage: be["a"], QScrollArea: fe["a"], QBtn: _["a"], QSpinner: he["a"], QDialog: Tt["a"]})
  }, "2e34": function (t, e, a) {
    "use strict";
    a("65fc")
  }, 3998: function (t, e, a) {
  }, "3a29": function (t, e, a) {
  }, "4f0b": function (t, e, a) {
    "use strict";
    a("3a29")
  }, "65fc": function (t, e, a) {
  }, 9592: function (t, e, a) {
    "use strict";
    a("3998")
  }, c5d0: function (t, e, a) {
    "use strict";
    a("cd91")
  }, cd91: function (t, e, a) {
  }
}]);
