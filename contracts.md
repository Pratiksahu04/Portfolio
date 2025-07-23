# Portfolio Website - Frontend/Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for the Data Science Portfolio website. The frontend is currently using mock data from `/src/data/mock.js` and needs to be integrated with a backend API for dynamic content management.

## Current Frontend State
- ✅ Complete frontend implementation with all sections
- ✅ Mock data for demonstration purposes
- ✅ Responsive design with BigFish design system
- ✅ Navigation and interactive elements working
- ✅ All sections: Hero, Projects, Skills, Experience, Education, Certifications, Achievements, Hobbies, Contact

## Backend API Endpoints to Implement

### 1. Portfolio Data Management
```
GET /api/portfolio/personal
Response: Personal information (name, title, bio, contact details)

PUT /api/portfolio/personal
Body: Updated personal information
Response: Updated personal data
```

### 2. Projects Management
```
GET /api/projects
Response: Array of projects with full details

POST /api/projects
Body: New project data
Response: Created project object

PUT /api/projects/:id
Body: Updated project data
Response: Updated project object

DELETE /api/projects/:id
Response: Success confirmation
```

### 3. Skills Management
```
GET /api/skills
Response: Categorized skills with proficiency levels

PUT /api/skills
Body: Updated skills data
Response: Updated skills object
```

### 4. Experience & Education
```
GET /api/experience
Response: Array of work experience entries

GET /api/education
Response: Array of education entries

POST /api/experience
Body: New experience entry
Response: Created experience object

POST /api/education
Body: New education entry
Response: Created education object
```

### 5. Certifications & Achievements
```
GET /api/certifications
Response: Array of certification objects

GET /api/achievements
Response: Array of achievement objects

POST /api/certifications
Body: New certification data
Response: Created certification object

POST /api/achievements
Body: New achievement data
Response: Created achievement object
```

### 6. Hobbies
```
GET /api/hobbies
Response: Array of hobbies/interests

PUT /api/hobbies
Body: Updated hobbies array
Response: Updated hobbies data
```

### 7. Contact Form
```
POST /api/contact
Body: { name, email, subject, message }
Response: Success/error message
```

## Database Schema Design

### Collections/Tables Needed:

1. **portfolio_personal**
   - name, title, tagline, bio, email, phone, location, social_links

2. **projects**
   - title, description, category, technologies[], bgColor, github, demo, highlights[]

3. **skills**
   - category (programming/dataScience/tools), name, level, subcategory

4. **experience**
   - company, position, duration, location, type, description, achievements[]

5. **education**
   - degree, school, duration, gpa, location, coursework[]

6. **certifications**
   - name, issuer, date, credentialId, description

7. **achievements**
   - title, organization, date, description

8. **hobbies**
   - name, description, icon

9. **contact_messages**
   - name, email, subject, message, timestamp, status

## Frontend Integration Changes Required

### Files to Modify:
1. **Remove mock data imports** from all components
2. **Create API service layer** (`/src/services/api.js`)
3. **Add loading states** to all sections
4. **Add error handling** for API failures
5. **Add content management interface** (optional admin panel)

### API Service Structure:
```javascript
// /src/services/api.js
const API_BASE = process.env.REACT_APP_BACKEND_URL;

export const portfolioAPI = {
  personal: {
    get: () => fetch(`${API_BASE}/api/portfolio/personal`),
    update: (data) => fetch(`${API_BASE}/api/portfolio/personal`, {...})
  },
  projects: {
    getAll: () => fetch(`${API_BASE}/api/projects`),
    create: (data) => fetch(`${API_BASE}/api/projects`, {...}),
    update: (id, data) => fetch(`${API_BASE}/api/projects/${id}`, {...}),
    delete: (id) => fetch(`${API_BASE}/api/projects/${id}`, {...})
  },
  // ... other endpoints
};
```

## Implementation Priority

### Phase 1: Core Data APIs
1. Personal info API
2. Projects API
3. Skills API
4. Contact form API

### Phase 2: Extended Content
1. Experience & Education APIs
2. Certifications & Achievements APIs
3. Hobbies API

### Phase 3: Advanced Features
1. Admin panel for content management
2. Image upload for projects
3. Real-time contact form notifications
4. Analytics integration

## Current Mock Data Structure

The mock data in `/src/data/mock.js` contains:
- `personal`: Basic info and contact details
- `skills`: Categorized by programming, dataScience, tools
- `projects`: 4 sample projects with complete details
- `experience`: 2 work experience entries
- `education`: 2 education entries
- `certifications`: 3 professional certifications
- `achievements`: 4 recognition items
- `hobbies`: 5 personal interests

## Integration Notes

1. **GitHub Integration**: When user provides GitHub details, implement GitHub API integration to fetch real project data
2. **Email Service**: Contact form will need email service integration (SendGrid, etc.)
3. **File Upload**: For project images and profile pictures
4. **Authentication**: If admin panel is needed for content management
5. **SEO**: Add meta tags and structured data for better search visibility

## Testing Requirements

1. **API Testing**: All endpoints with proper error handling
2. **Frontend Integration**: Ensure smooth transition from mock to real data
3. **Form Validation**: Contact form and any admin forms
4. **Performance**: Loading states and optimization
5. **Mobile Responsiveness**: Ensure all functionality works on mobile devices

---

*This contract ensures seamless integration between the current frontend implementation and the upcoming backend development.*