var uri = window.location.toString();if (uri.indexOf("?goto=1","?goto=1") > 0) {var clean_uri = uri.substring(0, uri.indexOf("?goto=1"));window.history.replaceState({}, document.title, clean_uri);}
