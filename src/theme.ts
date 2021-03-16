import { colors, VitesseThemes } from "./colors";

export default function getTheme({ style, name }) {
  const pick = (options) => options[style];

  const vitesse = (key: keyof typeof VitesseThemes) =>
    pick({ light: VitesseThemes[key][1] });

  const primer = colors;

  const foreground = vitesse("foreground");
  const background = vitesse("background");
  const secondaryForeground = vitesse("secondaryForeground");
  const border = vitesse("border");
  const activeForeground = vitesse("activeForeground");
  const activeBackground = vitesse("activeBackground");
  const primary = vitesse("primary");

  return {
    name,
    colors: {
      focusBorder: "#00000000",
      foreground,
      descriptionForeground: secondaryForeground,
      errorForeground: vitesse("red"),

      "textLink.foreground": primary,
      "textLink.activeForeground": primary,
      "textBlockQuote.background": background,
      "textBlockQuote.border": border,
      "textCodeBlock.background": background,
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],

      "button.background": primary,
      "button.foreground": background,
      "button.hoverBackground": primary,

      "checkbox.background": activeBackground,
      "checkbox.border": pick({ light: primer.gray[3], dark: primer.white }),

      "dropdown.background": background,
      "dropdown.border": border,
      "dropdown.foreground": foreground,
      "dropdown.listBackground": activeBackground,

      "input.background": activeBackground,
      "input.border": border,
      "input.foreground": foreground,
      "input.placeholderForeground": secondaryForeground,

      "badge.foreground": background,
      "badge.background": secondaryForeground,

      "progressBar.background": primary,

      "titleBar.activeForeground": activeForeground,
      "titleBar.activeBackground": background,
      "titleBar.inactiveForeground": primer.gray[5],
      "titleBar.inactiveBackground": background,
      "titleBar.border": activeBackground,

      "activityBar.foreground": foreground,
      "activityBar.inactiveForeground": vitesse("ignored"),
      "activityBar.background": background,
      "activityBarBadge.foreground": background,
      "activityBarBadge.background": activeForeground,
      "activityBar.activeBorder": primary,
      "activityBar.border": border,

      "sideBar.foreground": activeForeground,
      "sideBar.background": background,
      "sideBar.border": border,
      "sideBarTitle.foreground": foreground,
      "sideBarSectionHeader.foreground": foreground,
      "sideBarSectionHeader.background": background,
      "sideBarSectionHeader.border": border,

      "list.hoverForeground": foreground,
      "list.inactiveSelectionForeground": foreground,
      "list.activeSelectionForeground": foreground,
      "list.hoverBackground": activeBackground,
      "list.inactiveSelectionBackground": background,
      "list.activeSelectionBackground": activeBackground,
      "list.inactiveFocusBackground": background,
      "list.focusBackground": activeBackground,

      "tree.indentGuidesStroke": pick({
        light: primer.gray[2],
        dark: primer.gray[1],
      }),

      "notificationCenterHeader.foreground": primer.gray[5],
      "notificationCenterHeader.background": background,
      "notifications.foreground": foreground,
      "notifications.background": background,
      "notifications.border": border,
      "notificationsErrorIcon.foreground": vitesse("red"),
      "notificationsWarningIcon.foreground": vitesse("orange"),
      "notificationsInfoIcon.foreground": vitesse("blue"),

      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": foreground,
      "quickInput.background": background,
      "quickInput.foreground": foreground,

      "statusBar.foreground": activeForeground,
      "statusBar.background": background,
      "statusBar.border": border,
      "statusBar.noFolderBackground": background,
      "statusBar.debuggingBackground": activeBackground,
      "statusBar.debuggingForeground": activeForeground,
      "statusBarItem.prominentBackground": activeBackground,

      "editorGroupHeader.tabsBackground": background,
      "editorGroupHeader.tabsBorder": border,
      "editorGroup.border": border,

      "tab.activeForeground": foreground,
      "tab.inactiveForeground": primer.gray[5],
      "tab.inactiveBackground": background,
      "tab.activeBackground": background,
      "tab.hoverBackground": activeBackground,
      "tab.unfocusedHoverBackground": background,
      "tab.border": border,
      "tab.unfocusedActiveBorderTop": border,
      "tab.activeBorder": border,
      "tab.unfocusedActiveBorder": border,
      "tab.activeBorderTop": background,

      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": foreground,
      "breadcrumb.activeSelectionForeground": primer.gray[6],
      "breadcrumbPicker.background": background,

      "editor.foreground": foreground,
      "editor.background": background,
      "editorWidget.background": background,
      "editor.foldBackground": background,
      "editor.lineHighlightBackground": activeBackground,
      "editorLineNumber.foreground": vitesse("ignored"),
      "editorLineNumber.activeForeground": activeForeground,
      "editorIndentGuide.background": pick({
        light: "#eff2f6",
        dark: primer.gray[1],
      }),
      "editorIndentGuide.activeBackground": pick({
        light: "#d7dbe0",
        dark: primer.gray[2],
      }),
      "editorWhitespace.foreground": pick({
        light: primer.gray[3],
        dark: primer.gray[2],
      }),
      // 'editorCursor.foreground': primary,

      "editor.findMatchBackground": pick({
        light: "#e6cc7744",
        dark: "#e6cc7722",
      }),
      "editor.findMatchHighlightBackground": pick({
        light: "#e6cc7766",
        dark: "#e6cc7744",
      }),
      "editor.inactiveSelectionBackground": pick({
        light: "#0366d611",
        dark: "#3392FF22",
      }),
      "editor.selectionBackground": pick({
        light: "#1c6b4820",
        dark: "#4d937520",
      }),
      "editor.selectionHighlightBackground": pick({
        light: "#1c6b4830",
        dark: "#4d937530",
      }),
      "editor.wordHighlightBackground": pick({
        light: "#1c6b4805",
        dark: "#1c6b4805",
      }),
      "editor.wordHighlightStrongBackground": pick({
        light: "#1c6b4810",
        dark: "#1c6b4810",
      }),
      "editorBracketMatch.background": pick({
        light: "#1c6b4820",
        dark: "#4d937520",
      }),

      "diffEditor.insertedTextBackground": pick({
        light: "#1c6b4822",
        dark: "#4d937522",
      }),
      "diffEditor.removedTextBackground": pick({
        light: "#ab595920",
        dark: "#ab595922",
      }),

      "scrollbar.shadow": pick({ light: "#6a737d33", dark: "#0008" }),
      "scrollbarSlider.background": vitesse("faded"),
      "scrollbarSlider.hoverBackground": vitesse("ignored"),
      "scrollbarSlider.activeBackground": vitesse("ignored"),
      "editorOverviewRuler.border": primer.white,

      "panel.background": background,
      "panel.border": border,
      "panelTitle.activeBorder": primary,
      "panelTitle.activeForeground": foreground,
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": pick({
        light: primer.gray[2],
        dark: primer.gray[1],
      }),

      "terminal.foreground": foreground,
      "terminal.ansiBrightBlack": pick({
        light: VitesseThemes.background[0],
        dark: VitesseThemes.foreground[1],
      }),
      "terminal.ansiBrightBlue": vitesse("blue"),
      "terminal.ansiBrightCyan": vitesse("cyan"),
      "terminal.ansiBrightGreen": vitesse("green"),
      "terminal.ansiBrightMagenta": vitesse("magenta"),
      "terminal.ansiBrightRed": vitesse("red"),
      "terminal.ansiBrightWhite": pick({
        light: VitesseThemes.foreground[0],
        dark: VitesseThemes.background[1],
      }),
      "terminal.ansiBrightYellow": vitesse("yellow"),
      "terminal.ansiBlack": pick({
        light: VitesseThemes.background[0],
        dark: VitesseThemes.foreground[1],
      }),
      "terminal.ansiBlue": vitesse("blue"),
      "terminal.ansiCyan": vitesse("cyan"),
      "terminal.ansiGreen": vitesse("green"),
      "terminal.ansiMagenta": vitesse("magenta"),
      "terminal.ansiRed": vitesse("red"),
      "terminal.ansiWhite": pick({
        light: VitesseThemes.foreground[0],
        dark: VitesseThemes.background[1],
      }),
      "terminal.ansiYellow": vitesse("yellow"),

      "gitDecoration.addedResourceForeground": vitesse("green"),
      "gitDecoration.modifiedResourceForeground": vitesse("blue"),
      "gitDecoration.deletedResourceForeground": vitesse("red"),
      "gitDecoration.untrackedResourceForeground": vitesse("cyan"),
      "gitDecoration.ignoredResourceForeground": vitesse("ignored"),
      "gitDecoration.conflictingResourceForeground": vitesse("orange"),
      "gitDecoration.submoduleResourceForeground": vitesse(
        "secondaryForeground"
      ),

      "editorGutter.modifiedBackground": vitesse("blue"),
      "editorGutter.addedBackground": vitesse("green"),
      "editorGutter.deletedBackground": vitesse("red"),

      "debugToolBar.background": background,
      "editor.stackFrameHighlightBackground": pick({
        light: primer.yellow[1],
        dark: "#a707",
      }),
      "editor.focusedStackFrameHighlightBackground": pick({
        light: primer.yellow[2],
        dark: "#b808",
      }),

      "peekViewEditor.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
      "peekViewEditor.background": background,
      "peekViewResult.background": background,

      "settings.headerForeground": foreground,
      "settings.modifiedItemIndicator": primary,
      "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],

      "problemsErrorIcon.foreground": vitesse("red"),
      "problemsWarningIcon.foreground": vitesse("orange"),
      "problemsInfoIcon.foreground": vitesse("blue"),

      "editorError.foreground": vitesse("red"),
      "editorWarning.foreground": vitesse("orange"),
      "editorInfo.foreground": vitesse("blue"),
      "editorHint.foreground": vitesse("green"),

      "editorGutter.commentRangeForeground": vitesse("ignored"),
      "editorGutter.foldingControlForeground": vitesse("secondaryForeground"),
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: vitesse("namespace"),
      interface: vitesse("interface"),
      class: vitesse("class"),
    },
    tokenColors: [
      {
        name: "Changed",
        scope: [
          "markup.changed",
          "meta.diff.header.git",
          "meta.diff.header.from-file",
          "meta.diff.header.to-file",
        ],
        settings: {
          foreground: "#a2bffc",
          fontStyle: "italic",
        },
      },
      {
        name: "Deleted",
        scope: "markup.deleted.diff",
        settings: {
          foreground: "#EF535090",
          fontStyle: "italic",
        },
      },
      {
        name: "Inserted",
        scope: "markup.inserted.diff",
        settings: {
          foreground: "#4876d6ff",
          fontStyle: "italic",
        },
      },
      {
        name: "Global settings",
        settings: {
          background: "#011627",
          foreground: "#403f53",
        },
      },
      {
        name: "Comment",
        scope: "comment",
        settings: {
          foreground: "#989fb1",
          fontStyle: "italic",
        },
      },
      {
        name: "String",
        scope: "string",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "String Quoted",
        scope: ["string.quoted", "variable.other.readwrite.js"],
        settings: {
          foreground: "#c96765",
        },
      },
      {
        name: "Support Constant Math",
        scope: "support.constant.math",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Number",
        scope: ["constant.numeric", "constant.character.numeric"],
        settings: {
          foreground: "#aa0982",
          fontStyle: "",
        },
      },
      {
        name: "Built-in constant",
        scope: [
          "constant.language",
          "punctuation.definition.constant",
          "variable.other.constant",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "User-defined constant",
        scope: ["constant.character", "constant.other"],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Constant Character Escape",
        scope: "constant.character.escape",
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "RegExp String",
        scope: ["string.regexp", "string.regexp keyword.other"],
        settings: {
          foreground: "#5ca7e4",
        },
      },
      {
        name: "Comma in functions",
        scope: "meta.function punctuation.separator.comma",
        settings: {
          foreground: "#5f7e97",
        },
      },
      {
        name: "Variable",
        scope: "variable",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Keyword",
        scope: ["punctuation.accessor", "keyword"],
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Storage",
        scope: [
          "storage",
          "meta.var.expr",
          "meta.class meta.method.declaration meta.var.expr storage.type.js",
          "storage.type.property.js",
          "storage.type.property.ts",
          "storage.type.property.tsx",
        ],
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Storage type",
        scope: "storage.type",
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "Storage type",
        scope: "storage.type.function.arrow.js",
        settings: {
          fontStyle: "",
        },
      },
      {
        name: "Class name",
        scope: ["entity.name.class", "meta.class entity.name.type.class"],
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "Inherited class",
        scope: "entity.other.inherited-class",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Function name",
        scope: "entity.name.function",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Meta Tag",
        scope: ["punctuation.definition.tag", "meta.tag"],
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "HTML Tag names",
        scope: [
          "entity.name.tag",
          "meta.tag.other.html",
          "meta.tag.other.js",
          "meta.tag.other.tsx",
          "entity.name.tag.tsx",
          "entity.name.tag.js",
          "entity.name.tag",
          "meta.tag.js",
          "meta.tag.tsx",
          "meta.tag.html",
        ],
        settings: {
          foreground: "#994cc3",
          fontStyle: "",
        },
      },
      {
        name: "Tag attribute",
        scope: "entity.other.attribute-name",
        settings: {
          fontStyle: "italic",
          foreground: "#4876d6",
        },
      },
      {
        name: "Entity Name Tag Custom",
        scope: "entity.name.tag.custom",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Library (function & constant)",
        scope: ["support.function", "support.constant"],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Support Constant Property Value meta",
        scope: "support.constant.meta.property-value",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Library class/type",
        scope: ["support.type", "support.class"],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Support Variable DOM",
        scope: "support.variable.dom",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Invalid",
        scope: "invalid",
        settings: {
          foreground: "#ff2c83",
        },
      },
      {
        name: "Invalid deprecated",
        scope: "invalid.deprecated",
        settings: {
          foreground: "#d3423e",
        },
      },
      {
        name: "Keyword Operator",
        scope: "keyword.operator",
        settings: {
          foreground: "#0c969b",
          fontStyle: "",
        },
      },
      {
        name: "Keyword Operator Relational",
        scope: "keyword.operator.relational",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Keyword Operator Assignment",
        scope: "keyword.operator.assignment",
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "Keyword Operator Arithmetic",
        scope: "keyword.operator.arithmetic",
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "Keyword Operator Bitwise",
        scope: "keyword.operator.bitwise",
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "Keyword Operator Increment",
        scope: "keyword.operator.increment",
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "Keyword Operator Ternary",
        scope: "keyword.operator.ternary",
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "Double-Slashed Comment",
        scope: "comment.line.double-slash",
        settings: {
          foreground: "#939dbb",
        },
      },
      {
        name: "Object",
        scope: "object",
        settings: {
          foreground: "#cdebf7",
        },
      },
      {
        name: "Null",
        scope: "constant.language.null",
        settings: {
          foreground: "#bc5454",
        },
      },
      {
        name: "Meta Brace",
        scope: "meta.brace",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "Meta Delimiter Period",
        scope: "meta.delimiter.period",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Punctuation Definition String",
        scope: "punctuation.definition.string",
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "Punctuation Definition String Markdown",
        scope: "punctuation.definition.string.begin.markdown",
        settings: {
          foreground: "#bc5454",
        },
      },
      {
        name: "Boolean",
        scope: "constant.language.boolean",
        settings: {
          foreground: "#bc5454",
        },
      },
      {
        name: "Object Comma",
        scope: "object.comma",
        settings: {
          foreground: "#ffffff",
        },
      },
      {
        name: "Variable Parameter Function",
        scope: "variable.parameter.function",
        settings: {
          foreground: "#0c969b",
          fontStyle: "",
        },
      },
      {
        name: "Support Type Property Name & entity name tags",
        scope: [
          "support.type.vendor.property-name",
          "support.constant.vendor.property-value",
          "support.type.property-name",
          "meta.property-list entity.name.tag",
        ],
        settings: {
          foreground: "#0c969b",
          fontStyle: "",
        },
      },
      {
        name: "Entity Name tag reference in stylesheets",
        scope: "meta.property-list entity.name.tag.reference",
        settings: {
          foreground: "#57eaf1",
        },
      },
      {
        name: "Constant Other Color RGB Value Punctuation Definition Constant",
        scope: "constant.other.color.rgb-value punctuation.definition.constant",
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Constant Other Color",
        scope: "constant.other.color",
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Keyword Other Unit",
        scope: "keyword.other.unit",
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Meta Selector",
        scope: "meta.selector",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Entity Other Attribute Name Id",
        scope: "entity.other.attribute-name.id",
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Meta Property Name",
        scope: "meta.property-name",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Doctypes",
        scope: ["entity.name.tag.doctype", "meta.tag.sgml.doctype"],
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Punctuation Definition Parameters",
        scope: "punctuation.definition.parameters",
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "Keyword Control Operator",
        scope: "keyword.control.operator",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Keyword Operator Logical",
        scope: "keyword.operator.logical",
        settings: {
          foreground: "#994cc3",
          fontStyle: "",
        },
      },
      {
        name: "Variable Instances",
        scope: [
          "variable.instance",
          "variable.other.instance",
          "variable.readwrite.instance",
          "variable.other.readwrite.instance",
          "variable.other.property",
        ],
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Variable Property Other object property",
        scope: ["variable.other.object.property"],
        settings: {
          foreground: "#111111",
          fontStyle: "italic",
        },
      },
      {
        name: "Variable Property Other object",
        scope: ["variable.other.object.js"],
        settings: {
          fontStyle: "",
        },
      },
      {
        name: "Entity Name Function",
        scope: ["entity.name.function"],
        settings: {
          foreground: "#4876d6",
          fontStyle: "italic",
        },
      },
      {
        name:
          "Keyword Operator Comparison, imports, returns and Keyword Operator Ruby",
        scope: [
          "keyword.operator.comparison",
          "keyword.control.flow.js",
          "keyword.control.flow.ts",
          "keyword.control.flow.tsx",
          "keyword.control.ruby",
          "keyword.control.module.ruby",
          "keyword.control.class.ruby",
          "keyword.control.def.ruby",
          "keyword.control.loop.js",
          "keyword.control.loop.ts",
          "keyword.control.import.js",
          "keyword.control.import.ts",
          "keyword.control.import.tsx",
          "keyword.control.from.js",
          "keyword.control.from.ts",
          "keyword.control.from.tsx",
          "keyword.operator.instanceof.js",
          "keyword.operator.expression.instanceof.ts",
          "keyword.operator.expression.instanceof.tsx",
        ],
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Keyword Control Conditional",
        scope: [
          "keyword.control.conditional.js",
          "keyword.control.conditional.ts",
          "keyword.control.switch.js",
          "keyword.control.switch.ts",
        ],
        settings: {
          foreground: "#994cc3",
          fontStyle: "",
        },
      },
      {
        name:
          "Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords",
        scope: [
          "support.constant",
          "keyword.other.special-method",
          "keyword.other.new",
          "keyword.other.debugger",
          "keyword.control",
        ],
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Support Function",
        scope: "support.function",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Invalid Broken",
        scope: "invalid.broken",
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Invalid Unimplemented",
        scope: "invalid.unimplemented",
        settings: {
          foreground: "#8BD649",
        },
      },
      {
        name: "Invalid Illegal",
        scope: "invalid.illegal",
        settings: {
          foreground: "#c96765",
        },
      },
      {
        name: "Language Variable",
        scope: "variable.language",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Support Variable Property",
        scope: "support.variable.property",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Variable Function",
        scope: "variable.function",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Variable Interpolation",
        scope: "variable.interpolation",
        settings: {
          foreground: "#ec5f67",
        },
      },
      {
        name: "Meta Function Call",
        scope: "meta.function-call",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Punctuation Section Embedded",
        scope: "punctuation.section.embedded",
        settings: {
          foreground: "#d3423e",
        },
      },
      {
        name: "Punctuation Tweaks",
        scope: [
          "punctuation.terminator.expression",
          "punctuation.definition.arguments",
          "punctuation.definition.array",
          "punctuation.section.array",
          "meta.array",
        ],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "More Punctuation Tweaks",
        scope: [
          "punctuation.definition.list.begin",
          "punctuation.definition.list.end",
          "punctuation.separator.arguments",
          "punctuation.definition.list",
        ],
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "Template Strings",
        scope: "string.template meta.template.expression",
        settings: {
          foreground: "#d3423e",
        },
      },
      {
        name: "Backtics(``) in Template Strings",
        scope: "string.template punctuation.definition.string",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "Italics",
        scope: "italic",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Bold",
        scope: "bold",
        settings: {
          foreground: "#4876d6",
          fontStyle: "bold",
        },
      },
      {
        name: "Quote",
        scope: "quote",
        settings: {
          foreground: "#697098",
          fontStyle: "italic",
        },
      },
      {
        name: "Raw Code",
        scope: "raw",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "CoffeScript Variable Assignment",
        scope: "variable.assignment.coffee",
        settings: {
          foreground: "#31e1eb",
        },
      },
      {
        name: "CoffeScript Parameter Function",
        scope: "variable.parameter.function.coffee",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "CoffeeScript Assignments",
        scope: "variable.assignment.coffee",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "C# Readwrite Variables",
        scope: "variable.other.readwrite.cs",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "C# Classes & Storage types",
        scope: ["entity.name.type.class.cs", "storage.type.cs"],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "C# Namespaces",
        scope: "entity.name.type.namespace.cs",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Tag names in Stylesheets",
        scope: [
          "entity.name.tag.css",
          "entity.name.tag.less",
          "entity.name.tag.custom.css",
          "support.constant.property-value.css",
        ],
        settings: {
          foreground: "#c96765",
          fontStyle: "",
        },
      },
      {
        name: "Wildcard(*) selector in Stylesheets",
        scope: [
          "entity.name.tag.wildcard.css",
          "entity.name.tag.wildcard.less",
          "entity.name.tag.wildcard.scss",
          "entity.name.tag.wildcard.sass",
        ],
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "CSS Keyword Other Unit",
        scope: "keyword.other.unit.css",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Attribute Name for CSS",
        scope: [
          "meta.attribute-selector.css entity.other.attribute-name.attribute",
          "variable.other.readwrite.js",
        ],
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Elixir Classes",
        scope: [
          "source.elixir support.type.elixir",
          "source.elixir meta.module.elixir entity.name.class.elixir",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Elixir Functions",
        scope: "source.elixir entity.name.function",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Elixir Constants",
        scope: [
          "source.elixir constant.other.symbol.elixir",
          "source.elixir constant.other.keywords.elixir",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Elixir String Punctuations",
        scope: "source.elixir punctuation.definition.string",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Elixir",
        scope: [
          "source.elixir variable.other.readwrite.module.elixir",
          "source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Elixir Binary Punctuations",
        scope: "source.elixir .punctuation.binary.elixir",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Closure Constant Keyword",
        scope: "constant.keyword.clojure",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Go Function Calls",
        scope: "source.go meta.function-call.go",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Go Keywords",
        scope: [
          "source.go keyword.package.go",
          "source.go keyword.import.go",
          "source.go keyword.function.go",
          "source.go keyword.type.go",
          "source.go keyword.struct.go",
          "source.go keyword.interface.go",
          "source.go keyword.const.go",
          "source.go keyword.var.go",
          "source.go keyword.map.go",
          "source.go keyword.channel.go",
          "source.go keyword.control.go",
        ],
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Go Constants e.g. nil, string format (%s, %d, etc.)",
        scope: [
          "source.go constant.language.go",
          "source.go constant.other.placeholder.go",
        ],
        settings: {
          foreground: "#bc5454",
        },
      },
      {
        name: "C++ Functions",
        scope: [
          "entity.name.function.preprocessor.cpp",
          "entity.scope.name.cpp",
        ],
        settings: {
          foreground: "#0c969bff",
        },
      },
      {
        name: "C++ Meta Namespace",
        scope: ["meta.namespace-block.cpp"],
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "C++ Language Primitive Storage",
        scope: ["storage.type.language.primitive.cpp"],
        settings: {
          foreground: "#bc5454",
        },
      },
      {
        name: "C++ Preprocessor Macro",
        scope: ["meta.preprocessor.macro.cpp"],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "C++ Variable Parameter",
        scope: ["variable.parameter"],
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "Powershell Variables",
        scope: ["variable.other.readwrite.powershell"],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Powershell Function",
        scope: ["support.function.powershell"],
        settings: {
          foreground: "#0c969bff",
        },
      },
      {
        name: "ID Attribute Name in HTML",
        scope: "entity.other.attribute-name.id.html",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "HTML Punctuation Definition Tag",
        scope: "punctuation.definition.tag.html",
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "HTML Doctype",
        scope: "meta.tag.sgml.doctype.html",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "JavaScript Classes",
        scope: "meta.class entity.name.type.class.js",
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "JavaScript Method Declaration e.g. `constructor`",
        scope: "meta.method.declaration storage.type.js",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "JavaScript Terminator",
        scope: "terminator.js",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "JavaScript Meta Punctuation Definition",
        scope: "meta.js punctuation.definition.js",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "Entity Names in Code Documentations",
        scope: [
          "entity.name.type.instance.jsdoc",
          "entity.name.type.instance.phpdoc",
        ],
        settings: {
          foreground: "#5f7e97",
        },
      },
      {
        name: "Other Variables in Code Documentations",
        scope: ["variable.other.jsdoc", "variable.other.phpdoc"],
        settings: {
          foreground: "#78ccf0",
        },
      },
      {
        name: "JavaScript module imports and exports",
        scope: [
          "variable.other.meta.import.js",
          "meta.import.js variable.other",
          "variable.other.meta.export.js",
          "meta.export.js variable.other",
        ],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "JavaScript Variable Parameter Function",
        scope: "variable.parameter.function.js",
        settings: {
          foreground: "#7986E7",
        },
      },
      {
        name: "JavaScript[React] Variable Other Object",
        scope: [
          "variable.other.object.js",
          "variable.other.object.jsx",
          "variable.object.property.js",
          "variable.object.property.jsx",
        ],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "JavaScript Variables",
        scope: ["variable.js", "variable.other.js"],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "JavaScript Entity Name Type",
        scope: ["entity.name.type.js", "entity.name.type.module.js"],
        settings: {
          foreground: "#111111",
          fontStyle: "",
        },
      },
      {
        name: "JavaScript Support Classes",
        scope: "support.class.js",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "JSON Property Names",
        scope: "support.type.property-name.json",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "JSON Support Constants",
        scope: "support.constant.json",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "JSON Property values (string)",
        scope: "meta.structure.dictionary.value.json string.quoted.double",
        settings: {
          foreground: "#c789d6",
        },
      },
      {
        name: "Strings in JSON values",
        scope: "string.quoted.double.json punctuation.definition.string.json",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Specific JSON Property values like null",
        scope:
          "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
        settings: {
          foreground: "#bc5454",
        },
      },
      {
        name: "JavaScript Other Variable",
        scope: "variable.other.object.js",
        settings: {
          foreground: "#0c969b",
          fontStyle: "italic",
        },
      },
      {
        name: "Ruby Variables",
        scope: ["variable.other.ruby"],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "Ruby Class",
        scope: ["entity.name.type.class.ruby"],
        settings: {
          foreground: "#c96765",
        },
      },
      {
        name: "Ruby Hashkeys",
        scope: "constant.language.symbol.hashkey.ruby",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Ruby Symbols",
        scope: "constant.language.symbol.ruby",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "LESS Tag names",
        scope: "entity.name.tag.less",
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "LESS Keyword Other Unit",
        scope: "keyword.other.unit.css",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Attribute Name for LESS",
        scope:
          "meta.attribute-selector.less entity.other.attribute-name.attribute",
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Markdown Headings",
        scope: [
          "markup.heading.markdown",
          "markup.heading.setext.1.markdown",
          "markup.heading.setext.2.markdown",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Markdown Italics",
        scope: "markup.italic.markdown",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown Bold",
        scope: "markup.bold.markdown",
        settings: {
          foreground: "#4876d6",
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown Quote + others",
        scope: "markup.quote.markdown",
        settings: {
          foreground: "#697098",
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown Raw Code + others",
        scope: "markup.inline.raw.markdown",
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Markdown Links",
        scope: [
          "markup.underline.link.markdown",
          "markup.underline.link.image.markdown",
        ],
        settings: {
          foreground: "#ff869a",
        },
      },
      {
        name: "Markdown Link Title and Description",
        scope: [
          "string.other.link.title.markdown",
          "string.other.link.description.markdown",
        ],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "Markdown Punctuation",
        scope: [
          "punctuation.definition.string.markdown",
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "meta.link.inline.markdown punctuation.definition.string",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Markdown MetaData Punctuation",
        scope: ["punctuation.definition.metadata.markdown"],
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Markdown List Punctuation",
        scope: ["beginning.punctuation.definition.list.markdown"],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Markdown Inline Raw String",
        scope: "markup.inline.raw.string.markdown",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "PHP Variables",
        scope: ["variable.other.php", "variable.other.property.php"],
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "Support Classes in PHP",
        scope: "support.class.php",
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "Punctuations in PHP function calls",
        scope: "meta.function-call.php punctuation",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "PHP Global Variables",
        scope: "variable.other.global.php",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Declaration Punctuation in PHP Global Variables",
        scope: "variable.other.global.php punctuation.definition.variable",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Language Constants in Python",
        scope: "constant.language.python",
        settings: {
          foreground: "#bc5454",
        },
      },
      {
        name: "Python Function Parameter and Arguments",
        scope: [
          "variable.parameter.function.python",
          "meta.function-call.arguments.python",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Python Function Call",
        scope: [
          "meta.function-call.python",
          "meta.function-call.generic.python",
        ],
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "Punctuations in Python",
        scope: "punctuation.python",
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "Decorator Functions in Python",
        scope: "entity.name.function.decorator.python",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Python Language Variable",
        scope: "source.python variable.language.special",
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Python import control keyword",
        scope: "keyword.control",
        settings: {
          foreground: "#994cc3",
          fontStyle: "italic",
        },
      },
      {
        name: "SCSS Variable",
        scope: [
          "variable.scss",
          "variable.sass",
          "variable.parameter.url.scss",
          "variable.parameter.url.sass",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Variables in SASS At-Rules",
        scope: [
          "source.css.scss meta.at-rule variable",
          "source.css.sass meta.at-rule variable",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "Variables in SASS At-Rules",
        scope: [
          "source.css.scss meta.at-rule variable",
          "source.css.sass meta.at-rule variable",
        ],
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "Attribute Name for SASS",
        scope: [
          "meta.attribute-selector.scss entity.other.attribute-name.attribute",
          "meta.attribute-selector.sass entity.other.attribute-name.attribute",
        ],
        settings: {
          foreground: "#aa0982",
        },
      },
      {
        name: "Tag names in SASS",
        scope: ["entity.name.tag.scss", "entity.name.tag.sass"],
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        name: "SASS Keyword Other Unit",
        scope: ["keyword.other.unit.scss", "keyword.other.unit.sass"],
        settings: {
          foreground: "#994cc3",
        },
      },
      {
        name: "TypeScript[React] Variables and Object Properties",
        scope: [
          "variable.other.readwrite.alias.ts",
          "variable.other.readwrite.alias.tsx",
          "variable.other.readwrite.ts",
          "variable.other.readwrite.tsx",
          "variable.other.object.ts",
          "variable.other.object.tsx",
          "variable.object.property.ts",
          "variable.object.property.tsx",
          "variable.other.ts",
          "variable.other.tsx",
          "variable.tsx",
          "variable.ts",
        ],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "TypeScript[React] Entity Name Types",
        scope: ["entity.name.type.ts", "entity.name.type.tsx"],
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "TypeScript[React] Node Classes",
        scope: ["support.class.node.ts", "support.class.node.tsx"],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "TypeScript[React] Entity Name Types as Parameters",
        scope: [
          "meta.type.parameters.ts entity.name.type",
          "meta.type.parameters.tsx entity.name.type",
        ],
        settings: {
          foreground: "#5f7e97",
        },
      },
      {
        name: "TypeScript[React] Import/Export Punctuations",
        scope: [
          "meta.import.ts punctuation.definition.block",
          "meta.import.tsx punctuation.definition.block",
          "meta.export.ts punctuation.definition.block",
          "meta.export.tsx punctuation.definition.block",
        ],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "TypeScript[React] Punctuation Decorators",
        scope: [
          "meta.decorator punctuation.decorator.ts",
          "meta.decorator punctuation.decorator.tsx",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "TypeScript[React] Punctuation Decorators",
        scope: "meta.tag.js meta.jsx.children.tsx",
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "YAML Entity Name Tags",
        scope: "entity.name.tag.yaml",
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "JavaScript Variable Other ReadWrite",
        scope: ["variable.other.readwrite.js", "variable.parameter"],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "Support Class Component",
        scope: ["support.class.component.js", "support.class.component.tsx"],
        settings: {
          foreground: "#aa0982",
          fontStyle: "",
        },
      },
      {
        name: "Text nested in React tags",
        scope: [
          "meta.jsx.children",
          "meta.jsx.children.js",
          "meta.jsx.children.tsx",
        ],
        settings: {
          foreground: "#403f53",
        },
      },
      {
        name: "TypeScript Classes",
        scope: "meta.class entity.name.type.class.tsx",
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "TypeScript Entity Name Type",
        scope: ["entity.name.type.tsx", "entity.name.type.module.tsx"],
        settings: {
          foreground: "#111111",
        },
      },
      {
        name: "TypeScript Class Variable Keyword",
        scope: [
          "meta.class.ts meta.var.expr.ts storage.type.ts",
          "meta.class.tsx meta.var.expr.tsx storage.type.tsx",
        ],
        settings: {
          foreground: "#994CC3",
        },
      },
      {
        name: "TypeScript Method Declaration e.g. `constructor`",
        scope: [
          "meta.method.declaration storage.type.ts",
          "meta.method.declaration storage.type.tsx",
        ],
        settings: {
          foreground: "#4876d6",
        },
      },
      {
        name: "normalize font style of certain components",
        scope: [
          "meta.property-list.css meta.property-value.css variable.other.less",
          "meta.property-list.scss variable.scss",
          "meta.property-list.sass variable.sass",
          "meta.brace",
          "keyword.operator.operator",
          "keyword.operator.or.regexp",
          "keyword.operator.expression.in",
          "keyword.operator.relational",
          "keyword.operator.assignment",
          "keyword.operator.comparison",
          "keyword.operator.type",
          "keyword.operator",
          "keyword",
          "punctuation.definintion.string",
          "punctuation",
          "variable.other.readwrite.js",
          "storage.type",
          "source.css",
          "string.quoted",
        ],
        settings: {
          fontStyle: "",
        },
      },
    ],
  };
}
