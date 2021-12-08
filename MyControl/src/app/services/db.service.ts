import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

export class newUser {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DbService {

  // private storage: SQLiteObject;
  // songsList = new BehaviorSubject([]);
  // userList = new BehaviorSubject([])
  // private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // constructor(
  //   private platform: Platform,
  //   private sqlite: SQLite,
  //   private httpClient: HttpClient,
  //   private sqlPorter: SQLitePorter,
  // ) {
  //   this.platform.ready().then(() => {
  //     console.log('app')
  //     this.sqlite.create({
  //       name: 'user_db.db',
  //       location: 'default'
  //     }).then((db: SQLiteObject) => {
  //       console.log('app', db)
  //       this.storage = db;
  //       this.setUpData();
  //     });
  //   });
  // }

  // dbState() {
  //   return this.isDbReady.asObservable();
  // }

  // fetchUsers(): Observable<newUser[]> {
  //   return this.userList.asObservable();
  // }

  // // Render  data
  // setUpData() {
  //   this.httpClient.get(
  //     'assets/database-config.sql',
  //     { responseType: 'text' }
  //   ).subscribe(data => {
  //     this.sqlPorter.importSqlToDb(this.storage, data)
  //       .then(_ => {
  //         this.getUsers()
  //         this.isDbReady.next(true);
  //       })
  //       .catch(error => console.error(error));
  //   });
  // }
  // // Add
  // addUser(params) {
  //   let data = [params.name, params.username, params.password, params.email];
  //   console.log(data)
  //   return this.storage.executeSql('INSERT INTO usertable (name, username , password, email) VALUES (?,?,?,?)',data).then(res =>{
  //       console.log(res)
  //       this.getUsers()
  //     },(error)=>{
  //       console.log(error)
  //     });
  // }
  // getUsers() {
  //   return this.storage.executeSql('SELECT * FROM usertable', []).then(res => {
  //     let items: newUser[] = [];
  //     if (res.rows.length > 0) {                
        
  //       for (var i = 0; i < res.rows.length; i++) { 
  //         items.push({ 
  //           id: res.rows.item(i).id,
  //           name: res.rows.item(i).name,
  //           username: res.rows.item(i).username,
  //           password: res.rows.item(i).password,
  //           email: res.rows.item(i).email,
            
  //          });
  //       }
  //     }      
  //     this.userList.next(items);
  //   });
  // }
  // // Get list
  // getSongs() {
  //   // return this.storage.executeSql('SELECT * FROM songtable', []).then(res => {
  //   //   let items: Song[] = [];
  //   //   if (res.rows.length > 0) {
  //   //     for (var i = 0; i < res.rows.length; i++) { 
  //   //       items.push({ 
  //   //         id: res.rows.item(i).id,
  //   //         artist_name: res.rows.item(i).artist_name,  
  //   //         song_name: res.rows.item(i).song_name
  //   //        });
  //   //     }
  //   //   }
  //   //   this.songsList.next(items);
  //   // });
  // }

  // // Add
  // addSong(artist_name, song_name) {
  //   let data = [artist_name, song_name];
  //   return this.storage.executeSql('INSERT INTO songtable (artist_name, song_name) VALUES (?, ?)', data)
  //     .then(res => {
  //       this.getSongs();
  //     });
  // }

  // // Get single object
  // // getSong(id): Promise<Song> {
  // //   return this.storage.executeSql('SELECT * FROM songtable WHERE id = ?', [id]).then(res => { 
  // //     return {
  // //       id: res.rows.item(0).id,
  // //       artist_name: res.rows.item(0).artist_name,  
  // //       song_name: res.rows.item(0).song_name
  // //     }
  // //   });
  // // }

  // // Update
  // // updateSong(id, song: Song) {
  // //   let data = [song.artist_name, song.song_name];
  // //   return this.storage.executeSql(`UPDATE songtable SET artist_name = ?, song_name = ? WHERE id = ${id}`, data)
  // //   .then(data => {
  // //     this.getSongs();
  // //   })
  // // }

  // // Delete
  // // deleteSong(id) {
  // //   return this.storage.executeSql('DELETE FROM songtable WHERE id = ?', [id])
  // //   .then(_ => {
  // //     this.getSongs();
  // //   });
  // }
}
