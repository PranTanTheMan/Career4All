import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine(os.environ["DATABASE_URL"])

# conn = engine.connect()

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

""" TO DROP TABLES IN TESTING
WARNING THE FOLLOWING WILL DESTROY THE TABLE
ITS ONLY INTENDED IN TESTING OF RECREATING TABLES AND DELETING ON VALUES
"""
# sql = 'DROP TABLE IF EXISTS table_name;'
# engine.execute(sql)
