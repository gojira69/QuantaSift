//http://127.0.0.1:5000
//The server is on this one
function Insertion(song_id)
{
  song_tr=document.querySelector("."+song_id);
  //Extract data from row
  song_name=song_tr.querySelector("td:nth-child(2)").textContent;
  song_dur=song_tr.querySelector("td:nth-child(3)").textContent;
  const data = {'id': song_id,'title': song_name,'duration': song_dur};
  fetch('http://127.0.0.1:5000/insert_data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => alert(data.result))
  .catch(error => console.error(error));

}