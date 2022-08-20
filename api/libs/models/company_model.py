from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from db import Base


class CompanyModel(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    rating = Column(Integer, index=True)
    url = Column(String, index=True)

    jobs = relationship("JobModel", back_populates="owner")
