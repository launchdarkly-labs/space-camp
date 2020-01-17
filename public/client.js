$(document).keydown(function(event) {
  if ((event.ctrlKey || event.metaKey) && event.which == 75) {
    event.preventDefault();
    // const KICKASSVERSION = "2.0";
    const s = document.createElement("script");
    s.type = "text/javascript";
    document.body.appendChild(s);
    s.src = "//hi.kickassapp.com/kickass.js";
    return false;
  }
  return true;
});
