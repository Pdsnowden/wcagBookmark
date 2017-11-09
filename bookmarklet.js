javascript:(
  void(
    function() {
      var fileRef;
      var loaded = false;

      try {
        loaded = checkDocumentWCAG;
      }
      catch(err){
      }
        if(!loaded){
        fileRef = document.createElement("link");
        fileRef.rel = "stylesheet";
        fileRef.href = "http://localhost/cas233w/week4/lab/wcag.css";
        document.getElementsByTagName("head")[0].appendChild(fileRef);

        fileRef = document.createElement("script");
        fileRef.src = "http://localhost/cas233w/week4/lab/wcag.js";
        fileRef.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(fileRef);
      }else {
        checkDocumentWCAG();
      }
    }()
  )
)
