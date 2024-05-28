<div class="col-lg-4 col-md-6 portfolio-item filter-app">
<div class="portfolio-wrap">
  <img src="assets/img/portfolio/1.jpeg" class="img-fluid" alt="">
  <div class="portfolio-info">
    <h4>Nara</h4>
    <p>Japan</p>
    <div class="portfolio-links">
      <a href="assets/img/portfolio/1.jpeg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Nara, Japan"><i class="bx bx-plus"></i></a>
    </div>
  </div>
</div>
</div>


function generateMediaHTML(sourceFolder, numImages, numVideos, classId) {
  var fileNames = [];

  // Generate image file names
  for (var i = 1; i <= numImages; i++) {
    var fileName = i + ".jpeg";
    fileNames.push(fileName);
  }

  // Generate video file names
  for (var i = 1; i <= numVideos; i++) {
    var fileName = i + ".mp4";
    fileNames.push(fileName);
  }

  var container = document.getElementById("media-container");
  var videoHTML = '';
  var imageHTML = '';

  for (var i = 0; i < fileNames.length; i++) {
    var fileName = fileNames[i];
    var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();

    if (fileExtension === "mp4" || fileExtension === "webm" || fileExtension === "ogg") {
      videoHTML += '<div class="col-lg-4 col-md-6 portfolio-item ' + 'classId' + '"> <div class="portfolio-wrap">' + 
      '<img class="img-fluid" src="' + sourceFolder + fileName + '" alt="">' + 
      '<div class="portfolio-info">'
    <h4>Nara</h4>
    <p>Japan</p>
    <div class="portfolio-links">
      <a href="assets/img/portfolio/1.jpeg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Nara, Japan"><i class="bx bx-plus"></i></a>
    </div>
  </div>
</div>
</div>';
    } else {
      imageHTML += '<div class="item ' + classId + ' col-sm-6 col-md-4 col-lg-4 mb-4">' +
                      '<span></span>' +
                      '<img class="img-fluid" src="' + sourceFolder + fileName + '">' +
                    '</div>';
    }
  }

  container.innerHTML += videoHTML + imageHTML;
}