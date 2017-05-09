import userStore 		from './store/users'
import roleStore 		from './store/roles'
// import courseStore 		from './store/courses'
import semesterStore 	from './store/semesters'
import enrollmentStore 	from './store/enrollments'
import referralStore 	from './store/referrals'
import reportStore 		from './store/reports'
import permissionStore 	from './store/permissions'
import logStore 		from './store/logs'
import timezoneStore 	from './store/timezones'

export default {
	// auth: auth,
	count:0,
	pageTitle: '',
	lastPage: '',
	timeBeforeLogout: 0,
	loading: true,
	errors: [],
	users: userStore,
	roles: roleStore,
	permissions: permissionStore,
	timezones: timezoneStore,
	logs: logStore,
	// courses: courseStore,
	semesters:semesterStore,
	enrollments:enrollmentStore,
	referrals:referralStore,
	reports:reportStore,
	activeCourse: 0
}