

const generateUsers = () => {
    let users = []
    for (let counter = 1; counter <= 20; counter++) {
        users.push(faker.helpers.createCard())
    }
    console.log(users)
    users.forEach((x, i) => {
        if (i % 2 === 0) {
            x.isFavorite = true
        }
        else x.isFavorite = false
    })
    return users
}
generateUsers()

const root = document.querySelector('#root')
const hr = React.createElement('hr', null)
ReactDOM.render(hr, root)



const e = React.createElement




class App extends React.Component {
    state = {
        users: []
    };
    toggleFavorite = (ev) => {
        
        //const idx = [...ev.target.parentNode.children]
        console.log(ev.target.id)
        //ev.target.style.color = 'tomato'
        this.state.users.forEach(x => {
            if (x.id === ev.target.id){
                x.isFavorite = !x.isFavorite  
            }
            if (x.isFavorite=== true){
                 ev.target.classList.add('favorite')
             }
             if (x.isFavorite === false){
                ev.target.classList.add('')
            }
            
        })
        //console.log(ev.target.parentNode.children)


    
        console.log('this works')
    }
    render() {
        this.state.users = generateUsers()
        const lis = this.state.users.map((x,i) =>   e('li', {id: i, className: 'listItem', onClick: this.toggleFavorite },e('p',null, x.name), e('p', null, x.username)))
        const app = e('ul', null, lis)
        return app
    }
}
ReactDOM.render(e(App), root,
    () => {
        console.log('I have rendered!');
    })