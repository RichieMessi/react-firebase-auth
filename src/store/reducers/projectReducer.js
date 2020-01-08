const initState = {
    projects: [
        {id: '1', title: 'Title Number 1', content: 'I am the father of ice'},
        {id: '2', title: 'Title Number 2', content: 'I am the father of fire'},
        {id: '3', title: 'Title Number 3', content: 'I am the father of wind'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {

        case 'CREATE_PROJECT':
            console.warn('created project', action.project)
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.warn('create project error', action.err)
            return state;
        
        default: 
            return state;
    }
    // return state
}

export default projectReducer