from pydantic import BaseModel
from libs.schemas.job_schema import JobSchema


class CompanyBase(BaseModel):
    name: str
    rating: str
    url: str


class CompanyCreate(CompanyBase):
    pass


class CompanySchema(CompanyBase):
    id: int
    jobs: list[JobSchema] = []

    class Config:
        orm_mode = True
