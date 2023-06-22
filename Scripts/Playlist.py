from flask import Flask, request, jsonify
from flask_cors import CORS,cross_origin
import sqlite3
class DBclass:
   def __init__(self, path):
      self.path = path
      self.db = sqlite3.connect(self.path)
      self.cur = self.db.cursor()
   def execute(self, query):
      self.cur.execute(query)
      return self.cur.fetchall()
   def commit(self):
      self.db.commit()
   def close(self):
      self.db.close()

app = Flask(__name__)
cors=CORS(app)

@app.route('/insert_data',methods=['POST'])
@cross_origin()
def insertion():
    db = DBclass("./Scripts/Songs.db")
    song_data=request.get_json()
    t=db.execute(f"SELECT Song_ID FROM Playlist WHERE Song_ID='{song_data['id']}';")
    if t!=[]:
       db.commit()
       db.close()
       return jsonify({'result': 'Song is already in playlist!'})
    db.execute(f'''INSERT INTO Playlist VALUES ('{song_data['id']}',"{song_data['title']}",'{song_data['duration']}');''')
    db.commit()
    db.close()
    return jsonify({'result':'Song added to playlist!'})

@app.route('/display',methods=['GET'])
@cross_origin()
def display():
   db=DBclass("./Scripts/Songs.db")
   data=db.execute(f"SELECT * FROM Playlist;")
   songs=[]
   for i in data:
      artist=db.execute(f"SELECT Artist FROM Artists WHERE Alb_ID='{i[0][:3]}';")[0][0]
      album=db.execute(f"SELECT album FROM Albums WHERE id='{i[0][:3]}';")[0][0]
      song={'ID':i[0],'Title':i[1],'Duration':i[2],'Artist':artist,'Album':album}  
      songs.append(song)
   db.commit()
   db.close()
   return jsonify(songs)

@app.route('/delete',methods=['POST'])
@cross_origin()
def delete():
   db=DBclass("./Scripts/Songs.db")
   song_id=request.get_json()['ID']
   db.execute(f"DELETE FROM Playlist WHERE Song_ID='{song_id}';")
   db.commit()
   db.close()
   return jsonify({'result':'Song removed from playlist.'})

if __name__=='__main__':
    app.run(debug=True)