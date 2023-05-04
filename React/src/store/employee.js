const empSlice = createSlice({
  name:"Employee",
  initialState:[],
  reducers:{
    addEmp:(state,action){
      // xyz
    },
    removeEmp:(state,action){
      // xyz
    }
  }

})
export const {addEmp,removeEmp} = empSlice.actions;
export default empSlice.reducers;