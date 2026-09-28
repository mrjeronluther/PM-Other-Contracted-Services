// =================================================================================
// --- GLOBAL CONFIGURATION (SPREADSHEET & DRIVE FOLDER CONFIGS) ---
// =================================================================================

// Main Database / Services Spreadsheet Configuration
const SHEET_ID_SERVICES = "15dfA93rf8AwRop1a9sDHvilBa0MQF9qfOCBwgYHnY24";
const DESTINATION_TAB = "DATABASE";

// Payor Spreadsheet Configuration
const SHEET_ID_PAYORS = "1qheN_KURc-sOKSngpzVxLvfkkc8StzGv-1gMvGJZdsc";

// User Database / Auth / Holidays Spreadsheet Configuration
const SHEET_ID_USER_DB = "1dBO8ThI7FEKb24D9sPVWokfXLuWUx5aCQvisrT9wBvI";

// Supplier Spreadsheet Configuration for Section 4 Supplier Details
const SHEET_ID_SUPPLIERS = "18h8JdpBFRT8wGtOS_d3cirKeu-EI4bTZX5eXpENkmGw";
const TAB_NAME_SUPPLIERS = "dvSupplier";

// Target Database Spreadsheet for Mall Request Form
const SHEET_ID_TARGET = "15I4kO179_IsQYxbWpCwrlJPbnk10EqqjrX8lxprExoE";
const TAB_NAME_TARGET = "Form Responses 1";

// Designated Google Drive Folders
const DRIVE_FOLDER_ID = "1MQrRMaOpzg68eJ3KaghNrxBgS-iGMY9J";         // Folder for NOA submissions
const FOLDER_ID_ATTACHMENTS = "1keuRtWYkOTLSWJ0WYBPCk4fGHPjG5jAq";    // Folder for Mall Request attachments

const CACHE_TTL = 1800; // 30 minutes
const DROPDOWN_CACHE_TTL_SECONDS_ = 21600; // 6 hours (CacheService maximum)

const DROPDOWN_CACHE_KEYS_ = [
  "properties_v11", 
  "payorCompanies_v11", 
  "contractorCompanies_v11", 
  "serviceTypes_v11",
  "payors_v11",
  "services_v11",
  "propertyPayorMap_v11",
  "supplierDetailsMap_v11",
  "holidays_v11"
];
const DROPDOWN_WATCHED_SHEETS_MAIN_ = ["dvSupplier", "dvGen"];
const DROPDOWN_WATCHED_SHEETS_PAYOR_ = ["dvPayorCompany"];

// =================================================================================
// --- ALIAS MAPPING FOR SPREADSHEET HEADERS ---
// =================================================================================

const HEADER_ALIAS_MAP = {
  "Email Status": ["Email Status", "EMAIL STATUS"],
  "NOA REF#": ["NOA REF#", "NOA Ref#", "NOA REF No.", "NOA REF NO.", "NOA Ref No."],
  "NOA Request Timestamp": ["NOA Request Timestamp", "NOA REQUEST TIMESTAMP", "NOA Release Timestamp", "NOA RELEASE TIMESTAMP"],
  "Requested By": ["Requested By", "Requested By:", "REQUESTED BY", "NOA Released by", "NOA Released by:", "NOA RELEASED BY", "Uploaded By", "Uploaded By:", "UPLOADED BY", "Uploaded by", "uploadedBy", "requestedBy"],
  "PROPERTY": ["PROPERTY", "Property"],
  "PAYOR COMPANY": ["PAYOR COMPANY", "Payor Company"],
  "CONTRACTOR COMPANY NAME": ["CONTRACTOR COMPANY NAME", "CONTRACTOR'S NAME", "Contractor Name", "CONTRACTOR NAME", "Contractor Company Name", "MSP COMPANY NAME", "Msp Company Name"],
  "SERVICE TYPE": ["SERVICE TYPE", "Service Type"],
  "PRF NO": ["PRF NO", "PRF NO.", "Prf No.", "PRF No.", "PRF No"],
  "Adtl Identifier": ["Adtl Identifier", "ADDTL IDENTIFIER", "Additional Identifier", "ADDITIONAL IDENTIFIER"],
  "Ref# of Main/ Mother Contract": ["Ref# of Main/ Mother Contract", "REF# OF MAIN/ MOTHER CONTRACT", "Ref# of Main/Mother Contract"],
  "START DATE": ["START DATE", "Start Date"],
  "END DATE": ["END DATE", "End Date"],
  "KIND OF NOA": ["KIND OF NOA", "Kind of NOA", "Kind Of NOA"],
  "Copy of Released NOA": ["Copy of Released NOA", "COPY OF RELEASED NOA", "Copy Of Released NOA"],
  "Additional Mailing List of PROC": ["Additional Mailing List of PROC", "ADDITIONAL MAILING LIST OF PROC"],
  "NEW or REVISED": ["NEW or REVISED", "NEW OR REVISED", "New or Revised"],
  "Re-uploaded NOA Ref#": ["Re-uploaded NOA Ref#", "RE-UPLOADED NOA REF#", "Re-Uploaded NOA Ref#"],
  "Category": ["Category", "CATEGORY", "Service Group", "SERVICE GROUP"],
  "Status": ["Status", "STATUS"],
  "FM Response Timestamp": ["FM Response Timestamp", "FM RESPONSE TIMESTAMP"],
  "Remarks": ["Remarks", "REMARKS"],
  "Approver Email Address": ["Approver Email Address", "APPROVER EMAIL ADDRESS", "Approver Email"],
  "Active Timestamp": ["Active Timestamp", "ACTIVE TIMESTAMP"],
  "Status Tracking": ["Status Tracking", "STATUS TRACKING"],
  "Fully Signed PRF": ["Fully Signed PRF", "FULLY SIGNED PRF"]
};

// Database mapping template aligned with the Google Form Responses sheet structure.
// Columns A, B, and C are preserved to prevent data-shifting while writing.
const CANONICAL_HEADERS = [
  "STATUS OF REQUEST", 
  "date drafted", 
  "REF#", 
  "Timestamp", 
  "Email Address", 
  "Name", 
  "Designation & Position:", 
  "Contact number", 
  "Immediate head", 
  "PROPERTY", 
  "PAYOR", 
  "FULL COMPANY NAME OF SUPPLIER\n(Ensure that the spelling is correct)", 
  "KIND OF SERVICE", 
  "KIND OF CONTRACT", 
  "Is the supplier the same as the previous contract, or has it changed? ", 
  "Start date", 
  "End date", 
  "Number of Units for Servicing - Indicate specs and brand if any", 
  "Frequency of Service\n(Daily, Weekly, Monthly, Quarterly, Yearly) If others, please specify eg. twice a month etc.", 
  "Specific Location/s of Units for Service", 
  "Classification of Location/Covered Area within the property", 
  "Contract Amount (Vat Inc.)", 
  "Classify which group handles this type of service", 
  "If others , please specify ", 
  "Upload the template of your previous contract (must be in .docx format). ", 
  "Upload the notarized/signed previous contract/LOA. ", 
  "Upload the Notice of Award (NOA) based on the bid titled \"\"NOA-bid\"\" issued by the Procurement Department.\n\nEnsure that the details in the NOA are correct.", 
  "What is the Purchase Requisition Form (PRF) number? ", 
  "Fully signed Purchase Requisition Form (PRF)", 
  "Upload the Editable file of the Scope of Work attached (SOW) in the NOA. Include other stipulated agreements that are not indicated in the NOA if any.", 
  "Upload the Editable file of the Service Level Agreement (SLA) agreed by MCD and the service provider. Include other stipulated agreements that are not indicated in the NOA if any. This is required so we can incorporate it in the Main Legal Contract.", 
  "Attach the Management Approval Memo- approved/signed up to GMC", 
  "Upload the approved NOA of the previous contract for extension", 
  "Attach the copy of the previous contract that you will extend (for reference)", 
  "Previous Contract  Start Date", 
  "Previous Contract End Date", 
  "Supplier Information: (For the database)\n\nFull office address:", 
  "Supplier Information: (For the database)\n\nAuthorized Signatory:", 
  "Supplier Information: (For the database)\n\nDesignation of  Authorized Signatory:", 
  "Supplier Information: (For the database)\n\nTIN No. of Authorized Signatory:", 
  "STATUS OF DRAFT",
  "VAT Status",                      // Appended Header 2 unique columns
  "NOA Reference Number", 
  "Contract Reference Number", 
  "Ref 1", 
  "Ref 2", 
  "Ref 3", 
  "Ref 4", 
  "Ref 5"
];

// =================================================================================
// --- WEB APP INITIALIZATION ---
// =================================================================================

function doGet() {
  try {
    const template = HtmlService.createTemplateFromFile("Index");

    // Force fresh fetch from sheets and reset cache/properties on every web app access
    let embeddedOptions;
    try {
      embeddedOptions = getDropdownOptions(true);
    } catch (optionsError) {
      Logger.log("doGet: failed to preload dropdown options: " + optionsError.message);
      embeddedOptions = { 
        properties: [], 
        payorCompanies: [], 
        contractorCompanies: [], 
        serviceTypes: [],
        payors: [],
        services: []
      };
    }

    // Zero-trust output encoding for script tag safety
    template.embeddedDropdownOptionsJson = JSON.stringify(embeddedOptions).replace(/</g, '\\u003c');

    return template
        .evaluate()
        .setTitle("PM & Other Contracted Services Portal")
        .addMetaTag("viewport", "width=device-width, initial-scale=1")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (e) {
    return HtmlService.createHtmlOutput(`<h3>Web App Load Error</h3><p>${e.message}</p>`);
  }
}

// =================================================================================
// --- HELPER UTILITY MODULES ---
// =================================================================================

function safeFormatDate(dateVal, tz, formatStr) {
  if (!dateVal) return "—";
  if (dateVal instanceof Date) {
    let formatted = Utilities.formatDate(dateVal, tz, formatStr);
    return formatted.replace(/\bSep\b/g, "Sept");
  }
  const strVal = String(dateVal).trim();
  if (strVal.toLowerCase() === "based on actual") return "Based on Actual";
  
  const cleanedStr = strVal.split(" ")[0]; 
  
  // Support both hyphen (-) and slash (/) separators
  let parts = cleanedStr.split("-");
  if (parts.length !== 3) {
    parts = cleanedStr.split("/");
  }
  
  if (parts.length === 3) {
    let year, month, day;
    if (parts[0].length === 4) {
      // Format: YYYY-MM-DD or YYYY/MM/DD
      year = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1;
      day = parseInt(parts[2], 10);
    } else if (parts[2].length === 4) {
      // Format: MM-DD-YYYY or MM/DD/YYYY
      year = parseInt(parts[2], 10);
      month = parseInt(parts[0], 10) - 1;
      day = parseInt(parts[1], 10);
    } else {
      // 2-digit year fallback
      year = parseInt(parts[2], 10) + 2000;
      month = parseInt(parts[0], 10) - 1;
      day = parseInt(parts[1], 10);
    }
    
const nativeDate = new Date(year, month, day);
    if (!isNaN(nativeDate.getTime())) {
      // If formatting with time and time is present in original string, apply it
      if (formatStr.includes("H") || formatStr.includes("m")) {
        const timePart = strVal.split(" ")[1];
        if (timePart) {
          const tParts = timePart.split(":");
          nativeDate.setHours(parseInt(tParts[0], 10) || 0);
          nativeDate.setMinutes(parseInt(tParts[1], 10) || 0);
          if (tParts[2]) {
            nativeDate.setSeconds(parseInt(tParts[2], 10) || 0);
          }
        }
      }
      let formatted = Utilities.formatDate(nativeDate, tz, formatStr);
      return formatted.replace(/\bSep\b/g, "Sept");
    }
  }
  
  const nativeDate = new Date(strVal);
  if (!isNaN(nativeDate.getTime())) {
    let formatted = Utilities.formatDate(nativeDate, tz, formatStr);
    return formatted.replace(/\bSep\b/g, "Sept");
  }
  return strVal;
}

function isValidDateString(dateStr) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const parts = dateStr.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; 
  const day = parseInt(parts[2], 10);
  const d = new Date(year, month, day);
  return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;
}

function getUniqueNonEmptyValues(arr) {
  const seen = {};
  const unique = [];
  
  for (let i = 0; i < arr.length; i++) {
    const rawVal = arr[i];
    const cleanVal = (rawVal !== null && rawVal !== undefined) ? String(rawVal).trim() : "";
    if (cleanVal === "") continue;
    
    const upperVal = cleanVal.toUpperCase();
    if (!seen[upperVal]) {
      seen[upperVal] = true;
      unique.push(cleanVal);
    }
  }

  return unique.sort(function(a, b) {
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  });
}

function getColumnMapping(headers) {
  const mapping = {};
  const normalizedHeaders = headers.map(h => String(h).trim().toUpperCase());
  
  for (const logicalName in HEADER_ALIAS_MAP) {
    const aliases = HEADER_ALIAS_MAP[logicalName];
    let foundIndex = -1;
    for (const alias of aliases) {
      foundIndex = normalizedHeaders.indexOf(alias.toUpperCase());
      if (foundIndex !== -1) break;
    }
    mapping[logicalName] = foundIndex;
  }
  return mapping;
}

// =================================================================================
// --- LIVE DATABASE RETRIEVAL (UPLOAD PORTAL & REVIEW CORES) ---
// =================================================================================

function getApproverSubmissions() {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID_SERVICES);
    const sheet = ss.getSheetByName(DESTINATION_TAB);
    if (!sheet) {
      throw new Error(`Target sheet tab "${DESTINATION_TAB}" is missing from the database.`);
    }
    
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return [];

    const lastCol = sheet.getLastColumn();
    if (lastCol === 0) return [];
    
    const fullRange = sheet.getRange(1, 1, lastRow, lastCol).getValues();
    const headers = fullRange[0];
    const dataRange = fullRange.slice(1);
    
    const mapping = getColumnMapping(headers);
    const tz = Session.getScriptTimeZone();
    const serviceTypeMap = getCachedServiceTypeMap(ss);

    const results = dataRange.map((row, index) => {
      const getVal = (key) => mapping[key] !== -1 && mapping[key] < row.length ? row[mapping[key]] : "";

      const rawSvcType = getVal("SERVICE TYPE");
      const svcTypeUpper = rawSvcType ? String(rawSvcType).trim().toUpperCase() : "";
      
      let computedCategory = getVal("Category") || serviceTypeMap[svcTypeUpper] || "";
      if (!computedCategory) {
        if (svcTypeUpper === "FM") computedCategory = "FM";
        if (svcTypeUpper === "ADMIN") computedCategory = "ADMIN";
      }

      const rawStatus = getVal("Status") || "Pending";
      const rawStatusUpper = String(rawStatus).trim().toUpperCase();
      const noaRequestTimestamp = getVal("NOA Request Timestamp");
      const fmResponseTimestamp = getVal("FM Response Timestamp");
      const trackingText = String(getVal("Status Tracking") || "");
      const trackingUpper = trackingText.toUpperCase();

      // Permanent FM Evaluation Decision Resolver:
      // An NOA approved by FM must remain "Approved" in the FM portal even after
      // Property submits a contract request or COG starts drafting.
      let fmDecision = "Pending";
      if (rawStatusUpper === "DISAPPROVED" || rawStatusUpper === "REJECTED" || trackingUpper.includes("-EVALUATED (DISAPPROVED):")) {
        fmDecision = "Disapproved";
      } else if (
        rawStatusUpper === "APPROVED" || 
        rawStatusUpper.includes("CONTRACT REQUEST") || 
        rawStatusUpper.includes("COG") || 
        trackingUpper.includes("-EVALUATED (APPROVED):") ||
        (fmResponseTimestamp && rawStatusUpper !== "PENDING")
      ) {
        fmDecision = "Approved";
      }

      // Always use the original NOA Request Timestamp to represent the first request
      const activeTimestampRaw = noaRequestTimestamp;

      return {
        rowNum: index + 2,
        category: computedCategory,
        status: fmDecision, // Locks FM Review decision as Approved / Disapproved / Pending
        lifecycleStatus: rawStatus, // Retains downstream stage (e.g., "Contract request received by COG-CSU")
        actionDoneBy: getVal("Approver Email Address") || getVal("Requested By") || "—",
        timestamp: safeFormatDate(activeTimestampRaw, tz, "MMM d, yyyy"),
        newOrRevised: getVal("NEW or REVISED") || "NEW",
        noaRef: getVal("NOA REF#") || "",
        reUploadedRef: getVal("Re-uploaded NOA Ref#") || "",
        ref: (function() {
          const state = getVal("NEW or REVISED") ? String(getVal("NEW or REVISED")).trim().toUpperCase() : "NEW";
          const resolved = state === "REVISED" ? getVal("Re-uploaded NOA Ref#") : getVal("NOA REF#");
          return resolved ? String(resolved).trim() : "—";
        })(),
        property: getVal("PROPERTY") || "—",
        payor: getVal("PAYOR COMPANY") || "—",
        contractor: getVal("CONTRACTOR COMPANY NAME") || "—",
        serviceType: rawSvcType || "—",
        startDate: getVal("START DATE") ? safeFormatDate(getVal("START DATE"), tz, "yyyy-MM-dd") : "—",
        endDate: getVal("END DATE") ? safeFormatDate(getVal("END DATE"), tz, "yyyy-MM-dd") : "—",
        noaLink: getVal("Copy of Released NOA") || "",
        cogCsuStatus: getVal("Email Status") || rawStatus || "Awaiting Review",
        remarks: getVal("Remarks") || "",
        fmTimestamp: getVal("FM Response Timestamp") ? safeFormatDate(getVal("FM Response Timestamp"), tz, "yyyy-MM-dd HH:mm") : "",
        statusTracking: trackingText || "—"
      };
    });

    return results.filter(sub => String(sub.category).trim().toUpperCase() === "FM");
  } catch (e) {
    throw new Error("Failed to load approver records: " + e.message);
  }
}

// =================================================================================
// --- APPROVER ACTION DISPATCHER ---
// =================================================================================

function submitApproverAction(payload) {
  if (!payload || !payload.ref) {
    return { success: false, message: "Action request is invalid: Reference number is missing." };
  }
  
  const lock = LockService.getScriptLock();
  try {
    if (!lock.tryLock(30000)) {
      throw new Error("The database is currently locked by another process. Please try again shortly.");
    }
    
    const ss = SpreadsheetApp.openById(SHEET_ID_SERVICES);
    const sheet = ss.getSheetByName(DESTINATION_TAB);
    if (!sheet) {
      throw new Error(`Spreadsheet database tab "${DESTINATION_TAB}" could not be accessed.`);
    }
    
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      throw new Error("No entries found in the spreadsheet database.");
    }
    
    // Force header alignment to ensure metric columns exist before mapping
    const headers = ensureHeaderArrangement(sheet);
    const lastCol = sheet.getLastColumn();
    const mapping = getColumnMapping(headers);
    
    const refColIndex = mapping["NOA REF#"];
    const reRefColIndex = mapping["Re-uploaded NOA Ref#"];
    const stateColIndex = mapping["NEW or REVISED"];
    
    const fullRange = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
    const targetRef = String(payload.ref).trim().toUpperCase();
    
    let targetRowIndex = -1;
    for (let i = 0; i < fullRange.length; i++) {
      const row = fullRange[i];
      const stateRaw = stateColIndex !== -1 ? row[stateColIndex] : "";
      const state = stateRaw ? String(stateRaw).trim().toUpperCase() : "NEW";
      
      let rowRef = "";
      if (state === "REVISED" && reRefColIndex !== -1) {
        rowRef = row[reRefColIndex];
      } else if (refColIndex !== -1) {
        rowRef = row[refColIndex];
      }
      
      if (String(rowRef).trim().toUpperCase() === targetRef) {
        targetRowIndex = i + 2;
        break;
      }
    }
    
    if (targetRowIndex === -1) {
      throw new Error(`The submission reference ${payload.ref} does not exist in our database.`);
    }
    
    const now = new Date();
    const tz = Session.getScriptTimeZone();
    
    // Fetch values from target row to access start timestamp
    const targetRowRange = sheet.getRange(targetRowIndex, 1, 1, lastCol).getValues()[0];
    const noaRequestTimestampRaw = mapping["NOA Request Timestamp"] !== -1 ? targetRowRange[mapping["NOA Request Timestamp"]] : null;
    
    // Toggle selector: Approved status uses Decision Timestamp. All other statuses revert to Request Timestamp.
    const isApproved = String(payload.action).trim().toUpperCase() === "APPROVED";
    const evalActionLabel = isApproved ? "Approved NOA by FM" : "Disapproved NOA by FM";
    const activeTimestamp = isApproved ? now : noaRequestTimestampRaw;
    
     // Swaps format patterns to MMM d, yyyy HH:mm for both milestones
    const formattedStart = safeFormatDate(noaRequestTimestampRaw, tz, "MMM d, yyyy HH:mm");
    const formattedEnd = safeFormatDate(now, tz, "MMM d, yyyy HH:mm");
    let trackingText = `-Uploaded by PROC: ${formattedStart}\n-Evaluated (${evalActionLabel}): ${formattedEnd}`;

    if (mapping["Approver Email Address"] !== -1) {
      sheet.getRange(targetRowIndex, mapping["Approver Email Address"] + 1).setValue(payload.approverEmail);
    }
    if (mapping["FM Response Timestamp"] !== -1) {
      sheet.getRange(targetRowIndex, mapping["FM Response Timestamp"] + 1).setValue(now);
    }
    if (mapping["Remarks"] !== -1) {
      sheet.getRange(targetRowIndex, mapping["Remarks"] + 1).setValue(payload.remarks);
    }
    if (mapping["Status"] !== -1) {
      sheet.getRange(targetRowIndex, mapping["Status"] + 1).setValue(payload.action);
    }
    if (mapping["Email Status"] !== -1) {
      sheet.getRange(targetRowIndex, mapping["Email Status"] + 1).setValue(payload.action);
    }
    
    // Update Dynamic Timestamp and Status Tracking columns
    if (mapping["Active Timestamp"] !== -1) {
      sheet.getRange(targetRowIndex, mapping["Active Timestamp"] + 1).setValue(activeTimestamp);
    }
    if (mapping["Status Tracking"] !== -1) {
      let currentTracking = String(targetRowRange[mapping["Status Tracking"]] || "");
      if (currentTracking) {
         if (currentTracking.includes("-Evaluated")) {
             currentTracking = currentTracking.replace(/-Evaluated \([^)]+\):[^\n]+/, `-Evaluated (${evalActionLabel}): ${formattedEnd}`);
             trackingText = currentTracking;
         } else {
             trackingText = `${currentTracking}\n-Evaluated (${evalActionLabel}): ${formattedEnd}`;
         }
      }
      sheet.getRange(targetRowIndex, mapping["Status Tracking"] + 1).setValue(trackingText);
    }
    
    SpreadsheetApp.flush();

    const rowData = sheet.getRange(targetRowIndex, 1, 1, lastCol).getValues()[0];
    
    const noaRef = mapping["NOA REF#"] !== -1 ? String(rowData[mapping["NOA REF#"]]).trim() : "";
    const timestampRaw = mapping["NOA Request Timestamp"] !== -1 ? rowData[mapping["NOA Request Timestamp"]] : null;
    const timestamp = safeFormatDate(timestampRaw, tz, "MMMM dd, yyyy");
    const submitterEmail = mapping["Requested By"] !== -1 ? String(rowData[mapping["Requested By"]]).trim() : "";
    const newOrRevised = mapping["NEW or REVISED"] !== -1 ? String(rowData[mapping["NEW or REVISED"]]).trim() : "";
    const reUploadedRef = mapping["Re-uploaded NOA Ref#"] !== -1 ? String(rowData[mapping["Re-uploaded NOA Ref#"]]).trim() : "";
    const property = mapping["PROPERTY"] !== -1 ? String(rowData[mapping["PROPERTY"]]).trim() : "";
    const payor = mapping["PAYOR COMPANY"] !== -1 ? String(rowData[mapping["PAYOR COMPANY"]]).trim() : "";
    const agency = mapping["CONTRACTOR COMPANY NAME"] !== -1 ? String(rowData[mapping["CONTRACTOR COMPANY NAME"]]).trim() : "";
    const serviceType = mapping["SERVICE TYPE"] !== -1 ? String(rowData[mapping["SERVICE TYPE"]]).trim() : "";
    const prfNo = mapping["PRF NO"] !== -1 ? String(rowData[mapping["PRF NO"]]).trim() : "";
    const adtlIdentifier = mapping["Adtl Identifier"] !== -1 ? String(rowData[mapping["Adtl Identifier"]]).trim() : "";
    const motherContractRef = mapping["Ref# of Main/ Mother Contract"] !== -1 ? String(rowData[mapping["Ref# of Main/ Mother Contract"]]).trim() : "";
    
    const startDate = safeFormatDate(mapping["START DATE"] !== -1 ? rowData[mapping["START DATE"]] : "", tz, "MMMM dd, yyyy");
    const endDate = safeFormatDate(mapping["END DATE"] !== -1 ? rowData[mapping["END DATE"]] : "", tz, "MMMM dd, yyyy");

    const kindOfNoa = mapping["KIND OF NOA"] !== -1 ? String(rowData[mapping["KIND OF NOA"]]).trim() : "";
    const additionalEmails = mapping["Additional Mailing List of PROC"] !== -1 ? String(rowData[mapping["Additional Mailing List of PROC"]]).trim() : "";
    const uploadedNoaLink = mapping["Copy of Released NOA"] !== -1 ? String(rowData[mapping["Copy of Released NOA"]]).trim() : "";

    const EMAIL_GROUPS = getCachedRecipientList(ss);
    const serviceTypeMap = getCachedServiceTypeMap(ss);

    const allRecipientEmails = [];
    if (EMAIL_GROUPS["COG"]) allRecipientEmails.push(...EMAIL_GROUPS["COG"]);
    if (EMAIL_GROUPS["PROC"]) allRecipientEmails.push(...EMAIL_GROUPS["PROC"]);
    if (EMAIL_GROUPS["RBGTK"]) allRecipientEmails.push(...EMAIL_GROUPS["RBGTK"]);

    const currentServiceTypeUpper = serviceType ? String(serviceType).trim().toUpperCase() : "";
    
    let serviceCategory = serviceTypeMap[currentServiceTypeUpper] || "";
    if (!serviceCategory) {
      if (currentServiceTypeUpper === "FM") serviceCategory = "FM";
      if (currentServiceTypeUpper === "ADMIN") serviceCategory = "ADMIN";
    }

    if (EMAIL_GROUPS["FM"]) {
      allRecipientEmails.push(...EMAIL_GROUPS["FM"]);
    }
    const propertyUpper = property ? String(property).trim().toUpperCase() : "";
    if (propertyUpper && EMAIL_GROUPS[propertyUpper]) {
      allRecipientEmails.push(...EMAIL_GROUPS[propertyUpper]);
    }

    const additionalEmailsList = additionalEmails ? String(additionalEmails).split(",").map(e => e.trim()).filter(String) : [];

    let to = "";
    let ccList = [];

    if (submitterEmail) {
      to = submitterEmail;
      ccList = [...allRecipientEmails, ...additionalEmailsList];
    } else if (allRecipientEmails.length > 0) {
      to = allRecipientEmails[0];
      ccList = [...allRecipientEmails.slice(1), ...additionalEmailsList];
    } else if (additionalEmailsList.length > 0) {
      to = additionalEmailsList[0];
      ccList = additionalEmailsList.slice(1);
    }

    const cleanCcList = [...new Set(ccList)].filter(email => email.toLowerCase() !== to.toLowerCase());
    const cc = cleanCcList.join(",");

    const subject = `[${payload.action.toUpperCase()}] PM & OCS NOA Ref No. ${payload.ref}`;
    const headerColor = payload.action === "Approved" ? "#10b981" : "#ef4444";
    // Assign alternative request form routing rules specifically for Category = ADMIN
    const contractrequest = (serviceCategory === "ADMIN")
      ? "https://script.google.com/a/macros/megaworld-lifestyle.com/s/AKfycbwLljyNMwFBJ0UuPkJYINrn1oppE98tKuuEmiAI5eToTkOILrMqNI3MxSzByT0vrKIR/exec"
      : "https://script.google.com/a/macros/megaworld-lifestyle.com/s/AKfycbwF6E6vbyhC0Dmb7iFW1mL4bQc4DWJF_VyDPbKGwlLrQCJyNltClVacW-4fSjXv0CXa/exec";

    const isFM = serviceCategory === "FM";
    let greetingText = "";

    if (payload.action === "Approved") {
      greetingText = isFM 
          ? `Dear Property FM Engineers,<br><br>A new Notice of Award (NOA) has been APPROVED by FM Head and is now available for use in requesting the Contract/LOA.`
          : `Dear Property Admin,<br><br>A new Notice of Award (NOA) has been APPROVED and is now available for use in requesting the Contract/LOA.`;
    } else {
      greetingText = isFM
          ? `Dear Procurement,<br><br>The Notice of Award (NOA) has been DISAPPROVED by FM heads and requires your resolution of the issues/comments indicated by the approver.`
          : `Dear Procurement,<br><br>The Notice of Award (NOA) has been DISAPPROVED and requires your resolution of the issues/comments indicated by the approver contraband.`;
    }

    // Only show "Access Submitted NOA" if not an approved Admin item
    const noaLinkSection = "";

    // Custom formatting text applied dynamically for approved notifications
    const contractRequestSection = (payload.action === "Approved") ? `
          <table style="width: 100%; text-align: center; margin-top: 20px; margin-bottom: 20px;">
            <tr>
              <td style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; text-align: center;">
                <p style="margin: 0 0 10px 0; font-size: 15px; color: #166534; font-weight: bold;">Proceed with Contract / LOA Request</p>
                
                ${serviceCategory === "ADMIN" ? `
                  <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 12px 15px; border-radius: 6px; margin: 15px 0; text-align: left; font-size: 13px; color: #92400e; line-height: 1.5;">
                    <strong>Note:</strong> Please copy the <strong>NOA REF: ${noaRef || payload.ref || "N/A"}</strong> and search it in your property portal in the section of <strong>"NOA PENDING CONTRACT/LOA REQUEST"</strong>.
                  </div>
                ` : `
                  <p style="margin: 0 0 15px 0; font-size: 13px; color: #3f3f46; line-height: 1.4;">
                    Since this Notice of Award has been approved, you can now proceed to "Mall Contracted Services Request Form" to request your formal Contract or LOA by using the link below:
                  </p>
                `}
                
                <a href="${contractrequest}" target="_blank" style="background-color: #10b981; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; font-size: 14px;">Request Contract / LOA</a>
              </td>
            </tr>
          </table>
    ` : "";

    const body = `
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="background-color: ${headerColor}; color: #ffffff; padding: 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
          <h2 style="margin: 0;">PM & OCS - NOA Status Update</h2>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 14px; color: #333333; line-height: 1.5;">${greetingText}</p>
          
          <div style="background-color: #fcf8e3; border: 1px solid #faebcc; padding: 15px; border-radius: 4px; margin-bottom: 20px; border-left: 5px solid ${headerColor}; font-size: 14px; color: #333333;">
            <h4 style="margin: 0 0 10px 0; color: #8a6d3b;">Verification Status Update</h4>
            <p style="margin: 0 0 5px 0;"><strong>Status:</strong> <span style="color: ${headerColor}; font-weight: bold;">${payload.action}</span></p>
            <p style="margin: 0 0 5px 0;"><strong>Approver:</strong> ${payload.approverEmail}</p>
            <p style="margin: 0;"><strong>COMMENT:</strong> ${payload.remarks}</p>
          </div>

          <h3 style="color: #333; border-bottom: 2px solid #eeeeee; padding-bottom: 5px;">NOA Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom:20px;">
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold; width: 40%;">Timestamp:</td><td style="padding: 8px; border: 1px solid #ddd;">${timestamp}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">NOA REF:</td><td style="padding: 8px; border: 1px solid #ddd;">${noaRef || "N/A"}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Requested By:</td><td style="padding: 8px; border: 1px solid #ddd;">${submitterEmail}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">NEW or REVISED:</td><td style="padding: 8px; border: 1px solid #ddd;">${newOrRevised}</td></tr>
            ${reUploadedRef ? `<tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Re-uploaded NOA Ref#:</td><td style="padding: 8px; border: 1px solid #ddd;">${reUploadedRef}</td></tr>` : ""}
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Property:</td><td style="padding: 8px; border: 1px solid #ddd;">${property}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Payor Company:</td><td style="padding: 8px; border: 1px solid #ddd;">${payor}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Contractor Name:</td><td style="padding: 8px; border: 1px solid #ddd;">${agency}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Service Type:</td><td style="padding: 8px; border: 1px solid #ddd;">${serviceType}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">PRF No:</td><td style="padding: 8px; border: 1px solid #ddd;">${prfNo || "N/A"}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Adtl Identifier:</td><td style="padding: 8px; border: 1px solid #ddd;">${adtlIdentifier || "N/A"}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Ref# of Main/ Mother Contract:</td><td style="padding: 8px; border: 1px solid #ddd;">${motherContractRef || "N/A"}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Start Date:</td><td style="padding: 8px; border: 1px solid #ddd;">${startDate || "N/A"}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">End Date:</td><td style="padding: 8px; border: 1px solid #ddd;">${endDate || "N/A"}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Kind of NOA:</td><td style="padding: 8px; border: 1px solid #ddd;">${kindOfNoa}</td></tr>
            <tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Additional Mailing List of PROC:</td><td style="padding: 8px; border: 1px solid #ddd;">${additionalEmails || "N/A"}</td></tr>
          </table>
          
          ${noaLinkSection}
          ${contractRequestSection}
        </div>
        <div style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
          <p style="margin: 0; font-size: 12px; color: #888;">This is a system-generated message. If approved, you can also click <a href="${contractrequest}" target="_blank" style="color: #4f46e5; text-decoration: underline; font-weight: bold;">this link</a> to request your contract/loa.</p>
        </div>
      </div>
    </body>
    `;

    if (to) {
      try {
        GmailApp.sendEmail(to, subject, "", { 
          cc: cc, 
          htmlBody: body,
          name: "PM & Other Contracted Services - System"
        });
      } catch (mailError) {
        Logger.log(`Email failed to send during verification action: ${mailError.message}`);
      }
    }

    return { success: true, message: `Submission reference ${payload.ref} updated successfully.` };
  } catch (e) {
    Logger.log("Error in submitApproverAction: " + e.message);
    return { success: false, message: "Database update failed: " + e.message };
  } finally {
    lock.releaseLock();
  }
}

// =================================================================================
// --- STANDARD NOA UPLOAD PORTAL WORKFLOW ---
// =================================================================================

function submitFormWithUrls(formFields) {
  if (!formFields) {
    return { success: false, message: "Submittal rejected. Form field payload is missing." };
  }
  
  const rawNoaUrl = formFields["Copy of Released NOA"];
  const rawPrfUrl = formFields["Fully Signed PRF"];

  let noaUrl, prfUrl;
  try {
    noaUrl = rawNoaUrl ? copyGoogleDriveFile_(rawNoaUrl, DRIVE_FOLDER_ID) : "";
  } catch (e) {
    return { success: false, message: "Copying NOA failed: " + e.message };
  }
  try {
    prfUrl = rawPrfUrl ? copyGoogleDriveFile_(rawPrfUrl, DRIVE_FOLDER_ID) : "";
  } catch (e) {
    return { success: false, message: "Copying PRF failed: " + e.message };
  }

  const payload = Object.assign({}, formFields, { 
    "Copy of Released NOA": noaUrl,
    "Fully Signed PRF": prfUrl
  });
  return saveData(payload);
}

function ensureHeaderArrangement(sheet) {
  const lastCol = sheet.getLastColumn();
  const canonicalHeaders = [
    "NOA Request Timestamp", "Requested By", "NEW or REVISED", "Re-uploaded NOA Ref#",
    "PROPERTY", "PAYOR COMPANY", "CONTRACTOR COMPANY NAME", "SERVICE TYPE",
    "PRF NO", "Adtl Identifier", "Ref# of Main/ Mother Contract", "START DATE",
    "END DATE", "KIND OF NOA", "Copy of Released NOA", "Additional Mailing List of PROC",
    "NOA REF#", "Email Status", "Status", "FM Response Timestamp", "Remarks", "Approver Email Address",
    "Category", "Fully Signed PRF", "Active Timestamp", "Status Tracking"
  ];

  if (lastCol === 0) {
    sheet.getRange(1, 1, 1, canonicalHeaders.length).setValues([canonicalHeaders]);
    return canonicalHeaders;
  }

  const existingHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(h => String(h).trim());
  let headersUpdated = false;

  for (const targetHeader of canonicalHeaders) {
    let columnExists = false;
    const aliases = HEADER_ALIAS_MAP[targetHeader] || [targetHeader];

    for (const alias of aliases) {
      if (existingHeaders.some(h => h.trim().toUpperCase() === alias.trim().toUpperCase())) {
        columnExists = true;
        break;
      }
    }

    if (!columnExists) {
      existingHeaders.push(targetHeader);
      headersUpdated = true;
    }
  }

  if (headersUpdated) {
    sheet.getRange(1, 1, 1, existingHeaders.length).setValues([existingHeaders]);
  }

  return existingHeaders;
}

function saveData(formData) {
  const ss = SpreadsheetApp.openById(SHEET_ID_SERVICES);
  const sheet = ss.getSheetByName(DESTINATION_TAB);
  if (!sheet) {
    return { success: false, message: `Database setup error: Destination tab "${DESTINATION_TAB}" does not exist.` };
  }
  
  const validation = validateFormDataOnBackend(formData);
  if (!validation.isValid) {
    return { success: false, message: "Field verification failed:\n" + validation.errors.join("\n") };
  }

  const lock = LockService.getScriptLock();
  try {
    if (!lock.tryLock(30000)) {
      return { success: false, message: "The database is currently processing concurrent requests. Please try again shortly." };
    }

    const headers = ensureHeaderArrangement(sheet);
    const lastRow = sheet.getLastRow();
    const normalizedHeaders = headers.map(h => String(h).trim().toUpperCase());
    const rowValues = new Array(headers.length).fill("");
    
    Object.keys(formData).forEach(fieldName => {
      const aliases = HEADER_ALIAS_MAP[fieldName] || [fieldName];
      for (const alias of aliases) {
        const idx = normalizedHeaders.indexOf(alias.toUpperCase());
        if (idx !== -1) {
          rowValues[idx] = formData[fieldName];
          return;
        }
      }
    });

    const refColIdx = normalizedHeaders.indexOf("NOA REF#");
    const reRefColIdx = normalizedHeaders.indexOf("RE-UPLOADED NOA REF#");
    const isRevised = String(formData["NEW or REVISED"] || '').trim().toUpperCase() === "REVISED";

    if (isRevised) {
      if (reRefColIdx !== -1) {
        rowValues[reRefColIdx] = formatReferenceValue(formData["Re-uploaded NOA Ref#"]);
      }
      if (refColIdx !== -1) {
        rowValues[refColIdx] = ""; 
      }
    } else {
      if (refColIdx !== -1) {
        rowValues[refColIdx] = `NOA-${Math.floor(100000 + Math.random() * 900000)}`;
      }
      if (reRefColIdx !== -1) {
        rowValues[reRefColIdx] = ""; 
      }
    }

    // Determine the category based on service type
    const serviceType = formData["SERVICE TYPE"] || "";
    const serviceTypeUpper = String(serviceType).trim().toUpperCase();
    const serviceTypeMap = getCachedServiceTypeMap(ss);
    
    let serviceCategory = serviceTypeMap[serviceTypeUpper] || "";
    if (!serviceCategory) {
      if (serviceTypeUpper === "FM") serviceCategory = "FM";
      if (serviceTypeUpper === "ADMIN") serviceCategory = "ADMIN";
    }
    
    let categoryIdx = normalizedHeaders.indexOf("CATEGORY");
    if (categoryIdx === -1) {
      const categoryAliases = HEADER_ALIAS_MAP["Category"] || ["Category"];
      for (const alias of categoryAliases) {
        categoryIdx = normalizedHeaders.indexOf(alias.toUpperCase());
        if (categoryIdx !== -1) break;
      }
    }
    if (categoryIdx !== -1) {
      rowValues[categoryIdx] = serviceCategory;
    }

    // Set initial status columns
    let emailStatusIdx = normalizedHeaders.indexOf("EMAIL STATUS");
    if (emailStatusIdx === -1) {
      const emailStatusAliases = HEADER_ALIAS_MAP["Email Status"] || ["Email Status"];
      for (const alias of emailStatusAliases) {
        emailStatusIdx = normalizedHeaders.indexOf(alias.toUpperCase());
        if (emailStatusIdx !== -1) break;
      }
    }
    
    let statusIdx = normalizedHeaders.indexOf("STATUS");
    if (statusIdx === -1) {
      const statusAliases = HEADER_ALIAS_MAP["Status"] || ["Status"];
      for (const alias of statusAliases) {
        statusIdx = normalizedHeaders.indexOf(alias.toUpperCase());
        if (statusIdx !== -1) break;
      }
    }

    if (serviceCategory === "ADMIN") {
      if (emailStatusIdx !== -1) {
        rowValues[emailStatusIdx] = "Pending Contract/LOA Request";
      }
      if (statusIdx !== -1) {
        rowValues[statusIdx] = "Pending Contract/LOA Request";
      }
    } else {
      if (emailStatusIdx !== -1) {
        rowValues[emailStatusIdx] = "FM Notified - Awaiting Action";
      }
      if (statusIdx !== -1) {
        rowValues[statusIdx] = "Pending";
      }
    }

    // Initialize metrics and multi-line status tracking columns
    const tz = Session.getScriptTimeZone();
    const nowTime = new Date();
    // Swaps format pattern to MMM d, yyyy HH:mm
    const formattedNow = safeFormatDate(nowTime, tz, "MMM d, yyyy HH:mm");

    const activeTsIdx = normalizedHeaders.indexOf("ACTIVE TIMESTAMP");
    if (activeTsIdx !== -1) {
      rowValues[activeTsIdx] = nowTime; // Initial active value defaults to submission timestamp
    }

    const trackingIdx = normalizedHeaders.indexOf("STATUS TRACKING");
    if (trackingIdx !== -1) {
      rowValues[trackingIdx] = `-Uploaded by PROC: ${formattedNow}`;
    }

    const targetRow = lastRow + 1;
    sheet.getRange(targetRow, 1, 1, rowValues.length).setValues([rowValues]);
    
    SpreadsheetApp.flush();

    // Dynamically retrieve standard or revised reference ID to return to the frontend
    const resolvedReference = isRevised ? rowValues[reRefColIdx] : rowValues[refColIdx];

    return { success: true, message: "Submitted!", ref: resolvedReference, rowNum: targetRow };

  } catch (e) {
    return { success: false, message: "Spreadsheet transaction error: " + e.message };
  } finally {
    lock.releaseLock();
  }
}

function sendNotificationEmailAfterSubmission(rowNum) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID_SERVICES);
    processRBG_TK_Sheet(rowNum, ss);
    return { success: true };
  } catch (e) {
    Logger.log(`Background email task failed for row ${rowNum}: ${e.message}`);
    return { success: false, message: e.message };
  }
}

function formatReferenceValue(rawValue) {
  if (!rawValue) return rawValue;
  const processedValue = String(rawValue).trim();
  return /^\d{6}$/.test(processedValue) ? `NOA-${processedValue}` : rawValue;
}

// =================================================================================
// --- EMAIL NOTIFICATION WORKFLOWS ---
// =================================================================================

function getEmailsFromSheet(ss) {
  const activeSs = ss || SpreadsheetApp.openById(SHEET_ID_SERVICES);
  const emailSheet = activeSs.getSheetByName("RECIPIENT LIST");
  
  if (!emailSheet) {
    Logger.log('Recipient List is missing from spreadsheet.');
    return {};
  }
  
  const lastRow = emailSheet.getLastRow();
  const lastCol = emailSheet.getLastColumn();
  if (lastRow < 2 || lastCol === 0) {
    return {};
  }
  
  const values = emailSheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
  const headers = values[0];         
  const emailData = values.slice(1); 
  
  const emailGroups = {};
  
  headers.forEach((header, i) => {
    if (header) {
      const key = String(header).trim().toUpperCase();
      const emails = emailData.map((row) => row[i]).filter(Boolean).map(e => String(e).trim());
      emailGroups[key] = emails;
    }
  });
  return emailGroups;
}

function getCachedRecipientList(ss) {
  const cache = CacheService.getScriptCache();
  const cached = cache.get("recipient_list_v3");
  if (cached) {
    try { return JSON.parse(cached); } catch (e) {}
  }
  const emailGroups = getEmailsFromSheet(ss);
  try { cache.put("recipient_list_v3", JSON.stringify(emailGroups), 1800); } catch (e) {} 
  return emailGroups;
}

function getCachedServiceTypeMap(ss) {
  const cache = CacheService.getScriptCache();
  const cached = cache.get("service_type_map_v3");
  if (cached) {
    try { return JSON.parse(cached); } catch (e) {}
  }
  const map = {};
  const dvGenSheet = ss.getSheetByName("dvGen");
  if (dvGenSheet) {
    const lastRow = dvGenSheet.getLastRow();
    if (lastRow >= 2) {
      const data = dvGenSheet.getRange(2, 1, lastRow - 1, 2).getValues();
      data.forEach(row => {
        const svcType = String(row[0]).trim().toUpperCase();
        const category = String(row[1]).trim().toUpperCase();
        if (svcType) map[svcType] = category;
      });
    }
  }
  try { cache.put("service_type_map_v3", JSON.stringify(map), 1800); } catch (e) {}
  return map;
}

function processRBG_TK_Sheet(targetRowNumber, existingSs) {
  const ss = existingSs || SpreadsheetApp.openById(SHEET_ID_SERVICES);
  const sheet = ss.getSheetByName(DESTINATION_TAB);
  if (!sheet) return;

  const EMAIL_GROUPS = getCachedRecipientList(ss);
  const STATUS_EMAIL_FAILED = "Email Failed - Quota";

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const normalizedHeaders = headers.map(h => String(h).trim().toUpperCase());

  function getColIdx(fieldName) {
    const aliases = HEADER_ALIAS_MAP[fieldName] || [fieldName];
    for (const alias of aliases) {
      const idx = normalizedHeaders.indexOf(alias.toUpperCase());
      if (idx !== -1) return idx;
    }
    return -1;
  }

  const COL = {
    "Email Status": getColIdx("Email Status"),
    "NOA REF#": getColIdx("NOA REF#"),
    "NOA Request Timestamp": getColIdx("NOA Request Timestamp"),
    "Requested By": getColIdx("Requested By"),
    "PROPERTY": getColIdx("PROPERTY"),
    "PAYOR COMPANY": getColIdx("PAYOR COMPANY"),
    "CONTRACTOR COMPANY NAME": getColIdx("CONTRACTOR COMPANY NAME"),
    "SERVICE TYPE": getColIdx("SERVICE TYPE"),
    "KIND OF NOA": getColIdx("KIND OF NOA"),
    "Copy of Released NOA": getColIdx("Copy of Released NOA"),
    "Additional Mailing List of PROC": getColIdx("Additional Mailing List of PROC"),
    "NEW or REVISED": getColIdx("NEW or REVISED"),
    "Re-uploaded NOA Ref#": getColIdx("Re-uploaded NOA Ref#"),
    "PRF NO": getColIdx("PRF NO"),
    "Adtl Identifier": getColIdx("Adtl Identifier"),
    "Ref# of Main/ Mother Contract": getColIdx("Ref# of Main/ Mother Contract"),
    "START DATE": getColIdx("START DATE"),
    "END DATE": getColIdx("END DATE")
  };

  const rawRow = sheet.getRange(targetRowNumber, 1, 1, sheet.getLastColumn()).getValues()[0];
  const rowData = {
    "NOA REF#": COL["NOA REF#"] !== -1 && COL["NOA REF#"] < rawRow.length ? rawRow[COL["NOA REF#"]] : "",
    "NOA Request Timestamp": COL["NOA Request Timestamp"] !== -1 && COL["NOA Request Timestamp"] < rawRow.length ? rawRow[COL["NOA Request Timestamp"]] : null,
    "Requested By": COL["Requested By"] !== -1 && COL["Requested By"] < rawRow.length ? rawRow[COL["Requested By"]] : "",
    "PROPERTY": COL["PROPERTY"] !== -1 && COL["PROPERTY"] < rawRow.length ? rawRow[COL["PROPERTY"]] : "",
    "PAYOR COMPANY": COL["PAYOR COMPANY"] !== -1 && COL["PAYOR COMPANY"] < rawRow.length ? rawRow[COL["PAYOR COMPANY"]] : "",
    "CONTRACTOR COMPANY NAME": COL["CONTRACTOR COMPANY NAME"] !== -1 && COL["CONTRACTOR COMPANY NAME"] < rawRow.length ? rawRow[COL["CONTRACTOR COMPANY NAME"]] : "",
    "SERVICE TYPE": COL["SERVICE TYPE"] !== -1 && COL["SERVICE TYPE"] < rawRow.length ? rawRow[COL["SERVICE TYPE"]] : "",
    "KIND OF NOA": COL["KIND OF NOA"] !== -1 && COL["KIND OF NOA"] < rawRow.length ? rawRow[COL["KIND OF NOA"]] : "",
    "Copy of Released NOA": COL["Copy of Released NOA"] !== -1 && COL["Copy of Released NOA"] < rawRow.length ? rawRow[COL["Copy of Released NOA"]] : "",
    "Additional Mailing List of PROC": COL["Additional Mailing List of PROC"] !== -1 && COL["Additional Mailing List of PROC"] < rawRow.length ? rawRow[COL["Additional Mailing List of PROC"]] : "",
    "NEW or REVISED": COL["NEW or REVISED"] !== -1 && COL["NEW or REVISED"] < rawRow.length ? rawRow[COL["NEW or REVISED"]] : "",
    "Re-uploaded NOA Ref#": COL["Re-uploaded NOA Ref#"] !== -1 && COL["Re-uploaded NOA Ref#"] < rawRow.length ? rawRow[COL["Re-uploaded NOA Ref#"]] : "",
    "PRF NO": COL["PRF NO"] !== -1 && COL["PRF NO"] < rawRow.length ? rawRow[COL["PRF NO"]] : "",
    "Adtl Identifier": COL["Adtl Identifier"] !== -1 && COL["Adtl Identifier"] < rawRow.length ? rawRow[COL["Adtl Identifier"]] : "",
    "Ref# of Main/ Mother Contract": COL["Ref# of Main/ Mother Contract"] !== -1 && COL["Ref# of Main/ Mother Contract"] < rawRow.length ? rawRow[COL["Ref# of Main/ Mother Contract"]] : "",
    "START DATE": COL["START DATE"] !== -1 && COL["START DATE"] < rawRow.length ? rawRow[COL["START DATE"]] : "",
    "END DATE": COL["END DATE"] !== -1 && COL["END DATE"] < rawRow.length ? rawRow[COL["END DATE"]] : ""
  };

  const serviceTypeMap = getCachedServiceTypeMap(ss);
  const tz = Session.getScriptTimeZone();

  const state = rowData["NEW or REVISED"] ? String(rowData["NEW or REVISED"]).trim().toUpperCase() : "NEW";
  const resolvedRef = state === "REVISED" ? rowData["Re-uploaded NOA Ref#"] : rowData["NOA REF#"];
  const noaRef = resolvedRef ? String(resolvedRef).trim() : "";
  const timestampRaw = rowData["NOA Request Timestamp"];
  const timestamp = safeFormatDate(timestampRaw, tz, "MMMM dd, yyyy");
  const submitterEmail = String(rowData["Requested By"] || "").trim();
  const property = rowData["PROPERTY"] || "";
  const payor = rowData["PAYOR COMPANY"] || "";
  const agency = rowData["CONTRACTOR COMPANY NAME"] || "";
  const serviceType = rowData["SERVICE TYPE"] || "";
  const kindOfNoa = rowData["KIND OF NOA"] || "";
  const uploadedNoaLink = rowData["Copy of Released NOA"] || "";
  const additionalEmails = rowData["Additional Mailing List of PROC"] || "";
  const newOrRevised = rowData["NEW or REVISED"] || "";
  const reUploadedRef = rowData["Re-uploaded NOA Ref#"] || "";
  const prfNo = rowData["PRF NO"] || "";
  const adtlIdentifier = rowData["Adtl Identifier"] || "";
  const motherContractRef = rowData["Ref# of Main/ Mother Contract"] || "";

  const startDate = safeFormatDate(rowData["START DATE"], tz, "MMMM dd, yyyy");
  const endDate = safeFormatDate(rowData["END DATE"], tz, "MMMM dd, yyyy");

  const allRecipientEmails = [];
  if (EMAIL_GROUPS["COG"]) allRecipientEmails.push(...EMAIL_GROUPS["COG"]);
  if (EMAIL_GROUPS["PROC"]) allRecipientEmails.push(...EMAIL_GROUPS["PROC"]);
  if (EMAIL_GROUPS["RBGTK"]) allRecipientEmails.push(...EMAIL_GROUPS["RBGTK"]);

  const currentServiceTypeUpper = serviceType ? String(serviceType).trim().toUpperCase() : "";
  
  let serviceCategory = serviceTypeMap[currentServiceTypeUpper] || "";
  if (!serviceCategory) {
    if (currentServiceTypeUpper === "FM") serviceCategory = "FM";
    if (currentServiceTypeUpper === "ADMIN") serviceCategory = "ADMIN";
  }

  if (serviceCategory === "FM") {
    if (EMAIL_GROUPS["FM"]) {
      allRecipientEmails.push(...EMAIL_GROUPS["FM"]);
    }
  } else {
    const propertyUpper = property ? String(property).trim().toUpperCase() : "";
    if (propertyUpper && EMAIL_GROUPS[propertyUpper]) {
      allRecipientEmails.push(...EMAIL_GROUPS[propertyUpper]);
    }
  }

  const additionalEmailsList = additionalEmails ? String(additionalEmails).split(",").map(e => e.trim()).filter(String) : [];

  let to = "";
  let ccList = [];

  if (submitterEmail) {
    to = submitterEmail;
    ccList = [...allRecipientEmails, ...additionalEmailsList];
  } else if (allRecipientEmails.length > 0) {
    to = allRecipientEmails[0];
    ccList = [...allRecipientEmails.slice(1), ...additionalEmailsList];
  } else if (additionalEmailsList.length > 0) {
    to = additionalEmailsList[0];
    ccList = additionalEmailsList.slice(1);
  }

  const cleanCcList = [...new Set(ccList)].filter(email => email.toLowerCase() !== to.toLowerCase());
  const cc = cleanCcList.join(",");

  const isFM = serviceCategory === "FM";
  const initialEmailIntro = isFM 
      ? `Dear FM heads,<br><br>A new Notice of Award (NOA) has been uploaded by Procurement and is now waiting for your review and approval.<br><br>See the details below:`
      : `Dear Property Admin,<br><br>A new Notice of Award (NOA) has been uploaded by Procurement and is now available for use in requesting the Contract/LOA.`;

  const portalLink = isFM
      ? "https://script.google.com/a/macros/megaworld-lifestyle.com/s/AKfycbwLljyNMwFBJ0UuPkJYINrn1oppE98tKuuEmiAI5eToTkOILrMqNI3MxSzByT0vrKIR/exec"
      : "https://script.google.com/a/macros/megaworld-lifestyle.com/s/AKfycbwLljyNMwFBJ0UuPkJYINrn1oppE98tKuuEmiAI5eToTkOILrMqNI3MxSzByT0vrKIR/exec";

  // Action section tailored for FM vs. Admin (Access Submitted NOA removed for both)
  const actionSection = isFM ? `
    <table style="width: 100%; text-align: center; margin-top: 20px; margin-bottom: 20px;">
      <tr>
        <td style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0 0 10px 0; font-size: 15px; color: #166534; font-weight: bold;">Action Required: FM Review</p>
          
          <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 12px 15px; border-radius: 6px; margin: 15px 0; text-align: left; font-size: 13px; color: #92400e; line-height: 1.5;">
            <strong>Note:</strong> Please copy the <strong>NOA REF: ${noaRef || "N/A"}</strong> and search it in the <strong>"PENDING"</strong> section.
          </div>
          
          <a href="${portalLink}" target="_blank" style="background-color: #10b981; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; font-size: 14px;">FM Review</a>
        </td>
      </tr>
    </table>
  ` : `
    <table style="width: 100%; text-align: center; margin-top: 20px; margin-bottom: 20px;">
      <tr>
        <td style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0 0 10px 0; font-size: 15px; color: #166534; font-weight: bold;">Action Required: Request Contract / LOA</p>
          
          <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 12px 15px; border-radius: 6px; margin: 15px 0; text-align: left; font-size: 13px; color: #92400e; line-height: 1.5;">
            <strong>Note:</strong> Please copy the <strong>NOA REF: ${noaRef || "N/A"}</strong> and search it in your property portal in the section of <strong>"NOA PENDING CONTRACT/LOA REQUEST"</strong>.
          </div>
          
          <a href="${portalLink}" target="_blank" style="background-color: #10b981; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; font-size: 14px;">Request Contract / LOA</a>
        </td>
      </tr>
    </table>
  `;

  const subject = `PM & OCS NOA Ref No. ${noaRef || "New Submission"}`;
  const body = `<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;"><div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><div style="background-color: #f59e0b; color: #ffffff; padding: 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;"><h2 style="margin: 0;">PM & OCS - NOA Submission</h2></div><div style="padding: 20px;"><p style="font-size: 14px; color: #333333; line-height: 1.5;">${initialEmailIntro}</p><h3 style="color: #333; border-bottom: 2px solid #eeeeee; padding-bottom: 5px;">NOA Details</h3><table style="width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom:20px;"><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold; width: 40%;">Timestamp:</td><td style="padding: 8px; border: 1px solid #ddd;">${timestamp}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">NOA REF:</td><td style="padding: 8px; border: 1px solid #ddd;">${noaRef || "N/A"}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Requested By:</td><td style="padding: 8px; border: 1px solid #ddd;">${submitterEmail}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">NEW or REVISED:</td><td style="padding: 8px; border: 1px solid #ddd;">${newOrRevised}</td></tr>${reUploadedRef ? `<tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Re-uploaded NOA Ref#:</td><td style="padding: 8px; border: 1px solid #ddd;">${reUploadedRef}</td></tr>` : ""}<tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Property:</td><td style="padding: 8px; border: 1px solid #ddd;">${property}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Payor Company:</td><td style="padding: 8px; border: 1px solid #ddd;">${payor}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Contractor Name:</td><td style="padding: 8px; border: 1px solid #ddd;">${agency}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Service Type:</td><td style="padding: 8px; border: 1px solid #ddd;">${serviceType}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">PRF No:</td><td style="padding: 8px; border: 1px solid #ddd;">${prfNo || "N/A"}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Adtl Identifier:</td><td style="padding: 8px; border: 1px solid #ddd;">${adtlIdentifier || "N/A"}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Ref# of Main/ Mother Contract:</td><td style="padding: 8px; border: 1px solid #ddd;">${motherContractRef || "N/A"}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Start Date:</td><td style="padding: 8px; border: 1px solid #ddd;">${startDate || "N/A"}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">End Date:</td><td style="padding: 8px; border: 1px solid #ddd;">${endDate || "N/A"}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Kind of NOA:</td><td style="padding: 8px; border: 1px solid #ddd;">${kindOfNoa}</td></tr><tr><td style="padding: 8px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Additional Mailing List of PROC:</td><td style="padding: 8px; border: 1px solid #ddd;">${additionalEmails || "N/A"}</td></tr></table>${actionSection}</div><div style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;"><p style="margin: 0; font-size: 12px; color: #888;">This is a system-generated message. Do not reply.</p></div></div></body>`;
  
  if (to) {
    try {
      GmailApp.sendEmail(to, subject, "", { 
          cc: cc, 
          htmlBody: body,
          name: "PM & Other Contracted Services - System"
      });
    } catch (e) {
      const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      const normalizedCurrent = currentHeaders.map(h => String(h).trim().toUpperCase());
      const emailStatusAliases = HEADER_ALIAS_MAP["Email Status"] || ["Email Status"];
      let emailStatusIndex = -1;
      for (const alias of emailStatusAliases) {
        emailStatusIndex = normalizedCurrent.indexOf(alias.toUpperCase());
        if (emailStatusIndex !== -1) break;
      }
      if (emailStatusIndex !== -1) {
        if (e.message.includes("Service invoked too many times") || e.message.toLowerCase().includes("quota")) {
          sheet.getRange(targetRowNumber, emailStatusIndex + 1).setValue(STATUS_EMAIL_FAILED);
        } else {
          sheet.getRange(targetRowNumber, emailStatusIndex + 1).setValue("Email Failed");
        }
      }
      Logger.log(`Submission Notification Email Error: ${e.message}`);
    }
  }
}

// =================================================================================
// --- MALL CONTRACTED SERVICES REQUEST FORM WORKFLOW ---
// =================================================================================

function saveFormDataToServer(data) {
  const lock = LockService.getScriptLock();
  
  try {
    if (!lock.tryLock(30000)) {
      return { success: false, message: "Database is currently busy. Please try submitting again shortly." };
    }
    
    const validationErrors = validatePayload_(data);
    if (validationErrors.length > 0) {
      return { success: false, message: "Validation error: " + validationErrors.join(" | ") };
    }
    
    const ss = SpreadsheetApp.openById(SHEET_ID_TARGET);
    let sheet = ss.getSheetByName(TAB_NAME_TARGET);
    
    if (!sheet) {
      throw new Error(`The target worksheet tab "${TAB_NAME_TARGET}" could not be found.`);
    }
    
    sheet.getRange(1, 1, 1, CANONICAL_HEADERS.length).setValues([CANONICAL_HEADERS]);
    const headers = CANONICAL_HEADERS;
    
    // Append directly to the absolute end of the sheet, right below the last row with content
    const targetRow = sheet.getLastRow() + 1;
    
   const sowUrl = data.fileSow ? copyGoogleDriveFile_(data.fileSow) : "";
    const slaUrl = data.fileSla ? copyGoogleDriveFile_(data.fileSla) : "";

    // Copy up to 5 previous contract/LOA Google Drive links to ensure script ownership
    let prevContractUrl = "";
    const rawPrevUrls = Array.isArray(data.prevContractDriveUrls) && data.prevContractDriveUrls.length > 0
      ? data.prevContractDriveUrls
      : (data.prevContractDriveUrl ? data.prevContractDriveUrl.split(",").map(u => u.trim()).filter(Boolean) : []);

    if (rawPrevUrls.length > 0) {
      const copiedUrls = rawPrevUrls
        .map(url => {
          try {
            return copyGoogleDriveFile_(url);
          } catch (copyErr) {
            Logger.log(`Failed copying previous contract link (${url}): ${copyErr.message}`);
            return url;
          }
        })
        .filter(Boolean);
      prevContractUrl = copiedUrls.join(", ");
    }
    
    // Verifies if a newly provided NOA link exists and copies it; otherwise, falls back to the existing NOA link
    const noaUrl = (data.fileNoa && data.fileNoa.trim() !== "") ? copyGoogleDriveFile_(data.fileNoa) : (data.existingNoaUrl || "");
    const prfUrl = "";

    const contractAmountNum = data.contractAmount ? Number(data.contractAmount) : "";
    const unitsServicingVal = data.unitsServicing ? String(data.unitsServicing).trim() : "";

    const parseDate_ = (dateStr) => {
      if (!dateStr) return "";
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      }
      return dateStr;
    };
    
    const startDateObj = parseDate_(data.startDate);
    const endDateObj = parseDate_(data.endDate);

    const rowValues = new Array(headers.length).fill("");
    const normalizedHeaders = headers.map(h => 
      String(h).replace(/[\s\u00A0]+/g, ' ').trim().toUpperCase()
    );
    
    const dynamicFields = data.dynamicFields || [];

    const fieldMapping = {
      // Columns 1-3 (STATUS OF REQUEST, date drafted, REF#) are explicitly left out to keep them untouched during submit
      "Timestamp": new Date(),
      "Email Address": data.email,
      "Name": data.contactName,
      "Designation & Position:": data.contactDesignation,
      "Contact number": data.contactNumber,
      "Immediate head": data.immediateHead,
      "PROPERTY": data.property,
      "PAYOR": data.payor,
      "FULL COMPANY NAME OF SUPPLIER\n(Ensure that the spelling is correct)": data.supplierName,
      "KIND OF SERVICE": data.kindOfService,
      "KIND OF CONTRACT": data.kindOfContract,
      "Is the supplier the same as the previous contract, or has it changed? ": "",
      "Start date": startDateObj,
      "End date": endDateObj,
      "Number of Units for Servicing - Indicate specs and brand if any": unitsServicingVal,
      "Frequency of Service\n(Daily, Weekly, Monthly, Quarterly, Yearly) If others, please specify eg. twice a month etc.": data.frequencyOfService,
      "Specific Location/s of Units for Service": data.specificLocations,
      "Classification of Location/Covered Area within the property": "",
      "Contract Amount (Vat Inc.)": contractAmountNum,
      "Classify which group handles this type of service": "",
      "If others , please specify ": "",
      "Upload the template of your previous contract (must be in .docx format). ": "",
      "Upload the notarized/signed previous contract/LOA. ": prevContractUrl,
      "Upload the Notice of Award (NOA) based on the bid titled \"\"NOA-bid\"\" issued by the Procurement Department.\n\nEnsure that the details in the NOA are correct.": noaUrl,
      "What is the Purchase Requisition Form (PRF) number? ": "",
      "Fully signed Purchase Requisition Form (PRF)": prfUrl,
      "Upload the Editable file of the Scope of Work attached (SOW) in the NOA. Include other stipulated agreements that are not indicated in the NOA if any.": sowUrl,
      "Upload the Editable file of the Service Level Agreement (SLA) agreed by MCD and the service provider. Include other stipulated agreements that are not indicated in the NOA if any. This is required so we can incorporate it in the Main Legal Contract.": slaUrl,
      "Attach the Management Approval Memo- approved/signed up to GMC": "",
      "Upload the approved NOA of the previous contract for extension": "",
      "Attach the copy of the previous contract that you will extend (for reference)": "",
      "Previous Contract  Start Date": "",
      "Previous Contract End Date": "",
      "Supplier Information: (For the database)\n\nFull office address:": data.supplierAddress,
      "Supplier Information: (For the database)\n\nAuthorized Signatory:": data.authSignatory,
      "Supplier Information: (For the database)\n\nDesignation of  Authorized Signatory:": data.authSignatoryDesignation,
      "Supplier Information: (For the database)\n\nTIN No. of Authorized Signatory:": data.authSignatoryTin,
      "STATUS OF DRAFT": "",
      "VAT Status": data.vatStatus,
      "NOA Reference Number": data.noaRef,
      "Contract Reference Number": data.contractRef,
      "Ref 1": dynamicFields[0] || "",
      "Ref 2": dynamicFields[1] || "",
      "Ref 3": dynamicFields[2] || "",
      "Ref 4": dynamicFields[3] || "",
      "Ref 5": dynamicFields[4] || ""
    };
    
    Object.keys(fieldMapping).forEach(key => {
      const cleanKey = String(key).replace(/[\s\u00A0]+/g, ' ').trim().toUpperCase();
      const colIdx = normalizedHeaders.indexOf(cleanKey);
      if (colIdx !== -1) {
        rowValues[colIdx] = fieldMapping[key];
      }
    });
    
    sheet.getRange(targetRow, 1, 1, rowValues.length).setValues([rowValues]);
    
    // Locate the reference record in the main Services DATABASE tab and update status directly in standard columns
    if (data.noaRef) {
      try {
        const ssServices = SpreadsheetApp.openById(SHEET_ID_SERVICES);
        const dbSheet = ssServices.getSheetByName(DESTINATION_TAB);
        if (dbSheet) {
          const lastRowDb = dbSheet.getLastRow();
          if (lastRowDb >= 2) {
            const lastColDb = dbSheet.getLastColumn();
            const headersDb = dbSheet.getRange(1, 1, 1, lastColDb).getValues()[0];
            const mappingDb = getColumnMapping(headersDb);

            const refColIdx = mappingDb["NOA REF#"];
            const reRefColIdx = mappingDb["Re-uploaded NOA Ref#"];
            const emailStatusColIdx = mappingDb["Email Status"];
            const statusColIdx = mappingDb["Status"];
            const stateColIdx = mappingDb["NEW or REVISED"];
            
            if (refColIdx !== -1) {
              const fullDbValues = dbSheet.getRange(2, 1, lastRowDb - 1, lastColDb).getValues();

              let targetRefClean = String(data.noaRef).replace(/[^0-9]/g, "");
              if (targetRefClean === "" && String(data.noaRef).trim() !== "") {
                targetRefClean = String(data.noaRef).replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
              }

              for (let i = 0; i < fullDbValues.length; i++) {
                const dbRow = fullDbValues[i];
                const dbStateRaw = stateColIdx !== -1 ? dbRow[stateColIdx] : "";
                const dbState = dbStateRaw ? String(dbStateRaw).trim().toUpperCase() : "NEW";

                let dbRef = "";
                if (dbState === "REVISED" && reRefColIdx !== -1) {
                  dbRef = dbRow[reRefColIdx];
                } else if (refColIdx !== -1) {
                  dbRef = dbRow[refColIdx];
                }

                let dbRefClean = String(dbRef).replace(/[^0-9]/g, "");
                if (dbRefClean === "" && String(dbRef).trim() !== "") {
                  dbRefClean = String(dbRef).replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
                }

                if (dbRefClean === targetRefClean && targetRefClean !== "") {
                  // Write the workflow stage to Email Status while safeguarding FM's approval status
                  if (emailStatusColIdx !== -1) {
                    dbSheet.getRange(i + 2, emailStatusColIdx + 1).setValue("Contract request received by COG-CSU");
                  }
                  if (statusColIdx !== -1) {
                    const currentStatus = String(dbSheet.getRange(i + 2, statusColIdx + 1).getValue() || "").trim().toUpperCase();
                    // If already Approved by FM, preserve "Approved"; otherwise set stage
                    if (currentStatus !== "APPROVED") {
                      dbSheet.getRange(i + 2, statusColIdx + 1).setValue("Contract request received by COG-CSU");
                    }
                  }

                  // Append submission entry to Status Tracking while preserving previous milestones
                  const statusTrackingColIdx = mappingDb["Status Tracking"];
                  if (statusTrackingColIdx !== -1) {
                    const trackingCell = dbSheet.getRange(i + 2, statusTrackingColIdx + 1);
                    let currentTrackingValue = String(trackingCell.getValue() || "").trim();
                    
                    const tz = Session.getScriptTimeZone();
                    const formattedNow = safeFormatDate(new Date(), tz, "MMM d, yyyy HH:mm");
                    
                    // Identify whether this is an initial submission or a re-submission
                    const isReSubmission = currentTrackingValue.includes("-Contract Request Submitted");
                    const appendText = isReSubmission 
                      ? `-Contract Request Re-submitted: ${formattedNow}` 
                      : `-Contract Request Submitted: ${formattedNow}`;
                    
                    // Safeguard: Ensure FM Evaluation is preserved if missing from cell
                    const fmTsColIdx = mappingDb["FM Response Timestamp"];
                    const fmTsVal = fmTsColIdx !== -1 ? dbRow[fmTsColIdx] : null;
                    const statusColIdx = mappingDb["Status"];
                    const statusVal = statusColIdx !== -1 ? String(dbRow[statusColIdx] || "").trim() : "Approved";

                    if (!currentTrackingValue.includes("-Evaluated") && fmTsVal) {
                      const formattedFm = safeFormatDate(fmTsVal, tz, "MMM d, yyyy HH:mm");
                      const isApprovedStatus = String(statusVal).trim().toUpperCase().includes("APPROV");
                      const evalLabel = isApprovedStatus ? "Approved NOA by FM" : "Disapproved NOA by FM";
                      const evalLine = `-Evaluated (${evalLabel}): ${formattedFm}`;
                      currentTrackingValue = currentTrackingValue 
                        ? `${currentTrackingValue}\n${evalLine}` 
                        : evalLine;
                    }
                    
                    const newTrackingValue = currentTrackingValue 
                      ? `${currentTrackingValue}\n${appendText}` 
                      : appendText;
                      
                    trackingCell.setValue(newTrackingValue);
                  }
                  break;
                }
              }
            }
          }
        }
      } catch (dbErr) {
        Logger.log("Failed updating status in database sheet during Mall request submit: " + dbErr.message);
      }
    }

    SpreadsheetApp.flush();
    return { success: true };
    
  } catch (error) {
    Logger.log("Form submission failed: " + error.toString());
    return { success: false, message: "Storage failed: " + error.message };
  } finally {
    lock.releaseLock();
  }
}

function validatePayload_(data) {
  const errors = [];
  if (!data) {
    errors.push("No data payload received.");
    return errors;
  }

  const requiredTextFields = {
    email: "Email Address",
    contactName: "Name",
    contactDesignation: "Designation & Position:",
    contactNumber: "Contact Number",
    immediateHead: "Immediate Head",
    property: "Property",
    payor: "Payor",
    supplierName: "FULL COMPANY NAME OF SUPPLIER(Ensure that the spelling is correct)",
    supplierAddress: "Supplier Address",
    authSignatory: "Authorized Signatory",
    authSignatoryDesignation: "Signatory Designation",
    authSignatoryTin: "Signatory TIN",
    kindOfService: "Kind of Service",
    startDate: "Start Date",
    endDate: "End Date",
    frequencyOfService: "Frequency of Service",
    specificLocations: "Specific Locations",
    contractAmount: "Contract Amount",
    vatStatus: "VAT Status",
    kindOfContract: "Kind of Contract"
  };

  for (const [key, label] of Object.entries(requiredTextFields)) {
    if (!data[key] || String(data[key]).trim() === "") {
      errors.push(`"${label}" is missing.`);
    }
  }

  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push("Invalid Email Address format.");
    }
  }

  if (data.contactNumber) {
    if (!/^\d{11}$/.test(String(data.contactNumber).trim())) {
      errors.push("Contact Number must be exactly 11 digits.");
    }
  }

  let startObj, endObj;
  if (data.startDate) {
    const parts = data.startDate.split('-');
    if (parts.length === 3) {
      startObj = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    }
  }
  if (data.endDate) {
    const parts = data.endDate.split('-');
    if (parts.length === 3) {
      endObj = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    }
  }
  if (startObj && endObj && startObj > endObj) {
    errors.push("Start Date must not occur after End Date.");
  }

  if (data.contractAmount !== undefined && data.contractAmount !== null && data.contractAmount !== "") {
    const amt = Number(data.contractAmount);
    if (isNaN(amt) || amt < 0) {
      errors.push("Contract Amount must be a positive number.");
    }
  } else {
    errors.push("Contract Amount is required.");
  }

  if (!data.unitsServicing || String(data.unitsServicing).trim() === "") {
    errors.push('"Number of units (indicate breakdown per kind or per location)" is required.');
  }
  
  // Validate Previous Contract / LOA links ONLY if a link is provided (never require it when NO or "I don't know" is chosen)
  const rawPrevUrls = Array.isArray(data.prevContractDriveUrls) && data.prevContractDriveUrls.length > 0
    ? data.prevContractDriveUrls
    : (data.prevContractDriveUrl ? data.prevContractDriveUrl.split(",").map(u => u.trim()).filter(Boolean) : []);

  if (rawPrevUrls.length > 0) {
    rawPrevUrls.forEach((url, idx) => {
      const parsedId = extractFileIdFromUrl_(url);
      if (!parsedId) {
        errors.push(`Google Drive Link #${idx + 1} for "Previous Contract/LOA" is invalid or does not contain a readable File ID.`);
      }
    });
  }

  const fileKeys = [
    { key: "fileSow", label: "Scope of Work (SOW)" },
    { key: "fileSla", label: "Service Level Agreement (SLA)" }
  ];
  fileKeys.forEach(item => {
    if (!data[item.key] || String(data[item.key]).trim() === "") {
      errors.push(`Google Drive Link associated with "${item.label}" is missing.`);
    } else {
      const parsedId = extractFileIdFromUrl_(data[item.key]);
      if (!parsedId) {
        errors.push(`"${item.label}" must contain a valid, extractable Google Drive File ID.`);
      }
    }
  });

  return errors;
}

/**
 * Copies a Google Drive file using its URL, placing the copy in the FOLDER_ID_ATTACHMENTS folder.
 * This transfers ownership to the script's execution account.
 */
function copyGoogleDriveFile_(driveUrl, destinationFolderId) {
  if (!driveUrl) return "";
  try {
    const fileId = extractFileIdFromUrl_(driveUrl);
    if (!fileId) {
      throw new Error("Invalid URL or File ID from the provided Google Drive link.");
    }
    const originalFile = DriveApp.getFileById(fileId);
    
    // Fallback to FOLDER_ID_ATTACHMENTS if no override destination folder is declared
    const folderId = destinationFolderId || FOLDER_ID_ATTACHMENTS;
    const destinationFolder = DriveApp.getFolderById(folderId);
    
    // Copy the file to the target destination folder
    const copiedFile = originalFile.makeCopy(originalFile.getName(), destinationFolder);
    
    // Adjust sharing settings for wider organizational review visibility
    try {
      copiedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (shareErr) {
      Logger.log("Domain restrictions prevented open sharing adjustments on copied file: " + shareErr.message);
    }
    
    return copiedFile.getUrl();
  } catch (e) {
    Logger.log("Error copying Google Drive file: " + e.toString());
    throw new Error("Failed to copy the provided Google Drive file. Ensure link is shared correctly. Details: " + e.message);
  }
}

/**
 * Extracts the 25+ character Google Drive File ID from shared links.
 */
function extractFileIdFromUrl_(url) {
  if (!url) return null;
  const matches = url.match(/[-\w]{25,}/);
  return matches ? matches[0] : null;
}

function saveFileToDrive_(fileObj) {
  if (!fileObj || !fileObj.data) return "";
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID_ATTACHMENTS);
    const decodedData = Utilities.base64Decode(fileObj.data);
    const blob = Utilities.newBlob(decodedData, fileObj.mimeType, fileObj.name);
    
    const file = folder.createFile(blob);
    
    try {
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (shareErr) {
      Logger.log("Domain restrictions prevented open sharing adjustments: " + shareErr.message);
    }
    
    return file.getUrl();
  } catch (e) {
    Logger.log("Error saving file to Drive: " + e.toString());
    return "Error saving attachment: " + e.message;
  }
}

// =================================================================================
// --- INTEGRATED DROPDOWN DATA RECOVERY SERVICE ---
// =================================================================================

function getDropdownOptions(forceRefresh) {
  const cache = CacheService.getScriptCache();
  
  if (!forceRefresh) {
    const cachedData = cache.getAll(DROPDOWN_CACHE_KEYS_);
    if (
      cachedData.properties_v11 &&
      cachedData.payorCompanies_v11 &&
      cachedData.contractorCompanies_v11 &&
      cachedData.serviceTypes_v11
    ) {
      try {
        return {
          properties: JSON.parse(cachedData.properties_v11),
          payorCompanies: JSON.parse(cachedData.payorCompanies_v11),
          contractorCompanies: JSON.parse(cachedData.contractorCompanies_v11),
          serviceTypes: JSON.parse(cachedData.serviceTypes_v11),
          payors: cachedData.payors_v11 ? JSON.parse(cachedData.payors_v11) : JSON.parse(cachedData.payorCompanies_v11),
          services: cachedData.services_v11 ? JSON.parse(cachedData.services_v11) : JSON.parse(cachedData.serviceTypes_v11),
          propertyPayorMap: cachedData.propertyPayorMap_v11 ? JSON.parse(cachedData.propertyPayorMap_v11) : {},
          supplierDetailsMap: cachedData.supplierDetailsMap_v11 ? JSON.parse(cachedData.supplierDetailsMap_v11) : {},
          holidays: cachedData.holidays_v11 ? JSON.parse(cachedData.holidays_v11) : []
        };
      } catch (e) {
        Logger.log("Failed parsing cached options: " + e.message);
      }
    }
    
    const propertiesSnapshot = readDropdownOptionsFromProperties_();
    if (propertiesSnapshot) {
      writeDropdownOptionsToCache_(propertiesSnapshot);
      return propertiesSnapshot;
    }
  }
  
  const fresh = fetchDropdownOptionsFromSheet_();
  writeDropdownOptionsToCache_(fresh);
  writeDropdownOptionsToProperties_(fresh);
  return fresh;
}

function writeDropdownOptionsToCache_(options) {
  const cache = CacheService.getScriptCache();
  try {
    // Explicitly reset and clear previous cache keys before storing newly fetched data
    cache.removeAll(DROPDOWN_CACHE_KEYS_);
    cache.putAll({
      properties_v11: JSON.stringify(options.properties),
      payorCompanies_v11: JSON.stringify(options.payorCompanies),
      contractorCompanies_v11: JSON.stringify(options.contractorCompanies),
      serviceTypes_v11: JSON.stringify(options.serviceTypes),
      payors_v11: JSON.stringify(options.payors),
      services_v11: JSON.stringify(options.services),
      propertyPayorMap_v11: JSON.stringify(options.propertyPayorMap || {}),
      supplierDetailsMap_v11: JSON.stringify(options.supplierDetailsMap || {}),
      holidays_v11: JSON.stringify(options.holidays || [])
    }, DROPDOWN_CACHE_TTL_SECONDS_);
  } catch (e) {
    Logger.log("Failed writing options to cache: " + e.message);
  }
}

function writeDropdownOptionsToProperties_(options) {
  try {
    const props = PropertiesService.getScriptProperties();
    props.setProperty("snap_properties_v11", JSON.stringify(options.properties));
    props.setProperty("snap_payorCompanies_v11", JSON.stringify(options.payorCompanies));
    props.setProperty("snap_contractorCompanies_v11", JSON.stringify(options.contractorCompanies));
    props.setProperty("snap_serviceTypes_v11", JSON.stringify(options.serviceTypes));
    props.setProperty("snap_payors_v11", JSON.stringify(options.payors));
    props.setProperty("snap_services_v11", JSON.stringify(options.services));
    props.setProperty("snap_propertyPayorMap_v11", JSON.stringify(options.propertyPayorMap || {}));
    props.setProperty("snap_supplierDetailsMap_v11", JSON.stringify(options.supplierDetailsMap || {}));
    props.setProperty("snap_holidays_v11", JSON.stringify(options.holidays || []));
  } catch (e) {
    Logger.log("Failed writing options to script properties: " + e.message);
  }
}

function readDropdownOptionsFromProperties_() {
  try {
    const props = PropertiesService.getScriptProperties();
    const propStr = props.getProperty("snap_properties_v11");
    const payorCompStr = props.getProperty("snap_payorCompanies_v11");
    const contractorCompStr = props.getProperty("snap_contractorCompanies_v11");
    const serviceTypeStr = props.getProperty("snap_serviceTypes_v11");
    const payorStr = props.getProperty("snap_payors_v11");
    const serviceStr = props.getProperty("snap_services_v11");
    const mapStr = props.getProperty("snap_propertyPayorMap_v11");
    const supplierMapStr = props.getProperty("snap_supplierDetailsMap_v11");
    const holidaysStr = props.getProperty("snap_holidays_v11");

    if (!propStr || !payorCompStr || !contractorCompStr || !serviceTypeStr) return null;

    return {
      properties: JSON.parse(propStr),
      payorCompanies: JSON.parse(payorCompStr),
      contractorCompanies: JSON.parse(contractorCompStr),
      serviceTypes: JSON.parse(serviceTypeStr),
      payors: payorStr ? JSON.parse(payorStr) : JSON.parse(payorCompStr),
      services: serviceStr ? JSON.parse(serviceStr) : JSON.parse(serviceTypeStr),
      propertyPayorMap: mapStr ? JSON.parse(mapStr) : {},
      supplierDetailsMap: supplierMapStr ? JSON.parse(supplierMapStr) : {},
      holidays: holidaysStr ? JSON.parse(holidaysStr) : []
    };
  } catch (e) {
    Logger.log("Failed reading options from script properties: " + e.message);
    return null;
  }
}

function getHeaderBoundColumnCount_(sheet, headerRowNumber) {
  const maxPossibleCols = sheet.getLastColumn();
  if (maxPossibleCols === 0) return 0;

  const headerRowValues = sheet.getRange(headerRowNumber, 1, 1, maxPossibleCols).getValues()[0];

  let lastPopulatedIndex = -1;
  for (let i = 0; i < headerRowValues.length; i++) {
    const cellValue = headerRowValues[i];
    if (cellValue !== null && cellValue !== undefined && String(cellValue).trim() !== "") {
      lastPopulatedIndex = i;
    }
  }

  return lastPopulatedIndex + 1; 
}

function readBoundedSheetData_(sheet, headerRowNumber, dataStartRowNumber, requiredMinColumnCount, sheetLabel) {
  const columnCount = sheet.getLastColumn();

  if (columnCount === 0) {
    return [];
  }

  if (columnCount < requiredMinColumnCount) {
    throw new Error(
      `"${sheetLabel}" structure validation mismatch: Has ${columnCount} column(s), but at least ${requiredMinColumnCount} columns are expected.`
    );
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < dataStartRowNumber) {
    return [];
  }

  const rowCount = lastRow - dataStartRowNumber + 1;
  return sheet.getRange(dataStartRowNumber, 1, rowCount, columnCount).getValues();
}

function fetchDropdownOptionsFromSheet_() {
  try {
    const ssPayor = SpreadsheetApp.openById(SHEET_ID_PAYORS);
    const ssSupplier = SpreadsheetApp.openById(SHEET_ID_SUPPLIERS);

    const payorSheet = ssPayor.getSheetByName('dvPayorCompany');
    const supplierSheet = ssSupplier.getSheetByName(TAB_NAME_SUPPLIERS);

    if (!payorSheet || !supplierSheet) {
      throw new Error("One or more option list tables are missing from the spreadsheet sheets.");
    }

    // Read up to 6 columns (Index 0 to 5 - Column F) to capture PAYOR COMPANY NAME
    const payorData = readBoundedSheetData_(payorSheet, 2, 3, 6, 'dvPayorCompany');

    // Build the combined "PROP_CODE - PROPERTY_NAME" list (Index 1 (Column B) and Index 2 (Column C) combined)
    const propertiesList = [...new Set(payorData.map(r => r[1] && r[2] ? `${String(r[1]).trim()} - ${String(r[2]).trim()}` : r[2]).filter(Boolean))].sort();
    
    // Standardize Payor list to use PAYOR COMPANY NAME (Index 5 - Column F)
    const payorCompList = [...new Set(payorData.map(r => r[5]).filter(Boolean))].sort();

    // Fetch and Map Section 4 Supplier Details from dvSupplier
    const supplierDetailsMap = {};
    let contractorCompList = [];

    const lastRowSup = supplierSheet.getLastRow();
    const lastColSup = supplierSheet.getLastColumn();

    if (lastRowSup >= 2 && lastColSup > 0) {
      const headerValues = supplierSheet.getRange(1, 1, 1, lastColSup).getValues()[0];
      const supHeaders = headerValues.map(h => String(h).trim().toUpperCase());
      
      const colSupplierName = supHeaders.findIndex(h => h === "SUPPLIER COMPANY NAME" || h.includes("SUPPLIER COMPANY"));
      const colAddress = supHeaders.findIndex(h => h === "CONTRACTOR'S ADDRESS" || h === "CONTRACTOR’S ADDRESS" || h.replace(/[^A-Z]/g, "") === "CONTRACTORSADDRESS" || h.includes("ADDRESS"));
      const colSignatory = supHeaders.findIndex(h => h === "NAME OF SIGNATORY" || (h.includes("SIGNATORY") && !h.includes("TIN") && !h.includes("DESIGNATION")));
      const colDesignation = supHeaders.findIndex(h => h === "DESIGNATION");
      const colTin = supHeaders.findIndex(h => h.includes("TIN"));

      const supData = supplierSheet.getRange(2, 1, lastRowSup - 1, lastColSup).getValues();
      supData.forEach(r => {
        const sName = colSupplierName !== -1 ? String(r[colSupplierName] || "").trim() : "";
        if (sName) {
          supplierDetailsMap[sName] = {
            address: colAddress !== -1 ? String(r[colAddress] || "").trim() : "",
            signatory: colSignatory !== -1 ? String(r[colSignatory] || "").trim() : "",
            designation: colDesignation !== -1 ? String(r[colDesignation] || "").trim() : "",
            tin: colTin !== -1 ? String(r[colTin] || "").trim() : ""
          };
          contractorCompList.push(sName);
        }
      });
      contractorCompList = [...new Set(contractorCompList)].sort();
    }

    // Map unique Payor Company Names to Combined Property Names (PROP_CODE - PROPERTY_NAME)
    const propertyPayorMap = {};
    payorData.forEach(r => {
      const propName = r[1] && r[2] ? `${String(r[1]).trim()} - ${String(r[2]).trim()}` : r[2];
      const payorComp = r[5]; // Index 5 for Column F (PAYOR COMPANY NAME)
      if (propName && payorComp) {
        const cleanProp = String(propName).trim();
        const cleanPayor = String(payorComp).trim();
        if (cleanProp && cleanPayor) {
          if (!propertyPayorMap[cleanProp]) {
            propertyPayorMap[cleanProp] = [];
          }
          if (!propertyPayorMap[cleanProp].includes(cleanPayor)) {
            propertyPayorMap[cleanProp].push(cleanPayor);
          }
        }
      }
    });
    
    const serviceTypeList = ["FM", "Admin"];

 // Fetch Holidays (Dynamically supports MM-DD yearless recurring dates & YYYY-MM-DD)
    const ssAuth = SpreadsheetApp.openById(SHEET_ID_USER_DB);
    const holidaySheet = ssAuth.getSheetByName('HOLIDAYS');
    let holidaysList = [];
    if (holidaySheet) {
      const hLastRow = holidaySheet.getLastRow();
      if (hLastRow >= 1) {
        const hData = holidaySheet.getRange(1, 1, hLastRow, 1).getValues();
        const tz = Session.getScriptTimeZone();
        hData.forEach(row => {
          const val = row[0];
          if (!val) return;

          if (val instanceof Date) {
            // Stores MM-dd so it repeats across all years, plus full date if needed
            holidaysList.push(Utilities.formatDate(val, tz, "MM-dd"));
            holidaysList.push(Utilities.formatDate(val, tz, "yyyy-MM-dd"));
          } else {
            const strVal = String(val).trim();
            // Matches user inputs like "01-01", "1-1", "12/25", or "Jan 1"
            const mmddMatch = strVal.match(/^(\d{1,2})[-/](\d{1,2})$/);
            if (mmddMatch) {
              const mm = mmddMatch[1].padStart(2, '0');
              const dd = mmddMatch[2].padStart(2, '0');
              holidaysList.push(`${mm}-${dd}`);
            } else {
              const parsed = new Date(strVal);
              if (!isNaN(parsed.getTime())) {
                holidaysList.push(Utilities.formatDate(parsed, tz, "MM-dd"));
                if (/^\d{4}/.test(strVal)) {
                  holidaysList.push(Utilities.formatDate(parsed, tz, "yyyy-MM-dd"));
                }
              } else {
                holidaysList.push(strVal);
              }
            }
          }
        });
      }
    }
    holidaysList = [...new Set(holidaysList)];

    return {
      properties: propertiesList,
      payorCompanies: payorCompList,
      contractorCompanies: contractorCompList,
      serviceTypes: serviceTypeList,
      payors: payorCompList,
      services: serviceTypeList,
      registrationProperties: propertiesList,
      propertyPayorMap: propertyPayorMap,
      supplierDetailsMap: supplierDetailsMap,
      holidays: holidaysList
    };
  } catch (e) {
    Logger.log("Critical Error in fetchDropdownOptionsFromSheet_: " + e.message);
    return { 
      properties: [], 
      payorCompanies: [], 
      contractorCompanies: [], 
      serviceTypes: ["FM", "Admin"], 
      payors: [], 
      services: ["FM", "Admin"], 
      registrationProperties: [],
      propertyPayorMap: {},
      supplierDetailsMap: {},
      holidays: []
    };
  }
}
// =================================================================================
// --- CACHE WARMING TRIGGERS & AUTOMATION ---
// =================================================================================

function onMainDropdownSourceEdit(e) {
  handleDropdownSourceEdit_(e, DROPDOWN_WATCHED_SHEETS_MAIN_);
}

function onPayorDropdownSourceEdit(e) {
  handleDropdownSourceEdit_(e, DROPDOWN_WATCHED_SHEETS_PAYOR_);
}

function onUserDBDropdownSourceEdit(e) {
  handleDropdownSourceEdit_(e, ["HOLIDAYS", "PM&OtherContractedServices"]);
}

function handleDropdownSourceEdit_(e, watchedSheetNames) {
  try {
    if (!e || !e.range) return; 
    const editedSheetName = e.range.getSheet().getName();
    if (watchedSheetNames.indexOf(editedSheetName) === -1) return;
    refreshDropdownOptionsCache_();
  } catch (err) {
    Logger.log("onEdit dropdown refresh handler failed: " + err.message);
  }
}

function installTriggerIfMissing_(handlerName, installFn) {
  const alreadyInstalled = ScriptApp.getProjectTriggers().some(
    trigger => trigger.getHandlerFunction() === handlerName
  );
  if (alreadyInstalled) {
    Logger.log(`Trigger for "${handlerName}" already installed; skipping.`);
    return;
  }
  installFn();
  Logger.log(`Trigger for "${handlerName}" installed.`);
}

function createDropdownWarmingTrigger_() {
  installTriggerIfMissing_("refreshDropdownOptionsCache_", () => {
    ScriptApp.newTrigger("refreshDropdownOptionsCache_")
      .timeBased()
      .everyHours(4) 
      .create();
  });
}

function createDropdownSourceEditTriggers_() {
  installTriggerIfMissing_("onMainDropdownSourceEdit", () => {
    ScriptApp.newTrigger("onMainDropdownSourceEdit")
      .forSpreadsheet(SHEET_ID_SERVICES)
      .onEdit()
      .create();
  });

  installTriggerIfMissing_("onPayorDropdownSourceEdit", () => {
    ScriptApp.newTrigger("onPayorDropdownSourceEdit")
      .forSpreadsheet(SHEET_ID_PAYORS)
      .onEdit()
      .create();
  });

  installTriggerIfMissing_("onUserDBDropdownSourceEdit", () => {
    ScriptApp.newTrigger("onUserDBDropdownSourceEdit")
      .forSpreadsheet(SHEET_ID_USER_DB)
      .onEdit()
      .create();
  });
}

function refreshDropdownOptionsCache_() {
  try {
    getDropdownOptions(true);
    Logger.log("Dropdown options cache refreshed successfully.");
  } catch (e) {
    Logger.log("Dropdown options cache refresh failed: " + e.message);
  }
}

function warmDropdownOptionsCache() {
  createDropdownWarmingTrigger_();
  createDropdownSourceEditTriggers_();
  refreshDropdownOptionsCache_();
}

// =================================================================================
// --- BACKEND VALIDATION ENGINE (STANDARD NOA FORM) ---
// =================================================================================

function getPayloadValue_(formData, key) {
  if (!formData) return "";
  if (formData[key] !== undefined && formData[key] !== null && String(formData[key]).trim() !== "") {
    return String(formData[key]).trim();
  }
  
  const aliases = HEADER_ALIAS_MAP[key] || [];
  for (const alias of aliases) {
    if (formData[alias] !== undefined && formData[alias] !== null && String(formData[alias]).trim() !== "") {
      return String(formData[alias]).trim();
    }
  }
  
  const cleanTarget = key.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (const k of Object.keys(formData)) {
    const cleanK = k.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (cleanK === cleanTarget) {
      if (formData[k] !== undefined && formData[k] !== null && String(formData[k]).trim() !== "") {
        return String(formData[k]).trim();
      }
    }
  }

  if (key === "Requested By") {
    const extraAliases = ["Uploaded By", "uploadedBy", "requestedBy", "uploaded_by", "requested_by", "uploader", "requestor", "user_email", "email"];
    for (const ea of extraAliases) {
      if (formData[ea] !== undefined && formData[ea] !== null && String(formData[ea]).trim() !== "") {
        return String(formData[ea]).trim();
      }
    }
  }
  
  return "";
}

function validateFormDataOnBackend(formData) {
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!formData) {
    return { isValid: false, errors: ["Data payload is completely empty."] };
  }

  const requiredFields = [
    { key: 'Requested By', label: 'Requested By' },
    { key: 'PROPERTY', label: 'PROPERTY' },
    { key: 'PAYOR COMPANY', label: 'PAYOR COMPANY' },
    { key: 'CONTRACTOR COMPANY NAME', label: "CONTRACTOR'S NAME" },
    { key: 'SERVICE TYPE', label: 'SERVICE TYPE' },
    { key: 'START DATE', label: 'START DATE' },
    { key: 'END DATE', label: 'END DATE' },
    { key: 'KIND OF NOA', label: 'KIND OF NOA' },
    { key: 'Copy of Released NOA', label: 'Copy of Released NOA' },
    { key: 'Fully Signed PRF', label: 'Fully Signed PRF' }
  ];
  
  for (const req of requiredFields) {
    const val = getPayloadValue_(formData, req.key);
    if (!val) {
      errors.push(`"${req.label}" is required.`);
    } else {
      formData[req.key] = val; // Normalize canonical key in payload
    }
  }
  
  const email = formData['Requested By'] ? String(formData['Requested By']).trim() : '';
  if (email && !emailRegex.test(email)) {
    errors.push('"Requested By" must be a valid email address.');
  }
  
  const newOrRevised = formData['NEW or REVISED'] ? String(formData['NEW or REVISED']).trim().toUpperCase() : '';
  if (newOrRevised === 'REVISED') {
    const refNo = formData['Re-uploaded NOA Ref#'] ? String(formData['Re-uploaded NOA Ref#']).trim() : '';
    if (!refNo || !/^\d{6}$/.test(refNo)) {
      errors.push('"Re-uploaded NOA Ref#" must be exactly 6 digits (e.g., 123456) when status is REVISED.');
    }
  } else {
    formData['Re-uploaded NOA Ref#'] = '';
  }
  
  let startValid = false;
  let endValid = false;
  const startDateRaw = formData['START DATE'] ? String(formData['START DATE']).trim() : '';
  const endDateRaw = formData['END DATE'] ? String(formData['END DATE']).trim() : '';
  
  if (startDateRaw) {
    if (startDateRaw.toLowerCase() === 'based on actual') {
      formData['START DATE'] = 'Based on Actual';
      startValid = true;
    } else if (isValidDateString(startDateRaw)) {
      startValid = true;
    } else {
      errors.push('"START DATE" must be a valid date in YYYY-MM-DD format or exactly "Based on Actual".');
    }
  }
  
  if (endDateRaw) {
    if (isValidDateString(endDateRaw)) {
      endValid = true;
    } else {
      errors.push('"END DATE" must be a valid calendar date in YYYY-MM-DD format.');
    }
  }
  
  if (startValid && endValid && formData['START DATE'] !== 'Based on Actual') {
    const start = new Date(formData['START DATE']);
    const end = new Date(formData['END DATE']);
    if (end < start) {
      errors.push('"END DATE" must be after or equal to "START DATE".');
    }
  }
  
  const addListRaw = formData['Additional Mailing List of PROC'] ? String(formData['Additional Mailing List of PROC']).trim() : '';
  if (addListRaw) {
    const addEmails = addListRaw.split(',').map(e => e.trim()).filter(Boolean);
    const invalidEmails = addEmails.filter(e => !emailRegex.test(e));
    if (invalidEmails.length > 0) {
      errors.push('"Additional Mailing List of PROC" contains one or more invalid email addresses.');
    } else {
      formData['Additional Mailing List of PROC'] = addEmails.join(', ');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

// =================================================================================
// --- APPROVER AUTHENTICATION MODULE ---
// =================================================================================

function validateApproverCredentials(email, password) {
  var targetUsername = (email || '').trim().toLowerCase();
  var targetPassword = (password || '').toString(); 
  
  var spreadsheetId = '1dBO8ThI7FEKb24D9sPVWokfXLuWUx5aCQvisrT9wBvI';
  var sheetName = 'PM&OtherContractedServices';
  
  try {
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      return { success: false, message: 'Authorization database path mismatch.' };
    }
    
    var lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return { success: false, message: 'Credential collection is currently empty.' };
    }
    
    // Fetch 6 columns to retrieve CATEGORY (col E, index 4) and STATUS (col F, index 5)
    var data = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
    
    for (var i = 0; i < data.length; i++) {
      var dbUsername = (data[i][0] || '').toString().trim().toLowerCase();
      var dbPassword = (data[i][1] || '').toString(); 
      var dbCategory = (data[i][4] || '').toString().trim().toUpperCase();
      var dbStatus = (data[i][5] || '').toString().trim().toUpperCase();
      
      if (dbUsername === targetUsername && dbPassword === targetPassword) {
        // Enforce active approval status checks
        if (dbStatus && dbStatus !== 'APPROVED') {
          return { success: false, message: 'Your account is currently ' + dbStatus + '. Access requires administrator approval.' };
        }
        
        // Enforce Category constraint: block login if the user belongs to 'PROPERTY' or any other category except 'FM'
        if (dbCategory !== 'FM') {
          return { success: false, message: 'Access Denied: Only accounts categorized under FM are authorized to log in as approvers.' };
        }
        
        return { success: true, message: 'Authentication successful.' };
      }
    }
    
    return { success: false, message: 'Invalid email address or validation password.' };
    
  } catch (error) {
    return { success: false, message: 'Authorization Service Exception: ' + error.message };
  }
}

// =================================================================================
// --- SPREADSHEET TO FRONTEND DIRECTORY EXPORTER ---
// =================================================================================

function getSheetData() {
  try {
    const spreadsheetId = SHEET_ID_SERVICES;
    const sheetName = DESTINATION_TAB;
    
    const ss = SpreadsheetApp.openById(spreadsheetId);
    if (!ss) {
      return { success: false, error: 'Could not access spreadsheet. Please check its sharing settings.' };
    }

    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      return { success: false, error: `Sheet tab "${sheetName}" was not found in the spreadsheet.` };
    }

    const maxCols = sheet.getMaxColumns();
    const row1Values = sheet.getRange(1, 1, 1, maxCols).getDisplayValues()[0];

    let lastHeaderColIndex = 0;
    for (let i = row1Values.length - 1; i >= 0; i--) {
      if (row1Values[i].trim() !== '') {
        lastHeaderColIndex = i + 1;
        break;
      }
    }

    const numRows = sheet.getLastRow();
    if (numRows === 0 || lastHeaderColIndex === 0) {
      return { success: true, headers: [], rows: [], embeddedDropdownOptionsJson: "{}" };
    }

    const data = sheet.getRange(1, 1, numRows, lastHeaderColIndex).getDisplayValues();

    const headers = [];
    data[0].forEach((h, index) => {
      const label = String(h).trim();
      if (label !== '') {
        headers.push({
          key: `col_${index}`, 
          label: label,        
          index: index         
        });
      }
    });

    const rows = data.slice(1).map((row, rowIndex) => {
      const rowObj = { id: rowIndex + 1 };
      headers.forEach(h => {
        rowObj[h.key] = row[h.index] !== undefined ? row[h.index] : '';
      });
      return rowObj;
    }).filter(rowObj => {
      // Check if at least one column (excluding 'id') contains populated text
      return headers.some(h => String(rowObj[h.key]).trim() !== '');
    });

    const dropdownOptions = getColumnDropdowns(sheet, headers, lastHeaderColIndex);

    // Check Form Responses 1 in Target Spreadsheet for multi-round submissions, rejections, and pre-fill cache
    let cogRejectedRefs = [];
    let cogRejectedDetails = {};
    let cogHistory = {}; 
    let previousContractRequests = {}; 

    try {
      const ssTarget = SpreadsheetApp.openById(SHEET_ID_TARGET);
      const targetSheet = ssTarget.getSheetByName(TAB_NAME_TARGET);
      if (targetSheet) {
        const lastRowTarget = targetSheet.getLastRow();
        const lastColTarget = targetSheet.getLastColumn();
        if (lastRowTarget >= 2 && lastColTarget > 0) {
          const rawTargetHeaders = targetSheet.getRange(1, 1, 1, lastColTarget).getValues()[0];
          const targetHeaders = rawTargetHeaders.map(h => String(h).replace(/[\s\u00A0]+/g, ' ').trim().toUpperCase());
          
          const getCol = (name) => targetHeaders.indexOf(name.replace(/[\s\u00A0]+/g, ' ').trim().toUpperCase());
          
          const colNoaRef = getCol("NOA REFERENCE NUMBER");
          const colRefNum = getCol("REF#");
          const colTimestamp = getCol("TIMESTAMP");
          const tz = Session.getScriptTimeZone();
          
          if (colNoaRef !== -1) {
            const targetData = targetSheet.getRange(2, 1, lastRowTarget - 1, lastColTarget).getValues();
            
            targetData.forEach(r => {
              const noaRefVal = String(r[colNoaRef] || "").trim();
              const refStatusVal = colRefNum !== -1 ? String(r[colRefNum] || "").trim().toUpperCase() : "";
              if (noaRefVal) {
                const digits = noaRefVal.replace(/[^0-9]/g, "");
                const cleanKey = (digits.length >= 5) ? digits : noaRefVal.replace(/[^A-Z0-9]/g, "").toUpperCase();
                
                const reasonVal = String(r[0] !== undefined && r[0] !== null ? r[0] : "").trim();
                const rawDateVal = r[1];
                
                let formattedDate = "";
                if (rawDateVal) {
                  if (rawDateVal instanceof Date) {
                    formattedDate = safeFormatDate(rawDateVal, tz, "MMM d, yyyy HH:mm");
                  } else {
                    const parsedD = new Date(rawDateVal);
                    formattedDate = !isNaN(parsedD.getTime()) ? safeFormatDate(parsedD, tz, "MMM d, yyyy HH:mm") : safeFormatDate(rawDateVal, tz, "MMM d, yyyy HH:mm");
                  }
                }

                const rawReqTs = colTimestamp !== -1 ? r[colTimestamp] : r[3];
                const formattedReqDate = rawReqTs ? safeFormatDate(rawReqTs, tz, "MMM d, yyyy HH:mm") : "";

                if (!cogHistory[cleanKey]) {
                  cogHistory[cleanKey] = [];
                }

                cogHistory[cleanKey].push({
                  requestDate: formattedReqDate,
                  status: refStatusVal,
                  reason: reasonVal,
                  date: formattedDate
                });

                // Cache previous entry values for this NOA Reference
                previousContractRequests[cleanKey] = {
                  email: getCol("EMAIL ADDRESS") !== -1 ? String(r[getCol("EMAIL ADDRESS")] || "").trim() : "",
                  contactName: getCol("NAME") !== -1 ? String(r[getCol("NAME")] || "").trim() : "",
                  contactDesignation: getCol("DESIGNATION & POSITION:") !== -1 ? String(r[getCol("DESIGNATION & POSITION:")] || "").trim() : "",
                  contactNumber: getCol("CONTACT NUMBER") !== -1 ? String(r[getCol("CONTACT NUMBER")] || "").trim() : "",
                  immediateHead: getCol("IMMEDIATE HEAD") !== -1 ? String(r[getCol("IMMEDIATE HEAD")] || "").trim() : "",
                  property: getCol("PROPERTY") !== -1 ? String(r[getCol("PROPERTY")] || "").trim() : "",
                  payor: getCol("PAYOR") !== -1 ? String(r[getCol("PAYOR")] || "").trim() : "",
                  supplierName: getCol("FULL COMPANY NAME OF SUPPLIER (ENSURE THAT THE SPELLING IS CORRECT)") !== -1 ? String(r[getCol("FULL COMPANY NAME OF SUPPLIER (ENSURE THAT THE SPELLING IS CORRECT)")] || "").trim() : "",
                  kindOfService: getCol("KIND OF SERVICE") !== -1 ? String(r[getCol("KIND OF SERVICE")] || "").trim() : "",
                  kindOfContract: getCol("KIND OF CONTRACT") !== -1 ? String(r[getCol("KIND OF CONTRACT")] || "").trim() : "",
                  startDate: getCol("START DATE") !== -1 && r[getCol("START DATE")] ? safeFormatDate(r[getCol("START DATE")], tz, "yyyy-MM-dd") : "",
                  endDate: getCol("END DATE") !== -1 && r[getCol("END DATE")] ? safeFormatDate(r[getCol("END DATE")], tz, "yyyy-MM-dd") : "",
                  unitsServicing: getCol("NUMBER OF UNITS FOR SERVICING - INDICATE SPECS AND BRAND IF ANY") !== -1 ? String(r[getCol("NUMBER OF UNITS FOR SERVICING - INDICATE SPECS AND BRAND IF ANY")] || "").trim() : "",
                  frequencyOfService: getCol("FREQUENCY OF SERVICE (DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY) IF OTHERS, PLEASE SPECIFY EG. TWICE A MONTH ETC.") !== -1 ? String(r[getCol("FREQUENCY OF SERVICE (DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY) IF OTHERS, PLEASE SPECIFY EG. TWICE A MONTH ETC.")] || "").trim() : "",
                  specificLocations: getCol("SPECIFIC LOCATION/S OF UNITS FOR SERVICE") !== -1 ? String(r[getCol("SPECIFIC LOCATION/S OF UNITS FOR SERVICE")] || "").trim() : "",
                  contractAmount: getCol("CONTRACT AMOUNT (VAT INC.)") !== -1 && r[getCol("CONTRACT AMOUNT (VAT INC.)")] !== "" ? String(r[getCol("CONTRACT AMOUNT (VAT INC.)")]) : "",
                  vatStatus: getCol("VAT STATUS") !== -1 ? String(r[getCol("VAT STATUS")] || "").trim() : "",
                  sowUrl: getCol("UPLOAD THE EDITABLE FILE OF THE SCOPE OF WORK ATTACHED (SOW) IN THE NOA. INCLUDE OTHER STIPULATED AGREEMENTS THAT ARE NOT INDICATED IN THE NOA IF ANY.") !== -1 ? String(r[getCol("UPLOAD THE EDITABLE FILE OF THE SCOPE OF WORK ATTACHED (SOW) IN THE NOA. INCLUDE OTHER STIPULATED AGREEMENTS THAT ARE NOT INDICATED IN THE NOA IF ANY.")] || "").trim() : "",
                  slaUrl: getCol("UPLOAD THE EDITABLE FILE OF THE SERVICE LEVEL AGREEMENT (SLA) AGREED BY MCD AND THE SERVICE PROVIDER. INCLUDE OTHER STIPULATED AGREEMENTS THAT ARE NOT INDICATED IN THE NOA IF ANY. THIS IS REQUIRED SO WE CAN INCORPORATE IT IN THE MAIN LEGAL CONTRACT.") !== -1 ? String(r[getCol("UPLOAD THE EDITABLE FILE OF THE SERVICE LEVEL AGREEMENT (SLA) AGREED BY MCD AND THE SERVICE PROVIDER. INCLUDE OTHER STIPULATED AGREEMENTS THAT ARE NOT INDICATED IN THE NOA IF ANY. THIS IS REQUIRED SO WE CAN INCORPORATE IT IN THE MAIN LEGAL CONTRACT.")] || "").trim() : "",
                  supplierAddress: getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) FULL OFFICE ADDRESS:") !== -1 ? String(r[getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) FULL OFFICE ADDRESS:")] || "").trim() : "",
                  authSignatory: getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) AUTHORIZED SIGNATORY:") !== -1 ? String(r[getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) AUTHORIZED SIGNATORY:")] || "").trim() : "",
                  authSignatoryDesignation: getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) DESIGNATION OF AUTHORIZED SIGNATORY:") !== -1 ? String(r[getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) DESIGNATION OF AUTHORIZED SIGNATORY:")] || "").trim() : "",
                    authSignatoryTin: getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) TIN NO. OF AUTHORIZED SIGNATORY:") !== -1 ? String(r[getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) TIN NO. OF AUTHORIZED SIGNATORY:")] || "").trim() : "",
                  contractRef: getCol("CONTRACT REFERENCE NUMBER") !== -1 ? String(r[getCol("CONTRACT REFERENCE NUMBER")] || "").trim() : "",
                  prevContractLinks: getCol("UPLOAD THE NOTARIZED/SIGNED PREVIOUS CONTRACT/LOA. ") !== -1 ? String(r[getCol("UPLOAD THE NOTARIZED/SIGNED PREVIOUS CONTRACT/LOA. ")] || "").trim() : "",
                  ref1: getCol("REF 1") !== -1 ? String(r[getCol("REF 1")] || "").trim() : "",
                  ref2: getCol("REF 2") !== -1 ? String(r[getCol("REF 2")] || "").trim() : "",
                  ref3: getCol("REF 3") !== -1 ? String(r[getCol("REF 3")] || "").trim() : "",
                  ref4: getCol("REF 4") !== -1 ? String(r[getCol("REF 4")] || "").trim() : "",
                  ref5: getCol("REF 5") !== -1 ? String(r[getCol("REF 5")] || "").trim() : ""
                };
              }
            });

            for (const cleanKey in cogHistory) {
              const events = cogHistory[cleanKey];
              if (events && events.length > 0) {
                const latest = events[events.length - 1];
                if (latest.status === "REJECT" || latest.status === "REJECTED") {
                  cogRejectedRefs.push(cleanKey);
                }
                cogRejectedDetails[cleanKey] = {
                  reason: latest.reason,
                  date: latest.date,
                  requestDate: latest.requestDate
                };
              }
            }
          }
        }
      }
    } catch (e) {
      Logger.log("Error reading Form Responses 1 for COG history: " + e.message);
    }

    return { 
      success: true, 
      headers: headers, 
      rows: rows,
      embeddedDropdownOptionsJson: JSON.stringify(dropdownOptions),
      cogRejectedRefs: cogRejectedRefs,
      cogRejectedDetails: cogRejectedDetails,
      cogHistory: cogHistory,
      previousContractRequests: previousContractRequests
    };

  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return { 
      success: false, 
      error: error.message || String(error) 
    };
  }
}

/**
 * Standalone direct fetch for previous contract request submission details by NOA Reference
 */
function fetchPreviousContractRequest(noaRef) {
  if (!noaRef) return { success: false, message: "NOA Reference is missing" };
  try {
    const ssTarget = SpreadsheetApp.openById(SHEET_ID_TARGET);
    const targetSheet = ssTarget.getSheetByName(TAB_NAME_TARGET);
    if (!targetSheet) return { success: false, message: "Target sheet not found" };
    
    const lastRow = targetSheet.getLastRow();
    const lastCol = targetSheet.getLastColumn();
    if (lastRow < 2 || lastCol === 0) return { success: false, message: "No data in sheet" };

    const rawHeaders = targetSheet.getRange(1, 1, 1, lastCol).getValues()[0];
    const headers = rawHeaders.map(h => String(h).replace(/[\s\u00A0]+/g, ' ').trim().toUpperCase());
    const getCol = (name) => headers.indexOf(name.replace(/[\s\u00A0]+/g, ' ').trim().toUpperCase());

    const colNoaRef = getCol("NOA REFERENCE NUMBER");
    if (colNoaRef === -1) return { success: false, message: "NOA Reference column not found" };

    const data = targetSheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
    const digits = String(noaRef).replace(/[^0-9]/g, "");
    const targetKey = (digits.length >= 5) ? digits : String(noaRef).trim().replace(/[^A-Z0-9]/g, "").toUpperCase();

    let matched = null;
    const tz = Session.getScriptTimeZone();

    for (let i = 0; i < data.length; i++) {
      const r = data[i];
      const rRef = String(r[colNoaRef] || "").trim();
      const rDigits = rRef.replace(/[^0-9]/g, "");
      const rKey = (rDigits.length >= 5) ? rDigits : rRef.replace(/[^A-Z0-9]/g, "").toUpperCase();

      if (rKey === targetKey && targetKey !== "") {
        matched = {
          email: getCol("EMAIL ADDRESS") !== -1 ? String(r[getCol("EMAIL ADDRESS")] || "").trim() : "",
          contactName: getCol("NAME") !== -1 ? String(r[getCol("NAME")] || "").trim() : "",
          contactDesignation: getCol("DESIGNATION & POSITION:") !== -1 ? String(r[getCol("DESIGNATION & POSITION:")] || "").trim() : "",
          contactNumber: getCol("CONTACT NUMBER") !== -1 ? String(r[getCol("CONTACT NUMBER")] || "").trim() : "",
          immediateHead: getCol("IMMEDIATE HEAD") !== -1 ? String(r[getCol("IMMEDIATE HEAD")] || "").trim() : "",
          property: getCol("PROPERTY") !== -1 ? String(r[getCol("PROPERTY")] || "").trim() : "",
          payor: getCol("PAYOR") !== -1 ? String(r[getCol("PAYOR")] || "").trim() : "",
          supplierName: getCol("FULL COMPANY NAME OF SUPPLIER (ENSURE THAT THE SPELLING IS CORRECT)") !== -1 ? String(r[getCol("FULL COMPANY NAME OF SUPPLIER (ENSURE THAT THE SPELLING IS CORRECT)")] || "").trim() : "",
          kindOfService: getCol("KIND OF SERVICE") !== -1 ? String(r[getCol("KIND OF SERVICE")] || "").trim() : "",
          kindOfContract: getCol("KIND OF CONTRACT") !== -1 ? String(r[getCol("KIND OF CONTRACT")] || "").trim() : "",
          startDate: getCol("START DATE") !== -1 && r[getCol("START DATE")] ? safeFormatDate(r[getCol("START DATE")], tz, "yyyy-MM-dd") : "",
          endDate: getCol("END DATE") !== -1 && r[getCol("END DATE")] ? safeFormatDate(r[getCol("END DATE")], tz, "yyyy-MM-dd") : "",
          unitsServicing: getCol("NUMBER OF UNITS FOR SERVICING - INDICATE SPECS AND BRAND IF ANY") !== -1 ? String(r[getCol("NUMBER OF UNITS FOR SERVICING - INDICATE SPECS AND BRAND IF ANY")] || "").trim() : "",
          frequencyOfService: getCol("FREQUENCY OF SERVICE (DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY) IF OTHERS, PLEASE SPECIFY EG. TWICE A MONTH ETC.") !== -1 ? String(r[getCol("FREQUENCY OF SERVICE (DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY) IF OTHERS, PLEASE SPECIFY EG. TWICE A MONTH ETC.")] || "").trim() : "",
          specificLocations: getCol("SPECIFIC LOCATION/S OF UNITS FOR SERVICE") !== -1 ? String(r[getCol("SPECIFIC LOCATION/S OF UNITS FOR SERVICE")] || "").trim() : "",
          contractAmount: getCol("CONTRACT AMOUNT (VAT INC.)") !== -1 && r[getCol("CONTRACT AMOUNT (VAT INC.)")] !== "" ? String(r[getCol("CONTRACT AMOUNT (VAT INC.)")]) : "",
          vatStatus: getCol("VAT STATUS") !== -1 ? String(r[getCol("VAT STATUS")] || "").trim() : "",
          sowUrl: getCol("UPLOAD THE EDITABLE FILE OF THE SCOPE OF WORK ATTACHED (SOW) IN THE NOA. INCLUDE OTHER STIPULATED AGREEMENTS THAT ARE NOT INDICATED IN THE NOA IF ANY.") !== -1 ? String(r[getCol("UPLOAD THE EDITABLE FILE OF THE SCOPE OF WORK ATTACHED (SOW) IN THE NOA. INCLUDE OTHER STIPULATED AGREEMENTS THAT ARE NOT INDICATED IN THE NOA IF ANY.")] || "").trim() : "",
          slaUrl: getCol("UPLOAD THE EDITABLE FILE OF THE SERVICE LEVEL AGREEMENT (SLA) AGREED BY MCD AND THE SERVICE PROVIDER. INCLUDE OTHER STIPULATED AGREEMENTS THAT ARE NOT INDICATED IN THE NOA IF ANY. THIS IS REQUIRED SO WE CAN INCORPORATE IT IN THE MAIN LEGAL CONTRACT.") !== -1 ? String(r[getCol("UPLOAD THE EDITABLE FILE OF THE SERVICE LEVEL AGREEMENT (SLA) AGREED BY MCD AND THE SERVICE PROVIDER. INCLUDE OTHER STIPULATED AGREEMENTS THAT ARE NOT INDICATED IN THE NOA IF ANY. THIS IS REQUIRED SO WE CAN INCORPORATE IT IN THE MAIN LEGAL CONTRACT.")] || "").trim() : "",
          supplierAddress: getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) FULL OFFICE ADDRESS:") !== -1 ? String(r[getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) FULL OFFICE ADDRESS:")] || "").trim() : "",
          authSignatory: getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) AUTHORIZED SIGNATORY:") !== -1 ? String(r[getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) AUTHORIZED SIGNATORY:")] || "").trim() : "",
          authSignatoryDesignation: getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) DESIGNATION OF AUTHORIZED SIGNATORY:") !== -1 ? String(r[getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) DESIGNATION OF AUTHORIZED SIGNATORY:")] || "").trim() : "",
          authSignatoryTin: getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) TIN NO. OF AUTHORIZED SIGNATORY:") !== -1 ? String(r[getCol("SUPPLIER INFORMATION: (FOR THE DATABASE) TIN NO. OF AUTHORIZED SIGNATORY:")] || "").trim() : "",
          contractRef: getCol("CONTRACT REFERENCE NUMBER") !== -1 ? String(r[getCol("CONTRACT REFERENCE NUMBER")] || "").trim() : "",
          ref1: getCol("REF 1") !== -1 ? String(r[getCol("REF 1")] || "").trim() : "",
          ref2: getCol("REF 2") !== -1 ? String(r[getCol("REF 2")] || "").trim() : "",
          ref3: getCol("REF 3") !== -1 ? String(r[getCol("REF 3")] || "").trim() : "",
          ref4: getCol("REF 4") !== -1 ? String(r[getCol("REF 4")] || "").trim() : "",
          ref5: getCol("REF 5") !== -1 ? String(r[getCol("REF 5")] || "").trim() : ""
        };
      }
    }

    if (matched) {
      return { success: true, data: matched };
    }
    return { success: false, message: "No previous request found" };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

function getColumnDropdowns(sheet, headers, lastHeaderColIndex) {
  const dropdowns = {};
  if (headers.length === 0) return dropdowns;

  const range = sheet.getRange(2, 1, 1, lastHeaderColIndex);
  const validations = range.getDataValidations();

  if (!validations || validations.length === 0) return dropdowns;

  headers.forEach(h => {
    const rule = validations[0][h.index];
    if (!rule) return;

    const criteriaType = rule.getCriteriaType();

    if (criteriaType === SpreadsheetApp.DataValidationCriteria.VALUE_IN_LIST) {
      const values = rule.getCriteriaValues()[0];
      if (Array.isArray(values)) {
        dropdowns[h.key] = values; 
      }
    } 
    else if (criteriaType === SpreadsheetApp.DataValidationCriteria.VALUE_IN_RANGE) {
      const rangeRef = rule.getCriteriaValues()[0];
      if (rangeRef) {
        try {
          const values = rangeRef.getDisplayValues().map(row => row[0]).filter(Boolean);
          dropdowns[h.key] = values;
        } catch (e) {
          console.warn(`Could not extract validation range for column: ${h.label}. error: ${e.message}`);
        }
      }
    }
  });

  return dropdowns;
}

// =================================================================================
// --- SHEET ADMINISTRATION & INITIAL TESTING ---
// =================================================================================

function forceAuthorization() {
  Logger.log("=== FORCING SCRIPT AUTHORIZATION ===");
  try {
    var rootFolder = DriveApp.getRootFolder();
    Logger.log("1. Google Drive Permission: GRANTED (Found Root: " + rootFolder.getName() + ")");
  } catch (driveError) {
    Logger.log("1. Google Drive Permission: ERROR -> " + driveError.message);
  }
  
  try {
    var testSpreadsheet = SpreadsheetApp.openById(SHEET_ID_TARGET);
    Logger.log("2. Google Sheets Permission: GRANTED (Found Sheet: " + testSpreadsheet.getName() + ")");
  } catch (sheetsError) {
    Logger.log("2. Google Sheets Permission: ERROR -> " + sheetsError.message);
  }
  Logger.log("=== AUTHORIZATION SEQUENCE COMPLETED ===");
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Contract Form Tools')
    .addItem('Setup Cache Warming Triggers', 'warmDropdownOptionsCache')
    .addItem('Authorize & Test Connections', 'authorizeAndTest')
    .addToUi();
}

function authorizeAndTest() {
  Logger.log("--- Starting Authorization and Connection Test ---");
  try {
    const ssPayor = SpreadsheetApp.openById(SHEET_ID_PAYORS);
    const sheet1 = ssPayor.getSheetByName('dvPayorCompany');
    if (sheet1) {
      Logger.log("SUCCESS: Connected to 'dvPayorCompany'. Rows: " + sheet1.getLastRow());
    }
  } catch (err) {
    Logger.log("ERROR connecting to Payor Spreadsheet: " + err.toString());
  }
  try {
    const ssMain = SpreadsheetApp.openById(SHEET_ID_SERVICES);
    const sheet2 = ssMain.getSheetByName('dvGen');
    if (sheet2) {
      Logger.log("SUCCESS: Connected to 'dvGen'. Rows: " + sheet2.getLastRow());
    }
  } catch (err) {
    Logger.log("ERROR connecting to Main services Spreadsheet: " + err.toString());
  }
  try {
    const sst = SpreadsheetApp.openById(SHEET_ID_TARGET);
    const sheett = sst.getSheetByName(TAB_NAME_TARGET);
    if (sheett) {
      Logger.log("SUCCESS: Connected to Target Database '" + TAB_NAME_TARGET + "'. Rows: " + sheett.getLastRow());
    }
  } catch (err) {
    Logger.log("ERROR connecting to Target Database Sheet: " + err.toString());
  }
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID_ATTACHMENTS);
    if (folder) {
      Logger.log("SUCCESS: Connected to Mall attachments folder. Name: " + folder.getName());
    }
  } catch (err) {
    Logger.log("ERROR connecting to Mall attachments folder: " + err.toString());
  }
  Logger.log("--- Connection Test Completed ---");
}

// =================================================================================
// --- CONTRACTED SERVICES DIRECTORY PORTAL SERVICE FUNCTIONS ---
// =================================================================================

/**
 * Validates credentials and checks for approved status inside PM&OtherContractedServices sheet.
 */
function loginDirectoryUser(email, password) {
  try {
    email = String(email).trim().toLowerCase();
    password = String(password).trim();
    
    const ss = SpreadsheetApp.openById('1dBO8ThI7FEKb24D9sPVWokfXLuWUx5aCQvisrT9wBvI');
    const sheet = ss.getSheetByName('PM&OtherContractedServices');
    if (!sheet) {
      return { success: false, message: 'User database tab does not exist.' };
    }
    
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return { success: false, message: 'Invalid credentials or inactive account.' };
    }
    
    const data = sheet.getRange(2, 1, lastRow - 1, 9).getValues();
    for (let i = 0; i < data.length; i++) {
      const dbUsername = String(data[i][0]).trim().toLowerCase();
      const dbPassword = String(data[i][1]).toString();
      const dbFullname = String(data[i][2]).trim();
      const dbProperty = String(data[i][3]).trim();
      const dbCategory = String(data[i][4]).trim();
      const dbStatus = String(data[i][5]).trim().toUpperCase();
      const dbDesignation = String(data[i][6] || '').trim();
      const dbContactNumber = String(data[i][7] || '').trim();
      const dbImmediateHead = String(data[i][8] || '').trim();
      
      if (dbUsername === email && dbPassword === password) {
        if (dbStatus !== 'APPROVED') {
          return { success: false, message: `Your account status is currently ${dbStatus}. Access requires administrator approval.` };
        }
        return {
          success: true,
          username: dbUsername,
          fullname: dbFullname,
          property: dbProperty,
          category: dbCategory,
          designation: dbDesignation,
          contactNumber: dbContactNumber,
          immediateHead: dbImmediateHead
        };
      }
    }
    return { success: false, message: 'Invalid email address or password.' };
  } catch (e) {
    return { success: false, message: 'Service Error: ' + e.message };
  }
}

function registerDirectoryAccount(email, password, fullname, propertyList, category, designation, contactNumber, immediateHead) {
  const lock = LockService.getScriptLock();
  try {
    if (!lock.tryLock(30000)) {
      return { success: false, message: 'User database is currently busy. Please try again later.' };
    }
    
    email = String(email).trim().toLowerCase();
    password = String(password).trim();
    fullname = String(fullname).trim();
    propertyList = String(propertyList).trim();
    category = String(category).trim().toUpperCase();
    designation = String(designation || '').trim();
    contactNumber = String(contactNumber || '').trim();
    immediateHead = String(immediateHead || '').trim();
    
    if (!email || !password || !fullname || !propertyList || !category || !designation || !contactNumber || !immediateHead) {
      return { success: false, message: 'Please fulfill all required fields.' };
    }

    // Backend validation: Verify that submitted properties exist in official dropdown options
    const dropdownData = getDropdownOptions();
    const validPropsList = (dropdownData.registrationProperties || dropdownData.properties || []).map(p => String(p).toLowerCase().trim());
    
    if (validPropsList.length > 0) {
      const submittedProps = propertyList.split(',').map(p => p.trim()).filter(Boolean);
      const invalidList = submittedProps.filter(p => !validPropsList.includes(p.toLowerCase()));
      
      if (invalidList.length > 0) {
        return { 
          success: false, 
          message: 'Registration rejected: The following property does not exist in the official list: ' + invalidList.join(', ') 
        };
      }
    }
    
    const ss = SpreadsheetApp.openById('1dBO8ThI7FEKb24D9sPVWokfXLuWUx5aCQvisrT9wBvI');
    let sheet = ss.getSheetByName('PM&OtherContractedServices');
    if (!sheet) {
      sheet = ss.insertSheet('PM&OtherContractedServices');
    }
    // Automatically enforce 9 column structure
    sheet.getRange(1, 1, 1, 9).setValues([['USERNAME', 'PASSWORD', 'FULLNAME', 'PROPERTY', 'CATEGORY', 'STATUS', 'Designation & Position:', 'CONTACT_NUMBER', 'IMMEDIATE_HEAD']]);
    
    const lastRow = sheet.getLastRow();
    
    if (lastRow >= 2) {
      const usernames = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
      if (usernames.some(u => String(u).trim().toLowerCase() === email)) {
        return { success: false, message: 'An account with this email address already exists.' };
      }
    }
    
    const newRow = [email, password, fullname, propertyList, category, 'PENDING', designation, contactNumber, immediateHead];
    sheet.getRange(lastRow + 1, 1, 1, 9).setValues([newRow]);
    
    SpreadsheetApp.flush();
    return { success: true, message: 'Account registered successfully. Your access is currently pending administrator activation.' };
  } catch (e) {
    return { success: false, message: 'Registration failed: ' + e.message };
  } finally {
    lock.releaseLock();
  }
}
/**
 * Generates and stores a 6-digit numeric validation code valid for 15 minutes in CacheService.
 */
function sendPasswordResetCode(email) {
  try {
    email = String(email).trim().toLowerCase();
    
    const ss = SpreadsheetApp.openById('1dBO8ThI7FEKb24D9sPVWokfXLuWUx5aCQvisrT9wBvI');
    const sheet = ss.getSheetByName('PM&OtherContractedServices');
    if (!sheet) {
      return { success: false, message: 'User database was not found.' };
    }
    
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return { success: false, message: 'Provided email address could not be identified.' };
    }
    
    const data = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
    let emailFound = false;
    for (let i = 0; i < data.length; i++) {
      if (String(data[i][0]).trim().toLowerCase() === email) {
        emailFound = true;
        break;
      }
    }
    
    if (!emailFound) {
      return { success: false, message: 'Provided email address could not be identified.' };
    }
    
    // Generate code and store in CacheService (15 minutes limit)
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const cache = CacheService.getScriptCache();
    cache.put(`reset_code_${email}`, code, 900);
    
    // Format and send notification email
    const subject = "Verification Code for Password Reset";
    const body = `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 25px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #fafafa;">
        <h3 style="color: #4f46e5; text-align: center; margin-top: 0;">Password Reset Verification</h3>
        <p style="color: #3f3f46; font-size: 14px;">We received a request to update your login password. Provide the following 6-digit verification code inside the portal window:</p>
        <div style="background-color: #ffffff; border: 1px solid #e4e4e7; padding: 15px; text-align: center; font-size: 26px; font-weight: 700; letter-spacing: 6px; color: #18181b; border-radius: 8px; margin: 20px 0;">
          ${code}
        </div>
        <p style="color: #71717a; font-size: 12px; text-align: center; margin-bottom: 0;">This security code will expire in exactly 15 minutes. If you did not initiate this request, your current login details will remain secure.</p>
      </div>
    `;
    
    GmailApp.sendEmail(email, subject, "", {
      htmlBody: body,
      name: "Contracted Services Directory Admin"
    });
    
    return { success: true, message: 'A verification code has been dispatched to your email address.' };
  } catch (e) {
    return { success: false, message: 'Failed to initiate verification: ' + e.message };
  }
}

/**
 * Validates temporary verification code from cache and overwrites user password.
 */
function verifyAndResetPassword(email, code, newPassword) {
  try {
    email = String(email).trim().toLowerCase();
    code = String(code).trim();
    newPassword = String(newPassword).trim();
    
    if (!newPassword) {
      return { success: false, message: 'Password parameter cannot be empty.' };
    }
    
    const cache = CacheService.getScriptCache();
    const storedCode = cache.get(`reset_code_${email}`);
    
    if (!storedCode) {
      return { success: false, message: 'The verification code has expired. Please request a new one.' };
    }
    
    if (storedCode !== code) {
      return { success: false, message: 'The verification code provided is incorrect.' };
    }
    
    const ss = SpreadsheetApp.openById('1dBO8ThI7FEKb24D9sPVWokfXLuWUx5aCQvisrT9wBvI');
    const sheet = ss.getSheetByName('PM&OtherContractedServices');
    if (!sheet) {
      return { success: false, message: 'User database was not found.' };
    }
    
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return { success: false, message: 'User could not be found.' };
    }
    
    const data = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
    let targetRowIndex = -1;
    for (let i = 0; i < data.length; i++) {
      if (String(data[i][0]).trim().toLowerCase() === email) {
        targetRowIndex = i + 2;
        break;
      }
    }
    
    if (targetRowIndex === -1) {
      return { success: false, message: 'User record mismatch.' };
    }
    
    // Column B corresponds to user PASSWORD field
    sheet.getRange(targetRowIndex, 2).setValue(newPassword);
    cache.remove(`reset_code_${email}`);
    
    return { success: true, message: 'Password updated successfully. You can now log in.' };
  } catch (e) {
    return { success: false, message: 'Error updating security credentials: ' + e.message };
  }
}


function retroactiveCleanupStatusTracking() {
  const ss = SpreadsheetApp.openById(SHEET_ID_SERVICES);
  const sheet = ss.getSheetByName(DESTINATION_TAB);
  if (!sheet) return;
  
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  if (lastRow < 2) return;
  
  const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  const mapping = getColumnMapping(headers);
  
  const releaseTsCol = mapping["NOA Request Timestamp"];
  const responseTsCol = mapping["FM Response Timestamp"];
  const statusCol = mapping["Status"];
  const trackingCol = mapping["Status Tracking"];
  const activeTsCol = mapping["Active Timestamp"];
  
  if (trackingCol === -1) return;
  
  const tz = Session.getScriptTimeZone();
  const range = sheet.getRange(2, 1, lastRow - 1, lastCol);
  const values = range.getValues();
  
  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    const releaseTs = row[releaseTsCol];
    const responseTs = row[responseTsCol];
    const status = row[statusCol];
    
    if (releaseTs) {
      const formattedStart = safeFormatDate(releaseTs, tz, "MMM d, yyyy HH:mm");
      let trackingText = `-Uploaded by PROC: ${formattedStart}`;
      let activeTimestamp = releaseTs;
      
      if (responseTs && status) {
        const isApprovedStatus = status.trim().toUpperCase() === "APPROVED";
        const evalLabel = isApprovedStatus ? "Approved NOA by FM" : "Disapproved NOA by FM";
        const formattedEnd = safeFormatDate(responseTs, tz, "MMM d, yyyy HH:mm");
        trackingText += `\n-Evaluated (${evalLabel}): ${formattedEnd}`;
        if (isApprovedStatus) {
          activeTimestamp = responseTs;
        }
      }
      const rowIndex = i + 2;
      sheet.getRange(rowIndex, trackingCol + 1).setValue(trackingText);
      if (activeTsCol !== -1) {
        sheet.getRange(rowIndex, activeTsCol + 1).setValue(activeTimestamp);
      }
    }
  }
  SpreadsheetApp.flush();
}

/**
 * Direct lookup function that searches dvSupplier in Spreadsheet 18h8JdpBFRT8wGtOS_d3cirKeu-EI4bTZX5eXpENkmGw
 * by matching "SUPPLIER COMPANY NAME" and returning Address, Signatory, Designation, and TIN.
 */
function fetchSupplierDetailsByName(supplierName) {
  if (!supplierName) return { success: false, message: "Supplier name is empty." };
  try {
    const ssSupplier = SpreadsheetApp.openById(SHEET_ID_SUPPLIERS);
    const supplierSheet = ssSupplier.getSheetByName(TAB_NAME_SUPPLIERS);
    if (!supplierSheet) return { success: false, message: "dvSupplier tab not found." };

    const lastRow = supplierSheet.getLastRow();
    const lastCol = supplierSheet.getLastColumn();
    if (lastRow < 2 || lastCol === 0) return { success: false, message: "dvSupplier tab has no data." };

    const headers = supplierSheet.getRange(1, 1, 1, lastCol).getValues()[0].map(h => String(h).trim().toUpperCase());
    
    // Resilient header matching handles curly quotes, colons, or minor spacing differences
    const colSupplierName = headers.findIndex(h => h === "SUPPLIER COMPANY NAME" || h.includes("SUPPLIER COMPANY"));
    const colAddress = headers.findIndex(h => h === "CONTRACTOR'S ADDRESS" || h === "CONTRACTOR’S ADDRESS" || h.replace(/[^A-Z]/g, "") === "CONTRACTORSADDRESS" || h.includes("ADDRESS"));
    const colSignatory = headers.findIndex(h => h === "NAME OF SIGNATORY" || (h.includes("SIGNATORY") && !h.includes("TIN") && !h.includes("DESIGNATION")));
    const colDesignation = headers.findIndex(h => h === "DESIGNATION");
    const colTin = headers.findIndex(h => h.includes("TIN"));

    if (colSupplierName === -1) return { success: false, message: "SUPPLIER COMPANY NAME column missing." };

    const cleanTarget = String(supplierName).trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    const data = supplierSheet.getRange(2, 1, lastRow - 1, lastCol).getValues();

    // 1. Exact normalized match
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const rawName = String(row[colSupplierName] || "").trim();
      const cleanName = rawName.toLowerCase().replace(/[^a-z0-9]/g, "");

      if (cleanName === cleanTarget && cleanTarget !== "") {
        return {
          success: true,
          details: {
            name: rawName,
            address: colAddress !== -1 ? String(row[colAddress] || "").trim() : "",
            signatory: colSignatory !== -1 ? String(row[colSignatory] || "").trim() : "",
            designation: colDesignation !== -1 ? String(row[colDesignation] || "").trim() : "",
            tin: colTin !== -1 ? String(row[colTin] || "").trim() : ""
          }
        };
      }
    }

    // 2. Fuzzy substring match (fallback)
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const rawName = String(row[colSupplierName] || "").trim();
      const cleanName = rawName.toLowerCase().replace(/[^a-z0-9]/g, "");

      if (cleanTarget && (cleanName.includes(cleanTarget) || cleanTarget.includes(cleanName))) {
        return {
          success: true,
          details: {
            name: rawName,
            address: colAddress !== -1 ? String(row[colAddress] || "").trim() : "",
            signatory: colSignatory !== -1 ? String(row[colSignatory] || "").trim() : "",
            designation: colDesignation !== -1 ? String(row[colDesignation] || "").trim() : "",
            tin: colTin !== -1 ? String(row[colTin] || "").trim() : ""
          }
        };
      }
    }

    return { success: false, message: "No matching supplier record found." };
  } catch (e) {
    return { success: false, message: e.message };
  }
}
