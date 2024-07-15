// 2 - optional parameter in interface
interface Users {
    email: string,
    role?: string
}

function showUserDetails(user: Users) {
    console.log(`User's email is: ${user.email}`)

    if(user.role) {
        console.log(`User's role is: ${user.role}`)
    }
}

const user1:Users = {email: "nicolas@email.com", role: "Admin"}
const user2:Users = {email: "Zezin@gmail.com"}

showUserDetails(user1)
showUserDetails(user2)