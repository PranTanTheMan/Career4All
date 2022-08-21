from sqlalchemy.orm import Session
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from db import engine, SessionLocal, Base

# Controllers
from libs.controllers.company_controller import CompanyController
from libs.controllers.job_controller import JobController

# Models and Schemas
from libs.models.job_model import JobModel
from libs.models.company_model import CompanyModel
from libs.schemas.company_schema import CompanySchema, CompanyCreate
from libs.schemas.job_schema import JobSchema, JobCreate

# Create Data Tables
Base.metadata.create_all(bind=engine)

# Initialize fastapi app
app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

# Dependency


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Controller handlers
company_handler = CompanyController()
job_handler = JobController()

# Routes

""" JOB ROUTES """


@app.get("/jobs/{keywords}", response_model=list[JobSchema])
def read_jobs(keywords: str, db: Session = Depends(get_db)):
    db_jobs = job_handler.get_job_by_keyword(db, keywords)
    return db_jobs


@app.get("/jobs/", response_model=list[JobSchema])
def read_jobs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    db_jobs = job_handler.get_jobs(db, skip, limit)
    return db_jobs


""" COMPANY ROUTES """


@app.get("/company/name/{company_name}", response_model=CompanySchema)
def read_company_by_name(company_name: str, db: Session = Depends(get_db)):
    company = company_handler.get_company_by_name(db, company_name)

    if not company:
        raise HTTPException(
            status_code=404, detail=f"There is no company with this name: {company_name}")

    return company


@app.post("/company/{company_id}/jobs/", response_model=JobSchema)
def create_company_job(company_id: int, job: JobCreate, db: Session = Depends(get_db)):
    return company_handler.create_company_job(db, job, company_id)


@app.get("/company/{company_id}", response_model=CompanySchema)
def read_company(company_id: int, db: Session = Depends(get_db)):
    db_company = company_handler.get_company(db, company_id)

    if not db_company:
        raise HTTPException(
            status_code=404, detail=f"There is no company with this id: {company_id}")

    return db_company


@app.get("/company/", response_model=list[CompanySchema])
def read_companies(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    db_companies = company_handler.get_companies(db, skip, limit)
    return db_companies


@app.post("/company/new", response_model=CompanySchema)
def create_company(company: CompanyCreate, db: Session = Depends(get_db)):
    db_company = company_handler.get_company_by_name(
        db, company_name=company.name
    )

    if db_company:
        raise HTTPException(
            status_code=400, detail="Company Name already registered")

    return company_handler.create_company(db=db, company=company)
