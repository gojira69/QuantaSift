var reviews1 = [];
var reviews2 = [];
var reviews3 = [];
var reviews4 = [];
var reviews5 = [];
var reviews6 = [];

function submitReview1() {
  var name = document.getElementById("name1").value;
  var rating = document.querySelector('input[name="rating1"]:checked').value;
  var review = document.getElementById("review1").value;
  var newReview = {
    name: name,
    rating: rating,
    review: review,
    artist: "pritam",
  };

  reviews1.push(newReview);

  updateTableHeaders();
  updateReviewsTable();
}

function submitReview2() {
  var name = document.getElementById("name2").value;
  var rating = document.querySelector('input[name="rating2"]:checked').value;
  var review = document.getElementById("review2").value;
  var newReview = {
    name: name,
    rating: rating,
    review: review,
    artist: "imagine dragons",
  };

  reviews2.push(newReview);

  updateTableHeaders();
  updateReviewsTable();
}

function submitReview3() {
  var name = document.getElementById("name3").value;
  var rating = document.querySelector('input[name="rating3"]:checked').value;
  var review = document.getElementById("review3").value;
  var newReview = {
    name: name,
    rating: rating,
    review: review,
    artist: "Coldplay",
  };

  reviews3.push(newReview);

  updateTableHeaders();
  updateReviewsTable();
}

function submitReview4() {
  var name = document.getElementById("name4").value;
  var rating = document.querySelector('input[name="rating4"]:checked').value;
  var review = document.getElementById("review4").value;
  var newReview = {
    name: name,
    rating: rating,
    review: review,
    artist: "Twenty One Pilots",
  };

  reviews4.push(newReview);

  updateTableHeaders();
  updateReviewsTable();
}

function submitReview5() {
  var name = document.getElementById("name5").value;
  var rating = document.querySelector('input[name="rating5"]:checked').value;
  var review = document.getElementById("review5").value;
  var newReview = {
    name: name,
    rating: rating,
    review: review,
    artist: "Ed Sheeran",
  };

  reviews5.push(newReview);

  updateTableHeaders();
  updateReviewsTable();
}

function submitReview6() {
  var name = document.getElementById("name6").value;
  var rating = document.querySelector('input[name="rating6"]:checked').value;
  var review = document.getElementById("review6").value;
  var newReview = {
    name: name,
    rating: rating,
    review: review,
    artist: "5 Seconds of Summer",
  };

  reviews6.push(newReview);

  updateTableHeaders();
  updateReviewsTable();
}

function updateTableHeaders() {
  var reviewsTable = document.getElementById("reviewsTable");
  var thead = reviewsTable.querySelector("thead");
  var headers = ["UserName", "Rating", "Review", "Artist"];
  thead.innerHTML = "";
  var headerRow = thead.insertRow();
  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    var cell = headerRow.insertCell(i);
    cell.innerHTML = header;
  }
}

function updateReviewsTable() {
  var reviewsTable = document.getElementById("reviewsTable");

  for (var i = 0; i < reviews1.length; i++) {
    var review = reviews1[i];
    var row = reviewsTable.insertRow();
    var nameCell = row.insertCell();
    var ratingCell = row.insertCell();
    var reviewCell = row.insertCell();
    var artistCell = row.insertCell();
    nameCell.innerHTML = review.name;
    ratingCell.innerHTML = review.rating;
    reviewCell.innerHTML = review.review;
    artistCell.innerHTML = review.artist;
  }

  for (var i = 0; i < reviews2.length; i++) {
    var review = reviews2[i];
    var row = reviewsTable.insertRow();
    var nameCell = row.insertCell();
    var ratingCell = row.insertCell();
    var reviewCell = row.insertCell();
    var artistCell = row.insertCell();
    nameCell.innerHTML = review.name;
    ratingCell.innerHTML = review.rating;
    reviewCell.innerHTML = review.review;
    artistCell.innerHTML = review.artist;
  }

  for (var i = 0; i < reviews3.length; i++) {
    var review = reviews3[i];
    var row = reviewsTable.insertRow();
    var nameCell = row.insertCell();
    var ratingCell = row.insertCell();
    var reviewCell = row.insertCell();
    var artistCell = row.insertCell();
    nameCell.innerHTML = review.name;
    ratingCell.innerHTML = review.rating;
    reviewCell.innerHTML = review.review;
    artistCell.innerHTML = review.artist;
  }

  for (var i = 0; i < reviews4.length; i++) {
    var review = reviews4[i];
    var row = reviewsTable.insertRow();
    var nameCell = row.insertCell();
    var ratingCell = row.insertCell();
    var reviewCell = row.insertCell();
    var artistCell = row.insertCell();
    nameCell.innerHTML = review.name;
    ratingCell.innerHTML = review.rating;
    reviewCell.innerHTML = review.review;
    artistCell.innerHTML = review.artist;
  }

  for (var i = 0; i < reviews5.length; i++) {
    var review = reviews5[i];
    var row = reviewsTable.insertRow();
    var nameCell = row.insertCell();
    var ratingCell = row.insertCell();
    var reviewCell = row.insertCell();
    var artistCell = row.insertCell();
    nameCell.innerHTML = review.name;
    ratingCell.innerHTML = review.rating;
    reviewCell.innerHTML = review.review;
    artistCell.innerHTML = review.artist;
  }

  for (var i = 0; i < reviews6.length; i++) {
    var review = reviews6[i];
    var row = reviewsTable.insertRow();
    var nameCell = row.insertCell();
    var ratingCell = row.insertCell();
    var reviewCell = row.insertCell();
    var artistCell = row.insertCell();
    nameCell.innerHTML = review.name;
    ratingCell.innerHTML = review.rating;
    reviewCell.innerHTML = review.review;
    artistCell.innerHTML = review.artist;
  }
}
