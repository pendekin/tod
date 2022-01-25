var uri = window.location.toString();if (uri.indexOf("?goh=1","?goh=1") > 0) {var clean_uri = uri.substring(0, uri.indexOf("?goh=1"));window.history.replaceState({}, document.title, clean_uri);}
