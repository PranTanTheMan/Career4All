import requests
from find_jobs import find_job

positions = [
    'python', 'software', 'software developer', 'job', 'Food Science Technician',
    'Conservation Scientist and Forester', 'Logging Equipment Operator', 'full stack',
    'full stack developer', 'Soil and Plant Scientist', 'Natural Sciences Manager',
    'Architect', 'Construction Laborer ', 'Electrician', 'Civil Engineer', 'Surveyor',
    'Art Director', 'Graphic Designer', 'designer', 'Photographer', 'Editor', 'Librarian',
    'teacher', 'coordinator', 'scientist', 'development', 'compliance', 'Legislator',
    'law', 'military', 'physician', 'dental', 'therapist', 'job', 'jobs', 'work',
    'marketing', 'programming', 'javascript', 'full stack', 'go', 'c++', 'unity',
    'code'
]
cities = ['NY', 'NJ', 'CT', 'Boston', 'MA', 'California']
api_url = 'https://career4all-api-dev.herokuapp.com'
equality_keywords = ['inclusion', 'equality', 'equal', 'race',
                     'color', 'gender', 'sex', 'ethnicity', 'country']


def create_company(company_json: dict) -> int:
    request_url = f'{api_url}/company/new'
    res = requests.post(request_url, json=company_json)

    data = res.json()
    company_id = data.get('id', None)

    if not company_id:
        company_name = company_json['name']
        request_url = f'{api_url}/company/name/{company_name}'
        res = requests.get(request_url)
        data = res.json()
        company_id = data['id']

    print(data)
    return company_id


def create_jobs(id: int, job_json: dict) -> None:
    request_url = f'{api_url}/company/{id}/jobs/'
    res = requests.post(request_url, json=job_json)

    data = res.json()
    print(data)


def save_job(jobs: list):
    for job in jobs:
        company_name = job.get('company_name', '')
        title = job.get('title', '')
        location = job.get('location', '')
        description = job.get('description', '')
        url = ''
        salary = ''
        keywords = title+location

        filter_pass = [
            word for word in equality_keywords if word in description]

        if not filter_pass:
            continue

        company_json = {
            'name': company_name,
            'rating': 100,
            'url': ''
        }

        job_json = {
            'title': title,
            'description': description,
            'url': url,
            'salary': salary,
            'keywords': keywords
        }

        id = create_company(company_json)
        create_jobs(id, job_json)


for position in positions:
    for city in cities:
        try:
            jobs = find_job(position, city)
        except Exception as e:
            print(f'There was an error... probably nothing found')
            print(e)

        # Structure data
        save_job(jobs)
