from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import logging

# Create the main app
app = FastAPI(title="Portfolio Backend", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Simple in-memory storage (no database needed!)
portfolio_data = {
    "personal": {
        "name": "Your Name",
        "title": "Data Science Graduate", 
        "tagline": "Transforming data into actionable insights",
        "bio": "Passionate data scientist with expertise in machine learning and analytics.",
        "email": "your.email@example.com",
        "phone": "+1 (555) 123-4567",
        "location": "Your City, State",
        "linkedin": "linkedin.com/in/yourprofile",
        "github": "github.com/yourusername",
        "portfolio": "yourwebsite.com"
    },
    "projects": [],
    "skills": {"programming": [], "dataScience": [], "tools": []},
    "experience": [],
    "education": [],
    "certifications": [],
    "achievements": [],
    "hobbies": []
}


# Simple routes

@api_router.get("/")
async def root():
    return {"message": "Portfolio Backend is running!"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "database": "not_required"}


@api_router.get("/portfolio")
async def get_portfolio():
    return portfolio_data

@api_router.put("/portfolio")
async def update_portfolio(data: Dict[str, Any]):
    global portfolio_data
    portfolio_data.update(data)
    return {"message": "Portfolio updated successfully", "data": portfolio_data}

# Include the router in the main app
app.include_router(api_router)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
