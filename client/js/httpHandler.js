


(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  const swimCommandFetcher = () => {

    $.ajax({
      type: 'GET',
      url: serverUrl,
      // contentType: 'application/json',
      // data: dir,
      success: (data) => {
        console.log(data);
        SwimTeam.move(data);
      }
    });
  };

  setInterval(swimCommandFetcher,500);


  // const getBackgroundImage = () => {

  //   $.ajax({
  //     type: 'GET',
  //     url: serverUrl,
  //     // contentType: 'application/json',
  //     // data: dir,
  //     success: (background) => {
  //       console.log(background)
  //     }
  //   });
  // };

  // getBackgroundImage();

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    console.log('hi')
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'serverUrl',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();
    debugger;
    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();


