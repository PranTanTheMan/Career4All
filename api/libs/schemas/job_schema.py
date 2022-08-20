from pydantic import BaseModel


class JobBase(BaseModel):
    title: str
    description: str
    url: str
    salary: str
    keywords: str


class JobCreate(JobBase):
    pass


class JobSchema(JobBase):
    id: int
    company_id: int

    class Config:
        orm_mode = True
