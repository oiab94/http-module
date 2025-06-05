'use-strict'

const DEFAULT_ISSUE = {
	id: '',
	title: '',
	status: '',
	estimate: 0,
};

/** GET Obtener los issues desde una URL */
async function getIssueData() {
	const API_KEY = generatKey();
	const response = await fetch(
		'https://api.boot.dev/v1/courses_rest_api/learn-http/issues',
		{
			method: 'GET',
			mode: 'cors',
			headers: {
				'X-API-Key': API_KEY,
				'Content-Type': 'application/json',
			},
		});
	console.debug(`GET RESPONSE FROM FETCH: ${typeof response === 'object'}`);
	const issues = await response.json()

	if (typeof issues !== 'object') {
		console.debug(`RETURN DEFAULT_ISSUE OBJECT: `, DEFAULT_ISSUE);
		return DEFAULT_ISSUE;
	}

	console.log(`RETURN ISSUE OBJECT: ${ issues !== undefined }`);
	return issues;
}

/** Generate a API KEY */
function generatKey() {
	const CHARACTER = 'ABCDEF0123456789';
	let result = '';

	for (let index = 0; index < 16; index++) {
		result = result + CHARACTER.charAt(
			Math.floor(
				Math.random() * CHARACTER.length
			)
		);
	}

	console.debug(`API KEY GENERATED: ${result}`);
	return result
}

/** Muestra en consola los issues */
async function logIssues( issues ) {
	let issueData = await issues;

	for (const issue of issueData) {
		console.log(issue.title);
	}
}

/** EJECUTA MAIN */
function main (){
	logIssues(  getIssueData() );
}

( main )()