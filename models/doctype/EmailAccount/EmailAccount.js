module.exports = {
    "name": "Email Account",
    "doctype": "DocType",
    "isSingle": 0,
    "isChild": 0,
    "keywordFields": [
        "name",
        "email"
    ],
    "fields": [{
            "fieldname": "name",
            "label": "Name",
            "fieldtype": "Data",
            "required": 1
        },
        {
            "fieldname": "email",
            "label": "Email",
            "fieldtype": "Data",
            "required": 1
        },
        {
            "fieldname": "password",
            "label": "Password",
            "fieldtype": "Password",
            "required": 1,
        },
        {
            "fieldname": "enableIncoming",
            "label": "Enable Incoming",
            "fieldtype": "Check",
            "required": 0
        },
        {
            "fieldname": "emailSync",
            "label": "Email Sync ",
            "fieldtype": "Select",
            "options": [
                "ALL",
                "ANSWERED",
                "DELETED",
                "DRAFT",
                "FLAGGED",
                "NEW",
                "SEEN",
                "RECENT",
                "OLD",
                "UNANSWERED",
                "UNDELETED",
                "UNDRAFT",
                "UNFLAGGED",
                "UNSEEN"
            ],
            "default": "UNSEEN",
            "required": 1
        },
        {
            "fieldname": "imapHost",
            "label": "IMAP Host",
            "fieldtype": "Select",
            "options": [
                "imap.gmail.com",
                "imap.mail.yahoo.com"
            ],
            "required": 1
        },
        {
            "fieldname": "imapPort",
            "label": "IMAP Port",
            "fieldtype": "Select",
            "options": [
                "993"
            ],
            "required": 1
        },
        {
            "fieldname": "enableOutgoing",
            "label": "Enable Outgoing",
            "fieldtype": "Check",
            "required": 0
        },
        {
            "fieldname": "smtpHost",
            "label": "SMTP Host",
            "fieldtype": "Select",
            "options": [
                "smtp.gmail.com",
                "smtp.mail.yahoo.com",
            ],
            "required": 1
        },
        {
            "fieldname": "smtpPort",
            "label": "SMTP Port",
            "fieldtype": "Select",
            "options": [
              "465"  
            ],
            "required": 1
        },
        {
            "fieldname": "initialSync",
            "label": "Initial Sync",
            "fieldtype": "Int",
            "default": "50",
            "required": 1
        },
        {
            "fieldname" : "initialDate",
            "label" : "Display mails from",
            "fieldtype" : "Date",
            "required" : 0
        }
               
    ]
}