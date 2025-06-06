const jsBangla = {
  "let": "let মানে block-scoped variable",
  "const": "const মানে একবার assign করলে আর পরিবর্তন হয় না",
  "{}": "{} মানে খালি object",
  "[]": "[] মানে খালি array",
  "function": "function মানে কাজের block",
  "=>": "Arrow function",
  "var": "var মানে function-scoped variable (পুরোনো style)",
  "for": "for loop দিয়ে repeat করা হয়",
  "if": "if দিয়ে শর্ত দেওয়া হয়"
};

document.querySelectorAll("code, pre, span").forEach(el => {
  const text = el.innerText.trim();
  for (const keyword in jsBangla) {
    if (text.includes(keyword)) {
      el.title = jsBangla[keyword];
      el.style.borderBottom = "1px dashed red";
      el.style.cursor = "help";
    }
  }
});
