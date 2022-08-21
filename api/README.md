<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">API for Career4All</h3>

  <p align="center">
    This is an API for providing job data for companies that emphasize equality and inclusion.
    <br />
    <br />
    <a href="https://career4all-api-prod.herokuapp.com/">Prod URL</a>
    ·
    <a href="https://career4all-api-dev.herokuapp.com/">Dev URL</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

### Built With

- Python
- CockroachDB
- FastAPI
- SQLAlchemy
- Docker
- Heroku

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Python Dependencies

  ```sh
  pip install -r requirements.txt
  ```

- Other Dependencies

```sh
brew install cockroachdb/tap/cockroach # Cockroachdb installation
brew tap heroku/brew && brew install heroku # Heroku CLI installation
```

### Building project locally

Once dependencies are installed run:

```sh
uvicorn main:app --host 0.0.0.0 --port 8080 --debug
```

To Build Docker and run locally do:

```sh
docker build -t my_tag .
docker run -dp 8080:8080 my_tag
```

To Deploy to a Heroku app do

```sh
heroku login
heroku container:login

heroku create <app-name>
heroku git:remote -a <app-name>

heroku container:push web --app <app-name>
heroku container:release web --app <app-name>
```

<!-- USAGE EXAMPLES -->

## Usage

React Examples:

### Get Job Data

```javascript
const getJobs = async () => {
	const jobs = await axios.get(
		'https://career4all-api-prod.herokuapp.com/jobs/'
	);

	return jobs;
};
```

### Get Job by keywords

```javascript
const getJobs = async () => {
	const keywords = 'python developer';
	const jobs = await axios.get(
		`https://career4all-api-prod.herokuapp.com/jobs/${keywords}`
	);

	return jobs;
};
```

### Get Companies

```javascript
const getCompanies = async () => {
	const companies = await axios.get(
		'https://career4all-api-prod.herokuapp.com/company/'
	);

	return companies;
};
```

### Get Company by id

```javascript
const getCompanies = async () => {
	const companyId = 123;
	const company = await axios.get(
		`https://career4all-api-prod.herokuapp.com/company/${companyId}`
	);

	return company;
};
```

### Create Company

```javascript
const createCompany = async () => {
	const company = await axios.post(
		`https://career4all-api-prod.herokuapp.com/company/new`,
		{
			name: 'Company Inc',
			rating: 100,
			url: 'www.companyinc.com',
		}
	);

	return company;
};
```

### Create Company Job

```javascript
const createCompanyJob = async () => {
	const companyId = 123;
	const newJob = await axios.post(
		`https://career4all-api-prod.herokuapp.com/company/${companyId}/jobs/`,
		{
			title: 'Python Developer',
			description: 'Looking for python developer',
			url: 'www.applyhere.com',
			salary: '$100,000',
			keywords: 'python developer',
		}
	);

	return newJob;
};
```
