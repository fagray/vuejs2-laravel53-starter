import enrollmentClass from './../classes/enrollment.class.js'
import courseClass from './../classes/course.class.js'
import semesterClass from './../classes/semester.class.js'
import userClass from './../classes/user.class.js'
export default {
	enrollment: enrollmentClass,
	semesters: semesterClass,
	courses: courseClass,
	users: userClass,
	collection: [],
	collectionPartial: [],
	loading: false
}