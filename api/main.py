from libs.controllers.jobfinder_controller import find_jobs
from env import API_KEY

jobs = find_jobs(API_KEY, "javascript", "new jersey")
print(jobs)
