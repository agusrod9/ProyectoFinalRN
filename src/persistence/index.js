import * as ExpoSQLite  from 'expo-sqlite'

const db = ExpoSQLite.openDatabase('sessions.db');

export const initSQLiteDB = () => {
    const promise = new Promise ((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS activeSession (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);',
                [],
                (_,result)=> resolve(result),
                (_,error) => reject(error)
            )
        })
    })
    return promise
}

export const insertSession = ({email, localId, token})=>{
    const promise = new Promise ((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                'INSERT INTO activeSession (localId, email, token) VALUES (?,?,?);',
                [localId, email, token], //to aboid sql injection
                (_,result)=> resolve(result),
                (_,error) => reject(error)
            )
        })
    })
    return promise
}

export const getSession = () => {
    const promise = new Promise ((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM activeSession',
                [],
                (_,result)=> resolve(result),
                (_,error) => reject(error)
            )
        })
    })
    return promise
}

export const truncateSessionTable = () =>{
    const promise = new Promise ((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                'DELETE FROM activeSession',
                [],
                (_,result)=> resolve(result),
                (_,error) => reject(error)
            )
        })
    })
    return promise
}