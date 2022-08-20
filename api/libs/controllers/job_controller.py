from sqlalchemy.orm import Session
from libs.models.job_model import JobModel


class JobController:
    def get_job_by_keyword(self, db: Session, keyword: str):
        """ Gets the jobs that match a keyword
        db: Database client for making request to the database
        keyword: Keyword to look for in the column of keywords
        return: Returns the results that match the keyword
        """
        return db.query(JobModel).filter(JobModel.keywords.contains(keyword)).all()

    def get_jobs(self, db: Session, skip: int = 0, limit: int = 100):
        """ Gets all jobs in the database
        db: Database client for making request to the database
        skip: Staring point
        limit: Limit of request
        return: Returns all the jobs in the database
        """
        return db.query(JobModel).offset(skip).limit(limit).all()
