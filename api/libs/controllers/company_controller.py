from sqlalchemy.orm import Session
from libs.schemas.job_schema import JobSchema
from libs.models.job_model import JobModel
from libs.models.company_model import CompanyModel
from libs.schemas.company_schema import CompanySchema


class CompanyController:
    def create_company_job(self, db: Session, job: JobSchema, company_id: int):
        """ Creates a job entry from a company
        db: Database client for making database requests
        job: Dictionary with all of the job schema data
        company_id: Id of the company to create the job entry for
        return: Returns the new job entry created
        """
        new_job = JobModel(**job.dict(), company_id=company_id)
        db.add(new_job)
        db.commit()
        db.refresh(new_job)
        return new_job

    def create_company(self, db: Session, company: CompanySchema):
        """ Creates a new company in the database
        db: Database client for making database requests
        company: Dictionary with all of the data describe in the schema
        """
        new_company = CompanyModel(
            name=company.name,
            rating=100,
            url=company.url
        )
        db.add(new_company)
        db.commit()
        db.refresh(new_company)
        return new_company

    def get_company_by_name(self, db: Session, company_name: str):
        """ Returns the company that matches the name
        db: Database client for making database requests
        company_name: Name of the company to search and return
        return: The company found
        """
        return db.query(CompanyModel).filter(CompanyModel.name == company_name).first()

    def get_company(self, db: Session, company_id: int):
        """ Returns a company that matches the id in the search
        db: Database client for making database requests
        company_id: Id of the company we are looking for
        return: Company that matches the id
        """
        return db.query(CompanyModel).filter(CompanyModel.id == company_id).first()

    def get_companies(self, db: Session, skip: int = 0, limit: int = 100):
        """ Gets all the companies in the database
        db: Database client for making database requests
        skip: Starting point
        limit: Limit of results per request
        return: All Companies
        """
        return db.query(CompanyModel).offset(skip).limit(limit).all()
