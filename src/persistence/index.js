import * as ExpoSQLite  from 'expo-sqlite'

const db = ExpoSQLite.openDatabaseSync("sessions.db");
export const initSQLiteDB = () => {
    const promise = new Promise ((resolve, reject) =>{
        db.withTransactionSync(()=>{
            resolve(db.execSync(
                'CREATE TABLE IF NOT EXISTS activeSession (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);'
            ))
        })
    })
    return promise
}

export const insertSession = ({email, localId, token})=>{
    const promise = new Promise ((resolve, reject) =>{
        db.withTransactionSync(()=>{
            resolve(db.execSync(
                'INSERT INTO activeSession (localId, email, token) VALUES (?,?,?);'
            ))
        })
    })
    return promise
}

export const getSession = async() => {
    const promise = new Promise ((resolve, reject) =>{
        try {
            
                db.withTransactionAsync(async()=>{
                    await db.execAsync(
                        'SELECT * FROM activeSession'
                    )
                })
            
        } catch (error) {
            reject(error)
        }
        
    })
    return promise
}

export const truncateSessionTable = () =>{
    const promise = new Promise ((resolve, reject) =>{
        db.withTransactionSync(()=>{
            resolve(db.execSync(
                'DELETE FROM activeSession'
            ))
        })
    })
    return promise
}