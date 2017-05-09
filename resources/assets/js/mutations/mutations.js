import course from './course_mutations'
export default {
	increment (state) {
      state.count++
    },
    decrement(state){
    	state.count--
    },
    ... course
}