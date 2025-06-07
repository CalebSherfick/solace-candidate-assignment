## Project Feedback

I timeboxed myself to **2 hours of development**, but went 20 minutes over trying to finish the feature I was working on and writing out my final commit message.  
I also aimed to mimic everyday development and save time, so I referenced a personal project for specific design aspects to avoid re-researching documentation.

**Strategy:** Focused on **functionality over styling** to ensure the app worked for users first, then moved toward code improvements and styling refinements.

- **PR #1:**  
  Addresses critical issues preventing the product from working either as expected or at all.

- **PR #2:**  
  Addresses architectural and UI improvements:
  - Cut from the first branch, assuming PR #1 will be merged independently due to its critical nature.
  - Separated improvements to allow new design and features to be reviewed/tested independently.
  - In a real-world scenario, I would break out the architectural refactoring and UI updates into separate branches based on ticket numbers to keep review and merge processes clean and efficient.

---

## Next Steps Given More Time

**Phone Number Formatting**
  - Normalize phone numbers in the DB using **E.164 format**, and format on the frontend (via regex or a library).

**Security Vulnerabilities**
  - Address the remaining **2 moderate vulnerabilities** with more intentional package upgrades.

**Normalize Data in the Database**
  - Refactor `Specialties` and `Degree` fields into separate **many-to-many relationships** with `Advocates`.

**Backend Search Capabilities**
  - Migrate **filters, search, sort, and pagination** logic to the backend to support large datasets.
	  - Update frontend to pass parameters to `GET` requests through route params.
	  - Improve UX/UI to support the new filtering logic:
	  - Filter by: specialties (multi-select), degree, city, years of experience (e.g., "5+ years").
	  - ResetSearch should also clear searchTerm, filters, sort, and pagination.

**Implement Frontend Themes**
  - Establish a **design system** to reduce custom styling across the app.
  - Support **light/dark mode**.
  - Add **Solace branding**: logo, color palette.
  - Improve the **search bar UI** (e.g., use MUI `Grid` layout).

**Add Loading States**
  - Improve UX by showing clear loading indicators during data fetches.

---

##  Larger Development Goals

**Split Frontend & Backend**
  - Decouple the app into **separate frontend and backend services** to:
    - Improve performance
    - Improve scalability and CI/CD workflows
    - Reduce deployment complexity
    - Reduce costs

**Manage Config Vars via Heroku**
  - Use **Heroku Config Vars** per environment (`QA`, `UAT`, `Prod`) instead of `.env` files.
  - Avoid code changes for environment-specific configuration by leveraging `process.env`.