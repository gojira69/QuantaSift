function display()
{
   fetch('http://127.0.0.1:5000/display', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    const table=document.querySelector("table");
    let i=1;
    console.log(data);
    data.forEach(song => {
        const row=document.createElement("tr");
        row.classList.add(song.ID);
        sno=document.createElement("td");
        sno.textContent=i;
        row.appendChild(sno);
        title=document.createElement("td");
        title.textContent=song.Title;
        row.appendChild(title);
        album=document.createElement("td");
        album.textContent=song.Album;
        row.appendChild(album);
        artist=document.createElement("td");
        artist.textContent=song.Artist;
        row.appendChild(artist);
        duration=document.createElement("td");
        duration.textContent=song.Duration;
        row.appendChild(duration);
        rem=document.createElement("td");
        rem_button=document.createElement("button");
        rem_button.textContent='Remove';
        rem_button.id=song.ID;
        rem_button.setAttribute("onclick","remove_song(this.id);");
        rem.appendChild(rem_button);
        row.appendChild(rem);
        table.append(row);
        i=i+1;
    });
  })
  .catch(error => console.error(error));
}

function remove_song(song_id)
{
    data={'ID':song_id};
    fetch('http://127.0.0.1:5000/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        alert(data.result);
        const table = document.querySelector("table");
        const rows = table.querySelectorAll('tr:not(:first-child)');
        rows.forEach(row => row.remove());
        display();
      })
      .catch(error => console.error(error));
}
display();