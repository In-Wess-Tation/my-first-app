import Localbase from "localbase";


const LocalBase = () => {

    let myDatabase = new Localbase('myDatabase');

    const insertIntoDB = () => {
        myDatabase.collection('users').add({
            id: 123567890, 
            name: "Buster", 
            age: 27,
        })
    }

    const getFromDB = () => {
        myDatabase.collection('users').get().then(users => console.log(users))
    }

    const removeCollection = () => {
        myDatabase.collection('users').delete()
    }

    return ( 
        <section>
            <button onClick={insertIntoDB}>Add a user to the database</button>
            <button onClick={getFromDB}>Get all user's from the database</button>
            <button onClick={removeCollection}>Delete all users</button>
        </section>
     );
}
 
export default LocalBase;