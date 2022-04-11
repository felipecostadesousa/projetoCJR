let currentPage = 1
const USERS_PER_PAGE = 4
const tbody = document.querySelector('tbody')

function getTotalPages() {
    return Math.ceil(users.length / USERS_PER_PAGE)
}

function getCurrentPagesUsers() {
    const startIndex = (currentPage - 1) * USERS_PER_PAGE
    const endIndex = startIndex + USERS_PER_PAGE

    return users.slice(startIndex, endIndex)
}

function createUserRow() {
    return users.map(user=>{
            let userRow = document.createElement('tr')
            userRow.setAttribute(id='user')

            const userName = document.createElement('th')
            userName.appendChild(document.createTextNode(user.first_name))

            const userEmail = document.createElement('th')
            userEmail.appendChild(document.createTextNode(user.email))

            const userCreatedAt = document.createElement('th')
            userCreatedAt.appendChild(document.createTextNode(user.created_at))

            userRow.appendChild(userName)
            userRow.appendChild(userEmail)
            userRow.appendChild(userCreatedAt)
            return userRow
            })
}

function renderUsers() {

}


function render() {
    const totalPages = getTotalPages()
    console.log('totalPages:', totalPages)
    renderUsers()
//    renderPagination(totalPages)
}

// render()