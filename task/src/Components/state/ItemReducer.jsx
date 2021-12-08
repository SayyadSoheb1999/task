const initialState={
    data:[{id:1,title:'react js',desc:"front end developer",exp:'2'},
    {id:2,title:'node js',desc:"web developer",exp:'1'},
    {id:3,title:'next js',desc:"front end developer",exp:'3'},
    {id:4,title:'angular',desc:"UI developer",exp:'4'}]
};


export const ItemReducer =(state={data:[...initialState.data],},action)=>{
    switch(action.type){
        case "AddData" :
            return{
                ...state,
                data : [...action.data] 
            }
        default : return state;
    }
    
    
}