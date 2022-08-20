from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db import Base


class JobModel(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    description = Column(String, index=True)
    title = Column(String, index=True)
    url = Column(String, index=True)
    salary = Column(String, index=True)
    keywords = Column(String, index=True)

    owner = relationship("CompanyModel", back_populates="jobs")
