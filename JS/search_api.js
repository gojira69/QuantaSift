//Fetch query and process it for querying
const s = document.querySelector(".search_bar");
ex_fil = false;
dur_fil = -1;

function fetch_and_display() {
  if (document.contains(document.querySelector("table"))) {
    document.querySelector("table").remove();
  }
  let k = s.value;
  k = k.replace(" ", "+");
  if(k=="")
  {
    return;
  }
  //For fetching and creating a table for it
  fetch('https://itunes.apple.com/search?term=' + k + '&media=music&entity=album,song')
    .then(response => response.json())
    .then(data => {
      // create the table
      const table = document.createElement('table');
      // create and add the table header row
      const headerRow = document.createElement('tr');
      const header1 = document.createElement('th');
      header1.textContent = 'S.No.';
      headerRow.appendChild(header1);
      const header2 = document.createElement('th');
      headerRow.appendChild(header2);
      const header3 = document.createElement('th');
      header3.textContent = 'Name';
      headerRow.appendChild(header3);
      const header4 = document.createElement('th');
      header4.textContent = 'Type';
      headerRow.appendChild(header4);
      const header5 = document.createElement('th');
      header5.textContent = 'Artist';
      headerRow.appendChild(header5);
      const header6 = document.createElement('th');
      header6.textContent = 'Duration';
      headerRow.appendChild(header6);
      const header7 = document.createElement('th');
      header7.textContent = 'Explicit';
      headerRow.appendChild(header7);
      const header8 = document.createElement('th');
      header8.textContent = 'Track Preview';
      headerRow.appendChild(header8);
      table.appendChild(headerRow);

      // iterate over the data and add rows to the table
      let i = 1;
      let count=0;
      for (let j = 0; j < data.resultCount && count<10; j++,count++) {
        if (ex_fil == true && data.results[j].trackExplicitness != "notExplicit") {
          count--;
          continue;
        }
        if (dur_fil > 0) {
          let t_sec = data.results[j].trackTimeMillis / 60000;
          if (t_sec > dur_fil) {
            count--;
            continue;
          }
        }
        // create a new row
        const row = document.createElement('tr');

        // S. No.
        const sno = document.createElement('td');
        sno.textContent = i;
        row.appendChild(sno);
        i = i + 1;
        //Artwork
        const artwork = document.createElement('img');
        artwork.src = data.results[j].artworkUrl60;
        row.appendChild(artwork);
        //Name
        const track = document.createElement('td');
        if (data.results[j].wrapperType == "track") {
          track.textContent = data.results[j].trackName;
        }
        else {
          track.textContent = data.results[j].collectionName;
        }
        row.appendChild(track);
        //Result type 
        const ty = document.createElement('td');
        if (data.results[j].wrapperType == "track") {
          ty.textContent = "Song";
        }
        else {
          ty.textContent = "Album";
        }
        row.appendChild(ty);
        const artist = document.createElement('td');
        artist.textContent = data.results[j].artistName;
        row.appendChild(artist);
        //Duration
        const duration = document.createElement('td');
        if (data.results[j].wrapperType == "track") {

          let t_sec = data.results[j].trackTimeMillis / 1000;
          if (Math.trunc(t_sec % 60) < 10) {
            duration.textContent = Math.trunc(t_sec / 60) + ':0' + Math.trunc(t_sec % 60);
          }
          else {
            duration.textContent = Math.trunc(t_sec / 60) + ':' + Math.trunc(t_sec % 60);
          }
        }
        row.appendChild(duration);
        //Explicitness
        const exp = document.createElement('td');
        let et = data.results[j].trackExplicitness;
        if (et != "notExplicit") {
          exp.textContent = "Yes";
        }
        else {
          exp.textContent = "No";
        }
        row.appendChild(exp);
        //Audio snippet
        if (data.results[j].wrapperType == "track") {
          const preview = document.createElement('audio');
          preview.controls = "";
          preview.setAttribute("src", data.results[j].previewUrl);
          preview.setAttribute("controls", "");
          preview.setAttribute("type", "audio/m4a");
          row.appendChild(preview);
        }
        table.appendChild(row);
      }
      // add the table to the page
      document.body.appendChild(table);
    })
    .catch(error => console.error(error));
}
function filter_ex() {
  console.log("Hi");
  if (document.querySelector("#hide-explicit").checked == true)
    ex_fil = true;
  else
    ex_fil = false;
}
function filter() {
  let temp = document.querySelector("#duration").value;
  console.log(temp);
  if (temp != "") {
    dur_fil=Number(temp);
  }
  fetch_and_display();
}
function clear_filter()
{
  ex_fil=false;
  document.querySelector("#hide-explicit").checked=false;
  document.querySelector("#duration").value="";
  dur_fil=-1;
  fetch_and_display();
}