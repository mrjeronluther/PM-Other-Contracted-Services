
# PM & Other Contracted Services Portal

A Google Apps Script web application for managing Notice of Award (NOA) submissions, contractor/service requests, FM approval workflows, supplier details, and directory-based access for PM and other contracted services.

This project combines:
- Google Apps Script backend (`Code.gs`)
- HTML/CSS/JavaScript front-end (`Index.html`)
- Google Sheets as the operational database and tracking system
- Google Drive for copying and storing uploaded attachments and shared documents
- Bootstrap and Tailwind styling for the portal UI
- Email notification workflows for approvals and status updates

---

## Overview

The PM & Other Contracted Services Portal is designed to support an internal workflow for processing and approving contracted services requests. It helps organizations manage:
- NOA submissions
- FM review and approval
- property or admin request follow-ups
- supplier record lookups
- document upload handling
- workflow tracking across multiple stages
- credential-based access for approvers and directory users

The application is built as a Google Apps Script web app and is linked to multiple Google Sheets and Drive folders to support the filing, verification, and communication process.

---

## Key Features

### 1. NOA Submission Workflow
Users can submit Notice of Award data through a web-based form. The backend validates:
- email format
- required fields
- date validity
- contract amount
- file attachments
- supplier data
- previous contract links
- Google Drive URL validity

The submission is then saved to the main services sheet and/or linked target sheet.

---

### 2. FM Approver Review
The app supports an approver workflow where FM users can:
- log in
- review NOA submissions
- approve or disapprove requests
- add remarks
- trigger email notifications to stakeholders

The system keeps the FM decision distinct from the downstream lifecycle status and preserves historical tracking.

---

### 3. Role-Based Portal Access
The app includes login and authentication logic for:
- FM approvers
- directory users
- portal users with active/inactive status checks

Validation rules ensure:
- active user status
- correct category authorization
- FM-only access for approval roles
- secure password reset via verification code

---

### 4. Password Reset and Verification
Users can:
- request a 6-digit reset code
- receive it via Gmail
- verify it inside the portal
- reset their password

This is secured with `CacheService` and temporary verification code storage.

---

### 5. Supplier and Contractor Lookup
The app reads supplier information from a shared spreadsheet and matches by supplier/company name. It returns:
- company address
- authorized signatory
- designation
- TIN number

This is used to auto-fill parts of the request form and reduce manual data entry.

---

### 6. Google Drive Attachment Handling
Files uploaded via the form are copied into a designated Google Drive folder and shared with a public link when possible.
This ensures:
- ownership transfer to the script execution account
- centralized document storage
- consistent access for downstream reviewing teams

---

### 7. Dropdown/Lookup Cache Management
The app loads dropdown lists for:
- properties
- payor companies
- contractor companies
- services
- supplier details
- holidays
- property-to-payor mapping

These options are cached using:
- `CacheService`
- `PropertiesService`

This reduces repeated spreadsheet reads and speeds up the web app.

---

### 8. Notifications and Email Communications
The app sends email notifications for:
- FM review requests
- approval or rejection updates
- password reset codes
- system messages after registration or submission updates

Emails are generated with dynamic status and detail content.

---

### 9. Spreadsheet-Based Tracking and Reporting
The backend reads and writes to multiple spreadsheets including:
- main services database
- payor reference sheet
- supplier details
- user database
- target form responses sheet
- recipient group list

This allows the portal to maintain a live workflow and operational record.

---

## Tech Stack

- Google Apps Script
- JavaScript
- HTML
- CSS
- Bootstrap 5
- Tailwind CSS
- Google Sheets
- Google Drive
- GmailApp
- CacheService / PropertiesService

---

## Project Structure

- `Code.gs` – backend logic for workflows, validation, authentication, submissions, notifications, and spreadsheet interactions
- `Index.html` – front-end portal UI and form interfaces
- Google Sheets:
  - main services database
  - payor sheet
  - supplier data sheet
  - user database
  - form response tracking sheet
- Google Drive folders:
  - attachment storage folder
  - NOA-related copies

---

## Main Backend Features in `Code.gs`

The backend contains functions for:

- web app initialization:
  - `doGet()`
- approval and submission logic:
  - `submitApproverAction(payload)`
  - `saveData(formData)`
  - `saveFormDataToServer(data)`
  - `submitFormWithUrls(formFields)`
- validation:
  - `validateFormDataOnBackend(formData)`
  - `validatePayload_(data)`
  - `validateApproverCredentials(email, password)`
- authentication and user registration:
  - `loginDirectoryUser(email, password)`
  - `registerDirectoryAccount(...)`
  - `sendPasswordResetCode(email)`
  - `verifyAndResetPassword(email, code, newPassword)`
- lookup and dropdown caching:
  - `getDropdownOptions(forceRefresh)`
  - `fetchDropdownOptionsFromSheet_()`
  - `getCachedRecipientList(ss)`
  - `getCachedServiceTypeMap(ss)`
- supplier search:
  - `fetchSupplierDetailsByName(supplierName)`
- drive file handling:
  - `copyGoogleDriveFile_(driveUrl, destinationFolderId)`
  - `extractFileIdFromUrl_(url)`
  - `saveFileToDrive_(fileObj)`

---

## Front-End Features in `Index.html`

The HTML file builds the portal interface with:
- login and registration UI
- approval dashboard
- dynamic table rendering
- searchable dropdowns
- multi-step request forms
- mobile-friendly layout
- status indicators and badges
- modal-driven interactions
- metrics cards and summary panels

The front-end is built around a highly customized dashboard interface and a form system for submitting contracted services requests.

---

## Deployment Instructions

### 1. Create a Google Apps Script Project
Open Google Apps Script and create a new project.

### 2. Upload the Files
Add:
- `Code.gs`
- `Index.html`

### 3. Deploy as a Web App
In Apps Script:
- click Deploy
- select New deployment
- choose Web app
- set:
  - Execute as: Me
  - Who has access: Anyone with the link or your desired access level

### 4. Make Sure the Spreadsheet IDs Are Valid
The script uses several hardcoded spreadsheet IDs and drive folder IDs. These must match your environment.

Examples from the project:
```javascript
const SHEET_ID_SERVICES = "15dfA93rf8AwRop1a9sDHvilBa0MQF9qfOCBwgYHnY24";
const SHEET_ID_PAYORS = "1qheN_KURc-sOKSngpzVxLvfkkc8StzGv-1gMvGJZdsc";
const SHEET_ID_USER_DB = "1dBO8ThI7FEKb24D9sPVWokfXLuWUx5aCQvisrT9wBvI";
const SHEET_ID_SUPPLIERS = "18h8JdpBFRT8wGtOS_d3cirKeu-EI4bTZX5eXpENkmGw";
const SHEET_ID_TARGET = "15I4kO179_IsQYxbWpCwrlJPbnk10EqqjrX8lxprExoE";
const DRIVE_FOLDER_ID = "1MQrRMaOpzg68eJ3KaghNrxBgS-iGMY9J";
const FOLDER_ID_ATTACHMENTS = "1keuRtWYkOTLSWJ0WYBPCk4fGHPjG5jAq";
```

Update these to match your live Google Drive and Sheets setup.

---

## Required Spreadsheet Structure

The project expects the following data sources:

### 1. Main Services Database
Used for:
- NOA tracking
- approval status
- status history
- FM decision data
- requests and workflow states

### 2. Payor Company Spreadsheet
Used for:
- property and payor company lookups
- dropdown generation
- property/payor mapping

### 3. Supplier Spreadsheet
Used for:
- supplier name lookup
- supplier address
- signatory details
- TIN lookup

### 4. User Database Spreadsheet
Used for:
- directory access
- user registration
- approver credential validation
- password reset workflow

### 5. Target Form Responses Sheet
Used for:
- contract request submissions
- multi-round request tracking
- historical NOA data retrieval

---

## Example Workflow

### Procurement Submission Flow
1. User completes NOA form
2. Form is validated on the backend
3. Required attachments are copied into Drive
4. Data is saved to the services database
5. Email notification is sent to relevant stakeholders
6. Related FM records are updated

### FM Review Flow
1. FM user logs in
2. Portal loads pending NOA items
3. Approver selects a record
4. Approver chooses Approved or Disapproved
5. Status is updated in database
6. Email notification is sent to submitter and related groups

### Contract Request Follow-Up
1. Approved item allows the user to continue the contract/LOA workflow
2. Status tracking is appended
3. Data is written to the target form response sheet
4. Historical record is preserved

---

## Security Notes

This application includes multiple protections:
- active account status checks
- role-based access enforcement
- validation for required fields and file URLs
- cache-based one-time reset codes
- spreadsheet-level row checks for workflow integrity
- Google Drive file copy flow

However, because it uses Google Sheets and Drive, it should be treated as an internal enterprise system. Sensitive workflow information and user account records should still be governed by your organization’s data privacy and retention policies.

---

## Customization Points

If you plan to reuse or modify this app, review the following before deployment:
- spreadsheet IDs
- folder IDs
- approval email groups
- FM access category rules
- property list mappings
- supplier data source
- status and email notification logic
- portal links used in approval emails

---

## Known Characteristics of This Project

This project is a highly customized process portal for:
- procurement and service request tracking
- internal approval processing
- operational analytics through spreadsheet records
- document-centric workflows through Google Drive
- role-based stakeholder communication

It is not a generic template; it is built around your business process and the spreadsheet data model defined by the connected files.

---

## License

This project is intended for internal organizational use. Please confirm your organization’s legal and operational policy before redistributing or republishing the code externally.

---

## Summary

PM & Other Contracted Services Portal is a Google Apps Script-based internal workflow application for managing contracted service requests, approvals, and tracking records. It includes:
- NOA submission and validation
- FM approver portal
- user directory login and reset flow
- supplier metadata lookup
- Google Drive attachment handling
- email-driven notifications
- spreadsheet-based operational database management

