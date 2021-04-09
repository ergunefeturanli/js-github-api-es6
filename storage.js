class Storage{

    static getSearchedUsersFromStorage(){
        //Tüm Kullanıcıları Al

        let users

        if(localStorage.getItem('github-project-searched')===null){
            users = []
        }else{
            users = JSON.parse(localStorage.getItem('github-project-searched')
            )
        }
        return users
    }

    static addSearchedUserToStorage(username){
        //Kullanıcıyı Storageye Ekle

        let users = this.getSearchedUsersFromStorage()

        // Daha önceden var mı

        if(users.indexOf(username)===-1){
            users.push(username)
        }
        //Tekrar ekle
        localStorage.setItem('github-project-searched',JSON.stringify(users))
    }

    static clearAllSearchedUsersFromStorage(){
        //Tüm Kullanıcıları Sil

        localStorage.removeItem('github-project-searched')
    }
}