from env import API_KEY
from serpapi import GoogleSearch


def find_job(position: str, location: str = "NY") -> list:
    """
     Searches for a job position in a specify location with the given parameters
     Request is made to the api to get the data for use
    """

    # Parameters for making api call
    params = {
        "engine": "google_jobs",
        "q": f"{position} {location}",
        "hl": "en",
        "api_key": API_KEY
    }

    # Make Search
    search = GoogleSearch(params)
    results = search.get_dict()

    # Get the results
    jobs = results["jobs_results"]

    return jobs
