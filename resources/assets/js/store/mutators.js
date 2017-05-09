
/*
|--------------------------------------------------------------------------
| ROUTER MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to the router
|
*/
	export const EDIRECT = function (state, router, url){
		
		//Should be something like:
		//router.go(url);
	},

	export const EDIRECT_BACK = function (state){
		window.history.back();
	},

	export const SET_PAGE_TITLE = function (state, title){
		state.pageTitle = title
	},

	export const SET_LAST_PAGE = function (state, url){
		state.lastPage = url
	},

/*
|--------------------------------------------------------------------------
| LOADING MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to loading
|
*/
	export const TART_LOADING = function (state){
		//NProgress.start();
		state.loading = true;
	},
	export const ONE_LOADING = function (state){
		//NProgress.done();
		state.loading = false;
	},

	export const OADING_RESOURCE  = function (state, resource, inProgress){
		//If loading is not in progress, the 'loading' attribute is false
		state[resource].loading = inProgress;
		state.loading = inProgress;
	},
	export const ESOURCE_TIMESTAMP  = function (state, resource){
		var rightNow = Date.now();
		state[resource].timestamp = rightNow;
	},

	
/*
|--------------------------------------------------------------------------
| AUTH MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to authentication
|
*/
	export const SER_LOGIN_ATTEMPT  = function (state){
		state.auth.authenticating = true;
	},
	export const SER_LOGIN_SUCCESS  = function (state, user, context){
		state.auth.user = user;
		state.auth.authenticating = false;

		if( ! user.authenticated ){
			context.$router.go('login');
		}
	},

	export const SER_LOGIN_FAIL  = function (state, err){
		state.errors.push(err);
		state.auth.authenticating = false;
	},

	export const SER_LOGOUT  = function (state){
		state.auth.user = {
			authenticated: false,
			roles: [],
			permissions: []
		}
	},


/*
|--------------------------------------------------------------------------
| USER MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to users
|
*/
	export const REATE_USER  = function (state, userData){
		state.users.collection.push(userData)
	},
	export const PDATE_USER  = function (state, userData){
		let ind = _indexById(state.users.collection, userData.id, 'id');
		state.users.collection.splice(ind, 1);
		state.users.collection.push(userData);
	},
	export const ESTROY_USER  = function (state, id){
		let ind = _indexById(state.users.collection, id, 'id');
		state.users.collection.splice(ind, 1);
	},
	export const SET_USERS  = function (state, users){
		state.users.collection = users
	},
	export const SET_USER  = function (state, user){
		state.users.user = user
	},


/*
|--------------------------------------------------------------------------
| ROLE MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to roles
|
*/
	export const SET_ROLES  = function (state, roles){
		state.roles.collection = roles
	},
	export const SET_ROLE  = function (state, role){
		state.roles.role = role
	},
	export const REATE_ROLE  = function (state, roleData){
		state.roles.collection.push(roleData);
		state.auth.user.roles.push(roleData);
	},
	export const PDATE_ROLE  = function (state, roleData){
		let ind = _indexById(state.roles.collection, roleData.ID, 'ID');
		
		if( ind !== -1 ){
			state.roles.collection.splice(ind, 1);
			state.roles.collection.push(roleData);
		}
	},
	export const ESTROY_ROLE  = function (state, id){
		let ind = _indexById(state.roles.collection, id, 'ID');
		if( ind !== -1 ){
			state.roles.collection.splice(ind, 1);
		}

		let ind_roles = _indexById(state.roles.collection, id, 'ID');
		let ind_userroles = _indexById(state.auth.user.roles, id, 'ID');

		state.roles.collection.splice(ind_roles, 1);
		state.auth.user.roles.splice(ind_userroles, 1);

		//Find all the children of the roles we're destroying
		let toDestroy = [];
		$.each(state.roles.collection, function(key, value){
			if( ! value || value.parent === null){
				return;
			}

			let p = value.parent;
			let pid = value.parent.ID;
			if( pid - id !== 0 ){
				return;
			}

			toDestroy.push(value);
		});
		
		//Recursively destroy all of the children
		$.each(toDestroy, function(key, value){
			mutations.DESTROY_ROLE(state, value);
		});
	},

/*
|--------------------------------------------------------------------------
| PERMISSION MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to permissions
|
*/
	export const SET_PERMISSIONS  = function (state, permissions){
		state.permissions.collection = permissions
	},
	export const SET_PERMISSION  = function (state, permission){
		state.permissions.permission = permission
	},
	export const REATE_PERMISSION  = function (state, permData){
		state.permissions.collection.push(permData)
		state.auth.user.permissions.push(permData)
	},
	export const PDATE_PERMISSION  = function (state, permData){
		let ind = _indexById(state.permissions.collection, permData.ID, 'ID');
		state.permissions.collection.splice(ind, 1);
		state.permissions.collection.push(permData);
	},
	export const ESTROY_PERMISSION  = function (state, permission){
		let id = permission.ID;

		let ind_perms = _indexById(state.permissions.collection, id, 'ID');
		let ind_userperms = _indexById(state.auth.user.permissions, id, 'ID');

		state.permissions.collection.splice(ind_perms, 1);
		state.auth.user.permissions.splice(ind_userperms, 1);

		$.each(state.roles.collection, function(key, value){
			let ind = _indexById(value.permissions, id, 'ID');
			if( ind !== -1 ){
				value.permissions.splice(ind, 1)
			}
		});

		//Find all the children of the permission we're destroying
		let toDestroy = [];
		$.each(state.permissions.collection, function(key, value){
			if( ! value || value.parent === null){
				return;
			}

			let p = value.parent;
			let pid = value.parent.ID;
			if( pid - id !== 0 ){
				return;
			}

			toDestroy.push(value);
		});
		
		//Recursively destroy all of the children
		$.each(toDestroy, function(key, value){
			mutations.DESTROY_PERMISSION(state, value);
		});

	},


/*
|--------------------------------------------------------------------------
| COURSES MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to COURSES 
|
*/
//#############COURSE###################

	export const REATE_COURSE  = function (state, courseData){
		state.courses.push(courseData)
	},
	export const PDATE_COURSE  = function (state, courseData){

		function _searchById(course){
			return course.id === courseData.id
		};

		var index = state.courses.findIndex(_searchById);
		state.courses.splice(index, 1);
		state.courses.push(courseData);
	},
	export const ESTROY_COURSE  = function (state, id){
		let ind = _indexById(state.courses.collection, id, 'id');
		state.courses.collection.splice(ind, 1);
	},
	export const SET_COURSES  = function (state, courses){
		state.courses.collection = courses
	},
	export const SET_COURSE  = function (state, course){
		state.courses.course = course
	},
	//################################

/*
|--------------------------------------------------------------------------
| TIMEZONE MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to timezones
|
*/
	export const SET_TIMEZONES  = function (state, timezones){
		state.timezones.collection = timezones
	},


/*
|--------------------------------------------------------------------------
| LOG MUTATIONS
|--------------------------------------------------------------------------
|
| The following mutations are related to logs
|
*/
	export const SET_LOGS  = function (state, logs){
		state.logs.collection = logs;
	},

	export const SET_LOG  = function (state, log){
		state.logs.log = log;
	}

}