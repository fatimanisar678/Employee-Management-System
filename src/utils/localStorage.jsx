const employee = [
  {
    "employees": [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Create Login UI",
            "description": "Design and implement login screen",
            "date": "2026-01-10",
            "category": "Frontend",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Fix Navbar Bug",
            "description": "Resolve responsive issue in navbar",
            "date": "2026-01-12",
            "category": "Bug Fix",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "API Integration",
            "description": "Connect frontend with backend APIs",
            "date": "2026-01-15",
            "category": "Backend",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Dashboard Layout",
            "description": "Create admin dashboard layout",
            "date": "2026-01-11",
            "category": "UI/UX",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "User Validation",
            "description": "Add form validation logic",
            "date": "2026-01-13",
            "category": "Frontend",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Optimize Images",
            "description": "Compress images for performance",
            "date": "2026-01-16",
            "category": "Performance",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Database Schema",
            "description": "Design database tables",
            "date": "2026-01-09",
            "category": "Database",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "JWT Auth",
            "description": "Implement JWT authentication",
            "date": "2026-01-14",
            "category": "Security",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Error Handling",
            "description": "Add global error handling",
            "date": "2026-01-18",
            "category": "Backend",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Write Test Cases",
            "description": "Unit testing for services",
            "date": "2026-01-08",
            "category": "Testing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Dark Mode",
            "description": "Add dark mode toggle",
            "date": "2026-01-17",
            "category": "UI/UX",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Refactor Code",
            "description": "Clean and refactor components",
            "date": "2026-01-19",
            "category": "Code Quality",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Deploy App",
            "description": "Deploy application on server",
            "date": "2026-01-20",
            "category": "Deployment",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Env Setup",
            "description": "Configure environment variables",
            "date": "2026-01-07",
            "category": "Backend",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Crash Fix",
            "description": "Fix production crash issue",
            "date": "2026-01-21",
            "category": "Bug Fix",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      }
    ]
  }
];

const admin = [
  {
    "admin": {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  }
];

export const setLocalStorage=()=>
{
       localStorage.setItem('employees',JSON.stringify(employee))
       localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>
{

      const employees =JSON.parse(localStorage.getItem('employees'));
      const Admin =JSON.parse(localStorage.getItem('admin'));
      
      console.log(employees,Admin)
      
}