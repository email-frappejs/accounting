const BaseList = require('frappejs/client/view/list');
const frappe = require('frappejs');
const BaseForm = require('frappejs/client/view/form');
//const receiver = require('../../../email/receiver'); 

module.exports = { EmailButton: class EmailButtons extends BaseList{
    constructor({doctype, parent, fields, page}) {
        super({doctype: 'Email', parent: parent, fields: fields, page: page});
    }
    
     makeToolbar() {
        this.makeSearch();

        this.btnCompose = this.page.addButton(frappe._('Compose'), 'btn-primary', async () => {
            await frappe.router.setRoute('new', this.doctype);
        });

         this.btnSync = this.page.addButton(frappe._('Sync'), 'btn-primary', async () => {
            //receiver();
            //console.log("Here");
            await this.refresh();
        });


        this.btnDelete = this.page.addButton(frappe._('Delete'), 'btn-secondary hide', async () => {
            await frappe.db.deleteMany(this.doctype, this.getCheckedRowNames());
            await this.refresh();
        });

      
        this.btnReport = this.page.addButton(frappe._('Report'), 'btn-outline-secondary hide', async () => {
            await frappe.router.setRoute('table', this.doctype);
        });

        this.on('state-change', () => {
            const checkedCount = this.getCheckedRowNames().length;
            this.btnDelete.classList.toggle('hide', checkedCount ? false : true);
            this.btnCompose.classList.toggle('hide', checkedCount ? true : false);
            this.btnReport.classList.toggle('hide', checkedCount ? true : false);
        });

        this.page.body.addEventListener('click', (event) => {
            if(event.target.classList.contains('checkbox')) {
                this.trigger('state-change');
            }
        })
    }
},
                  
SendButton:  class SendButton extends BaseForm{
    constructor({doctype, parent, submit_label='Submit', container, meta, inline=false}) {
        super({doctype: 'EmailManage', parent: parent, container: container});
    }

    makeSendButton() {
        this.sendButton = this.container.addButton(frappe._("Send"), 'primary', async (event) => {})};

    makeToolbar() {

        this.makeSendButton();
        Toolbar = super.makeToolbar();
        
        }

    },
}


